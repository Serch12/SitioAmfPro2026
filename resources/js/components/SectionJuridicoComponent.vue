<template>
    <div>
        <section class="py-5 bg-white text-center mt-5 section-derechos" id="juridico">
      <div class="container px-md-5">
        <h2 class="fw-normal display-4 mb-3" style="color:#50c026;">Conoce tus <span class="text-uppercase amf-green-text">Derechos</span></h2>
        <p class="text-muted text-start small mx-auto mb-5" style="max-width: 800px;">
          La AMFpro, a través de su coordinación jurídica brinda asesoría y seguimiento de las acciones legales interpuestas por sus afiliados y afiliadas; por lo que, te sugerimos nos contactes si necesitas apoyo en los siguientes casos:
        </p>

        <div v-for="category in categories" :key="category.title" class="mb-5">
          <h4 class="text-start fw-normal mb-4" style="color:#50c026;">{{ category.title }}</h4>
          <div class="row text-start g-4">
            <div v-for="point in category.points" 
                :key="point.id" 
                class="col-12 col-md-4 d-flex align-items-start mb-2"
                @mouseenter="point.show = true"
                @mouseleave="point.show = false">
              
              <span class="legal-badge me-3">{{ point.id }}</span>
              
              <div class="flex-grow-1">
                <div class="fw-bold small lh-1 transition-color" :class="{'amf-green-text-2': point.show}">
                  {{ point.text }}:
                </div>
                
                <transition name="expand">
                  <div v-if="point.show" class="detail-text small mt-1">
                    {{ point.detalle }}
                  </div>
                </transition>

                <a href="javascript:void(0)" class="amf-green-text-2 x-small d-block mt-1">
                  <p v-if="point.show === true" style="color:red;">(menos)</p>
                  <p v-else>(más)</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <h5 class="fw-bold mt-5 mb-5" style="color:#50c026;">Algunos documentos descargables para tu conocimiento</h5>
        
        <div class="row g-4 justify-content-center">
          <div v-for="doc in docsData" :key="doc.title" class="col-12 col-sm-6 col-md-3">
            <div class="doc-card-mirror rounded-5 d-flex flex-column align-items-center">
              
              <div class="sliding-overlay"></div>

              <div class="icon-wrapper d-flex align-items-center justify-content-center w-100">
                <img :src="doc.icon" class="img-fluid doc-icon icon-default" style="height: 150px;">
                <img :src="doc.icon_grey" class="img-fluid doc-icon icon-hover-grey" style="height: 150px;">
              </div>

              <div class="content-wrapper p-4 d-flex flex-column align-items-center w-100">
                <h6 class="fw-bold text-center flex-grow-1 mb-4" style="font-size: 0.9rem; z-index: 3;">
                  {{ doc.title }}
                </h6>
                <a :href="doc.url_link" class="btn btn-download btn-sm px-4 fw-bold text-uppercase" style="z-index: 3;" target="_blank">
                  Ir
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-contacto py-5 text-white position-relative">
      <div class="split-icon-container-2">
          <img src="recursos/documento-reloj.png" alt="Noticias Icon">
      </div>
      <div class="container" style="margin-bottom: 180px;">
        <div class="row text-center mb-5 contact-info-top">
          <div class="col-md-12 mb-4">
            <p class="small mb-1 letra-30">Contáctanos para más información</p>
            <p class="small letra-18">Envía tu nombre completo, NUI, tu duda y un teléfono para comunicarnos contigo.</p>
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4 text-start">
                <h6 class="fw-bold text-uppercase mb-3">Correo</h6>
                <p class="small mb-1">contacto@amfpro.mx</p>
                <p class="small">juridico@amfpro.mx</p>
              </div>
              <div class="col-md-4"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4 text-start">
                <h6 class="fw-bold text-uppercase mb-3">Horario de atención</h6>
                <p class="small mb-1"><strong>Lunes a jueves</strong><br>10:00 AM - 17:00 PM</p>
                <p class="small"><strong>Viernes</strong><br>10:00 AM - 15:00 PM</p>
              </div>
              <div class="col-md-4"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4 text-start">
                <h6 class="fw-bold text-uppercase mb-3">Llámanos</h6>
                <p class="small">(728) 690 6040 (ext: 105 y 107)</p>
              </div>
              <div class="col-md-4"></div>
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
                categories: [
                    {
                    title: 'Carácter económico',
                    points: [
                        { 
                        id: 1, 
                        text: 'Adeudo de salario', 
                        detalle: 'Si tu club te debe salario ya sea durante o al término del torneo (individual o grupal).',
                        show: false 
                        },
                        { 
                        id: 2, 
                        text: 'Despido injustificado', 
                        detalle: 'Si tu club te informa que no entras en planes y tienes contrato vigente.',
                        show: false 
                        },
                        { id: 3, text: 'Falta de pago de bonos o premios',detalle: 'Si en tu contrato en el algún documento se reconoció el pago de bonos o premios que el club no te ha realizado.',
                        show: false },
                        { id: 4, text: 'Incumplimiento de convenio de pago',detalle: 'Si firmaste con tu club un acuerdo de pagos registrado ante la FMF y no lo ha cumplido.',
                        show: false },
                        { id: 5, text: 'Pago de porcentaje por transferencia',detalle: 'Derivado de los acuerdos entre la FMF y la AMFpro, cuando te transfieren de forma definitiva a un club, tienes derecho a recibir un 10% del total de la transferencia, al ser un derecho irrenunciable y no negociable.',
                        show: false },
                        { id: 6, text: 'Cobro ilegal de cuotas por jugar',detalle: 'Si el club pretende cobrarte por el registro, cuotas mensuales, viajes, uniformes, alimentos y/o documentos por jugar los partidos.',
                        show: false }
                    ]
                    },
                    {
                    title: 'Gestión de documentos',
                    points: [
                        { id: 1, text: 'Información para registros',detalle: 'Infórmate de todo lo que necesitas para no tener problemas al momento de firmar tu contrato y registrarte.',
                        show: false },
                        { id: 2, text: 'Solicitud de historial deportivo y/o estatus como jugador',detalle: 'Documentos que expide la FMF y que pueden servirte como currículum deportivo.',
                        show: false },
                        { id: 3, text: 'Retención de documentos y expedientes de finiquito',detalle: 'Si al terminar tu contrato el club no te entrega tu finiquito o te pide dinero por darte tus documentos.',
                        show: false },
                        { id: 4, text: 'Asesoría sobre los derechos por embarazo y maternidad',detalle: 'Si eres Jugadora de la Liga MX Femenil y quieres recibir información sobre estos derechos contemplados en el Reglamento de Transferencias y Contrataciones de la FMF.',
                        show: false },
                        { id: 5, text: 'Pase internacional (CTI)',detalle: 'Para poder jugar en otro país es indispensable contar con el finiquito y el TPO (que ningún tercero ajeno al fútbol tiene derechos económicos sobre ti), del último club en que jugaste; esto, para que el nuevo club pueda pedir tu pase internacional a través del TMS (Sistema de Transferencias Internacional) de la FIFA.',
                        show: false },
                        { id: 6, text: 'Solicitud de copia de contrato',detalle: 'Pídele a tu club y si no te la entregan, nosotros podemos apoyarte a solicitarla a la FMF.',
                        show: false }
                    ]
                    },
                    {
                    title: 'Incidencias de integridad del jugador',
                    points: [
                        { id: 1, text: 'Rescisión anticipada de contrato',detalle: 'En caso de incumplimiento o adeudo de las obligaciones señaladas en el contrato.',
                        show: false },
                        { id: 2, text: 'Falta de atención médica debido a una lesión y reembolso de gastos',detalle: 'Si sufriste una lesión en partido o entrenamiento, tienes derecho a que tu club te de la atención médica necesaria hasta tu total recuperación.',
                        show: false },
                        { id: 3, text: 'Separación de los entrenamientos',detalle: 'Si te enviaron a entrenar solo o con una categoría inferior dentro del club, como medida de presión o castigo.',
                        show: false }
                    ]
                    }
                ],
            }
        },
        setup() {
            return {
            
            legalPoints: [
                { id: '1', text: 'Adeudo de salario' }, { id: '2', text: 'Despido injustificado' },
                { id: '3', text: 'Rescisión de contrato' }, { id: '4', text: 'Integridad del jugador' }
            ],
            
            docsData: [
                { title: 'Reglamento de la comisión de controversias', icon: 'recursos/documento.png', icon_grey: 'recursos/documento-gris.png',url_link: 'https://fmf.mx/docs/reglamentos/441.pdf'},
                { title: 'Reglamento de transferencias', icon: 'recursos/dobledocumento.png', icon_grey: 'recursos/dobledocumento-gris.png',url_link: 'https://fmf.mx/docs/reglamentos/472.pdf' },
                { title: 'Código de Ética', icon: 'recursos/ball.png', icon_grey: 'recursos/ball-gris.png',url_link: 'https://fmf.mx/docs/reglamentos/475.pdf' },
                { title: 'Derechos de la mujer futbolista', icon: 'recursos/pesa.png', icon_grey: 'recursos/pesa-gris.png',url_link: '' }
            ],
            docs: ['Reglamento', 'Manual', 'Estatutos', 'Fichas']
            }
        },
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

