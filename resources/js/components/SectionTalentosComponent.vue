<template>
   <div>
      <section class="section-hero text-white text-center pb-5" id="talentos">
        <div class="container py-2 position-relative">
            
            <div class="small mb-0 reveal-item">AMFPRO</div>
            <h1 class="hero-title fw-bolder mb-0 reveal-item delay-1">TALENTOS</h1>
            
            <div class="row justify-content-center mb-5">
            <div class="col-12 col-lg-9" style="width: 54% !important;">
                <p class="hero-description px-3 reveal-item delay-2">
                Talentos AMFpro es una iniciativa dedicada a impulsar el crecimiento de jóvenes futbolistas. 
                Su propósito es brindar, de manera gratuita, las condiciones necesarias para entrenar y 
                prepararse junto a exjugadores profesionales, fortaleciendo así su formación deportiva; 
                en nuestras tres sedes (CDMX, Guadalajara y Léon). Además, ofrece la oportunidad de 
                competir en torneos de gran prestigio a nivel nacional.
                </p>
            </div>
            </div>
            
            <div class="goal-split-container reveal-item delay-3">
            <img src="recursos/areaporteria.png" class="goal-img-split" alt="Portería Divisora" loading="lazy">
            </div>

        </div>
      </section>
      
      <section class="section-carousel">
        <div class="container px-md-5">
            <div class="shields-carousel-container">
            <div class="shields-track">
                <div v-for="(copa, index) in listaCopas" :key="index" class="shields-item">
                <img :src="copa.img" class="shield-icon" :alt="copa.nombre" loading="lazy">
                <span class="shield-text">{{ copa.nombre }}</span>
                </div>
            </div>
            </div>
        </div>
      </section>
      
      <section class="bg-white text-center section-trayectoria">
        <div class="container px-md-5">
            <div class="row g-0 border-top border-white-50 pt-4 px-lg-3 stats-container">
            
            <div v-for="(stat, index) in stats" 
                :key="stat.label" 
                class="col-6 col-md-3 stat-item"
                :class="{'border-end border-white-50': (index + 1) % 4 !== 0}">
                
                <div class="stat-label text-dark fw-bold">{{ stat.label }}</div>
                
                <div class="stat-number-wrapper reveal-flip" :style="{ transitionDelay: `${0.15 * index}s` }">
                  <div class="stat-number">{{ Math.floor(stat.current) }}</div>
                </div>
            </div>

            </div>
            
            <p class="section-sub text-dark mt-5 mb-0 reveal-up">Nuestra trayectoria en los</p>
            <h2 class="section-main-title amf-green-text fw-bold mb-3 reveal-up delay-1">TORNEOS</h2>
            <p class="quote-text section-sub text-dark mt-2 mb-5 reveal-up delay-2">"La disciplina convierte sueños en victorias."</p>
        </div>
      </section>

      <section class="section-torneos">
        <div class="container">
            <div class="row justify-content-center g-4 pt-3"> 
            <div v-for="(player, index) in playersData" :key="player.year" class="col-12 col-sm-6 col-lg-3 d-flex justify-content-center reveal-up" :class="'delay-' + (index % 4 + 1)">
                
                <div class="premium-player-card text-white text-center w-100 position-relative"> 
                  
                  <div class="photo-wrapper d-flex justify-content-center align-items-end position-relative z-2" style="height: 180px; margin-bottom: -40px;">
                      <!-- Efecto Aura Verde que aparece en Hover -->
                      <div class="player-glow position-absolute top-50 start-50 translate-middle"></div>
                      <img :src="player.img" class="player-photo position-relative z-2" alt="Jugador AMFPRO">
                  </div>
                  
                  <!-- AQUÍ SE MANTIENE EL FONDO VERDE (bg-amf-green) -->
                  <div class="card-green-body bg-amf-green p-4 position-relative z-1 d-flex flex-column transition-all shadow-sm" style="padding-top: 3.5rem !important;">
                      <div class="year-label fw-bold mt-2">TORNEOS</div>
                      <!-- Botón de año con color de acento -->
                      <div class="year-pill px-3 py-1 mb-3 transition-all d-inline-block mx-auto rounded-pill" style="background-color: #50c026;">{{ player.year }}</div>
                      
                      <div class="player-stats text-start small w-100 mt-auto">
                          <div class="d-flex justify-content-between py-2 border-bottom border-light border-opacity-25 stat-row transition-all">
                            <span>COPAS</span><strong class="stat-val transition-all">{{ player.copas }}</strong>
                          </div>
                          <div class="d-flex justify-content-between py-2 border-bottom border-light border-opacity-25 stat-row transition-all">
                            <span>CATEGORÍAS</span><strong class="stat-val transition-all">{{ player.cats }}</strong>
                          </div>
                          <div class="row g-0 pt-2 pb-2 border-bottom border-light border-opacity-25 stat-row transition-all">
                            <div class="col-8">PARTICIPANTES</div>
                            <div class="col-4 text-end"><strong class="stat-val transition-all">{{ player.parts }}</strong></div>
                          </div>
                          <div class="row g-0 pt-2 stat-row transition-all">
                            <div class="col-8">CASOS DE ÉXITO</div>
                            <div class="col-4 text-end"><strong class="stat-val transition-all text-white">{{ player.case }}</strong></div>
                          </div>
                      </div>
                  </div>
                </div>

            </div>
            </div>
        </div>
      </section>
      <section class="py-5 bg-white text-center section-galeria">
          <div class="container px-md-5">
            <p class="section-sub text-dark mb-0 reveal-up">Nuestros torneos en</p>
            <h2 class="section-main-title amf-green-text fw-bold mb-5 reveal-up delay-1">GALERÍA</h2>

            <div class="row align-items-center reveal-up delay-2">
              <div class="col-12 col-lg-2 text-lg-start mb-4 mb-lg-0 d-flex flex-column align-items-center align-items-lg-start">
                <label class="small text-dark fw-bold mb-2 d-flex align-items-center">
                  <i class="material-icons me-1" style="font-size: 1.1rem;">filter_alt</i>
                  Año de torneos
                </label>
                <div class="year-selector-wrapper position-relative w-100">
                  <select v-model="anioSeleccionado" class="custom-select-badge w-100" :disabled="cargandoTorneos">
                    <option v-for="year in aniosDisponibles" :key="year" :value="year">{{ year }}</option>
                  </select>
                  <i class="material-icons position-absolute icon-calendar">calendar_today</i>
                </div>
              </div>

              <div class="col-12 col-lg-10">
                <div v-if="cargandoTorneos" class="text-center py-5">
                  <div class="spinner-border text-success" role="status"></div>
                  <p class="mt-2 text-dark">Buscando torneos...</p>
                </div>

                <div v-else class="galeria-scroll-container pb-3 px-2 mt-2">
                  <div class="galeria-item" v-for="torneo in torneosDelAno" :key="torneo.id_talento">
                    
                    <!-- Nueva Tarjeta Galeria Ultra Pro -->
                    <div class="ultra-gallery-card shadow-sm border border-light position-relative" @click="abrirGaleria(torneo)">
                      <div class="img-zoom-wrapper position-absolute top-0 start-0 w-100 h-100">
                        <img :src="obtenerRutaImagen(torneo.hidder)" class="w-100 h-100 gallery-img" style="object-fit: cover;" :alt="torneo.copa" loading="lazy">
                      </div>

                      <!-- Panel Inferior Glassmorphism -->
                      <div class="gallery-glass-overlay position-absolute bottom-0 start-0 w-100 d-flex flex-column align-items-center justify-content-end p-3">
                        <div class="gallery-icon-wrapper mb-2 rounded-circle d-flex align-items-center justify-content-center">
                          <i class="material-icons text-white">zoom_in</i>
                        </div>
                        <div class="torneo-name fw-bold text-white mb-1 truncate-text text-shadow">{{ torneo.copa }}</div>
                        <div class="torneo-year text-white-50 small" style="font-size: 0.75rem;">{{ torneo.year }} - Ver galería</div>
                      </div>
                    </div>

                  </div>
                  <div v-if="torneosDelAno.length === 0" class="col-12 text-center py-4 w-100">
                    <i class="material-icons text-dark" style="font-size: 3rem;">event_busy</i>
                    <p class="text-dark mt-2">Aún no hay torneos cargados para el año {{ anioSeleccionado }}.</p>
                  </div>
                </div>
              </div>
            </div>
            <br>
          </div>
        </section>
        <div v-if="galeriaAbierta && torneoActivo" class="lightbox-overlay" @click.self="cerrarGaleria">
          <button class="btn-close-lightbox" @click="cerrarGaleria">&times;</button>

          <div v-if="cargandoImagenes" class="text-center text-white">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>
            <p class="mt-3">Cargando fotos...</p>
          </div>

          <div v-else class="lightbox-content">
            <button class="btn-nav left shadow-lg" @click.stop="anteriorFoto" v-if="imagenesTorneoActual.length > 1">
              <i class="material-icons">chevron_left</i>
            </button>

            <div class="img-container">
              <img :src="obtenerRutaImagen(imagenesTorneoActual[fotoActualIndex])" class="lightbox-img" alt="Foto Galería">
              
              <div class="lightbox-caption">
                <h5 class="mb-0 fw-bold">{{ torneoActivo.copa }}</h5>
                <span class="small">{{ fotoActualIndex + 1 }} de {{ imagenesTorneoActual.length }}</span>
              </div>
            </div>

            <button class="btn-nav right shadow-lg" @click.stop="siguienteFoto" v-if="imagenesTorneoActual.length > 1">
              <i class="material-icons">chevron_right</i>
            </button>
          </div>
        </div>

        <!-- 6. CASOS DE ÉXITO (EFECTO SHINE) MANTENIENDO TU HTML Y TAMAÑOS AL FINAL -->
        <section class="section-success py-5 text-white text-center position-relative">
          <div class="container px-md-5">
            <div class="row g-4 justify-content-center mb-5 reveal-up">
              <div v-for="(caso, index) in casosExito" :key="caso.id" class="col-6 col-md-4 col-lg-2" :class="'delay-' + (index % 6 + 1)">
                  
                  <!-- Contenedor Ultra Pro de Casos de Éxito -->
                  <div class="ultra-success-wrapper position-relative overflow-hidden shadow-lg rounded-4">
                      <!-- Rayo de luz -->
                      <div class="shine-effect"></div>
                      
                      <!-- Imágenes superpuestas -->
                      <img :src="`recursos/casoexito-${caso.id}-color.png`" class="img-fluid success-img-color position-absolute top-0 start-0 w-100 h-100" :alt="`Éxito ${caso.nombre} Color`">
                      <img :src="`recursos/casoexito-${caso.id}.png`" class="img-fluid success-img-bw position-absolute top-0 start-0 w-100 h-100" :alt="`Éxito ${caso.nombre} B&N`">
                      
                      <!-- Overlay de texto -->
                      <div class="success-info-panel position-absolute bottom-0 start-0 w-100 p-2 d-flex flex-column justify-content-end text-center">
                          <div class="player-name-overlay fw-bold text-white shadow-text mb-0">{{ caso.nombre }}</div>
                          <div class="player-club-overlay text-white-50 lh-1 mt-1" style="font-size: 0.65rem;">
                            Reclutado por <br><span class="text-white fw-bold shadow-text">{{ caso.club }}</span>
                          </div>
                      </div>
                  </div>

              </div>
            </div>
            
            <!-- Textos intactos tal como los tenías -->
            <div class="row justify-content-center mt-5 reveal-up delay-1">
              <div class="col-11 col-md-10 col-lg-8">
                  <p class="text-center">
                  Para unirte a este gran proyecto, mantente atento a nuestras redes sociales, donde publicamos las convocatorias para los próximos escauteos y la selección de nuevos integrantes de Talentos AMFPRO.
                  </p>
              </div>
            </div>
            <!-- <h2 class="section-main-title fw-bold mt-5 reveal-up delay-2" style="color: #50c026;">ASESORÍA Y</h2>
            <h2 class="section-main-title fw-bold mb-5 reveal-up delay-3 espacio-extra-movil">SEGUIMIENTO JURÍDICO</h2> -->
          </div>
          <br><br><br><br><br>
          <!-- El mazo se queda sin animación para que no se descentre NUNCA (Intacto) -->
          <div class="split-icon-container">
              <img src="recursos/documento-reloj.png">
          </div>
        </section>
   </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['scrollPosition'],
    data() {
        return {
            observer: null,
            numerosAnimados: false, // Control para saber si ya contamos
            listaCopas: [
                { nombre: 'COPA BAJÍO', img: 'recursos/copa-1.png' },
                { nombre: 'COPA CHIVAS', img: 'recursos/copa-2.png' },
                { nombre: 'COPA SULTANES', img: 'recursos/copa-3.png' },
                { nombre: 'COPA TECOS', img: 'recursos/copa-4.png' },
                { nombre: 'USA CUP', img: 'recursos/copa-5.png' },
                { nombre: 'COPA VALLARTA', img: 'recursos/copa-6.png' },
                { nombre: 'COPA RECORD', img: 'recursos/copa-7.png' },
                { nombre: 'COPA TITANES', img: 'recursos/copa-8.png' },
            ],
            casosExito: [
              { id: 1, nombre: 'Osmar Piña', club: 'Academia de Toluca FC' },
              { id: 2, nombre: 'Emerson Ponce', club: 'Academia de Toluca FC' },
              { id: 3, nombre: 'Ronaldo Aguilar', club: 'Academia del Club Atlás' },
              { id: 4, nombre: 'Johan Guerrero', club: 'Fuerzas Básicas Cruz Azul' },
              { id: 5, nombre: 'Alan Valdivia', club: 'Fuerzas Básicas Tecos' },
              { id: 6, nombre: 'Brian Gutiérrez', club: 'Fuerzas Básicas UDG' }
            ],
            anioSeleccionado: 2023,
            torneosDelAno: [], 
            cargandoTorneos: false,
            
            galeriaAbierta: false,
            torneoActivo: null,
            fotoActualIndex: 0,
            imagenesTorneoActual: [], 
            cargandoImagenes: false,
            
            // Agregamos 'current' para que empiece a contar desde cero visualmente
            stats: [
                { val: 0, current: 0, label: 'Torneos Oficiales' }, 
                { val: 0, current: 0, label: 'Talentos' },
                { val: 0, current: 0, label: 'Experiencia' }, 
                { val: 3, current: 0, label: 'Sedes' }
            ],
            playersData: []
        }
    },
    computed: {
      aniosDisponibles() {
        const anioInicio = 2023;
        const anioActual = new Date().getFullYear(); 
        let anios = [];
        for (let i = anioActual; i >= anioInicio; i--) {
          anios.push(i);
        }
        return anios;
      }
    },
    watch: {
      anioSeleccionado(nuevoAno) {
        this.obtenerTorneos(nuevoAno);
      }
    },
    mounted() {
      this.obtenerTorneos(this.anioSeleccionado);
      this.datosAgrupados();
      this.datosTalentos();

      // Observador bidireccional
      const options = { root: null, rootMargin: '0px', threshold: 0.15 };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            
            // Si el Hero es visible
            if(entry.target.classList.contains('section-hero')) {
              entry.target.classList.add('hero-visible');
            }

            // Si los números son visibles y no se han animado aún
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
      // Contador Javascript: Incrementa los números desde 0 a su valor real
      animarContadores() {
        this.stats.forEach(stat => {
          let start = 0;
          const target = stat.val;
          if (target === 0) {
            stat.current = 0;
            return;
          }
          const duration = 2000; // La cuenta durará 2 segundos
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
          // Observamos ahora también la section-trayectoria y los flips
          document.querySelectorAll('.reveal-up, .reveal-item, .section-hero, .section-trayectoria, .reveal-flip').forEach(el => {
            if (this.observer) this.observer.observe(el);
          });
        });
      },
      datosAgrupados() {
        axios.get('torneos_agrupados_ano').then(response => {
          this.playersData = response.data.map((item, index) => {
            return {
              year: item.year,
              img: `recursos/jugador${(index % 3) + 1}.png`, 
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
          
          // Por si la conexión a BD tardó y el usuario ya estaba viendo esta sección
          if (this.numerosAnimados) {
            this.animarContadores();
          }
          this.refrescarAnimaciones();
        })
      },
      async obtenerTorneos(ano) {
        this.cargandoTorneos = true;
        try {
          const respuesta = await axios.get(`filtra_torneo/${ano}`);
          this.torneosDelAno = respuesta.data;
          this.refrescarAnimaciones(); 
        } catch (error) {
          console.error("Error al cargar los torneos:", error);
          this.torneosDelAno = [];
        } finally {
          this.cargandoTorneos = false;
        }
      },

      async abrirGaleria(torneo) {
        this.torneoActivo = torneo;
        this.galeriaAbierta = true;
        this.cargandoImagenes = true;
        this.imagenesTorneoActual = [];
        document.body.style.overflow = 'hidden';

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
          if (!nombreImagen) return 'recursos/default.png';
          if (nombreImagen.startsWith('http')) return nombreImagen;
          return 'http://amfpro.mx/intranet/public/ArchivosSistema/GaleriaTalentos/' + nombreImagen;
      },

      cerrarGaleria() {
        this.galeriaAbierta = false;
        this.torneoActivo = null;
        document.body.style.overflow = '';
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
/* Solo importamos Roboto, removimos Montserrat */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

/* =========================================================
   ESTILOS ORIGINALES INTACTOS (AHORA SOLO ROBOTO)
   ========================================================= */
.amf-landing-page {
  font-family: 'Roboto', sans-serif !important;
}

* {
  font-family: 'Roboto', sans-serif !important;
}

.material-icons {
  font-family: 'Material Icons' !important;
}

$amf-dark: #3E9452;
$amf-main: #3e9452;
$amf-accent: #50c026;

.bg-amf-green { background-color: $amf-main; }

.fw-black { font-weight: 900 !important; }

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
  bottom: -160px;
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

.reveal-up { 
  opacity: 0; 
  transform: translateY(40px); 
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); 
}
.is-visible.reveal-up, .is-visible .reveal-up { 
  opacity: 1; 
  transform: translateY(0); 
}

.reveal-flip {
  opacity: 0;
  transform: perspective(600px) rotateX(-90deg);
  transform-origin: center top;
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.is-visible.reveal-flip, .is-visible .reveal-flip {
  opacity: 1;
  transform: perspective(600px) rotateX(0deg);
}

.delay-1 { transition-delay: 0.15s; }
.delay-2 { transition-delay: 0.3s; }
.delay-3 { transition-delay: 0.45s; }

.section-hero { 
  background: $amf-dark; 
  position: relative; 
  z-index: 1; 
  height: 450px;
  .hero-title { 
    font-size: 5rem; 
    letter-spacing: -2px; 
  }
  @media (min-width: 768px) { 
    .hero-title { font-size: 5rem; letter-spacing: -2px; }
    .hero-description { font-size: .8rem; text-align: justify; padding-top: 25px; }
  }
  .hero-description {
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    text-align: justify; 
  }
  .goal-split-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    top: -64px;
  }
  .goal-img-split {
    filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.2)); 
  }

  @media (max-width: 1400px) {
    .goal-img-split { filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.2)); }
    .goal-split-container { position: absolute; left: 50%; transform: translateX(-50%); z-index: 10; top: -64px; }
  }
  @media (max-width: 1024px) {
    .goal-img-split { filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.2)); width: 1050px; height: 1000px; }
    .goal-split-container { position: absolute; left: 50%; transform: translateX(-50%); z-index: 10; top: -64px; }
  }
  @media (max-width: 768px) {
      .goal-img-split { max-width: 600px; height: 900px; }
      .goal-split-container { top: -30px; }
      .hero-title { font-size: 4rem; letter-spacing: -2px; }
      .hero-description { margin-top: 36px; font-size: 0.6rem; font-weight: 400; color: rgba(255, 255, 255, 0.9); text-align: justify; }
  }

  

  .reveal-item {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .goal-split-container.reveal-item {
    transform: translateX(-50%) translateY(80px) scale(0.95);
  }

  &.hero-visible {
    .reveal-item { opacity: 1; transform: translateY(0); }
    .goal-split-container.reveal-item { transform: translateX(-50%) translateY(0) scale(1); }
  }
}

