<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Afiliados;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
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
        // 1. Validar estrictamente (Incluyendo el teléfono)
        $request->validate([
            'nui' => 'required|numeric',
            'nombre' => 'required|string',
            'correo' => 'required|string',
            'telefono' => 'required|string',
            'tema' => 'required|string',
            'descripcion' => 'required|string|max:250',
        ]);

        $afiliado = Afiliados::where('nui', $request->nui)->first();

        if ($afiliado) {
            $necesitaGuardar = false;

            // Si no tiene celular, le asignamos el que acaba de ingresar
            if (empty($afiliado->celular) && !empty($request->telefono)) {
                $afiliado->celular = $request->telefono;
                $necesitaGuardar = true;
            }

            // Si no tiene correo, le asignamos el que acaba de ingresar
            if (empty($afiliado->mail) && !empty($request->correo)) {
                $afiliado->mail = $request->correo;
                $necesitaGuardar = true;
            }

            // Guardamos silenciosamente en la base de datos
            if ($necesitaGuardar) {
                $afiliado->save();
            }
        }

        $asunto = '⚠️ Asistencia Jurídica Requerida: ' . $request->tema;
        
        // 2. Plantilla HTML Súper Pro para el correo
        $html = "
        <div style='font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);'>
            <!-- Encabezado Verde AMFpro -->
            <div style='background: linear-gradient(135deg, #50c026 0%, #3e9452 100%); padding: 30px 20px; text-align: center; color: #ffffff;'>
                <h2 style='margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 0.5px;'>REPORTE JURÍDICO</h2>
                <p style='margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;'>Sistema de Asistencia a Jugadores</p>
            </div>
            
            <!-- Cuerpo del Correo -->
            <div style='padding: 30px; background-color: #f8f9fa;'>
                
                <!-- Datos del Jugador -->
                <h3 style='color: #1e293b; border-bottom: 2px solid #50c026; padding-bottom: 8px; margin-top: 0; font-size: 18px;'>👤 Datos del Afiliado</h3>
                <table style='width: 100%; border-collapse: collapse; margin-top: 15px;'>
                    <tr>
                        <td style='padding: 8px 0; color: #64748b; width: 80px;'><strong>NUI:</strong></td>
                        <td style='padding: 8px 0; color: #1e293b; font-weight: bold;'>{$request->nui}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px 0; color: #64748b;'><strong>Nombre:</strong></td>
                        <td style='padding: 8px 0; color: #1e293b;'>{$request->nombre}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px 0; color: #64748b;'><strong>Correo:</strong></td>
                        <td style='padding: 8px 0;'><a href='mailto:{$request->correo}' style='color: #3e9452; text-decoration: none; font-weight: bold;'>{$request->correo}</a></td>
                    </tr>
                    <tr>
                        <td style='padding: 8px 0; color: #64748b;'><strong>Teléfono:</strong></td>
                        <td style='padding: 8px 0;'><a href='tel:{$request->telefono}' style='color: #3e9452; text-decoration: none; font-weight: bold;'>{$request->telefono}</a></td>
                    </tr>
                </table>
                
                <!-- Detalles del Caso -->
                <h3 style='color: #1e293b; border-bottom: 2px solid #50c026; padding-bottom: 8px; margin-top: 35px; font-size: 18px;'>📄 Detalles del Caso</h3>
                <p style='margin: 15px 0 5px 0; color: #64748b;'><strong>Situación Seleccionada:</strong></p>
                <div style='background: rgba(80, 192, 38, 0.1); padding: 12px 15px; border-left: 4px solid #50c026; border-radius: 4px; color: #1e293b; font-weight: bold; margin-bottom: 20px;'>
                    {$request->tema}
                </div>
                
                <p style='margin: 15px 0 5px 0; color: #64748b;'><strong>Descripción del Jugador:</strong></p>
                <div style='background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);'>
                    <p style='margin: 0; color: #334155; line-height: 1.6; font-size: 15px;'>".nl2br(htmlspecialchars($request->descripcion))."</p>
                </div>
            </div>
            
            <!-- Pie de página -->
            <div style='background: #1e293b; color: #94a3b8; text-align: center; padding: 20px; font-size: 12px; line-height: 1.5;'>
                Este es un mensaje automático generado desde la plataforma de la AMFpro.<br>
                <strong>No respondas directamente a este correo</strong>, comunícate a través de los datos de contacto del jugador.
            </div>
        </div>
        ";
        try {
            Mail::html($html, function ($message) use ($asunto) {
                $message->to('emmanuel@amfpro.mx') 
                        ->subject($asunto);
            });

            return response()->json([
                'success' => true,
                'message' => 'Solicitud enviada con éxito'
            ], 200);

        } catch (\Exception $e) {
            Log::error('No se pudo enviar el reporte jurídico del NUI: ' . $request->nui . '. Error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Ocurrió un error interno al intentar enviar el reporte.'
            ], 500);
        }
    }
}
