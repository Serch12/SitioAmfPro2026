<template>
  <div class="amfpro-femenil-wrapper font-roboto">
    
    <!-- ==========================================
         1. PRELOADER CINEMATOGRÁFICO
         ========================================== -->
    <!-- <transition name="fade-preloader">
      <div v-if="isLoading" class="preloader-overlay d-flex align-items-center justify-content-center flex-column z-3">
        <h2 class="preloader-text fw-black text-white tracking-wider mb-0 text-glow">
          <span class="text-gradient-amfpro">#</span>UnidosSomosMasFuertes
        </h2>
        <div class="preloader-line mt-3"></div>
      </div>
    </transition> -->

    <!-- ==========================================
         2. CURSOR MAGNÉTICO (EFECTO PREMIUM)
         ========================================== -->
    <!-- <div class="custom-cursor d-none d-lg-block" :class="{ 'hovering': isCursorHover }" ref="customCursor"></div>
    <div class="custom-cursor-follower d-none d-lg-block" :class="{ 'hovering': isCursorHover }" ref="cursorFollower"></div> -->

    <!-- ==========================================
         BOTÓN FLOTANTE
         ========================================== -->
    <a href="inicio" class="btn-floating-amfpro shadow-lg interactive-element">
      <i class="material-icons">arrow_back</i>
      <span class="d-none d-sm-inline ms-2 fw-bold text-uppercase tracking-wider">Inicio</span>
    </a>

    <!-- ==========================================
         HERO SECTION
         ========================================== -->
    <section class="hero-amfpro position-relative d-flex align-items-center">
      <div class="hero-bg-overlay"></div>
      <div class="hero-bg-image" style="background-image: url('recursos/Femenil/Banner.webp');"></div>
      
      <div class="container-fluid px-4 px-xl-5 position-relative z-2">
        <div class="row min-vh-100 align-items-center pb-5 pt-5 pt-lg-0 mt-5 mt-lg-0">
          
          <div class="col-12 col-lg-7 text-white reveal-on-scroll fade-up">
            <h1 class="hero-title fw-black mb-4 text-white">
              <div class="reveal-mask">
                <span class="reveal-text delay-1">TU CARRERA,</span>
              </div>
              <div class="reveal-mask">
                <span class="reveal-text delay-2 text-gradient-amfpro">TUS DERECHOS, TU VOZ</span>
              </div>
            </h1>
            <div class="reveal-mask mb-5">
              <p class="hero-subtitle text-white-50 lh-lg fw-bold reveal-text delay-3" style="max-width: 550px;">
                En AMFpro trabajamos para representar, acompañar y defender a las Futbolistas profesionales de México. Desde el inicio de la Liga Femenil BBVA, hemos acompañado el crecimiento del futbol profesional femenil y trabajado para que las Jugadoras conozcan y ejerzan sus derechos.
              </p>
            </div>
            <div class="d-flex gap-3 flex-wrap">
              <a href="#" @click.prevent="scrollToSection('derechos')" class="btn btn-glass-outline rounded-pill px-4 py-3 shadow-lg d-inline-flex align-items-center fw-bold interactive-element">
                Tus Derechos <i class="material-icons ms-2 fs-5">gavel</i>
              </a>
            </div>
          </div>

          <!-- Tarjeta Flotante Derecha con Glassmorphism Avanzado (Spotlight) -->
          <div class="col-12 col-lg-5 d-none d-lg-block reveal-on-scroll fade-left delay-2">
            <div class="glass-card-hero p-4 p-xl-5 rounded-4 ms-auto position-relative overflow-hidden floating-anim spotlight-wrapper" style="max-width: 420px;" @mousemove="handleSpotlight" @mouseleave="resetSpotlight">
              <div class="d-flex justify-content-between align-items-center mb-4 position-relative z-2 border-bottom border-light border-opacity-10 pb-3">
                <span class="fw-bold text-white tracking-wider text-uppercase" style="font-size: 0.8rem;">Apoyo Integral</span>
                <a href="#" @click.prevent="openTriageModal" class="icon-brand-box text-decoration-none interactive-agent-icon interactive-element" title="Contactar Asistencia">
                  <i class="material-icons text-white fs-5">support_agent</i>
                </a>
              </div>
              
              <div class="position-relative z-2 mt-2">
                <h3 class="fw-black text-white mb-3 fs-5">¿Necesitas Asesoría? </h3>
                <p class="text-white-50 small mb-4">
                  No tienes que enfrentar sola una situación relacionada con tu carrera profesional. AMFpro puede orientarte ante situaciones relacionadas con: 
                </p>
                
                <ul class="custom-hero-bullet-list mb-0">
                  <li>Contratos. </li>
                  <li>Pagos y adeudos. </li>
                  <li>Embarazo y maternidad. </li>
                  <li>Transferencias. </li>
                  <li>Lesiones y atención médica. </li>
                  <li>Condiciones laborales. </li>
                  <li>Situaciones de acoso, violencia o discriminación. </li>
                  <li>Cualquier otra situación relacionada con tu actividad como Jugadora profesional. </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================
         COMISIÓN FEMENIL
         ========================================== -->
    <section class="section-comision bg-white py-4 position-relative">
      <div class="container py-5">
        <div class="text-center mb-5 pb-4 reveal-on-scroll fade-up">
          <h2 class="fw-black text-gradient-amfpro std-title-section mb-3 display-5" style="letter-spacing: -1px;">COMISIÓN FEMENIL </h2>
          <p class="text-muted mx-auto lh-lg fs-5 mb-4" style="max-width: 800px;">
            Está integrada por <strong>Mónica Ocampo, Ana Gaby Paz y Dirce Delgado</strong>, Futbolistas en activo y retiradas que, junto con AMFpro, funcionan como un puente entre la Asociación y las Jugadoras. 
          </p>
          <div class="d-flex justify-content-center gap-3 flex-wrap mb-4">
            <span class="badge-soft-green"><i class="material-icons align-middle me-1 fs-6">track_changes</i> Detectar áreas de oportunidad. </span>
            <span class="badge-soft-green"><i class="material-icons align-middle me-1 fs-6">lightbulb</i> Proponer soluciones reales. </span>
            <span class="badge-soft-green"><i class="material-icons align-middle me-1 fs-6">record_voice_over</i> Representar la voz de las Futbolistas. </span>
          </div>
          <p class="text-muted mx-auto lh-lg" style="max-width: 750px; font-size: 1.05rem;">
            La Comisión Femenil permite que las necesidades y experiencias de las Jugadoras sean escuchadas y consideradas en el trabajo de la Asociación. 
          </p>
        </div>

        <div class="row g-5 justify-content-center mt-2">
          <div class="col-12 col-sm-6 col-lg-4 reveal-on-scroll fade-up" v-for="(miembro, index) in comision" :key="index" :style="`transition-delay: ${0.1 * index}s;`">
            <div class="card-comision text-center bg-transparent border transition-all h-100 position-relative mt-4">
              <div class="avatar-comision mx-auto shadow-lg position-relative" style="top: -20px; margin-bottom: 10px;">
                <img :src="miembro.img" :alt="miembro.nombre" class="rounded-circle object-fit-cover w-100 h-100 border-3-gradient" />
              </div>
              <div class="p-4 pt-2">
                <h4 class="fw-black text-dark mb-1">{{ miembro.nombre }} </h4>
                <p class="text-success-dark fw-bold text-uppercase tracking-wider small mb-0">{{ miembro.cargo }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         TUS DERECHOS (CON EFECTO 3D TILT & HOVER SPOTLIGHT PRO)
         ========================================== -->
    <section id="derechos" class="section-derechos bg-amfpro-dark py-4 position-relative z-1">
      <div class="position-absolute top-0 start-0 w-100 h-100 opacity-50 z-1" style="background: radial-gradient(circle at center, rgba(62,148,82,0.4) 0%, transparent 70%);"></div>
      <div class="success-bg-shape position-absolute top-0 start-0 w-100 h-100 opacity-25 z-1"></div>
      
      <div class="container py-5 position-relative z-2">
        <div class="text-center mb-5 reveal-on-scroll fade-up">
          <h2 class="fw-black text-white mb-3 std-title-section">
            TUS DERECHOS COMO <span class="text-gradient-amfpro">FUTBOLISTA</span> 
          </h2>
          <p class="text-white-50 fs-5 fw-bold">Como profesional, tienes derechos irrenunciables que deben ser respetados. </p>
        </div>

        <div class="row g-4" style="perspective: 1000px;">
          <div class="reveal-on-scroll fade-up" 
               :class="index === 0 ? 'col-12 col-lg-8' : 'col-12 col-md-6 col-lg-4'" 
               v-for="(derecho, index) in derechos" :key="index" 
               :style="`transition-delay: ${0.1 * index}s;`">
            
            <div class="card-derecho-premium h-100 p-4 p-xl-5 rounded-4 position-relative overflow-hidden group"
                 @mousemove="handleTilt($event)" 
                 @mouseleave="resetTilt($event)">
              <i class="material-icons position-absolute watermark-icon transition-all">{{ derecho.icono }}</i>

              <div class="position-relative z-2 h-100 d-flex flex-column pointer-events-none">
                <div class="d-flex align-items-center mb-4">
                  <div class="icon-brand-glass me-3 d-flex align-items-center justify-content-center flex-shrink-0">
                    <i class="material-icons fs-3" style="color:white;">{{ derecho.icono }}</i>
                  </div>
                  <h4 class="text-white fw-black mb-0 tracking-wider" :class="index === 0 ? 'fs-3' : 'fs-5'">
                    {{ derecho.titulo }} 
                  </h4>
                </div>
                
                <div class="mt-auto pt-2">
                  <ul class="custom-bullet-list mb-0">
                    <li v-for="(desc, idx) in derecho.descripcion" :key="idx">
                      {{ desc }} 
                    </li>
                  </ul>
                </div>
              </div>
              <!-- La capa de brillo animada ahora sigue al mouse desde CSS Variables -->
              <div class="card-glow-overlay"></div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         EMBARAZO Y MATERNIDAD (TIMELINE)
         ========================================== -->
    <section class="section-maternidad py-4 bg-white overflow-hidden position-relative">
      <div class="container py-5">
        <div class="text-center mb-5 pb-3 reveal-on-scroll fade-up">
          <h2 class="fw-black text-gradient-amfpro mb-4 std-title-section">EMBARAZO, MATERNIDAD Y LACTANCIA </h2>
          <p class="text-muted fs-5 fw-bold mx-auto" style="max-width: 800px;">
            El embarazo, la maternidad, la adopción y el permiso parental no pueden ser motivo para limitar los derechos contractuales de una futbolista. 
          </p>
        </div>

        <div class="timeline-horizontal-wrapper mb-5 reveal-on-scroll fade-up delay-1">
          <div class="timeline-track-container">
            <div class="timeline-track d-flex justify-content-between position-relative">
              <div class="track-line position-absolute start-0 w-100"></div>
              <div class="step-wrapper position-relative text-center z-2 interactive-element" v-for="(etapa, index) in maternidadTimeline" :key="index" @click="activeMaternidadStep = index">
                <button class="step-node shadow-sm transition-all interactive-element" :class="{ 'active': activeMaternidadStep === index }">
                  <i class="material-icons">{{ etapa.icono }}</i>
                </button>
                <span class="d-block mt-3 fw-bold text-uppercase transition-all" :class="activeMaternidadStep === index ? 'text-success-dark' : 'text-muted'" style="font-size: 0.65rem; max-width: 150px; margin: 0 auto; line-height: 1.4;">
                  {{ etapa.titulo }} 
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="row align-items-center bg-light rounded-5 p-4 p-lg-5 shadow-sm border border-light reveal-on-scroll fade-up delay-2">
          <div class="col-12 col-lg-5 mb-4 mb-lg-0">
            <div class="img-maternidad-wrapper position-relative rounded-4 overflow-hidden shadow-lg border border-white bg-dark">
              <transition name="fade" mode="out-in">
                <img :key="activeMaternidadStep" :src="maternidadTimeline[activeMaternidadStep].imagen" class="img-fluid w-100 object-fit-cover" style="aspect-ratio: 4/5; opacity: 0.9;" />
              </transition>
              <div class="badge-maternidad position-absolute top-0 end-0 m-3 shadow-sm d-flex align-items-center justify-content-center">
                <i class="material-icons text-white fs-3">{{ maternidadTimeline[activeMaternidadStep].icono }}</i>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-7 ps-lg-5">
            <transition name="fade" mode="out-in">
              <div :key="activeMaternidadStep">
                <div class="icon-brand-glass-2 mb-4 d-flex align-items-center justify-content-center">
                  <i class="material-icons text-success-neon fs-2">{{ maternidadTimeline[activeMaternidadStep].icono }}</i>
                </div>
                <h3 class="fw-black text-dark mb-4 text-uppercase tracking-wider" style="font-size: 1.3rem; line-height: 1.3;">
                  {{ maternidadTimeline[activeMaternidadStep].titulo }} 
                </h3>
                <p class="text-muted lh-lg mb-0 text-justify" style="font-size: 1.05rem;">
                  {{ maternidadTimeline[activeMaternidadStep].texto }} 
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         AMFPRO EN ACCIÓN (CON HOVER SPOTLIGHT)
         ========================================== -->
    <section class="section-acciones py-4 bg-light border-top border-bottom border-light">
      <div class="container py-5">
        <div class="text-center mb-5 pb-4 reveal-on-scroll fade-up">
          <h2 class="fw-black text-gradient-amfpro mb-3 std-title-section">FEMENIL EN ACCIÓN </h2>
          <p class="text-muted mx-auto fs-5" style="max-width: 650px;">
            Nuestro trabajo va más allá de la atención individual. Buscamos conocer de primera mano tus necesidades. 
          </p>
        </div>

        <div class="row g-4 justify-content-center reveal-on-scroll fade-up delay-1">
          <div class="col-12 col-md-4" v-for="(accion, index) in acciones" :key="index">
            <div class="card-accion bg-white p-5 rounded-4 shadow-sm h-100 transition-all border border-light text-center spotlight-wrapper" @mousemove="handleSpotlight" @mouseleave="resetSpotlight">
              <div class="position-relative z-2 pointer-events-none">
                <div class="icon-brand-box mx-auto mb-4" style="width: 70px; height: 70px;">
                  <i class="material-icons text-white fs-1">{{ accion.icono }}</i>
                </div>
                <h5 class="fw-bold text-dark mb-3">{{ accion.titulo }} </h5>
                <p class="text-muted small mb-0 lh-lg">{{ accion.descripcion }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         CONTACTO / CTA FINAL
         ========================================== -->
    <section id="contacto" class="section-cta py-4 bg-amfpro-dark position-relative overflow-hidden text-center">
      <div class="position-absolute top-0 start-0 w-100 h-100 opacity-50 z-1" style="background: radial-gradient(circle at center, rgba(62,148,82,0.4) 0%, transparent 70%);"></div>
      <div class="success-bg-shape position-absolute top-0 start-0 w-100 h-100 opacity-25 z-1"></div>
      
      <div class="container py-5 position-relative z-2">
        <div class="reveal-on-scroll fade-up">
          <h2 class="std-title-section fw-black text-white mb-4">ESTAMOS PARA ESCUCHARTE </h2>
          <p class="text-white-50 fw-bold fs-5 mb-5 mx-auto lh-lg" style="max-width: 700px;">
            Si eres Futbolista profesional y tienes una duda, necesitas orientación o quieres conocer más sobre tus derechos, puedes acercarte a AMFpro. 
          </p>
          
          <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4 mt-2">
            <button @click="openTriageModal" class="btn btn-premium-green rounded-pill px-5 py-3 shadow-lg fw-bold text-uppercase d-inline-flex align-items-center hover-scale border-0 interactive-element" style="letter-spacing: 1px;">
              <i class="material-icons me-2">chat</i> Contactar a Enlace Femenil
            </button>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juridico@amfpro.mx" target="_blank" rel="noopener noreferrer" class="btn btn-glass-outline rounded-pill px-5 py-3 shadow-lg fw-bold text-uppercase d-inline-flex align-items-center hover-scale interactive-element" style="letter-spacing: 1px;">
              <i class="material-icons me-2">email</i> Contactar a Jurídico
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         MODAL: TRIAGE INTELIGENTE (ASISTENTE WHATSAPP)
         ========================================== -->
    <transition name="fade-scale">
      <div v-if="showTriageModal" class="triage-modal-overlay d-flex align-items-center justify-content-center" @click.self="showTriageModal = false">
        <div class="triage-modal-content bg-white rounded-4 shadow-lg overflow-hidden position-relative" style="width: 90%; max-width: 500px;">
          <!-- Header -->
          <div class="bg-amfpro-dark p-4 text-center position-relative">
            <h5 class="text-white fw-black mb-0">Asistente Enlace Femenil</h5>
            <button class="btn-close btn-close-white position-absolute top-0 end-0 m-3 interactive-element" @click="showTriageModal = false"></button>
          </div>
          
          <!-- Body -->
          <div class="p-4 p-md-5">
            <transition name="fade" mode="out-in">
              <!-- Paso 1: Tema -->
              <div v-if="triageStep === 1" key="step1">
                <h6 class="fw-bold text-dark mb-4 text-center">¿Sobre qué tema necesitas orientación?</h6>
                <div class="d-grid gap-2">
                  <button v-for="tema in opcionesTema" :key="tema" @click="selectTema(tema)" class="btn btn-outline-success text-start rounded-pill py-2 px-4 fw-bold interactive-element">
                    {{ tema }}
                  </button>
                </div>
              </div>
              
              <!-- Paso 2: Datos y Envío -->
              <div v-else-if="triageStep === 2" key="step2">
                <h6 class="fw-bold text-dark mb-2 text-center">Casi listos...</h6>
                <p class="text-muted small text-center mb-4">Ingresa tu nombre para agilizar la atención.</p>
                
                <div class="mb-4">
                  <label class="form-label small fw-bold text-muted">Nombre Completo</label>
                  <input type="text" class="form-control premium-input rounded-pill py-2 px-4 interactive-element" v-model="triageData.nombre" placeholder="Ej. Mariana López">
                </div>
                
                <div class="d-flex justify-content-between mt-5">
                  <button @click="triageStep = 1" class="btn btn-light rounded-pill px-4 fw-bold interactive-element">Atrás</button>
                  <button @click="generarWhatsApp" :disabled="!triageData.nombre" class="btn btn-premium-green rounded-pill px-4 fw-bold d-inline-flex align-items-center interactive-element">
                    Ir a WhatsApp <i class="material-icons ms-2">send</i>
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'EnlaceFemenilComponent',
  data() {
    return {
      observer: null,
      // isLoading: true,   
      // isCursorHover: false,
      activeMaternidadStep: 0,
      
      showTriageModal: false,
      triageStep: 1,
      triageData: { tema: '', nombre: '' },
      opcionesTema: ['Contratos o Finiquitos', 'Pagos o Adeudos', 'Maternidad y Lactancia', 'Acoso o Violencia', 'Otra situación'],

      comision: [
        { nombre: "Mónica Ocampo", cargo: "EX FUTBOLISTA", img: "recursos/Femenil/P-1.webp" },
        { nombre: "Ana Gaby Paz", cargo: "CLUB TIJUANA", img: "recursos/Femenil/P-2.webp" },
        { nombre: "Dirce Delgado", cargo: "EX FUTBOLISTA", img: "recursos/Femenil/P-3.webp" }
      ],
      derechos: [
        { icono: "description", titulo: "Contrato", descripcion: ["Debe ser claro y estar firmado por ambas partes.", "Debes recibir una copia de tu contrato."] },
        { icono: "payments", titulo: "Pagos", descripcion: ["Debes recibir tu salario en tiempo y forma."] },
        { icono: "health_and_safety", titulo: "Atención Médica", descripcion: ["Seguro de gastos médicos mayores.", "Este seguro debe contemplar una evaluación médica general, incluida la revisión ginecológica.", "Atención adecuada en caso de lesión."] },
        { icono: "verified_user", titulo: "Seguridad Social", descripcion: ["Protección médica y respaldo por parte de tu club."] },
        { icono: "sync_alt", titulo: "Transferencias", descripcion: ["Derecho irrenunciable al 10% de la venta, los acuerdos en contrario serán inválidos."] }
      ],
      acciones: [
        { icono: "directions_run", titulo: "Visitas a Clubes", descripcion: "Mantenemos contacto directo con las Futbolistas para conocer sus condiciones y detectar áreas de oportunidad." },
        { icono: "lightbulb_outline", titulo: "Proyectos e Iniciativas", descripcion: "Desarrollamos propuestas orientadas a mejorar las condiciones laborales, deportivas y de desarrollo integral." },
        { icono: "record_voice_over", titulo: "Representación", descripcion: "Llevamos la voz de las Futbolistas a los espacios de diálogo y trabajo relacionados con el desarrollo del futbol profesional." }
      ],
      
      maternidadTimeline: [
        {
          icono: 'favorite_border',
          titulo: 'DURANTE EL EMBARAZO',
          imagen: 'recursos/Femenil/F-4.webp',
          texto: 'La validez de un contrato no puede estar condicionada a la realización de una prueba de embarazo, a su resultado, ni al hecho de que una Futbolista esté o quede embarazada durante la vigencia de su contrato. Tampoco puede ser motivo para terminar un contrato que la Futbolista se encuentre de baja por maternidad, permiso por adopción o permiso parental, o ejerciendo los derechos relacionados con estos permisos. La rescisión unilateral de un contrato por estas causas se considera una rescisión sin causa justificada y puede generar una indemnización a favor de la Futbolista, además de posibles sanciones deportivas para el club.'
        },
        {
          icono: 'sports_soccer',
          titulo: '¿PUEDES SEGUIR JUGANDO DURANTE EL EMBARAZO?',
          imagen: 'recursos/Femenil/F-2.webp',
          texto: 'Sí, siempre que sea médicamente seguro. Después de la confirmación del especialista que lleva el embarazo y de un profesional médico independiente, elegido de común acuerdo entre la futbolista y el club, de que es seguro continuar con la actividad deportiva, la Futbolista tiene derecho a seguir jugando y entrenando. El club deberá respetar esta decisión y elaborar un plan oficial para que pueda continuar participando de manera segura, priorizando su salud y la del bebé. Durante este periodo, la Jugadora tiene derecho a recibir su salario completo hasta el momento en que decida iniciar su baja por maternidad.'
        },
        {
          icono: 'health_and_safety',
          titulo: 'SI NO PUEDE CONTINUAR CON LA ACTIVIDAD DEPORTIVA',
          imagen: 'recursos/Femenil/F-3.webp',
          texto: 'Cuando un médico determine que no es seguro continuar con la actividad deportiva, o la Futbolista decida no ejercer su derecho a continuar jugando y entrenando, podrá prestar otros servicios para su club. El club deberá respetar esta decisión y colaborar con la Futbolista para elaborar un plan oficial que le permita desempeñar otras funciones. La Futbolista tendrá derecho a recibir su salario completo hasta el momento en que decida iniciar su baja por maternidad. Si, por motivos médicos relacionados con el embarazo, tampoco puede prestar otros servicios deportivos o laborales, tendrá derecho a una baja médica, previa presentación de un certificado médico válido expedido por su ginecólogo particular o médico especialista. En este caso, también tendrá derecho a recibir su salario completo hasta el momento en que decida iniciar su baja por maternidad.'
        },
        {
          icono: 'calendar_month',
          titulo: '¿QUIÉN DECIDE CUÁNDO INICIA LA BAJA?',
          imagen: 'recursos/Femenil/F-4.webp',
          texto: 'La Jugadora embarazada, el progenitor adoptivo o la Futbolista que ejerza sus derechos relacionados con el permiso parental tienen derecho a determinar de manera independiente la fecha de inicio de su baja por maternidad, permiso por adopción o permiso parental, considerando los periodos mínimos establecidos en la normativa. El club no puede presionar ni obligar a una Futbolista a iniciar estos permisos en un momento determinado.'
        },
        {
          icono: 'replay',
          titulo: 'REGRESO AL FÚTBOL',
          imagen: 'recursos/Femenil/F-5.webp',
          texto: 'Después de la baja por maternidad, permiso por adopción o permiso parental, la Futbolista tiene derecho a retomar su actividad futbolística durante la vigencia de su contrato. En el caso de la baja por maternidad, el regreso deberá contar con la confirmación del especialista que llevó el embarazo y de un profesional médico independiente, elegido de común acuerdo entre la Futbolista y el club, de que es seguro retomar la actividad. El club deberá respetar su decisión, facilitar su reincorporación a la actividad futbolística y ofrecerle apoyo médico continuo. Al retomar su actividad futbolística, la Jugadora tiene derecho a percibir su salario completo.'
        },
        {
          icono: 'child_care',
          titulo: 'LACTANCIA',
          imagen: 'recursos/Femenil/F-6.webp',
          texto: 'Mientras la Futbolista esté prestando servicios deportivos a su club, deberá poder amamantar a su bebé o realizar la extracción de leche materna. El club deberá proporcionar un lugar adecuado para ello. La reducción de la jornada laboral por estas razones se considera justificada y no puede implicar una reducción del salario.'
        },
        {
          icono: 'gavel',
          titulo: 'PROTECCIÓN DEL CONTRATO',
          imagen: 'recursos/Femenil/F-7.webp',
          texto: 'Si el contrato de una Futbolista vence durante su baja por maternidad, el club deberá velar por su salud e integridad de conformidad con lo establecido en el Reglamento de Transferencias y Contrataciones. Además, la normativa contempla mecanismos para que una Futbolista pueda ser sustituida temporalmente durante su baja por maternidad y pueda ser registrada fuera del periodo ordinario de inscripción después de finalizar la baja por maternidad, el permiso por adopción, el permiso parental o el periodo de recuperación posterior al embarazo, dependiendo de su situación contractual.'
        }
      ]
    };
  },
  methods: {
    // ----------------------------------------------------
    // CURSOR MAGNÉTICO LÓGICA (EFECTO PREMIUM)
    // ----------------------------------------------------
    // updateCursor(e) {
    //   if(this.$refs.cursorFollower) {
    //     this.$refs.cursorFollower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    //   }
    //   if(this.$refs.customCursor) {
    //     this.$refs.customCursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    //   }
    // },
    // attachCursorHoverEvents() {
    //   document.querySelectorAll('.interactive-element, a, button').forEach(el => {
    //     el.addEventListener('mouseenter', () => this.isCursorHover = true);
    //     el.addEventListener('mouseleave', () => this.isCursorHover = false);
    //   });
    // },

    // ----------------------------------------------------
    // HOVER SPOTLIGHT (GLASSMORPHISM AVANZADO)
    // ----------------------------------------------------
    handleSpotlight(e) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Inyectamos las coordenadas del mouse directo en el CSS de la tarjeta
      card.style.setProperty('--mouseX', `${x}px`);
      card.style.setProperty('--mouseY', `${y}px`);
    },
    resetSpotlight(e) {
      // Regresa el brillo al centro cuando el mouse sale
      const card = e.currentTarget;
      card.style.setProperty('--mouseX', `50%`);
      card.style.setProperty('--mouseY', `50%`);
    },

    // LÓGICA TILT 3D (Se integra con el Spotlight)
    handleTilt(e) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8; 
      const rotateY = ((x - centerX) / centerX) * 8;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Actualiza la luz del spotlight
      card.style.setProperty('--mouseX', `${x}px`);
      card.style.setProperty('--mouseY', `${y}px`);

      const watermark = card.querySelector('.watermark-icon');
      if(watermark) {
        watermark.style.transform = `translate(${rotateY * -2}px, ${rotateX * 2}px) scale(1.1) rotate(-10deg)`;
      }
    },
    resetTilt(e) {
      const card = e.currentTarget;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.setProperty('--mouseX', `50%`);
      card.style.setProperty('--mouseY', `50%`);
      const watermark = card.querySelector('.watermark-icon');
      if(watermark) watermark.style.transform = 'translate(0px, 0px) scale(1) rotate(-10deg)';
    },

    // LÓGICA DE SCROLL Y MODAL ORIGINAL[cite: 8]
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          element.classList.remove('highlight-active');
          void element.offsetWidth; 
          element.classList.add('highlight-active');
          setTimeout(() => { element.classList.remove('highlight-active'); }, 2000);
        }, 800);
      }
    },
    openTriageModal() {
      this.triageStep = 1;
      this.triageData = { tema: '', nombre: '' };
      this.showTriageModal = true;
    },
    selectTema(tema) {
      this.triageData.tema = tema;
      this.triageStep = 2;
    },
    generarWhatsApp() {
      const texto = `Hola, soy ${this.triageData.nombre}. Soy jugadora y me gustaría recibir orientación sobre: *${this.triageData.tema}*.`;
      const url = `https://wa.me/525554557348?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
      this.showTriageModal = false;
    }
  },
  mounted() {
    // Apagar Preloader después de 1.5 segundos
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1500);

    // Eventos del Cursor Premium
    // window.addEventListener('mousemove', this.updateCursor);
    // this.$nextTick(() => {
    //   this.attachCursorHoverEvents();
    // });

    // Observer para animaciones de Scroll (Ya implementado)[cite: 8]
    const options = { root: null, rootMargin: '0px', threshold: 0.15 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);

    this.$nextTick(() => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        this.observer.observe(el);
      });
    });
  },
  beforeDestroy() {
    if (this.observer) this.observer.disconnect();
    window.removeEventListener('mousemove', this.updateCursor);
  }
}
</script>

<style lang="scss" scoped>
/* ==============================================================
   VARIABLES Y BASE
   ============================================================== */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');

$success-neon: #50c026;
$success-dark: #3e9452;

html { scroll-behavior: smooth; }
.font-roboto { font-family: 'Roboto', sans-serif !important; }
.fw-black { font-weight: 900 !important; }
.tracking-wider { letter-spacing: 1.5px; }
.transition-all { transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }
.text-success-neon { color: $success-neon !important; }
.text-success-dark { color: $success-dark !important; }
.bg-amfpro-dark { background: linear-gradient(135deg, #3e9452 0%, #2b6b39 100%) !important; }
.success-bg-shape { background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px); }
.py-6 { padding-top: 6rem; padding-bottom: 6rem; }
.pointer-events-none { pointer-events: none; }
.cursor-pointer { cursor: pointer; }

/* COMPONENTES GLOBALES */
.text-gradient-amfpro { background:#50c026; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: transparent; display: inline-block; }
.icon-brand-box { background: #50c026; width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 5px 15px rgba(80, 192, 38, 0.3); }
.interactive-agent-icon {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 10px 25px rgba(80, 192, 38, 0.5) !important;
  }
  
  &:active {
    transform: scale(0.95);
  }
}

.std-title-section {
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.2;
    letter-spacing: -1px;
}
.btn-premium-green { background: #50c026; color: white !important; transition: all 0.3s ease; &:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 10px 25px rgba(80, 192, 38, 0.4) !important; } }
.btn-glass-outline { background: rgba(255, 255, 255, 0.05); color: white !important; border: 1px solid rgba(255, 255, 255, 0.2); transition: all 0.3s ease; &:hover { background: rgba(255, 255, 255, 0.15); border-color: white; transform: translateY(-3px); } }

/* NUEVA LISTA LIMPIA PARA APOYO INTEGRAL[cite: 8] */
.custom-hero-bullet-list {
  list-style: none; padding-left: 0;
  li {
    position: relative; padding-left: 15px; margin-bottom: 8px;
    font-size: 0.85rem; color: rgba(255, 255, 255, 0.7); font-weight: 600; line-height: 1.4;
    &::before { content: ''; position: absolute; left: 0; top: 6px; width: 5px; height: 5px; border-radius: 50%; background: $success-neon; }
  }
}

.badge-soft-green { background: rgba(80, 192, 38, 0.1); color: $success-dark; padding: 8px 20px; border-radius: 50px; font-size: 0.85rem; font-weight: 700; border: 1px solid rgba(80, 192, 38, 0.2); }
.border-light-glass { border-color: rgba(255,255,255,0.1) !important; }
.btn-floating-amfpro { position: fixed; bottom: 30px; right: 30px; z-index: 9999; background: #2b6b39; color: white !important; padding: 12px 24px; border-radius: 50px; border: 1px solid rgba(255,255,255,0.15); display: inline-flex; align-items: center; text-decoration: none; transition: all 0.3s ease; backdrop-filter: blur(10px); &:hover { background: $success-neon; border-color: $success-neon; transform: translateY(-5px); box-shadow: 0 15px 30px rgba(80, 192, 38, 0.4) !important; } @media (max-width: 575px) { padding: 15px; width: 55px; height: 55px; justify-content: center; bottom: 20px; right: 20px; span { display: none; } i { margin: 0 !important; font-size: 1.5rem; } } }

/* ==============================================================
   NUEVO: ANIMACIONES ULTRA PRO (CURSOR, PRELOADER Y REVEAL)
   ============================================================== */

/* PRELOADER CINEMATOGRÁFICO */
// .preloader-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: #0a0e12; z-index: 10000; }
// .preloader-line { width: 0; height: 2px; background: $success-neon; animation: loadLine 1.2s ease-in-out forwards; }
// @keyframes loadLine { 0% { width: 0; } 100% { width: 250px; } }
// .fade-preloader-leave-active { transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); }
// .fade-preloader-leave-to { opacity: 0; }

/* CURSOR MAGNÉTICO PERSONALIZADO */
// .custom-cursor {
//   position: fixed; top: 0; left: 0; width: 8px; height: 8px; margin: -4px 0 0 -4px;
//   background: $success-neon; border-radius: 50%; pointer-events: none; z-index: 10002;
//   transition: width 0.3s, height 0.3s, margin 0.3s, background 0.3s;
// }
// .custom-cursor.hovering {
//   width: 50px; height: 50px; margin: -25px 0 0 -25px;
//   background: rgba(80, 192, 38, 0.1); border: 1px solid $success-neon;
// }
// .custom-cursor-follower {
//   position: fixed; top: 0; left: 0; width: 32px; height: 32px; margin: -16px 0 0 -16px;
//   border: 1px solid rgba(80, 192, 38, 0.4); border-radius: 50%;
//   pointer-events: none; z-index: 10001; transition: transform 0.15s ease-out, opacity 0.3s;
// }
// .custom-cursor-follower.hovering { opacity: 0; }

/* TEXT REVEAL ESTILO APPLE */
.reveal-mask { overflow: hidden; display: block; padding-bottom: 0.1em; }
.reveal-text {
  display: block; transform: translateY(110%); opacity: 0;
  transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}
.is-visible .reveal-text, .is-visible.reveal-text { transform: translateY(0); opacity: 1; }

/* HOVER SPOTLIGHT (GLASSMORPHISM AVANZADO) */
.spotlight-wrapper {
  position: relative; overflow: hidden;
  &::before {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    /* Utiliza variables CSS calculadas en Javascript siguiendo el puntero */
    background: radial-gradient(circle 250px at var(--mouseX, 50%) var(--mouseY, 50%), rgba(255, 255, 255, 0.15), transparent 70%);
    opacity: 0; transition: opacity 0.3s; pointer-events: none; z-index: 1;
  }
  &:hover::before { opacity: 1; }
}

/* Animaciones Generales de Scroll[cite: 8] */
.reveal-on-scroll { opacity: 0; transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
.fade-up { transform: translateY(40px); }
.fade-left { transform: translateX(40px); }
.is-visible { opacity: 1 !important; transform: translate(0, 0) !important; }
.delay-1 { transition-delay: 0.2s; } .delay-2 { transition-delay: 0.4s; } .delay-3 { transition-delay: 0.6s; }
.floating-anim { animation: float 6s ease-in-out infinite; }
@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }

/* SECCIONES ESPECÍFICAS[cite: 8] */
.hero-amfpro { min-height: 90vh; background-color: #000; .hero-bg-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; z-index: 0; } .hero-bg-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%); z-index: 1; } .hero-title { font-size: clamp(3rem, 6vw, 3rem); letter-spacing: -2px; line-height: 1.1; } .glass-card-hero { background: rgba(0, 0, 0, 0.2); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4); } }
.card-comision { border-radius: 20px; &:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important; border-color: rgba(80, 192, 38, 0.3) !important; } .avatar-comision { width: 140px; height: 140px; .border-4-white { border: 4px solid white; } } }
.card-accion { &:hover { border-color: rgba(80, 192, 38, 0.3) !important; transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.06) !important; } }

/* TIMELINE HORIZONTAL */
.timeline-horizontal-wrapper { width: 100%; }
.timeline-track-container { overflow-x: auto; padding: 10px 0 20px 0; scrollbar-width: none; -webkit-overflow-scrolling: touch; &::-webkit-scrollbar { display: none; } }
.timeline-track { min-width: 1200px; margin: 0 auto; position: relative; }
.track-line { height: 3px; background: rgba(80, 192, 38, 0.2); position: absolute; top: 25px; z-index: 1; }
.step-wrapper { cursor: pointer; width: 160px; display: flex; flex-direction: column; align-items: center; &:hover .step-node { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(80, 192, 38, 0.2) !important; } }
.step-node { width: 50px; height: 50px; border-radius: 50%; background: white; border: 2px solid #e2e8f0; color: #94a3b8; display: inline-flex; align-items: center; justify-content: center; outline: none; position: relative; z-index: 2; &.active { background: linear-gradient(135deg, $success-neon 0%, $success-dark 100%); border-color: transparent; color: white; transform: scale(1.15); box-shadow: 0 10px 25px rgba(80, 192, 38, 0.4) !important; } }
.img-maternidad-wrapper .badge-maternidad { width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, $success-neon 0%, $success-dark 100%); }

/* BENTO BOX CON TILT Y GLOW ANIMADO (DERECHOS) */
.card-derecho-premium {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transform-style: preserve-3d; transition: box-shadow 0.3s ease, border-color 0.3s ease; will-change: transform;
  &:hover {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
    border-color: rgba(255, 255, 255, 0.3); box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  }
}
.watermark-icon { right: -20px; bottom: -20px; font-size: 10rem; color: rgba(255, 255, 255, 0.05); pointer-events: none; z-index: 0; transform: translateZ(-20px) rotate(-10deg); } 
.icon-brand-glass { width: 55px; height: 55px; border-radius: 16px; background: #50c026; border: 1px solid rgba(255, 255, 255, 0.25); box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); transform: translateZ(20px); } 
.icon-brand-glass-2 { width: 55px; height: 55px; border-radius: 16px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.25); box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); transform: translateZ(20px); } 
.custom-bullet-list { list-style: none; padding-left: 0; li { position: relative; padding-left: 22px; font-size: 0.95rem; color: rgba(255, 255, 255, 0.85); transform: translateZ(10px); &::before { content: ''; position: absolute; left: 0; top: 10px; width: 7px; height: 7px; border-radius: 50%; background: $success-neon; box-shadow: 0 0 8px $success-neon; } } }
.card-glow-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle 300px at var(--mouseX, 50%) var(--mouseY, 50%), rgba(255, 255, 255, 0.1), transparent 70%); opacity: 0; transition: opacity 0.4s ease; pointer-events: none; }
.card-derecho-premium:hover .card-glow-overlay { opacity: 1; }

/* MODAL TRIAGE */
.triage-modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.8); backdrop-filter: blur(5px); z-index: 10000; }
.premium-input { border: 2px solid #e2e8f0; background: #f8fafc; transition: all 0.3s; &:focus { border-color: $success-neon; background: white; box-shadow: none; outline: none; } }

/* ANIMACIÓN GLOW SCROLL */
@keyframes flashHighlightPro { 0% { opacity: 0; background-color: rgba(80, 192, 38, 0); } 20% { opacity: 1; background-color: rgba(80, 192, 38, 0.4); } 100% { opacity: 0; background-color: rgba(80, 192, 38, 0); } }
.highlight-active::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; animation: flashHighlightPro 1.5s ease-out forwards; }
.border-3-gradient {
  border: 3px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, $success-neon 0%, $success-dark 100%) border-box;
}

.avatar-comision {
  width: 140px; /* Un poco más grande para darle presencia */
  height: 140px;
  border-radius: 50%;
  padding: 4px; /* Espacio para que respire la imagen dentro del borde gradiente */
  background: white; /* Mantiene limpio el corte interior */
}

/* Modificamos la tarjeta para quitar los bordes y sombras feas */
.card-comision {
  &:hover {
    transform: translateY(-8px);
    .avatar-comision {
      transform: scale(1.05);
      transition: transform 0.4s ease;
    }
  }
}
</style>