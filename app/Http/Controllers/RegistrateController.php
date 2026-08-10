<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
// use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Mail\AfiliacionEmail;
use App\Mail\AfiliadoRegistradoUsuario;
use App\Models\Afiliados;
use App\Models\Equipos;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;
// use MattDaneshvar\Survey\Models\Entry;
// use MattDaneshvar\Survey\Models\Survey;
// use Kreait\Firebase\Auth as FirebaseAuth;

class RegistrateController extends Controller
{
    // protected $auth;

    // public function __construct(FirebaseAuth $auth)
    // {
    //     $this->auth = $auth;
    // }
    /**
     * funcion que retorna el listado conforme a la division seleccionada
     */
    public function listaEquipos(Request $request){
        $nuevaDiv = $request->input('nuevaDiv');
        $lista = Equipos::where('id_liga', $nuevaDiv)->get();
        return response()->json($lista); 
    }

    /**
     * funcion que crea un afiliado
     */
    public function createAfiliado(Request $request){
        // 1. VALIDACIÓN INVISIBLE RECAPTCHA V3
        $recaptchaResponse = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => env('RECAPTCHA_SECRET_KEY'),
            'response' => $request->recaptcha_token,
        ]);

        $googleData = $recaptchaResponse->json();

        // Si Google dice que es falso o el score de humanidad es menor a 0.5 (muy robótico), bloqueamos.
        if (!isset($googleData['success']) || !$googleData['success'] || $googleData['score'] < 0.5) {
            return response()->json([
                'error' => 'Actividad sospechosa detectada. Si eres humano, recarga la página e intenta de nuevo.'
            ], 403);
        }
        
        $validator = \Illuminate\Support\Facades\Validator::make($request->all(), [
            'mail' => 'required|email|unique:afiliados,mail' 
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Este correo electrónico ya se encuentra registrado en nuestro sistema.'
            ], 422);
        }
        
        $fecha_nacimiento  = $request->nacimiento;
        $edad = Carbon::parse($fecha_nacimiento)->age;
        
        $afiliado = new Afiliados();
        $afiliado->nombre = $request->nombre;
        $afiliado->apellido_pat = $request->apellido_pat;
        $afiliado->apellido_mat = $request->apellido_mat;
        $afiliado->sexo = $request->sexo;
        $afiliado->nacionalidad = $request->nacionalidad;
        // $afiliado->escolaridad = $request->escolaridad;
        $afiliado->mail = $request->mail;
        $afiliado->edad = $edad;
        $afiliado->curp = $request->curp;
        $afiliado->nacimiento = $request->nacimiento;
        $afiliado->calle = $request->calle;
        $afiliado->celular = $request->celular;
        $afiliado->nui = $request->nui;
        $afiliado->division = $request->division;
        $afiliado->club = $request->club;
        $afiliado->categoria = $request->categoria;
        $afiliado->seleccion = $request->seleccion;
        
        if($request->seleccion == 'Si'){
            $afiliado->tipo_seleccion = $request->tipo_seleccion;
        }
        
        // Carga archivo PDF
        if ($request->hasFile('pdf')) {
            $file = $request->file('pdf');             
            $nombreLimpio = str_replace(' ', '_', $file->getClientOriginalName());
            $url = '/' . $request->nui . '/' . $nombreLimpio;
            \Storage::disk('afiliados')->put($url, \File::get($file));
            $afiliado->pdf = $nombreLimpio;
        }

        // Carga archivo pdf2
        if ($request->hasFile('pdf2')) {
            $file2 = $request->file('pdf2');             
            $nombreLimpio2 = str_replace(' ', '_', $file2->getClientOriginalName()); 
            $url2 = '/' . $request->nui . '/' . $nombreLimpio2;
            \Storage::disk('afiliados')->put($url2, \File::get($file2));
            $afiliado->pdf2 = $nombreLimpio2;
        }

        // Carga archivo foto
        if ($request->hasFile('foto')) {
            $filefoto = $request->file('foto');             
            $nombreLimpio3 = str_replace(' ', '_', $filefoto->getClientOriginalName());
            $urlfoto = '/' . $request->nui . '/' . $nombreLimpio3;      
            \Storage::disk('afiliados')->put($urlfoto,  \File::get($filefoto)); 
            $afiliado->foto = $nombreLimpio3;
        }
        
        $afiliado->estatus_app = 0;
        $afiliado->fec_registro = $request->fec_registro;
        
        // Guardamos el afiliado sin contraseña
        $afiliado->save();
        
        // Envío de correos
        Mail::to('registro@amfpro.mx')->bcc(['sergio@amfpro.mx'])->send(new AfiliacionEmail($request,$afiliado));
        // Mail::to('emmanuel@amfpro.mx')->bcc(['sergio@amfpro.mx'])->send(new AfiliacionEmail($request,$afiliado));
        Mail::to($request->mail)->send(new AfiliadoRegistradoUsuario($afiliado));

        return $afiliado;
    }       

    /**
     * funcion que verifica si ya existe el nui ingresa
     */
    public function existeNui($nui){
        $existe = Afiliados::where('nui',$nui)->first();
        return $existe;
    }

    /**
     * Función que extrae los datos del ine cargado
     */
    public function escanearIne(Request $request)
    {
        if (!$request->hasFile('imagen')) {
            return response()->json(['error' => 'No se cargó ninguna imagen'], 400);
        }

        $file = $request->file('imagen');

        try {
            $apiKey = env('VERIFICAMEX_API_KEY');

            // 1. Obtenemos el path real, el tipo de imagen y armamos el Base64 con el prefijo exacto que pide la API
            $mimeType = $file->getMimeType(); // Ejemplo: image/jpeg o image/png
            $base64Raw = base64_encode(file_get_contents($file->getRealPath()));
            $base64ConPrefijo = 'data:' . $mimeType . ';base64,' . $base64Raw;

            // 2. Construimos el JSON manualmente
            $jsonData = json_encode([
                'ine_front' => $base64ConPrefijo
            ]);

            // =========================================================
            // SOLUCIÓN: Usar cURL puro para evitar el límite de Guzzle
            // y su dependencia a la carpeta temporal bloqueada de XAMPP.
            // =========================================================
            $ch = curl_init('https://api.verificamex.com/identity/v1/ocr/obverse');
            
            // Configuramos cURL
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Authorization: Bearer ' . $apiKey,
                'Content-Type: application/json',
                'Accept: application/json'
            ]);
            
            // Esto evita errores de certificado SSL en XAMPP local
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

            // Ejecutamos la petición
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            $curlError = curl_error($ch);
            
            curl_close($ch);

            // 3. Verificamos si cURL falló a nivel de red
            if ($response === false) {
                return response()->json([
                    'error' => 'Error de red al conectar con Verificamex', 
                    'message' => $curlError
                ], 500);
            }

            // 4. Decodificamos la respuesta de la API
            $responseData = json_decode($response, true);

            // 5. Evaluamos el código HTTP que devolvió la API
            if ($httpCode !== 200) {
                return response()->json([
                    'error' => 'Error en el servicio de Verificamex',
                    'details' => $responseData
                ], $httpCode);
            }
            
            // 6. Éxito: Retornamos la data limpia al frontend
            return response()->json($responseData);

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Fallo en el proceso del servidor', 
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
