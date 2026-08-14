<template>
   <div class="amf-talentos-wrapper">
      <!-- 1. HERO SECTION (Corte Recto + Textura Diagonal) -->
      <section class="section-hero-premium position-relative text-center overflow-hidden" id="talentos">
        
        <!-- Textura de fondo diagonal (como Casos de Éxito) -->
        <div class="success-bg-shape position-absolute top-0 start-0 w-100 h-100 opacity-25 z-0"></div>
        
        <!-- Elemento de iluminación sutil -->
        <div class="hero-glow position-absolute top-0 start-0 w-100 h-100 opacity-50 z-0"></div>
        
        <div class="container pt-5 pb-5 position-relative z-2">
            <!-- <div class="badge-premium mb-4 reveal-item d-inline-block px-4 py-1 rounded-pill fw-bold text-uppercase tracking-widest small shadow-sm">
              Iniciativa AMFpro
            </div> -->
            <h1 class="display-2 fw-black text-white mb-4 reveal-item delay-1 text-shadow-sm" style="letter-spacing: -2px;">
              TALENTOS
            </h1>
            
            <div class="row justify-content-center mb-5 pb-4">
              <div class="col-12 col-md-10 col-lg-8">
                  <p class="hero-description text-white fs-5 lh-lg reveal-item delay-2">
                  Una iniciativa dedicada a impulsar el crecimiento de jóvenes futbolistas. 
                  Brindamos de manera gratuita las condiciones ideales para entrenar junto a exjugadores profesionales 
                  en nuestras sedes de <strong class="text-white fw-bold">CDMX, Guadalajara y León</strong>, compitiendo al más alto nivel nacional.
                  </p>
              </div>
            </div>
        </div>
      </section>
      
      <!-- 2. CARRUSEL FLOTANTE A COLOR -->
      <section class="section-carousel position-relative z-3" style="margin-top: -50px;">
        <div class="container px-md-5">
            <div class="bg-white rounded-4 shadow-lg py-4 border border-light overflow-hidden">
              <div class="shields-track">
                  <div v-for="(copa, index) in listaCopas" :key="index" class="shields-item premium-sponsor-item">
                    <img :src="copa.img" class="shield-icon" :alt="copa.nombre" loading="lazy">
                    <span class="shield-text text-dark fw-bold small">{{ copa.nombre }}</span>
                  </div>
              </div>
            </div>
        </div>
      </section>
      
      <!-- 3. ESTADÍSTICAS CORPORATIVAS -->
      <section class="bg-white text-center section-trayectoria pt-6 pb-5">
        <div class="container px-md-5 mt-4">
            
            <div class="reveal-up mb-5">
              <p class="text-uppercase tracking-widest text-muted fw-bold mb-2 small">Nuestra Trayectoria</p>
              <h2 class="display-5 fw-black amf-green-text mb-3" style="letter-spacing: -1.5px;">EN NÚMEROS</h2>
              <div class="divider-short bg-amf-green mx-auto rounded-pill mb-4" style="width: 60px; height: 4px;"></div>
              <p class="text-secondary">"La disciplina convierte sueños en victorias."</p>
            </div>

            <div class="row g-4 justify-content-center stats-container reveal-up delay-1">
              <div v-for="(stat, index) in stats" :key="stat.label" class="col-6 col-md-3">
                  <div class="premium-stat-card p-4 rounded-4 bg-white h-100 transition-all border border-light shadow-sm hover-elevate">
                      <div class="stat-icon-wrapper mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center bg-light">
                        <i class="material-icons amf-green-text fs-3">{{ stat.icon }}</i>
                      </div>
                      <div class="stat-number-wrapper reveal-flip" :style="{ transitionDelay: `${0.15 * index}s` }">
                        <div class="stat-number display-4 fw-black text-dark lh-1 mb-2">{{ Math.floor(stat.current) }}</div>
                      </div>
                      <div class="stat-label text-muted fw-bold small text-uppercase tracking-wider">{{ stat.label }}</div>
                  </div>
              </div>
            </div>

        </div>
      </section>

      <!-- 4. TORNEOS (TARJETAS CON ENCABEZADO INSTITUCIONAL) -->
      <section class="section-torneos py-6 bg-light border-top border-bottom border-light">
        <div class="container px-md-5">
            <div class="text-center mb-5 reveal-up">
              <p class="text-uppercase tracking-widest text-muted fw-bold mb-2 small">Historial Competitivo</p>
              <h2 class="display-5 fw-black amf-green-text mb-3" style="letter-spacing: -1.5px;">RENDIMIENTO ANUAL</h2>
              <div class="divider-short bg-amf-green mx-auto rounded-pill mb-4" style="width: 60px; height: 4px;"></div>
              <p class="text-muted">El resumen de nuestra participación y crecimiento por año.</p>
            </div>

            <div class="row justify-content-center g-4"> 
              <div v-for="(player, index) in playersData" :key="player.year" class="col-12 col-sm-6 col-lg-3 d-flex justify-content-center reveal-up" :class="'delay-' + (index % 4 + 1)">
                  
                  <div class="pro-player-card bg-white rounded-4 shadow-sm w-100 position-relative overflow-hidden transition-all hover-elevate border-0 d-flex flex-column"> 
                    
                    <!-- Encabezado en Verde Institucional -->
                    <div class="pro-card-header text-center pt-4 pb-0 position-relative bg-amf-green overflow-hidden">
                        <div class="position-relative z-2">
                          <div class="year-pill-pro d-inline-block px-4 py-1 rounded-pill fw-black mb-3 shadow-sm bg-white amf-green-text tracking-wider">{{ player.year }}</div>
                          
                          <!-- REEMPLAZO PREMIUM: ÍCONO TROFEO EN LUGAR DE FOTO DE JUGADOR -->
                          <div class="photo-wrapper-pro d-flex justify-content-center align-items-center mx-auto" style="height: 140px;">
                              <div class="premium-award-wrapper position-relative d-flex align-items-center justify-content-center">
                                  <div class="award-glow position-absolute rounded-circle"></div>
                                  <div class="award-ring position-absolute rounded-circle border border-2 border-white opacity-25"></div>
                                  <div class="award-inner rounded-circle bg-white shadow-sm d-flex align-items-center justify-content-center position-relative z-3">
                                      <i class="material-icons amf-green-text" style="font-size: 3rem;">emoji_events</i>
                                  </div>
                              </div>
                          </div>

                        </div>
                    </div>
                    
                    <div class="pro-card-body p-4 bg-white position-relative z-1 d-flex flex-column flex-grow-1">
                        <div class="pro-stats-list text-start small w-100 mb-4">
                            <div class="d-flex justify-content-between py-2 border-bottom border-light">
                              <span class="text-muted fw-bold">COPAS</span><strong class="text-dark fs-6">{{ player.copas }}</strong>
                            </div>
                            <div class="d-flex justify-content-between py-2 border-bottom border-light">
                              <span class="text-muted fw-bold">CATEGORÍAS</span><strong class="text-dark fs-6">{{ player.cats }}</strong>
                            </div>
                            <div class="d-flex justify-content-between py-2 border-bottom border-light">
                              <span class="text-muted fw-bold">PARTICIPANTES</span><strong class="text-dark fs-6">{{ player.parts }}</strong>
                            </div>
                            <div class="d-flex justify-content-between py-2 mt-3 bg-light px-3 py-2 rounded-3 border border-light align-items-center">
                              <span class="amf-green-text fw-bold">ÉXITOS</span><strong class="amf-green-text fs-5 fw-black">{{ player.case }}</strong>
                            </div>
                        </div>
                        
                        <!-- BOTÓN PREMIUM PARA ABRIR GALERÍAS (PANEL LATERAL) -->
                        <!-- <div class="mt-auto">
                            <button class="btn-gallery-pro w-100 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center py-2 transition-all" @click="abrirPanelGalerias(player.year)">
                              <i class="material-icons me-2 transition-all">photo_library</i> 
                              <span>Ver Galerías</span>
                            </button>
                        </div> -->
                    </div>

                  </div>

              </div>
            </div>
        </div>
      </section>

      <!-- 5. CASOS DE ÉXITO -->
      <section class="section-success py-6 text-white text-center position-relative">
          <!-- Fondo decorativo diagonal -->
          <div class="success-bg-shape position-absolute top-0 start-0 w-100 h-100 opacity-25 z-0"></div>

          <div class="container px-md-5 position-relative z-2">
            
            <div class="row justify-content-center mb-5 reveal-up">
              <div class="col-12 col-md-8 text-center">
                <!-- <div class="badge bg-white amf-green-text rounded-pill px-3 py-2 mb-3 shadow-sm fw-bold tracking-wider small">NUESTRO ORGULLO</div> -->
                <h2 class="display-4 fw-black text-white mb-3 text-shadow-sm" style="letter-spacing: -1.5px;">CASOS DE ÉXITO</h2>
                <p class="text-white-50 fs-5 mx-auto mb-0" style="max-width: 600px;">
                  Conoce a los jóvenes talentos que, gracias a su esfuerzo y disciplina en nuestro programa, lograron dar el salto oficial al fútbol profesional.
                </p>
              </div>
            </div>

            <!-- Grid compacta horizontal -->
            <div class="row g-3 justify-content-center mb-4 reveal-up delay-1">
              <div v-for="(caso, index) in casosExito" :key="caso.id" class="col-12 col-md-6 col-lg-4" :class="'delay-' + (index % 3 + 1)">
                  
                  <div class="premium-success-card-compact bg-white rounded-4 shadow-sm p-3 position-relative overflow-hidden h-100 d-flex align-items-center text-start border-0 hover-elevate">
                      <!-- Ícono en verde oscuro -->
                      <div class="icon-success-wrapper-compact me-3 rounded-circle d-flex align-items-center justify-content-center position-relative z-1 flex-shrink-0 bg-amf-green text-white shadow-sm">
                          <i class="material-icons">star</i>
                      </div>

                      <div class="position-relative z-1">
                          <h6 class="fw-black text-dark mb-0 lh-sm" style="letter-spacing: -0.5px; font-size: 1.05rem;">{{ caso.nombre }}</h6>
                          <span class="text-secondary small d-block lh-1 mt-1" style="font-size: 0.70rem; text-transform: uppercase; letter-spacing: 0.5px;">Captado por</span>
                          <span class="amf-green-text fw-bold" style="font-size: 0.85rem;">{{ caso.club }}</span>
                      </div>
                  </div>

              </div>
            </div>
            
            <div class="row justify-content-center mt-5 reveal-up delay-2" style="padding-bottom: 3rem;">
              <div class="col-11 col-md-10 col-lg-8">
                  <p class="text-center text-white-50 lh-lg mb-0 small">
                  Para unirte a este gran proyecto, mantente atento a nuestras redes sociales, donde publicamos las convocatorias para los próximos escauteos y la selección de nuevos integrantes de Talentos AMFpro.
                  </p>
              </div>
            </div>
          </div>
          
          <div class="split-icon-container">
              <img src="recursos/documento-reloj.webp" alt="Documento y Reloj" style="width: 240px; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.15));">
          </div>
      </section>

      <!-- ==========================================
           NUEVO: PANEL LATERAL (OFFCANVAS) PARA GALERÍAS
           ========================================== -->
      <!-- Overlay de fondo -->
      <transition name="fade-modal">
        <div v-if="panelTorneosAbierto" class="panel-overlay" @click="cerrarPanelGalerias"></div>
      </transition>

      <!-- Panel Deslizante -->
      <transition name="slide-panel">
        <div v-if="panelTorneosAbierto" class="premium-side-panel shadow-2xl d-flex flex-column">
          
          <!-- Header del Panel -->
          <div class="panel-header px-4 py-4 d-flex justify-content-between align-items-center border-bottom border-light bg-light position-relative z-2">
            <div class="d-flex align-items-center">
              <div class="icon-box-modal rounded-circle bg-white shadow-sm d-flex align-items-center justify-content-center me-3" style="width: 45px; height: 45px;">
                <i class="material-icons amf-green-text fs-4">photo_library</i>
              </div>
              <div>
                <h6 class="text-muted fw-bold tracking-widest text-uppercase small mb-1" style="font-size: 0.65rem;">Torneos Oficiales</h6>
                <h4 class="fw-black text-dark mb-0 lh-1">GALERÍAS {{ anoModalActual }}</h4>
              </div>
            </div>
            <button class="btn-close-panel shadow-sm" @click="cerrarPanelGalerias">
              <i class="material-icons">close</i>
            </button>
          </div>

          <!-- Cuerpo del Panel (Scroll) -->
          <div class="panel-body p-4 bg-white flex-grow-1 overflow-auto position-relative">
            
            <!-- Cargando -->
            <div v-if="cargandoTorneos" class="text-center py-5 d-flex flex-column align-items-center justify-content-center h-100">
              <div class="spinner-border amf-green-text mb-3" style="width: 3rem; height: 3rem;" role="status"></div>
              <p class="text-secondary fw-bold tracking-widest text-uppercase small">Cargando eventos...</p>
            </div>

            <!-- Sin Datos (Empty State Premium) -->
            <div v-else-if="torneosDelAno.length === 0" class="text-center py-5 d-flex flex-column align-items-center justify-content-center h-100">
              <div class="empty-state-icon mb-4 d-flex align-items-center justify-content-center rounded-circle bg-light" style="width: 90px; height: 90px;">
                  <i class="material-icons text-muted opacity-50" style="font-size: 3rem;">image_not_supported</i>
              </div>
              <h5 class="fw-black text-dark mb-2">Sin eventos registrados</h5>
              <p class="text-secondary small">Aún no hemos subido fotografías para las copas del año <strong>{{ anoModalActual }}</strong>.</p>
            </div>

            <!-- Lista de Galerías en Columna -->
            <div v-else class="d-flex flex-column gap-4">
              <div v-for="torneo in torneosDelAno" :key="torneo.id_talento" class="w-100">
                <div class="pro-gallery-card shadow-sm position-relative rounded-4 overflow-hidden border border-light hover-elevate bg-white" @click="abrirGaleria(torneo)">
                  <img :src="obtenerRutaImagen(torneo.hidder)" class="w-100 h-100 gallery-img-pro" style="object-fit: cover; aspect-ratio: 16/10;" :alt="torneo.copa" loading="lazy">
                  <div class="pro-gallery-overlay d-flex flex-column align-items-center justify-content-center p-3 text-center">
                    <div class="zoom-icon-box rounded-circle bg-white shadow-sm d-flex align-items-center justify-content-center mb-2">
                      <i class="material-icons amf-green-text">visibility</i>
                    </div>
                    <div class="fw-bold text-white mb-0 truncate-text px-2 lh-sm">{{ torneo.copa }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </transition>

      <!-- ==========================================
           MODAL 2: LIGHTBOX DE FOTOS (GLASSMORPHISM)
           ========================================== -->
      <transition name="fade-modal">
        <div v-if="galeriaAbierta && torneoActivo" class="lightbox-overlay" @click.self="cerrarGaleria">
            
            <!-- Contador Superior Izquierdo -->
            <div class="lightbox-counter position-absolute top-0 start-0 m-4 fw-bold text-white-50 tracking-widest text-uppercase small" style="z-index: 10002;">
                {{ fotoActualIndex + 1 }} / {{ imagenesTorneoActual.length }}
            </div>

            <button class="btn-close-lightbox" @click="cerrarGaleria">&times;</button>
            
            <div v-if="cargandoImagenes" class="text-center text-white">
              <div class="spinner-border" style="width: 3.5rem; height: 3.5rem;" role="status"></div>
              <p class="mt-4 fw-bold tracking-widest text-uppercase small">Cargando galería...</p>
            </div>
            
            <div v-else class="lightbox-content w-100">
              <button class="btn-nav left shadow-lg" @click.stop="anteriorFoto" v-if="imagenesTorneoActual.length > 1">
                <i class="material-icons">chevron_left</i>
              </button>
              
              <div class="img-container">
                <img :src="obtenerRutaImagen(imagenesTorneoActual[fotoActualIndex])" class="lightbox-img" alt="Foto Galería">
                <div class="lightbox-caption glass-caption px-4 py-3 rounded-pill mt-4 shadow-lg text-center">
                  <h6 class="mb-0 fw-bold text-white tracking-wider" style="font-size: 0.95rem;">{{ torneoActivo.copa }}</h6>
                </div>
              </div>

              <button class="btn-nav right shadow-lg" @click.stop="siguienteFoto" v-if="imagenesTorneoActual.length > 1">
                <i class="material-icons">chevron_right</i>
              </button>
            </div>
        </div>
      </transition>

   </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['scrollPosition'],
    data() {
        return {
            observer: null,
            numerosAnimados: false,
            listaCopas: [
                { nombre: 'COPA BAJÍO', img: 'recursos/copa-1.webp' },
                { nombre: 'COPA CHIVAS', img: 'recursos/copa-2.webp' },
                { nombre: 'COPA SULTANES', img: 'recursos/copa-3.webp' },
                { nombre: 'COPA TECOS', img: 'recursos/copa-4.webp' },
                { nombre: 'USA CUP', img: 'recursos/copa-5.webp' },
                { nombre: 'COPA VALLARTA', img: 'recursos/copa-6.webp' },
                { nombre: 'COPA RECORD', img: 'recursos/copa-7.webp' },
                { nombre: 'COPA TITANES', img: 'recursos/copa-8.webp' },
            ],
            casosExito: [
              { id: 1, nombre: 'Osmar Piña', club: 'Academia de Toluca FC' },
              { id: 2, nombre: 'Emerson Ponce', club: 'Academia de Toluca FC' },
              { id: 3, nombre: 'Ronaldo Aguilar', club: 'Academia del Club Atlas' },
              { id: 4, nombre: 'Johan Guerrero', club: 'Fuerzas Básicas Cruz Azul' },
              { id: 5, nombre: 'Alan Valdivia', club: 'Fuerzas Básicas Tecos' },
              { id: 6, nombre: 'Brian Gutiérrez', club: 'Fuerzas Básicas UDG' }
            ],
            
            /* Estado del Panel Lateral de Galerías por Año */
            panelTorneosAbierto: false,
            anoModalActual: null,
            torneosDelAno: [], 
            cargandoTorneos: false,
            
            /* Estado del Lightbox de Fotos */
            galeriaAbierta: false,
            torneoActivo: null,
            fotoActualIndex: 0,
            imagenesTorneoActual: [], 
            cargandoImagenes: false,
            
            stats: [
                { val: 0, current: 0, label: 'Torneos Oficiales', icon: 'emoji_events' }, 
                { val: 0, current: 0, label: 'Talentos', icon: 'groups' },
                { val: 0, current: 0, label: 'Participaciones', icon: 'trending_up' }, 
                { val: 3, current: 0, label: 'Sedes', icon: 'place' }
            ],
            playersData: []
        }
    },
    mounted() {
      this.datosAgrupados();
      this.datosTalentos();

      const options = { root: null, rootMargin: '0px', threshold: 0.15 };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            
            if(entry.target.classList.contains('section-hero-premium')) {
              entry.target.classList.add('hero-visible');
            }

            if(entry.target.classList.contains('section-trayectoria') && !this.numerosAnimados) {
              this.animarContadores();
              this.numerosAnimados = true;
            }
          } else {
             entry.target.classList.remove('is-visible');
          }
        });
      }, options);

      this.refrescarAnimaciones();
    },
    beforeDestroy() {
      if (this.observer) this.observer.disconnect();
    },
    methods: {
      animarContadores() {
        this.stats.forEach(stat => {
          let start = 0;
          const target = stat.val;
          if (target === 0) {
            stat.current = 0;
            return;
          }
          const duration = 2000; 
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              stat.current = target;
              clearInterval(timer);
            } else {
              stat.current = start;
            }
          }, 16);
        });
      },
      refrescarAnimaciones() {
        this.$nextTick(() => {
          document.querySelectorAll('.reveal-up, .reveal-item, .section-hero-premium, .section-trayectoria, .reveal-flip').forEach(el => {
            if (this.observer) this.observer.observe(el);
          });
        });
      },
      datosAgrupados() {
        axios.get('torneos_agrupados_ano').then(response => {
          this.playersData = response.data.map((item, index) => {
            return {
              year: item.year,
              img: `recursos/jugador${(index % 3) + 1}.webp`, 
              copas: item.total_copas,
              cats: item.rango_categorias,
              parts: '270',
              case: item.jugadores_seleccionados 
            };
          });
          this.refrescarAnimaciones(); 
        }).catch(error => {
          console.error("Error al cargar torneos agrupados:", error);
        });
      },
      datosTalentos(){
        axios.get('datos_talentos').then(response=>{
          this.stats[0].val = response.data.total_torneos;
          this.stats[1].val = response.data.total_jugadores;
          this.stats[2].val = response.data.total_experiencia;
          
          if (this.numerosAnimados) {
            this.animarContadores();
          }
          this.refrescarAnimaciones();
        })
      },
      
      /* ==================================================
         LÓGICA PANEL LATERAL DE GALERÍAS
         ================================================== */
      abrirPanelGalerias(ano) {
        this.anoModalActual = ano;
        this.panelTorneosAbierto = true;
        document.body.style.overflow = 'hidden'; 
        this.obtenerTorneos(ano);
      },
      cerrarPanelGalerias() {
        this.panelTorneosAbierto = false;
        if (!this.galeriaAbierta) {
            document.body.style.overflow = '';
        }
      },
      async obtenerTorneos(ano) {
        this.cargandoTorneos = true;
        this.torneosDelAno = [];
        try {
          const respuesta = await axios.get(`filtra_torneo/${ano}`);
          this.torneosDelAno = respuesta.data;
        } catch (error) {
          console.error("Error al cargar los torneos:", error);
          this.torneosDelAno = [];
        } finally {
          this.cargandoTorneos = false;
        }
      },

      /* ==================================================
         LÓGICA LIGHTBOX DE FOTOS
         ================================================== */
      async abrirGaleria(torneo) {
        this.torneoActivo = torneo;
        this.galeriaAbierta = true;
        this.cargandoImagenes = true;
        this.imagenesTorneoActual = [];

        try {
          const respuesta = await axios.get(`imagenes_torneo/${torneo.id_talento}`);
          this.imagenesTorneoActual = respuesta.data.map(imgObj => imgObj.img); 

          if (this.imagenesTorneoActual.length === 0) {
            alert('Aún no hay fotos cargadas para este torneo.');
            this.cerrarGaleria();
          } else {
            this.fotoActualIndex = 0;
          }

        } catch (error) {
          console.error("Error al cargar las imágenes:", error);
          this.cerrarGaleria();
        } finally {
          this.cargandoImagenes = false;
        }
      },

      obtenerRutaImagen(nombreImagen) {
          if (!nombreImagen) return 'recursos/default.webp';
          if (nombreImagen.startsWith('http')) return nombreImagen;
          return 'http://amfpro.mx/intranet/public/ArchivosSistema/GaleriaTalentos/' + nombreImagen;
      },

      cerrarGaleria() {
        this.galeriaAbierta = false;
        this.torneoActivo = null;
        if (!this.panelTorneosAbierto) {
            document.body.style.overflow = '';
        }
      },
      siguienteFoto() {
        if (this.fotoActualIndex < this.imagenesTorneoActual.length - 1) {
          this.fotoActualIndex++;
        } else {
          this.fotoActualIndex = 0;
        }
      },
      anteriorFoto() {
        if (this.fotoActualIndex > 0) {
          this.fotoActualIndex--;
        } else {
          this.fotoActualIndex = this.imagenesTorneoActual.length - 1; 
        }
      }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.amf-talentos-wrapper {
  font-family: 'Roboto', sans-serif !important;
  background-color: #ffffff;
}

