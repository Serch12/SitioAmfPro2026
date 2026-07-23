<template>
    <footer class="footer-contact position-relative bg-light" id="contacto">
      
      <div class="footer-top-grey pt-5">
        <div class="container position-relative">
          <div class="contact-header-container d-flex flex-column align-items-center">
            
            <div class="text-center reveal-up z-index-title">
              <h6 class="text-uppercase tracking-widest text-muted fw-bold mb-2">Estamos para ayudarte</h6>
              <h2 class="display-3 fw-black amf-green-text m-0 text-uppercase" style="font-size: clamp(2.5rem, 4vw, 3.5rem) !important;">CONTACTO</h2>
            </div>
            
            <div class="goal-wrapper reveal-up delay-1">
              <img src="recursos/porteria-area-footer-2-blanco.png" class="goal-footer" alt="Portería Contacto">
            </div>

          </div>
        </div>
      </div>

      <div class="footer-bottom-premium pb-6 position-relative overflow-hidden">
        
        <!-- Fondo decorativo diagonal estilo Casos de Éxito -->
        <div class="success-bg-shape position-absolute top-0 start-0 w-100 h-100 opacity-25 z-1"></div>

        <div class="container position-relative z-3 pt-5 mt-lg-5">
          
          <div class="row g-4 mb-5 text-start justify-content-center">
            
            <!-- TARJETA TELÉFONO -->
            <div class="col-12 col-md-6 col-lg-3 reveal-up delay-3">
              <a href="tel:7286906040" class="premium-glass-card w-100 text-decoration-none h-100 p-4 p-xl-5 rounded-4 d-flex flex-column align-items-center text-center">
                <div class="icon-circle mb-4 shadow-sm">
                  <i class="material-icons">phone_in_talk</i>
                </div>
                <h6 class="fw-bold text-white text-uppercase tracking-wider mb-3">Teléfono</h6>
                <p class="contact-link fs-5 fw-bold mb-0 mt-auto">(728) 690 6040</p>
              </a>
            </div>

            <!-- TARJETA HORARIO (No clickeable) -->
            <div class="col-12 col-md-6 col-lg-3 reveal-up delay-4">
              <div class="premium-glass-card w-100 h-100 p-4 p-xl-5 rounded-4 d-flex flex-column align-items-center text-center" style="cursor: default;">
                <div class="icon-circle mb-4 shadow-sm">
                  <i class="material-icons">schedule</i>
                </div>
                <h6 class="fw-bold text-white text-uppercase tracking-wider mb-3">Horario</h6>
                <div class="mt-auto">
                  <p class="text-white-50 small mb-1"><strong class="text-white">Lun - Jue:</strong> 10:00 am - 5:00 pm</p>
                  <p class="text-white-50 small mb-0"><strong class="text-white">Viernes:</strong> 10:00 am - 3:00 pm</p>
                </div>
              </div>
            </div>

            <!-- TARJETA CORREO -->
            <div class="col-12 col-md-6 col-lg-3 reveal-up delay-5">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@amfpro.mx" target="_blank" rel="noopener noreferrer" class="premium-glass-card w-100 text-decoration-none h-100 p-4 p-xl-5 rounded-4 d-flex flex-column align-items-center text-center">
                <div class="icon-circle mb-4 shadow-sm">
                  <i class="material-icons">email</i>
                </div>
                <h6 class="fw-bold text-white text-uppercase tracking-wider mb-3">Correo</h6>
                <p class="contact-link small mb-0 mt-auto">contacto@amfpro.mx</p>
              </a>
            </div>

            <!-- TARJETA DIRECCIÓN -->
            <div class="col-12 col-md-6 col-lg-3 reveal-up delay-6">
               <a href="https://www.google.com/maps/place/Asociaci%C3%B3n+Mexicana+de+Futbolistas+(AMFpro)/@19.2925212,-99.5575025,16z/data=!3m1!4b1!4m6!3m5!1s0x85cd8ac8153eeb45:0xc015a83f0cd31d06!8m2!3d19.2925162!4d-99.5549276!16s%2Fg%2F11hb5d7qn_?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="premium-glass-card w-100 text-decoration-none h-100 p-4 p-xl-5 rounded-4 d-flex flex-column align-items-center text-center">
                <div class="icon-circle mb-4 shadow-sm">
                  <i class="material-icons">location_on</i>
                </div>
                <h6 class="fw-bold text-white text-uppercase tracking-wider mb-3">Dirección</h6>
                <p class="contact-link small mb-0 lh-base mt-auto">
                  Av. Industria Automotriz n.33 int. 203 Col. Parque Industrial Lerma, Estado de México. CP. 52004
                </p>
              </a>
            </div>

          </div>

          <!-- MAPA COMENTADO HASTA NUEVO AVISO -->
          <!-- 
          <div class="premium-map-wrapper mx-auto reveal-up delay-6 shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.766539253981!2d-99.55750252478924!3d19.29251618195714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8ac8153eeb45%3A0xc015a83f0cd31d06!2sAsociaci%C3%B3n%20Mexicana%20de%20Futbolistas%20(AMFpro)!5e0!3m2!1ses!2smx!4v1772567701133!5m2!1ses!2smx" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          -->

        </div>
      </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      observer: null
    }
  },
  mounted() {
    const options = { root: null, rootMargin: '0px', threshold: 0.15 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);

    this.$nextTick(() => {
      document.querySelectorAll('.reveal-up').forEach(el => {
        this.observer.observe(el);
      });
    });
  },
  beforeDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&family=Montserrat:wght@700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

