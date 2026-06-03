<template>
  <div class="amf-premium-landing bg-amf-dark">
    
   <!-- 1. HERO SECTION -->
   <section class="hero-section" id="inicio">
      <div class="hero-bg-elements">
        <video autoplay muted loop playsinline class="hero-video">
          <source src="recursos/hero-video.mp4" type="video/mp4">
        </video>
        <div class="hero-gradient-overlay"></div>
      </div>

      <div class="container-fluid px-xl-5 h-100 position-relative z-3 d-flex flex-column justify-content-center">
        <div class="row w-100 mx-0">
          
          <div class="col-12 mx-auto text-center">
            
            <div class="reveal-up d-flex justify-content-center w-100">
              <h1 class="fw-black text-white hero-title-fit text-uppercase m-0">
                Asociación Mexicana
              </h1>
            </div>
            <div class="reveal-up delay-1 d-flex justify-content-center w-100">
              <h1 class="fw-black amf-green-text hero-title-fit text-uppercase m-0">
                de Futbolistas Profesionales
              </h1>
            </div>

            <div class="row justify-content-center reveal-up delay-2">
              <div class="col-lg-8">
                <p class="text-white fs-5 mb-5 text-center px-lg-4" style="border-left: 3px solid #3E9452; border-right: 3px solid #3E9452;">
                  Los verdaderos profesionales no pagan por jugar. Ningún club te debe pedir dinero por tu registro, uniformes, transporte, hidratación, ni por nada, esto es ilegal.
                </p>
              </div>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-center gap-3 reveal-up delay-3">
              <button class="btn btn-premium-green px-5 py-3 fw-bold text-uppercase tracking-wider" @click="openModal">
                Explorar Manual
              </button>
              <button class="btn btn-premium-outline px-5 py-3 fw-bold text-uppercase tracking-wider" @click="scrollToSection('contacto')">
                Contacto
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 2. INSTITUCIONES Y LIGAS -->
   <section class="bg-white py-5 shadow-sm position-relative z-3 border-bottom border-light overflow-hidden">
      <div class="container-fluid px-4 px-xl-5">
        <div class="row text-center g-4 align-items-center justify-content-center">
          
          <div class="col-xl-auto col-lg-4 col-md-6 border-end-xl px-xl-4">
            <p class="text-muted small fw-bold tracking-widest mb-4">MIEMBROS</p>
            <img src="recursos/logo_aif.png" alt="AIF" class="circle-logo mx-auto">
          </div>
          
          <div class="col-xl-auto col-lg-8 col-md-12 border-end-xl px-xl-4">
            <p class="text-muted small fw-bold tracking-widest mb-4">INSTITUCIONES</p>
            <div class="d-flex justify-content-center gap-3 gap-md-4 flex-wrap">
              <img src="recursos/logo_fifa.png" alt="FIFA" class="circle-logo">
              <img src="recursos/logo_seleccion.png" alt="FMF" class="circle-logo">
              <img src="recursos/logo_concacaf.png" alt="Concacaf" class="circle-logo">
            </div>
          </div>
          
          <div class="col-xl-auto col-lg-8 col-md-12 border-end-xl px-xl-4">
            <p class="text-muted small fw-bold tracking-widest mb-4">LIGAS</p>
            <div class="d-flex justify-content-center gap-3 gap-md-4 flex-wrap">
              <img src="recursos/logo_ligamx.png" alt="Liga MX" class="circle-logo">
              <img src="recursos/logo_ligaexpansion.png" alt="FMF" class="circle-logo">
              <img src="recursos/logo_ligapremier.png" alt="Concacaf" class="circle-logo">
              <img src="recursos/logo_ligatdp.png" alt="Concacaf" class="circle-logo">
              <img src="recursos/logo_ligamxfemenil.png" alt="Concacaf" class="circle-logo">
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 3. SECCIÓN NOSOTROS -->
    <section id="nosotros" class="bg-light py-6 relative-container">
      <div class="container py-5">
        
        <!-- BLOQUE 1: NOSOTROS -->
        <div class="row mb-6">
          <div class="col-lg-4 d-none d-lg-block">
            <div class="sticky-title-wrapper reveal-up">
              <h2 class="display-4 fw-black amf-green-text mb-0">NOSOTROS</h2>
              <div class="accent-line mt-4"></div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="d-block d-lg-none mb-5 text-center reveal-up">
              <h2 class="display-4 fw-black amf-green-text mb-0">NOSOTROS</h2>
              <div class="accent-line mx-auto mt-3"></div>
            </div>

            <p class="fs-5 text-secondary text-justify mb-5 fw-light lh-lg reveal-up delay-1">
              En febrero del 2017 comenzó a gestarse la <strong class="amf-green-text fw-bold">Asociación Mexicana de Futbolistas</strong> (AMFpro), cuando por iniciativa de Jugadores emblema a nivel nacional en activo, así como ex Futbolistas, se llevó a cabo la primera mesa de trabajo que sentaría las bases para la conformación de la AMFpro como organismo independiente Rafael Márquez, Óscar Pérez, Oribe Peralta, Carlos Salcido, Christian Giménez, Paulo Da Silva, Javier Hernández, Andrés Guardado, Guillermo Ochoa y Yasser Corona, junto con los ex Jugadores Álvaro Ortiz y Edson Zwaricz delinearon la primera etapa en la que entre las principales acciones son la primera reunión formal con los capitanes y representantes de los clubes de la Liga MX y Ascenso MX.
            </p>
             <div class="d-inline-flex align-items-center mb-4 bg-light px-3 py-2 rounded-pill shadow-sm border border-light">
                <i class="material-icons text-success me-2 fs-5">campaign</i>
                <span class="text-uppercase tracking-wider text-muted fw-bold small mb-0" style="font-size: 0.75rem;">Presentación de la AMFPRO ante prensa</span>
            </div>
            <div class="reveal-up delay-2">
              <div class="swiper swiper-nosotros rounded-4 shadow-sm">
                  <div class="swiper-wrapper">
                      <!-- Convertido a v-for dinámico e interactuable -->
                      <div class="swiper-slide" v-for="(img, index) in imagenesNosotros" :key="index">
                        <img :src="img" :alt="'Nosotros ' + (index + 1)" class="img-fluid rounded-4 swiper-img-clickable" @click="abrirGaleriaNosotros(index)">
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <!-- BLOQUE 2: OBJETIVO REDISEÑADO -->
        <div class="row mb-6">
          <div class="col-lg-4 d-none d-lg-block">
            <div class="sticky-title-wrapper reveal-up">
              <h2 class="display-4 fw-black amf-green-text mb-0">NUESTRO OBJETIVO</h2>
              <div class="accent-line mt-4"></div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="d-block d-lg-none mb-5 text-center reveal-up">
              <h2 class="display-4 fw-black amf-green-text mb-0">NUESTRO OBJETIVO</h2>
              <div class="accent-line mx-auto mt-3"></div>
            </div>

            <!-- Nueva Tarjeta de Objetivo Editorial -->
            <div class="premium-objective-card p-4 p-md-5 rounded-4 bg-white shadow-sm border border-light position-relative overflow-hidden reveal-up">
              <!-- Marca de agua de fondo -->
              <div class="position-absolute top-0 end-0 p-4 opacity-10">
                <!-- <i class="material-icons" style="font-size: 180px; color: #3E9452;">track_changes</i> -->
              </div>
              
              <div class="position-relative z-2">
                <p class="text-secondary text-justify mb-4 lh-lg">Representar y proteger los intereses de las y los Futbolistas profesionales afiliados a la Federación Mexicana de Futbol (FMF) de la Liga MX, Liga MX Femenil, Liga Expansión MX, Liga Premier y Liga TDP, así como Sub 17 y Sub 20, ante los órganos de dirección, de administración, de auditoría, de evaluación de resultados y de justicia deportiva y/o demás órganos competentes y/o comisiones de dicha Asociación Deportiva Nacional, y someterles todos los asuntos relacionados con la actividad de las y los Jugadores profesionales. Asimismo, representar y proteger dichos intereses ante afiliados directos y derivados de la FMF y ante las entidades, autoridades y organismos nacionales e internacionales relacionados con el desarrollo y consolidación del futbol profesional.</p>
                
                <!-- Caja resaltada -->
                <div class="p-4 bg-light rounded-4 border-start border-4" style="border-color: #3E9452 !important;">
                  <p class="amf-green-text fw-bold text-justify mb-0 fs-6 lh-lg">A través de las acciones presentadas, la AMFpro busca fortalecer su dignidad, honorabilidad, integridad, salud, seguridad y libertad, al promover, fomentar y estimular su profesionalización y desarrollo integral.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <!-- BLOQUE 3: CREENCIAS Y VALORES -->
        <div class="row">
          <div class="col-lg-4 d-none d-lg-block">
            <div class="sticky-title-wrapper reveal-up">
              <h2 class="display-4 fw-black amf-green-text mb-0">¿EN QUÉ CREEMOS?</h2>
              <div class="accent-line mt-4"></div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="d-block d-lg-none mb-5 text-center reveal-up">
              <h2 class="display-4 fw-black amf-green-text mb-0">¿EN QUÉ CREEMOS?</h2>
              <div class="accent-line mx-auto mt-3"></div>
            </div>

            <div class="row g-4">
              <!-- Representar y Ser Reconocidos con Hover Premium -->
              <div class="col-md-6 reveal-up">
                <div class="premium-credo-card p-4 rounded-4 bg-white shadow-sm h-100 border border-light">
                  <img src="recursos/nosotros-folder.png" alt="Representar" class="credo-icon mb-4">
                  <h4 class="fw-bold text-dark mb-3" style="color:#50c026 !important;">Misión</h4>
                  <p class="text-secondary text-justify small mb-0 lh-lg">Representar y proteger los intereses de los Futbolistas profesionales en México, a través de la materialización de diversas acciones coordinadas en aras del respeto a su dignidad, honorabilidad, integridad, salud, seguridad y libertad, al promover, fomentar y estimular su profesionalización.</p>
                </div>
              </div>
              <div class="col-md-6 reveal-up delay-1">
                <div class="premium-credo-card p-4 rounded-4 bg-white shadow-sm h-100 border border-light">
                  <img src="recursos/nosotros-flecha.png" alt="Reconocimiento" class="credo-icon mb-4">
                  <h4 class="fw-bold text-dark mb-3" style="color:#50c026 !important;">Visión</h4>
                  <p class="text-secondary text-justify small mb-0 lh-lg">Ser reconocidos como una Asociación confiable y sólida, fomentar la preservación y óptimo desarrollo de los derechos e intereses de las y los Futbolistas profesionales en México, convirtiéndose en un referente a nivel internacional.</p>
                </div>
              </div>

              <!-- DISEÑO PREMIUM PARA VALORES (MINIMALISTA) -->
              <div class="col-12 mt-5">
                <div class="d-flex align-items-center mb-4 reveal-up delay-2">
                  <h6 class="text-uppercase tracking-widest text-muted fw-bold mb-0">Nuestros Valores</h6>
                  <div class="flex-grow-1 border-top ms-3 opacity-25"></div>
                </div>

                <div class="row g-3 g-md-4">
                  <!-- Valor 1 -->
                  <div class="col-6 col-md-4 reveal-up delay-1">
                    <div class="premium-value-card text-center p-4 h-100 bg-white rounded-4 shadow-sm border border-light">
                      <div class="icon-wrapper mx-auto mb-3">
                        <i class="material-icons">handshake</i>
                      </div>
                      <h6 class="fw-bold text-dark mb-0">Respeto</h6>
                    </div>
                  </div>
                  <!-- Valor 2 -->
                  <div class="col-6 col-md-4 reveal-up delay-2">
                    <div class="premium-value-card text-center p-4 h-100 bg-white rounded-4 shadow-sm border border-light">
                      <div class="icon-wrapper mx-auto mb-3">
                        <i class="material-icons">verified</i>
                      </div>
                      <h6 class="fw-bold text-dark mb-0">Compromiso</h6>
                    </div>
                  </div>
                  <!-- Valor 3 -->
                  <div class="col-6 col-md-4 reveal-up delay-3">
                    <div class="premium-value-card text-center p-4 h-100 bg-white rounded-4 shadow-sm border border-light">
                      <div class="icon-wrapper mx-auto mb-3">
                        <i class="material-icons">assignment_turned_in</i>
                      </div>
                      <h6 class="fw-bold text-dark mb-0">Responsabilidad</h6>
                    </div>
                  </div>
                  <!-- Valor 4 -->
                  <div class="col-6 col-md-4 reveal-up delay-4">
                    <div class="premium-value-card text-center p-4 h-100 bg-white rounded-4 shadow-sm border border-light">
                      <div class="icon-wrapper mx-auto mb-3">
                        <i class="material-icons">military_tech</i>
                      </div>
                      <h6 class="fw-bold text-dark mb-0">Liderazgo</h6>
                    </div>
                  </div>
                  <!-- Valor 5 -->
                  <div class="col-6 col-md-4 reveal-up delay-5">
                    <div class="premium-value-card text-center p-4 h-100 bg-white rounded-4 shadow-sm border border-light">
                      <div class="icon-wrapper mx-auto mb-3">
                        <i class="material-icons">balance</i>
                      </div>
                      <h6 class="fw-bold text-dark mb-0">Legalidad</h6>
                    </div>
                  </div>
                  <!-- Valor 6 -->
                  <div class="col-6 col-md-4 reveal-up delay-6">
                    <div class="premium-value-card text-center p-4 h-100 bg-white rounded-4 shadow-sm border border-light">
                      <div class="icon-wrapper mx-auto mb-3">
                        <i class="material-icons">sports_soccer</i>
                      </div>
                      <h6 class="fw-bold text-dark mb-0">Ética &<br>Juego Limpio</h6>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 4. ASESOR DEPORTIVO -->
    <section id="asesor-deportivo" class="bg-amf-dark py-6 position-relative overflow-hidden" style="background: #3E9452;">
      <div class="container py-5 position-relative z-2">
        <div class="row align-items-center">
          
          <div class="col-lg-5 text-center text-lg-start mb-5 mb-lg-0 reveal-up">
            <h6 class="text-white-50 tracking-widest fw-bold mb-3">CONOCE A NUESTRO</h6>
            <h2 class="display-3 fw-black text-white mb-0 lh-1">ASESOR</h2>
            <h2 class="display-4 fw-light text-white mb-5">DEPORTIVO</h2>
            
            <div class="melvin-premium-wrapper mx-auto mx-lg-0 mb-4 position-relative">
              <div class="glow-circle position-absolute top-50 start-50 translate-middle"></div>
              <img src="recursos/melvin-brown.png" alt="Melvin Brown Casados" class="img-fluid position-relative z-2">
            </div>
            
            <h3 class="display-6 fw-bold text-white mb-0">MELVIN BROWN</h3>
            <h4 class="text-white-50 fw-light">CASADOS</h4>
            <div class="mt-5 reveal-up delay-3 text-center text-lg-start">
               <a href="mailto:contacto@amfpro.mx" class="btn btn-outline-light rounded-pill px-4 py-2 me-3 mb-3 mb-sm-0 fw-bold"><i class="material-icons align-middle me-2 fs-5">email</i>contacto@amfpro.mx</a>
               <a href="tel:7286906040" class="btn btn-premium-green rounded-pill px-4 py-2 fw-bold"><i class="material-icons align-middle me-2 fs-5">phone</i>(728) 690 6040</a>
            </div>
          </div>

          <div class="col-lg-6 offset-lg-1">
            <div class="premium-glass-card p-4 p-md-5 mb-4 rounded-4 reveal-up delay-1">
              <div class="d-flex align-items-center mb-4 border-bottom border-light border-opacity-25 pb-3">
                <i class="material-icons text-white bg-success p-2 rounded-3 me-3 fs-3">history</i>
                <h4 class="fw-bold text-white mb-0 tracking-wider">ANTECEDENTES</h4>
              </div>
              <p class="text-white text-justify mb-3 lh-lg">Fue Jugador en los Clubes: Cruz Azul Hidalgo, Cruz Azul, Jaguares de Chiapas, Puebla FC, UAG, Irapuato FC, Mundialista por México en Corea/Japón 2002.</p>
              <p class="text-white text-justify mb-0 lh-lg">En su faceta de Director Técnico formó parte de: Comisión del jugador (actual Asociación Mexicana de Futbolistas), Tecnológico de Monterrey campus Guadalajara, Dorados de Sinaloa (Segunda talentos), Melgar FBC (reserva profesional) en Perú, Equipos de la AMFpro y Cafetaleros de Chiapas (Segunda Premier).</p>
              
            </div>

            <div class="premium-glass-card p-4 p-md-5 rounded-4 reveal-up delay-2">
              <div class="d-flex align-items-center mb-4 border-bottom border-light border-opacity-25 pb-3">
                <i class="material-icons text-white bg-success p-2 rounded-3 me-3 fs-3">work</i>
                <h4 class="fw-bold text-white mb-0 tracking-wider">FUNCIONES</h4>
              </div>
              <p class="text-white text-justify mb-4">Llevar el mensaje de la AMFpro en las visitas a los equipos de:</p>
              <!-- Se reemplazó la imagen única por los logos individuales de las ligas con diseño adaptado -->
              <div class="d-flex flex-wrap gap-2 gap-md-3 mb-4 mt-2">
                <img src="recursos/logo_ligamx.png" alt="Liga MX" class="circle-logo" style="width: 70px; height: 70px; padding: 10px; border-width: 1px;">
                <img src="recursos/logo_ligaexpansion.png" alt="Liga Expansión" class="circle-logo" style="width: 70px; height: 70px; padding: 10px; border-width: 1px;">
                <img src="recursos/logo_ligapremier.png" alt="Liga Premier" class="circle-logo" style="width: 70px; height: 70px; padding: 10px; border-width: 1px;">
                <img src="recursos/logo_ligatdp.png" alt="Liga TDP" class="circle-logo" style="width: 70px; height: 70px; padding: 10px; border-width: 1px;">
                <!-- <img src="recursos/logo_ligamxfemenil.png" alt="Liga MX Femenil" class="circle-logo" style="width: 70px; height: 70px; padding: 10px; border-width: 1px;"> -->
              </div>
              <ul class="premium-list text-white text-justify m-0 p-0 small lh-lg">
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

    <!-- 5. CONVENIOS -->
    <section id="convenios" class="bg-light py-6">
      <div class="container py-5">
        
        <div class="row justify-content-center mb-6 reveal-up">
          <div class="col-lg-8 text-center">
            <h6 class="text-dark fw-bold tracking-widest mb-3">PREPÁRATE FUERA DEL CAMPO</h6>
            <h2 class="display-3 fw-black amf-green-text mb-4 text-uppercase">Convenios Educativos</h2>
            <p class="text-secondary fs-5 mb-5 px-md-5">Ofrecemos opciones para finalizar tu preparatoria, estudios universitarios, maestrías o cursos. Pide informes directamente a nuestra área encargada.</p>
            <a href="mailto:desarrolloeducativo@amfpro.mx" class="btn btn-premium-green btn-lg rounded-pill px-5 py-3 fw-bold shadow">desarrolloeducativo@amfpro.mx</a>
          </div>
        </div>

        <div class="stacking-cards-container">
          
          <!-- TARJETA 1: CRUYFF -->
          <div class="stack-card reveal-up" id="card-1">
            <div class="row g-0 h-100 bg-white rounded-4 shadow-lg overflow-hidden border border-light premium-convenio-card">
              <div class="col-lg-8 p-4 p-md-5 d-flex flex-column justify-content-center">
                <img src="recursos/logo-cruyff.png" alt="Cruyff" class="mb-4 convenio-logo" style="max-height: 60px; width: auto; align-self: flex-start;">
                <h3 class="fw-black text-dark mb-4">Posgrados y cursos en Administración y Negocios del Futbol ONLINE</h3>
                
                <p class="text-secondary text-justify mb-3 small lh-lg">Sus programas de formación han sido diseñados por profesionales de la industria del deporte, enriquecidos por las experiencias personales de profesores y alumnos. Sus programas son singulares, elaborados con base en las necesidades específicas de deportistas y profesionales del deporte.</p>
                <p class="text-secondary text-justify mb-4 small fw-bold">La potente experiencia de aprendizaje que los estudiantes viven es a su vez impulsada por su modelo de aprendizaje que se basa en:</p>
                
                <div class="row g-3">
                    <div class="col-sm-6">
                        <ul class="premium-list-dark small m-0 p-0 text-secondary lh-lg">
                            <li>100% orientado al deporte</li>
                            <li>Centrado en el alumno</li>
                            <li>Basado en el principio de ‘Learning by doing’ (Aprender haciendo)</li>
                            <li>Flexible, diverso y utilizando las últimas tecnologías</li>
                        </ul>
                    </div>
                    <div class="col-sm-6">
                        <ul class="premium-list-dark small m-0 p-0 text-secondary lh-lg">
                            <li>Motivacional, comunicativo y participativo</li>
                            <li>Basado en el principio de ‘Learning by doing’ (Aprender haciendo)</li>
                            <li>Adaptado a la carga de trabajo y disponibilidad de cada individuo</li>
                        </ul>
                    </div>
                </div>
              </div>
              <div class="col-lg-4 text-white p-4 p-md-5 d-flex flex-column justify-content-center align-items-center text-center" style="background-color: #232a5c;">
                <h6 class="tracking-widest fw-bold opacity-75 mb-4">BECAS 2026/2027</h6>
                <div class="w-100 mb-4">
                  <h2 class="display-4 fw-black mb-0">15%</h2>
                  <span class="fw-bold opacity-75 small d-block mt-2">Si realiza el pago en parcialidades.</span>
                </div>
                <div class="w-100 border-top border-light border-opacity-25 pt-4">
                  <h2 class="display-4 fw-black mb-0">20%</h2>
                  <span class="fw-bold opacity-75 small d-block mt-2">Si realiza el pago de contado.</span>
                </div>
              </div>
            </div>
          </div>

          <!-- TARJETA 3: UVN -->
          <div class="stack-card reveal-up" id="card-3">
            <div class="row g-0 h-100 bg-white rounded-4 shadow-lg overflow-hidden border border-light premium-convenio-card">
              <div class="col-lg-8 p-4 p-md-5 d-flex flex-column justify-content-center">
                <img src="recursos/logo-uvn.svg" alt="UVN" class="mb-4 convenio-logo" style="max-height: 50px; width: auto; align-self: flex-start;">
                <h3 class="fw-black text-dark mb-4">Universidad 100% en línea especializada en la gente que trabaja y dispone de muy poco tiempo para otras actividades.</h3>
                <p class="text-secondary text-justify mb-4 small lh-lg">Todos sus programas están diseñados para estudiar solo 20 minutos al día debido a que los alumnos tienen experiencia laboral y solo refuerzan la parte teórica de conceptos que ya manejas en tu día a día de manera práctica. Prepa en 2 o 4 meses. Todo desde tu celular con acceso a Internet, muy práctico y sin tareas.</p>
                <div class="row g-4">
                    <div class="col-sm-6">
                        <h6 class="fw-bold mb-3 border-bottom pb-2" style="color: #A8192E;">Carreras Profesionales (3 años)</h6>
                        <ul class="premium-list-dark small m-0 p-0 text-secondary">
                            <li>Administración de Empresas</li>
                            <li>Mercadotecnia</li>
                            <li>Finanzas</li>
                            <li>Capital Humano</li>
                            <li>Ingeniería Industrial y de Sistemas</li>
                        </ul>
                    </div>
                    <div class="col-sm-6">
                        <h6 class="fw-bold mb-3 border-bottom pb-2" style="color: #A8192E;">Maestrías (18 meses)</h6>
                        <ul class="premium-list-dark small m-0 p-0 text-secondary">
                            <li>Administración y Alta Dirección</li>
                            <li>Dirección Comercial y Mercadotecnia</li>
                        </ul>
                    </div>
                </div>
              </div>
              <div class="col-lg-4 text-white p-4 p-md-5 d-flex flex-column justify-content-center" style="background-color: #A8192E;">
                <h6 class="tracking-widest fw-bold opacity-75 mb-3 text-center">PROGRAMA DE BECAS</h6>
                <p class="small text-center mb-4 px-2" style="line-height: 1.5; opacity: 0.9;">
                  Becas especiales para la edición 2026 / 2027. Todos los asociados de la AMFPro tienen derecho a tres tipos de becas en los programas de: Preparatoria, Licenciaturas y Maestrías.
                </p>
                
                <div class="d-flex justify-content-between align-items-center border-bottom border-light border-opacity-25 pb-3 mb-3">
                    <span class="text-uppercase fw-bold tracking-wider small">Preparatoria</span>
                    <h3 class="fw-black mb-0">30% <small class="fw-normal fs-6 opacity-75">(4 meses)</small></h3>
                </div>
                <div class="d-flex justify-content-between align-items-center border-bottom border-light border-opacity-25 pb-3 mb-3">
                    <span class="text-uppercase fw-bold tracking-wider small">Licenciatura</span>
                    <h3 class="fw-black mb-0">40% <small class="fw-normal fs-6 opacity-75">(3 años)</small></h3>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-uppercase fw-bold tracking-wider small">Maestría</span>
                    <h3 class="fw-black mb-0">50% <small class="fw-normal fs-6 opacity-75">(18 meses)</small></h3>
                </div>
              </div>
            </div>
          </div>

          <!-- TARJETA 2: CONAMAT -->
          <div class="stack-card reveal-up" id="card-2">
            <div class="row g-0 h-100 bg-white rounded-4 shadow-lg overflow-hidden border border-light premium-convenio-card">
              <div class="col-lg-8 p-4 p-md-5 d-flex flex-column justify-content-center">
                <img src="recursos/logo-conamat.png" alt="CONAMAT" class="mb-4 convenio-logo" style="max-height: 60px; width: auto; align-self: flex-start;">
                <h3 class="fw-black text-dark mb-4">Cursar la preparatoria en 4 meses con el <br><span class="fs-5 text-muted fw-normal">“Curso de preparación para certificación en un sólo examen”</span></h3>
                <p class="text-secondary text-justify mb-0 fs-5 lh-lg">Inscríbete al curso 100% en línea y obtén tu certificado con validez oficial de la SEP a través de una plataforma disponible las 24 horas al día y con pagos accesibles.</p>
              </div>
              <div class="col-lg-4 text-white p-4 p-md-5 d-flex flex-column justify-content-center align-items-center text-center position-relative" style="background-color: #003B73;">
                <div class="position-relative z-2">
                  <h6 class="tracking-widest fw-bold text-white opacity-75 mb-4">BECA ÚNICA</h6>
                  <h2 class="display-1 fw-black mb-3">30%</h2>
                  <div class="bg-white px-3 py-3 rounded-3 shadow-sm d-inline-block">
                    <span class="fw-bold small d-block" style="color: #003B73; line-height: 1.4;">Aplica en cualquier modalidad de pago</span>
                    <small class="d-block mt-1" style="color: #666;">(No acumulables a otras promociones)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content2">
            <button class="modal-close-btn" @click="closeModal">&times;</button>
            <iframe src="https://www.amfpro.mx/manual-AMFPro" class="modal-iframe"></iframe>
        </div>
    </div>

    <div v-if="galeriaNosotrosAbierta" class="lightbox-overlay" @click.self="cerrarGaleriaNosotros">
      <button class="btn-close-lightbox" @click="cerrarGaleriaNosotros">&times;</button>
      
      <div class="lightbox-content">
        <!-- Botón Anterior -->
        <button class="btn-nav left" @click="anteriorFotoNosotros">
          <i class="material-icons">chevron_left</i>
        </button>

        <!-- Imagen Actual -->
        <div class="img-container">
          <img :src="imagenesNosotros[fotoNosotrosIndex]" :alt="'Foto ' + (fotoNosotrosIndex + 1)" class="lightbox-img">
        </div>

        <!-- Botón Siguiente -->
        <button class="btn-nav right" @click="siguienteFotoNosotros">
          <i class="material-icons">chevron_right</i>
        </button>
      </div>
    </div>
  </div>

  
