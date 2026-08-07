<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reporte Jurídico AMFpro</title>
</head>
<body style="font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">
    
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
        
        <!-- Encabezado Verde AMFpro -->
        <div style="background: linear-gradient(135deg, #50c026 0%, #3e9452 100%); padding: 30px 20px; text-align: center; color: #ffffff;">
            <h2 style="margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 0.5px;">REPORTE JURÍDICO</h2>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Sistema de Asistencia a Jugadores</p>
        </div>
        
        <!-- Cuerpo del Correo -->
        <div style="padding: 30px; background-color: #f8f9fa;">
            
            <!-- Datos del Jugador -->
            <h3 style="color: #1e293b; border-bottom: 2px solid #50c026; padding-bottom: 8px; margin-top: 0; font-size: 18px;">👤 Datos del Afiliado</h3>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eeeeee; color: #64748b; width: 80px;"><strong>NUI:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eeeeee; color: #1e293b; font-weight: bold;">{{ $datosSolicitud['nui'] }}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eeeeee; color: #64748b;"><strong>Nombre:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eeeeee; color: #1e293b;">{{ $datosSolicitud['nombre'] }}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eeeeee; color: #64748b;"><strong>Correo:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">
                        <a href="mailto:{{ $datosSolicitud['correo'] }}" style="color: #3e9452; text-decoration: none; font-weight: bold;">{{ $datosSolicitud['correo'] }}</a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #64748b;"><strong>Teléfono:</strong></td>
                    <td style="padding: 8px 0;">
                        <a href="tel:{{ $datosSolicitud['telefono'] }}" style="color: #3e9452; text-decoration: none; font-weight: bold;">{{ $datosSolicitud['telefono'] }}</a>
                    </td>
                </tr>
            </table>
            
            <!-- Detalles del Caso -->
            <h3 style="color: #1e293b; border-bottom: 2px solid #50c026; padding-bottom: 8px; margin-top: 35px; font-size: 18px;">📄 Detalles del Caso</h3>
            
            <p style="margin: 15px 0 5px 0; color: #64748b; font-size: 14px;"><strong>Situación Seleccionada:</strong></p>
            <div style="background: rgba(80, 192, 38, 0.1); padding: 12px 15px; border-left: 4px solid #50c026; border-radius: 4px; color: #1e293b; font-weight: bold; margin-bottom: 20px;">
                {{ $datosSolicitud['tema'] }}
            </div>
            
            <p style="margin: 15px 0 5px 0; color: #64748b; font-size: 14px;"><strong>Descripción del Jugador:</strong></p>
            <div style="background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);">
                <!-- nl2br e() evita inyección de código y respeta los saltos de línea -->
                <p style="margin: 0; color: #334155; line-height: 1.6; font-size: 15px;">{!! nl2br(e($datosSolicitud['descripcion'])) !!}</p>
            </div>
        </div>
        
        <!-- Pie de página -->
        <div style="background: #1e293b; color: #94a3b8; text-align: center; padding: 20px; font-size: 12px; line-height: 1.5;">
            Este es un mensaje automático generado desde la plataforma de la AMFpro.<br>
            <strong>No respondas directamente a este correo</strong>, comunícate a través de los datos de contacto del jugador.
        </div>
    </div>
    
</body>
</html>