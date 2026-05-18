<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Models\AfiliadosLogin;
use Kreait\Firebase\Auth as FirebaseAuth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $auth;
    protected $redirectTo = RouteServiceProvider::HOME;

    public function __construct(FirebaseAuth $auth)
    {
        $this->auth = $auth;    
        $this->middleware('guest')->except('logout');
    }

    public function username()
    {
        return 'mail';
    }

    /**
     * Intentar Login: Primero MySQL, si falla, Firebase y sincroniza.
     */
    protected function attemptLogin(Request $request)
    {
        $email = $request->input('mail');
        $password = $request->input('password');

        // 1. Validar contra MySQL
        if (Auth::guard('web')->attempt(
            ['mail' => $email, 'password' => $password], 
            $request->filled('remember')
        )) {
            return true;
        }

        // 2. Si falla (o no hay pass local), validar contra Firebase
        try {
            $signInResult = $this->auth->signInWithEmailAndPassword($email, $password);

            if ($signInResult) {
                $afiliado = AfiliadosLogin::where('mail', $email)->first();

                if ($afiliado) {
                    // Sincronizar contraseña local y UID
                    $afiliado->update([
                        'password' => Hash::make($password),
                        'firebase_uid' => $signInResult->data()['localId'] ?? $afiliado->firebase_uid
                    ]);

                    Auth::login($afiliado, $request->filled('remember'));
                    return true;
                }
            }
        } catch (\Exception $e) {
            // Error en credenciales de Firebase
        }

        return false;
    }

    protected function sendFailedLoginResponse(Request $request){
        // Recuperamos el NUI del campo oculto que añadiremos en la vista
        $nui = $request->input('nui_hidden');

        return redirect()->route('login') // Forzamos la redirección a la ruta de login
            ->withInput($request->only($this->username(), 'remember'))
            ->withErrors([
                $this->username() => [trans('auth.failed')],
            ])
            ->with([
                'nui_verificado' => $nui, // Esto es lo que mantiene abierto el formulario de password
                'email_afiliado' => $request->input('mail'),
                'modo' => 'login'
            ]);
    }
    
    /**
     * Validación de escenarios del NUI
     */
    public function consultarnui(Request $request)
    {
        $request->validate([
            'nui' => 'required|numeric|digits_between:5,6',
        ]);

        $afiliado = AfiliadosLogin::where('nui', $request->nui)->first();

        // ESCENARIO 4: No existe el NUI
        if (!$afiliado) {
            return redirect()->route('afiliacion')->with([
                'nui_verificado' => $request->nui,
                'modo' => 'registro_completo'
            ]);
        }

        // --- LÓGICA DE RECONOCIMIENTO AUTOMÁTICO DE FIREBASE ---
        if (!empty($afiliado->mail)) {
            try {
                // Si ya tiene pass local, directo al Login
                if (!empty($afiliado->password)) {
                    return redirect()->route('login')->with([
                        'nui_verificado' => $afiliado->nui,
                        'email_afiliado' => $afiliado->mail,
                        'modo' => 'login'
                    ]);
                }

                // Si tiene correo pero NO tiene pass local, consultamos Firebase
                $firebaseUser = $this->auth->getUserByEmail($afiliado->mail);

                if ($firebaseUser) {
                    // Si existe en Firebase, sincronizamos UID y forzamos LOGIN
                    $afiliado->update(['firebase_uid' => $firebaseUser->uid]);

                    return redirect()->route('login')->with([
                        'nui_verificado' => $afiliado->nui,
                        'email_afiliado' => $afiliado->mail,
                        'modo' => 'login',
                        'status' => 'Usuario reconocido. Por favor, introduce tu contraseña para sincronizar tu cuenta.'
                    ]);
                }
            } catch (\Exception $e) {
                // Si no existe en Firebase, el flujo continuará a solo_pass
            }
        }

        // --- ESCENARIOS RESTANTES ---

        $tieneCorreo = !empty($afiliado->mail);
        $tienePass = !empty($afiliado->password);

        // ESCENARIO 2: Existe correo pero no está en Firebase ni tiene pass local
        if ($tieneCorreo && !$tienePass) {
            return redirect()->route('register')->with([
                'nui_verificado' => $afiliado->nui,
                'email_afiliado' => $afiliado->mail,
                'modo' => 'solo_pass'
            ]);
        }

        // ESCENARIO 3: NUI existe pero no tiene correo ni nada (Registro normal)
        return redirect()->route('register')->with([
            'nui_verificado' => $afiliado->nui,
            'modo' => 'registro_normal'
        ]);
    }
}