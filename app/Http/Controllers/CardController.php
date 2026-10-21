<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Contracts\Encryption\DecryptException;
use DB;

class CardController extends Controller
{
    /**
     * vista que mostrara el perfill
     **/
    public function indexPerfil(Request $request){
        $token = $request->query('token');

        // Validamos que el token venga presente
        if (!$token) {
            abort(404, 'No se proporcionó ningún token.');
        }

        $correo = Crypt::decryptString($token);

        $consulta = DB::table('users')
        ->join('tbl_perfil','users.id','=','tbl_perfil.user_id')
        ->select('tbl_perfil.*', 'users.id', 'users.name', 'users.email')
        ->where('users.email', $correo)
        ->first();
        

        return view('acceso', compact('consulta'));
        
    }
}
