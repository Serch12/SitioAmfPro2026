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
              <span class="hash-tag-gradient">#UnidosSomosMasFuertes</span>
            </div>
          </div>
          
          <div class="header-center" @click="scrollToPosition(0)">
            <img 
              :src="scrollPosition > 20 ? 'recursos/logo.png' : 'recursos/logo2.png'" 
              alt="Logo AMFPRO" 
              class="logo-header"
            >
          </div>
          
          <div class="header-side right-side d-flex align-items-center gap-3">
            
            <div class="social-group d-none d-sm-flex">
              <a href="https://twitter.com/AMFproMX" class="social-item" target="_blank"><img src="recursos/x.png" alt="X"></a>
              <a href="https://facebook.com/AMFproMX" class="social-item" target="_blank"><img src="recursos/facebook.png" alt="FB"></a>
              <a href="https://instagram.com/AMFproMX" class="social-item" target="_blank"><img src="recursos/instagram.png" alt="IG"></a>
            </div>

            <div class="vertical-divider d-none d-sm-block"></div>

            <button v-if="!isLoggedIn" @click="goToLogin" class="btn-login-header shadow-sm">
              <i class="material-icons">login</i>
              <span class="d-none d-md-inline ms-2 fw-bold">Iniciar sesión</span>
            </button>

            <button v-else @click="goToProfile" class="btn-profile-header shadow-sm">
              <img v-if="afiliado.foto" :src="obtenerUrlArchivo(afiliado.foto, afiliado.existecarpetafoto)" class="avatar-header">
              <i v-else class="material-icons">account_circle</i>
              <span class="d-none d-md-inline ms-2 fw-bold text-truncate" style="max-width: 100px;">{{ afiliado.nombre }}</span>
            </button>

          </div>

        </div>
      </div>

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
      <SectionJuridico />
      <SectionRehab />
      <SectionTalentos :scrollPosition="scrollPosition" />
      <SectionNoticias @noticia-seleccionada="mostrarDetalle" />
    </div>

    <DetalleNoticia v-else :noticia="noticiaEnDetalle" @regresar="cerrarDetalle" />
    <SectionFooter />
  </div>
</template>

<script>
import FloatingMenu from './components/FloatingMenuComponent.vue';
import SectionHome from './components/SectionHomeComponent.vue';
import SectionRehab from './components/SectionRehabComponent.vue';
import SectionTalentos from './components/SectionTalentosComponent.vue';
import SectionJuridico from './components/SectionJuridicoComponent.vue';
import SectionNoticias from './components/SectionNoticiasComponent.vue';
import SectionFooter from './components/SectionFooterComponent.vue';
import DetalleNoticia from './components/DetalleNoticiaComponent.vue';
import axios from 'axios';

