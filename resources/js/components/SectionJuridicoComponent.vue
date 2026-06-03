<template>
    <div>
      <section class="py-6 bg-light text-center section-derechos relative-container" id="juridico">
        <div class="container px-md-5">
          
          <!-- Título Principal -->
          <div class="row justify-content-center mb-6 reveal-up">
            <div class="col-lg-8 text-center">
              <h6 class="text-uppercase tracking-widest text-muted fw-bold mb-3">Conoce tus</h6>
              <h2 class="display-3 fw-black amf-green-text mb-4 text-uppercase">Derechos</h2>
              <div class="accent-line mx-auto mb-4"></div>
              <p class="text-secondary fs-5 px-md-5 lh-lg">
                La AMFpro, a través de su coordinación jurídica brinda asesoría y seguimiento de las acciones legales interpuestas por sus afiliados y afiliadas. Contáctanos si necesitas apoyo en los siguientes casos:
              </p>
            </div>
          </div>

          <!-- Listado de Categorías y Derechos -->
          <div v-for="(category, cIndex) in categories" :key="category.title" class="mb-6 reveal-up" :class="'delay-' + (cIndex % 3 + 1)">
            
            <!-- Título de Categoría con Ícono -->
            <div class="d-flex align-items-center justify-content-center justify-content-lg-start mb-4">
              <div class="category-icon-wrapper shadow-sm rounded-circle d-flex align-items-center justify-content-center bg-white me-3" style="width: 50px; height: 50px;">
                <i class="material-icons amf-green-text fs-4">{{ category.icon }}</i>
              </div>
              <h4 class="fw-bold text-dark mb-0">{{ category.title }}</h4>
            </div>

            <!-- Grid de Tarjetas de Derechos -->
            <div class="row g-4 text-start">
              <div v-for="(point, pIndex) in category.points" :key="point.id" class="col-12 col-md-6 col-lg-4">
                
                <div class="premium-legal-card bg-white p-4 rounded-4 shadow-sm border border-light h-100 position-relative overflow-hidden"
                     @mouseenter="point.show = true"
                     @mouseleave="point.show = false">
                  
                  <div class="card-top-line"></div>
                  
                  <!-- Contenedor flex para Título (Izquierda) y Número (Derecha) -->
                  <div class="d-flex justify-content-between align-items-start mb-2">
                    <h6 class="fw-bold text-dark mb-0 transition-color pe-3 mt-2" :class="{'amf-green-text': point.show}" style="line-height: 1.4;">
                      {{ point.text }}
                    </h6>
                    <!-- El número cambia de opacidad al hacer hover -->
                    <span class="legal-number amf-green-text fw-black transition-number" :class="point.show ? 'opacity-100' : 'opacity-25'" style="font-size: 3rem; line-height: 1;">
                      0{{ point.id }}
                    </span>
                  </div>
                  
                  <div class="legal-detail-wrapper" :class="{'is-expanded': point.show}">
                    <div class="border-top pt-3 mt-2 opacity-25"></div>
                    <p class="text-secondary small mb-0 lh-lg">{{ point.detalle }}</p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <!-- Documentos Descargables (NUEVO DISEÑO PREMIUM) -->
          <div class="row justify-content-center mt-6 mb-5 reveal-up">
            <div class="col-12 text-center">
              <h6 class="text-uppercase tracking-widest text-muted fw-bold mb-3">Descargas</h6>
              <h3 class="display-6 fw-black text-dark mb-4">Documentos de Conocimiento</h3>
            </div>
          </div>

          <div class="row g-4 justify-content-center reveal-up delay-2">
            <div v-for="doc in docsData" :key="doc.title" class="col-12 col-sm-6 col-lg-3 text-start">
              
              <a :href="doc.url_link" target="_blank" class="text-decoration-none">
                <div class="premium-doc-card bg-white p-4 rounded-4 shadow-sm border border-light h-100 d-flex flex-column position-relative overflow-hidden">
                  
                  <!-- Marca de agua decorativa -->
                  <div class="card-bg-decoration position-absolute opacity-10" style="top: -20px; right: -20px; pointer-events: none;">
                    <!-- <img :src="doc.icon_grey" style="height: 140px;"> -->
                  </div>

                  <!-- Contenedor del ícono -->
                  <div class="icon-container mb-4 position-relative z-2">
                    <div class="icon-box rounded-circle d-flex align-items-center justify-content-center shadow-sm" style="width: 55px; height: 55px; background-color: rgba(62, 148, 82, 0.1);">
                       <img :src="doc.icon_grey" class="img-fluid main-icon" style="height: 28px; object-fit: contain;">
                    </div>
                  </div>

                  <!-- Textos y botón -->
                  <div class="content-container mt-auto position-relative z-2">
                    <h6 class="fw-bold text-dark mb-4 lh-base doc-title" style="min-height: 45px; font-size: 0.95rem;">
                      {{ doc.title }}
                    </h6>
                    <div class="download-link d-inline-flex align-items-center fw-bold text-uppercase tracking-wider small">
                      <span class="link-text">Descargar PDF</span>
                      <i class="material-icons ms-2 transition-icon fs-5">arrow_forward</i>
                    </div>
                  </div>

                </div>
              </a>

            </div>
          </div>

        </div>
      </section>

      <!-- CONTACTO PREMIUM -->
      <section class="section-contacto py-6 text-white position-relative" style="background-color: #3e9452;">
        <!-- Ícono divisor ajustado al centro absoluto -->
        <div class="split-icon-container-2">
            <img src="recursos/documento-reloj.png" alt="Noticias Icon">
        </div>
        
        <!-- Degradado de fondo para impacto -->
        <div class="position-absolute top-0 start-0 w-100 h-100 opacity-50" style="background: radial-gradient(circle at center, rgba(62,148,82,0.4) 0%, transparent 70%);"></div>

        <div class="container position-relative z-2" style="margin-bottom: 120px; margin-top: 50px;">
          
          <div class="row text-center mb-5 reveal-up">
            <div class="col-md-12 mb-5">
              <h2 class="display-5 fw-black text-white mb-3">Contáctanos para más información</h2>
              <p class="fs-6 text-white-50 mx-auto" style="max-width: 600px;">
                Envía tu nombre completo, NUI, tu duda y un teléfono para comunicarnos contigo de manera personalizada.
              </p>
            </div>
          </div>

          <!-- Tarjetas de Contacto tipo Glassmorphism -->
          <div class="row g-4 text-center justify-content-center">
            
            <div class="col-md-4 reveal-up delay-1">
              <div class="contact-glass-card h-100 p-4 rounded-4">
                <i class="material-icons mb-3" style="font-size: 2.5rem; color: #50c026;">email</i>
                <h6 class="fw-bold text-uppercase mb-3 tracking-wider">Correo</h6>
                <p class="small mb-1 text-white-50"><a href="mailto:contacto@amfpro.mx" class="text-white text-decoration-none hover-green">contacto@amfpro.mx</a></p>
                <p class="small text-white-50"><a href="mailto:juridico@amfpro.mx" class="text-white text-decoration-none hover-green">juridico@amfpro.mx</a></p>
              </div>
            </div>

            <div class="col-md-4 reveal-up delay-2">
              <div class="contact-glass-card h-100 p-4 rounded-4" style="border-bottom: 3px solid #50c026;">
                <i class="material-icons mb-3" style="font-size: 2.5rem; color: #50c026;">schedule</i>
                <h6 class="fw-bold text-uppercase mb-3 tracking-wider">Atención</h6>
                <p class="small mb-1 text-white-50"><strong class="text-white">Lunes a Jueves</strong><br>10:00 AM - 17:00 PM</p>
                <p class="small text-white-50"><strong class="text-white">Viernes</strong><br>10:00 AM - 15:00 PM</p>
              </div>
            </div>

            <div class="col-md-4 reveal-up delay-3">
              <div class="contact-glass-card h-100 p-4 rounded-4">
                <i class="material-icons mb-3" style="font-size: 2.5rem; color: #50c026;">phone_in_talk</i>
                <h6 class="fw-bold text-uppercase mb-3 tracking-wider">Llámanos</h6>
                <p class="small text-white-50"><a href="tel:7286906040" class="text-white text-decoration-none hover-green fs-5">(728) 690 6040</a><br><span class="opacity-75 mt-2 d-block">Ext: 105 y 107</span></p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            observer: null,
            categories: [
                {
                title: 'Carácter económico',
                icon: 'account_balance_wallet',
                points: [
                    { id: 1, text: 'Adeudo de salario', detalle: 'Si tu club te debe salario ya sea durante o al término del torneo (individual o grupal).', show: false },
                    { id: 2, text: 'Despido injustificado', detalle: 'Si tu club te informa que no entras en planes y tienes contrato vigente.', show: false },
                    { id: 3, text: 'Falta de pago de bonos o premios', detalle: 'Si en tu contrato en el algún documento se reconoció el pago de bonos o premios que el club no te ha realizado.', show: false },
                    { id: 4, text: 'Incumplimiento de convenio de pago', detalle: 'Si firmaste con tu club un acuerdo de pagos registrado ante la FMF y no lo ha cumplido.', show: false },
                    { id: 5, text: 'Pago de porcentaje por transferencia', detalle: 'Derivado de los acuerdos entre la FMF y la AMFpro, cuando te transfieren de forma definitiva a un club, tienes derecho a recibir un 10% del total de la transferencia, al ser un derecho irrenunciable y no negociable.', show: false },
                    { id: 6, text: 'Cobro ilegal de cuotas por jugar', detalle: 'Si el club pretende cobrarte por el registro, cuotas mensuales, viajes, uniformes, alimentos y/o documentos por jugar los partidos.', show: false }
                ]
                },
                {
                title: 'Gestión de documentos',
                icon: 'folder_shared',
                points: [
                    { id: 1, text: 'Información para registros', detalle: 'Infórmate de todo lo que necesitas para no tener problemas al momento de firmar tu contrato y registrarte.', show: false },
                    { id: 2, text: 'Solicitud de historial deportivo / estatus', detalle: 'Documentos que expide la FMF y que pueden servirte como currículum deportivo.', show: false },
                    { id: 3, text: 'Retención de documentos y expedientes', detalle: 'Si al terminar tu contrato el club no te entrega tu finiquito o te pide dinero por darte tus documentos.', show: false },
                    { id: 4, text: 'Derechos por embarazo y maternidad', detalle: 'Si eres Jugadora de la Liga MX Femenil y quieres recibir información sobre estos derechos contemplados en el Reglamento de Transferencias y Contrataciones de la FMF.', show: false },
                    { id: 5, text: 'Pase internacional (CTI)', detalle: 'Para poder jugar en otro país es indispensable contar con el finiquito y el TPO (que ningún tercero ajeno al fútbol tiene derechos económicos sobre ti), del último club en que jugaste; esto, para que el nuevo club pueda pedir tu pase internacional a través del TMS.', show: false },
                    { id: 6, text: 'Solicitud de copia de contrato', detalle: 'Pídele a tu club y si no te la entregan, nosotros podemos apoyarte a solicitarla a la FMF.', show: false }
                ]
                },
                {
                title: 'Incidencias de integridad del jugador',
                icon: 'health_and_safety',
                points: [
                    { id: 1, text: 'Rescisión anticipada de contrato', detalle: 'En caso de incumplimiento o adeudo de las obligaciones señaladas en el contrato.', show: false },
                    { id: 2, text: 'Falta de atención médica / lesiones', detalle: 'Si sufriste una lesión en partido o entrenamiento, tienes derecho a que tu club te de la atención médica necesaria hasta tu total recuperación.', show: false },
                    { id: 3, text: 'Separación de los entrenamientos', detalle: 'Si te enviaron a entrenar solo o con una categoría inferior dentro del club, como medida de presión o castigo.', show: false }
                ]
                }
            ],
            docsData: [
                { title: 'Reglamento de la comisión de controversias', icon: 'recursos/documento.png', icon_grey: 'recursos/documento-gris.png', url_link: 'https://fmf.mx/docs/reglamentos/441.pdf'},
                { title: 'Reglamento de transferencias', icon: 'recursos/dobledocumento.png', icon_grey: 'recursos/dobledocumento-gris.png', url_link: 'https://fmf.mx/docs/reglamentos/472.pdf' },
                { title: 'Código de Ética', icon: 'recursos/ball.png', icon_grey: 'recursos/ball-gris.png', url_link: 'https://fmf.mx/docs/reglamentos/475.pdf' },
                { title: 'Derechos de la mujer futbolista', icon: 'recursos/pesa.png', icon_grey: 'recursos/pesa-gris.png', url_link: '#' }
            ]
        }
    },
    mounted() {
      // INICIALIZACIÓN DE INTERSECTION OBSERVER
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
$amf-main: #3E9452;
$amf-accent: #50c026;

h1, h2, h3, h4, h5, h6, .fw-black { 
  font-family: 'Montserrat', sans-serif !important; 
  font-weight: 900; 
}

p, span, div, a {
  font-family: 'Roboto', sans-serif !important;
}

.amf-green-text { color: $amf-accent !important; }
.tracking-widest { letter-spacing: 4px; }
.tracking-wider { letter-spacing: 2px; }
.accent-line { width: 100px; height: 8px; background-color: $amf-accent; border-radius: 4px; }
.py-6 { padding-top: 6rem; padding-bottom: 6rem; }
.mt-6 { margin-top: 5rem; }
.mb-6 { margin-bottom: 5rem; }
.hover-green:hover { color: $amf-accent !important; transition: 0.3s ease; }

/* SISTEMA DE ANIMACIÓN REVEAL-UP */
.reveal-up { 
  opacity: 0; 
  transform: translateY(40px); 
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); 
}
.is-visible.reveal-up, .is-visible .reveal-up { 
  opacity: 1; 
  transform: translateY(0); 
}
.delay-1 { transition-delay: 0.15s; }
.delay-2 { transition-delay: 0.3s; }
.delay-3 { transition-delay: 0.45s; }

