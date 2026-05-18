<!doctype html>
<html lang="es" class="light-style layout-wide customizer-hide" dir="ltr" data-theme="theme-default">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>AMFPRO - Recuperar Contraseña</title>

    <meta name="description" content="Recuperación de contraseña para asociados AMFPRO" />

    <link rel="icon" type="image/x-icon" href="{{ asset('estilos_pagina/vistas/img/plantilla/icono-negro1.png')}}" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="{{asset('estilos_login/assets/vendor/fonts/remixicon/remixicon.css')}}" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
      /* ==================================================
         DISEÑO PREMIUM AMFPRO - ESTILOS PERSONALIZADOS
         ================================================== */
      body {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
      }

      /* Fondo de la página */
      .login-bg {
        min-height: 100vh;
        background-image: url('{{ asset("estilos_login/assets/img/amfpro/banner_login.png") }}');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-color: #0f172a; 
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      /* Capa oscura sobre la imagen para legibilidad */
      .login-bg::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(15, 23, 42, 0.4); 
        z-index: 1;
      }

      @media (max-width: 767px) {
        .login-bg {
          background-image: url('{{ asset("estilos_login/assets/img/amfpro/banner_login_dispositivo.jpg") }}');
        }
      }

      /* Contenedor principal */
      .auth-wrapper {
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: 480px;
        padding: 20px;
      }

      /* Tarjeta de Cristal (Glassmorphism) */
      .glass-card {
        background: rgba(15, 23, 42, 0.7);
        /* backdrop-filter: blur(16px); */
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        overflow: hidden;
      }

      /* Inputs Modernos */
      .custom-input-group {
        position: relative;
        margin-bottom: 1.5rem;
      }

      .custom-input-group label {
        color: #cbd5e1;
        font-weight: 600;
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
        display: block;
        letter-spacing: 0.5px;
      }

      .custom-input {
        width: 100%;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: white;
        padding: 14px 20px;
        border-radius: 12px;
        font-size: 1rem;
        transition: all 0.3s ease;
      }

      .custom-input:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.1);
        border-color: #50c026;
        box-shadow: 0 0 0 4px rgba(80, 192, 38, 0.15);
      }

      .custom-input::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }

      /* Botón Principal */
      .btn-premium {
        background: linear-gradient(135deg, #50c026 0%, #3e9452 100%);
        color: white;
        border: none;
        width: 100%;
        padding: 14px;
        border-radius: 12px;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 0.5px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-decoration: none;
      }

      .btn-premium:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(80, 192, 38, 0.4);
        color: white;
      }

      /* Alertas personalizadas */
      .custom-alert {
        border-radius: 12px;
        padding: 12px 16px;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 1.5rem;
        border: none;
      }

      .custom-alert-danger {
        background: rgba(239, 68, 68, 0.15);
        border: 1px solid rgba(239, 68, 68, 0.3);
        color: #fca5a5;
      }

      .custom-alert-success {
        background: rgba(80, 192, 38, 0.15);
        border: 1px solid rgba(80, 192, 38, 0.3);
        color: #bbf7d0;
      }

      /* Loader Overlay */
      .loader-overlay {
        display: none; 
        position: fixed; 
        inset: 0; 
        background: rgba(15, 23, 42, 0.85); 
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        z-index: 9999; 
        align-items: center; 
        justify-content: center; 
        flex-direction: column;
      }
    </style>
  </head>

  <body class="login-bg">

    <div class="auth-wrapper">
      <div class="glass-card p-4 p-md-5">
        
        <div class="text-center mb-4">
          <img src="{{asset('recursos/logo.png')}}" alt="AMFPRO Logo" style="max-height: 65px; object-fit: contain;">
        </div>

        <div class="card-body p-0 mt-1">
            
          @if (session('status') || session('toast_success') || session('mensaje_login'))
            <div class="text-center">
              <div class="mb-3">
                <i class="ri-mail-check-fill" style="font-size: 5.5rem; color: #50c026; filter: drop-shadow(0 10px 15px rgba(80, 192, 38, 0.4));"></i>
              </div>
              <h4 class="mb-2 text-white fw-bold">¡Correo Enviado!</h4>
              <p class="mb-5" style="color: #cbd5e1;">
                Hemos enviado las instrucciones a tu correo electrónico. Por favor, revisa tu bandeja de entrada (o la carpeta de spam).
              </p>
              <a href="{{ route('login') }}" class="btn-premium">
                <i class="ri-arrow-left-line"></i> Volver al Inicio
              </a>
            </div>

          @else
            <div class="text-center mb-4">
                <h4 class="mb-1 text-white fw-bold">¿Olvidaste tu Contraseña? 🔒</h4>
                <p style="color: #94a3b8;">Ingresa tu correo electrónico y te enviaremos instrucciones para restablecerla.</p>
            </div>
            
            <form id="formAuthentication" method="POST" action="{{ route('password.email') }}">
              @csrf

              @error('mail')
                <div class="custom-alert custom-alert-danger">
                  <i class="ri-error-warning-fill fs-4"></i>
                  <div>{{ $message }}</div>
                </div>
              @enderror

              <div class="custom-input-group">
                <label for="mail">Correo Electrónico Registrado</label>
                <input type="email" class="custom-input" id="mail" name="mail" value="{{ old('mail') }}" placeholder="ejemplo@correo.com" autofocus required />
                <i class="ri-mail-line position-absolute text-muted" style="right: 15px; top: 38px;"></i>
              </div> 

              <div class="mt-4">
                <button class="btn-premium" type="submit" onclick="showLoader('loader-correo', 'mail')">
                    <i class="ri-mail-send-line fs-5"></i> Enviar Enlace
                </button>
              </div>
            </form>

            <div class="text-center mt-4 pt-3 border-top" style="border-color: rgba(255,255,255,0.1) !important;">
              <a href="{{ route('login') }}" class="text-white text-decoration-none d-inline-flex align-items-center" style="transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                <i class="ri-arrow-left-s-line me-1 fs-5"></i> Volver al inicio de sesión
              </a>
            </div>
          @endif

        </div>
      </div>
    </div>

    <div id="loader-correo" class="loader-overlay">
      <div class="spinner-border text-success" style="width: 3.5rem; height: 3.5rem; border-width: 0.3em;" role="status"></div>
      <h5 class="text-white mt-4 fw-bold">Enviando enlace...</h5>
      <p style="color: #94a3b8;">Por favor, espera un momento</p>
    </div>

    <script>
      function showLoader(loaderId, inputIdToCheck) {
        const input = document.getElementById(inputIdToCheck);
        const loader = document.getElementById(loaderId);

        // Solo se activa si el input existe y no está vacío
        if (input && input.value.trim() !== "") {
          loader.style.display = 'flex';
        }
      }
    </script>
  </body>
</html>