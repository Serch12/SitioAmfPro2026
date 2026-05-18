<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class AfiliadoRegistradoUsuario extends Mailable
{
    use Queueable, SerializesModels;
    public $afiliado;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($afiliado)
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
        return $this->view('plantillamailafiliado')
        ->subject('Confirmación de registro AMFPro')
                ->with([
                    'afiliado' => $this->afiliado,
                ])
                ->attach(public_path('ArchivosSistema/Afiliados/'.$this->afiliado->nui.'/'.$this->afiliado->pdf))
                ->attach(public_path('ArchivosSistema/Afiliados/'.$this->afiliado->nui.'/'.$this->afiliado->pdf2))
                ->attach(public_path('ArchivosSistema/Afiliados/'.$this->afiliado->nui.'/'.$this->afiliado->foto));
    }
}
