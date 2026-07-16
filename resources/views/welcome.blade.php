<!DOCTYPE html>
<html lang="es">
<head>
    <base href="{{ url('/') }}/">
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>AMFPro</title>
    <link rel="icon" href="{{ asset('recursos/logo_verde.png') }}" type="image/png">

    @if (isset($evento) && $evento == 'Si')
            <meta property="og:url" content="{{ url()->current() }}" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="{{$info->titulo}}">
            <meta property="og:description" content="{{ strip_tags($info->subtitulo) }}">
            <meta property="og:image" content="https://amfpro.mx/intranet/public/ArchivosSistema/Post/{{ rawurlencode($info->imagen_p) }}"> 
            <meta property="og:image:secure_url" content="https://amfpro.mx/intranet/public/ArchivosSistema/Post/{{ rawurlencode($info->imagen_p) }}"> 
            
            <meta name="twitter:title" content="{{$info->titulo}}" />
            <meta name="twitter:image" content="https://amfpro.mx/intranet/public/ArchivosSistema/Post/{{ rawurlencode($info->imagen_p) }}" />
    @else
            <meta property="og:url" content="{{ url()->current() }}" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Asociación Mexicana de Futbolistas">
            <meta property="og:description" content="La AMFpro busca representar y proteger los intereses de las y los Futbolistas profesionales en México.">
            
            <!-- ETIQUETAS A PRUEBA DE WHATSAPP -->
            <meta property="og:image" itemprop="image" content="https://amfpro.mx/recursos/logo.png">
            <meta property="og:image:secure_url" itemprop="image" content="https://amfpro.mx/recursos/logo.png">
            <meta property="og:image:type" content="image/png">
            <meta property="og:image:alt" content="Logo AMFpro">
            <meta property="og:image:width" content="512">
            <meta property="og:image:height" content="512">
            
            <meta name="twitter:title" content="Asociación Mexicana de Futbolistas" />
            <meta name="twitter:image" content="https://amfpro.mx/recursos/logo.png" />
            <meta name="twitter:image:alt" content="Logo AMFpro" />
        @endif

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@amfpromx" />
    <meta name="twitter:creator" content="@amfpromx" />
    
    <link href="{{ asset('css/app.css') }}?v={{ time() }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
</head>
<body>
    <div id="app">
        @yield('content')
    </div>
    <script src="{{ asset('js/app.js') }}?v={{ time() }}" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</body>
</html>