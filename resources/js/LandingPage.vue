<template>
  <div class="amf-landing-page bg-white">
    <header 
      class="header-main fixed-top" 
      :class="{ 'is-scrolled': scrollPosition > 20 }"
    >
      <div class="container-fluid py-0 px-3 px-lg-5 position-relative h-100">
        <div class="header-container h-100 d-flex align-items-center justify-content-between">
          
          <div class="header-side left-side">
            <div class="hash-tag-wrapper">
              <span class="hash-tag-gradient">#UnidosSomosMásFuertes</span>
            </div>
          </div>
          
          <div class="header-center" @click="scrollToPosition(0)">
            <img src="recursos/logo.png" alt="Logo AMFPRO" class="logo-header">
            <!-- Destello detrás del logo al hacer hover -->
            <div class="logo-glow"></div>
          </div>
          
          <div class="header-side right-side">
            <div class="social-group">
              <a href="#" class="social-item"><img src="recursos/x.png" alt="X"></a>
              <a href="#" class="social-item"><img src="recursos/facebook.png" alt="FB"></a>
              <a href="#" class="social-item"><img src="recursos/instagram.png" alt="IG"></a>
            </div>
          </div>

        </div>
      </div>

      <!-- Barra de Progreso Dinámica -->
      <div class="scroll-progress-bar">
        <div class="progress-fill" :style="{ width: scrollPercentage + '%' }"></div>
      </div>
    </header>

    <FloatingMenu 
      v-show="!noticiaEnDetalle"
      @go-to-section="scrollToSection" 
      @go-to-position="scrollToPosition" 
    />

    <div v-if="!noticiaEnDetalle">
      <SectionHome :scrollPosition="scrollPosition" />
      <SectionTalentos :scrollPosition="scrollPosition" />
      <SectionJuridico />
      <SectionNoticias @noticia-seleccionada="mostrarDetalle" />
    </div>

    <DetalleNoticia v-else :noticia="noticiaEnDetalle" @regresar="cerrarDetalle" />
    <SectionFooter />
  </div>
</template>

<script>
import FloatingMenu from './components/FloatingMenuComponent.vue';
import SectionHome from './components/SectionHomeComponent.vue';
import SectionTalentos from './components/SectionTalentosComponent.vue';
import SectionJuridico from './components/SectionJuridicoComponent.vue';
import SectionNoticias from './components/SectionNoticiasComponent.vue';
import SectionFooter from './components/SectionFooterComponent.vue';
import DetalleNoticia from './components/DetalleNoticiaComponent.vue';

export default {
  components: {
    FloatingMenu, SectionHome, SectionTalentos, SectionJuridico, SectionNoticias, SectionFooter, DetalleNoticia
  },
  data() {
    return {
      scrollPosition: 0,
      scrollPercentage: 0,
      noticiaEnDetalle: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
      
      // Cálculo de la barra de progreso
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollPercentage = height > 0 ? (winScroll / height) * 100 : 0;
    },
    mostrarDetalle(noticia) {
      this.noticiaEnDetalle = noticia;
      const slug = noticia.ruta || noticia.id;
      window.history.pushState(null, '', '/noticias/' + slug);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    cerrarDetalle() {
      this.noticiaEnDetalle = null;
      window.history.pushState(null, '', '/');
      this.$nextTick(() => {
          const section = document.querySelector('.section-noticias'); 
          if (section) section.scrollIntoView({ behavior: 'smooth' });
      });
    },
    scrollToPosition(pos) {
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&family=Montserrat:wght@800&display=swap');

$amf-main: #50c026;
$amf-dark: #112a18;

.header-main {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  background: rgba(255, 255, 255, 0.98);
  height: 100px; /* Un poco más alto al inicio para mayor presencia */
  z-index: 1100;
  border-bottom: 1px solid rgba(0,0,0,0.03);
  animation: headerDrop 1.2s cubic-bezier(0.25, 1, 0.5, 1);
  position: fixed;
  width: 100%;
  top: 0;

  /* EFECTO ULTRA GLASS AL HACER SCROLL */
  &.is-scrolled {
    height: 75px;
    background: rgba(255, 255, 255, 0.75);
    /* Saturate hace que los colores detrás brillen, dándole un look de cristal real */
    backdrop-filter: blur(25px) saturate(180%);
    -webkit-backdrop-filter: blur(25px) saturate(180%);
    box-shadow: 0 15px 35px rgba(0,0,0,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.5);

    .logo-header {
      height: 48px;
    }
  }

  /* BARRA DE PROGRESO INFERIOR */
  .scroll-progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: transparent;
    
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #3e9452, #50c026, #74ff3b);
      box-shadow: 0 0 10px rgba(80, 192, 38, 0.8);
      width: 0%;
      transition: width 0.1s ease-out;
      border-radius: 0 5px 5px 0;
    }
  }

  /* IZQUIERDA: Hashtag con Gradiente Animado */
  .left-side {
    .hash-tag-wrapper {
      cursor: default;
      
      .hash-tag-gradient {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        /* Efecto Metálico/Neón en el texto */
        background: linear-gradient(to right, #999 0%, #333 50%, #50c026 100%);
        background-size: 200% auto;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        animation: shineText 5s linear infinite;
        transition: transform 0.3s ease;
        display: inline-block;
      }
      
      &:hover .hash-tag-gradient {
        transform: scale(1.05) translateX(5px);
      }
    }
  }

  /* CENTRO: Logo interactivo */
  .header-center {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .logo-header {
      height: 70px;
      transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      z-index: 2;
    }

    .logo-glow {
      position: absolute;
      width: 50%;
      height: 50%;
      background: radial-gradient(circle, rgba(80,192,38,0.4) 0%, transparent 70%);
      opacity: 0;
      transition: all 0.5s ease;
      z-index: 1;
      filter: blur(10px);
    }

    &:hover {
      .logo-header {
        transform: scale(1.1) translateY(-2px);
        filter: drop-shadow(0 10px 15px rgba(0,0,0,0.15));
      }
      .logo-glow {
        opacity: 1;
        transform: scale(2);
      }
    }
  }

  /* DERECHA: Redes sociales Ultra Pro */
  .right-side {
    .social-group {
      display: flex;
      gap: 15px;

      .social-item {
        width: 42px;
        height: 42px;
        background: rgba(0,0,0,0.03);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* Efecto Rebote */
        position: relative;
        overflow: hidden;

        img {
          width: 18px;
          height: 18px;
          object-fit: contain;
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
          filter: grayscale(100%) opacity(70%);
        }

        /* Aura de fondo al hacer hover */
        &::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: $amf-main;
          transition: top 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 1;
        }

        &:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 20px rgba(80, 192, 38, 0.3);

          &::before {
            top: 0;
          }

          img {
            filter: brightness(0) invert(1); /* Pone el ícono blanco perfecto */
            transform: scale(1.2);
          }
        }
      }
    }
  }
}

/* ANIMACIONES */
@keyframes headerDrop {
  0% { transform: translateY(-100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes shineText {
  to { background-position: 200% center; }
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .header-main {
    height: 80px;
    
    .left-side { display: none; } 
    
    .logo-header {
      height: 45px !important;
    }

    .right-side .social-group {
      gap: 8px;
      
      .social-item {
        width: 36px;
        height: 36px;
        
        img { width: 16px; height: 16px; }
      }
    }
  }
}
</style>