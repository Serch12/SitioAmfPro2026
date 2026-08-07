<template>
    <div class="font-roboto">
      
      <!-- 1. SECCIÓN JURÍDICO -->
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
              <p class="text-secondary fs-5 px-md-5 lh-lg std-text mb-0">Selecciona el rubro de tu situación para que nuestros abogados puedan orientarte o representarte.</p>
            </div>
          </div>

          <!-- =========================================================
               GRID DE SITUACIONES (APILADAS Y TODO EN VERDE)
               ========================================================= -->
          <div v-for="(categoria, catIdx) in categoriasJuridico" :key="'cat-' + catIdx" class="mb-6 reveal-up" :class="'delay-' + (catIdx + 1)">
            
            <!-- Cinta de Título de la Categoría -->
            <div class="d-flex justify-content-start mb-4">
              <div class="bg-success text-white px-4 py-2 rounded-end-pill fw-black text-uppercase tracking-wider shadow-sm d-flex align-items-center" style="font-size: 1.05rem; border-left: 6px solid #112a18;">
                <i class="material-icons me-2">{{ categoria.iconHeader }}</i> {{ categoria.titulo }}
              </div>
            </div>

            <!-- Grid de Tarjetas -->
            <div class="row justify-content-center g-4">
              <div v-for="(sit, index) in categoria.items" :key="'sit-' + catIdx + '-' + index" class="col-12 col-md-6 col-lg-4">
                
                <div @click="abrirModalSituacion(sit)" class="premium-situation-card bg-white p-4 p-xl-5 rounded-4 shadow-sm border border-light h-100 d-flex flex-column align-items-center text-center position-relative cursor-pointer z-1 card-green">
                  
                  <div class="card-top-accent"></div>

                  <div class="icon-circle mb-4 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 transition-all z-2">
                    <i class="material-icons fs-1 amf-green-text">{{ sit.icon }}</i>
                  </div>
                  
                  <h5 class="fw-black text-dark mb-3 card-title-sit z-2 text-uppercase" style="letter-spacing: -0.5px; font-size: 1.05rem;">{{ sit.title }}</h5>
                  <!-- <p class="text-secondary small mb-0 lh-lg z-2">{{ sit.desc }}</p> -->
                  
                  <div class="action-hint mt-auto pt-4 fw-bold text-uppercase tracking-wider small d-flex align-items-center justify-content-center w-100 z-2 amf-green-text">
                    <span style="font-size: 0.75rem;">Iniciar Solicitud</span>
                    <i class="material-icons ms-1 transition-icon" style="font-size: 1.1rem;">arrow_forward</i>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <!-- BANNER DE CONTACTO -->
          <div class="row justify-content-center reveal-up delay-3 mt-4">
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

      <!-- 2. SECCIÓN DESCARGAS -->
      <section class="section-descargas py-6 text-white position-relative" style="background: linear-gradient(135deg, #3e9452 0%, #2b6b39 100%);" id="descargas">
        <div class="position-absolute top-0 start-0 w-100 h-100 opacity-50 z-1" style="background: radial-gradient(circle at center, rgba(62,148,82,0.4) 0%, transparent 70%);"></div>
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
              <a v-if="!doc.isModal" :href="doc.url_link" target="_blank" class="text-decoration-none">
                <div class="glass-doc-card p-4 rounded-4 shadow-sm h-100 d-flex flex-column position-relative overflow-hidden">
                  <div class="icon-container mb-4 position-relative z-2">
                    <div class="icon-box rounded-circle d-flex align-items-center justify-content-center shadow-sm" style="width: 55px; height: 55px; background-color: rgba(255, 255, 255, 0.1);">
                       <img :src="doc.icon_grey" class="img-fluid main-icon" style="height: 40px; object-fit: contain; filter: brightness(0) invert(1);">
                    </div>
                  </div>
                  <div class="content-container mt-auto position-relative z-2">
                    <h6 class="fw-bold text-white mb-4 lh-base doc-title" style="min-height: 45px; font-size: 0.95rem;">{{ doc.title }}</h6>
                    <div class="download-link d-inline-flex align-items-center fw-bold text-uppercase tracking-wider small text-white">
                      <span class="link-text opacity-75">Descargar PDF</span>
                      <i class="material-icons ms-2 transition-icon fs-5 opacity-75">arrow_forward</i>
                    </div>
                  </div>
                </div>
              </a>
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
              <button @click="abrirModalConvenios" class="btn btn-premium-green btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm d-inline-flex align-items-center">
                <i class="material-icons me-2">school</i> SOLICITAR INFORMACIÓN
              </button>
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
                  <p class="std-text-small text-center mb-4 px-2 text-white" style="opacity: 0.9;">Todos los asociados tienen derecho a becas especiales.</p>
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

      <!-- =========================================================
           MODAL DINÁMICO DE SITUACIONES JURÍDICAS
           ========================================================= -->
      <transition name="fade-scale">
        <div v-if="isModalSituacionOpen" class="modal-overlay-premium">
          <!-- SE AÑADIÓ MAX-HEIGHT PARA EVITAR CORTES -->
          <div class="modal-content-premium shadow-2xl rounded-4 overflow-hidden position-relative d-flex flex-column" role="dialog">
            
            <!-- Cabecera del Modal (Siempre Verde) -->
            <div class="modal-header-premium flex-shrink-0 px-4 py-4 d-flex justify-content-between align-items-center" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);">
              <div class="d-flex align-items-center">
                <div class="icon-header-premium me-3 shadow-sm rounded-circle d-flex align-items-center justify-content-center">
                  <i class="material-icons amf-green-text">{{ activeSituacion.icon }}</i>
                </div>
                <div>
                  <h6 class="text-white-50 fw-bold tracking-widest text-uppercase small" :class="afiliadoVerificado ? 'mb-0' : 'mb-1'">Asesoría Jurídica</h6>
                  <!-- Desaparece cuando la afiliación es verificada -->
                  <transition name="fade">
                    <h5 v-if="!afiliadoVerificado" class="fw-black text-white mb-0 text-uppercase mt-1" style="letter-spacing: -0.5px; line-height: 1.2;">{{ activeSituacion.title }}</h5>
                  </transition>
                </div>
              </div>
              <button class="btn-close-premium shadow-sm flex-shrink-0 ms-3" @click="cerrarModalSituacion">
                <i class="material-icons">close</i>
              </button>
            </div>

            <!-- Cuerpo del Modal (AHORA ES SCROLLABLE) -->
            <div class="modal-body-premium p-4 p-md-5 bg-light flex-grow-1">
              
              <!-- ESTADO 1: VERIFICACIÓN DE NUI -->
              <transition name="fade" mode="out-in">
                <div v-if="!afiliadoVerificado" key="verificacion">
                  <div class="bg-white p-4 rounded-4 shadow-sm border border-light text-center mb-4">
                    <div class="icon-circle mx-auto mb-3" style="width: 50px; height: 50px; background: rgba(80,192,38,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                      <i class="material-icons text-success fs-3">verified_user</i>
                    </div>
                    <h5 class="fw-bold text-dark mb-2">Verifica tu Afiliación</h5>
                    <p class="std-text-small text-secondary mb-0">
                      Para brindarte asistencia personalizada, por favor ingresa tu NUI (Registro FMF) para comprobar tu estatus como miembro AMFpro.
                    </p>
                  </div>

                  <div class="form-floating premium-floating mb-4">
                    <input type="text" class="form-control" id="nuiInputVerif" v-model="nuiInput" @input="limpiarNUI" placeholder="NUI" maxlength="7" @keyup.enter="verificarNUI">
                    <label for="nuiInputVerif">Ingresa tu NUI *</label>
                  </div>

                  <button @click="verificarNUI" class="btn btn-premium-green w-100 rounded-pill py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center" :disabled="verificandoNUI || !nuiInput">
                    <span v-if="verificandoNUI" class="spinner-border spinner-border-sm me-2"></span>
                    <i v-else class="material-icons me-2">search</i> 
                    {{ verificandoNUI ? 'Verificando...' : 'VERIFICAR AFILIACIÓN' }}
                  </button>
                </div>

                <!-- ESTADO 2: FORMULARIO DE REPORTE -->
                <div v-else key="formulario">

                  <!-- Alerta de Verificación (Siempre Verde) -->
                  <div class="alert-premium-green p-3 rounded-3 mb-4 shadow-sm border border-success border-opacity-25 d-flex align-items-center" style="background: rgba(80, 192, 38, 0.05);">
                     <i class="material-icons text-success me-3 fs-3">check_circle</i>
                     <div>
                       <h6 class="fw-bold text-dark mb-1" style="font-size: 0.95rem;">¡Afiliación Verificada!</h6>
                       <p class="x-small text-secondary mb-0 line-height-1">Hola, <strong>{{ datosAfiliado.nombre }}</strong>. Completa la solicitud a continuación.</p>
                     </div>
                  </div>

                  <div class="row g-3 mb-4">
                    
                    <!-- TEMA -->
                    <div class="col-12">
                      <label class="x-small fw-bold text-muted text-uppercase tracking-wider ps-2 mb-1">Tema</label>
                      <div class="p-3 bg-white rounded-3 border border-light text-dark fw-bold std-text-small shadow-sm">{{ activeSituacion.title }}</div>
                    </div>
                    
                    <div class="col-12 col-md-6">
                      <label for="correoContacto" class="x-small fw-bold text-muted text-uppercase tracking-wider ps-2 mb-1">Correo (Editable) *</label>
                      <input type="email" id="correoContacto" class="form-control premium-input rounded-3 shadow-sm p-3" v-model="datosAfiliado.correo" placeholder="tucorreo@ejemplo.com">
                    </div>

                    <div class="col-12 col-md-6">
                      <label for="telContacto" class="x-small fw-bold text-muted text-uppercase tracking-wider ps-2 mb-1">Teléfono (Editable) *</label>
                      <input type="text" id="telContacto" class="form-control premium-input rounded-3 shadow-sm p-3" v-model="datosAfiliado.telefono" @input="formatearTelefono" placeholder="(55) 5455 - 6687" maxlength="17">
                    </div>

                    <div class="col-12 position-relative mt-3">
                      <label for="descProblema" class="x-small fw-bold text-muted text-uppercase tracking-wider ps-2 mb-1">Describe tu situación (Obligatorio)</label>
                      <textarea id="descProblema" class="form-control premium-input rounded-3 shadow-sm p-3" rows="4" v-model="descripcionProblema" maxlength="250" placeholder="Escribe aquí los detalles precisos de tu caso para que nuestro equipo jurídico pueda analizarlo..."></textarea>
                      <div class="text-end mt-2">
                         <span class="badge rounded-pill bg-light text-secondary border">
                           {{ descripcionProblema.length }} / 250 caracteres
                         </span>
                      </div>
                    </div>
                  </div>

                  <!-- Botón Siempre Verde -->
                  <button @click="enviarReporte" class="btn btn-premium-green w-100 rounded-pill py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center" :disabled="enviandoReporte || descripcionProblema.trim().length < 10 || !datosAfiliado.telefono || !datosAfiliado.correo">
                    <span v-if="enviandoReporte" class="spinner-border spinner-border-sm me-2"></span>
                    <i v-else class="material-icons me-2">send</i> 
                    {{ enviandoReporte ? 'Enviando Solicitud...' : 'ENVIAR SOLICITUD AL ÁREA JURÍDICA' }}
                  </button>
                </div>
              </transition>

            </div>
          </div>
        </div>
      </transition>

      <!-- =========================================================
           MODAL DINÁMICO DE CONVENIOS EDUCATIVOS
           ========================================================= -->
      <transition name="fade-scale">
        <div v-if="isModalConveniosOpen" class="modal-overlay-premium">
          <div class="modal-content-premium shadow-2xl rounded-4 overflow-hidden position-relative d-flex flex-column" role="dialog">
            
            <div class="modal-header-premium flex-shrink-0 px-4 py-4 d-flex justify-content-between align-items-center" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);">
              <div class="d-flex align-items-center">
                <div class="icon-header-premium me-3 shadow-sm rounded-circle d-flex align-items-center justify-content-center">
                  <i class="material-icons text-success">school</i>
                </div>
                <div>
                  <h6 class="text-white-50 fw-bold tracking-widest text-uppercase small mb-1">Desarrollo Educativo</h6>
                  <h4 class="fw-black text-white mb-0" style="letter-spacing: -0.5px;">Informes y Becas</h4>
                </div>
              </div>
              <button class="btn-close-premium shadow-sm flex-shrink-0" @click="cerrarModalConvenios">
                <i class="material-icons">close</i>
              </button>
            </div>

            <div class="modal-body-premium p-4 p-md-5 bg-light flex-grow-1">
              
              <transition name="fade" mode="out-in">
                <div v-if="!afiliadoVerificadoConvenio" key="verificacion-convenio">
                  <div class="bg-white p-4 rounded-4 shadow-sm border border-light text-center mb-4">
                    <div class="icon-circle mx-auto mb-3" style="width: 50px; height: 50px; background: rgba(80,192,38,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                      <i class="material-icons text-success fs-3">verified_user</i>
                    </div>
                    <h5 class="fw-bold text-dark mb-2">Verifica tu Afiliación</h5>
                    <p class="std-text-small text-secondary mb-0">
                      Nuestras becas son exclusivas para miembros AMFpro. Ingresa tu NUI para validarlo.
                    </p>
                  </div>

                  <div class="form-floating premium-floating mb-4">
                    <input type="text" class="form-control" id="nuiInputConvenio" v-model="nuiInputConvenio" @input="limpiarNUIConvenio" placeholder="NUI" maxlength="7" @keyup.enter="verificarNUIConvenio">
                    <label for="nuiInputConvenio">Ingresa tu NUI *</label>
                  </div>

                  <button @click="verificarNUIConvenio" class="btn btn-premium-green w-100 rounded-pill py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center" :disabled="verificandoNUIConvenio || !nuiInputConvenio">
                    <span v-if="verificandoNUIConvenio" class="spinner-border spinner-border-sm me-2"></span>
                    <i v-else class="material-icons me-2">search</i> 
                    {{ verificandoNUIConvenio ? 'Verificando...' : 'VERIFICAR AFILIACIÓN' }}
                  </button>
                </div>

                <div v-else key="formulario-convenio">
                  <div class="alert-premium-green p-3 rounded-3 mb-4 shadow-sm border border-success border-opacity-25 d-flex align-items-center" style="background: rgba(80, 192, 38, 0.05);">
                     <i class="material-icons text-success me-3 fs-3">check_circle</i>
                     <div>
                       <h6 class="fw-bold text-dark mb-1" style="font-size: 0.95rem;">¡Afiliación Verificada!</h6>
                       <p class="x-small text-secondary mb-0 line-height-1">Hola, <strong>{{ datosAfiliadoConvenio.nombre }}</strong>. ¿En qué institución estás interesado?</p>
                     </div>
                  </div>

                  <div class="row g-3 mb-4">
                    <div class="col-12">
                      <label for="institucion" class="x-small fw-bold text-muted text-uppercase tracking-wider ps-2 mb-1">Institución de interés *</label>
                      <select id="institucion" class="form-select premium-input rounded-3 shadow-sm p-3" v-model="formularioConvenio.institucion">
                        <option value="" disabled>Selecciona una opción...</option>
                        <option value="Johan Cruyff Institute">Johan Cruyff Institute (Posgrados/Cursos)</option>
                        <option value="Universidad UVN">Universidad UVN (Prepa/Licenciatura/Maestría)</option>
                        <option value="CONAMAT">CONAMAT (Preparatoria en 4 meses)</option>
                      </select>
                    </div>
                    
                    <div class="col-12 col-md-6">
                      <label for="correoConvenio" class="x-small fw-bold text-muted text-uppercase tracking-wider ps-2 mb-1">Correo de contacto *</label>
                      <input type="email" id="correoConvenio" class="form-control premium-input rounded-3 shadow-sm p-3" v-model="datosAfiliadoConvenio.correo" placeholder="tucorreo@ejemplo.com">
                    </div>

                    <div class="col-12 col-md-6">
                      <label for="telConvenio" class="x-small fw-bold text-muted text-uppercase tracking-wider ps-2 mb-1">Teléfono *</label>
                      <input type="text" id="telConvenio" class="form-control premium-input rounded-3 shadow-sm p-3" v-model="datosAfiliadoConvenio.telefono" @input="formatearTelefonoConvenio" placeholder="Celular" maxlength="17">
                    </div>

                    <div class="col-12 position-relative mt-2">
                      <label for="mensajeConvenio" class="x-small fw-bold text-muted text-uppercase tracking-wider ps-2 mb-1">Dudas o comentarios (Opcional)</label>
                      <textarea id="mensajeConvenio" class="form-control premium-input rounded-3 shadow-sm p-3" rows="3" v-model="formularioConvenio.mensaje" maxlength="200" placeholder="¿Tienes alguna pregunta específica sobre los costos, horarios o planes de estudio?"></textarea>
                    </div>
                  </div>

                  <button @click="enviarSolicitudConvenio" class="btn btn-premium-green w-100 rounded-pill py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center" :disabled="enviandoConvenio || !datosAfiliadoConvenio.telefono || !datosAfiliadoConvenio.correo || !formularioConvenio.institucion">
                    <span v-if="enviandoConvenio" class="spinner-border spinner-border-sm me-2"></span>
                    <i v-else class="material-icons me-2">send</i> 
                    {{ enviandoConvenio ? 'Enviando Solicitud...' : 'SOLICITAR INFORMES' }}
                  </button>
                </div>
              </transition>

            </div>
          </div>
        </div>
      </transition>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            observer: null,
            
            // Variables para el Modal Dinámico y Verificación NUI
            isModalSituacionOpen: false,
            activeSituacion: {},
            nuiInput: '',
            verificandoNUI: false,
            afiliadoVerificado: false,
            enviandoReporte: false,
            descripcionProblema: '',
            datosAfiliado: {
              nombre: '',
              correo: '',
              telefono: ''
            },
            
            usuarioLogueado: false,
            datosUsuarioGlobal: null,
            
            // ARREGLO CATEGORIZADO (TODOS EN VERDE COMO EN LA IMAGEN)
            categoriasJuridico: [
              {
                titulo: 'Asesoría legal y solicitud de documentos',
                iconHeader: 'admin_panel_settings',
                items: [
                  { icon: 'gavel', title: 'Asesoría legal sobre registro y/o situación contractual', desc: 'Resuelve dudas sobre tu estatus y contrato actual.', detalleLargo: 'Te brindamos orientación jurídica detallada sobre tu registro federativo, la vigencia y términos de tu contrato profesional, para que tomes las mejores decisiones en tu carrera.' },
                  { icon: 'pregnant_woman', title: 'Asesoría derechos por embarazo y maternidad', desc: 'Conoce y protege tus derechos laborales.', detalleLargo: 'Las jugadoras tienen derechos específicos y protegidos ante situaciones de embarazo y maternidad. Te asesoramos para garantizar que tu club respete tus condiciones laborales y médicas.' },
                  { icon: 'public', title: 'Asesoría sobre el Certificado de Transferencia Internacional (CTI)', desc: 'Apoyo en trámites de transferencias internacionales.', detalleLargo: 'Si vas a jugar al extranjero o vienes a México, te orientamos sobre el proceso del CTI ante la FIFA para evitar bloqueos o retrasos en tu registro.' },
                  { icon: 'history', title: 'Solicitud de historial deportivo', desc: 'Obtén tu registro oficial de trayectoria.', detalleLargo: 'Te apoyamos a tramitar formalmente tu historial deportivo oficial ante la Federación Mexicana de Fútbol, un documento vital para futuras contrataciones.' },
                  { icon: 'description', title: 'Solicitud copia de contrato y/o convenios', desc: 'Recupera tus documentos laborales oficiales.', detalleLargo: 'Pídele a tu club tu copia del contrato. Si se niegan a entregártela, nosotros podemos apoyarte a solicitarla de manera formal ante la FMF para proteger tu historial.' },
                  { icon: 'assignment_turned_in', title: 'Solicitud de finiquito', desc: 'Asegura la liberación correcta de tu relación laboral.', detalleLargo: 'Si tu contrato finalizó y el club no te ha entregado tu documento de finiquito, te ayudamos a solicitarlo formalmente para liberar tu registro sin contratiempos.' }
                ]
              },
              {
                titulo: 'Representación legal',
                iconHeader: 'balance',
                items: [
                  { icon: 'payments', title: 'Adeudo de salario', desc: 'Acciones legales ante la falta de pago.', detalleLargo: 'Si tu club te debe salario, ya sea durante o al término del torneo, es fundamental levantar el reporte inmediatamente para interponer la controversia antes de que venzan los plazos legales.' },
                  { icon: 'block', title: 'Despido injustificado o rescisión de contrato', desc: 'Defensa ante terminaciones de contrato unilaterales.', detalleLargo: 'Si tu club te informa que no entras en planes o rescinde tu contrato sin causa justificada, tienes derecho a reclamar el pago de tu contrato y/o indemnización correspondiente. Te representamos legalmente.' },
                  { icon: 'price_change', title: 'Pago de porcentaje de transferencia', desc: 'Reclama tu porcentaje legal por transferencia.', detalleLargo: 'Si fuiste transferido de un club a otro de forma definitiva, la normatividad te otorga el derecho a un porcentaje del monto de dicha transferencia. Te ayudamos a reclamarlo oficialmente.' },
                  { icon: 'handshake', title: 'Incumplimiento convenio de pago', desc: 'Exige el cumplimiento de acuerdos previos.', detalleLargo: 'Si llegaste a un acuerdo de pago en parcialidades (convenio) con tu club y han dejado de pagarte, nosotros iniciamos las acciones legales correspondientes por el incumplimiento de las fechas pactadas.' },
                  { icon: 'emoji_events', title: 'Pago de bonos o premios en contrato', desc: 'Reclama bonos por objetivos cumplidos.', detalleLargo: 'Los bonos por minutos, goles, convocatorias o campeonatos estipulados en tu contrato son exigibles legalmente. Si el club se niega a pagarlos, te representamos para hacer valer tu contrato.' },
                  { icon: 'medical_services', title: 'Falta de atención médica por lesión', desc: 'Exige la cobertura médica que te corresponde.', detalleLargo: 'Si sufriste una lesión derivada de tu actividad profesional (partido o entrenamiento oficial), tu club está obligado a brindarte atención médica integral hasta tu total recuperación física y deportiva.' }
                ]
              }
            ],

            docsData: [
                { title: 'Reglamento de la Comisión de Conciliación y Resolución de Controversias 2024', icon_grey: 'recursos/documento-verde-2.png', url_link: 'https://fmf.mx/docs/reglamentos/441.pdf', isModal: false },
                { title: 'Reglamento de Transferencias y Contrataciones 2026-2027', icon_grey: 'recursos/dobledocumento-verde.png', url_link: 'https://fmf.mx/docs/reglamentos/521.pdf', isModal: false },
                { title: 'Código de Ética', icon_grey: 'recursos/ball-verde.png', url_link: 'https://fmf.mx/docs/reglamentos/475.pdf', isModal: false },
                { title: 'Derechos y Regulaciones del Fútbol Femenil', isModal: true }
            ],
            
            isModalConveniosOpen: false,
            nuiInputConvenio: '',
            verificandoNUIConvenio: false,
            afiliadoVerificadoConvenio: false,
            enviandoConvenio: false,
            datosAfiliadoConvenio: { nombre: '', correo: '', telefono: '' },
            formularioConvenio: { institucion: '', mensaje: '' }
        }
    },
    mounted() {
      const options = { root: null, rootMargin: '0px', threshold: 0.15 };
      this.observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => { 
            if (entry.isIntersecting) { 
                entry.target.classList.add('is-visible'); 
                observer.unobserve(entry.target);
            } 
        });
      }, options);
      
      this.$nextTick(() => { document.querySelectorAll('.reveal-up').forEach(el => { this.observer.observe(el); }); });

      axios.get('afiliado/datos')
      .then(response => {
          if (response.data && response.data.id_afi) {
              this.usuarioLogueado = true;
              this.datosUsuarioGlobal = response.data;
          }
      })
      .catch(() => { this.usuarioLogueado = false; })
      .finally(() => {
          setTimeout(() => {
              const pendienteJuridico = localStorage.getItem('pendiente_juridico');
              
              if (pendienteJuridico) {
                  const datosGuardados = JSON.parse(pendienteJuridico);
                  
                  let situacionGuardada = null;
                  
                  for (let cat of this.categoriasJuridico) {
                      const found = cat.items.find(s => s.title === datosGuardados.tema);
                      if (found) {
                          situacionGuardada = found;
                          break;
                      }
                  }
                  
                  if (situacionGuardada && datosGuardados.nui) {
                      this.abrirModalSituacion(situacionGuardada);
                      
                      this.$nextTick(() => {
                          this.nuiInput = datosGuardados.nui;
                          this.verificarNUI(); 
                          localStorage.removeItem('pendiente_juridico');
                      });
                  }
              }
          }, 800);
      });
    },
    beforeDestroy() { if (this.observer) this.observer.disconnect(); },
    methods: {
      cargarDatosSesion() {
          const jugador = this.datosUsuarioGlobal;
          if(!jugador) return;
          
          this.nuiInput = jugador.nui || '';
          const nombre = jugador.nombre || '';
          const apPaterno = jugador.apellido_pat ? ` ${jugador.apellido_pat}` : '';
          const apMaterno = jugador.apellido_mat ? ` ${jugador.apellido_mat}` : '';
          
          this.datosAfiliado.nombre = `${nombre}${apPaterno}${apMaterno}`.trim() || 'Afiliado AMFpro';
          this.datosAfiliado.correo = jugador.mail || jugador.email || jugador.correo || '';
          
          const phoneDB = jugador.celular || jugador.telefono || '';
          if(phoneDB) {
             let input = phoneDB.replace(/\D/g, ''); 
             if (input.length > 10) input = input.substring(0, 10); 
             let formatted = input;
             if (input.length > 2 && input.length <= 6) { formatted = `(${input.substring(0,2)}) ${input.substring(2)}`; } 
             else if (input.length > 6) { formatted = `(${input.substring(0,2)}) ${input.substring(2,6)} - ${input.substring(6)}`; }
             this.datosAfiliado.telefono = formatted;
          } else {
             this.datosAfiliado.telefono = '';
          }
          
          this.afiliadoVerificado = true; 
      },

      abrirModalSituacion(sit) {
        if (this.usuarioLogueado && this.datosUsuarioGlobal) {
            this.cargarDatosSesion();
        } else {
            this.nuiInput = '';
            this.afiliadoVerificado = false;
            this.datosAfiliado = { nombre: '', correo: '', telefono: '' };
        }
        
        this.descripcionProblema = '';
        this.activeSituacion = sit;
        this.isModalSituacionOpen = true;
        document.body.style.overflow = 'hidden'; 
      },

      cerrarModalSituacion() {
        this.isModalSituacionOpen = false;
        document.body.style.overflow = '';
        
        setTimeout(() => {
            if (!this.usuarioLogueado) {
                this.nuiInput = '';
                this.afiliadoVerificado = false;
                this.datosAfiliado = { nombre: '', correo: '', telefono: '' };
            }
            this.descripcionProblema = '';
        }, 300);
      },

      limpiarNUI() {
        this.nuiInput = this.nuiInput.replace(/\D/g, '');
      },
      
      formatearTelefono(e) {
        let input = e.target.value.replace(/\D/g, ''); 
        if (input.length > 10) input = input.substring(0, 10); 
        let formatted = input;
        if (input.length > 2 && input.length <= 6) { formatted = `(${input.substring(0,2)}) ${input.substring(2)}`; } 
        else if (input.length > 6) { formatted = `(${input.substring(0,2)}) ${input.substring(2,6)} - ${input.substring(6)}`; }
        this.datosAfiliado.telefono = formatted;
      },

      verificarNUI() {
        if(!this.nuiInput) return;
        this.verificandoNUI = true;
        
        axios.get(`registro/existe_nui/${this.nuiInput}`)
        .then(res => {
            let jugador = null;
            if (Array.isArray(res.data) && res.data.length > 0) { jugador = res.data[0]; } 
            else if (res.data && typeof res.data === 'object' && Object.keys(res.data).length > 0) { jugador = res.data; }

            if (jugador && (jugador.nombre || jugador.nui || jugador.id_afi)) {
                // Validado con éxito
                const nombre = jugador.nombre || '';
                const apPaterno = jugador.apellido_pat ? ` ${jugador.apellido_pat}` : '';
                const apMaterno = jugador.apellido_mat ? ` ${jugador.apellido_mat}` : '';
                
                this.datosAfiliado.nombre = `${nombre}${apPaterno}${apMaterno}`.trim() || 'Afiliado AMFpro';
                this.datosAfiliado.correo = jugador.mail || jugador.email || jugador.correo || '';
                
                const phoneDB = jugador.celular || jugador.telefono || '';
                if(phoneDB) {
                   let input = phoneDB.replace(/\D/g, ''); 
                   if (input.length > 10) input = input.substring(0, 10); 
                   let formatted = input;
                   if (input.length > 2 && input.length <= 6) { formatted = `(${input.substring(0,2)}) ${input.substring(2)}`; } 
                   else if (input.length > 6) { formatted = `(${input.substring(0,2)}) ${input.substring(2,6)} - ${input.substring(6)}`; }
                   this.datosAfiliado.telefono = formatted;
                } else {
                   this.datosAfiliado.telefono = '';
                }
                
                this.afiliadoVerificado = true;
            } else {
                window.Swal.fire({
                    icon: 'warning',
                    title: '¡No estás afiliado!',
                    text: 'Para recibir protección y asesoría jurídica necesitas registrarte en la AMFpro.',
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Ir a Registro',
                    customClass: {
                        confirmButton: 'btn btn-success rounded-pill px-4 py-2 me-2',
                        cancelButton: 'btn btn-secondary rounded-pill px-4 py-2'
                    },
                    buttonsStyling: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        localStorage.setItem('pendiente_juridico', JSON.stringify({
                            nui: this.nuiInput,
                            tema: this.activeSituacion.title
                        }));
                        window.location.href = 'afiliacion'; 
                    }
                });
            }
        })
        .catch(err => {
            console.error(err);
            window.Swal.fire('Error', 'Hubo un problema al verificar tu NUI. Por favor, intenta de nuevo.', 'error');
        })
        .finally(() => { this.verificandoNUI = false; });
      },

      enviarReporte() {
        if(this.descripcionProblema.trim().length < 10 || !this.datosAfiliado.telefono || !this.datosAfiliado.correo) return;
        
        this.enviandoReporte = true;
        
        let payload = {
            nui: this.nuiInput,
            nombre: this.datosAfiliado.nombre,
            correo: this.datosAfiliado.correo,
            telefono: this.datosAfiliado.telefono,
            tema: this.activeSituacion.title,
            descripcion: this.descripcionProblema.trim()
        };

        axios.post('juridico/enviar-reporte', payload)
        .then(res => {
            window.Swal.fire({
                icon: 'success',
                title: '¡Solicitud Enviada!',
                text: 'Tu caso ha sido turnado directamente a nuestra Coordinación Jurídica.\n\nNuestros abogados analizarán la información y se comunicarán contigo a la brevedad a través de tu correo o teléfono para darte la asesoría necesaria.\n\n¡En la AMFpro estamos para respaldarte!',
                confirmButtonText: 'Entendido, gracias',
                customClass: { confirmButton: 'btn btn-success rounded-pill px-4 py-2' },
                buttonsStyling: false
            }).then(() => { this.cerrarModalSituacion(); });
        })
        .catch(err => {
            console.error(err);
            window.Swal.fire('Error', 'Hubo un problema al enviar tu reporte. Intenta contactarnos directamente a los correos institucionales.', 'error');
        })
        .finally(() => { this.enviandoReporte = false; });
      },

      abrirModalConvenios() {
        if (this.usuarioLogueado && this.datosUsuarioGlobal) {
            this.nuiInputConvenio = this.datosUsuarioGlobal.nui || '';
            const nombre = this.datosUsuarioGlobal.nombre || '';
            const apPaterno = this.datosUsuarioGlobal.apellido_pat ? ` ${this.datosUsuarioGlobal.apellido_pat}` : '';
            this.datosAfiliadoConvenio.nombre = `${nombre}${apPaterno}`.trim() || 'Afiliado AMFpro';
            this.datosAfiliadoConvenio.correo = this.datosUsuarioGlobal.mail || '';
            
            const phoneDB = this.datosUsuarioGlobal.celular || '';
            this.datosAfiliadoConvenio.telefono = phoneDB.length === 10 ? `(${phoneDB.substring(0,2)}) ${phoneDB.substring(2,6)} - ${phoneDB.substring(6)}` : phoneDB;
            
            this.afiliadoVerificadoConvenio = true;
        } else {
            this.nuiInputConvenio = '';
            this.afiliadoVerificadoConvenio = false;
            this.datosAfiliadoConvenio = { nombre: '', correo: '', telefono: '' };
        }
        
        this.formularioConvenio = { institucion: '', mensaje: '' };
        this.isModalConveniosOpen = true;
        document.body.style.overflow = 'hidden'; 
      },

      cerrarModalConvenios() {
        this.isModalConveniosOpen = false;
        document.body.style.overflow = '';
      },

      limpiarNUIConvenio() { this.nuiInputConvenio = this.nuiInputConvenio.replace(/\D/g, ''); },

      formatearTelefonoConvenio(e) {
        let input = e.target.value.replace(/\D/g, ''); 
        if (input.length > 10) input = input.substring(0, 10); 
        let formatted = input;
        if (input.length > 2 && input.length <= 6) { formatted = `(${input.substring(0,2)}) ${input.substring(2)}`; } 
        else if (input.length > 6) { formatted = `(${input.substring(0,2)}) ${input.substring(2,6)} - ${input.substring(6)}`; }
        this.datosAfiliadoConvenio.telefono = formatted;
      },

      verificarNUIConvenio() {
        if(!this.nuiInputConvenio) return;
        this.verificandoNUIConvenio = true;
        
        axios.get(`registro/existe_nui/${this.nuiInputConvenio}`)
        .then(res => {
            let jugador = null;
            if (Array.isArray(res.data) && res.data.length > 0) { jugador = res.data[0]; } 
            else if (res.data && typeof res.data === 'object' && Object.keys(res.data).length > 0) { jugador = res.data; }

            if (jugador && (jugador.nombre || jugador.nui || jugador.id_afi)) {
                this.datosAfiliadoConvenio.nombre = `${jugador.nombre || ''} ${jugador.apellido_pat || ''}`.trim() || 'Afiliado AMFpro';
                this.datosAfiliadoConvenio.correo = jugador.mail || '';
                
                const phoneDB = jugador.celular || '';
                this.datosAfiliadoConvenio.telefono = phoneDB.length === 10 ? `(${phoneDB.substring(0,2)}) ${phoneDB.substring(2,6)} - ${phoneDB.substring(6)}` : phoneDB;
                
                this.afiliadoVerificadoConvenio = true;
            } else {
                window.Swal.fire({
                    icon: 'warning',
                    title: '¡No estás afiliado!',
                    text: 'Las becas y convenios educativos son un beneficio exclusivo para los miembros de la AMFpro. ¡Regístrate para obtenerlos!',
                    showCancelButton: true,
                    cancelButtonText: 'Cerrar',
                    confirmButtonText: 'Ir a Registro',
                    customClass: { confirmButton: 'btn btn-success rounded-pill px-4 py-2 me-2', cancelButton: 'btn btn-secondary rounded-pill px-4 py-2' },
                    buttonsStyling: false
                }).then((result) => {
                    if (result.isConfirmed) window.location.href = 'afiliacion'; 
                });
            }
        })
        .catch(err => {
            console.error(err);
            window.Swal.fire('Error', 'Hubo un problema de conexión. Intenta de nuevo.', 'error');
        })
        .finally(() => { this.verificandoNUIConvenio = false; });
      },

      enviarSolicitudConvenio() {
        this.enviandoConvenio = true;
        
        let payload = {
            nui: this.nuiInputConvenio,
            nombre: this.datosAfiliadoConvenio.nombre,
            correo: this.datosAfiliadoConvenio.correo,
            telefono: this.datosAfiliadoConvenio.telefono,
            institucion: this.formularioConvenio.institucion,
            mensaje: this.formularioConvenio.mensaje
        };

        axios.post('convenios/enviar-solicitud', payload)
        .then(res => {
            window.Swal.fire({
                icon: 'success',
                title: '¡Información Solicitada!',
                text: 'Hemos recibido tus datos correctamente. El área de Desarrollo Educativo se pondrá en contacto contigo pronto para darte los detalles y tramitar tu beca.',
                confirmButtonText: 'Excelente',
                customClass: { confirmButton: 'btn btn-success rounded-pill px-4 py-2' },
                buttonsStyling: false
            }).then(() => { this.cerrarModalConvenios(); });
        })
        .catch(err => {
            console.error(err);
            window.Swal.fire('Error', 'Hubo un error al enviar tu solicitud. Puedes escribir directo a desarrolloeducativo@amfpro.mx', 'error');
        })
        .finally(() => { this.enviandoConvenio = false; });
      }
    }
}
</script>

