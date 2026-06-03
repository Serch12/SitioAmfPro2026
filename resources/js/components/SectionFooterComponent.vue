<template>
    <footer class="footer-contact position-relative bg-light" id="contacto">
      <div class="footer-top-grey pt-5">
        <div class="container position-relative">
          <div class="contact-header-container">
            <!-- Animación para el título -->
            <h2 class="contact-title fw-bold reveal-up">CONTÁCTO</h2>
            
            <!-- Animación para la portería -->
            <div class="goal-wrapper reveal-up delay-1">
              <img src="recursos/porteria-area-footer.png" class="goal-footer" alt="Portería Contacto">
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom-green pb-5">
        
        <div class="container position-relative">
          <!-- Animación especial para el balón -->
          <img src="recursos/balon.png" class="ball-footer reveal-ball delay-2" alt="Balón">
          
          <div class="row text-center text-white mb-5 contact-details">
            <!-- Datos en cascada -->
            <div class="col-md-4 mb-4 reveal-up delay-3">
              <h6 class="fw-bold mb-1">Teléfono</h6>
              <p class="mb-0">728 690 6040</p>
            </div>
            <div class="col-md-4 mb-4 reveal-up delay-4">
              <h6 class="fw-bold mb-1">Horario de atención</h6>
              <p class="small mb-0">Lunes a jueves de 10:00 am a 5:00 pm</p>
              <p class="small mb-0">Viernes de 10:00 am a 3:00 pm</p>
            </div>
            <div class="col-md-4 mb-4 reveal-up delay-5">
              <h6 class="fw-bold mb-1">Correo electrónico</h6>
              <a href="mailto:contacto@amfpro.mx" class="text-white text-decoration-underline">contacto@amfpro.mx</a>
            </div>
            <div class="col-12 mt-3 reveal-up delay-6">
              <h6 class="fw-bold mb-1">Dirección</h6>
              <p class="small mb-0 px-lg-5">
                Av. Industria Automotriz n.33 int. 203 Col. Parque Industrial Lerma, Lerma, Estado de México. CP. 52004
              </p>
            </div>
          </div>

          <!-- Animación para el mapa -->
          <div class="map-wrapper-footer mx-auto reveal-up delay-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.766539253981!2d-99.55750252478924!3d19.29251618195714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8ac8153eeb45%3A0xc015a83f0cd31d06!2sAsociaci%C3%B3n%20Mexicana%20de%20Futbolistas%20(AMFpro)!5e0!3m2!1ses!2smx!4v1772567701133!5m2!1ses!2smx" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
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
    // Inicializamos el Intersection Observer para animar los elementos al hacer scroll
    const options = { root: null, rootMargin: '0px', threshold: 0.15 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);

    // Le decimos al Observer qué elementos vigilar
    this.$nextTick(() => {
      document.querySelectorAll('.reveal-up, .reveal-ball').forEach(el => {
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
/** Estilos generales */
.amf-landing-page {
  font-family: 'Roboto', sans-serif !important;
}

$amf-dark: #3E9452;
$amf-main: #3e9452;
$amf-accent: #50c026;

.amf-green-text { 
  color: $amf-accent !important; 
}

.social-nav { 
  width: 30px; 
  height: 30px; 
  object-fit: contain; 
}

.split-icon-container{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  bottom: -92px;
}

.amf-green-text {
  color: $amf-accent !important;
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: -1px;
}
.amf-green-text-2 {
  color: #50c026 !important;
}
.section-sub {
  font-size: 1.1rem;
  font-weight: 500;
}
/** Finaliza Estilos generales */


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

/* Animación especial con rebote para el balón */
.reveal-ball {
  opacity: 0;
  transform: translateY(-80px) rotate(-180deg) scale(0.5);
  transition: all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1); /* Efecto spring/rebote */
}
.is-visible.reveal-ball {
  opacity: 1;
  transform: translateY(0) rotate(0deg) scale(1);
}

.delay-1 { transition-delay: 0.15s; }
.delay-2 { transition-delay: 0.3s; }
.delay-3 { transition-delay: 0.45s; }
.delay-4 { transition-delay: 0.6s; }
.delay-5 { transition-delay: 0.75s; }
.delay-6 { transition-delay: 0.9s; }


/** estilos de seccion del footer */
.footer-contact {
  font-family: 'Roboto', sans-serif;
  overflow: hidden; // Evita scroll horizontal por la sombra o el balón

  .footer-top-grey {
    @media (max-width: 768px) {
      display: none;
    }
    @media (max-width: 1024px) {
      display: none;
    }
    position: relative;
    min-height: 280px;

    .contact-header-container {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center; // Centra la portería
    }

    .contact-title {
      position: absolute;
      left: 0;
      top: 430px;
      color: #3e9452;
      font-size: 3rem;
      z-index: 15;     /* Por encima de todo */
      margin: 0;
      @media (max-width: 768px) {
        display: none;
      }
      @media (max-width: 992px) {
        font-size: 2rem;
        position: relative; /* En móviles es mejor que sea relativo para que no se encime */
        text-align: center;
        width: 100%;
        margin-bottom: 20px;
      }
    }

    .goal-wrapper {
      position: relative;
      z-index: 10;
      margin-bottom: -480px; 
      width: 100%;
      display: flex;
      justify-content: center;

      .goal-footer {
        width: 100%;
        height: auto;
        filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.1));
      }
      @media (max-width: 768px) {
        .goal-footer{
          display: none;
        }
      }
    }
  }

  .footer-bottom-green {
    background-color: #3e9452;
    position: relative;
    z-index: 2;
    /* Reducimos el padding-top ya que la imagen de portería ya trae sus líneas */
    padding-top: 320px; 
    @media (max-width: 768px) {
      padding-top: 20px;
    }
    @media (max-width: 1024px) {
      padding-top: 20px;
    }
    .container {
      // Este relative es la clave: el balón se moverá SOLO dentro de estos 1320px (o lo que mida tu container)
      position: relative; 
    }
    .ball-footer {
      position: absolute;
      /* Ajusta 'top' para que coincida con la línea de la portería */
      top: -328px; 
      /* En lugar de 13% de la pantalla, usamos una posición fija respecto al contenedor */
      right: 40px; 
      width: 70px;
      z-index: 5;
      
      // Opcional: Si quieres que en móviles se vea distinto
      @media (max-width: 768px) {
        width: 40px;
        right: 10px;
        top: 10px;
      }
    }
  }

  .contact-details {
    position: relative;
    z-index: 5;
    h6 { 
      font-size: 1.2rem; 
      text-transform: none; // Como en la imagen 1
    }
    p, a { 
      font-size: 1rem; 
      opacity: 1; 
      font-weight: 300;
    }
  }

  .map-wrapper-footer {
    width: 100%;
    border-radius: 0; // En la imagen 1 se ve más recto
    box-shadow: 0 15px 35px rgba(0,0,0,0.3) !important;
    
    .img-map {
      display: block;
    }
  }
}
/** finaliza estilos de seccion del footer */
</style>