</template>

<script>
export default {
    props: ['scrollPosition'],
    data() {
        return {
            isModalOpen: false,
            observer: null,
            galeriaNosotrosAbierta: false,
            fotoNosotrosIndex: 0,
            imagenesNosotros: [
              'recursos/Item.png',
              'recursos/Item-2.png',
              'recursos/Item-3.png',
              'recursos/Item.png',
              'recursos/Item-2.png',
              'recursos/Item-3.png'
            ]
        }
    },
  mounted() {
    const swiperNosotros = new Swiper('.swiper-nosotros', {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: false,
      speed: 600,
      loop: true, // Movimiento infinito
      autoplay: { // Movimiento automático
        delay: 1000,
        disableOnInteraction: false,
      },
      grabCursor: true,
      breakpoints: {
        768: { slidesPerView: 2.2, spaceBetween: 30 },
        1024: { slidesPerView: 3.2, spaceBetween: 30 }
      },
      on: {
        click: (swiper) => {
          // Permite abrir la imagen correcta incluso si Swiper clonó la imagen para el efecto loop
          if (typeof swiper.realIndex !== 'undefined') {
            this.abrirGaleriaNosotros(swiper.realIndex);
          }
        }
      }
    });

    const options = { root: null, rootMargin: '0px', threshold: 0.15 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);

    document.querySelectorAll('.reveal-up, .reveal-mask-wrapper, .reveal-scale-x').forEach(el => {
      this.observer.observe(el);
    });
  },
  beforeDestroy() {
    if (this.observer) this.observer.disconnect();
  },
  methods: {
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    },
    openModal() { this.isModalOpen = true; },
    closeModal() { this.isModalOpen = false; },
    abrirGaleriaNosotros(index) {
      this.fotoNosotrosIndex = index;
      this.galeriaNosotrosAbierta = true;
      document.body.style.overflow = 'hidden';
    },
    cerrarGaleriaNosotros() {
      this.galeriaNosotrosAbierta = false;
      document.body.style.overflow = '';
    },
    siguienteFotoNosotros() {
      if (this.fotoNosotrosIndex < this.imagenesNosotros.length - 1) {
        this.fotoNosotrosIndex++;
      } else {
        this.fotoNosotrosIndex = 0;
      }
    },
    anteriorFotoNosotros() {
      if (this.fotoNosotrosIndex > 0) {
        this.fotoNosotrosIndex--;
      } else {
        this.fotoNosotrosIndex = this.imagenesNosotros.length - 1; 
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use "sass:color";

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Roboto:wght@300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

/* =========================================================
   VARIABLES GLOBALES Y UTILIDADES
   ========================================================= */

.amf-premium-landing { 
  font-family: 'Roboto', sans-serif !important; 
  overflow-x: hidden; 
  background-color: #0d2113; 
  
  p, span, div, a, li, ul, button {
    font-family: 'Roboto', sans-serif !important;
  }
}

h1, h2, h3, h4, h5, h6, .fw-black { 
  font-family: 'Montserrat', sans-serif !important; 
  font-weight: 900; 
}

.hero-title-fit {
  font-size: clamp(1.2rem, 3.5vw, 4.5rem);
  white-space: nowrap;
  line-height: 1.3;
}

$amf-green: #50c026; /* Verde Institucional respetado */
$amf-dark: #3E9452;
// $amf-dark: #112a18;
$amf-red: #cf152d;

.amf-green-text { color: $amf-green !important; }
.tracking-wider { letter-spacing: 2px; }
.tracking-widest { letter-spacing: 4px; }
.text-justify { text-align: justify; }
.py-6 { padding-top: 6rem; padding-bottom: 6rem; }
.mb-6 { margin-bottom: 5rem; }

.bg-amf-gradient { background: linear-gradient(135deg, #112a18 0%, #3E9452 100%); }

.btn-premium-green {
  background-color: $amf-green; color: white; border: none; border-radius: 50px;
  box-shadow: 0 10px 20px rgba(62, 148, 82, 0.3); transition: all 0.3s ease;
  &:hover { background-color: white; color: $amf-dark; box-shadow: 0 15px 25px rgba(255, 255, 255, 0.2); transform: translateY(-3px); }
}
.btn-premium-outline {
  background-color: transparent; color: white; border: 2px solid white; border-radius: 50px;
  transition: all 0.3s ease;
  &:hover { background-color: white; color: $amf-dark; transform: translateY(-3px); }
}

/* =========================================================
   1. HERO SECTION
   ========================================================= */
.hero-section {
  position: relative; height: 100vh; min-height: 800px; display: flex; align-items: center; overflow: hidden;
  background: linear-gradient(135deg, #0a170d 0%, #173b1f 100%);
}

.hero-bg-elements {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; overflow: hidden;
  .hero-video {
    position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%;
    transform: translate(-50%, -50%); object-fit: cover; opacity: 0.3;
    animation: slowZoom 25s alternate infinite ease-in-out;
  }
  .hero-gradient-overlay { 
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
    background: radial-gradient(circle at center, rgba(13, 33, 19, 0.4) 0%, #0d2113 90%); 
  }
}

@keyframes slowZoom {
  from { transform: translate(-50%, -50%) scale(1); }
  to { transform: translate(-50%, -50%) scale(1.15); }
}

/* =========================================================
   2. INSTITUCIONES Y LIGAS (Circulares)
   ========================================================= */
.circle-logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 15px; 
  background-color: white;
  object-fit: contain;
  transition: all 0.3s ease;
  &:hover { 
    transform: scale(1.1); 
    box-shadow: 0 10px 20px rgba(62, 148, 82, 0.2); 
    border-color: $amf-dark;
  }
}

.partner-logo {
  height: 100px; 
  width: auto; 
  object-fit: contain;
  transition: transform 0.3s ease;
  &:hover { transform: scale(1.05); }
}

@media (min-width: 1200px) {
  .border-end-xl { border-right: 1px solid #eaeaea; }
}

@media (min-width: 768px) {
  .border-end-md { border-right: 1px solid #eaeaea; }
}

/* =========================================================
   3. NOSOTROS (Valores Premium)
   ========================================================= */
.relative-container { position: relative; z-index: 10; }
.sticky-title-wrapper { position: sticky; top: 150px; }
.accent-line { width: 100px; height: 8px; background-color: $amf-green; border-radius: 4px; }

.swiper-nosotros { padding: 20px 5px; }

/* Efecto de lupa interactivo para las imágenes */
.swiper-img-clickable {
  cursor: zoom-in;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
}

/* Tarjetas Representar / Reconocidos unificadas con el nuevo hover verde */
.premium-credo-card { 
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); 
  cursor: default; 
  
  .credo-icon { 
    height: 60px; 
    object-fit: contain; 
    transition: transform 0.4s ease; 
  }
  
  &:hover { 
    transform: translateY(-8px); 
    box-shadow: 0 15px 30px rgba(62, 148, 82, 0.15) !important; 
    border-color: rgba(62, 148, 82, 0.3) !important;
    .credo-icon { transform: scale(1.1) rotate(5deg); } 
  } 
}

/* Tarjeta Objetivo Premium */
.premium-objective-card {
  transition: all 0.4s ease;
  &:hover {
    box-shadow: 0 15px 30px rgba(0,0,0,0.05) !important;
  }
}

/* Tarjetas Valores Minimalistas */
.premium-value-card {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: default;
  
  .icon-wrapper {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(62, 148, 82, 0.1); 
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    
    i {
      font-size: 2rem;
      color: $amf-green; 
      transition: transform 0.4s ease;
    }
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(62, 148, 82, 0.15) !important; 
    border-color: rgba(62, 148, 82, 0.3) !important;
    
    .icon-wrapper {
      background-color: $amf-green; 
      i {
        color: white; 
        transform: scale(1.1) rotate(5deg);
      }
    }
  }
}

/* =========================================================
   ESTILOS DEL LIGHTBOX (MODAL GALERÍA NOSOTROS)
   ========================================================= */
.lightbox-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.9); backdrop-filter: blur(5px);
  z-index: 10000; display: flex; justify-content: center; align-items: center;
}

.btn-close-lightbox {
  position: absolute; top: 20px; right: 30px; background: transparent; border: none;
  color: white; font-size: 3rem; cursor: pointer; line-height: 1; z-index: 10001;
  transition: transform 0.2s ease;
  &:hover { transform: scale(1.1); color: #50c026; }
}

.lightbox-content {
  position: relative; width: 90vw; max-width: 1000px; height: 80vh;
  display: flex; align-items: center; justify-content: center;

  .btn-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    background: white; color: #50c026; border: none; width: 50px; height: 50px;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.2s ease; z-index: 10;
    
    i { font-size: 30px; }
    &:hover { background: #50c026; color: white; transform: translateY(-50%) scale(1.1); }
    
    &.left { left: -25px; }
    &.right { right: -25px; }
  }

  .img-container {
    position: relative; width: 100%; height: 100%;
    display: flex; flex-direction: column; align-items: center; justify-content: center;

    .lightbox-img {
      max-width: 100%; max-height: 90%; border-radius: 145px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5); object-fit: contain;
      animation: fadeIn 0.4s ease; 
    }

    .lightbox-caption {
      margin-top: 15px; color: white; text-align: center;
      background: rgba(0, 0, 0, 0.5); padding: 10px 20px; border-radius: 20px;
    }
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}

@media (max-width: 768px) {
  .lightbox-content .btn-nav {
    &.left { left: 10px; }
    &.right { right: 10px; }
  }
}

/* =========================================================
   4. ASESOR DEPORTIVO
   ========================================================= */
.melvin-premium-wrapper {
  width: 100%; max-width: 400px;
  .glow-circle { width: 300px; height: 300px; background: radial-gradient(circle, rgba(62, 148, 82, 0.4) 0%, transparent 70%); border-radius: 50%; z-index: 1; }
  img { filter: drop-shadow(0 20px 40px rgba(0,0,0,0.6)); }
}

.premium-glass-card {
  background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05); border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4); transition: transform 0.3s; &:hover { transform: translateY(-5px); }
}

.premium-list, .premium-list-dark { 
  list-style: none !important;
  padding-left: 0;
}

.premium-list li { 
  position: relative; 
  padding-left: 1.8rem; 
  margin-bottom: 1rem; 
  &::before { content: 'verified'; font-family: 'Material Icons' !important; position: absolute; left: 0; top: 0; color: $amf-green; font-size: 1.2rem; } 
}

.premium-list-dark li { 
  position: relative; 
  padding-left: 1.5rem; 
  margin-bottom: 0.8rem; 
  &::before { content: 'check'; font-family: 'Material Icons' !important; position: absolute; left: 0; top: 0; color: $amf-red; font-size: 1.1rem; font-weight: bold; } 
}

/* =========================================================
   5. CONVENIOS
   ========================================================= */
.stacking-cards-container { position: relative; padding-bottom: 10vh; }
.stack-card { position: sticky; margin-bottom: 4rem; }

#card-1 { top: 12vh; }
#card-2 { top: 14vh; }
#card-3 { top: 16vh; }

.premium-convenio-card {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  .convenio-logo {
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(62, 148, 82, 0.2) !important;
    border-color: rgba(62, 148, 82, 0.4) !important;
    
    .convenio-logo {
      transform: scale(1.05);
    }
  }
}

/* =========================================================
   SISTEMA DE ANIMACIONES (REVEAL) 
   ========================================================= */
.reveal-mask-wrapper { overflow: hidden; padding-bottom: 10px; }
.reveal-mask {
  transform: translateY(100%);
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.is-visible .reveal-mask, .is-visible.reveal-mask { transform: translateY(0); clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }

.reveal-up { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
.is-visible .reveal-up, .is-visible.reveal-up { opacity: 1; transform: translateY(0); }

.reveal-scale-x { transform: scaleX(0); transform-origin: left; transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1); }
.is-visible .reveal-scale-x, .is-visible.reveal-scale-x { transform: scaleX(1); }

.delay-1 { transition-delay: 0.15s; }
.delay-2 { transition-delay: 0.3s; }
.delay-3 { transition-delay: 0.45s; }
.delay-4 { transition-delay: 0.6s; }
.delay-5 { transition-delay: 0.75s; }
.delay-6 { transition-delay: 0.9s; }

/* =========================================================
   MODALES Y GLOBALES
   ========================================================= */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.9); backdrop-filter: blur(10px); display: flex; justify-content: center; align-items: center; z-index: 9999; }
.modal-content2 { width: 90vw; height: 90vh; max-width: 1200px; background: transparent; border-radius: 15px; position: relative; overflow: hidden; }
.modal-close-btn { position: absolute; top: 15px; right: 20px; background-color: $amf-green; color: white; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 2rem; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 10; transition: transform 0.2s ease; line-height: 0; padding-bottom: 4px; }
.modal-close-btn:hover { transform: scale(1.1); background-color: white; color: $amf-dark; }
.modal-iframe { width: 100%; height: 100%; border: none; display: block; margin-top: 0; border-radius: 15px; }

/* Responsive adjustments */
@media (max-width: 991px) {
  .hero-section { min-height: 100vh; }
  .display-1 { font-size: 3.5rem; }
  .display-4 { font-size: 2.5rem; }
  
  .stack-card { position: relative; top: 0 !important; margin-bottom: 2rem; }
  .sticky-title-wrapper { position: relative; top: 0; margin-bottom: 2rem; text-align: center; }
}

@media (min-width: 1200px) {
    .display-4 { font-size: 2.5rem; }
}
</style>