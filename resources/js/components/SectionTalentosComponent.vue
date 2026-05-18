<template>
   <div>
      <section class="section-hero text-white text-center pb-5" :class="{ 'hero-visible': this.scrollPosition > 1350 }" id="talentos">
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
            <img src="recursos/areaporteria.png" class="goal-img-split" alt="Portería Divisora">
            </div>

        </div>
      </section>
      <section class="section-carousel">
        <div class="container px-md-5">
            <div class="shields-carousel-container">
            <div class="shields-track">
                <div v-for="(copa, index) in listaCopas" :key="index" class="shields-item">
                <img :src="copa.img" class="shield-icon" :alt="copa.nombre">
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
                <div class="stat-label">{{ stat.label }}</div>
                <div class="stat-number">{{ stat.val }}</div>
            </div>
            </div>
            <p class="section-sub text-muted mt-5 mb-0">Nuestra trayectoria en los</p>
            <h2 class="section-main-title amf-green-text fw-bold mb-3">TORNEOS</h2>
            <p class="quote-text section-sub text-secondary fw-bold mt-2 mb-5">"La disciplina convierte sueños en victorias."</p>
        </div>
      </section>
      <section class="section-torneos">
        <div class="container">
            <div class="row justify-content-center g-4"> 
            <div v-for="player in playersData" :key="player.year" class="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
                <div class="player-card text-white text-center"> 
                <div class="photo-wrapper d-flex justify-content-center">
                    <img :src="player.img" class="player-photo" alt="Jugador AMFPRO">
                </div>
                <div class="card-green-body p-4" style="padding-top: 4rem !important;">
                    <div class="year-label fw-bold">TORNEOS</div>
                    <div class="year-pill px-1 py-1 mb-2">{{ player.year }}</div>
                    
                    <div class="player-stats text-start small">
                        <div class="d-flex justify-content-between py-2">
                        <span>COPAS</span><strong>{{ player.copas }}</strong>
                        </div>
                        <div class="d-flex justify-content-between py-2">
                        <span>CATEGORÍAS</span><strong>{{ player.cats }}</strong>
                        </div>
                        <div class="row g-0 pt-2">
                        <div class="col-8">PARTICIPANTES</div>
                        <div class="col-4 text-end"><strong>{{ player.parts }}</strong></div>
                        </div>
                        <div class="row g-0 pt-2">
                        <div class="col-8">CASOS DE ÉXITO</div>
                        <div class="col-4 text-end"><strong>{{ player.case }}</strong></div>
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
            <p class="section-sub text-muted mb-0">Nuestros torneos en</p>
            <h2 class="section-main-title amf-green-text fw-bold mb-5">GALERÍA</h2>

            <div class="row align-items-center">
              <div class="col-12 col-lg-2 text-lg-start mb-4 mb-lg-0 d-flex flex-column align-items-center align-items-lg-start">
                <label class="small text-muted fw-bold mb-2">Año de torneos</label>
                <div class="year-selector-wrapper position-relative">
                  <select v-model="anioSeleccionado" class="custom-select-badge" :disabled="cargandoTorneos">
                    <option v-for="year in aniosDisponibles" :key="year" :value="year">{{ year }}</option>
                  </select>
                  <i class="material-icons position-absolute icon-calendar">calendar_today</i>
                </div>
              </div>

              <div class="col-12 col-lg-10">
                
                <div v-if="cargandoTorneos" class="text-center py-5">
                  <div class="spinner-border text-success" role="status"></div>
                  <p class="mt-2 text-muted">Buscando torneos...</p>
                </div>

                <div v-else class="galeria-scroll-container">
                  <div class="galeria-item" v-for="torneo in torneosDelAno" :key="torneo.id_talento">
                    <div class="gallery-card" @click="abrirGaleria(torneo)">
                      <div class="img-wrapper">
                        <img :src="obtenerRutaImagen(torneo.hidder)" class="img-fluid gallery-img" :alt="torneo.copa">
                        <div class="hover-overlay">
                          <i class="material-icons text-white" style="font-size: 2rem;">zoom_in</i>
                        </div>
                      </div>
                      <div class="gallery-caption mt-2 text-center">
                        <div class="torneo-name fw-bold text-dark">{{ torneo.copa }}</div>
                        <div class="torneo-year text-muted small">{{ torneo.year }} - Ver galería</div>
                      </div>
                      
                    </div>
                  </div>
                  <div v-if="torneosDelAno.length === 0" class="col-12 text-center py-4">
                    <i class="material-icons text-muted" style="font-size: 3rem;">event_busy</i>
                    <p class="text-muted mt-2">Aún no hay torneos cargados para el año {{ anioSeleccionado }}.</p>
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
        <section class="section-success py-5 text-white text-center position-relative" style="height: 740px;">
        <div class="container px-md-5">
            <div class="row g-4 justify-content-center mb-5">
            <div v-for="n in 6" :key="n" class="col-2">
                <div class="success-profile-wrapper">
                <img :src="`recursos/casoexito-${n}-color.png`" class="img-fluid success-img-color" alt="Éxito Color">
                
                <img :src="`recursos/casoexito-${n}.png`" class="img-fluid success-img-bw grayscale" alt="Éxito B&N">
                
                <div class="success-overlay">
                    <div class="overlay-content p-2">
                    <div class="player-name-overlay fw-bold">Fulanito Martínez</div>
                    <div class="player-club-overlay">Reclutado por Club de Tecos FB</div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div class="row justify-content-center mt-5">
            <div class="col-11 col-md-10 col-lg-8">
                <p class="text-center">
                Para unirte a este gran proyecto, mantente atento a nuestras redes sociales, donde publicamos las convocatorias para los próximos escauteos y la selección de nuevos integrantes de Talentos AMFPRO.
                </p>
            </div>
            </div>
            <h2 class="section-main-title fw-bold mt-5" style="color: #50c026;">ASESORÍA Y</h2>
            <h2 class="section-main-title fw-bold mb-5">SEGUIMIENTO JURÍDICO</h2>
        </div>

        <div class="split-icon-container">
            <img src="recursos/mazo-icon.png">
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
            listaCopas: [
                { nombre: 'COPA CHIVAS', img: 'recursos/copa-1.png' },
                { nombre: 'COPA BAJÍO', img: 'recursos/copa-2.png' },
                { nombre: 'COPA MAZATLÁN', img: 'recursos/copa-3.png' },
                { nombre: 'COPA ACAPULCO', img: 'recursos/copa-4.png' },
                { nombre: 'COPA VALLARTA', img: 'recursos/copa-5.png' },
                { nombre: 'COPA CANCÚN', img: 'recursos/copa-6.png' }
            ],
            
            // Variables de la galería conectada a BD
            anioSeleccionado: 2023,
            torneosDelAno: [], // Aquí guardamos los torneos que devuelve Laravel
            cargandoTorneos: false,
            
            galeriaAbierta: false,
            torneoActivo: null,
            fotoActualIndex: 0,
            imagenesTorneoActual: [], // Aquí guardamos las fotos del torneo abierto
            cargandoImagenes: false,
            torneos_experiencia:0,
            total_jugadores:0,
            total_torneos:0,
            stats: [
                { val: 0, label: 'Torneos Oficiales' }, 
                { val: 0, label: 'Talentos' },
                { val: 0, label: 'Experiencia' }, 
                { val: 3, label: 'Sedes' }
            ],
            playersData: [
                { year: '2023', img: 'recursos/jugador1.png', copas: '4', cats: '2007/10', parts: '90', case: '0' },
                { year: '2024', img: 'recursos/jugador2.png', copas: '6', cats: '2007/15', parts: '120', case: '5' },
                { year: '2025', img: 'recursos/jugador3.png', copas: '7', cats: '2010/15', parts: '120', case: '9' }
            ]
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
    },
    methods: {
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

        }).catch(error => {
          console.error("Error al cargar torneos agrupados:", error);
        });
      },
      datosTalentos(){
        axios.get('datos_talentos').then(response=>{
          this.stats[0].val = response.data.total_torneos;
          this.stats[1].val = response.data.total_jugadores;
          this.stats[2].val = response.data.total_experiencia;
        })
      },
      async obtenerTorneos(ano) {
        this.cargandoTorneos = true;
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

      async abrirGaleria(torneo) {
        this.torneoActivo = torneo;
        this.galeriaAbierta = true;
        this.cargandoImagenes = true;
        this.imagenesTorneoActual = [];
        document.body.style.overflow = 'hidden';

        try {
          // Usamos id_talento según tu modelo
          const respuesta = await axios.get(`imagenes_torneo/${torneo.id_talento}`);
          
          // Mapeamos el campo "img" de tu modelo IMGTalentos
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

      // Helper para las rutas de las imágenes (Igual que en noticias)
      obtenerRutaImagen(nombreImagen) {
          if (!nombreImagen) return 'recursos/default.png';
          if (nombreImagen.startsWith('http')) return nombreImagen;
          
          // Ajusta esta ruta según la carpeta real donde guardas las fotos de talentos
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

/** estilos de la primera seccion */
.section-hero { 
  background: $amf-dark; 
  position: relative; 
  z-index: 1; 
  height: 450px;
  // overflow: hidden;
  .hero-title { 
    font-size: 5rem; 
    letter-spacing: -2px; 
  }
  @media (min-width: 768px) { 
    .hero-title { font-size: 5rem; letter-spacing: -2px; }
    .hero-description {         font-size: .8rem;
          text-align: justify;
          padding-top: 25px;
    }
  }
  .hero-description {
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    text-align: justify; /* Justificado como en la imagen original */
  
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

  /* Laptops y pantallas medianas */
  @media (max-width: 1400px) {
    .goal-img-split {
      filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.2)); 
    }
    .goal-split-container {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      top: -64px;
    }
  }

  /* Tablets y laptops pequeñas */
  @media (max-width: 1024px) {
    .goal-img-split {
      filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.2)); 
      width: 1050px;
      height: 1000px;
    }
    .goal-split-container {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      top: -64px;
    }
  }

  /* Dispositivos móviles (Pantalla vertical) */
  @media (max-width: 768px) {
      .goal-img-split {
        max-width: 600px;
        height: 900px;
      }
      .goal-split-container {
        top: -30px;
      }
      .hero-title { 
        font-size: 4rem; 
        letter-spacing: -2px; 
      }
      .hero-description {
        margin-top: 36px;
        font-size: 0.6rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.9);
        text-align: justify; /* Justificado como en la imagen original */
    
    }
  }

  .reveal-item {
    opacity: 0;
    transform: translateY(50px); /* Empiezan desplazados hacia abajo */
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  /* La imagen de la portería la desplazamos un poco diferente para mejor efecto */
  .goal-split-container.reveal-item {
    transform: translateX(-50%) translateY(80px) scale(0.95);
  }

  /* =========================================
     ESTADOS VISIBLES (CUANDO EL SCROLL LLEGA)
     ========================================= */
  &.hero-visible {
    .reveal-item {
      opacity: 1;
      transform: translateY(0);
    }
    
    .goal-split-container.reveal-item {
      transform: translateX(-50%) translateY(0) scale(1);
    }

    /* Tiempos de cascada para que no aparezcan de golpe */
    .delay-1 { transition-delay: 0.15s; }
    .delay-2 { transition-delay: 0.3s; }
    .delay-3 { transition-delay: 0.5s; }
  }
  
}
/** finaliza estilos de la primera seccion */

/** estilos de la seccion caousel */ 
.section-carousel{
  .shields-carousel-container {
    width: 100%;
    overflow: hidden;
    z-index: 0;
    // opacity: 0.4; 
  }
  .shields-track {
    display: flex;
    width: max-content;
    animation: scrollLeft 40s linear infinite;
  }

  @keyframes scrollLeft {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .shields-item {
    display: flex;
    align-items: center;
    gap: 15px; 
    margin: 0 40px; 
  }

  .shield-icon {
    height: 50px;
    width: auto;
    object-fit: contain;
  }

  .shield-text {
    // font-weight: 800;
    font-size: 1.2rem;
    white-space: nowrap; 
  }
}
/** finaliza estilos de la seccion caousel */ 

/** estilos de la parte de torneos */
.section-torneos{
  .player-card {
    width: 100%;
    max-width: 320px; /* Evita que la tarjeta crezca demasiado en monitores grandes */
    position: relative;
    margin: 0 auto; /* Centrado horizontal del bloque */
  
  }

  .photo-wrapper {
    position: relative;
    z-index: 5; 
    width: 100%;
  }

  .player-photo {
    /* Tamaño responsivo usando clamp para evitar deformación */
    // width: clamp(120px, 15vw, 160px); 
    // height: clamp(120px, 15vw, 160px); 
    object-fit: cover;
    /* El margen negativo inferior crea el efecto de solapamiento compartido */
    margin-bottom: -60px; 
  
  }

  .card-green-body {
    background-color: $amf-main; /* Color original mantenido */
    border-radius: 2.2rem;
    position: relative;
    z-index: 1;
  
  }

  .year-pill {
    background-color: $amf-accent; /* Color original mantenido */
    border-radius: 10px;
    font-weight: 900;
    display: inline-block;
  
  }
}
/** finaliza estilos de la parte de torneos */

/** estilos de la parte de torneos trayectoria */
.section-trayectoria {
  position: relative;
  .stats-container {
    margin-top: clamp(100px, 20vh, 246px);
  }

  .stat-item {
    padding: 1rem;
    text-align: center;
    @media (max-width: 767px) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      &:nth-child(2n) {
        border-right: none !important;
      }
      &:nth-last-child(-n+2) {
        border-bottom: none;
      }
    }
  }

  .stat-label {
    font-size: clamp(14px, 1.5vw, 24px);
    line-height: 1.2;
    margin-bottom: 5px;
    color: black;
  }

  .stat-number {
    font-size: clamp(40px, 5vw, 80px);
    // font-weight: 800;
    color: #50c026;
    line-height: 1;
}
}
/** finaliza estilos de la parte de torneos trayectoria */

/** estilos de seccion galeria */
.section-galeria {
  .year-selector-badge {
    background-color: $amf-accent;
    color: white;
    border-radius: 8px;
    font-weight: 800;
    font-size: 0.9rem;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    width: fit-content;
  }

  .gallery-card {
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-5px);
    }
  }

  .gallery-img {
    border-radius: 25px; 
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 100%;
  }

  .gallery-caption {
    .torneo-name {
      font-weight: 600;
      color: #444;
      font-size: 0.95rem;
      line-height: 1;
    }
    .torneo-year {
      font-weight: 400;
      color: #777;
      font-size: 0.85rem;
    }
  }
}
/** finaliza estilos de seccion galeria */