<style lang="scss" scoped>
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

/* ANIMACIONES OPTIMIZADAS (Aceleración GPU) */
.reveal-up { 
  opacity: 0; 
  transform: translateY(30px); 
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); 
  will-change: opacity, transform; 
}
.is-visible.reveal-up, .is-visible .reveal-up { opacity: 1; transform: translateY(0); }
.delay-1 { transition-delay: 0.1s; } 
.delay-2 { transition-delay: 0.2s; } 
.delay-3 { transition-delay: 0.3s; }


/* =========================================================
   TARJETAS SITUACIÓN JURÍDICAS (DISEÑO ULTRA PRO - TODO VERDE)
   ========================================================= */
.premium-situation-card {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  
  .card-top-accent {
    position: absolute; top: 0; left: 0; width: 100%; height: 4px;
    transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease;
  }

  .action-hint { opacity: 0; transform: translateY(10px); transition: all 0.3s ease; }

  &:hover {
    transform: translateY(-8px);
    .card-top-accent { transform: scaleX(1); }
    .icon-circle { transform: scale(1.1) translateY(-5px); i { color: white !important; } }
    .action-hint { opacity: 1; transform: translateY(0); }
    .transition-icon { transform: translateX(5px); }
  }
}

/* Tarjetas Verdes (Todas) */
.premium-situation-card.card-green {
  .icon-circle { background-color: rgba(80, 192, 38, 0.05); border: 1px solid rgba(80, 192, 38, 0.1); box-shadow: 0 10px 20px rgba(0,0,0,0.02); }
  &:hover {
    border-color: rgba(80, 192, 38, 0.2) !important;
    box-shadow: 0 25px 50px rgba(80, 192, 38, 0.08) !important;
    .card-top-accent { background: linear-gradient(135deg, #50c026 0%, #3e9452 100%); }
    .icon-circle { background: linear-gradient(135deg, #50c026 0%, #3e9452 100%); border-color: transparent; box-shadow: 0 15px 30px rgba(80, 192, 38, 0.3); }
  }
}

/* BANNER DE CONTACTO */
.premium-info-banner { transition: transform 0.4s ease, box-shadow 0.4s ease; &:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.05) !important; } .icon-box-soft { transition: transform 0.4s ease; } &:hover .icon-box-soft { transform: scale(1.1) rotate(5deg); } }

/* TARJETAS DESCARGAS */
.glass-doc-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); &:hover { transform: translateY(-8px); background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.3); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important; .icon-box { transform: scale(1.1); background-color: rgba(255, 255, 255, 0.3) !important; } .transition-icon { transform: translateX(8px); opacity: 1 !important; } .link-text { opacity: 1 !important; } } }
.success-bg-shape { background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px); }

