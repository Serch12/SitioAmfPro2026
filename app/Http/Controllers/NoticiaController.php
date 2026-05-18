<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Noticias;
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
        // Usamos caché por 2 horas (7200 segundos) para que tu página cargue rápido
        // y Meta no te bloquee por hacer peticiones en cada visita.
        $datos = Cache::remember('ultimas_redes_sociales', 7200, function () {
            
            $token = env('META_ACCESS_TOKEN');
            $pageId = env('FB_PAGE_ID');

            $facebookData = null;
            $instagramData = null;

            if ($token && $pageId) {
                
                // 1. OBTENEMOS EL POST DE FACEBOOK
                $fbResponse = Http::get("https://graph.facebook.com/v19.0/{$pageId}/posts", [
                    'fields' => 'permalink_url,message,full_picture',
                    'access_token' => $token,
                    'limit' => 1
                ]);

                if ($fbResponse->successful() && isset($fbResponse->json()['data'][0])) {
                    $facebookData = $fbResponse->json()['data'][0];
                }

                // 2. OBTENEMOS EL POST DE INSTAGRAM
                // Al estar vinculados, le preguntamos a la página de FB por su cuenta de IG
                $igResponse = Http::get("https://graph.facebook.com/v19.0/{$pageId}", [
                    'fields' => 'instagram_business_account{media.limit(1){id,media_url,permalink,caption}}',
                    'access_token' => $token
                ]);

                if ($igResponse->successful() && isset($igResponse->json()['instagram_business_account']['media']['data'][0])) {
                    $instagramData = $igResponse->json()['instagram_business_account']['media']['data'][0];
                }
            }

            return [
                'facebook' => $facebookData,
                'instagram' => $instagramData
            ];
        });
    
        return response()->json($datos);
    }
}
