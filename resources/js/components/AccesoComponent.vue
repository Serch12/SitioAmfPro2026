<template>
    <div class="min-h-screen flex items-center justify-center p-4 sm:p-8 antialiased text-gray-800 bg-dots w-full">
        
        <!-- Contenedor Principal -->
        <main class="bg-white rounded-[2rem] shadow-2xl w-full max-w-md mx-auto overflow-hidden relative fade-in-up border border-gray-100">
            
            <!-- Banner superior (Fondo Navy) -->
            <div class="h-36 bg-[#001489] relative">
                <!-- Patrón decorativo en el banner -->
                <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(white 1.5px, transparent 1.5px); background-size: 16px 16px;"></div>
            </div>

            <!-- Sección de Foto de Perfil superpuesta -->
            <div class="relative flex justify-center -mt-20">
                <img :src="`https://intranet-clinica.rehabevolution.com/ArchivosSistema/Documentacion/${consulta.foto}`" 
                     alt="Foto de Perfil" 
                     class="w-36 h-36 rounded-full border-[6px] border-white object-cover shadow-lg bg-white relative z-10 transition-transform hover:scale-105 duration-300">
                
                <!-- Badge de estado (En línea / Activo) -->
                <div v-if="consulta.estatus !== 1" class="absolute bottom-2 right-[32%] w-6 h-6 bg-[#00B5E2] border-2 border-white rounded-full z-20 flex items-center justify-center shadow-sm" title="Perfil Verificado">
                    <i class="fa-solid fa-check text-white text-[10px]"></i>
                </div>
            </div>

            <!-- Contenido principal (Nombres y Contacto) -->
            <div class="px-6 pt-5 pb-8 text-center sm:px-10">
                
                <!-- Nombre, Título y Empresa -->
                <div class="fade-in-up delay-100">
                    <h1 class="text-3xl font-bold text-[#001489] tracking-tight" style="font-size: 30px;">
                        {{ consulta.nombre }} {{ consulta.paterno }} {{ consulta.materno }}
                    </h1>
                    <p class="text-[#00B5E2] font-semibold mt-1 text-lg">{{ consulta.puesto }}</p>
                </div>

                <!-- Divisor sutil -->
                <div class="h-px bg-gray-100 w-full my-6 fade-in-up delay-200"></div>

                <!-- Lista de Contacto -->
                <ul class="text-left space-y-4 fade-in-up delay-200">
                    
                    <!-- Teléfono -->
                    <li>
                        <button @click="copyToClipboard(consulta.telefono || '5587172501', 'teléfono')" class="w-full group flex items-center p-3 hover:bg-gray-50 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-100 cursor-pointer">
                            <div class="w-12 h-12 rounded-full bg-[#00B5E2]/10 flex items-center justify-center text-[#00B5E2] group-hover:bg-[#00B5E2]/20 group-hover:scale-110 transition-all shadow-sm">
                                <i class="fa-solid fa-phone text-lg"></i>
                            </div>
                            <div class="ml-4 flex-1 text-left">
                                <p class="text-xs text-gray-400 font-medium uppercase tracking-wider">Teléfono Móvil</p>
                                <p class="text-gray-800 font-semibold mt-0.5 text-base">{{ consulta.telefono || '5587172501' }}</p>
                            </div>
                            <i class="fa-regular fa-copy text-gray-300 group-hover:text-[#00B5E2] transition-colors"></i>
                        </button>
                    </li>

                    <!-- Correo -->
                    <li>
                        <button @click="copyToClipboard(consulta.email || 'alejandro.m@empresa.com', 'correo')" class="w-full group flex items-center p-3 hover:bg-gray-50 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-100 cursor-pointer">
                            <div class="w-12 h-12 rounded-full bg-[#00B5E2]/10 flex items-center justify-center text-[#00B5E2] group-hover:bg-[#00B5E2]/20 group-hover:scale-110 transition-all shadow-sm">
                                <i class="fa-solid fa-envelope text-lg"></i>
                            </div>
                            <div class="ml-4 flex-1 text-left overflow-hidden">
                                <p class="text-xs text-gray-400 font-medium uppercase tracking-wider">Correo Electrónico</p>
                                <p class="text-gray-800 font-semibold mt-0.5 truncate max-w-[200px] text-base">{{ consulta.email }}</p>
                            </div>
                            <i class="fa-regular fa-copy text-gray-300 group-hover:text-[#00B5E2] transition-colors"></i>
                        </button>
                    </li>

                    <!-- Ubicación -->
                    <li>
                        <a :href="'https://maps.google.com/?q=' + encodeURIComponent('Av. Oaxaca 5-6, San Jerónimo Aculco, La Magdalena Contreras, 10700 Ciudad de México, CDMX')" target="_blank" class="w-full group flex items-center p-3 hover:bg-gray-50 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div class="shrink-0 w-12 h-12 rounded-full bg-[#00B5E2]/10 flex items-center justify-center text-[#00B5E2] group-hover:bg-[#00B5E2]/20 group-hover:scale-110 transition-all shadow-sm">
                                <i class="fa-solid fa-location-dot text-lg"></i>
                            </div>
                            <div class="ml-4 flex-1 text-left">
                                <p class="text-xs text-gray-400 font-medium uppercase tracking-wider">Dirección</p>
                                <p class="text-gray-800 font-semibold mt-0.5 text-sm sm:text-base leading-tight">
                                    Av. Oaxaca 5-6, San Jerónimo Aculco, La Magdalena Contreras, 10700 Ciudad de México, CDMX
                                </p>
                            </div>
                            <i class="fa-solid fa-arrow-up-right-from-square text-gray-300 group-hover:text-[#00B5E2] transition-colors shrink-0 ml-2"></i>
                        </a>
                    </li>
                </ul>

                <!-- Botones de Acción -->
                <div class="mt-8 fade-in-up delay-300">
                    <!-- Botón Principal: WhatsApp -->
                    <a :href="'https://wa.me/' + (consulta.telefono || '5587172501') + '?text=Hola%20estoy%20interesado%20en%20contactarte.'" 
                       target="_blank"
                       class="btn-whatsapp w-full bg-[#DBE442] hover:bg-[#c8d132] text-[#001489] font-bold py-4 px-6 rounded-2xl flex items-center justify-center transition-all shadow-[0_8px_30px_rgba(219,228,66,0.4)]">
                        <i class="fa-brands fa-whatsapp text-2xl mr-3"></i>
                        <span class="text-lg">Contactar por WhatsApp</span>
                    </a>
                    
                    <!-- Botón Secundario: Llamar -->
                    <a :href="'tel:' + (consulta.telefono || '5587172501')" class="mt-4 w-full bg-white border-2 border-gray-100 text-gray-600 font-medium py-3 px-6 rounded-2xl flex items-center justify-center hover:bg-gray-50 hover:border-gray-200 transition-all hover:text-[#001489] group">
                        <i class="fa-solid fa-phone-volume mr-2 group-hover:text-[#00B5E2] transition-colors"></i>
                        Llamar ahora
                    </a>
                </div>

            </div>
        </main>

        <!-- Toast Notification Animado (Al copiar datos) -->
        <transition name="toast">
            <div v-if="toast.show" 
                 class="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#001489] text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center">
                <i class="fa-solid fa-circle-check text-[#DBE442] mr-2"></i>
                <span class="font-medium text-sm">{{ toast.message }}</span>
            </div>
        </transition>

    </div>
</template>

<script>
export default {
    props: {
        consulta: {
            type: Object,
            required: true,
            default: () => ({})
        }
    },
    data() {
        return {
            toast: {
                show: false,
                message: ''
            }
        };
    },
    methods: {
        showToast(message) {
            this.toast.message = message;
            this.toast.show = true;
            setTimeout(() => {
                this.toast.show = false;
            }, 2500);
        },
        copyToClipboard(text, type) {
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(() => {
                    this.showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} copiado`);
                }).catch(() => this.fallbackCopyTextToClipboard(text, type));
            } else {
                this.fallbackCopyTextToClipboard(text, type);
            }
        },
        fallbackCopyTextToClipboard(text, type) {
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
                if (successful) {
                    this.showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} copiado`);
                }
            } catch (err) {
                console.error('Error al copiar', err);
            }
            document.body.removeChild(textArea);
        }
    }
};
</script>

<style scoped>
/* Fondo sutil tipo puntos */
.bg-dots {
    background-color: #f8fafc;
    background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
    background-size: 24px 24px;
}

/* Animación de entrada suave en cascada */
.fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
}

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Efecto que invita a darle clic al botón de WhatsApp */
@keyframes pulse-soft {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
}
.btn-whatsapp:hover {
    animation: pulse-soft 2s infinite;
}

/* Transición para el mensaje de copiado (Toast) */
.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translate(-50%, 1rem);
}
</style>