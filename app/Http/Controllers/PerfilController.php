<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Afiliados;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use App\Mail\NotificacionPerfilEditado;
use App\Mail\ReporteJuridicoMail;
use App\Mail\SolicitudConvenioMail;

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
            Mail::to('registro@amfpro.mx')->send(new NotificacionPerfilEditado($afiliado));
            // Mail::to('emmanuel@amfpro.mx')->send(new NotificacionPerfilEditado($afiliado));
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

    /**
     * Función para procesar y enviar el reporte jurídico SÚPER PRO
     */
    public function enviarReporte(Request $request)
    {
        // 1. Validar estrictamente
        $request->validate([
            'nui' => 'required|numeric',
            'nombre' => 'required|string',
            'correo' => 'required|string',
            'telefono' => 'required|string',
            'tema' => 'required|string',
            'descripcion' => 'required|string|max:250',
        ]);

        // 2. Buscamos y actualizamos al afiliado si faltan datos
        $afiliado = Afiliados::where('nui', $request->nui)->first();

        if ($afiliado) {
            $necesitaGuardar = false;

            // Limpiamos el teléfono dejándolo solo con números
            $telefonoLimpio = preg_replace('/\D/', '', $request->telefono);

            if (empty($afiliado->celular) && !empty($telefonoLimpio)) {
                $afiliado->celular = $telefonoLimpio;
                $necesitaGuardar = true;
            }

            if (empty($afiliado->mail) && !empty($request->correo)) {
                $afiliado->mail = $request->correo;
                $necesitaGuardar = true;
            }

            if ($necesitaGuardar) {
                $afiliado->save();
            }
        }

        // 3. Recopilamos todos los datos que pasaremos a la vista Blade
        $datosSolicitud = $request->only(['nui', 'nombre', 'correo', 'telefono', 'tema', 'descripcion']);
        
        // 4. Disparamos el correo usando nuestro nuevo Mailable
        try {
            // Mail::to('emmanuel@amfpro.mx') 
            //     ->send(new ReporteJuridicoMail($datosSolicitud));
            Mail::to('juridico@amfpro.mx')->bcc(['sergio@amfpro.mx'])
                ->send(new ReporteJuridicoMail($datosSolicitud));

            return response()->json([
                'success' => true,
                'message' => 'Solicitud enviada con éxito'
            ], 200);

        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error('No se pudo enviar el reporte jurídico del NUI: ' . $request->nui . '. Error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Ocurrió un error interno al intentar enviar el reporte.'
            ], 500);
        }
    }

    public function enviarSolicitudConvenios(Request $request)
    {
        // 1. Validamos que lleguen los datos obligatorios
        $request->validate([
            'nui'         => 'required|string',
            'nombre'      => 'required|string',
            'correo'      => 'required|email',
            'telefono'    => 'required|string',
            'institucion' => 'required|string'
        ]);

        // 2. Buscamos al afiliado para actualizar sus datos si es necesario
        $afiliado = Afiliados::where('nui', $request->nui)->first();

        if ($afiliado) {
            $necesitaGuardar = false;

            // Limpiamos el teléfono dejándolo solo con números
            $telefonoLimpio = preg_replace('/\D/', '', $request->telefono);

            // Si no tiene celular en la BD, lo agregamos
            if (empty($afiliado->celular) && !empty($telefonoLimpio)) {
                $afiliado->celular = $telefonoLimpio;
                $necesitaGuardar = true;
            }

            // Si no tiene correo en la BD, lo agregamos
            if (empty($afiliado->mail) && !empty($request->correo)) {
                $afiliado->mail = $request->correo;
                $necesitaGuardar = true;
            }

            // Guardamos los cambios silenciosamente
            if ($necesitaGuardar) {
                $afiliado->save();
            }
        }

        // 3. Recopilamos los datos para el correo (mantenemos el teléfono original para que se vea bonito en el email)
        $datosSolicitud = $request->only(['nui', 'nombre', 'correo', 'telefono', 'institucion', 'mensaje']);

        // 4. Intentamos enviar el correo
        try {
            Mail::to('desarrolloeducativo@amfpro.mx')
                ->bcc(['sergio@amfpro.mx'])->send(new SolicitudConvenioMail($datosSolicitud)); 
            // Mail::to('emmanuel@amfpro.mx')
            //     ->send(new SolicitudConvenioMail($datosSolicitud));

            return response()->json([
                'success' => true, 
                'message' => 'Solicitud procesada correctamente.'
            ], 200);

        } catch (\Exception $e) {
            // Si algo falla, lo guardamos en el log para poder depurar
            \Illuminate\Support\Facades\Log::error('Error al enviar correo de convenios educativos: ' . $e->getMessage());
            
            return response()->json([
                'success' => false, 
                'message' => 'Error del servidor al intentar enviar el correo.'
            ], 500);
        }
    }
}
