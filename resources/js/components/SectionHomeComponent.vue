<template>
    <div>
        <section class="section-home position-relative" :class="animStep" id="inicio">
        <div class="container py-3 position-relative" style="z-index: 2;height: 750px;">
            <div class="d-block d-md-none text-center pt-4 m-4">
                <h1 class="hero-title fw-bolder mb-3">
                    <span class="text-white">AMF</span><span class="amf-green-text-2">PRO</span>
                </h1>
                <p class="hero-description text-white mb-3 px-3 text-center">
                    Conoce a tu Asociación y lo que tiene para ti. Tu afiliación con nosotros es directa al contar con el registro en la Federación Mexicana de Futbol.
                </p>
                <p class="hero-description text-white mb-4 px-3 text-center">
                    Los verdaderos profesionales no pagan por jugar. Ningún club te debe pedir dinero por tu registro, uniformes, transporte, hidratación, ni por nada, esto es ilegal.
                </p>
                
                <div class="row gx-3 justify-content-center px-4 mb-4">
                    <div class="col-6">
                        <button class="btn btn-amf-accent fw-bold text-white w-100 py-2" type="button" @click="openModal">MANUAL</button>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-amf-accent fw-bold text-white w-100 py-2" @click="scrollToSection('contacto')">CONTACTO</button>
                    </div>
                </div>
            </div>
            <div class="row mt-lg-4 pt-lg-4">
            
            <div class="col-12 col-md-6 text-start pe-md-5 mb-5 mb-md-0 hero-col-izq d-none d-md-block">
                <h1 class="hero-title fw-bolder mb-4">
                <span class="text-white">AMF</span><span class="amf-green-text-2">PRO</span>
                </h1>
                <p class="hero-description text-white mb-4 pe-lg-4">
                Conoce a tu Asociación y lo que tiene para ti. Tu afiliación con nosotros es directa al contar con el registro en la Federación Mexicana de Futbol.
                </p>
                <button class="btn btn-amf-accent fw-bold text-white px-4 py-2" type="button" @click="openModal">MANUAL</button>
            </div>
            
            <div class="col-12 col-md-6 text-start ps-md-5 pt-md-3 hero-col-der">
                <div class="d-none d-md-block">
                    <p class="hero-description text-white mb-4 pe-lg-4 mt-4">
                        Los verdaderos profesionales no pagan por jugar. Ningún club te debe pedir dinero por tu registro, uniformes, transporte, hidratación, ni por nada, esto es ilegal.
                    </p>
                    <button class="btn btn-amf-accent fw-bold text-white px-4 py-2" @click="scrollToSection('contacto')">CONTACTO</button>
                </div>
                <div class="d-none d-lg-flex flex-nowrap align-items-start mt-5 pt-3 logos-wrapper">
                  
                  <div class="instituciones-container me-5 box-miembros">
                      <h6 class="text-white fw-bold mb-4 ms-3">MIEMBROS</h6>
                      <div class="d-flex gap-4 ms-3">
                          <div class="logo-col text-center">
                              <div class="logo-circle shadow-glow">
                                  <img src="recursos/aif.png" alt="Miembro">
                              </div>
                              <div class="linea-punteada" style="height: 108px;"></div>
                          </div>
                      </div>
                  </div>

                  <div class="instituciones-container">
                      <h6 class="text-white fw-bold mb-4 ms-3">INSTITUCIONES</h6>
                      <div class="d-flex gap-4 ms-3">
                          <div class="logo-col text-center">
                          <div class="logo-circle shadow-glow">
                              <img src="recursos/fifa.png" alt="FIFA">
                          </div>
                          <div class="linea-punteada" style="height: 220px;"></div>
                          </div>

                          <div class="logo-col text-center">
                          <div class="logo-circle shadow-glow">
                              <img src="recursos/fmf.png" alt="FMF">
                          </div>
                          <div class="linea-punteada" style="height: 294px;"></div>
                          </div>

                          <div class="logo-col text-center">
                          <div class="logo-circle shadow-glow">
                              <img src="recursos/concacaf.png" alt="Concacaf">
                          </div>
                          <div class="linea-punteada" style="height: 366px;"></div>
                          </div>
                      </div>
                  </div>

                </div>
              </div>
            </div>
        </div>
        <div class="container d-block d-lg-none py-5 mobile-tablet-logos" style="z-index: 10; position: relative;">
            <div class="row g-4 justify-content-center">
                
                <div class="col-11">
                    <div class="logo-card-glass">
                        <h6>MIEMBROS</h6>
                        <div class="logo-grid ligas-grid">
                            <img src="recursos/distintos_miembros.png" class="img-fluid" alt="AIF">
                            <!-- <div class="logo-item"><img src="recursos/distintos_miembros.png" alt="AIF"></div> -->
                        </div>
                    </div>
                </div>

                <div class="col-11">
                    <div class="logo-card-glass ligas-grid">
                        <h6>INSTITUCIONES</h6>
                        <div class="logo-grid ligas-grid">
                            <img src="recursos/distintas_instituciones.png" class="img-fluid" alt="FIFA">
                            <!-- <div class="logo-item"><img src="recursos/fmf.png" alt="FMF"></div>
                            <div class="logo-item"><img src="recursos/concacaf.png" alt="CONCACAF"></div> -->
                        </div>
                    </div>
                </div>

                <div class="col-11">
                    <div class="logo-card-glass">
                        <h6>NUESTRAS LIGAS</h6>
                        <div class="logo-grid ligas-grid">
                            <img src="recursos/distintas_ligas.png" class="img-fluid" alt="Ligas AMFpro">
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="nosotros-sticky-wrapper" id="nosotros">
            <div class="nosotros-panel bg-white shadow-lg">
            <div class="p-5">
                
                <div class="section-wrapper mb-5">
                <div class="row align-items-stretch">
                    <div class="col-md-6 d-flex align-items-center">
                    <h2 class="amf-green-text fw-bolder display-4 mb-0" style="font-size: clamp(2.5rem, 5vw, 3rem) !important;">NOSOTROS</h2>
                    </div>
                    <div class="col-md-6 border-start-custom ps-4">
                    <p class="text-secondary text-justify">
                        En febrero del 2017 comenzó a gestarse la <strong class="amf-green-text-2">Asociación Mexicana de Futbolistas</strong> (AMFpro), cuando por iniciativa de Jugadores emblema a nivel nacional en activo, así como ex Futbolistas, se llevó a cabo la primera mesa de trabajo que sentaría las bases para la conformación de la AMFpro como organismo independiente Rafael Márquez, Óscar Pérez, Oribe Peralta, Carlos Salcido, Christian Giménez, Paulo Da Silva, Javier Hernández, Andrés Guardado, Guillermo Ochoa y Yasser Corona, junto con los ex Jugadores Álvaro Ortiz y Edson Zwaricz delinearon la primera etapa en la que entre las principales acciones son la primera reunión formal con los capitanes y representantes de los clubes de la Liga MX y Ascenso MX.
                    </p>
                    </div>
                </div>
                
                <div class="row mt-4">
                    <div class="col-12">
                    <div class="swiper swiper-nosotros">
                        <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="slide-inner">
                            <img src="recursos/Item.png" alt="Nosotros 1">
                            
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-inner">
                            <img src="recursos/Item-2.png" alt="Nosotros 2">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-inner">
                            <img src="recursos/Item-3.png" alt="Nosotros 3">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-inner">
                            <img src="recursos/Item.png" alt="Nosotros 4">
                            
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-inner">
                            <img src="recursos/Item-2.png" alt="Nosotros 5">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-inner">
                            <img src="recursos/Item-3.png" alt="Nosotros 6">
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <h3 class="amf-green-text-2 text-center my-5">Presentación de la <br> <strong>AMFPRO</strong> ante prensa</h3>

                <div class="section-wrapper mb-5">
                <div class="row align-items-stretch">
                    <div class="col-md-6 d-flex align-items-center">
                    <h2 class="amf-green-text fw-bolder display-4" style="font-size: clamp(2.5rem, 5vw, 3rem) !important;">OBJETIVO</h2>
                    </div>
                    <div class="col-md-6 border-start-custom ps-4">
                    <div class="text-secondary text-justify">
                        <p>Representar y proteger los intereses de las y los Futbolistas profesionales afiliados a la Federación Mexicana de Futbol (FMF) de la Liga MX, Liga MX Femenil, Liga Expansión MX, Liga Premier y Liga TDP, así como Sub 17 y Sub 20, ante los órganos de dirección, de administración, de auditoría, de evaluación de resultados y de justicia deportiva y/o demás órganos competentes y/o comisiones de dicha Asociación Deportiva Nacional, y someterles todos los asuntos relacionados con la actividad de las y los Jugadores profesionales. Asimismo, representar y proteger dichos intereses ante afiliados directos y derivados de la FMF y ante las entidades, autoridades y organismos nacionales e internacionales relacionados con el desarrollo y consolidación del futbol profesional.</p>
                        <p>A través de las acciones presentadas, la AMFpro busca fortalecer su dignidad, honorabilidad, integridad, salud, seguridad y libertad, al promover, fomentar y estimular su profesionalización y desarrollo integral.</p>
                    </div>
                    </div>
                </div>
                </div>

                <div class="creemos-section text-center mt-5">
                <h2 class="amf-green-text fw-bolder mb-5">¿EN QUÉ CREEMOS?</h2>
                <div class="row g-4">
                    <div class="col-md-4">
                    <img src="recursos/nosotros-folder.png" class="mb-3 icon-nosotros" alt="Representar" style="height: 140px;">
                    <p class="x-small text-secondary text-justify">Representar y proteger los intereses de los Futbolistas profesionales en México, a través de la materialización de diversas acciones coordinadas en aras del respeto a su dignidad, honorabilidad, integridad, salud, seguridad y libertad, al promover, fomentar y estimular su profesionalización.</p>
                    </div>
                    <div class="col-md-4">
                    <img src="recursos/nosotros-flecha.png" class="mb-3 icon-nosotros" alt="Ser reconocidos" style="height: 140px;">
                        <p class="x-small text-secondary text-justify">Ser reconocidos como una Asociación confiable y sólida, fomentar la preservación y óptimo desarrollo de los derechos e intereses de las y los Futbolistas profesionales en México, convirtiéndose en un referente a nivel internacional.</p>
                    </div>
                    <div class="col-md-4">
                    <img src="recursos/nosotros-manos.png" class="mb-3 icon-nosotros" alt="Valores" style="height: 140px;">
                    <ul class="text-start x-small text-secondary list-unstyled">
                        <li>• Respeto</li>
                        <li>• Compromiso</li>
                        <li>• Responsabilidad</li>
                        <li>• Liderazgo</li>
                        <li>• Legalidad</li>
                        <li>• Ética</li>
                        <li>• Juego Limpio</li>
                    </ul>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
        <div class="panel-blanco-derecho" id="asesor-deportivo">
            <div class="scroll-container">
            
            <div class="header-asesor">
                <div class="linea-superior"></div>
                <h2 class="titulo-asesor">
                <span class="bold">ASESOR</span><br>
                <span class="light">DEPORTIVO</span>
                </h2>
                
                <div class="imagen-asesor-wrapper">
                <img src="recursos/melvin-brown.png" alt="Melvin Brown Casados" class="imagen-asesor">
                </div>

                <h3 class="nombre-asesor">MELVIN BROWN<br>CASADOS</h3>
            </div>

            <div class="timeline-asesor">
                <div class="linea-central"></div>
                
                <div class="timeline-row">
                <div class="timeline-left">
                    <h4 class="seccion-titulo">ANTECEDENTES</h4>
                </div>
                <div class="timeline-dot"></div>
                <div class="timeline-right">
                    <p>Fue Jugador en los Clubes: Cruz Azul Hidalgo, Cruz Azul, Jaguares de Chiapas, Puebla FC, UAG, Irapuato FC, Mundialista por México en Corea/Japón 2002.</p>
                    <p>En su faceta de Director Técnico formó parte de: Comisión del jugador (actual Asociación Mexicana de Futbolistas), Tecnológico de Monterrey campus Guadalajara, Dorados de Sinaloa (Segunda talentos), Melgar FBC (reserva profesional) en Perú, Equipos de la AMFpro y Cafetaleros de Chiapas (Segunda Premier).</p>
                </div>
                </div>

                <div class="timeline-row">
                <div class="timeline-left">
                    <h4 class="seccion-titulo">FUNCIONES</h4>
                </div>
                <div class="timeline-dot"></div>
                <div class="timeline-right">
                    <p>Llevar el mensaje de la AMFpro en las visitas a los equipos de</p>
                    <div class="logos-ligas-pequenos">
                    <img src="recursos/grupo-ligas.png" alt="Ligas">
                    </div>
                    <ul>
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
                
                <div class="timeline-dot-end"></div>
            </div>

            <div class="footer-asesor">
                <h2 class="dudas-titulo">¿Tienes dudas?</h2>
                <p class="contacto-texto">
                Comunícate con nosotros para más información:<br>
                <span class="negrita">Tel.</span> <span class="verde">(728) 690 6040</span> <span class="negrita">ó escríbenos al</span><br>
                <span class="negrita">correo</span> <span class="verde">contacto@amfpro.mx</span>
                </p>
            </div>

            </div>
        </div>

        <div class="panel-blanco-izquierdo" id="convenios">
            <div class="scroll-container">
            <div class="header-convenios">
                <h2 class="titulo-rojo">CONVENIOS<br>EDUCATIVOS</h2>
            </div>

            <div class="timeline-convenios">
                <div class="linea-central-roja"></div>

                <div class="convenio-row intro-row">
                <div class="col-izq text-left">
                    <p>La Asociación Mexicana de Futbolistas te ofrece distintas opciones para continuar preparándote fuera del campo, con opciones para finalizar tu preparatoria, estudios universitarios, maestrías o cursos y diplomados, checa nuestros actuales convenios y pide informes vía correo electrónico:</p>
                </div>
                <div class="punto-rojo"></div>
                <div class="col-der text-center" style="display: flex; align-items: center; justify-content: center;">
                    <a href="mailto:desarrolloeducativo@amfpro.mx" class="btn-correo-rojo">desarrolloeducativo@amfpro.mx</a>
                </div>
                </div>

                <div class="convenio-logo-center">
                <img src="recursos/logo-cruyff.png" alt="Cruyff Institute">
                <p class="cita-roja">Los deportistas tienen grandes cualidades.<br>Son personas comprometidas, con afán de<br>superación y orientadas a objetivos.</p>
                <p class="autor-cita">Johan Cruyff, fundador</p>
                </div>

                <div class="convenio-row">
                <div class="col-izq text-left">
                    <p>Posgrados y cursos en Administración y Negocios del Futbol ONLINE</p>
                    <p>Sus programas de formación han sido diseñados por profesionales de la industria del deporte, enriquecidos por las experiencias personales de profesores y alumnos. Sus programas son singulares, elaborados con base en las necesidades específicas de deportistas y profesionales del deporte. La potente experiencia de aprendizaje que los estudiantes viven es a su vez impulsada por su modelo de aprendizaje que se basa en:</p>
                    <ul>
                    <li>100% orientado al deporte</li>
                    <li>Centrado en el alumno</li>
                    <li>Basado en el principio de ‘Learning by doing’ (Aprender haciendo)</li>
                    <li>Flexible, diverso y utilizando las últimas tecnologías</li>
                    <li>Motivacional, comunicativo y participativo</li>
                    <li>Adaptado a la carga de trabajo y disponibilidad de cada individuo</li>
                    </ul>
                </div>
                <div class="col-der">
                    <div class="beca-card mixta">
                    <div class="beca-header">
                        <p>Becas especiales para<br>la edición<br><span class="bold-rojo">2026 / 2027</span></p>
                        <p class="texto-chico">Todos los asociados de la AMFPro tienen derecho a dos tipos de becas en la matrícula del Máster Internacional en Negocios y Administración del Fútbol (MINAF).</p>
                    </div>
                    <div class="beca-body">
                        <h4>PORCENTAJE<br>DE BECAS</h4>
                        <div class="porcentaje-item">
                        <span class="numero">15 %</span>
                        <span class="condicion">Si realiza el pago<br>en <strong>parcialidades.</strong></span>
                        </div>
                        <div class="porcentaje-item">
                        <span class="numero">20 %</span>
                        <span class="condicion">Si realiza el pago<br>de <strong>contado.</strong></span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div class="convenio-logo-center">
                <img src="recursos/logo-conamat.png" alt="CONAMAT">
                </div>

                <div class="convenio-row">
                <div class="col-izq text-left">
                    <p>Cursar la preparatoria en 4 meses con el "Curso de preparación para certificación en un solo examen".</p>
                    <p>Inscríbete al curso 100% en línea y obtén tu certificado con validez oficial de la SEP a través de una plataforma disponible las 24 horas al día y con pagos accesibles.</p>
                </div>
                <div class="col-der">
                    <div class="beca-card solida">
                    <h4>PORCENTAJE DE<br>BECA</h4>
                    <div class="porcentaje-item center-content">
                        <span class="numero-grande">30 %</span>
                        <span class="condicion">Aplica en <strong>cualquier</strong><br>modalidad de pago</span>
                    </div>
                    <p class="legales">No son acumulables a otras promociones.</p>
                    </div>
                </div>
                </div>

                <div class="convenio-logo-center">
                <img src="recursos/logo-uvn.svg" alt="UVN">
                </div>

                <div class="convenio-row">
                <div class="col-izq text-left">
                    <p>Universidad 100% en línea especializada en la gente que trabaja y dispone de muy poco tiempo para otras actividades.</p>
                    <p>Todos sus programas están diseñados para estudiar solo 20 minutos al día debido a que los alumnos tienen experiencia laboral y solo refuerzan la parte teórica de conceptos que ya manejas en tu día a día de manera práctica.</p>
                    <p>Prepa en 2 o 4 meses. Todo desde tu celular con acceso a Internet, muy práctico y sin tareas.</p>
                    <p>Carreras Profesionales: Todas duran 3 años:</p>
                    <ul>
                    <li>Administración de Empresas</li>
                    <li>Mercadotecnia</li>
                    <li>Finanzas</li>
                    <li>Capital Humano</li>
                    <li>Ingeniería Industrial y de Sistemas</li>
                    </ul>
                    <p>Maestrías todas duran 18 meses:</p>
                    <ul>
                    <li>Maestría en Administración y Alta Dirección</li>
                    <li>Maestría en Dirección Comercial y Mercadotecnia</li>
                    </ul>
                </div>
                <div class="col-der">
                    <div class="beca-card mixta mixta-larga">
                    <div class="beca-header">
                        <p>Becas especiales para<br>la edición<br><span class="bold-rojo">2026 / 2027</span></p>
                        <p class="texto-chico">Todos los asociados de la AMFPro tienen derecho a tres tipos de becas en los programas de:<br><br>• Preparatoria<br>• Licenciaturas<br>• Maestrías</p>
                    </div>
                    <div class="beca-body">
                        <h4>PORCENTAJE<br>DE BECAS</h4>
                        <div class="porcentaje-item">
                        <span class="numero">30 %</span>
                        <span class="condicion">Preparatoria (4 meses)</span>
                        </div>
                        <div class="porcentaje-item">
                        <span class="numero">40 %</span>
                        <span class="condicion">Licenciatura (3 años)</span>
                        </div>
                        <div class="porcentaje-item">
                        <span class="numero">50 %</span>
                        <span class="condicion">Maestría (18 meses)</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <!-- <div class="convenio-logo-center">
                <img src="recursos/logo-mbp.png" alt="MBP">
                </div>

                <div class="convenio-row">
                <div class="col-izq text-left">
                    <p>MBP es una academia de fútbol y consultoría en España con disponibilidad ONLINE, para cursos en los campos de: Alto rendimiento, Escultismo y Fútbol juvenil.</p>
                    <ul>
                    <li>Mejora tus conocimientos y conviértete en un experto en fútbol</li>
                    <li>Cursos de 6 semanas a 9 meses en nuestros másteres</li>
                    </ul>
                </div>
                <div class="col-der">
                    <div class="beca-card solida">
                    <h4>PORCENTAJE DE<br>BECA</h4>
                    <div class="porcentaje-item center-content">
                        <span class="numero-grande">25 %</span>
                        <span class="condicion">Aplica en <strong>cualquier</strong><br>modalidad de pago</span>
                    </div>
                    <p class="legales">No son acumulables a otras promociones.</p>
                    </div>
                </div>
                </div> -->
                
                <div class="linea-fin-roja"></div>

            </div>
            </div>
        </div>
        <div class="field-background-container">
            <img src="recursos/cancha-porteria.svg" class="field-lines-bg cancha-1" alt="Líneas de Cancha">
            
            <img src="recursos/cancha-ligas.svg" alt="Líneas de Cancha 2" class="field-lines-bg cancha-2 svg-cancha-grande">
            <img src="recursos/cancha-sin-ligas.svg" alt="Líneas de Cancha 3" class="field-lines-bg cancha-3 svg-cancha-grande">
            <img src="recursos/flechas-blancas.svg" alt="Flechas Tácticas" class="field-lines-bg flechas-tacticas svg-flechas">
            
            <img src="recursos/porteria-balon-media.svg" alt="Líneas de Cancha 4" class="field-lines-bg cancha-4 svg-cancha-4">
            <img src="recursos/cancha-porteria-atras.svg" alt="Líneas de Cancha 5" class="field-lines-bg cancha-5 svg-cancha-5">
            <img src="recursos/balon.png" class="field-ball-animado" alt="Balón">
        </div>
        </section>
        <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content2">
                <button class="modal-close-btn" @click="closeModal">&times;</button>
                <iframe src="https://www.amfpro.mx/manual-AMFPro" class="modal-iframe"></iframe>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['scrollPosition'],
    data() { 
        return { 
            touchStartY: 0,
            isModalOpen: false,
            isMobile: false
        } 
    },
    computed: {
        animStep() {
            if (this.isMobile) {
                // ==========================================
                // VALORES PARA MÓVIL (Menos de 991px)
                // Aquí los números suelen ser más grandes porque el diseño es más largo
                // ==========================================
                if (this.scrollPosition > 1400) return 'step-6';
                if (this.scrollPosition > 1300) return 'step-5';
                if (this.scrollPosition > 1250) return 'step-4';
                if (this.scrollPosition > 450) return 'step-3';
                if (this.scrollPosition > 150) return 'step-2'; 
                return 'step-1'; 
            } else {
                // ==========================================
                // VALORES ORIGINALES PARA ESCRITORIO
                // ==========================================
                if (this.scrollPosition > 800) return 'step-6';
                if (this.scrollPosition > 750) return 'step-5';
                if (this.scrollPosition > 700) return 'step-4';
                if (this.scrollPosition > 400) return 'step-3';
                if (this.scrollPosition > 150) return 'step-2'; 
                return 'step-1'; 
            }
        }
    },
  watch: {
    animStep(newStep, oldStep) {
      if (newStep !== oldStep) {
        this.$nextTick(() => {
          const panels = ['.nosotros-panel', '.panel-blanco-derecho .scroll-container', '.panel-blanco-izquierdo .scroll-container'];
          panels.forEach(p => {
            const el = document.querySelector(p);
            if (el) el.scrollTop = 0;
          });
        });
      }
    }
  },
  mounted() {
    this.checkIfMobile();
    // 2. Nos quedamos escuchando si el usuario cambia el tamaño de la ventana
    window.addEventListener('resize', this.checkIfMobile);

    window.addEventListener('wheel', this.interceptScroll, { passive: false });
    window.addEventListener('touchstart', this.handleTouchStart, { passive: false });
    window.addEventListener('touchmove', this.interceptTouch, { passive: false });

    const swiperNosotros = new Swiper('.swiper-nosotros', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 15,
      speed: 500, // Velocidad de acomodo
      grabCursor: true,
      
      // REGLA 1: Apagar el loop. El modo infinito con anchos dinámicos rompe Swiper.
      loop: false, 
      
      watchSlidesProgress: true,

      on: {
        // REGLA 2: Swiper nos dice cuánto debe durar la transición.
        // Si estás arrastrando será 0ms (instantáneo), si sueltas será 500ms (suave).
        setTransition(swiper, duration) {
          swiper.slides.forEach(slide => {
            // Le aplicamos la duración exacta calculada por Swiper
            slide.style.transitionDuration = `${duration}ms`;
            
            const inner = slide.querySelector('.slide-inner');
            if (inner) {
              inner.style.transitionDuration = `${duration}ms`;
            }
          });
        }
      }
    });
  },
  beforeDestroy() {
    // Buena práctica: Limpiamos el evento cuando salimos del componente
    window.removeEventListener('resize', this.checkIfMobile);
    
    // ... (tus otros removeEventListener)
  },
  methods: {
    checkIfMobile() {
        // Si el ancho es 991px o menos, es mobile
      this.isMobile = window.innerWidth <= 991; 
    },
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 70; 
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
        console.warn(`No se encontró la sección con el id: ${id}`);
      }
    },
    openModal() {
        this.isModalOpen = true;
    },
    closeModal() {
        this.isModalOpen = false;
    },
    handleTouchStart(e) { this.touchStartY = e.touches[0].clientY; },
    interceptScroll(e) { this.processScrollHijack(e, e.deltaY); },
    interceptTouch(e) {
      const deltaY = this.touchStartY - e.touches[0].clientY;
      this.processScrollHijack(e, deltaY);
      this.touchStartY = e.touches[0].clientY;
    },
    processScrollHijack(e, deltaY) {
      // === NUEVO: LÍMITE DE INTERCEPCIÓN ===
      // Si ya pasamos de los 1300px (ya estamos viendo Talentos, Jurídico, etc.),
      // detenemos la intercepción y dejamos que el scroll sea 100% nativo y libre.
      if (this.scrollPosition > 1300) {
        return; 
      }

      let activePanel = null;
      
      // 1. Identificamos qué panel está activo en este momento
      if (this.animStep === 'step-4') {
        activePanel = document.querySelector('.nosotros-panel');
      } else if (this.animStep === 'step-5') {
        activePanel = document.querySelector('.panel-blanco-derecho .scroll-container');
      } else if (this.animStep === 'step-6') {
        activePanel = document.querySelector('.panel-blanco-izquierdo .scroll-container');
      }

      // 2. Si hay un panel en pantalla, interceptamos el movimiento
      if (activePanel) {
        const isScrollingDown = deltaY > 0;
        
        // Verificamos matemáticamente si el panel ya topó arriba o abajo
        const isAtBottom = activePanel.scrollHeight - activePanel.scrollTop <= activePanel.clientHeight + 1;
        const isAtTop = activePanel.scrollTop <= 0;

        if (isScrollingDown && !isAtBottom) {
           // Si bajamos y el texto aún no termina -> Detenemos página verde, movemos texto
           e.preventDefault(); 
           activePanel.scrollTop += deltaY;
        } else if (!isScrollingDown && !isAtTop) {
           // Si subimos y el texto aún no llega al inicio -> Detenemos página verde, movemos texto
           e.preventDefault(); 
           activePanel.scrollTop += deltaY;
        }
        // Si el texto llegó a su tope (arriba o abajo), la función permite que el scroll
        // de la página fluya libremente al siguiente paso.
      }
    }
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

