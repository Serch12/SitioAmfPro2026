<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoticiaController;
use App\Http\Controllers\TalentosController;
use App\Http\Controllers\RegistrateController;
use App\Http\Controllers\PerfilController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\LoginController;

// === IMPORTANTE: Importamos el modelo de Noticias ===
use App\Models\Noticias;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Auth::routes();


Route::get('/', function () {
    return view('home')->with('evento','');
})->name('inicio');

Route::get('/afiliacion', function () {
    return view('Afiliacion');
})->name('afiliacion');


// ==========================================
// 2. RUTAS PÚBLICAS DE LA API (Datos para Vue)
// (Nombres estandarizados con puntos en lugar de barras)
// ==========================================
Route::get('/noticias/listado-noticias', [NoticiaController::class, 'listaNoticias'])->name('noticias.listado');
Route::get('/noticias/listado-comunicados', [NoticiaController::class, 'listaComunicados'])->name('noticias.comunicados');
Route::get('/noticias/{id}/galeria', [NoticiaController::class, 'obtenerGaleria'])->name('noticias.comunicados');
Route::get('/noticias/ultimas-redes', [NoticiaController::class, 'ultimasRedes'])->name('noticias.redes');

Route::get('/torneos_agrupados_ano', [TalentosController::class, 'torneosAgrupadosYear'])->name('torneos.agrupados');
Route::get('/datos_talentos', [TalentosController::class, 'datosTorneos'])->name('torneos.datos');
Route::get('/filtra_torneo/{ano_seleccionado}', [TalentosController::class, 'filtraTorneo'])->name('torneos.filtro');
Route::get('/imagenes_torneo/{id_talento}', [TalentosController::class, 'imagenesTorneo'])->name('torneos.imagenes');

Route::post('/registro/devuelve-equipos', [RegistrateController::class, 'listaEquipos'])->name('registro.equipos');
Route::post('/registro/create', [RegistrateController::class, 'createAfiliado'])->name('registro.create');

// ¡CORREGIDO! Se quitó la variable {nui} del nombre
Route::get('/registro/existe_nui/{nui}', [RegistrateController::class, 'existeNUI'])->name('registro.existe_nui');

Route::post('/consultarnui', [LoginController::class, 'consultarnui'])->name('consultarnui');


// ==========================================
// 3. RUTAS PROTEGIDAS (Solo para usuarios que iniciaron sesión)
// ==========================================
Route::middleware(['auth'])->group(function () {
    
    // Panel/Dashboard por defecto de Laravel
    Route::get('/home', [HomeController::class, 'index'])->name('home');

    // Vistas y API del Perfil
    Route::get('/perfil', [PerfilController::class, 'perfil'])->name('perfil');
    Route::get('/afiliado/datos', [PerfilController::class, 'datosAfiliado'])->name('afiliado.datos');
    Route::post('/afiliado/update-foto', [PerfilController::class, 'updateFoto'])->name('afiliado.update_foto');
    
    // ¡CORREGIDO! Se quitó la variable {id_afi} del nombre
    Route::post('/afiliado/update/{id_afi}', [PerfilController::class, 'updateDatos'])->name('afiliado.update');

});


// ==========================================
// 4. RUTA DINÁMICA (Para Redes Sociales / SEO)
// ==========================================
Route::get('/noticias/{ruta}', function ($ruta) {
    $info = Noticias::where('ruta', $ruta)->first();
    if ($info) {
        // CAMBIO AQUÍ: Retorna 'home' en lugar de 'welcome' si 'home' es tu plantilla principal
        return view('home', [
            'evento' => 'Si',
            'info'   => $info
        ]);
    }
    return view('home', ['evento' => '']);
});


// ==========================================
// 5. RUTA COMODÍN (Catch-all) para Vue
// (¡ESTRICTAMENTE AL FINAL DEL ARCHIVO!)
// ==========================================
Route::get('/{any}', function () {
    return view('welcome', ['evento' => '']);
})->where('any', '.*');