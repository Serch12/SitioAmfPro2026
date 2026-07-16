<!doctype html>
<html lang="es" class="light-style layout-wide customizer-hide" dir="ltr" data-theme="theme-default">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>AMFPRO - Iniciar Sesión</title>

    <meta name="description" content="Plataforma exclusiva para asociados AMFPRO" />

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
        background: rgba(15, 23, 42, 0.4); /* Azul muy oscuro casi negro */
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

      /* Para input readonly */
      .custom-input[readonly] {
        background: rgba(0, 0, 0, 0.2);
        color: #94a3b8;
        border-color: transparent;
      }

      /* Icono de ojito para password */
      .password-toggle {
        position: absolute;
        right: 15px;
        top: 38px;
        color: #94a3b8;
        cursor: pointer;
        padding: 5px;
        transition: color 0.2s;
      }

      .password-toggle:hover {
        color: white;
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

      /* Links */
      .link-amf {
        color: #50c026;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        transition: all 0.2s;
      }

      .link-amf:hover {
        color: #72e128;
        text-decoration: underline;
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
        <div class="text-center mb-5">
          <img src="{{asset('recursos/logo.png')}}" alt="AMFPRO Logo" style="max-height: 65px; object-fit: contain;">
        </div>

        @if(!session('nui_verificado'))
          <div class="text-center mb-4">
            <h4 class="text-white fw-bold mb-1">Portal del Asociado</h4>
            <p class="text-muted" style="color: #94a3b8 !important;">Inicia sesión o tramita tu afiliación AMFPRO.</p>
          </div>

          <!-- MINI-WIZARD INFORMATIVO PARA NUEVOS USUARIOS -->
          <div style="background: rgba(80, 192, 38, 0.1); border-left: 4px solid #50c026; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px;">
            <div class="d-flex align-items-start gap-2">
              <i class="ri-information-fill" style="color: #50c026; font-size: 1.2rem; margin-top: -2px;"></i>
              <div>
                <h6 class="text-white fw-bold mb-1" style="font-size: 0.9rem;">¿Es tu primera vez aquí?</h6>
                <p class="mb-0" style="color: #cbd5e1; font-size: 0.8rem; line-height: 1.4;">
                  Ingresa tu <strong>NUI</strong> a continuación. Si aún no estás registrado, el sistema lo detectará automáticamente y te guiaremos paso a paso para completar tu afiliación.
                </p>
              </div>
            </div>
          </div>

          <form id="formAuthentication" method="POST" action="{{ route('consultarnui') }}">
            @csrf

            @error('nui')
              <div class="custom-alert custom-alert-danger">
                <i class="ri-error-warning-fill fs-4"></i>
                <div>{{ $message }}</div>
              </div>
            @enderror

            <div class="custom-input-group">
              <label for="nui">Ingresa tu NUI</label>
              <input type="text" class="custom-input text-center fs-5 fw-bold" id="nui" name="nui" value="{{old('nui')}}" maxlength="7" placeholder="Ej. 123456" autocomplete="off" autofocus />
              <div class="text-center mt-2">
                  <small style="color: #64748b;">Número Único de Identificación (5 a 6 dígitos).</small>
              </div>
            </div>

            <div class="mt-4">
              <button class="btn-premium" type="submit" onclick="showLoader('loader-nui', 'nui')">
                Continuar <i class="ri-arrow-right-line"></i>
              </button>
            </div>

            <div class="text-center mt-4">
              <a href="{{ route('inicio') }}" class="link-amf d-inline-flex align-items-center">
                <i class="ri-arrow-left-line me-1"></i> Volver al Inicio
              </a>
            </div>
          </form>

        @else
          <div class="custom-alert custom-alert-success justify-content-center">
            <i class="ri-shield-check-fill fs-4"></i>
            <div>NUI Confirmado: <strong class="text-white ms-1">{{ session('nui_verificado') }}</strong></div>
          </div>

          <form id="formLogin" method="POST" action="{{ route('login') }}">
            @csrf
            
            <input type="hidden" name="nui_hidden" value="{{ session('nui_verificado') }}">

            <div class="custom-input-group">
              <label for="mail">Correo Electrónico Registrado</label>
              <input type="email" class="custom-input" id="mail" name="mail" value="{{ old('mail', session('email_afiliado')) }}" required readonly />
              <i class="ri-lock-fill position-absolute text-muted" style="right: 15px; top: 38px;"></i>
            </div>

            <div class="custom-input-group">
              <label for="password">Contraseña</label>
              <input type="password" id="password" class="custom-input" name="password" placeholder="············" required autofocus />
              
              <span class="password-toggle" onclick="togglePassword()">
                <i class="ri-eye-off-line" id="toggleIcon"></i>
              </span>
            </div>

            @if($errors->has('mail') || $errors->has('password'))
              <div class="custom-alert custom-alert-danger">
                <i class="ri-error-warning-fill fs-4"></i>
                <div>{{ $errors->first('mail') ?: $errors->first('password') }}</div>
              </div>
            @endif

            <div class="text-end mb-4">
              @if (Route::has('password.request'))
                <a href="{{ route('password.request') }}" class="link-amf" style="font-size: 0.8rem;">
                  ¿Olvidaste tu contraseña?
                </a>
              @endif
            </div>

            <div>
              <button class="btn-premium" type="submit" onclick="showLoader('loader-login', 'password')">
                <i class="ri-login-circle-line fs-5"></i> Iniciar Sesión
              </button>
            </div>

            <div class="text-center mt-4 pt-3 border-top" style="border-color: rgba(255,255,255,0.1) !important;">
                <a href="{{ route('login') }}" class="text-white text-decoration-none d-inline-flex align-items-center" style="transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                    <i class="ri-refresh-line me-1"></i> Ingresar con otro NUI
                </a>
            </div>
          </form>
        @endif

      </div>
    </div>

    <div id="loader-nui" class="loader-overlay">
      <div class="spinner-border text-success" style="width: 3.5rem; height: 3.5rem; border-width: 0.3em;" role="status"></div>
      <h5 class="text-white mt-4 fw-bold">Validando información...</h5>
      <p style="color: #94a3b8;">Por favor, espera un momento</p>
    </div>

    <div id="loader-login" class="loader-overlay">
      <div class="spinner-border text-success" style="width: 3.5rem; height: 3.5rem; border-width: 0.3em;" role="status"></div>
      <h5 class="text-white mt-4 fw-bold">Iniciando sesión...</h5>
      <p style="color: #94a3b8;">Preparando tu dashboard</p>
    </div>

    <script>
      // Lógica para mostrar el ojito de la contraseña
      function togglePassword() {
        const passwordInput = document.getElementById('password');
        const toggleIcon = document.getElementById('toggleIcon');
        
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          toggleIcon.classList.remove('ri-eye-off-line');
          toggleIcon.classList.add('ri-eye-line');
        } else {
          passwordInput.type = 'password';
          toggleIcon.classList.remove('ri-eye-line');
          toggleIcon.classList.add('ri-eye-off-line');
        }
      }

      // Lógica unificada para los loaders
      function showLoader(loaderId, inputIdToCheck) {
        const input = document.getElementById(inputIdToCheck);
        const loader = document.getElementById(loaderId);

        // Si el input existe y no está vacío, mostramos el loader
        if (input && input.value.trim() !== "") {
          loader.style.display = 'flex';
        }
      }
    </script>
  </body>
</html>