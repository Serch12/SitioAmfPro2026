<!DOCTYPE html>
<html lang="es">
<head>
    <base href="{{ url('/') }}/">
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>AMFPro</title>
    <link rel="icon" href="{{ asset('recursos/logo.png') }}" type="image/png">

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
        <meta property="og:title" content="Asociación Mexicana de Futbolistas">
        <meta property="og:image" content="{{ asset('recursos/logo.png') }}">
        <meta property="og:description" content="La AMFpro busca representar y proteger los intereses de las y los Futbolistas profesionales en México.">
        <meta property="og:url" content="https://www.amfpro.mx/" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Asociación Mexicana de Futbolistas" />
        <meta name="twitter:image" content="{{ asset('recursos/logo.png') }}" />
    @endif

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@amfpromx" />
    <meta name="twitter:creator" content="@amfpromx" />
    
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
</head>
<body>
    <div id="app">
        @yield('content')
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>