/* =========================================================
   VARIABLES GLOBALES
   ========================================================= */
$amf-dark: #112a18;
$amf-main: #50c026;
$amf-accent: #50c026;

h1, h2, h3, h4, h5, h6, .fw-black { 
  font-family: 'Montserrat', sans-serif !important; 
  font-weight: 900; 
}

p, span, div, a {
  font-family: 'Roboto', sans-serif !important;
}

.amf-green-text { color: $amf-main !important; }
.tracking-widest { letter-spacing: 4px; }
.tracking-wider { letter-spacing: 2px; }
.pb-6 { padding-bottom: 6rem; }

/* =========================================================
   SISTEMA DE ANIMACIONES (REVEAL) 
   ========================================================= */
.reveal-up { 
  opacity: 0; 
  transform: translateY(40px); 
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); 
}
.is-visible.reveal-up { 
  opacity: 1; 
  transform: translateY(0); 
}

.delay-1 { transition-delay: 0.15s; }
.delay-2 { transition-delay: 0.3s; }
.delay-3 { transition-delay: 0.45s; }
.delay-4 { transition-delay: 0.6s; }
.delay-5 { transition-delay: 0.75s; }
.delay-6 { transition-delay: 0.9s; }


/* =========================================================
   ESTILOS DEL FOOTER PREMIUM
   ========================================================= */
.footer-contact {
  overflow: hidden; 

  .footer-top-grey {
    @media (max-width: 768px) { display: none; }
    @media (max-width: 1024px) { display: none; }
    position: relative;
    min-height: 280px;
    background-color: transparent;

    .contact-header-container {
      position: relative;
      width: 100%;
    }

    .z-index-title {
      position: relative;
      z-index: 15;
      margin-top: 2rem;
    }

    .goal-wrapper {
      position: relative;
      z-index: 10;
      margin-bottom: -564px; 
      width: 106%;
      display: flex;
      justify-content: center;

      .goal-footer {
        width: 100%;
        height: auto;
        filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.1));
      }
    }
  }

  /* Fondo Premium Dark para el Footer */
  .footer-bottom-premium {
    background: linear-gradient(135deg, #3e9452 0%, #2b6b39 100%);
    position: relative;
    z-index: 2;
    padding-top: 340px; 

    @media (max-width: 1024px) { padding-top: 40px; }

    /* Líneas Diagonales */
    .success-bg-shape {
      background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px);
    }

    /* Tarjetas Glassmorphism de Contacto */
    .premium-glass-card {
      background: rgba(255, 255, 255, 0.03); 
      backdrop-filter: blur(20px); 
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.05); 
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 20px 40px rgba(0,0,0,0.2); 
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); 

      .icon-circle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: rgba(80, 192, 38, 0.15);
        color: $amf-accent;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;
        
        i { font-size: 1.8rem; }
      }

      .contact-link {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: color 0.3s ease;
      }

      /* Efectos al pasar el mouse por la tarjeta entera */
      &:hover { 
        transform: translateY(-10px); 
        background: rgba(255, 255, 255, 0.06); 
        border-color: rgba(80, 192, 38, 0.4);

        .icon-circle {
          background-color: $amf-main;
          color: white;
          transform: scale(1.1);
        }

        .contact-link {
          color: $amf-accent !important;
        }
      }
    }

    /* Contenedor del Mapa Flotante */
    .premium-map-wrapper {
      width: 100%;
      border-radius: 24px; 
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 30px 60px rgba(0,0,0,0.5) !important;
      position: relative;
      
      iframe {
        display: block;
        filter: grayscale(20%) contrast(110%);
      }
    }
  }
}
</style>