<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SolicitudConvenioMail extends Mailable
{
    use Queueable, SerializesModels;

    public $datosSolicitud;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($datosSolicitud)
    {
        $this->datosSolicitud = $datosSolicitud;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(config('mail.from.address'), 'Desarrollo Educativo AMFpro')
                    ->subject('Nueva Solicitud de Beca/Información - ' . $this->datosSolicitud['institucion'])
                    ->view('Email.solicitud-convenio');
    }
}