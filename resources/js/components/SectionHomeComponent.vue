<template>
  <div class="amf-premium-landing">
    
   <section class="hero-section-innovative" id="inicio">
      <div class="hero-bg-elements">
        <video autoplay muted loop playsinline class="hero-video" :key="isMobile">
          <source :src="isMobile ? 'recursos/hero-video.mp4' : 'recursos/hero-video.mp4'" type="video/mp4">
        </video>
        <div class="hero-gradient-overlay-async"></div>
      </div>

      <div class="container-fluid px-4 px-xl-5 h-100 position-relative z-3">
        <div class="row h-100 align-items-center pb-5 pb-lg-0">
          
          <div class="col-12 col-lg-7 text-center text-lg-start px-md-4">
            <div class="reveal-up">
              <h1 class="hero-title-pro text-white m-0 text-shadow-pro">ESTAMOS CONTIGO, DENTRO</h1>
            </div>
            <div class="reveal-up delay-1 mb-4">
              <h1 class="hero-title-pro amf-green-text m-0 text-shadow-pro text-glow"> Y FUERA DE LA CANCHA.</h1>
            </div>
            
            <div class="reveal-up delay-2 mb-5 pe-lg-5 d-flex justify-content-center justify-content-lg-start">
              <p class="hero-text-pro text-white-50 fw-light">
                Representamos, protegemos e impulsamos a las y los futbolistas profesionales de México con servicios, asesoría, beneficios y acompañamiento en cada etapa de tu carrera activa.
                 <!-- <br class="d-none d-md-block"> -->
                <!-- <strong class="text-white mt-1 d-inline-block">Porque los verdaderos profesionales no pagan por jugar.</strong> -->
              </p>
            </div>
            
            <div class="reveal-up delay-3">
              <button class="btn btn-premium-green px-4 fw-bold tracking-wider magnetic-btn shadow-lg" 
                      @mousemove="handleMagneticMove" 
                      @mouseleave="resetMagneticMove" 
                      @click="openModal">
                <span class="magnetic-content d-flex align-items-center">
                  <i class="material-icons me-2">menu_book</i> Explorar Manual
                </span>
              </button>
            </div>
          </div>

          <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-none d-lg-flex justify-content-lg-end justify-content-center">
            <div class="hero-quick-nav reveal-up delay-4 w-100" style="max-width: 440px;">
              <div class="bento-widget-container">
                  <div class="bento-header d-flex align-items-center mb-3">
                    <div class="pulse-dot me-2"></div>
                    <span class="text-white-50 fw-bold" style="font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase;">Accesos Rápidos</span>
                  </div>

                  <div class="bento-widget-grid">
                    <div class="bento-widget" @click="scrollToSectionLocal('juridico')">
                      <div class="widget-icon"><i class="material-icons">gavel</i></div>
                      <span class="widget-label">Jurídico</span>
                    </div>
                    
                    <div class="bento-widget" @click="scrollToSectionLocal('convenios')">
                      <div class="widget-icon"><i class="material-icons">school</i></div>
                      <span class="widget-label">Convenios</span>
                    </div>
                    
                    <div class="bento-widget" @click="scrollToSectionLocal('talentos')">
                      <div class="widget-icon"><i class="material-icons">star</i></div>
                      <span class="widget-label">Talentos</span>
                    </div>

                    <div class="bento-widget" @click="scrollToSectionLocal('noticias')">
                      <div class="widget-icon"><i class="material-icons">article</i></div>
                      <span class="widget-label">Noticias</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>

      <div class="scroll-indicator-wrapper" @click="scrollToSectionLocal('instituciones')">
        <span class="scroll-text">SCROLL</span>
        <div class="mouse-indicator">
          <div class="wheel"></div>
        </div>
      </div>
    </section>

    <section id="instituciones" class="bg-white py-5 shadow-sm position-relative z-3 border-bottom border-light overflow-hidden">
      <div class="container-fluid px-4 px-xl-5">
        <div class="row text-center g-4 align-items-center justify-content-center">
          <div class="col-xl-auto col-lg-4 col-md-6 border-end-xl px-xl-4 reveal-up">
            <p class="std-subtitle text-muted" style="line-height: 10px;">MIEMBROS</p>
            <p class="std-subtitle text-muted">INTERNACIONALES</p>
            <img src="recursos/logo_aif.png" alt="AIF" class="circle-logo mx-auto reveal-scale-zoom delay-1">
          </div>
          <div class="col-xl-auto col-lg-8 col-md-12 border-end-xl px-xl-4 reveal-up delay-1">
            <p class="std-subtitle text-muted mb-4">INSTITUCIONES</p>
            <p class="std-subtitle text-muted mb-5"></p>
            <div class="d-flex justify-content-center gap-3 gap-md-4 flex-wrap">
              <img src="recursos/logo_fifa.png" alt="FIFA" class="circle-logo reveal-scale-zoom delay-2">
              <img src="recursos/logo_seleccion.png" alt="FMF" class="circle-logo reveal-scale-zoom delay-3">
              <img src="recursos/logo_concacaf.png" alt="Concacaf" class="circle-logo reveal-scale-zoom delay-4">
            </div>
          </div>
          <div class="col-xl-auto col-lg-8 col-md-12 border-end-xl px-xl-4 reveal-up delay-2">
            <p class="std-subtitle text-muted mb-4">LIGAS</p>
            <p class="std-subtitle text-muted mb-5"></p>
            <div class="d-flex justify-content-center gap-3 gap-md-4 flex-wrap">
              <img src="recursos/logo_ligamx.png" alt="Liga MX" class="circle-logo reveal-scale-zoom delay-3">
              <img src="recursos/logo_ligaexpansion.png" alt="Liga Expansión" class="circle-logo reveal-scale-zoom delay-4">
              <img src="recursos/logo_ligapremier.png" alt="Liga Premier" class="circle-logo reveal-scale-zoom delay-5">
              <img src="recursos/logo_ligatdp.png" alt="Liga TDP" class="circle-logo reveal-scale-zoom delay-6">
              <img src="recursos/logo_ligamxfemenil.png" alt="Liga MX Femenil" class="circle-logo reveal-scale-zoom delay-6">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="nosotros" class="bg-offwhite py-6 relative-container">
      <div class="container py-5">
        <div class="row mb-6">
          <div class="col-lg-4 d-none d-lg-block">
            <div class="sticky-title-wrapper reveal-up">
              <h2 class="std-title-section fw-black amf-green-text mb-0" style="font-size: clamp(2.5rem, 4vw, 3.5rem) !important;">CREACIÓN</h2>
              <div class="accent-line mt-4"></div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="d-block d-lg-none mb-5 text-center reveal-up">
              <h2 class="std-title-section fw-black amf-green-text mb-0" style="font-size: clamp(2.5rem, 4vw, 3.5rem) !important;">CREACIÓN</h2>
              <div class="accent-line mx-auto mt-3"></div>
            </div>
             <div class="premium-clean-card p-4 p-md-5 rounded-4 bg-white position-relative overflow-hidden reveal-up mb-5">
                <p class="std-text text-secondary text-justify mb-4">
                  En busca de mejores condiciones laborales para las y los Futbolistas, <strong class="amf-green-text fw-bold">en el año 2017</strong>, se creó la AMFPRO, como <b class="fw-bold">ORGANISMO AUTÓNOMO E INDEPENDIENTE</b>. Jugadores como: <strong class="amf-green-text fw-bold">Rafael Márquez, Oribe Peralta, Oscar Pérez, Carlos Salcido, Christian Giménez, Paulo Da Silva</strong>, junto con los ex Futbolistas <strong class="amf-green-text fw-bold">Álvaro Ortiz y Edson Zwaricz</strong>, delinearon el inicio del proyecto y, llevaron a cabo la primera reunión formal con capitanes y representantes de los clubes que en ese momento pertenecian a las Ligas de <strong class="amf-green-text fw-bold">Liga MX, Liga MX Femenil y Ascenso MX.</strong>
                </p>
            </div>
            <div class="d-inline-flex align-items-center mb-4 text-dark reveal-up delay-1 bg-white px-4 py-3 rounded-pill shadow-sm border border-light">
                <i class="material-icons amf-green-text me-2 fs-4">campaign</i>
                <span class="std-subtitle mb-0">Presentación de la AMFPRO ante prensa</span>
            </div>
            <div class="reveal-up delay-2">
              <div class="swiper swiper-nosotros">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="(img, index) in imagenesNosotros" :key="index">
                        <img :src="img" :alt="'Nosotros ' + (index + 1)" class="img-fluid rounded-4 swiper-img-clean" @click="abrirGaleriaNosotros(index)">
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-6 mt-6">
          <div class="col-lg-4 d-none d-lg-block">
            <div class="sticky-title-wrapper reveal-up">
              <h2 class="std-title-section fw-black amf-green-text mb-0" style="font-size: clamp(2.5rem, 4vw, 3.5rem) !important;">OBJETIVO Y FINALIDAD</h2>
              <div class="accent-line mt-4"></div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="d-block d-lg-none mb-5 text-center reveal-up">
              <h2 class="std-title-section fw-black amf-green-text mb-0" style="font-size: clamp(2.5rem, 4vw, 3.5rem) !important;">OBJETIVO Y FINALIDAD</h2>
              <div class="accent-line mx-auto mt-3"></div>
            </div>
            <div class="premium-clean-card p-4 p-md-5 rounded-4 bg-white position-relative overflow-hidden reveal-up">
              <p class="std-text text-secondary text-justify mb-4">Representar y proteger los intereses de las y los Futbolistas Profesionales afiliados a la Federación Mexicana de Fútbol Asociación, Asociación Civil <b style="color:#50C026;">(FMF)</b> y, en su caso, el de los Futbolistas no profesionales <b style="color:#50C026;">(amateurs)</b> que se encuentran en proceso de formación como profesionales y que estén afiliados a la <b>FMF.</b></p>
                <p class="std-text text-secondary text-justify mb-4">Esta representación no se limita a aspectos jurídicos, sino también a <b style="color:#50C026;">temas deportivos, médicos, educativos y sociales</b>, pudiendo asesorar y orientar a sus asociados y asociadas, así como desarrollar y consolidar los programas que resulten necesarios y oportunos para ello.</p>
            </div>
          </div>
        </div>

        <div class="row mt-6">
          <div class="col-lg-4 d-none d-lg-block">
            <div class="sticky-title-wrapper reveal-up">
              <h2 class="std-title-section fw-black amf-green-text mb-0" style="font-size: clamp(2.5rem, 4vw, 3.5rem) !important;">¿EN QUÉ CREEMOS?</h2>
              <div class="accent-line mt-4"></div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="d-block d-lg-none mb-5 text-center reveal-up">
              <h2 class="std-title-section fw-black amf-green-text mb-0" style="font-size: clamp(2.5rem, 4vw, 3.5rem) !important;">¿EN QUÉ CREEMOS?</h2>
              <div class="accent-line mx-auto mt-3"></div>
            </div>
            <div class="row g-4">
              <div class="col-md-6 reveal-up">
                <div class="premium-clean-card p-4 p-md-5 rounded-4 bg-white h-100">
                  <div class="icon-clean-wrapper mb-4"><i class="material-icons">flag</i></div>
                  <h4 class="std-title-card fw-bold mb-3" style="color:#50c026 !important;">Misión</h4>
                  <p class="std-text text-secondary mb-0 text-justify">Representar y proteger los intereses de las y los Futbolistas Profesionales y, en su caso, el de los Futbolistas no profesionales que se encuentran en proceso de formación y que estén afiliados a la FMF, a través del desarrollo y consolidación de acciones en materia.</p>
                </div>
              </div>
              <div class="col-md-6 reveal-up delay-1">
                <div class="premium-clean-card p-4 p-md-5 rounded-4 bg-white h-100">
                  <div class="icon-clean-wrapper mb-4"><i class="material-icons">visibility</i></div>
                  <h4 class="std-title-card fw-bold mb-3" style="color:#50c026 !important;">Visión</h4>
                  <p class="std-text text-secondary mb-0 text-justify">Ser reconocida y consolidarse como la única Asociación que representa los derechos e intereses de las y los Futbolistas en México y posteriormente posicionarse como referente a nivel internacional.</p>
                </div>
              </div>

              <div class="col-12 mt-5">
                <div class="d-flex align-items-center mb-4 reveal-up delay-2">
                  <h6 class="std-subtitle text-muted mb-0">Nuestros Valores</h6>
                  <div class="flex-grow-1 border-top ms-3 opacity-25"></div>
                </div>
                <div class="row g-3 g-md-4">
                  <div class="col-6 col-md-4 reveal-up" v-for="(val, vIdx) in ['Transparencia','Respeto','Compromiso','Responsabilidad','Liderazgo','Legalidad','Ética','Juego Limpio']" :key="vIdx" :class="'delay-'+((vIdx%6)+1)">
                    <div class="premium-clean-card text-center p-4 h-100 bg-white rounded-4 border border-light d-flex flex-column align-items-center justify-content-center">
                      <div class="icon-clean-wrapper-small mb-3"><i class="material-icons">verified</i></div>
                      <h6 class="std-text fw-bold text-dark mb-0">{{val}}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="asesor-deportivo" class="bg-amf-dark py-6 position-relative overflow-hidden" style="background: #3E9452;">
      <div class="container py-5 position-relative z-2">
        <div class="row align-items-center">
          <div class="col-lg-5 text-center text-lg-start mb-5 mb-lg-0 reveal-up">
            <h6 class="std-subtitle text-white-50 mb-3">CONOCE A NUESTRO</h6>
            <h2 class="std-title-section fw-black text-white mb-0">ASESOR</h2>
            <h2 class="std-title-section fw-light text-white mb-5">DEPORTIVO</h2>
            <div class="melvin-premium-wrapper mx-auto mx-lg-0 mb-4 position-relative">
              <div class="glow-circle position-absolute top-50 start-50 translate-middle"></div>
              <img src="recursos/melvin-brown.png" alt="Melvin Brown Casados" class="img-fluid position-relative z-2">
            </div>
            <h3 class="std-title-card fw-bold text-white mb-0 mt-4">MELVIN BROWN</h3>
            <h4 class="std-title-card fw-light text-white-50">CASADOS</h4>
            <div class="mt-5 reveal-up delay-3 text-center text-lg-start">
               <a href="mailto:contacto@amfpro.mx" class="btn btn-outline-light rounded-pill px-4 py-2 me-3 mb-3 mb-sm-0 fw-bold"><i class="material-icons align-middle me-2 fs-5">email</i>contacto@amfpro.mx</a>
               <a href="tel:7286906040" class="btn btn-premium-green rounded-pill px-4 py-2 fw-bold"><i class="material-icons align-middle me-2 fs-5">phone</i>(728) 690 6040</a>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div class="premium-glass-card p-4 p-md-5 mb-4 rounded-4 reveal-up delay-1">
              <div class="d-flex align-items-center mb-4 border-bottom border-light border-opacity-25 pb-3">
                <i class="material-icons text-white bg-success p-2 rounded-3 me-3 fs-3">history</i>
                <h4 class="std-title-card fw-bold text-white mb-0">ANTECEDENTES</h4>
              </div>
              <p class="std-text text-white text-justify mb-3">Fue Jugador en los Clubes: Cruz Azul Hidalgo, Cruz Azul, Jaguares de Chiapas, Puebla FC, UAG, Irapuato FC, Mundialista por México en Corea/Japón 2002.</p>
              <p class="std-text text-white text-justify mb-0">En su faceta de Director Técnico formó parte de: Comisión del jugador (actual Asociación Mexicana de Futbolistas), Tecnológico de Monterrey campus Guadalajara, Dorados de Sinaloa (Segunda talentos), Melgar FBC (reserva profesional) en Perú, Equipos de la AMFpro y Cafetaleros de Chiapas (Segunda Premier).</p>
            </div>
            <div class="premium-glass-card p-4 p-md-5 rounded-4 reveal-up delay-2">
              <div class="d-flex align-items-center mb-4 border-bottom border-light border-opacity-25 pb-3">
                <i class="material-icons text-white bg-success p-2 rounded-3 me-3 fs-3">work</i>
                <h4 class="std-title-card fw-bold text-white mb-0">FUNCIONES</h4>
              </div>
              <p class="std-text text-white text-justify mb-4">Llevar el mensaje de la AMFpro en las visitas a los equipos de:</p>
              <div class="d-flex flex-wrap gap-2 gap-md-3 mb-4 mt-2">
                <img src="recursos/logo_ligamx.png" alt="Liga MX" class="circle-logo" style="width: 70px; height: 70px; padding: 10px; border-width: 1px;">
                <img src="recursos/logo_ligaexpansion.png" alt="Liga Expansión" class="circle-logo" style="width: 70px; height: 70px; padding: 10px; border-width: 1px;">
                <img src="recursos/logo_ligapremier.png" alt="Liga Premier" class="circle-logo" style="width: 70px; height: 70px; padding: 10px; border-width: 1px;">
                <img src="recursos/logo_ligatdp.png" alt="Liga TDP" class="circle-logo" style="width: 70px; height: 70px; padding: 10px; border-width: 1px;">
              </div>
              <ul class="premium-list-white text-white text-justify m-0 p-0 std-text-small">
                <li>Realizar convenios educativos para beneficio de las (os) futbolistas profesionales de México.</li>
                <li>Presentar proyectos para beneficio de las(os) futbolistas profesionales de México.</li>
                <li>Ser el vínculo entre jugador(as) con la AMFpro para canalizarlos a las áreas correspondientes.</li>
                <li>Apoyar los equipos de la AMFpro abriendo puertas para los jugadores de los equipos.</li>
                <li>Difundir a los jugadores profesionales de todas las categorías el mensaje de la AMFpro.</li>
                <li>Proponer con base a experiencia y recepción de mensajes beneficios para los y las futbolistas profesionales de México (nueva mentalidad del futbolista).</li>
                <li>Atender y canalizar a las y los futbolistas profesionales con las diferentes áreas de apoyo de la AMFpro.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
        <div class="modal-content2">
            <button class="modal-close-btn" @click="closeModal">&times;</button>
            <iframe src="https://www.amfpro.mx/manual-AMFPro" class="modal-iframe"></iframe>
        </div>
    </div>
    <div v-if="galeriaNosotrosAbierta" class="lightbox-overlay" @click.self="cerrarGaleriaNosotros" @touchstart="handleTouchStart" @touchend="handleTouchEndGaleria">
      <button class="btn-close-lightbox" @click="cerrarGaleriaNosotros">&times;</button>
      <div class="lightbox-content">
        <button class="btn-nav left" @click="anteriorFotoNosotros"><i class="material-icons">chevron_left</i></button>
        <div class="img-container"><img :src="imagenesNosotros[fotoNosotrosIndex]" :alt="'Foto ' + (fotoNosotrosIndex + 1)" class="lightbox-img"></div>
        <button class="btn-nav right" @click="siguienteFotoNosotros"><i class="material-icons">chevron_right</i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['scrollPosition'],
  data() {
    return {
      isMobile: false, isModalOpen: false, observer: null,
      galeriaNosotrosAbierta: false, fotoNosotrosIndex: 0, touchStartY: 0, touchEndY: 0,
      imagenesNosotros: ['recursos/Item.png', 'recursos/Item-2.png', 'recursos/Item-3.png', 'recursos/Item.png']
    }
  },
  mounted() {
    this.checkMobile(); window.addEventListener('resize', this.checkMobile);
    new Swiper('.swiper-nosotros', { slidesPerView: 1.2, spaceBetween: 20, loop: true, autoplay: { delay: 2500, disableOnInteraction: false }, breakpoints: { 768: { slidesPerView: 2.2, spaceBetween: 30 } } });
    const options = { root: null, rootMargin: '0px', threshold: 0.15 };
    this.observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }); }, options);
    this.$nextTick(() => { document.querySelectorAll('.reveal-up, .reveal-scale-zoom').forEach(el => { this.observer.observe(el); }); });
  },
  beforeDestroy() { window.removeEventListener('resize', this.checkMobile); if (this.observer) this.observer.disconnect(); },
  methods: {
    checkMobile() { this.isMobile = window.innerWidth < 768; },
    handleMagneticMove(e) { const btn = e.currentTarget; const content = btn.querySelector('.magnetic-content'); const rect = btn.getBoundingClientRect(); const x = e.clientX - rect.left - rect.width / 2; const y = e.clientY - rect.top - rect.height / 2; btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`; content.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`; },
    resetMagneticMove(e) { const btn = e.currentTarget; const content = btn.querySelector('.magnetic-content'); btn.style.transform = 'translate(0px, 0px)'; content.style.transform = 'translate(0px, 0px)'; },
    
    scrollToSectionLocal(id) {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 75;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
        const globalEl = document.getElementById(id);
        if (globalEl) {
            const headerOffset = 75;
            const elementPosition = globalEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    },

    scrollToFooter() { const el = document.getElementById('contacto'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 75, behavior: "smooth" }); },
    openModal() { this.isModalOpen = true; }, closeModal() { this.isModalOpen = false; },
    handleTouchStart(e) { this.touchStartY = e.changedTouches[0].screenY; },
    handleTouchEnd(e) { this.touchEndY = e.changedTouches[0].screenY; this.checkSwipeClose(this.closeModal); },
    handleTouchEndGaleria(e) { this.touchEndY = e.changedTouches[0].screenY; this.checkSwipeClose(this.cerrarGaleriaNosotros); },
    checkSwipeClose(closeFunction) { if (this.touchEndY - this.touchStartY > 50) closeFunction(); },
    abrirGaleriaNosotros(index) { this.fotoNosotrosIndex = index; this.galeriaNosotrosAbierta = true; document.body.style.overflow = 'hidden'; },
    cerrarGaleriaNosotros() { this.galeriaNosotrosAbierta = false; document.body.style.overflow = ''; },
    siguienteFotoNosotros() { this.fotoNosotrosIndex = (this.fotoNosotrosIndex < this.imagenesNosotros.length - 1) ? this.fotoNosotrosIndex + 1 : 0; },
    anteriorFotoNosotros() { this.fotoNosotrosIndex = (this.fotoNosotrosIndex > 0) ? this.fotoNosotrosIndex - 1 : this.imagenesNosotros.length - 1; }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

$amf-green: #50c026; 
$amf-dark: #111111; 
.bg-offwhite { background-color: #F8F9FA; }
.fw-black { font-weight: 900 !important; }
.amf-green-text { color: $amf-green !important; }
.tracking-wider { letter-spacing: 2px; text-transform: uppercase; }

h1, h2, h3, h4, h5, h6, p, span, li, button { font-family: 'Inter', sans-serif !important; }
.material-icons { font-family: 'Material Icons' !important; }
.text-justify { text-align: justify !important; text-justify: inter-word; }

/* =========================================================
   NUEVO HERO INNOVADOR (WIDGETS Y ASIMETRÍA)
   ========================================================= */
.hero-section-innovative {
  position: relative; 
  height: 100vh; 
  min-height: 800px; 
  display: flex; 
  align-items: center; 
  overflow: hidden; 
  background-color: #000;
}

.hero-bg-elements { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; .hero-video { position: absolute; top: 50%; left: 50%; min-width: 105%; min-height: 105%; transform: translate(-50%, -50%); object-fit: cover; opacity: 0.7; } }

.hero-gradient-overlay-async {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(90deg, rgba(10,14,18,0.95) 0%, rgba(10,14,18,0.6) 40%, rgba(10,14,18,0.2) 100%),
              linear-gradient(0deg, rgba(10,14,18,0.9) 0%, transparent 40%);
}

.hero-title-pro { font-size: clamp(3rem, 6vw, 3rem); line-height: 1.05; letter-spacing: -2px; }
.text-glow { text-shadow: 0 0 30px rgba(80, 192, 38, 0.4); }
.hero-text-pro { font-size: clamp(1.1rem, 1.5vw, 1.25rem); line-height: 1.6; max-width: 550px; }

/* --- CONTROL CENTER (WIDGET GRID) --- */
.bento-widget-container {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  padding: 25px;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  max-width: 440px;
  margin: 0 auto;
  width: 100%;
}

.pulse-dot { width: 8px; height: 8px; background-color: #50c026; border-radius: 50%; box-shadow: 0 0 0 0 rgba(80, 192, 38, 0.7); animation: pulse-green 2s infinite; }
@keyframes pulse-green { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(80, 192, 38, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(80, 192, 38, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(80, 192, 38, 0); } }

.bento-widget-grid {
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  gap: 15px;
}

.bento-widget {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  min-height: 125px;
  padding: 15px 10px;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  cursor: pointer; 
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-align: center; 
  gap: 10px;
  overflow: hidden;

  .widget-icon {
    width: 48px; 
    height: 48px; 
    background: rgba(80, 192, 38, 0.1); 
    border-radius: 50%;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    transition: all 0.4s ease;
    flex-shrink: 0;
    i { color: #50c026; font-size: 1.6rem; transition: all 0.4s ease; }
  }
  .widget-label { 
    color: rgba(255,255,255,0.7); 
    font-weight: 700; 
    font-size: clamp(0.65rem, 1.2vw, 0.75rem); 
    letter-spacing: 1px; 
    text-transform: uppercase; 
    transition: color 0.3s;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    padding: 0 4px;
  }

  &:hover {
    transform: translateY(-5px) scale(1.03); 
    background: rgba(80, 192, 38, 0.15); 
    border-color: #50c026;
    box-shadow: 0 15px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(80,192,38,0.2);
    .widget-icon { background: #50c026; i { color: white; transform: scale(1.1); } }
    .widget-label { color: white; }
  }
}

/* Responsividad para iPad/Tablets y pantallas medianas */
@media (min-width: 576px) and (max-width: 991px) {
  .bento-widget-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .bento-widget-container {
    max-width: 100%;
  }
}

/* Ajustes finos para móviles pequeños */
@media (max-width: 360px) {
  .bento-widget-grid {
    gap: 10px;
  }
  .bento-widget {
    min-height: 110px;
    padding: 10px 5px;
    .widget-icon {
      width: 42px;
      height: 42px;
      i { font-size: 1.4rem; }
    }
  }
}

/* --- INDICADOR DE SCROLL ANIMADO --- */
.scroll-indicator-wrapper {
  position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column;
  align-items: center; cursor: pointer; z-index: 10; opacity: 0; animation: fadeInScroll 1s ease 1.5s forwards;

  .scroll-text { color: rgba(255,255,255,0.6); font-size: 0.65rem; font-weight: 800; letter-spacing: 3px; margin-bottom: 8px; transition: color 0.3s ease; }
  .mouse-indicator { width: 24px; height: 40px; border: 2px solid rgba(255,255,255,0.4); border-radius: 20px; display: flex; justify-content: center; padding-top: 6px; transition: border-color 0.3s ease;
    .wheel { width: 4px; height: 8px; background-color: #50c026; border-radius: 2px; animation: scrollWheel 2s infinite cubic-bezier(0.15, 0.41, 0.69, 0.94); }
  }
  &:hover { .scroll-text { color: #50c026; } .mouse-indicator { border-color: #50c026; } }
}
@keyframes scrollWheel { 0% { transform: translateY(0); opacity: 1; } 50% { transform: translateY(12px); opacity: 0; } 100% { transform: translateY(0); opacity: 0; } }
@keyframes fadeInScroll { to { opacity: 1; } }


/* TÍTULOS Y TEXTOS GENÉRICOS */
.std-title-section { font-size: clamp(2.5rem, 4vw, 3.5rem); line-height: 1.1; letter-spacing: -1.5px; }
.std-title-card { font-size: clamp(1.2rem, 2vw, 1.5rem); line-height: 1.3; }
.std-text { font-size: 1.05rem; }
.std-subtitle { font-size: 0.8rem; letter-spacing: 3px; font-weight: 700; text-transform: uppercase; }
.std-text-small { font-size: 0.95rem; line-height: 1.6; }

.magnetic-btn { display: inline-flex; align-items: center; justify-content: center; transition: all 0.3s ease; border-radius: 50px; .magnetic-content { transition: transform 0.2s ease; pointer-events: none; } }
.btn-premium-green { background: $amf-green; color: white; border: none; box-shadow: 0 10px 20px rgba(80, 192, 38, 0.2); &:hover { background: #111; box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); transform: translateY(-3px); } }
.btn-premium-outline { background-color: transparent; color: white; border: 2px solid white; &:hover { background-color: white; color: #111; transform: translateY(-3px); } }

.circle-logo { width: 120px; height: 120px; border-radius: 50%; padding: 15px; background-color: white; object-fit: contain; transition: all 0.3s ease; &:hover { transform: scale(1.1); box-shadow: 0 10px 20px rgba(62, 148, 82, 0.2); border-color: #3E9452; } }
@media (min-width: 1200px) { .border-end-xl { border-right: 1px solid #eaeaea; } }

.relative-container { position: relative; z-index: 10; }
.sticky-title-wrapper { position: sticky; top: 150px; }
.accent-line { width: 60px; height: 6px; background-color: $amf-green; margin-top: 15px; }
.py-6 { padding-top: 6rem; padding-bottom: 6rem; }
.mb-6 { margin-bottom: 5rem; }
.mt-6 { margin-top: 5rem; }

.premium-clean-card { box-shadow: 0 20px 50px rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.02); transition: all 0.4s ease; &:hover { transform: translateY(-5px); box-shadow: 0 30px 60px rgba(0,0,0,0.06); } }
.icon-clean-wrapper { width: 55px; height: 55px; border-radius: 12px; background: rgba(80, 192, 38, 0.1); display: flex; align-items: center; justify-content: center; i { color: $amf-green; font-size: 1.8rem; } }
.icon-clean-wrapper-small { width: 45px; height: 45px; border-radius: 10px; background: rgba(80, 192, 38, 0.1); display: flex; align-items: center; justify-content: center; i { color: $amf-green; font-size: 1.5rem; } }

.premium-list { list-style: none !important; padding-left: 0; }
.premium-list li { position: relative; padding-left: 1.8rem; margin-bottom: 1rem; color: #495057; &::before { content: 'verified'; font-family: 'Material Icons' !important; position: absolute; left: 0; top: 0; color: $amf-green; font-size: 1.2rem; } }

.premium-list-white { list-style: none !important; padding-left: 0; }
.premium-list-white li { position: relative; padding-left: 1.8rem; margin-bottom: 1rem; color: white; &::before { content: 'verified'; font-family: 'Material Icons' !important; position: absolute; left: 0; top: 0; color: white; font-size: 1.2rem; } }

.melvin-premium-wrapper { width: 100%; max-width: 400px; .glow-circle { width: 300px; height: 300px; background: radial-gradient(circle, rgba(62, 148, 82, 0.4) 0%, transparent 70%); border-radius: 50%; z-index: 1; } img { filter: drop-shadow(0 20px 40px rgba(0,0,0,0.6)); } }
.premium-glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.05); border-top: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 20px 40px rgba(0,0,0,0.4); transition: transform 0.3s; &:hover { transform: translateY(-5px); } }
.btn-outline-light { border: 2px solid white; color: white; background: transparent; transition: all 0.3s ease; &:hover { background: white; color: #3E9452; transform: translateY(-3px); } }

.reveal-up { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
.is-visible.reveal-up, .is-visible .reveal-up { opacity: 1; transform: translateY(0); }
.reveal-scale-zoom { opacity: 0; transform: scale(0.5) translateY(20px); transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
.is-visible.reveal-scale-zoom, .is-visible .reveal-scale-zoom { opacity: 1; transform: scale(1) translateY(0); }
.delay-1 { transition-delay: 0.15s; } .delay-2 { transition-delay: 0.3s; } .delay-3 { transition-delay: 0.45s; } .delay-4 { transition-delay: 0.6s; } .delay-5 { transition-delay: 0.75s; } .delay-6 { transition-delay: 0.9s; }

.swiper-img-clean { transition: all 0.4s ease; box-shadow: 0 15px 35px rgba(0,0,0,0.05); cursor: pointer; &:hover { transform: scale(1.02); box-shadow: 0 20px 40px rgba(0,0,0,0.1); } }
.modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.9); backdrop-filter: blur(10px); display: flex; justify-content: center; align-items: center; z-index: 9999; }
.modal-content2 { width: 90vw; height: 90vh; max-width: 1200px; background: transparent; border-radius: 15px; position: relative; overflow: hidden; }
.modal-close-btn { position: absolute; top: 15px; right: 20px; background-color: $amf-green; color: white; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 2rem; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 10; transition: transform 0.2s ease; line-height: 0; padding-bottom: 4px; }
.modal-iframe { width: 100%; height: 100%; border: none; display: block; border-radius: 15px; }
.lightbox-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.9); backdrop-filter: blur(5px); z-index: 10000; display: flex; justify-content: center; align-items: center; }
.btn-close-lightbox { position: absolute; top: 20px; right: 30px; background: transparent; border: none; color: white; font-size: 3rem; cursor: pointer; line-height: 1; z-index: 10001; transition: transform 0.2s ease; &:hover { transform: scale(1.1); color: #50c026; } }
.lightbox-content { position: relative; width: 90vw; max-width: 1000px; height: 80vh; display: flex; align-items: center; justify-content: center; .btn-nav { position: absolute; top: 50%; transform: translateY(-50%); background: white; color: #50c026; border: none; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; z-index: 10; i { font-size: 30px; } &:hover { background: #50c026; color: white; transform: translateY(-50%) scale(1.1); } &.left { left: -25px; } &.right { right: -25px; } } .img-container { position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; .lightbox-img { max-width: 100%; max-height: 90%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); object-fit: contain; animation: fadeIn 0.4s ease; } } }
@keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
@media (max-width: 768px) { .lightbox-content .btn-nav { &.left { left: 10px; } &.right { right: 10px; } } }
</style>