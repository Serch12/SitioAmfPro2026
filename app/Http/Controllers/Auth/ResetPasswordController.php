<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Auth\Events\PasswordReset;
use App\Models\AfiliadosLogin; 
use Kreait\Firebase\Auth as FirebaseAuth;

class ResetPasswordController extends Controller
{
    use ResetsPasswords;

    protected $redirectTo = RouteServiceProvider::HOME;
    protected $auth;

    public function __construct(FirebaseAuth $auth)
    {
        $this->auth = $auth;
    }

    protected function rules()
    {
        return [
            'token' => 'required',
            'mail' => 'required|email', // Cambiado de email a mail
            'password' => 'required|confirmed|min:8',
        ];
    }

    /**
     * Sobreescribimos las credenciales para la consulta SQL
     */
    protected function credentials(\Illuminate\Http\Request $request)
    {
        return $request->only(
            'mail', 'password', 'password_confirmation', 'token'
        );
    }

    /**
     * Sobrescribimos el método para manejar la lógica dual
     */
    protected function resetPassword($user, $password)
    {
        // El $user aquí es una instancia de AfiliadosLogin detectada por el token
        $email = $user->mail; 

        // 1. Sincronización con FIREBASE
        try {
            // Intentamos buscarlo en Firebase por el email
            $firebaseUser = $this->auth->getUserByEmail($email);
            
            // Si existe: Actualizamos contraseña y vinculamos el UID por si acaso no estaba
            $this->auth->updateUser($firebaseUser->uid, [
                'password' => $password
            ]);
            
            $user->firebase_uid = $firebaseUser->uid;

        } catch (\Kreait\Firebase\Exception\Auth\UserNotFound $e) {
            // Si NO existe en Firebase: Lo creamos desde cero
            $newFirebaseUser = $this->auth->createUser([
                'email' => $email,
                'password' => $password,
                'displayName' => $user->nombre . ' ' . $user->apellido_pat,
                'emailVerified' => true,
            ]);
            
            // Guardamos el nuevo UID en nuestra base de datos MySQL
            $user->firebase_uid = $newFirebaseUser->uid;
        }

        // 2. Actualización en MySQL (Tabla 'afiliados')
        $user->password = Hash::make($password);
        $user->setRememberToken(Str::random(60));
        
        // Marcamos estatus_app como activo si es necesario
        $user->estatus_app = 1; 
        
        $user->save();

        // Disparamos el evento de Laravel
        event(new PasswordReset($user));

        // Autenticamos al usuario en la sesión de Laravel
        $this->guard()->login($user);
    }
}