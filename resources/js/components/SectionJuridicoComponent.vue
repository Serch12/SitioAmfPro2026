<template>
    <div class="font-roboto">
      
      <!-- 1. SECCIÓN JURÍDICO (INCLUYE TABS Y BANNER DE CONTACTO) -->
      <section class="py-6 bg-light text-center section-derechos relative-container" id="juridico">
        
         <div class="split-icon-container-2">
            <img src="recursos/mazo-icon.png" alt="Contacto Icon">
        </div>

        <div class="container px-md-5 mt-4">
          
          <div class="row justify-content-center mb-5 reveal-up">
            <div class="col-lg-8 text-center">
              <h6 class="text-uppercase tracking-widest text-muted fw-bold mb-3 std-subtitle">Asesoría y</h6>
              <h2 class="display-3 fw-black amf-green-text mb-4 text-uppercase std-title-section">Seguimiento Jurídico</h2>
              <div class="accent-line mx-auto mb-4"></div>
              <p class="text-secondary fs-5 px-md-5 lh-lg std-text mb-0">
                La AMFpro, a través de su coordinación jurídica brinda asesoría y seguimiento de las acciones legales interpuestas por sus afiliados y afiliadas. Explora nuestras áreas de apoyo:
              </p>
            </div>
          </div>

          <!-- ==========================================
               TABS CONGRUENTES (ESTILO PÍLDORA BOOTSTRAP)
               ========================================== -->
          <div class="row justify-content-center mb-5 reveal-up delay-1">
            <div class="col-12 col-xl-10">
              <div class="bg-white p-2 rounded-4 rounded-lg-pill shadow-sm border border-light d-flex flex-column flex-lg-row align-items-center gap-2">
                
                <button 
                  v-for="(category, index) in categories" 
                  :key="'tab-' + index"
                  @click="activeCategoryIndex = index"
                  class="btn border-0 rounded-pill flex-fill py-3 px-4 d-flex align-items-center justify-content-center transition-all w-100 w-lg-auto"
                  :class="activeCategoryIndex === index ? 'amf-tab-active shadow-sm' : 'amf-tab-inactive'"
                >
                  <i class="material-icons me-2 fs-5">{{ category.icon }}</i>
                  <span class="fw-bold" style="font-size: 0.95rem;">{{ category.title }}</span>
                </button>

              </div>
            </div>
          </div>

          <!-- ==========================================
               CONTENIDO DE LOS TABS 
               ========================================== -->
          <div class="row justify-content-center mb-6 reveal-up delay-2">
            <div class="col-12 tab-content-container">
              <transition name="fade-slide" mode="out-in">
                <div :key="activeCategoryIndex" class="w-100">
                  <div class="row g-4 text-start align-items-start">
                    
                    <div v-for="point in categories[activeCategoryIndex].points" :key="point.id" class="col-12 col-md-6 col-lg-4">
                      <div class="premium-legal-card bg-white p-4 rounded-4 shadow-sm border border-light w-100 position-relative overflow-hidden"
                           @mouseenter="point.show = true" @mouseleave="point.show = false">
                        <div class="card-top-line"></div>
                        <div class="d-flex justify-content-between align-items-start mb-2">
                          <h6 class="fw-bold text-dark mb-0 transition-color pe-3 mt-2" :class="{'amf-green-text': point.show}" style="line-height: 1.4;">
                            {{ point.text }}
                          </h6>
                          <span class="legal-number amf-green-text fw-black transition-number flex-shrink-0" :class="point.show ? 'opacity-100' : 'opacity-25'" style="font-size: 3rem; line-height: 1;">
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
              </transition>
            </div>
          </div>

          <!-- ==========================================
               BANNER INFORMATIVO DE CONTACTO
               ========================================== -->
          <div class="row justify-content-center reveal-up delay-3">
            <div class="col-12">
              <div class="premium-info-banner bg-white rounded-4 shadow-sm border border-light p-4 d-flex flex-column flex-xl-row align-items-center justify-content-between gap-4">
                
                <div class="d-flex align-items-start align-items-md-center flex-column flex-md-row gap-3 text-start text-md-start" style="max-width: 500px;">
                  <div class="icon-box-soft flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle" style="width: 60px; height: 60px; background: rgba(80, 192, 38, 0.1);">
                      <i class="material-icons amf-green-text fs-2">support_agent</i>
                  </div>
                  <div>
                    <h6 class="fw-bold text-dark mb-1">¿Necesitas asistencia personalizada?</h6>
                    <p class="text-secondary small mb-0 lh-sm">Envía tu nombre completo, NUI, tu duda y un teléfono para comunicarnos contigo. O contáctanos directamente:</p>
                  </div>
                </div>
                
                <div class="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-4 align-items-center text-start">
                  <div class="info-item">
                    <span class="d-block text-muted x-small fw-bold tracking-wider text-uppercase mb-1">Correo</span>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juridico@amfpro.mx" target="_blank" class="text-dark fw-bold text-decoration-none hover-green d-block small">juridico@amfpro.mx</a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@amfpro.mx" target="_blank" class="text-dark fw-bold text-decoration-none hover-green d-block small mt-1">contacto@amfpro.mx</a>
                  </div>
                  <div class="border-start ps-3 ps-md-4 d-none d-sm-block h-100" style="min-height: 40px;"></div>
                  <div class="info-item">
                    <span class="d-block text-muted x-small fw-bold tracking-wider text-uppercase mb-1">Llámanos</span>
                    <a href="tel:7286906040" class="text-dark fw-bold text-decoration-none hover-green d-block fs-6">(728) 690 6040</a>
                    <span class="text-secondary small fw-normal">Ext. 105 y 107</span>
                  </div>
                  <div class="border-start ps-3 ps-md-4 d-none d-sm-block h-100" style="min-height: 40px;"></div>
                  <div class="info-item">
                    <span class="d-block text-muted x-small fw-bold tracking-wider text-uppercase mb-1">Atención</span>
                    <span class="text-dark fw-bold d-block small">L-J: 10:00 a 17:00</span>
                    <span class="text-dark fw-bold d-block small mt-1">V: 10:00 a 15:00</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- 2. SECCIÓN DESCARGAS (CON FONDO VERDE INSTITUCIONAL Y DIAGONALES) -->
      <section class="section-descargas py-6 text-white position-relative" style="background: linear-gradient(135deg, #3e9452 0%, #2b6b39 100%);" id="descargas">
        <div class="position-absolute top-0 start-0 w-100 h-100 opacity-50 z-1" style="background: radial-gradient(circle at center, rgba(62,148,82,0.4) 0%, transparent 70%);"></div>
        <!-- Fondo decorativo diagonal -->
        <div class="success-bg-shape position-absolute top-0 start-0 w-100 h-100 opacity-25 z-1"></div>

        <div class="container position-relative z-2">
          
          <div class="row justify-content-center mb-5 reveal-up">
            <div class="col-12 text-center">
              <h6 class="text-uppercase tracking-widest text-white-50 fw-bold mb-3 std-subtitle">Descargas e Información</h6>
              <h3 class="display-6 fw-black text-white mb-4 std-title-section">Normativas</h3>
            </div>
          </div>

          <div class="row g-4 justify-content-center reveal-up delay-2">
            <div v-for="doc in docsData" :key="doc.title" class="col-12 col-sm-6 col-lg-4 text-start">
              
              <!-- Tarjeta Estándar Glassmorphism (Descarga PDF) -->
              <a v-if="!doc.isModal" :href="doc.url_link" target="_blank" class="text-decoration-none">
                <div class="glass-doc-card p-4 rounded-4 shadow-sm h-100 d-flex flex-column position-relative overflow-hidden">
                  <div class="icon-container mb-4 position-relative z-2">
                    <div class="icon-box rounded-circle d-flex align-items-center justify-content-center shadow-sm" style="width: 55px; height: 55px; background-color: rgba(255, 255, 255, 0.1);">
                       <img :src="doc.icon_grey" class="img-fluid main-icon" style="height: 40px; object-fit: contain; filter: brightness(0) invert(1);">
                    </div>
                  </div>
                  <div class="content-container mt-auto position-relative z-2">
                    <h6 class="fw-bold text-white mb-4 lh-base doc-title" style="min-height: 45px; font-size: 0.95rem;">
                      {{ doc.title }}
                    </h6>
                    <div class="download-link d-inline-flex align-items-center fw-bold text-uppercase tracking-wider small text-white">
                      <span class="link-text opacity-75">Descargar PDF</span>
                      <i class="material-icons ms-2 transition-icon fs-5 opacity-75">arrow_forward</i>
                    </div>
                  </div>
                </div>
              </a>

              <!-- Tarjeta Modal Glassmorphism (Fútbol Femenil) -->
              <!-- <div v-else @click="openModalFemenil" class="cursor-pointer h-100">
                <div class="glass-doc-card p-4 rounded-4 shadow-sm h-100 d-flex flex-column position-relative overflow-hidden">
                  <div class="icon-container mb-4 position-relative z-2">
                    <div class="icon-box rounded-circle d-flex align-items-center justify-content-center shadow-sm" style="width: 55px; height: 55px; background-color: rgba(255, 255, 255, 0.1);">
                       <i class="material-icons text-white fs-3 main-icon">sports_score</i>
                    </div>
                  </div>
                  <div class="content-container mt-auto position-relative z-2">
                    <h6 class="fw-bold text-white mb-4 lh-base doc-title" style="min-height: 45px; font-size: 0.95rem;">
                      {{ doc.title }}
                    </h6>
                    <div class="download-link d-inline-flex align-items-center fw-bold text-uppercase tracking-wider small text-white">
                      <span class="link-text opacity-75">Ver Información</span>
                      <i class="material-icons ms-2 transition-icon fs-5 opacity-75">visibility</i>
                    </div>
                  </div>
                </div>
              </div> -->

            </div>
          </div>

        </div>
      </section>

      <!-- 3. SECCIÓN CONVENIOS EDUCATIVOS -->
      <section id="convenios" class="bg-offwhite py-2 border-top border-light">
        <div class="container py-5">
          <div class="row justify-content-center mb-6 reveal-up">
            <div class="col-lg-8 text-center">
              <h6 class="std-subtitle text-muted mb-3">PREPÁRATE FUERA DEL CAMPO</h6>
              <h2 class="std-title-section fw-black amf-green-text mb-4 text-uppercase">Convenios Educativos</h2>
              <p class="std-text text-secondary mb-5 px-md-5">Ofrecemos opciones para finalizar tu preparatoria, estudios universitarios, maestrías o cursos. Pide informes directamente a nuestra área encargada.</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=desarrolloeducativo@amfpro.mx" target="_blank" class="btn btn-premium-green btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm d-inline-flex align-items-center">
                <i class="material-icons me-2">email</i> desarrolloeducativo@amfpro.mx
              </a>
            </div>
          </div>

          <div class="stacking-cards-container">
            <div class="stack-card reveal-up" id="card-1">
              <div class="row g-0 h-100 bg-white rounded-4 shadow-sm overflow-hidden border border-light premium-clean-card">
                <div class="col-lg-8 p-4 p-md-5 d-flex flex-column justify-content-center">
                  <img src="recursos/logo-cruyff.png" alt="Cruyff" class="mb-4 convenio-logo" style="max-height: 60px; width: auto; align-self: flex-start;">
                  <h3 class="std-title-card fw-black text-dark mb-4">Posgrados y cursos en Administración y Negocios del Futbol ONLINE</h3>
                  <p class="std-text text-secondary text-justify mb-3">Sus programas de formación han sido diseñados por profesionales de la industria del deporte, enriquecidos por las experiencias personales de profesores y alumnos.</p>
                  <p class="std-text text-secondary text-justify mb-4 fw-bold text-dark">Modelo de aprendizaje basado en:</p>
                  <div class="row g-3">
                      <div class="col-sm-6">
                          <ul class="premium-list std-text-small m-0 p-0 text-secondary text-justify">
                              <li>100% orientado al deporte</li>
                              <li>Centrado en el alumno</li>
                              <li>‘Learning by doing’ (Aprender haciendo)</li>
                          </ul>
                      </div>
                      <div class="col-sm-6">
                          <ul class="premium-list std-text-small m-0 p-0 text-secondary text-justify">
                              <li>Motivacional y participativo</li>
                              <li>Adaptado a la carga de trabajo y disponibilidad</li>
                          </ul>
                      </div>
                  </div>
                </div>
                <div class="col-lg-4 text-white p-4 p-md-5 d-flex flex-column justify-content-center align-items-center text-center" style="background-color: #232a5c;">
                  <h6 class="std-subtitle fw-bold opacity-75 mb-4 text-white">BECAS 2026/2027</h6>
                  <div class="w-100 mb-4">
                    <h2 class="std-title-hero fw-black mb-0 text-white">15%</h2>
                    <span class="std-text-small fw-bold opacity-75 d-block mt-2 text-white">Pago en parcialidades.</span>
                  </div>
                  <div class="w-100 border-top border-light border-opacity-25 pt-4">
                    <h2 class="std-title-hero fw-black mb-0 text-white">20%</h2>
                    <span class="std-text-small fw-bold opacity-75 d-block mt-2 text-white">Pago de contado.</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="stack-card reveal-up" id="card-3">
              <div class="row g-0 h-100 bg-white rounded-4 shadow-sm overflow-hidden border border-light premium-clean-card">
                <div class="col-lg-8 p-4 p-md-5 d-flex flex-column justify-content-center">
                  <img src="recursos/logo-uvn.svg" alt="UVN" class="mb-4 convenio-logo" style="max-height: 50px; width: auto; align-self: flex-start;">
                  <h3 class="std-title-card fw-black text-dark mb-4">Universidad 100% en línea para gente que trabaja.</h3>
                  <p class="std-text text-secondary text-justify mb-4">Estudia solo 20 minutos al día, sin tareas. Prepa en 2 o 4 meses. Todo desde tu celular con acceso a Internet.</p>
                  <div class="row g-4">
                      <div class="col-sm-6">
                          <h6 class="std-text fw-bold mb-3 border-bottom pb-2 text-dark">Carreras Profesionales (3 años)</h6>
                          <ul class="premium-list std-text-small m-0 p-0 text-secondary text-justify">
                              <li>Administración de Empresas</li>
                              <li>Mercadotecnia & Finanzas</li>
                              <li>Ingeniería Industrial y de Sistemas</li>
                          </ul>
                      </div>
                      <div class="col-sm-6">
                          <h6 class="std-text fw-bold mb-3 border-bottom pb-2 text-dark">Maestrías (18 meses)</h6>
                          <ul class="premium-list std-text-small m-0 p-0 text-secondary text-justify">
                              <li>Administración y Alta Dirección</li>
                              <li>Dirección Comercial y Mercadotecnia</li>
                          </ul>
                      </div>
                  </div>
                </div>
                <div class="col-lg-4 text-white p-4 p-md-5 d-flex flex-column justify-content-center" style="background-color: #A8192E;">
                  <h6 class="std-subtitle text-white fw-bold opacity-75 mb-3 text-center">PROGRAMA DE BECAS</h6>
                  <p class="std-text-small text-center mb-4 px-2 text-white" style="opacity: 0.9;">
                    Todos los asociados tienen derecho a becas especiales.
                  </p>
                  <div class="d-flex justify-content-between align-items-center border-bottom border-light border-opacity-25 pb-3 mb-3">
                      <span class="std-subtitle text-white fw-bold mb-0">Preparatoria</span>
                      <h3 class="std-title-card fw-black mb-0 text-white">30% <small class="fw-normal opacity-75" style="font-size: 0.8rem;">(4 meses)</small></h3>
                  </div>
                  <div class="d-flex justify-content-between align-items-center border-bottom border-light border-opacity-25 pb-3 mb-3">
                      <span class="std-subtitle text-white fw-bold mb-0">Licenciatura</span>
                      <h3 class="std-title-card fw-black mb-0 text-white">40% <small class="fw-normal opacity-75" style="font-size: 0.8rem;">(3 años)</small></h3>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <span class="std-subtitle text-white fw-bold mb-0">Maestría</span>
                      <h3 class="std-title-card fw-black mb-0 text-white">50% <small class="fw-normal opacity-75" style="font-size: 0.8rem;">(18 meses)</small></h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="stack-card reveal-up" id="card-2">
              <div class="row g-0 h-100 bg-white rounded-4 shadow-sm overflow-hidden border border-light premium-clean-card">
                <div class="col-lg-8 p-4 p-md-5 d-flex flex-column justify-content-center">
                  <img src="recursos/logo-conamat.png" alt="CONAMAT" class="mb-4 convenio-logo" style="max-height: 60px; width: auto; align-self: flex-start;">
                   <h3 class="std-title-card fw-black text-dark mb-4">Preparatoria en 4 meses con el “Curso de preparación para certificación en un sólo examen”</h3>
                  <p class="std-text text-secondary text-justify mb-0">Inscríbete al curso 100% en línea y obtén tu certificado con validez oficial de la SEP a través de una plataforma disponible las 24 horas al día.</p>
                </div>
                <div class="col-lg-4 text-white p-4 p-md-5 d-flex flex-column justify-content-center align-items-center text-center position-relative" style="background-color: #003B73;">
                  <div class="position-relative z-2">
                    <h6 class="std-subtitle text-white fw-bold opacity-75 mb-4">BECA ÚNICA</h6>
                    <h2 class="std-title-hero fw-black mb-3 text-white">30%</h2>
                    <div class="bg-white px-3 py-3 rounded-3 shadow-sm d-inline-block mt-2">
                      <span class="std-text-small fw-bold d-block" style="color: #003B73;">Aplica en cualquier modalidad de pago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MODAL MEGA PRO: FÚTBOL FEMENIL -->
      <!-- <div v-if="isModalFemenilOpen" class="modal-overlay-femenil" @click.self="closeModalFemenil">
        <div class="modal-content-femenil shadow-2xl rounded-4 overflow-hidden position-relative" role="dialog">
          
          <div class="modal-femenil-header px-4 py-4 d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="icon-header-femenil me-3 shadow-sm rounded-circle d-flex align-items-center justify-content-center">
                <i class="material-icons text-white">diversity_1</i>
              </div>
              <div>
                <h6 class="text-white-50 fw-bold tracking-widest text-uppercase small mb-1">Estatutos y Derechos</h6>
                <h3 class="fw-black text-white mb-0">FÚTBOL FEMENIL</h3>
              </div>
            </div>
            <button class="btn-close-femenil shadow-sm" @click="closeModalFemenil">
              <i class="material-icons">close</i>
            </button>
          </div>

          <div class="modal-femenil-body p-4 p-md-5 bg-light overflow-auto" style="max-height: 75vh;">
            <div class="row g-4">
              <div class="col-12 col-lg-5">
                <div class="bg-white p-4 rounded-4 shadow-sm border border-light h-100">
                  <div class="d-flex align-items-center mb-3">
                    <i class="material-icons fs-4 me-2 amf-green-text">gavel</i>
                    <h5 class="fw-bold text-dark mb-0">La Comisión Femenil</h5>
                  </div>
                  <p class="std-text-small text-secondary text-justify mb-4">
                    La <b style="color:#50C026;">Comisión Femenil</b> tiene como objetivo obtener información sobre posibles problemáticas que presentan las Futbolistas, con el fin de emitir recomendaciones tendientes a <b style="color:#50C026;">mejorar la calidad y las condiciones laborales</b>, asimismo tiene la atribución de participar en la <b style="color:#50C026;">Asamblea General</b>.
                  </p>
                  
                  <h6 class="fw-bold text-dark mb-3 border-bottom pb-2">La Comisión está conformada por:</h6>
                  
                  <div class="d-flex flex-column gap-4">
                    <div v-for="miembro in comisionMembers" :key="miembro.nombre" class="d-flex align-items-center p-3 rounded-3 hover-bg-light transition-all border border-light shadow-sm">
                      <div class="member-avatar rounded-circle d-flex align-items-center justify-content-center me-4 text-white fw-bold shadow-sm overflow-hidden position-relative flex-shrink-0" style="width: 70px; height: 70px; background: linear-gradient(135deg, #50c026 0%, #3E9452 100%); font-size: 1.5rem;">
                        <img v-if="miembro.img && !miembro.imgError" :src="miembro.img" @error="miembro.imgError = true" :alt="miembro.nombre" style="width: 100%; height: 100%; object-fit: cover;">
                        <span v-else>{{ miembro.nombre.charAt(0) }}</span>
                      </div>
                      <div>
                        <h6 class="fw-bold text-dark mb-1" style="font-size: 1.1rem;">{{ miembro.nombre }}</h6>
                        <span class="d-block text-secondary small mb-1" style="font-size: 0.85rem;">{{ miembro.club }}</span>
                        <span class="badge bg-light text-dark border" style="font-size: 0.75rem;">{{ miembro.puesto }}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-12 col-lg-7">
                <div class="bg-white p-4 rounded-4 shadow-sm border border-light mb-4 position-relative overflow-hidden">
                  <div class="card-accent-femenil"></div>
                  <div class="d-flex align-items-center mb-3">
                    <div class="icon-wrapper-soft me-3"><i class="material-icons">pregnant_woman</i></div>
                    <h5 class="fw-bold text-dark mb-0">Maternidad y Lactancia</h5>
                  </div>
                  <ul class="custom-femenil-list text-secondary std-text-small text-justify mb-0">
                    <li>Como Futbolista Profesional, tienes derecho a solicitar tu baja por maternidad, ejercer un permiso por adopción o permiso parental.</li>
                    <li>En estos supuestos, debes recibir el cien por ciento del salario que estipule tu contrato, durante el periodo de vigencia.</li>
                    <li>La continuidad o renovación de tu contrato <strong>no estará condicionada</strong> a que te realices una prueba de embarazo.</li>
                    <li>En el caso de la lactancia, el club garantizará un lugar adecuado donde puedas amamantar a tu bebé o realizar la extracción de leche materna.</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-4 shadow-sm border border-light position-relative overflow-hidden">
                  <div class="card-accent-femenil"></div>
                  <div class="d-flex align-items-center mb-3">
                    <div class="icon-wrapper-soft me-3"><i class="material-icons">water_drop</i></div>
                    <h5 class="fw-bold text-dark mb-0">Salud Menstrual</h5>
                  </div>
                  <p class="std-text-small text-secondary fw-bold mb-3 text-justify">
                    Los Clubes deben respetar en todo momento las necesidades de las Jugadoras en relación con su ciclo y salud menstrual.
                  </p>
                  <ul class="custom-femenil-list text-secondary std-text-small text-justify mb-0">
                    <li>Una Futbolista tiene derecho a ausentarse de entrenamientos o partidos por motivos de salud menstrual, previa presentación de un certificado médico válido, expedido por un doctor especialista.</li>
                    <li>La Jugadora tendrá derecho a recibir su <strong>salario íntegro</strong> cuando disfrute de estos derechos.</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div> -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            observer: null,
            isModalFemenilOpen: false,
            activeCategoryIndex: 0,
            comisionMembers: [
              { nombre: 'Dirce Delgado', club: 'Atlas-2025', puesto: 'Presidente', img: 'recursos/dirce.png', imgError: false },
              { nombre: 'Ana Gabriela Paz', club: 'Rayados de Monterrey-2025', puesto: 'Secretario', img: 'recursos/ana.png', imgError: false },
              { nombre: 'Mónica Ocampo', club: 'Pachuca-2025', puesto: 'Vocal', img: 'recursos/monica.png', imgError: false },
              { nombre: 'Daniela Gómez', club: 'Ex-Futbolista', puesto: 'Enlace del Fútbol Femenil', img: 'recursos/daniela.png', imgError: false }
            ],
            categories: [
                {
                title: 'Carácter económico', icon: 'account_balance_wallet',
                points: [ { id: 1, text: 'Adeudo de salario', detalle: 'Si tu club te debe salario ya sea durante o al término del torneo (individual o grupal).', show: false }, { id: 2, text: 'Despido injustificado', detalle: 'Si tu club te informa que no entras en planes y tienes contrato vigente.', show: false }, { id: 3, text: 'Falta de pago de bonos o premios', detalle: 'Si en tu contrato en el algún documento se reconoció el pago de bonos o premios que el club no te ha realizado.', show: false }, { id: 4, text: 'Incumplimiento de convenio de pago', detalle: 'Si firmaste con tu club un acuerdo de pagos registrado ante la FMF y no lo ha cumplido.', show: false }, { id: 5, text: 'Pago de porcentaje por transferencia', detalle: 'Derivado de los acuerdos entre la FMF y la AMFpro, cuando te transfieren de forma definitiva a un club, tienes derecho a recibir un 10% del total de la transferencia, al ser un derecho irrenunciable y no negociable.', show: false }, { id: 6, text: 'Cobro ilegal de cuotas por jugar', detalle: 'Si el club pretende cobrarte por el registro, cuotas mensuales, viajes, uniformes, alimentos y/o documentos por jugar los partidos.', show: false } ]
                },
                {
                title: 'Gestión de documentos', icon: 'folder_shared',
                points: [ { id: 1, text: 'Información para registros', detalle: 'Infórmate de todo lo que necesitas para no tener problemas al momento de firmar tu contrato y registrarte.', show: false }, { id: 2, text: 'Solicitud de historial deportivo / estatus', detalle: 'Documentos que expide la FMF y que pueden servirte como currículum deportivo.', show: false }, { id: 3, text: 'Retención de documentos y expedientes', detalle: 'Si al terminar tu contrato el club no te entrega tu finiquito o te pide dinero por darte tus documentos.', show: false }, { id: 4, text: 'Asesoría sobre los derechos por embarazo y maternidad', detalle: 'Si eres Jugadora de la Liga MX Femenil y quieres recibir información sobre estos derechos contemplados en el Reglamento de Transferencias y Contrataciones de la FMF.', show: false }, { id: 5, text: 'Pase internacional (CTI)', detalle: 'Para poder jugar en otro país es indispensable contar con el finiquito y el TPO (que ningún tercero ajeno al fútbol tiene derechos económicos sobre ti), del último club en que jugaste; esto, para que el nuevo club pueda pedir tu pase internacional a través del TMS (Sistema de Transferencias Internacional) de la FIFA.', show: false }, { id: 6, text: 'Solicitud de copia de contrato', detalle: 'Pídele a tu club y si no te la entregan, nosotros podemos apoyarte a solicitarla a la FMF.', show: false } ]
                },
                {
                title: 'Incidencias de integridad', icon: 'health_and_safety',
                points: [ { id: 1, text: 'Rescisión anticipada de contrato', detalle: 'En caso de incumplimiento o adeudo de las obligaciones señaladas en el contrato.', show: false }, { id: 2, text: 'Falta de atención médica / lesiones', detalle: 'Si sufriste una lesión en partido o entrenamiento, tienes derecho a que tu club te de la atención médica necesaria hasta tu total recuperación.', show: false }, { id: 3, text: 'Separación de los entrenamientos', detalle: 'Si te enviaron a entrenar solo o con una categoría inferior dentro del club, como medida de presión o castigo.', show: false } ]
                }
            ],
            docsData: [
                { title: 'Reglamento de la Comisión de Conciliación y Resolución de Controversias', icon_grey: 'recursos/documento-verde-2.png', url_link: 'https://fmf.mx/docs/reglamentos/441.pdf', isModal: false },
                { title: 'Reglamento de Transferencias y Contrataciones', icon_grey: 'recursos/dobledocumento-verde.png', url_link: 'https://fmf.mx/docs/reglamentos/521.pdf', isModal: false },
                { title: 'Código de Ética', icon_grey: 'recursos/ball-verde.png', url_link: 'https://fmf.mx/docs/reglamentos/475.pdf', isModal: false },
                { title: 'Derechos y Regulaciones del Fútbol Femenil', isModal: true }
            ]
        }
    },
    mounted() {
      const options = { root: null, rootMargin: '0px', threshold: 0.15 };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); } else { entry.target.classList.remove('is-visible'); } });
      }, options);

      this.$nextTick(() => { document.querySelectorAll('.reveal-up').forEach(el => { this.observer.observe(el); }); });
    },
    beforeDestroy() { if (this.observer) this.observer.disconnect(); },
    methods: {
      openModalFemenil() {
        this.isModalFemenilOpen = true;
        document.body.style.overflow = 'hidden'; 
      },
      closeModalFemenil() {
        this.isModalFemenilOpen = false;
        document.body.style.overflow = '';
      }
    }
}
</script>

