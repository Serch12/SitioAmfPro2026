<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solicitud de Convenio Educativo</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">

    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background-color: #3e9452; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">Nueva Solicitud de Información Educativa</h2>
        </div>

        <!-- Body -->
        <div style="padding: 30px;">
            <p style="font-size: 16px;">Hola, equipo de <strong>Desarrollo Educativo</strong>.</p>
            <p style="font-size: 16px;">Un afiliado ha solicitado información a través de la plataforma AMFpro. Aquí están los detalles:</p>

            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold; width: 35%;">NUI:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">{{ $datosSolicitud['nui'] }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold;">Nombre del Afiliado:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">{{ $datosSolicitud['nombre'] }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold;">Correo:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee;"><a href="mailto:{{ $datosSolicitud['correo'] }}" style="color: #3e9452;">{{ $datosSolicitud['correo'] }}</a></td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold;">Teléfono:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">{{ $datosSolicitud['telefono'] }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold;">Institución de Interés:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee; color: #3e9452; font-weight: bold;">{{ $datosSolicitud['institucion'] }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; vertical-align: top;">Mensaje / Dudas:</td>
                    <td style="padding: 10px;">
                        @if(!empty($datosSolicitud['mensaje']))
                            <i>"{{ $datosSolicitud['mensaje'] }}"</i>
                        @else
                            <i style="color: #999;">(No dejó comentarios adicionales)</i>
                        @endif
                    </td>
                </tr>
            </table>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #eeeeee;">
            Este mensaje fue enviado automáticamente desde el portal oficial de la Asociación Mexicana de Futbolistas.
        </div>
    </div>

</body>
</html>