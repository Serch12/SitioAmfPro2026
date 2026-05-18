<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use App\Mail\AfiliacionEmail;
use App\Mail\AfiliadoRegistradoUsuario;
use App\Models\Afiliados;
use App\Models\Equipos;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;
use MattDaneshvar\Survey\Models\Entry;
use MattDaneshvar\Survey\Models\Survey;
use Kreait\Firebase\Auth as FirebaseAuth;

class RegistrateController extends Controller
{
    protected $auth;

    public function __construct(FirebaseAuth $auth)
    {
        $this->auth = $auth;
    }
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
        
        $validator = \Illuminate\Support\Facades\Validator::make($request->all(), [
            'mail' => 'required|email|unique:afiliados,mail' 
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Este correo electrónico ya se encuentra registrado en nuestro sistema.'
            ], 422); // 422 Unprocessable Entity (ideal para validaciones)
        }
        $fecha_nacimiento  = $request->nacimiento;
        $edad = Carbon::parse($fecha_nacimiento)->age;
        
        try {
            $userProperties = [
                'email' => $request->mail,
                'emailVerified' => false,
                'password' => $request->password, 
                'displayName' => $request->nombre . ' ' . $request->apellido_pat,
                'disabled' => false,
            ];

            $firebaseUser = $this->auth->createUser($userProperties);
            
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'No se pudo crear el usuario en Firebase: ' . $e->getMessage()
            ], 500);
        }
        $afiliado = new Afiliados();
        $afiliado->nombre = $request->nombre;
        $afiliado->apellido_pat = $request->apellido_pat;
        $afiliado->apellido_mat = $request->apellido_mat;
        $afiliado->sexo = $request->sexo;
        $afiliado->nacionalidad = $request->nacionalidad;
        $afiliado->escolaridad = $request->escolaridad;
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
        
        // Carga archivo PDF (Asumiendo que este es obligatorio)
        if ($request->hasFile('pdf')) {
            $file = $request->file('pdf');             
            $nombreLimpio = str_replace(' ', '_', $file->getClientOriginalName());
            $url = '/' . $request->nui . '/' . $nombreLimpio;
            \Storage::disk('afiliados')->put($url, \File::get($file));
            $afiliado->pdf = $nombreLimpio;
        }

        // Carga archivo pdf2 (Puede ser opcional)
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
        $afiliado->password = bcrypt($request->password);
        $afiliado->save();
        
        Auth::login($afiliado);
        
        Mail::to('emmanuel@amfpro.mx')->send(new AfiliacionEmail($request,$afiliado));
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
}
