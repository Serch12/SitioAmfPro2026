<template>
  <transition name="fade-slide">
    <div class="detalle-noticia-wrapper bg-white">
      
      <div class="reading-progress-bar" :style="{ width: scrollProgress + '%' }"></div>

      <div class="news-hero" :style="{ backgroundImage: `url('${obtenerRutaImagen(noticia.imagen)}')` }">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <button @click="$emit('regresar')" class="btn-back mb-4">
            <i class="material-icons">arrow_back</i> <span>Regresar al listado</span>
          </button>
          
          <div class="badge-category mb-2">{{ noticia.categoria }}</div>
          <h1 class="display-3 fw-black text-white mb-3">{{ noticia.titulo }}</h1>
          
          <div class="meta-info d-flex align-items-center gap-3 fw-bold" style="color:#50c026;">
            <span class="d-flex align-items-center gap-1">
              <i class="material-icons" style="font-size: 1.1rem;">calendar_month</i> {{ noticia.fecha }}
            </span>
            <span class="text-white-50">•</span>
            <span class="d-flex align-items-center gap-1 text-white-50">
              <i class="material-icons" style="font-size: 1.1rem;">schedule</i> {{ tiempoLectura }} min de lectura
            </span>
          </div>

        </div>
      </div>

      <div class="container content-body py-5">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            
            <div class="noticia-texto mb-5" v-html="detalleProcesado"></div>

            <div class="share-section border-top border-bottom py-4 mb-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
              <span class="fw-bold text-muted">¿Te gustó esta noticia? Compártela:</span>
              
              <div class="d-flex gap-2">
                <button @click="copiarEnlace" class="btn btn-success rounded-pill px-4 d-inline-flex align-items-center gap-2">
                  <i class="material-icons" style="font-size: 1.2rem;">link</i> Copiar Link
                </button>
              </div>
            </div>

            <div v-if="galeriaImagenes && galeriaImagenes.length > 0" class="gallery-section mt-5 pt-4">
              <h3 class="fw-black text-dark mb-4 display-6">
                Galería <span class="amf-green-text-2">Exclusiva</span>
              </h3>
              
              <div class="pro-gallery-grid">
                <div v-for="(img, idx) in galeriaImagenes" :key="idx" class="pro-gallery-item" @click="abrirLightbox(idx)">
                  <img :src="obtenerRutaImagen(img.nombre)" alt="Galería AMFPro">
                  
                  <div class="pro-gallery-overlay">
                    <i class="material-icons">fullscreen</i>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <transition name="fade">
        <div v-if="lightboxVisible" class="lightbox-modal" @click.self="cerrarLightbox">
          <button class="lightbox-close" @click="cerrarLightbox">
            <i class="material-icons">close</i>
          </button>
          
          <button class="lightbox-nav nav-prev" @click="prevImg" v-if="galeriaImagenes.length > 1">
            <i class="material-icons">chevron_left</i>
          </button>

          <img :src="obtenerRutaImagen(galeriaImagenes[lightboxIndex].nombre)" class="lightbox-img">

          <button class="lightbox-nav nav-next" @click="nextImg" v-if="galeriaImagenes.length > 1">
            <i class="material-icons">chevron_right</i>
          </button>
        </div>
      </transition>

    </div>
  </transition>
</template>

<script>
import axios from 'axios';

export default {
  props: ['noticia'],
  data() {
    return {
      lightboxVisible: false,
      lightboxIndex: 0,
      galeriaImagenes: [], 
      scrollProgress: 0, 
    }
  },
  mounted() {
    this.cargarGaleria();
    window.addEventListener('scroll', this.calcularProgreso);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.calcularProgreso);
  },
  computed: {
    detalleProcesado() {
      if (!this.noticia.detalle) return '';
      let html = this.noticia.detalle;
      return html.replace(/src="(?!\s*https?:\/\/)([^"]+)"/g, (match, path) => {
        if (path.startsWith('/')) {
           return `src="http://amfpro.mx${path}"`;
        }
        return `src="http://amfpro.mx/intranet/public/ArchivosSistema/Post/${path}"`;
      });
    },
    // NUEVA FUNCIÓN PREMIUM: Calcula el tiempo estimado de lectura
    tiempoLectura() {
      if (!this.noticia.detalle) return 1;
      // Quitamos las etiquetas HTML para dejar solo el texto puro
      const textoPlano = this.noticia.detalle.replace(/<[^>]+>/g, '');
      // Contamos las palabras dividiendo por los espacios
      const totalPalabras = textoPlano.split(/\s+/).filter(word => word.length > 0).length;
      // Una persona promedio lee 200 palabras por minuto
      const minutos = Math.ceil(totalPalabras / 200);
      return minutos === 0 ? 1 : minutos;
    }
  },
  methods: {
    async cargarGaleria() {
      try {
        const response = await axios.get(`noticias/${this.noticia.id}/galeria`);
        this.galeriaImagenes = response.data;
      } catch (error) {
        console.error("Error al cargar la galería:", error);
      }
    },
    obtenerRutaImagen(nombreImagen) {
      if (!nombreImagen) return 'recursos/default.png';
      let ruta = nombreImagen.startsWith('http') 
        ? nombreImagen 
        : 'http://amfpro.mx/intranet/public/ArchivosSistema/Post/' + nombreImagen;
      return encodeURI(ruta);
    },
    calcularProgreso() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const height = scrollHeight - clientHeight;
      if (height > 0) {
        this.scrollProgress = (scrollTop / height) * 100;
      } else {
        this.scrollProgress = 0;
      }
    },
    copiarEnlace() {
        const url = `${window.location.origin}/noticias/${this.noticia.ruta || this.noticia.id}`;
        navigator.clipboard.writeText(url).then(() => {
            if (window.Swal) {
                window.Swal.fire({
                    toast: true, position: 'top-end', icon: 'success', title: '¡Enlace copiado!',
                    text: 'Listo para compartir con tus amigos.', showConfirmButton: false,
                    timer: 3000, timerProgressBar: true, background: '#fff', color: '#333', iconColor: '#50c026'
                });
            } else if (window.toastr) {
                window.toastr.success('Listo para compartir', '¡Enlace copiado!');
            }
        });
    },
    abrirLightbox(index) {
      this.lightboxIndex = index;
      this.lightboxVisible = true;
      document.body.style.overflow = 'hidden'; 
    },
    cerrarLightbox() {
      this.lightboxVisible = false;
      document.body.style.overflow = 'auto'; 
    },
    prevImg() {
      if (this.lightboxIndex > 0) { this.lightboxIndex--; } 
      else { this.lightboxIndex = this.galeriaImagenes.length - 1; }
    },
    nextImg() {
      if (this.lightboxIndex < this.galeriaImagenes.length - 1) { this.lightboxIndex++; } 
      else { this.lightboxIndex = 0; }
    }
  }
}
</script>