/** estilos de seccion casos de exito */
.section-success {
  background-color: $amf-main;
  overflow: visible;

  .success-profile-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    aspect-ratio: 4 / 5;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);

    .success-img-bw {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 2;
      transition: opacity 0.5s ease;
      filter: grayscale(100%);
    }

    .grayscale { 
      filter: grayscale(100%); 
      transition: 0.3s; &:hover { filter: grayscale(0); } 
    }

    .success-img-color {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    .success-overlay {
      position: absolute;
      bottom: -100%;
      left: 0;
      width: 100%;
      height: 40%;
      background: rgba(80, 192, 38, 0.85);
      z-index: 3;
      transition: bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    &:hover {
      .success-img-bw {
        opacity: 0;
      }
      .success-overlay {
        bottom: 0;
      }
    }
  }

  .overlay-content {
    .player-name-overlay {
      font-size: 0.85rem;
      line-height: 1.1;
    }
    .player-club-overlay {
      font-size: 0.65rem;
      opacity: 0.9;
    }
  }
}
/** finaliza estilos de seccion casos de exito */

/* Estilos para el selector de año */
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

/* Efecto hover en las tarjetas de galería */
.gallery-card {
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    .hover-overlay { opacity: 1; }
  }
  
  .img-wrapper {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);

    .hover-overlay {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(80, 192, 38, 0.6); /* Verde semi-transparente */
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity 0.3s ease;
    }
  }
}

