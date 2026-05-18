<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\AfiliadosLogin;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Kreait\Firebase\Auth as FirebaseAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    use RegistersUsers;

    protected $redirectTo = RouteServiceProvider::HOME;
    protected $auth;

    public function __construct(FirebaseAuth $auth)
    {
        $this->auth = $auth;
        $this->middleware('guest');
    }

    /**
     * Modificamos el proceso de registro para interceptar correos existentes
     */
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        $email = $request->email;

        // 1. VALIDACIÓN EN MYSQL: ¿El correo ya existe en nuestra tabla?
        $existeEnMysql = AfiliadosLogin::where('mail', $email)->whereNotNull('password')->exists();
        
        if ($existeEnMysql) {
            return redirect()->route('login')->with([
                'mail' => $email,
                'status' => 'Este correo ya está registrado. Por favor, inicia sesión.'
            ]);
        }

        // 2. VALIDACIÓN EN FIREBASE: ¿El correo ya existe en la nube?
        try {
            $userFirebase = $this->auth->getUserByEmail($email);
            if ($userFirebase) {
                // Si existe en Firebase, lo mandamos al login para que sincronice
                return redirect()->route('login')->with([
                    'mail' => $email,
                    'status' => 'Tu cuenta ya existe. Ingresa tu NUI para sincronizarla.'
                ]);
            }
        } catch (\Kreait\Firebase\Exception\Auth\UserNotFound $e) {
            // El usuario no existe en Firebase, podemos proceder con el registro
        }

        // Si pasó ambas validaciones, procedemos al método create original
        $user = $this->create($request->all());

        Auth::login($user);

        return redirect($this->redirectPath());
    }

    protected function validator(array $data)
    {
        $modo = $data['modo'] ?? 'registro_completo';

        return Validator::make($data, [
            'nui'  => ['required', 'numeric'],
            'modo' => ['required', 'string'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'nombre'           => [$modo == 'registro_completo' ? 'required' : 'nullable'],
            'apellido_paterno' => [$modo == 'registro_completo' ? 'required' : 'nullable'],
            'apellido_materno' => [$modo == 'registro_completo' ? 'required' : 'nullable'],
        ]);
    }

    protected function create(array $data)
    {
        // Este método ahora solo se ejecuta si el correo es realmente nuevo
        $firebaseUser = $this->auth->createUser([
            'email'    => $data['email'],
            'password' => $data['password'],
        ]);

        return AfiliadosLogin::updateOrCreate(
            ['nui' => $data['nui']], 
            [
                'mail'         => $data['email'],
                'password'     => Hash::make($data['password']),
                'firebase_uid' => $firebaseUser->uid,
                'nombre'       => $data['nombre'] ?? null,
                'apellido_pat' => $data['apellido_paterno'] ?? null,
                'apellido_mat' => $data['apellido_materno'] ?? null,
                'estatus_app'  => 1,
            ]
        );
    }
}