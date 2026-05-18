<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlantillaJugador extends Model
{
    use HasFactory;
    protected $connection = 'mysql2'; // Conectar a la segunda base de datos
    protected $table='tbl_plantilla_jugador';
    protected $primaryKey = 'id_plantilla';
    protected $fillable= ['id_plantilla','id_torneo','folio', 'nombre','posicion','sexo','edad','categoria', 'estatus'];
}
