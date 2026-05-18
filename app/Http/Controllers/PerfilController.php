<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Afiliados;
use Illuminate\Support\Facades\Mail;
use App\Mail\NotificacionPerfilEditado;

class PerfilController extends Controller
{

    /**
     * funcion que entra al apartado de perfil
     */
    public function perfil(){
        return view('Perfil')->with('evento','');
    }

    /**
     * funcion que retorna los datos del afiliado
     */
    public function datosAfiliado(Request $request){
        $afiliado = Afiliados::where('id_afi',auth()->guard('web')->user()->id_afi)->first();

        if ($afiliado) {
            $afiliado->existecarpetapdf  = \Storage::disk('afiliados')->exists($afiliado->nui . '/' . $afiliado->pdf);
            $afiliado->existecarpetapdf2 = \Storage::disk('afiliados')->exists($afiliado->nui . '/' . $afiliado->pdf2);
            $afiliado->existecarpetafoto = \Storage::disk('afiliados')->exists($afiliado->nui . '/' . $afiliado->foto);
        }
        return response()->json($afiliado);
    }

    /**
     * Funcion para subir archivos o editar archivos
     */
     public function updateFoto(Request $request) {
        $afiliado = Afiliados::find($request->id_afi);
        $tipo = $request->tipo;
        $file = $request->file('archivo');

        if ($file && $afiliado) {
            $nombreArchivoViejo = $afiliado->$tipo;

            if (!empty($nombreArchivoViejo)) {
                $rutaVieja = '/' . $afiliado->nui . '/' . $nombreArchivoViejo;
                if (\Storage::disk('afiliados')->exists($rutaVieja)) {
                    \Storage::disk('afiliados')->delete($rutaVieja);
                }
            }
            $nombreLimpio = time() . '_' . str_replace(' ', '_', $file->getClientOriginalName());
            $urlNueva = '/' . $request->nui . '/' . $nombreLimpio;
            \Storage::disk('afiliados')->put($urlNueva, \File::get($file));
            $afiliado->$tipo = $nombreLimpio;
            $afiliado->save();

            return response()->json([
                'success' => true, 
                'message' => 'Archivo actualizado y anterior eliminado correctamente.'
            ]);
        }

        return response()->json(['success' => false, 'message' => 'Datos insuficientes.'], 422);
    }

    /**
     * funcion qiue actualiza los datos del afiliado
     */
    public function updateDatos(Request $request, $id_afi){
        $afiliado = Afiliados::find($id_afi);
        
        $afiliado->sexo = $request->sexo;
        $afiliado->escolaridad = $request->escolaridad;
        $afiliado->curp = $request->curp;
        $afiliado->calle = $request->calle;
        // Valida si te mandan CP desde Vue, si no, ponlo en null para que no falle
        $afiliado->cp = $request->cp ?? $afiliado->cp; 
        $afiliado->celular = $request->celular;
        $afiliado->division = $request->division;
        $afiliado->club = $request->club;
        $afiliado->categoria = $request->categoria;
        $afiliado->seleccion = $request->seleccion;
        
        if($request->seleccion == 'Si'){
            $afiliado->tipo_seleccion = $request->tipo_seleccion;
        } else {
            $afiliado->tipo_seleccion = null;
        }   
        
        $afiliado->save();

        // ===============================================
        // ENVÍO DE CORREO A JURÍDICO
        // ===============================================
        try {
            Mail::to('emmanuel@amfpro.mx')->send(new NotificacionPerfilEditado($afiliado));
        } catch (\Exception $e) {
            // Si el correo falla, lo anotamos en storage/logs/laravel.log pero no le rompemos la vista al usuario
            Log::error('No se pudo enviar el correo a juridico@amfpro.mx al actualizar datos del afiliado NUI: ' . $afiliado->nui . '. Error: ' . $e->getMessage());
        }
        // ===============================================

        return response()->json([
            'success' => true,
            'message' => 'Actualizado correctamente'
        ], 200);
    }
}
