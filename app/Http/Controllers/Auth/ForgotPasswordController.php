<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    /**
     * Sobreescribir la validación para usar 'mail' en lugar de 'email'
     */
    protected function validateEmail(Request $request)
    {
        $request->validate(['mail' => 'required|email']);
    }

    /**
     * Sobreescribir las credenciales para que el Password Broker busque la columna 'mail'
     */
    protected function credentials(Request $request)
    {
        return $request->only('mail');
    }
}