<style lang="scss" scoped>
/* FORZAR LA TIPOGRAFÍA ROBOTO PARA TODO EL COMPONENTE */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.font-roboto {
  font-family: 'Roboto', sans-serif !important;
  h1, h2, h3, h4, h5, h6, p, span, div, a, button, li, strong { font-family: 'Roboto', sans-serif !important; }
}
.material-icons { font-family: 'Material Icons' !important; }

$amf-dark: #1e293b; 
$amf-main: #3E9452; 
$amf-accent: #50c026;
$amf-gradient: linear-gradient(135deg, #50c026 0%, #3e9452 100%);

.fw-black { font-weight: 900 !important; }
.fw-bold { font-weight: 700 !important; }

/* Títulos Estandarizados */
.std-title-section { font-size: clamp(2rem, 4vw, 3rem); line-height: 1.2; letter-spacing: -1px; }
.std-title-card { font-size: clamp(1.2rem, 2vw, 1.5rem); line-height: 1.3; }
.std-subtitle { font-size: clamp(0.75rem, 1.5vw, 0.9rem); letter-spacing: 3px; text-transform: uppercase; font-weight: 700; }
.std-text { font-size: clamp(1rem, 1.5vw, 1.1rem); line-height: 1.8; }
.std-text-small { font-size: clamp(0.85rem, 1vw, 0.95rem); line-height: 1.6; }
.x-small { font-size: 0.75rem; }

.text-justify { text-align: justify !important; }
.amf-green-text { color: $amf-accent !important; }
.tracking-widest { letter-spacing: 4px; }
.tracking-wider { letter-spacing: 2px; }
.accent-line { width: 100px; height: 8px; background-color: $amf-accent; border-radius: 4px; }
.py-6 { padding-top: 6rem; padding-bottom: 6rem; }
.mt-6 { margin-top: 5rem; }
.mb-6 { margin-bottom: 5rem; }
.cursor-pointer { cursor: pointer; }
.transition-all { transition: all 0.3s ease; }
.hover-bg-light:hover { background-color: #f8f9fa; transform: translateX(5px); }
.text-slate-400 { color: #94a3b8; }
.hover-green:hover { color: $amf-accent !important; transition: 0.3s ease; }

.relative-container { position: relative; z-index: 10; }
.split-icon-container-2 { position: absolute; left: 50%; transform: translateX(-50%); z-index: 10; top: -195px; }

.reveal-up { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
.is-visible.reveal-up, .is-visible .reveal-up { opacity: 1; transform: translateY(0); }
.delay-1 { transition-delay: 0.15s; } .delay-2 { transition-delay: 0.3s; } .delay-3 { transition-delay: 0.45s; }

/* =========================================================
   TABS CONGRUENTES (PÍLDORA CLÁSICA)
   ========================================================= */
.amf-tab-inactive {
  background: transparent;
  color: #6c757d; /* Gris estándar de Bootstrap (text-muted) */
  &:hover {
    background-color: #f8f9fa;
    color: #3e9452; /* Verde AMFpro al pasar el mouse */
  }
}

.amf-tab-active {
  background: $amf-gradient;
  color: white !important;
  box-shadow: 0 4px 10px rgba(80, 192, 38, 0.3) !important;
}

/* =========================================================
   CONTENEDOR INTELIGENTE PARA EVITAR SALTOS DE ALTURA (CLS)
   ========================================================= */
.tab-content-container {
  min-height: 470px; 
}

@media (max-width: 991px) {
  .tab-content-container {
    min-height: 780px; 
  }
}

@media (max-width: 767px) {
  .tab-content-container {
    min-height: auto; 
  }
}

/* Transición fluida de contenido */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.fade-slide-enter, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* =========================================================
   TARJETAS LEGALES
   ========================================================= */
.premium-legal-card {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); cursor: pointer;
  .card-top-line { position: absolute; top: 0; left: 0; height: 4px; width: 0; background-color: $amf-main; transition: width 0.4s ease; }
  .transition-color { transition: color 0.3s ease; }
  .transition-number { transition: opacity 0.4s ease; }
  .legal-detail-wrapper { max-height: 0; opacity: 0; overflow: hidden; transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); &.is-expanded { max-height: 250px; opacity: 1; } }
  &:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(62, 148, 82, 0.15) !important; border-color: rgba(62, 148, 82, 0.3) !important; .card-top-line { width: 100%; } }
}

/* =========================================================
   BANNER DE CONTACTO (Ultra Pro)
   ========================================================= */
.premium-info-banner {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.05) !important;
  }
  .icon-box-soft {
    transition: transform 0.4s ease;
  }
  &:hover .icon-box-soft {
    transform: scale(1.1) rotate(5deg);
  }
}