/* CONVENIOS */
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

/* MODAL DINÁMICO */
.fade-scale-enter-active, .fade-scale-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-scale-enter, .fade-scale-leave-to { opacity: 0; transform: scale(0.95); }

.modal-overlay-premium { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(15, 23, 42, 0.85); backdrop-filter: blur(8px); z-index: 1050; display: flex; justify-content: center; align-items: center; padding: 20px; }

.modal-content-premium { width: 100%; max-width: 600px; background: white; max-height: 90vh; display: flex; flex-direction: column; }
.modal-header-premium { flex-shrink: 0; .icon-header-premium { width: 50px; height: 50px; background: rgba(255,255,255,0.1); backdrop-filter: blur(5px); } }
.modal-body-premium { overflow-y: auto; &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: #f8f9fa; } &::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; } &::-webkit-scrollbar-thumb:hover { background: #94a3b8; } }
.btn-close-premium { background: rgba(255,255,255,0.1); border: none; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; cursor: pointer; &:hover { background: white; color: #dc2626; transform: rotate(90deg); } }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-enter, .fade-leave-to { opacity: 0; transform: translateY(-10px); }

.premium-floating { .form-control { border-radius: 12px; border: 1px solid #e2e8f0; padding-top: 1.5rem; &:focus { border-color: #50c026; box-shadow: 0 0 0 4px rgba(80,192,38,0.1); } } label { color: #64748b; font-size: 0.9rem; } }
.premium-input { border: 1px solid #e2e8f0; &:focus { border-color: #50c026; outline: none; box-shadow: 0 0 0 4px rgba(80,192,38,0.1); } }
textarea.premium-input::placeholder,
input.premium-input::placeholder { color: #94a3b8 !important; font-style: italic; font-weight: 400; opacity: 0.6 !important; }
textarea.premium-input, input.premium-input { color: #1e293b; font-weight: 500; }
</style>