export default {
  components: {
    FloatingMenu, SectionHome, SectionRehab, SectionTalentos, SectionJuridico, SectionNoticias, SectionFooter, DetalleNoticia
  },
  data() {
    return {
      scrollPosition: 0,
      scrollPercentage: 0,
      noticiaEnDetalle: null,
      isLoggedIn: false,
      afiliado: {}
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.checkAuthStatus();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // --- LÓGICA DE AUTH ---
    checkAuthStatus() {
      axios.get('afiliado/datos').then(response => {
        if (response.data && response.data.id_afi) { 
          this.isLoggedIn = true; 
          this.afiliado = response.data; 
        }
      }).catch(() => { this.isLoggedIn = false; });
    },
    obtenerUrlArchivo(nombreArchivo, existeCarpetaFalsa) {
      if (!nombreArchivo || !this.afiliado.nui) return '';
      const host = window.location.hostname;
      const isLocalhost = host === 'localhost' || host === '127.0.0.1';
      let baseUrl = !existeCarpetaFalsa 
        ? (isLocalhost ? 'http://localhost/IntranetAMF/public/ArchivosSistema/Afiliados/' : 'https://test-intranet.amfpro.mx/ArchivosSistema/Afiliados/')
        : (isLocalhost ? 'http://localhost/amfpro-web-2026/public/ArchivosSistema/Afiliados/' : 'https://deployment.amfpro.mx/ArchivosSistema/Afiliados/');
      return `${baseUrl}${this.afiliado.nui}/${nombreArchivo}`;
    },
    goToLogin() {
      const baseUrl = document.querySelector('base') ? document.querySelector('base').href : '/';
      window.location.href = baseUrl + 'login';
    },
    goToProfile() {
      const baseUrl = document.querySelector('base') ? document.querySelector('base').href : '/';
      window.location.href = baseUrl + 'perfil';
    },

    // --- SCROLL Y NAVEGACIÓN ---
    handleScroll() {
      this.scrollPosition = window.scrollY;
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
    },
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 75;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

$amf-main: #50c026;
.bg-white { background-color: #FFFFFF; }

.header-main {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  background: transparent; 
  height: 100px; 
  z-index: 1100; 
  border-bottom: 1px solid transparent; 
  position: fixed; 
  width: 100%; 
  top: 0;
  
  /* =======================================
     ESTADO INICIAL (TOP DE LA PÁGINA)
     Ocultamos SÓLO redes sociales y su divisor vertical. 
     El hashtag izquierdo (.left-side) y el logo quedan visibles desde el inicio.
     ======================================= */
  .social-group, .vertical-divider { 
    opacity: 0; 
    visibility: hidden; 
    transform: translateY(-10px); 
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); 
  }

  /* El hashtag tiene su propia transición fluida de color al scrollear */
  .left-side {
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  }

  /* El contenedor del centro maneja su transición de tamaño */
  .header-center {
    display: flex; 
    justify-content: center; 
    align-items: center;
    cursor: pointer; 
    position: relative; 
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);

    .logo-header { 
      height: 60px; 
      transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); /* Ajustado a 0.3s para un cambio de imagen limpio */
    } 
    
    &:hover .logo-header { 
      transform: scale(1.05); 
    }
  }

  /* Los botones de Login/Perfil inician visibles flotando sobre el video */
  .btn-login-header, .btn-profile-header {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    border-radius: 50px;
    padding: 8px 18px;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.3s ease;
    
    i { font-size: 1.2rem; }
    .avatar-header { width: 24px; height: 24px; border-radius: 50%; object-fit: cover; }
    
    &:hover { background: $amf-main; border-color: $amf-main; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(80, 192, 38, 0.3); }
  }

  .vertical-divider { width: 1px; height: 24px; background: rgba(255,255,255,0.3); transition: background 0.5s ease; }

  /* =======================================
     ESTADO CUANDO SCROLLEAS (APAREECE TODO)
     ======================================= */
  &.is-scrolled {
    height: 75px; 
    background: rgba(255, 255, 255, 0.95); 
    backdrop-filter: blur(20px) saturate(150%); 
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 4px 30px rgba(0,0,0,0.03); 
    border-bottom: 1px solid rgba(0,0,0,0.05);
    
    /* Encendemos las opacidades y visibilidad de las redes y divisor */
    .social-group, .vertical-divider { 
      opacity: 1; 
      visibility: visible; 
      transform: translateY(0); 
    }

    /* Reducción suave de la escala del logo para integrarse al navbar blanco */
    .header-center .logo-header { 
      height: 45px; 
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); 
    }
    
    .left-side .hash-tag-gradient { background: #111111; -webkit-background-clip: text; color: transparent; animation: none; }
    .right-side .social-group .social-item { background: rgba(0,0,0,0.04); img { filter: invert(0.2); } &:hover { background: $amf-main; img { filter: brightness(0) invert(1); } } }

    .vertical-divider { background: rgba(0,0,0,0.1); }

    /* Ajuste de contraste para los botones sobre el fondo blanco */
    .btn-login-header, .btn-profile-header {
      background: rgba(80, 192, 38, 0.1);
      border-color: transparent;
      color: #3e9452;
      &:hover { background: $amf-main; color: white; }
    }
  }

  .scroll-progress-bar { position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: transparent; .progress-fill { height: 100%; background: $amf-main; width: 0%; transition: width 0.1s ease-out; } }
  .left-side .hash-tag-wrapper .hash-tag-gradient { font-family: 'Inter', sans-serif; font-weight: 900; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; background: linear-gradient(to right, #ffffff 0%, #e0e0e0 50%, #50c026 100%); background-size: 200% auto; color: transparent; -webkit-background-clip: text; animation: shineText 5s linear infinite; transition: all 0.5s ease; }
  .right-side .social-group { display: flex; gap: 12px; .social-item { width: 40px; height: 40px; background: rgba(255, 255, 255, 0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; img { width: 16px; height: 16px; object-fit: contain; transition: all 0.3s ease; filter: brightness(0) invert(1); } &:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(80, 192, 38, 0.3); background: $amf-main; img { transform: scale(1.1); } } } }
}
@keyframes shineText { to { background-position: 200% center; } }
@media (max-width: 768px) { .header-main { height: 80px; .left-side { display: none; } .logo-header { height: 45px !important; } .btn-login-header span, .btn-profile-header span { display: none !important; } .btn-login-header, .btn-profile-header { padding: 8px 12px; } } }
</style>