.section-carousel{
  .shields-carousel-container { width: 100%; overflow: hidden; z-index: 0; }
  .shields-track { display: flex; width: max-content; animation: scrollLeft 40s linear infinite; }
  @keyframes scrollLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .shields-item { display: flex; align-items: center; gap: 15px; margin: 0 40px; }
  .shield-icon { height: 50px; width: auto; object-fit: contain; }
  .shield-text { font-size: 1.2rem; white-space: nowrap; }
}

.section-trayectoria {
  position: relative;
  .stats-container { margin-top: clamp(100px, 20vh, 246px); }
  .stat-item {
    padding: 1rem; text-align: center;
    @media (max-width: 767px) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      &:nth-child(2n) { border-right: none !important; }
      &:nth-last-child(-n+2) { border-bottom: none; }
    }
  }
  .stat-label { font-size: clamp(14px, 1.5vw, 24px); line-height: 1.2; margin-bottom: 5px; }
  .stat-number { font-size: clamp(40px, 5vw, 80px); color: #50c026; line-height: 1; display: inline-block; }
}

.year-selector-wrapper {
  display: inline-block; position: relative;
  .custom-select-badge {
    appearance: none; -webkit-appearance: none; -moz-appearance: none;
    background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 30px;
    padding: 10px 45px 10px 20px; font-weight: bold; font-size: 1rem; color: #333;
    cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    &:hover, &:focus { outline: none; border-color: #50c026; box-shadow: 0 4px 10px rgba(80, 192, 38, 0.15); }
  }
  .icon-calendar { right: 15px; top: 50%; transform: translateY(-50%); font-size: 20px; color: #50c026; pointer-events: none; }
}

.galeria-scroll-container {
  display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 20px; padding-bottom: 20px; 
  scroll-behavior: smooth; -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar { height: 6px; }
  &::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
  &::-webkit-scrollbar-thumb { background: #c1c1c1; border-radius: 10px; }
  &:hover::-webkit-scrollbar-thumb { background: #50c026; }
  .galeria-item {
    flex: 0 0 auto; width: calc(25% - 15px);
    @media (max-width: 991px) { width: calc(33.333% - 14px); }
    @media (max-width: 768px) { width: calc(50% - 10px); }
    @media (max-width: 480px) { width: 70%; }
  }
}

.lightbox-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.9); backdrop-filter: blur(5px); z-index: 10000; display: flex; justify-content: center; align-items: center; }
.btn-close-lightbox { position: absolute; top: 20px; right: 30px; background: transparent; border: none; color: white; font-size: 3rem; cursor: pointer; line-height: 1; z-index: 10001; transition: transform 0.2s ease; &:hover { transform: scale(1.1); color: #50c026; } }
.lightbox-content {
  position: relative; width: 90vw; max-width: 1000px; height: 80vh; display: flex; align-items: center; justify-content: center;
  .btn-nav { position: absolute; top: 50%; transform: translateY(-50%); background: white; color: #50c026; border: none; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; z-index: 10; i { font-size: 30px; } &:hover { background: #50c026; color: white; transform: translateY(-50%) scale(1.1); } &.left { left: -25px; } &.right { right: -25px; } }
  .img-container { position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
  .lightbox-img { max-width: 100%; max-height: 90%; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); object-fit: contain; animation: fadeIn 0.4s ease; }
  .lightbox-caption { margin-top: 15px; color: white; text-align: center; background: rgba(0, 0, 0, 0.5); padding: 10px 20px; border-radius: 20px; }
}
@keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
@media (max-width: 768px) { .lightbox-content .btn-nav { &.left { left: 10px; } &.right { right: 10px; } } }


/* =========================================================
   ESTILOS ULTRA PRO - APLICADOS SOLO EN LA MITAD INFERIOR
   ========================================================= */

/* 4. TORNEOS: TARJETAS DE JUGADORES (AURA Y NEÓN) */
.premium-player-card {
  max-width: 320px;
  margin: 0 auto;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  .transition-all { transition: all 0.4s ease; }

  .photo-wrapper {
    .player-glow {
      width: 150px; height: 150px;
      background: radial-gradient(circle, rgba(80,192,38,0.5) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.6s ease, transform 0.6s ease;
      z-index: 1;
    }
    .player-photo {
      transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.5s ease;
      max-height: 220px; object-fit: cover;
    }
  }
  
  .card-green-body {
    border-radius: 2.2rem;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateY(-15px);
    
    .card-green-body {
      box-shadow: 0 25px 50px rgba(80, 192, 38, 0.3) !important;
      /* Efecto de borde de luz / neón sutil */
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.3), 0 25px 50px rgba(80, 192, 38, 0.2) !important;
    }
    
    .player-glow {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.6);
    }
    
    .player-photo {
      transform: scale(1.1) translateY(-5px);
      filter: drop-shadow(0 20px 25px rgba(0,0,0,0.3)) !important;
    }

    .year-pill {
      background-color: #fff !important;
      color: $amf-main !important;
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .stat-row {
      border-color: rgba(255,255,255,0.4) !important;
      transform: translateX(4px);
    }
    
    .stat-val {
      transform: scale(1.1);
      display: inline-block;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  }
}

/* 5. GALERÍA: CINEMÁTICA Y GLASSMORPHISM */
.ultra-gallery-card {
  cursor: pointer;
  border-radius: 25px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  .img-zoom-wrapper {
    .gallery-img { 
      transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); 
    }
  }

  .gallery-glass-overlay {
    background: linear-gradient(to top, rgba(17, 42, 24, 0.9) 0%, transparent 100%);
    opacity: 0.8;
    transition: all 0.5s ease;
    transform: translateY(30px);

    .gallery-icon-wrapper {
      width: 40px; height: 40px;
      background: rgba(255,255,255,0.2);
      backdrop-filter: blur(5px);
      opacity: 0;
      transform: scale(0.5);
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
    .truncate-text { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
    
    div { transition: transform 0.4s ease; }
  }

  &:hover {
    box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
    border-color: rgba(80, 192, 38, 0.4) !important;
    transform: translateY(-8px);
    
    .img-zoom-wrapper .gallery-img { transform: scale(1.15); }
    
    .gallery-glass-overlay {
      opacity: 1;
      transform: translateY(0);
      background: linear-gradient(to top, rgba(62, 148, 82, 0.95) 0%, rgba(62, 148, 82, 0.4) 60%, transparent 100%);
      
      .gallery-icon-wrapper {
        opacity: 1;
        transform: scale(1) translateY(-5px);
        background: $amf-accent;
      }
      
      div { transform: translateY(-3px); }
    }
  }
}

/* 6. CASOS DE ÉXITO: EFECTO RELÁMPAGO / SHINE */
.section-success {
  background-color: $amf-main;
}

.ultra-success-wrapper {
  aspect-ratio: 4/5;
  cursor: default;
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.5s ease;
  
  .success-img-color, .success-img-bw {
    object-fit: cover;
    transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  
  .success-img-bw { z-index: 2; filter: grayscale(100%) contrast(110%); }
  /* La foto a color inicia un poco grande para que al hacer hover se "aleje/respire" (Breathing Effect) */
  .success-img-color { z-index: 1; transform: scale(1.1); } 

  .success-info-panel {
    background: linear-gradient(to top, rgba(17, 42, 24, 0.8) 0%, transparent 100%);
    z-index: 3;
    opacity: 0.9;
    transition: all 0.5s ease;
    padding-bottom: 10px !important;
  }
  
  .shadow-text { text-shadow: 0 2px 4px rgba(0,0,0,0.8); }

  /* Efecto Relámpago (Shine) que atraviesa la tarjeta */
  .shine-effect {
    position: absolute;
    top: 0; left: -100%;
    width: 50%; height: 100%;
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
    transform: skewX(-25deg);
    z-index: 5;
    pointer-events: none;
    transition: none; 
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.3) !important;
    
    .success-img-bw { opacity: 0; }
    .success-img-color { transform: scale(1); } /* Breathing effect: vuelve a tamaño normal */
    
    .success-info-panel {
      background: linear-gradient(to top, rgba(62, 148, 82, 0.95) 0%, rgba(62, 148, 82, 0.4) 60%, transparent 100%);
      opacity: 1;
      padding-bottom: 20px !important; /* Desliza el texto hacia arriba */
    }

    .shine-effect {
      left: 200%; /* Mueve la luz hasta la derecha */
      transition: left 0.8s ease-in-out; /* La luz tarda 0.8s en cruzar */
    }
  }
}
</style>