<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipos extends Model
{
    use HasFactory;
    protected $table='jur_equipos';
    protected $primaryKey = 'id_club';
    protected $fillable= ['id_liga', 'nombre', 'fecha'];
}
