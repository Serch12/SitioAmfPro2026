<?php

namespace App\Models;

// 1. Importar las clases necesarias
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Notifications\ResetPasswordCustom;

// 2. Extender de Authenticatable en lugar de Model
class AfiliadosLogin extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'afiliados'; // Asegúrate de que apunte a tu tabla
    protected $primaryKey = 'id_afi'; 

    // Si tu llave primaria no es un número autoincremental, cambia esto a false
    public $incrementing = true;

    protected $fillable = [
        'nui',
        'nombre',
        'apellido_pat',
        'apellido_mat',
        'mail',
        'estatus_app',
        'password',
        'firebase_uid'
    ];

    protected $hidden = [
        'password', 
        'remember_token',
    ];

    /**
     * Laravel usa esto internamente para identificar al usuario en la sesión.
     */
    public function getAuthIdentifierName()
    {
        return $this->primaryKey;
    }

    /**
     * IMPORTANTE: Dile a Laravel que el campo de login no es 'email' sino 'mail'
     */
    public function getEmailAttribute()
    {
        return $this->attributes['mail'];
    }

    public function getEmailForPasswordReset()
    {
        return $this->mail;
    }

    public function sendPasswordResetNotification($token)
    {
    $this->notify(new ResetPasswordCustom($token));
    }
}
