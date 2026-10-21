<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <!-- Viewport asegurado para móviles y tablets -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarjeta de Identificación | Perfil Digital</title>
    
    <!-- Google Fonts: Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- FontAwesome para los Iconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Tailwind CSS para el diseño responsivo -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Configuración personalizada con tu nueva paleta de colores -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        customGreen: '#72c844',
                        customGreenHover: '#61b038',
                        customRed: '#ff0000',
                        customGray: '#7e8083',
                        customBlack: '#000000',
                    }
                }
            }
        }
    </script>

    <!-- Estilos personalizados y Animaciones -->
    <style>
        body {
            background-color: #ffffff;
            background-image: radial-gradient(#7e8083 1px, transparent 1px);
            background-size: 24px 24px;
        }

        .fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }

        @keyframes pulse-soft {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
        }
        .btn-whatsapp:hover {
            animation: pulse-soft 2s infinite;
        }

        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
    </style>
</head>
<body class="min-h-screen flex items-center justify-center p-4 sm:p-8 antialiased text-customBlack">

    <!-- Contenedor Principal -->
    <main class="bg-white rounded-[2rem] shadow-2xl w-full max-w-md mx-auto overflow-hidden relative fade-in-up border border-customGray/20">
        
        <!-- Banner superior (Negro #000000) -->
        <div class="h-36 bg-customBlack relative">
            <div class="absolute inset-0 opacity-15" style="background-image: radial-gradient(#ffffff 1.5px, transparent 1.5px); background-size: 16px 16px;"></div>
        </div>

        <!-- Sección de Foto de Perfil superpuesta -->
        <div class="relative flex justify-center -mt-20">
            {{-- <img src="https://test-intranet.amfpro.mx/ArchivosSistema/Perfil/{{$$consulta->foto_perfil}}"
                 alt="Foto de Perfil" 
                 class="w-36 h-36 rounded-full border-[6px] border-white object-cover shadow-lg bg-white relative z-10 transition-transform hover:scale-105 duration-300"> --}}
            
            <!-- Badge de estado (Rojo #ff0000) -->
            <div class="absolute bottom-2 right-[32%] w-6 h-6 bg-customRed border-2 border-white rounded-full z-20 flex items-center justify-center shadow-sm" title="Perfil Verificado">
                <i class="fa-solid fa-check text-white text-[10px]"></i>
            </div>
        </div>

        <!-- Contenido principal -->
        <div class="px-6 pt-5 pb-8 text-center sm:px-10">
            
            <!-- Nombres y Título -->
            <div class="fade-in-up delay-100">
                <h1 class="text-3xl font-bold text-customBlack tracking-tight">{{$consulta->nombre}} {{$consulta->apPaterno}} {{$consulta->apMaterno}}</h1>
                <p class="text-customGreen font-semibold mt-1 text-lg">{{$consulta->puesto}}</p>
            </div>

            <!-- Divisor sutil -->
            <div class="h-px bg-customGray/20 w-full my-6 fade-in-up delay-200"></div>

            <!-- Lista de Contacto -->
            <ul class="text-left space-y-4 fade-in-up delay-200">
                
                <!-- Teléfono -->
                <li>
                    <button onclick="copyToClipboard('7286906040', 'teléfono')" class="w-full group flex items-center p-3 hover:bg-gray-50 rounded-2xl transition-all duration-300 border border-transparent hover:border-customGray/20 cursor-pointer">
                        <div class="w-12 h-12 rounded-full bg-customGreen/10 flex items-center justify-center text-customGreen group-hover:bg-customGreen/20 group-hover:scale-110 transition-all shadow-sm">
                            <i class="fa-solid fa-phone text-lg"></i>
                        </div>
                        <div class="ml-4 flex-1 text-left">
                            <p class="text-xs text-customGray font-medium uppercase tracking-wider">Teléfono Móvil</p>
                            <p class="text-customBlack font-semibold mt-0.5 text-base">{{ '7286906040' }}</p>
                        </div>
                        <i class="fa-regular fa-copy text-customGray group-hover:text-customGreen transition-colors"></i>
                    </button>
                </li>

                <!-- Correo Electrónico -->
                <li>
                    <button onclick="copyToClipboard('{{$consulta->email}}', 'correo')" class="w-full group flex items-center p-3 hover:bg-gray-50 rounded-2xl transition-all duration-300 border border-transparent hover:border-customGray/20 cursor-pointer">
                        <div class="w-12 h-12 rounded-full bg-customGreen/10 flex items-center justify-center text-customGreen group-hover:bg-customGreen/20 group-hover:scale-110 transition-all shadow-sm">
                            <i class="fa-solid fa-envelope text-lg"></i>
                        </div>
                        <div class="ml-4 flex-1 text-left">
                            <p class="text-xs text-customGray font-medium uppercase tracking-wider">Correo Electrónico</p>
                            <p class="text-customBlack font-semibold mt-0.5 truncate max-w-[200px] text-base">{{$consulta->email}}</p>
                        </div>
                        <i class="fa-regular fa-copy text-customGray group-hover:text-customGreen transition-colors"></i>
                    </button>
                </li>

                <!-- Ubicación -->
                <li>
                    <a href="https://maps.google.com/?q=Av.+de+la+Industria+Automotriz+33-Int.+203,+Parque+Industrial+Lerma+Toluca,+52004+Lerma+de+Villada,+Méx." target="_blank" class="w-full group flex items-center p-3 hover:bg-gray-50 rounded-2xl transition-all duration-300 border border-transparent hover:border-customGray/20">
                        <div class="shrink-0 w-12 h-12 rounded-full bg-customGreen/10 flex items-center justify-center text-customGreen group-hover:bg-customGreen/20 group-hover:scale-110 transition-all shadow-sm">
                            <i class="fa-solid fa-location-dot text-lg"></i>
                        </div>
                        <div class="ml-4 flex-1 text-left">
                            <p class="text-xs text-customGray font-medium uppercase tracking-wider">Dirección</p>
                            <p class="text-customBlack font-semibold mt-0.5 text-sm sm:text-base leading-tight">
                                Av. de la Industria Automotriz 33-Int. 203, Parque Industrial Lerma Toluca, 52004 Lerma de Villada, Méx.
                            </p>
                        </div>
                        <i class="fa-solid fa-arrow-up-right-from-square text-customGray group-hover:text-customGreen transition-colors shrink-0 ml-2"></i>
                    </a>
                </li>
            </ul>

            <!-- Botones de Acción -->
            <div class="mt-8 fade-in-up delay-300">
                <!-- Botón Principal: WhatsApp (Verde #72c844) -->
                <a href="https://wa.me/7286906040?text=Hola%AMFpro,%20estoy%20interesado%20en%20contactarte." 
                   target="_blank"
                   class="btn-whatsapp w-full bg-customGreen hover:bg-customGreenHover text-customBlack font-bold py-4 px-6 rounded-2xl flex items-center justify-center transition-all shadow-[0_8px_30px_rgba(114,200,68,0.3)]">
                    <i class="fa-brands fa-whatsapp text-2xl mr-3"></i>
                    <span class="text-lg">Contactar por WhatsApp</span>
                </a>
                
                <!-- Botón Secundario (Llamar ahora) -->
                <a href="tel:+7286906040" class="mt-4 w-full bg-white border-2 border-customGray/20 text-customBlack font-medium py-3 px-6 rounded-2xl flex items-center justify-center hover:bg-gray-50 hover:border-customBlack transition-all group">
                    <i class="fa-solid fa-phone-volume mr-2 text-customGray group-hover:text-customGreen transition-colors"></i>
                    Llamar ahora
                </a>
            </div>

        </div>
    </main>

    <!-- Toast Notification -->
    <div id="toast" class="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-customBlack text-white px-6 py-3 rounded-full shadow-2xl opacity-0 pointer-events-none transition-all duration-300 z-50 flex items-center translate-y-4 border border-customGray/30">
        <i class="fa-solid fa-circle-check text-customGreen mr-2"></i>
        <span id="toast-message" class="font-medium text-sm">Copiado al portapapeles</span>
    </div>

    <!-- Scripts JavaScript para interactividad -->
    <script>
        function copyToClipboard(text, type) {
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(() => {
                    showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} copiado`);
                }).catch(err => {
                    fallbackCopyTextToClipboard(text, type);
                });
            } else {
                fallbackCopyTextToClipboard(text, type);
            }
        }

        function fallbackCopyTextToClipboard(text, type) {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                const successful = document.execCommand('copy');
                if(successful) {
                    showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} copiado`);
                }
            } catch (err) {
                console.error('Error al copiar', err);
            }
            document.body.removeChild(textArea);
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toast-message');
            
            toastMessage.textContent = message;
            
            toast.classList.remove('opacity-0', 'translate-y-4');
            toast.classList.add('opacity-100', 'translate-y-0');
            
            setTimeout(() => {
                toast.classList.remove('opacity-100', 'translate-y-0');
                toast.classList.add('opacity-0', 'translate-y-4');
            }, 2500);
        }
    </script>
</body>
</html>