/** estilos de seccion derechos */
.section-derechos {
  font-family: 'Roboto', sans-serif !important;

  .amf-green-text {
    color: $amf-accent !important;
  }

  .text-uppercase {
    font-weight: 900;
  }

  .legal-badge {
    background-color: $amf-dark;
    color: white;
    min-width: 28px;
    height: 28px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.8rem;
  }

  .x-small {
    font-size: 0.7rem;
    text-decoration: none;
  }

  .transition-color {
    transition: color 0.3s ease;
  }

  .detail-text {
    color: #666;
    line-height: 1.2;
    display: block; 
  }

}
/** finaliza estilos de seccion derechos */
/** estilos de Animación de expansión */
$green-mate: #3E9452;   
$green-bright: #50C026;  
$green-dark-btn: #3E9452; 

.doc-card-mirror {
  position: relative;
  width: 100%;
  height: 350px; 
  background-color: $green-mate; 
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease;

  
  .sliding-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%; 
    background-color: $green-bright;
    border-radius: 30px !important;
    z-index: 1;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .icon-wrapper {
    height: 180px;
    position: relative;
    z-index: 3; 

    .doc-icon {
      position: absolute; 
      transition: opacity 0.4s ease, transform 0.4s ease;
    }

    .icon-default {
      opacity: 1;
    }

    .icon-hover-grey {
      opacity: 0; 
    }
  }

  .content-wrapper {
    flex: 1;
    position: relative;
    z-index: 2;
    color: white;
  }

  .btn-download {
    background-color: white;
    color: $green-dark-btn;
    border: none;
    border-radius: 10px;
    transition: all 0.4s ease;
  }

  &:hover {
    background-color: transparent; 

    .sliding-overlay {
      height: 65%; 
      top: 55%;   
    }

    .icon-default {
      opacity: 0; 
    }

    .icon-hover-grey {
      opacity: 1; 
      transform: scale(1.05);
    }

    .btn-download {
      background-color: $green-dark-btn;
      color: white !important;
    }
  }
}
/** Finaliza estilos de animación de expansión */

$amf-news-bg: #3E9452;
$amf-accent: #50C026;

.section-contacto {
  background-color: $amf-news-bg;
  margin-top: 150px;
  
  .split-icon-container-2{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    bottom: -120px;;
  }
  .contact-info-top {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 30px;
  }
  .letra-30{
    font-size: 30px;
  }
  .letra-18{
    font-size: 18px;
  }
}
/** Finaliza Estilos de la parte de contacto */

</style>