<style lang="scss" scoped>
.reading-progress-bar {
  position: fixed;
  top: 65px; 
  left: 0;
  height: 7px; 
  background-color: #50c026;
  z-index: 999999; 
  transition: width 0.1s ease;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 2px 10px rgba(80, 192, 38, 0.6); 
}

.detalle-noticia-wrapper {
  position: relative;
  min-height: 100vh;
  z-index: 1000;
  
  .news-hero {
    height: 70vh;
    background-color: #111; 
    background-size: contain; 
    background-position: top center; 
    background-attachment: fixed; 
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding-bottom: 4rem;

    .hero-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 2;
    }
  }

  /* BOTÓN ALINEADO MILIMÉTRICAMENTE */
  .btn-back {
    display: inline-flex;
    align-items: center;
    justify-content: center; /* Asegura el centrado en el eje flex */
    gap: 6px; 
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.3);
    color: white;
    padding: 8px 24px;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    font-weight: 500;
    
    i { 
      font-size: 1.3rem; 
      line-height: 0; /* Mata la caja invisible del ícono */
    }
    span {
      line-height: 1; /* Iguala la altura de la fuente */
      padding-top: 2px; /* Ajuste óptico fino para la fuente Roboto */
    }
    
    &:hover { 
      background: #50c026; 
      border-color: #50c026; 
      transform: translateX(-5px); 
    }
  }

  .badge-category {
    background: #50c026;
    color: white;
    display: inline-block;
    padding: 0px 16px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .noticia-texto {
    font-size: 1.15rem;
    line-height: 1.9;
    color: #444;
    text-align: justify; 
    
    ::v-deep p:first-of-type::first-letter {
      font-size: 4rem;
      float: left;
      margin-top: 8px;
      margin-right: 12px;
      margin-bottom: -5px;
      font-weight: 900;
      color: #50c026;
      line-height: 0.8;
      text-transform: uppercase;
    }

    ::v-deep p { 
      margin-bottom: 0.3rem; 
    }
    ::v-deep img { 
      max-width: 100%; 
      height: auto; 
      border-radius: 12px; 
      margin: 2rem 0; 
      box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    }
    ::v-deep a { color: #50c026; font-weight: bold; text-decoration: none; }
  }

  .pro-gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .pro-gallery-item {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 1 / 1; 
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    background: #f8f9fa;

    img { 
      width: 100%; 
      height: 100%; 
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
    }

    .pro-gallery-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(80, 192, 38, 0.8), rgba(0,0,0,0.2));
      display: flex; 
      align-items: center; 
      justify-content: center;
      opacity: 0; 
      transition: opacity 0.4s ease;

      i { 
        color: white; 
        font-size: 3rem; 
        transform: scale(0.5); 
        transition: transform 0.4s cubic-bezier(0.2, 1, 0.3, 1);
      }
    }

    &:hover {
      img { transform: scale(1.1); }
      .pro-gallery-overlay { opacity: 1; }
      .pro-gallery-overlay i { transform: scale(1); }
    }
  }
}

.lightbox-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
}

.lightbox-img {
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  animation: zoomIn 0.3s ease;
}

.lightbox-close {
  position: absolute;
  top: 30px;
  right: 40px;
  background: transparent;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  transition: color 0.3s;
  &:hover { color: #50c026; }
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  
  i { font-size: 2.5rem; }
  
  &:hover { background: #50c026; }
  
  &.nav-prev { left: 30px; }
  &.nav-next { right: 30px; }
}

.fw-black { font-weight: 900; }
.amf-green-text-2 { color: #50c026; }

.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.5s; }
.fade-slide-enter, .fade-slide-leave-to { opacity: 0; transform: translateY(30px); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter, .fade-leave-to { opacity: 0; }

@keyframes zoomIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@media (max-width: 768px) {
  .news-hero {
    background-size: cover !important; 
    background-position: center center !important; 
    background-attachment: scroll !important; 
    height: 55vh !important; 
    padding-bottom: 2rem !important;
  }
  .news-hero .display-3 {
    font-size: 2.5rem;
    line-height: 1.1;
  }
}
</style>