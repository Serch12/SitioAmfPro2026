<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actualización de Perfil</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f1f5f9;">

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 40px 20px;">
        <tr>
            <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
                    
                    <tr>
                        <td align="center" style="background-color: #0f172a; padding: 30px 20px;">
                            <img src="https://externos-intranet.amfpro.mx/style/logos/logo-_amfpro_pro_color.png" alt="AMFPRO" width="150" style="display: block; border: 0;">
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 40px 30px; color: #334155;">
                            <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 22px; text-align: center;">Aviso de Actualización de Datos</h2>
                            
                            <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.6;">
                                El asociado <strong>{{ $afiliado->nombre }} {{ $afiliado->apellido_pat }}</strong> ha actualizado su información de perfil.
                            </p>

                            <table border="0" cellpadding="12" cellspacing="0" width="100%" style="border-collapse: collapse; font-size: 15px;">
                                <tr>
                                    <td width="35%" style="border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">NUI:</td>
                                    <td width="65%" style="border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: bold;">{{ $afiliado->nui }}</td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">CURP:</td>
                                    <td style="border-bottom: 1px solid #e2e8f0; color: #0f172a;">{{ $afiliado->curp }}</td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Celular:</td>
                                    <td style="border-bottom: 1px solid #e2e8f0; color: #0f172a;">{{ $afiliado->celular }}</td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">División:</td>
                                    <td style="border-bottom: 1px solid #e2e8f0; color: #0f172a;">{{ $afiliado->division }}</td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Club Actual:</td>
                                    <td style="border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: bold; color: #50c026;">{{ $afiliado->club }}</td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Categoría:</td>
                                    <td style="border-bottom: 1px solid #e2e8f0; color: #0f172a;">{{ $afiliado->categoria ?? 'N/A' }}</td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Domicilio:</td>
                                    <td style="border-bottom: 1px solid #e2e8f0; color: #0f172a;">{{ $afiliado->calle }} {{ $afiliado->cp ? ' C.P. '.$afiliado->cp : '' }}</td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="background-color: #f8fafc; padding: 20px; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                                Este es un correo generado automáticamente por el sistema de asociados AMFPRO.
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>