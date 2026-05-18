<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Afiliados;

class NotificacionPerfilEditado extends Mailable
{
    use Queueable, SerializesModels;

    public $afiliado;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Afiliados $afiliado)
    {
        $this->afiliado = $afiliado;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('AMFPRO - Actualización de Perfil: ' . $this->afiliado->nombre . ' ' . $this->afiliado->apellido_pat)
                    ->view('Email.perfil-editado'); // Usaremos la misma carpeta Email que creamos antes
    }
}