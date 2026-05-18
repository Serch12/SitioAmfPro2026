<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Torneos extends Model
{
    use HasFactory;
    protected $connection = 'mysql2'; // Conectar a la segunda base de datos
    protected $table='tbl_torneo';
    protected $primaryKey = 'id_torneo';
    protected $fillable= ['id_torneo','creacion', 'torneo','categoria','sede','direccion', 'fecha_inicia','fecha_fin','contacto','estatus'];
}