.section-home { 
  background-color: $amf-dark; 
  position: relative; 
  overflow: hidden;
  height: 1780px;
  
  .hero-title { 
    font-size: clamp(4rem, 6vw, 6rem); 
    letter-spacing: -2px; 
    line-height: 1;
  }
  
  .hero-description {
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.4;
    text-align: left; 
  }

  .btn-amf-accent {
    background-color: $amf-accent;
    border-radius: 6px;
    font-size: 0.9rem;
    transition: transform 0.2s ease, background-color 0.2s;
    &:hover { background-color: darken($amf-accent, 8%); transform: translateY(-2px); }
  }

  .nosotros-panel {
    overflow-y: auto;
    max-height: 100%;
    
    .border-start-custom {
      border-left: 2px solid $amf-accent;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: -6px;
        top: 0;
        width: 10px;
        height: 10px;
        background-color: $amf-accent;
        border-radius: 50%;
      }
    }

    .gallery-wrapper img {
      width: 32%;
      height: 200px;
      object-fit: cover;
      &.rounded-pill-custom { border-radius: 100px; }
      &.rounded-custom { border-radius: 20px; }
    }

    .text-justify {
      text-align: justify;
      font-size: 0.95rem;
    }
  }

  .nosotros-sticky-wrapper {
    position: fixed;
    top: 8%;
    left: 0;
    bottom: 29%;
    width: 50%; 
    height: 100vh;
    z-index: 100;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.8s ease-in-out;
    pointer-events: none;
    overflow: hidden;

    .nosotros-panel {
      width: 100%;
      height: 100%;
      border-radius: 0;
      background: white;
      /* EL SCROLL AHORA ESTÁ AQUÍ */
      overflow-y: auto; 
      overflow-x: hidden;

      &::-webkit-scrollbar { width: 6px; }
      &::-webkit-scrollbar-thumb { background: $amf-accent; border-radius: 10px; }

      .title-side {
        width: 35%;
        min-height: 100vh;
        h2 { font-size: clamp(2rem, 3vw, 3.5rem); }
      }

      .content-side {
        width: 65%;
        position: relative;
        border-left: 2px solid $amf-accent; 
        &::before {
          content: '';
          position: absolute;
          left: -6px;
          top: 105px;
          width: 10px;
          height: 10px;
          background-color: $amf-accent;
          border-radius: 50%;
          z-index: 10;
        }

        .gallery-wrapper img {
          width: 31%;
          height: 140px;
          object-fit: cover;
          &.rounded-pill-custom { border-radius: 60px; }
          &.rounded-custom { border-radius: 15px; }
        }

        .text-justify { text-align: justify; }
        .x-small { font-size: 0.75rem; }
      }
    }
  }

  .swiper-nosotros {
    width: 100%;
    height: 250px; 
    overflow: visible; 
    padding: 10px 0;

    .swiper-slide {
      width: 130px; 
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      
      .slide-inner {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        overflow: hidden;
        transform-origin: center;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &.swiper-slide-active {
        width: 300px;
        .slide-inner {
          border-radius: 20px;
          transform: scale(1);
        }
      }
      &:not(.swiper-slide-active) .slide-inner {
        transform: scale(0.85); 
        opacity: 0.6;
      }
    }
  }

  .panel-blanco-derecho {
    position: fixed;
    bottom: 0%;
    left: 50%;
    width: 50%;
    height: 100vh; /* Ocupa toda la altura de la pantalla */
    background-color: white;
    z-index: 10;
    
    /* Animación de entrada */
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: none; /* Desactivado por defecto */

    /* El contenedor que lleva el Scroll */
    .scroll-container {
      height: 100%;
      width: 100%;
      overflow-y: auto; /* Habilita el scroll interno */
      overflow-x: hidden;
      padding: 60px 40px;
      box-sizing: border-box;

      /* Estilo del Scrollbar (Opcional, para que se vea limpio) */
      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }
      &::-webkit-scrollbar-thumb {
        background: #50c026; 
        border-radius: 10px;
      }
    }

    /* --- HEADER --- */
    .header-asesor {
      text-align: center;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      .linea-superior {
        width: 1px;
        height: 60px;
        background-color: #50c026;
        margin-bottom: 20px;
      }

      .titulo-asesor {
        position: absolute;
        left: 20px;
        top: 40px;
        text-align: left;
        color: #50c026;
        font-size: 1.8rem;
        line-height: 1.1;
        .bold { font-weight: 800; }
        .light { font-weight: 400; }
      }

      .imagen-asesor-wrapper {
        position: relative;
        z-index: 2;
        opacity: 0; /* Para la animación del step-5 */
        transform: scale(0.8) translateY(30px);
        transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        
        img {
          width: 260px;
          object-fit: contain;
        }
      }

      .nombre-asesor {
        color: #50c026;
        font-size: 1.8rem;
        font-weight: 800;
        margin-top: 15px;
        text-align: center;
        line-height: 1.2;
      }
    }

    /* --- LÍNEA DE TIEMPO (CUERPO) --- */
    .timeline-asesor {
      position: relative;
      margin-top: 40px;
      padding-bottom: 20px;

      .linea-central {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 1px;
        background-color: #50c026;
        transform: translateX(-50%);
        z-index: 1;
      }

      .timeline-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 40px;
        position: relative;
        z-index: 2;
      }

      .timeline-left {
        width: 45%;
        text-align: right;
        padding-right: 20px;

        .seccion-titulo {
          color: #50c026;
          font-weight: 800;
          font-size: 1.2rem;
          margin-top: -5px; /* Alinea con el punto */
        }
      }

      .timeline-dot {
        width: 8px;
        height: 8px;
        background-color: #50c026;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
      }

      .timeline-right {
        width: 45%;
        text-align: left;
        padding-left: 20px;

        p {
          font-size: 0.85rem;
          color: #333;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .logos-ligas-pequenos img {
          width: 80%;
          margin-bottom: 15px;
        }

        ul {
          padding-left: 15px;
          list-style-type: disc;
          
          li {
            font-size: 0.85rem;
            color: #333;
            margin-bottom: 10px;
            line-height: 1.4;
          }
        }
      }

      .timeline-dot-end {
        width: 6px;
        height: 6px;
        background-color: #50c026;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
    }

    /* --- FOOTER --- */
    .footer-asesor {
      text-align: center;
      margin-top: 60px;
      padding-top: 30px;

      .dudas-titulo {
        color: #50c026;
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 15px;
      }

      .contacto-texto {
        font-size: 0.9rem;
        color: #333;
        line-height: 1.6;

        .negrita { font-weight: bold; }
        .verde { color: #50c026; font-weight: bold; }
      }
    }
  }

  .panel-blanco-izquierdo {
    position: relative;
    left: 0;
    top: 6%;
    width: 50%;
    height: 110vh;
    background-color: white;
    z-index: 10;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: none;

    .scroll-container {
      height: 100%;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 60px 40px;
      box-sizing: border-box;

      &::-webkit-scrollbar { width: 6px; }
      &::-webkit-scrollbar-track { background: #f1f1f1; }
      &::-webkit-scrollbar-thumb { background: #cf152d; border-radius: 10px; }
    }

    .header-convenios {
      text-align: center;
      margin-bottom: 40px;
      
      .titulo-rojo {
        color: #cf152d; /* Rojo Institucional */
        font-size: 2.5rem;
        font-weight: 800;
        line-height: 1.1;
      }
    }

    /* =========================================
      LÍNEA DE TIEMPO CONVENIOS
      ========================================= */
    .timeline-convenios {
      position: relative;
      padding-bottom: 50px;

      /* La línea roja que atraviesa todo */
      .linea-central-roja {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 1px;
        background-color: #cf152d;
        transform: translateX(-50%);
        z-index: 1;
      }

      .convenio-row {
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 2;
        margin-bottom: 40px;

        &.intro-row { margin-bottom: 60px; }

        .col-izq, .col-der { width: 45%; }
        
        .col-izq {
          padding-right: 20px;
          p { font-size: 0.85rem; color: #333; margin-bottom: 15px; line-height: 1.5; }
          ul {
            padding-left: 15px; list-style-type: disc;
            li { font-size: 0.85rem; color: #333; margin-bottom: 8px; line-height: 1.4; }
          }
        }

        .punto-rojo {
          width: 6px; height: 6px; background-color: #cf152d;
          border-radius: 50%; position: absolute; left: 50%; top: 10px; transform: translateX(-50%);
        }
      }

      /* Botón Rojo Intro */
      .btn-correo-rojo {
        display: inline-block;
        background-color: #cf152d;
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: bold;
        box-shadow: 0 4px 10px rgba(207, 21, 45, 0.3);
        transition: transform 0.2s;
        
        &:hover { transform: scale(1.05); }
      }

      /* Centrado de Logos (corta visualmente la línea roja) */
      .convenio-logo-center {
        position: relative;
        z-index: 2;
        text-align: center;
        background: white; /* Tapa la línea roja */
        padding: 30px 0;
        margin: 20px 0;

        img { max-width: 150px; height: auto; margin-bottom: 15px; }
        
        .cita-roja { color: #cf152d; font-weight: 800; font-size: 0.9rem; line-height: 1.4; margin-bottom: 10px; }
        .autor-cita { color: #333; font-size: 0.8rem; }
      }

      /* =========================================
        TARJETAS DE BECAS (Derecha)
        ========================================= */
      .beca-card {
        width: 100%;
        text-align: center;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        
        /* Tarjeta dividida (Cruyff y UVN) */
        &.mixta {
          .beca-header {
            background-color: #fdfdfd;
            padding: 20px 15px;
            border: 1px solid #eee;
            border-bottom: none;
            
            p { font-size: 0.85rem; color: #333; margin-bottom: 10px; line-height: 1.4; }
            .bold-rojo { color: #cf152d; font-weight: 800; font-size: 1rem; }
            .texto-chico { font-size: 0.75rem; color: #666; margin-bottom: 0; }
          }
          
          .beca-body {
            background: linear-gradient(to bottom, #e47883, #cf152d); /* Degradado rojo */
            color: white;
            padding: 25px 15px;
          }
        }

        /* Tarjeta Sólida (Conamat y MBP) */
        &.solida {
          background-color: #cf152d;
          color: white;
          padding: 30px 15px;
          
          .legales { font-size: 0.6rem; opacity: 0.8; margin-top: 15px; }
        }

        h4 { font-size: 0.9rem; font-weight: 800; margin-bottom: 20px; line-height: 1.2; letter-spacing: 0.5px; }

        .porcentaje-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;

          &:last-child { margin-bottom: 0; }
          &.center-content { margin-bottom: 10px; }

          .numero { font-size: 1.8rem; font-weight: 800; margin-bottom: 5px; }
          .numero-grande { font-size: 2.5rem; font-weight: 800; margin-bottom: 5px; }
          
          .condicion { font-size: 0.75rem; line-height: 1.3; font-weight: 300; }
          strong { font-weight: 800; }
        }
      }
    }
  }

  .field-background-container {
    position: absolute;
    top: 0; left: 0;
    width: 100%; 
    height: 100%;
    z-index: 1;
    pointer-events: none; 
    /* Preparamos el contenedor para que pueda rotar entero en el paso 3 */
    // transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    .field-lines-bg {
      position: absolute;
      top: 180px; 
      left: 7%;
      width: 90%;
      object-fit: contain;
      transform-origin: center center;
      transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    /* ESTADO INICIAL */
    .cancha-1 { 
      opacity: 0.9; 
      transform: translateX(0) translateY(0) rotate(0deg);
    }
    
    .cancha-2 { 
      opacity: 0; 
      transform: translateX(0) translateY(0) rotate(-45deg); 
    }

    .cancha-3 {
      opacity: 0;
      transform: translateX(0) translateY(0) rotate(-45deg);
    }

    .cancha-4 {
      opacity: 0;
      transform: translateX(0) translateY(0) rotate(-45deg);
    }

    .cancha-5 {
      opacity: 0;
      transform: translateX(100%) translateY(300px) rotate(45deg); 
    }

    .flechas-tacticas {
      opacity: 0;
      transform: translateX(0) translateY(0) rotate(-45deg);
      z-index: -1;
    }

    .field-ball-animado {
      position: absolute;
      top: 210px;
      left: 38%;
      width: 50px;
      filter: drop-shadow(0px 5px 10px rgba(0,0,0,0.3));
      z-index: 5;
      transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
    }
  }

  .logos-wrapper {
    margin-left: 1rem; /* Ajustado para que el primer logo (Miembros) no quede muy a la izquierda */
    gap: 0rem; /* Este espacio separa Miembros de Instituciones en la misma fila */
    
    @media (max-width: 1366px) {
      margin-left: 5rem;
      gap: 3rem;
    }
  }

  .instituciones-container {
    opacity: 0; 
    transform: translateY(30px); 
    transition: all 0.6s ease-out;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    .logo-circle {
      width: 65px;
      height: 65px;
      background: white;
      border-radius: 50%;
      border: 2px solid $amf-accent;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 15px rgba(80, 192, 38, 0.6);
      position: relative;
      z-index: 2;
      
      img { width: 60%;height: 60%; object-fit: contain; }
    }

    .linea-punteada {
      width: 2px;
      // height: 120px; 
      border-left: 2px dotted white;
      margin: 0 auto;
      position: relative;
      opacity: 0.8;
      z-index: 1;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -3px; /* Centrar el punto con la línea */
        width: 4px;
        height: 4px;
        background-color: white;
        border-radius: 50%;
      }
    }
  }

  /* =========================================
     ANIMACIONES POR SCROLL (CLASES DINÁMICAS)
     ========================================= */
  &.step-2, &.step-3, &.step-4 {
    .field-ball-animado {
      top: 460px; 
      left: 24%; 
      transform: rotate(-360deg); 
    }
    .instituciones-container {
      opacity: 1; 
      transform: translateY(0); 
      transition-delay: 0.2s;
    }
  }

  &.step-3 {
    
    .cancha-1 {
      opacity: 0; 
      transform: translateX(-10%) translateY(400px) rotate(45deg); 
    }
    
    .cancha-2 {
      opacity: 0.9;
      // transform: translateX(-10%) translateY(400px) rotate(0deg);
      transform: translateX(27%) translateY(200px) rotate(0deg);

    }

    .flechas-tacticas {
      opacity: 0.95; 
      transform: translateX(27%) translateY(200px) rotate(0deg);
      transition-delay: 0.3s; 
    }

    .field-ball-animado {
      opacity: 0; 
    }
    
    .instituciones-container {
      opacity: 0;
      transform: translateY(-30px);
    }
  }

  &.step-4 {
    .cancha-1 { opacity: 0; transform: translateX(-10%) translateY(400px) rotate(45deg); }
    
    .cancha-2 { 
      opacity: 0; 
      transform: translateX(60%) translateY(550px) rotate(35deg); 
    }
    
    .cancha-3 {
      opacity: 0.9;
      transform: translateX(60%) translateY(550px) rotate(35deg);
    }
    
    .flechas-tacticas {
      opacity: 0.95;
      transform: translateX(93%) translateY(530px) rotate(45deg);
      transition-delay: 0s; /* Que gire inmediatamente con la cancha */
    }

    .field-ball-animado { opacity: 0; }
    .instituciones-container { opacity: 0; }

    .nosotros-sticky-wrapper {
      opacity: 1;
      transform: translateX(0);
      pointer-events: auto;
    }
  }

  &.step-5 {
    .cancha-1 {
      opacity: 0; 
      transform: translateX(-10%) translateY(400px) rotate(45deg); 
    }
    .cancha-2 { 
      opacity: 0; 
      transform: translateX(60%) translateY(550px) rotate(35deg); 
    }

    .cancha-3 {
      opacity: 0;
      transform: translateX(110%) translateY(550px) rotate(45deg); // Se aleja a la derecha
    }
    
    .flechas-tacticas {
      opacity: 0;
      transform: translateX(120%) translateY(530px) rotate(60deg);
    }

    .cancha-4 {
      opacity: 0.9;
      // Ajusta estos valores para posicionarla exactamente donde quieras a la izquierda
      transform: translateX(-25%) translateY(510px) rotate(0deg); 
      transition-delay: 0.1s;
    }

    /* 2. Entra el panel blanco por la derecha */
    .panel-blanco-derecho {
      opacity: 1;
      transform: translateX(0);
      pointer-events: auto;
    }

    /* 3. Animación en cascada de la foto (se ejecuta después de que entra el panel) */
    .panel-blanco-derecho .imagen-asesor-wrapper {
      opacity: 1;
      transform: scale(1) translateY(0);
      transition-delay: 0.6s; /* Espera medio segundo antes de aparecer */
    }
  }

  &.step-6 {
    .cancha-1 {
      opacity: 0; 
      transform: translateX(-10%) translateY(400px) rotate(45deg); 
    }
    .cancha-2 { 
      opacity: 0; 
      transform: translateX(60%) translateY(550px) rotate(35deg); 
    }
    .cancha-3 {
      opacity: 0;
      transform: translateX(110%) translateY(550px) rotate(45deg);
    }

    /* 1. Ocultamos lo del step 5 */
    .panel-blanco-derecho {
      opacity: 0;
      transform: translateX(100%);
      pointer-events: none;
    }
    .cancha-4 {
      opacity: 0;
      transform: translateX(-100%) translateY(510px);
    }

    /* 2. Mostramos Cancha 5 (Lado derecho) */
    .cancha-5 {
      opacity: 1;
      /* Ajusta estos valores para que la portería quede donde la quieres en la derecha */
      transform: translateX(35%) translateY(280px) rotate(0deg); 
      transition-delay: 0.1s;
    }

    
    /* 5. Entra el Panel Blanco Izquierdo */
    .panel-blanco-izquierdo {
      opacity: 1;
      transform: translateX(0);
      pointer-events: auto;
    }

    /* 6. Animación del logo de Cruyff */
    .panel-blanco-izquierdo .cruyff-section {
      opacity: 1;
      transform: scale(1);
      transition-delay: 0.7s; /* Entra después de que el panel ya está posicionado */
    }
  }
}

@media (min-width: 1600px) {
  .section-home {
    height: 2200px !important;
    /* Evita que los textos del inicio se vayan a los extremos */
    .hero-title, .hero-description, .instituciones-container {
      max-width: 600px;
    }
    
    /* Centramos la cancha para que no se estire de más */
    .field-background-container {
      left: 50%;
      transform: translateX(-50%);
      width: 1512px; /* Forzamos a que actúe como en tu Mac */
    }
    .nosotros-sticky-wrapper {
        top: 0 !important;
        bottom: 0 !important;
        height: 100vh !important;
    }
    
    /* Aplicamos lo mismo a los otros paneles para que no se vean cortados */
    .panel-blanco-izquierdo {
      top: 5% !important;
      bottom: 0 !important;
      height: 100vh !important;
    }
    // .panel-blanco-derecho {
    //   bottom: 0% !important;
    // }
    
    // .panel-blanco-izquierdo
    // {
    //   bottom: 1% !important;
    //   height: 91vh !important;
    // }
  }
}



/* 2. TABLETS Y LAPTOPS PEQUEÑAS (1024px a 1366px) */
@media (max-width: 1366px) {
  .section-home {
    /* Reducimos los márgenes fijos que tenías en línea */
    .col-md-6[style*="padding-right: 18rem"] {
      padding-right: 5rem !important;
    }
    .col-md-6[style*="padding-left: 17rem"] {
      padding-left: 5rem !important;
    }
    .instituciones-container[style*="margin-left: 9rem"] {
      margin-left: 2rem !important;
    }
    
    /* Escalamos un poco la cancha */
    .field-background-container .field-lines-bg {
      transform: scale(0.85);
      transform-origin: left top;
    }
  }
}

/* =========================================================
   📱 MÓVILES Y TABLETS (Menos de 991px) - CÓDIGO MAESTRO FINAL
   ========================================================= */
@media (max-width: 991px) {

  /* --- 1. OCULTAR ELEMENTOS NO DESEADOS EN MÓVIL/TABLET --- */
  .cancha-2, 
  .flechas-tacticas,
  .cancha-3, 
  .linea-punteada,
  .logos-wrapper { /* Ocultamos los logos de PC originales */
    display: none !important;
  }

  /* --- 2. HERO --- */
  .hero-col-izq, .hero-col-der {
    padding-left: 15px !important; 
    padding-right: 15px !important; 
    padding-top: 1rem !important;
  }

  /* --- 3. NUEVA SECCIÓN DE LOGOS (GLASSMORPHISM) --- */
  .mobile-tablet-logos {
    .logo-card-glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 20px;
      padding: 25px 15px;
      height: 100%;
      text-align: center;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);

      h6 {
        // color: #50c026;
        color: #FFFFFF;        
        font-weight: 800;
        font-size: 0.8rem;
        letter-spacing: 2px;
        margin-bottom: 20px;
        text-transform: uppercase;
      }
    }

    .logo-grid {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;

      .logo-item {
        width: 65px;
        height: 65px;
        background: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        
        img { width: 100%; height: auto; object-fit: contain; }
      }
    }

    .ligas-grid img {
      max-height: 80px;
      // filter: brightness(0) invert(1);
      // opacity: 0.9;
    }
  }

  /* --- 4. ESTRUCTURA Y PANELES MÓVILES --- */
  .section-home {
    height: auto !important; 
    overflow: visible !important; 

    .container[style*="height: 750px"] { height: auto !important; padding-bottom: 30px !important; }
    .col-md-6[style*="padding"] { padding: 1rem !important; }

    /* Liberamos los paneles para que bajen en orden */
    .nosotros-sticky-wrapper, .panel-blanco-derecho, .panel-blanco-izquierdo {
      opacity: 1 !important; transform: none !important; pointer-events: auto !important; 
      position: relative !important; width: 100% !important; height: auto !important;       
      margin-top: 0 !important; z-index: 10 !important;
    }
    .panel-blanco-derecho{
      left: 0%;
    }
    .nosotros-sticky-wrapper { margin-top: 40px !important; }

    /* Quitamos los scroll internos */
    .nosotros-panel, .panel-blanco-derecho .scroll-container, .panel-blanco-izquierdo .scroll-container {
      height: auto !important; max-height: none !important; overflow: visible !important; padding: 40px 20px !important;
    }

    /* --- 5. DISEÑO DE TEXTOS, LÍNEAS Y VIÑETAS --- */
    .nosotros-panel .border-start-custom {
      border-left: none !important; border-top: 2px solid #50c026; padding-left: 0 !important; padding-top: 20px !important; margin-top: 15px;
      &::before { left: 50% !important; top: -6px !important; transform: translateX(-50%); }
    }
    .creemos-section ul { text-align: center !important; display: inline-block; }
    .creemos-section ul li { text-align: left; }
    .header-asesor .titulo-asesor { position: static !important; text-align: center !important; margin-bottom: 20px; }
    .header-asesor .imagen-asesor-wrapper { opacity: 1 !important; transform: none !important; }

    .timeline-row, .convenio-row {
      flex-direction: column !important; text-align: center !important; align-items: center !important; 
      .timeline-left, .timeline-right, .col-izq, .col-der { width: 100% !important; padding: 0 !important; margin-bottom: 5px !important; }
    }
    .timeline-asesor .timeline-right ul { display: inline-block; text-align: left; margin-top: 15px; }
    .beca-card .porcentaje-item { flex-direction: row !important; justify-content: center; align-items: center; gap: 15px; text-align: left; }

    /* Los puntitos se hacen líneas horizontales */
    .timeline-dot, .punto-rojo {
      display: block !important; position: relative !important; left: 0 !important; top: 0 !important; transform: none !important;
      width: 80px !important; height: 3px !important; border-radius: 3px !important; margin: 15px auto 25px auto !important; 
    }
    .linea-central, .linea-central-roja, .timeline-dot-end, .linea-fin-roja { display: none !important; }

    /* --- 6. MAGIA DEL FONDO: FIXED (ACTUALIZADO) --- */
    .field-background-container {
      width: 100vw !important; height: 100vh !important; 
      position: fixed !important; 
      top: 0 !important; left: 0 !important;
      opacity: 0.4 !important; /* Opacidad baja para que resalte el Glassmorphism */
      z-index: 1 !important; pointer-events: none !important;

      .field-lines-bg {
        position: absolute !important;
        left: 50% !important; 
        transform: translateX(-50%) !important;
        transition: opacity 0.6s ease-in-out !important; 
      }

      /* Centramos la cancha principal perfecta en pantalla */
      .cancha-1 { 
        top: 50% !important;
        transform: translate(-50%, -50%) !important;
        width: 180vw !important; 
      }
      .cancha-5 { top: 35vh !important; width: 160vw !important; }
    }

    /* Neutralizamos las transformaciones de la computadora */
    &.step-1, &.step-2, &.step-3, &.step-4, &.step-5, &.step-6 {
      .field-background-container .cancha-1 {
        transform: translate(-50%, -50%) rotate(0deg) !important;
      }
      .field-background-container .cancha-4,
      .field-background-container .cancha-5 {
        transform: translateX(-50%) rotate(0deg) !important;
      }
    }

    /* Simplificamos las opacidades */
    &.step-1, &.step-2, &.step-3, &.step-4 {
      .cancha-1 { opacity: 0.6 !important; }
      .cancha-4, .cancha-5 { opacity: 0 !important; }
    }
    &.step-5, &.step-6 {
      .cancha-1, .cancha-4 { opacity: 0 !important; }
      .cancha-5 { opacity: 0 !important; }
    }

    /* --- 7. ANIMACIÓN DEL BALÓN --- */
    .field-ball-animado {
      width: 35px !important;
      top: 10vh !important; left: 80% !important;
      transform: translateX(-50%) rotate(0deg) !important;
      transition: all 1s ease-in-out !important;
    }
    &.step-2, &.step-3, &.step-4 {
      .field-ball-animado {
        top: 30vh !important; left: 50% !important; 
        transform: translateX(-50%) rotate(-360deg) !important; 
        opacity: 1 !important; 
      }
    }
    &.step-5, &.step-6 { .field-ball-animado { opacity: 0 !important; } }
  }
}



.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85); /* Fondo un poco más oscuro */
  backdrop-filter: blur(6px); /* Efecto de desenfoque profesional (opcional) */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Z-index alto para sobreponer a navbars */
}

.modal-content2 {
  width: 90vw; /* Toma casi todo el ancho */
  height: 90vh; /* Toma casi todo el alto */
  max-width: 1200px; /* Evita que sea exageradamente ancho en monitores gigantes */
  background: transparent; /* Quitamos el fondo blanco */
  border-radius: 15px; /* Esquinas redondeadas más pronunciadas */
  position: relative;
  box-shadow: 0 15px 40px rgba(0,0,0,0.5);
  overflow: hidden; /* ¡CLAVE! Corta las esquinas del iframe para respetar el border-radius */
}

/* Botón flotante estilo circular */
.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  background-color: #50c026; /* Verde AMFPRO (o ponle #cf152d si lo prefieres rojo) */
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10; /* Asegura que flote sobre el iframe */
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.2s ease, background-color 0.2s ease;
  line-height: 0; /* Centra perfectamente la 'X' */
  padding-bottom: 4px; /* Ajuste visual para la entidad &times; */
}

.modal-close-btn:hover {
  transform: scale(1.1);
  background-color: #3E9452; /* Verde más oscuro al pasar el mouse */
}

.modal-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block; /* Quita el espacio fantasma que dejan los iframes por defecto */
  margin-top: 0; /* Quitamos el margen, ahora ocupa el 100% real */
}
.hero-col-izq { padding-right: 18rem !important; }
.hero-col-der { padding-left: 17rem !important; padding-top: 5rem !important; }
/* =========================================================
   2. TABLETS Y LAPTOPS PEQUEÑAS (hasta 1366px)
   ========================================================= */
@media (max-width: 1366px) {
  /* Reducimos los márgenes exagerados solo para que quepa en laptops de 13" o 14" */
  .hero-col-izq { padding-right: 2rem !important; }
  .hero-col-der { padding-left: 2rem !important; padding-top: 2rem !important; }
  
  /* Juntamos los logos un poco para que no se empalmen */
  .box-miembros { margin-right: 2rem !important; }
}

/* =========================================================
   1. CANCHAS Y FLECHAS (PC DE ESCRITORIO - Intocables)
   ========================================================= */
.svg-cancha-grande { 
  width: 850px !important; 
  height: 1400px !important; 
}
.svg-flechas { 
  width: 700px !important; 
  height: 1000px !important; 
  padding-top: 261px !important; 
  padding-left: 219px !important; 
}
.svg-cancha-4 { 
  width: 121% !important;
  top: 40px !important;
  left: 20% !important;
}
.svg-cancha-5 { 
  top: 675px !important;
  width: 85% !important;
  left: -2% !important;
}


/* =========================================================
   2. TABLETS Y LAPTOPS PEQUEÑAS (hasta 1366px)
   ========================================================= */
@media (max-width: 1366px) {
  /* Reducimos las canchas y flechas un 20% aprox para que no saturen la pantalla */
  .svg-cancha-grande { 
    width: 680px !important; 
    height: 1120px !important; 
  }
  .svg-flechas { 
    width: 560px !important; 
    height: 800px !important; 
    padding-top: 208px !important; /* Se reduce proporcionalmente para no perder alineación */
    padding-left: 175px !important; 
  }
}

.section-home {
  .timeline-asesor .timeline-right p,
  .timeline-asesor .timeline-right ul li,
  .timeline-convenios .col-izq p,
  .timeline-convenios .col-izq ul li {
    text-align: justify !important;
  }
}
</style>