/* =========================================================
   TARJETAS DESCARGAS (GLASSMORPHISM)
   ========================================================= */
.glass-doc-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
    
    .icon-box, .icon-box-femenil {
      transform: scale(1.1);
      background-color: rgba(255, 255, 255, 0.3) !important;
    }
    .transition-icon {
      transform: translateX(8px);
    }
    .link-text, .transition-icon {
      opacity: 1 !important;
    }
  }
}

.success-bg-shape {
  background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px);
}

/* Tarjeta Femenil Especial (Ajustada a verde) */
.card-femenil {
  .card-femenil-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: $amf-gradient; opacity: 0; z-index: 1; transition: opacity 0.4s ease; }
  .icon-box-femenil { width: 55px; height: 55px; background-color: rgba(255,255,255,0.1); backdrop-filter: blur(5px); transition: all 0.4s ease; }
  .download-link-femenil .transition-icon { transition: transform 0.4s ease; }
  
  &:hover {
    .card-femenil-bg { opacity: 0.9; }
    .icon-box-femenil { background-color: rgba(255,255,255,0.3) !important; }
  }
}

/* ESTILOS DE CONVENIOS */
.bg-offwhite { background-color: #F8F9FA; }
.premium-clean-card { box-shadow: 0 20px 50px rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.02); transition: all 0.4s ease; &:hover { transform: translateY(-5px); box-shadow: 0 30px 60px rgba(0,0,0,0.06); } }
.premium-list { list-style: none !important; padding-left: 0; }
.premium-list li { position: relative; padding-left: 1.8rem; margin-bottom: 1rem; color: #495057; &::before { content: 'verified'; font-family: 'Material Icons' !important; position: absolute; left: 0; top: 0; color: $amf-main; font-size: 1.2rem; } }
.stacking-cards-container { position: relative; padding-bottom: 1vh; }
.stack-card { position: sticky; margin-bottom: 4rem; }
#card-1 { top: 12vh; } #card-2 { top: 14vh; } #card-3 { top: 16vh; }
.convenio-logo { transition: transform 0.4s ease; }
.premium-clean-card:hover .convenio-logo { transform: scale(1.05); }
.std-title-hero { font-size: clamp(2.5rem, 5vw, 4.5rem); line-height: 1.1; }
.btn-premium-green { background: $amf-accent; color: white; border: none; box-shadow: 0 10px 20px rgba(80, 192, 38, 0.2); &:hover { background: #111; box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); transform: translateY(-3px); color: white; } }

/* =========================================================
   MODAL ULTRA-PREMIUM (FÚTBOL FEMENIL) 
   ========================================================= */
.modal-overlay-femenil {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background-color: rgba(15, 23, 42, 0.85); backdrop-filter: blur(8px);
  z-index: 10000; display: flex; justify-content: center; align-items: center;
  padding: 20px;
}

.modal-content-femenil {
  width: 100%; max-width: 1100px;
  background: white;
  animation: modalScaleIn 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.modal-femenil-header {
  background: $amf-gradient;
  .icon-header-femenil { width: 50px; height: 50px; background: rgba(255,255,255,0.2); backdrop-filter: blur(5px); }
}

.btn-close-femenil {
  background: rgba(255,255,255,0.2); border: none; color: white;
  width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  transition: all 0.3s ease; cursor: pointer;
  &:hover { background: white; color: #50c026; transform: rotate(90deg); }
}

.modal-femenil-body {
  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-track { background: #f1f1f1; }
  &::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
  &::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
}

.card-accent-femenil {
  position: absolute; top: 0; left: 0; width: 4px; height: 100%;
  background: $amf-gradient;
}

.icon-wrapper-soft {
  width: 45px; height: 45px; border-radius: 12px;
  background: rgba(80, 192, 38, 0.1); display: flex; align-items: center; justify-content: center;
  i { color: #3E9452; font-size: 1.6rem; }
}

.custom-femenil-list {
  list-style: none; padding-left: 0;
  li {
    position: relative; padding-left: 1.5rem; margin-bottom: 0.8rem;
    &::before { content: "check_circle"; font-family: "Material Icons"; position: absolute; left: 0; top: 2px; font-size: 1.1rem; color: #50c026; }
  }
}

@keyframes modalScaleIn {
  from { opacity: 0; transform: scale(0.95) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
</style>