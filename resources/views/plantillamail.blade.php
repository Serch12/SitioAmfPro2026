<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Registro de Afiliado</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f1f5f9;">

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 40px 20px;">
        <tr>
            <td align="center">
                
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
                    
                    <tr>
                        <td align="center" style="background-color: #0f172a; padding: 30px 20px;">
                            <img src="https://externos-intranet.amfpro.mx/style/logos/logo-_amfpro_pro_color.png" alt="AMFPRO" width="160" style="display: block; border: 0;">
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 40px 30px 20px 30px; color: #334155; text-align: center;">
                            <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 24px;">¡Nuevo Registro de Afiliado!</h2>
                            <p style="margin: 0 0 25px 0; font-size: 15px; line-height: 1.6; color: #64748b;">
                                Se ha recibido una nueva solicitud en el sistema. Para revisar la información completa o validar sus documentos, ingresa al módulo de afiliados en la intranet.
                            </p>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="center" style="padding: 0 0 30px 0;">
                                        <a href="https://test-intranet.amfpro.mx/afiliados" target="_blank" style="background-color: #50c026; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block;">Revisar en Intranet</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 0 30px 40px 30px;">
                            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px;">
                                
                                <h3 style="margin: 0 0 20px 0; font-size: 16px; color: #0f172a; border-bottom: 2px solid #50c026; padding-bottom: 10px; display: inline-block; text-transform: uppercase; letter-spacing: 1px;">
                                    Resumen de Datos
                                </h3>

                                <table border="0" cellpadding="10" cellspacing="0" width="100%" style="font-size: 14px; color: #334155;">
                                    <tr>
                                        <td width="35%" style="color: #64748b; font-weight: bold; border-bottom: 1px solid #e2e8f0;">ID Sistema:</td>
                                        <td width="65%" style="color: #0f172a; border-bottom: 1px solid #e2e8f0; font-weight: bold;">AMF-{{$afiliado->id_afi}}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #64748b; font-weight: bold; border-bottom: 1px solid #e2e8f0;">NUI:</td>
                                        <td style="color: #50c026; font-weight: bold; font-size: 16px; border-bottom: 1px solid #e2e8f0;">{{$afiliado->nui}}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #64748b; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Nombre:</td>
                                        <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">{{$afiliado->nombre}} {{$afiliado->apellido_pat}} {{$afiliado->apellido_mat}}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #64748b; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Correo:</td>
                                        <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;"><a href="mailto:{{$afiliado->mail}}" style="color: #2190E3; text-decoration: none;">{{$afiliado->mail}}</a></td>
                                    </tr>
                                    <tr>
                                        <td style="color: #64748b; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Teléfono:</td>
                                        <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">{{$afiliado->celular}}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #64748b; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Sexo / Edad:</td>
                                        <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">{{$afiliado->sexo}} ({{$afiliado->edad}} años)</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #64748b; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Nacimiento:</td>
                                        <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">{{$afiliado->nacimiento}}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #64748b; font-weight: bold; border-bottom: 1px solid #e2e8f0;">División:</td>
                                        <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">{{$afiliado->division}}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #64748b; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Equipo:</td>
                                        <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0; font-weight: bold;">{{$afiliado->club}}</td>
                                    </tr>
                                    @if ($afiliado->division == "Liga MX" || $afiliado->division == "Liga MX Femenil")
                                    <tr>
                                        <td style="color: #64748b; font-weight: bold;">Categoría:</td>
                                        <td style="color: #0f172a;">{{$afiliado->categoria}}</td>
                                    </tr>
                                    @endif
                                </table>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="background-color: #f8fafc; padding: 30px 20px; border-top: 1px solid #e2e8f0;">
                            
                            <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.facebook.com/AMFproMX" target="_blank"><img alt="Facebook" src="https://amfpro.mx/public/estilos_pagina/assets/images/Fverde.png" width="32" style="display: block; border: 0;"></a>
                                    </td>
                                    <td style="padding: 0 12px;">
                                        <a href="https://twitter.com/AMFproMX" target="_blank"><img alt="Twitter" src="https://amfpro.mx/public/estilos_pagina/assets/images/Xverde.png" width="32" style="display: block; border: 0;"></a>
                                    </td>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.instagram.com/amfpromx" target="_blank"><img alt="Instagram" src="https://amfpro.mx/public/estilos_pagina/assets/images/Iverde.png" width="32" style="display: block; border: 0;"></a>
                                    </td>
                                </tr>
                            </table>

                            <p style="margin: 0 0 15px 0; font-size: 13px; color: #475569; font-weight: bold;">
                                <a href="mailto:contacto@amfpro.mx" style="color: #50c026; text-decoration: none;">contacto@amfpro.mx</a> &nbsp;|&nbsp; 728 690 6040
                            </p>
                            
                            <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.6;">
                                Av. Industria Automotriz N.33 Int. 203 Col. Parque Industrial,<br>
                                Lerma, Estado de México. C.P. 52004
                            </p>

                        </td>
                    </tr>

                </table>
                
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="center" style="padding: 20px 0; color: #94a3b8; font-size: 12px;">
                            &copy; {{ date('Y') }} Asociación Mexicana de Futbolistas. Todos los derechos reservados.
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>

</body>
</html>