* { font-family: 'Roboto', sans-serif !important; }
.material-icons { font-family: 'Material Icons' !important; }

/* Variables de Color Institucionales */
$amf-dark: #3E9452;
$amf-main: #3e9452;
$amf-accent: #50c026;

.bg-amf-green { background-color: $amf-main !important; }
.amf-green-text { color: $amf-accent !important; }
.fw-black { font-weight: 900 !important; }
.tracking-widest { letter-spacing: 3px; }
.tracking-wider { letter-spacing: 1.5px; }
.transition-all { transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }
.text-shadow-sm { text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.py-6 { padding-top: 5rem !important; padding-bottom: 5rem !important; }

/* Efecto Elevación Global */
.hover-elevate {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
  }
}

/* Animaciones Base */
.reveal-up { opacity: 0; transform: translateY(30px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
.is-visible.reveal-up, .is-visible .reveal-up { opacity: 1; transform: translateY(0); }

.reveal-flip { opacity: 0; transform: perspective(600px) rotateX(-90deg); transform-origin: center top; transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.is-visible.reveal-flip, .is-visible .reveal-flip { opacity: 1; transform: perspective(600px) rotateX(0deg); }

.delay-1 { transition-delay: 0.15s; }
.delay-2 { transition-delay: 0.3s; }
.delay-3 { transition-delay: 0.45s; }

/* 1. HERO SECTION INSTITUCIONAL */
.section-hero-premium {
  background: linear-gradient(135deg, #2b6b39 0%, #3e9452 100%);
  padding-bottom: 90px !important; 
  .badge-premium { background: rgba(255, 255, 255, 0.15); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.3); }
  .hero-glow { background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%); }
  .reveal-item { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
  &.hero-visible .reveal-item { opacity: 1; transform: translateY(0); }
}

/* 2. CARRUSEL FLOTANTE */
.section-carousel {
  .shields-track { display: flex; width: max-content; animation: scrollLeft 40s linear infinite; }
  @keyframes scrollLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .premium-sponsor-item { display: flex; align-items: center; gap: 12px; margin: 0 40px; transition: transform 0.4s ease; .shield-icon { height: 40px; width: auto; object-fit: contain; } .shield-text { white-space: nowrap; } &:hover { transform: scale(1.08); } }
}

/* 3. ESTADÍSTICAS CORPORATIVAS */
.premium-stat-card {
  .stat-icon-wrapper { width: 64px; height: 64px; transition: all 0.3s ease; }
  &:hover .stat-icon-wrapper { background-color: #50c026 !important; i { color: #fff !important; } }
}

/* 4. TARJETAS DE TORNEO Y BOTÓN PREMIUM */
.pro-player-card {
  max-width: 280px; margin: 0 auto;
  .pro-card-header { background-color: $amf-main; border-bottom: 4px solid #50c026; }
  .year-pill-pro { font-size: 1.1rem; letter-spacing: 1px; }
  
  /* ESTILOS DEL NUEVO ÍCONO TROFEO */
  .premium-award-wrapper {
    width: 100px; height: 100px; margin-bottom: 10px;
    .award-glow { width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%); }
    .award-ring { width: 90px; height: 90px; top: 5px; left: 5px; animation: pulse-ring 3s infinite alternate cubic-bezier(0.25, 0.8, 0.25, 1); }
    .award-inner { width: 80px; height: 80px; }
  }
  
  &:hover {
    .premium-award-wrapper { transform: scale(1.08) translateY(-5px); transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }
    .award-ring { opacity: 0.6; }
  }
}

@keyframes pulse-ring {
  0% { transform: scale(0.95); opacity: 0.1; }
  100% { transform: scale(1.05); opacity: 0.4; }
}

/* Botón Ver Galerías Magnético */
.btn-gallery-pro {
  background: transparent; border: 1px solid rgba(80, 192, 38, 0.3); color: $amf-accent;
  position: relative; overflow: hidden;
  &::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(80, 192, 38, 0.1), transparent); transition: all 0.4s ease;
  }
  &:hover {
    background: $amf-accent; color: white !important; border-color: $amf-accent;
    box-shadow: 0 10px 20px rgba(80, 192, 38, 0.25) !important; transform: translateY(-3px);
    i { transform: translateX(3px); color: white !important; }
    &::before { left: 100%; }
  }
}

/* ==========================================
   SISTEMA DE TRANSICIONES VUE
   ========================================== */
.fade-modal-enter-active, .fade-modal-leave-active { transition: opacity 0.4s ease; }
.fade-modal-enter, .fade-modal-leave-to { opacity: 0; }

.slide-panel-enter-active, .slide-panel-leave-active { transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }
.slide-panel-enter, .slide-panel-leave-to { transform: translateX(100%); }

/* ==========================================
   NUEVO: PANEL LATERAL (OFFCANVAS)
   ========================================== */
.panel-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background-color: rgba(15, 23, 42, 0.4); backdrop-filter: blur(4px);
  z-index: 9990;
}

.premium-side-panel {
  position: fixed; top: 0; right: 0; width: 100%; max-width: 450px; height: 100vh;
  background: white; z-index: 9995;
  box-shadow: -10px 0 30px rgba(0,0,0,0.1);
}

.btn-close-panel {
  background: #f8f9fa; border: none; color: #6c757d;
  width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  transition: all 0.3s ease; cursor: pointer;
  &:hover { background: #fee2e2; color: #dc3545; transform: rotate(90deg); }
}

.panel-body {
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: #f1f1f1; }
  &::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
  &::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
}

/* TARJETAS DENTRO DEL PANEL LATERAL */
.pro-gallery-card {
  cursor: pointer; border: 1px solid rgba(0,0,0,0.05);
  .gallery-img-pro { transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1); }
  .pro-gallery-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(17, 42, 24, 0.5); backdrop-filter: blur(2px); opacity: 0; transition: all 0.4s ease; .zoom-icon-box { width: 45px; height: 45px; transform: scale(0.5); transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); } .truncate-text { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; transform: translateY(15px); transition: all 0.4s ease; } }
  &:hover { .gallery-img-pro { transform: scale(1.05); } .pro-gallery-overlay { opacity: 1; .zoom-icon-box { transform: scale(1); } .truncate-text { transform: translateY(0); } } }
}