/* =========================================================
   TARJETAS INTERACTIVAS DE DERECHOS
   ========================================================= */
.premium-legal-card {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  
  .card-top-line {
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 0;
    background-color: $amf-main;
    transition: width 0.4s ease;
  }

  .transition-color {
    transition: color 0.3s ease;
  }

  .transition-number {
    transition: opacity 0.4s ease;
  }

  .legal-detail-wrapper {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    
    &.is-expanded {
      max-height: 250px;
      opacity: 1;
    }
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(62, 148, 82, 0.15) !important;
    border-color: rgba(62, 148, 82, 0.3) !important;
    
    .card-top-line { width: 100%; }
  }
}

/* =========================================================
   NUEVAS TARJETAS DE DOCUMENTOS (MINIMALISTAS)
   ========================================================= */
.premium-doc-card {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  .icon-box {
    transition: all 0.4s ease;
    .main-icon {
      transition: all 0.4s ease;
    }
  }

  .doc-title {
    transition: color 0.3s ease;
  }

  .download-link {
    color: $amf-main;
    transition: color 0.3s ease;
    .transition-icon {
      transition: transform 0.4s ease;
    }
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(62, 148, 82, 0.15) !important;
    border-color: rgba(62, 148, 82, 0.3) !important;

    .icon-box {
      background-color: $amf-main !important;
      transform: scale(1.1);
      .main-icon {
        /* Vuelve el icono completamente blanco para que resalte en el verde */
        filter: brightness(0) invert(1);
      }
    }

    .doc-title {
      color: $amf-main !important;
    }

    .download-link {
      color: $amf-dark;
      .transition-icon {
        transform: translateX(8px);
      }
    }
  }
}

/* =========================================================
   SECCIÓN DE CONTACTO (GLASSMORPHISM)
   ========================================================= */
.section-contacto {
  .split-icon-container-2 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    top: -55px; /* Mitad afuera, mitad adentro */
    
    img {
      height: 110px;
      object-fit: contain;
      filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));
    }
  }

  .contact-glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.4s ease, background 0.4s ease;

    &:hover {
      transform: translateY(-10px);
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(80, 192, 38, 0.4);
    }
  }
}
</style>