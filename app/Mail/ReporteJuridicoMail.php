<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReporteJuridicoMail extends Mailable
{
    use Queueable, SerializesModels;

    public $datosSolicitud;

    /**
     * Recibimos los datos del controlador
     */
    public function __construct($datosSolicitud)
    {
        $this->datosSolicitud = $datosSolicitud;
    }

    /**
     * Construimos el mensaje y llamamos a la vista
     */
    public function build()
    {
        // Generamos el asunto dinámico
        $asunto = $this->datosSolicitud['tema'];
        
        return $this->from(config('mail.from.address'), '⚠️ Asistencia Jurídica') // <-- Aquí agregamos a Ámbar
                    ->subject($asunto)
                    ->view('Email.solicitud-juridico');
    }
}