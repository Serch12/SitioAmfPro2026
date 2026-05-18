<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Models\Talentos;
use App\Models\IMGTalentos;
use App\Models\JugadoresTalentos;
use App\Models\Torneos;
use App\Models\PlantillaJugador;


class TalentosController extends Controller
{

    /**
     * funcion que busca si existe registro con ese torneo 
     */
    public function torneosAgrupadosYear(){
        return Talentos::where('estatus', 1)
            ->selectRaw("
                year, 
                CONCAT(
                    REPLACE(MIN(categoria), 'Categoria ', ''), 
                    '/', 
                    REPLACE(MAX(categoria), 'Categoria ', '')
                ) as rango_categorias, 
                SUM(num_jugadores) as jugadores_seleccionados,
                COUNT(*) as total_copas
            ")
            ->groupBy('year')
            ->orderBy('year', 'desc')
            ->take(3)     
            ->get()
            ->reverse()     
            ->values();
    }

    /**
     * funcion que busca si existe registro con ese torneo 
     */
    public function filtraTorneo($ano_seleccionado){
        return Talentos::where('year',$ano_seleccionado)->where('estatus',1)->get();
    }

    /**
     * funcion que devulve las imagenes del torneo
     */
    public function imagenesTorneo($id_talento){
        return IMGTalentos::where('talento_id',$id_talento)->get();
    }

    /**
     * funcion que devulve los datos de torneos
     */
    public function datosTorneos(){
        $torneos_experiencia = Talentos::where('estatus',1)->count();
        $total_jugadores = PlantillaJugador::count();
        $total_torneos = Torneos::count();
        return response()->json([
            'total_experiencia' => $torneos_experiencia,
            'total_jugadores' => $total_jugadores,
            'total_torneos' => $total_torneos
        ]);
    }
}