/* ==========================================
   MODAL 2: LIGHTBOX DE FOTOS (GLASSMORPHISM)
   ========================================== */
.lightbox-overlay { 
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
  background-color: rgba(15, 23, 42, 0.85); 
  backdrop-filter: blur(15px); 
  z-index: 10000; display: flex; justify-content: center; align-items: center; 
}

.btn-close-lightbox { 
  position: absolute; top: 25px; right: 35px; background: transparent; border: none; 
  color: rgba(255,255,255,0.7); font-size: 3rem; cursor: pointer; line-height: 1; 
  z-index: 10001; transition: all 0.3s ease; 
  &:hover { transform: scale(1.1) rotate(90deg); color: #50c026; } 
}

.lightbox-content {
  position: relative; width: 95vw; max-width: 1200px; height: 85vh; 
  display: flex; align-items: center; justify-content: center;
  
  .btn-nav { 
    position: absolute; top: 50%; transform: translateY(-50%); 
    background: rgba(255,255,255,0.1); backdrop-filter: blur(5px);
    color: white; border: 1px solid rgba(255,255,255,0.2); 
    width: 55px; height: 55px; border-radius: 50%; display: flex; align-items: center; justify-content: center; 
    cursor: pointer; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); z-index: 10; 
    i { font-size: 32px; } 
    &:hover { background: #50c026; color: white; border-color: #50c026; transform: translateY(-50%) scale(1.1); box-shadow: 0 10px 20px rgba(80, 192, 38, 0.4); } 
    &.left { left: 10px; } &.right { right: 10px; } 
  }
  
  .img-container { 
    position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; 
  }
  
  .lightbox-img { 
    max-width: 90%; max-height: 85%; border-radius: 12px; 
    box-shadow: 0 25px 50px rgba(0,0,0,0.5); object-fit: contain; 
  }

  .glass-caption {
    background: rgba(0,0,0,0.4) !important;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
  }
}

@media (max-width: 768px) { 
  .lightbox-content .btn-nav { 
    width: 45px; height: 45px; i { font-size: 24px; }
    &.left { left: 0px; } &.right { right: 0px; } 
  } 
}

/* 6. CASOS DE ÉXITO */
.section-success { background: linear-gradient(135deg, #3e9452 0%, #2b6b39 100%); }
.success-bg-shape { background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px); }
.premium-success-card-compact { cursor: default; .icon-success-wrapper-compact { width: 42px; height: 42px; transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); i { font-size: 1.1rem; } } &:hover .icon-success-wrapper-compact { transform: scale(1.15) rotate(10deg); } }
.split-icon-container { position: absolute; left: 50%; transform: translateX(-50%); z-index: 10; bottom: -120px; }
</style>