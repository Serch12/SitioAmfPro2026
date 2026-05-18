<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Afiliados extends Authenticatable
{
    use HasFactory;
    protected $table='afiliados';
    protected $primaryKey = 'id_afi';
    protected $fillable= ['nombre', 
                          'apellido_pat', 
                          'apellido_mat', 
                          'apodo',
                          'sexo',
                          'nacionalidad',
                          'origen',
                          'escolaridad',
                          'mail',
                          'edad',
                          'curp',
                          'nacimiento',
                          'fb',
                          'ins',
                          'tw',
                          'calle',
                          'colonia',
                          'estado',
                          'ciudad',
                          'cp',
                          'celular',
                          'telCasa',
                          'division',
                          'club',
                          'categoria',
                          'nui',
                          'posicion',
                          'seleccion',
                          'tipo_seleccion',
                          'estatus',
                          'exfut',
                          'pdf',
                          'pdf2',
                          'foto',
                          'estatus_app',
                          'fec_registro',
                          'fecha',
                          'password',
                          'firebase_uid'];
}
