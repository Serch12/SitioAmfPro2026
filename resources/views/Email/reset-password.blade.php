<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restablecer Contraseña</title>
    <style>
      /* Reset de estilos para clientes de correo */
      body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { -interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
      
      body {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        background-color: #f8fafc;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      .wrapper {
        width: 100%;
        table-layout: fixed;
        background-color: #f8fafc;
        padding-bottom: 60px;
      }

      .main-table {
        background-color: #ffffff;
        margin: 0 auto;
        width: 100%;
        max-width: 550px;
        border-top: 5px solid #41e500; /* Acento de marca */
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      }

      .header {
        padding: 40px 0 30px;
        text-align: center;
      }

      .body-content {
        padding: 0 40px 40px;
        color: #334155;
        font-size: 16px;
        line-height: 1.6;
      }

      .greeting {
        font-size: 24px;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 10px;
      }

      .btn-container {
        padding: 30px 0;
        text-align: center;
      }

      .button {
        background-color: #1e293b; /* Color oscuro profesional */
        color: #ffffff !important;
        padding: 16px 32px;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 15px;
        display: inline-block;
        letter-spacing: 0.5px;
      }

      .footer {
        text-align: center;
        padding: 30px;
        font-size: 13px;
        color: #94a3b8;
      }

      .divider {
        border-top: 1px solid #f1f5f9;
        margin: 30px 0;
      }

      .fallback-link {
        font-size: 12px;
        color: #64748b;
        word-break: break-all;
        margin-top: 20px;
      }
    </style>
</head>
<body>
  <div class="wrapper">
      <table class="main-table" cellpadding="0" cellspacing="0">
        <tr>
          <td class="body-content">
            <br>

              <div class="header">
                <a href="https://www.amfpro.mx">
                  <img src="https://externos-intranet.amfpro.mx/style/logos/logo-_amfpro_pro_color.png" alt="AMFPro" width="180">
                </a>
              </div>
              {{-- <div style="text-align: center; margin-bottom: 20px;">
                  <img src="https://externos-intranet.amfpro.mx/style/logos/password_img2.png" width="60" alt="Lock Icon">
              </div> --}}
              
              <h1 class="greeting">¿Olvidaste tu contraseña?</h1>
              <p>Hola, <strong>{{$user->nombre}}</strong>.</p>
              <p>Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en <strong>AMFPro</strong>.</p>
              <p>Para continuar con el proceso, por favor haz clic en el siguiente botón:</p>

              <div class="btn-container">
                  <a href="{{ $url }}" class="button">Configurar nueva contraseña</a>
              </div>

              <div class="footer">
                <p><strong>Asociación Mexicana de Futbolistas Profesionales</strong></p>
                <p>Si no solicitaste este cambio, ignora este mensaje o contacta a soporte.</p>
                <p>&copy; {{ date('Y') }} AMFPro. Todos los derechos reservados.</p>
              </div>
              
              <div class="divider"></div>

              {{-- <p style="font-size: 13px; color: #94a3b8; text-align: center;">
                  Si el botón no funciona, copia y pega este enlace en tu navegador:
                  <br>
                  <span class="fallback-link">{{ $url }}</span>
              </p> --}}
          </td>
        </tr>
      </table>
  </div>
</body>
</html>