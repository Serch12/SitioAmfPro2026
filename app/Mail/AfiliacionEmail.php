<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AfiliacionEmail extends Mailable
{
    use Queueable, SerializesModels;
    // public $subject = "Recordatorio de Reunión "; 

    public $request;
    public $afiliado;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($request,$afiliado)
{
    $this->request = $request;
    $this->afiliado = $afiliado;
}
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('plantillamail')
                ->subject('Nueva afiliación de ' . $this->afiliado->nombre . ' ' . $this->afiliado->apellido_pat)
                ->attach($this->request->file('pdf')->getRealPath(),[
                    'as'=>$this->request->file('pdf')->getClientOriginalName()
                ])
                ->attach($this->request->file('pdf2')->getRealPath(),[
                    'as'=>$this->request->file('pdf2')->getClientOriginalName()
                ])
                ->attach($this->request->file('foto')->getRealPath(),[
                    'as'=>$this->request->file('foto')->getClientOriginalName()
                ]);
    }

}
