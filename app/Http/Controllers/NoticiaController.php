<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Noticias;
use App\Models\ImagenesComunicado;
use Carbon\Carbon;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class NoticiaController extends Controller
{
    public function listaNoticias(Request $request) {
        $query = Noticias::where('categoria', 'noticias')->where('estatus', 1);

        // Opcional: Filtrar por búsqueda en el servidor
        if ($request->has('busqueda')) {
            $query->where('titulo', 'LIKE', '%' . $request->busqueda . '%');
        }

        $result = $query->orderBy('fecha', 'DESC')->get();

        foreach ($result as $value) {
            // Carbon::parse para asegurar el formato de fecha
            $value->fecha_texto = Carbon::parse($value->fecha)->translatedFormat('d \d\e F \d\e\l Y');
        }
        return response()->json($result);
    }

    public function listaComunicados(Request $request) {
        $query = Noticias::where('categoria', 'comunicados')->where('estatus', 1);

        if ($request->has('busqueda')) {
            $query->where('titulo', 'LIKE', '%' . $request->busqueda . '%');
        }

        $result = $query->orderBy('fecha', 'DESC')->get();

        foreach ($result as $value) {
            $value->fecha_texto = Carbon::parse($value->fecha)->translatedFormat('d \d\e F \d\e\l Y');
        }
        return response()->json($result);
    }

    public function ultimasRedes()
    {
        // Usamos caché por 2 horas (7200 segundos)
        $datos = Cache::remember('ultimas_redes_sociales', 7200, function () {
            
            $token = env('META_ACCESS_TOKEN');
            $pageId = env('FB_PAGE_ID');

            // 1. INICIALIZAMOS COMO ARREGLOS VACÍOS (Esto evita el error .length en Vue)
            $facebookData = [];
            $instagramData = [];

            if ($token && $pageId) {
                
                // 1. OBTENEMOS LOS POSTS DE FACEBOOK
                $fbResponse = Http::get("https://graph.facebook.com/v19.0/{$pageId}/posts", [
                    'fields' => 'permalink_url,message,full_picture',
                    'access_token' => $token,
                    'limit' => 2
                ]);

                if ($fbResponse->successful() && isset($fbResponse->json()['data'])) {
                    // Guardamos el arreglo completo, sin el [0]
                    $facebookData = $fbResponse->json()['data'];
                }

                // 2. OBTENEMOS LOS POSTS DE INSTAGRAM
                $igResponse = Http::get("https://graph.facebook.com/v19.0/{$pageId}", [
                    // Cambiamos media.limit(1) por media.limit(2) para traer los últimos dos
                    'fields' => 'instagram_business_account{media.limit(2){id,media_url,permalink,caption}}',
                    'access_token' => $token
                ]);

                if ($igResponse->successful() && isset($igResponse->json()['instagram_business_account']['media']['data'])) {
                    // Guardamos el ARREGLO completo, quitamos el [0] del final
                    $instagramData = $igResponse->json()['instagram_business_account']['media']['data'];
                }
            }

            return [
                'facebook' => $facebookData,
                'instagram' => $instagramData
            ];
        });

        return response()->json($datos);
    }

    public function obtenerGaleria($id){
        // Supongamos que tienes un modelo NoticiaGaleria vinculado a la noticia
        // o que las fotos están en una tabla separada
        $imagenes = ImagenesComunicado::where('id_comunicado',$id)->get();
        return response()->json($imagenes);
    }
}
