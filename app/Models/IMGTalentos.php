<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IMGTalentos extends Model
{
    use HasFactory;
    protected $table='tbl_imgtalentos';
    protected $primaryKey = 'id_img_talento';
    protected $fillable= ['img','estatus_img'];
}