/* =========================================
   ESTILOS DEL LIGHTBOX (MODAL GALERÍA)
   ========================================= */
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
      max-width: 100%; max-height: 90%; border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5); object-fit: contain;
      animation: fadeIn 0.4s ease; /* Transición suave al cambiar foto */
    }

    .lightbox-caption {
      margin-top: 15px; color: white; text-align: center;
      background: rgba(0, 0, 0, 0.5); padding: 10px 20px; border-radius: 20px;
    }
  }
}

/* =========================================
   GALERÍA CON SCROLL HORIZONTAL
   ========================================= */
.galeria-scroll-container {
  display: flex;
  flex-wrap: nowrap; /* Fuerza a que TODO se mantenga en una sola fila */
  overflow-x: auto; /* Habilita el scroll horizontal si hay muchos items */
  gap: 20px; /* Separación entre tarjetas */
  padding-bottom: 20px; /* Espacio para que la sombra (hover) no se corte */
  
  /* Desplazamiento suave tipo app móvil */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  /* Oculta la barra de scroll fea en navegadores webkit (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1; 
    border-radius: 10px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #50c026; /* Se pinta verde al pasar el mouse */
  }

  .galeria-item {
    /* Define cuánto va a medir cada tarjeta */
    flex: 0 0 auto;
    
    /* En PC (4 por fila aprox) */
    width: calc(25% - 15px);
    
    /* En Tablet (3 por fila aprox) */
    @media (max-width: 991px) {
      width: calc(33.333% - 14px);
    }
    
    /* En Móvil (2 por fila aprox) */
    @media (max-width: 768px) {
      width: calc(50% - 10px);
    }
    
    /* En Móvil muy pequeño (1 y media por fila) */
    @media (max-width: 480px) {
      width: 70%;
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
</style>