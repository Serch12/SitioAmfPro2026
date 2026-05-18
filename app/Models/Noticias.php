<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Noticias extends Model
{
    use HasFactory;
    protected $table='dis_comunicados';
    protected $primaryKey = 'id_p';
    protected $fillable= ['ruta','titulo','imagen_p','subtitulo','imagen_s','categoria','informacion','estatus','fecha','fecha_sys'];
}
