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
        $asunto = $this->datosSolicitud['tema']. ' [' . now()->format('d/m/Y H:i:s') . ']';
        
        return $this->from(config('mail.from.address'), '⚠️ Asistencia Jurídica') 
                    ->subject($asunto)
                    ->view('Email.solicitud-juridico');
    }
}