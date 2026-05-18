<template>
  <div class="amf-landing-page bg-white">
    <header class="header-main border-bottom fixed-top bg-white">
      <div class="container-fluid py-2 px-3 px-lg-5">
        <div class="row align-items-center flex-nowrap m-0">
          
          <div class="col-4 text-start px-0">
            <div class="hash-tag fw-bold text-secondary text-truncate">#UnidosSomosMásFuertes</div>
          </div>
          
          <div class="col-4 text-center px-0">
            <img src="recursos/logo.png" alt="Logo AMFPRO" class="logo-header">
          </div>
          
          <div class="col-4 text-end d-flex justify-content-end gap-2 px-0">
            <img src="recursos/x.png" alt="X" class="social-nav">
            <img src="recursos/facebook.png" alt="FB" class="social-nav">
            <img src="recursos/instagram.png" alt="IG" class="social-nav">
          </div>

        </div>
      </div>
    </header>

    <FloatingMenu 
      @go-to-section="scrollToSection" 
      @go-to-position="scrollToPosition" 
    />

    <SectionHome :scrollPosition="scrollPosition" />
    <SectionTalentos :scrollPosition="scrollPosition" />
    <SectionJuridico />
    <SectionNoticias />
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

export default {
  components: {
    FloatingMenu,
    SectionHome,
    SectionTalentos,
    SectionJuridico,
    SectionNoticias,
    SectionFooter
  },
  data() {
    return {
      scrollPosition: 0,
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
    },
  }
}
</script>

<style lang="scss">
/* Estilos Globales */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.amf-landing-page { 
  font-family: 'Roboto', sans-serif !important; 
  overflow-x: hidden; 
}
.header-main {
  .hash-tag {
    font-size: 0.65rem; 
  }
  
  .logo-header {
    height: 32px; 
    object-fit: contain;
  }
  
  .social-nav { 
    width: 20px; 
    height: 20px; 
    object-fit: contain; 
    cursor: pointer; 
  }

  @media (min-width: 768px) {
    .hash-tag { 
      font-size: 0.875rem; 
    }
    .logo-header { 
      height: 50px;
    }
    .social-nav { 
      width: 30px; 
      height: 30px; 
      margin-left: 5px;
    }
  }
}
</style>