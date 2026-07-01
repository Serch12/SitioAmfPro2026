<template>
  <div class="amf-premium-landing font-roboto">
    <section id="clinica-rehab" class="rehab-section-master py-6 position-relative overflow-hidden">
      <div class="rehab-bg-pattern"></div>
      
      <div class="container position-relative z-3">
        
        <div class="row mb-5 justify-content-center text-center reveal-up">
          <div class="col-lg-10">
            <div class="d-inline-flex align-items-center mb-3 px-4 py-2 rounded-pill rehab-badge-light shadow-sm">
              <i class="material-icons rehab-blue-text me-2" style="font-size: 1.2rem;">health_and_safety</i>
              <span class="rehab-blue-text fw-bold tracking-widest text-uppercase" style="font-size: 0.75rem;">Tecnología Médica de Élite</span>
            </div>
            <h2 class="rehab-main-title fw-black rehab-blue-text mb-0 mt-2">
              REHAB EVOLUTION
              <!-- <span class="fw-light text-secondary" style="font-weight: 900;"></span> -->
            </h2>
            <div class="accent-line-blue mx-auto mt-4"></div>
          </div>
        </div>

        <div class="row align-items-center mb-6 reveal-up delay-1 intro-rehab-container g-0 rounded-4 shadow-sm border border-light">
          <div class="col-12 col-lg-5 d-flex align-items-center justify-content-center bg-white rounded-start-4 id-divider-right position-relative">
            <div class="rehab-logo-hero-card text-center">
              <img src="recursos/rehab_banner.png" alt="Rehab Evolution Logo" class="img-fluid rehab-main-logo">
              <!-- <span class="d-block text-muted small fw-bold tracking-widest mt-3 text-uppercase">Clínica Oficial</span> -->
            </div>
          </div>
          <div class="col-12 col-lg-7 p-4 p-md-5 bg-light-subtle rounded-end-4 text-start d-flex flex-column justify-content-center">
            
            <h4 class="fw-black text-dark mb-4 lh-sm title-pro">
              Proyecto hecho por y para <span class="rehab-blue-text">EL JUGADOR.</span>
            </h4>
            
            <p class="std-text text-secondary mb-4 text-justify lh-lg fw-normal">
              Somos una clínica creada con un objetivo claro: brindar un servicio integral de salud a las y los futbolistas. Como proyecto avalado por la <strong class="text-dark fw-bold">Asociación Mexicana de Futbolistas</strong>, nuestro compromiso es y siempre será el bienestar de cada Jugador.
            </p>
            
            <div class="p-4 rounded-4 shadow-sm mt-2 rehab-gradient-bg">
              <div class="d-flex align-items-center gap-3 mb-2">
                <div class="icon-small-white d-flex align-items-center justify-content-center rounded-circle">
                  <i class="material-icons text-white">trending_up</i>
                </div>
                <h6 class="fw-bold text-white mb-0 tracking-wide">Evolución Constante</h6>
              </div>
              <p class="small text-white text-justify mb-0 lh-lg" style="margin-left: 51px; opacity: 0.9;">
                Invertimos continuamente en equipos y tecnología de punta para mejorar la calidad de nuestros tratamientos y ofrecerte lo mejor en rendimiento físico y recuperación.
              </p>
            </div>

          </div>
        </div>

        <div class="row g-4 mb-6 mt-2" style="margin-bottom: 1rem;">
          <div class="col-12 mb-3 text-center text-lg-start reveal-up">
            <h5 class="fw-black text-dark tracking-widest text-uppercase" style="font-size: 0.95rem; letter-spacing: 3px;">Áreas de Especialidad</h5>
          </div>
          
          <div v-for="(spec, sIdx) in specialties" :key="sIdx" class="col-12 col-md-6 col-lg-3 reveal-up" :class="'delay-' + (sIdx + 1)">
            <div class="rehab-pro-card h-100 shadow-sm bg-white p-4 rounded-4 position-relative overflow-hidden">
              <div class="card-top-accent"></div>
              
              <div class="icon-box-rehab mb-4">
                <i class="material-icons">{{ spec.icon }}</i>
              </div>
              <h5 class="fw-bold text-dark mb-3">{{ spec.title }}</h5>
              <p class="text-secondary small mb-0 lh-lg">{{ spec.desc }}</p>
            </div>
          </div>
        </div>

        <div class="row reveal-up delay-4 mb-5">
          <div class="col-12">
            <div class="vip-rehab-banner p-4 p-lg-5 rounded-4 position-relative overflow-hidden border border-light bg-white shadow-sm">
              <div class="row align-items-center position-relative z-2">
                
                <div class="col-lg-4 mb-5 mb-lg-0 text-center text-lg-start border-end-lg border-light pe-lg-5">
                  <h3 class="fw-black text-dark mb-2 lh-sm title-pro">Servicios para <br class="d-none d-lg-block"> el Jugador</h3>
                  <div class="rehab-pill-active mt-3 d-inline-block shadow-sm">100% SIN COSTO</div>
                  <p class="text-secondary small mt-3 mb-0 fw-medium">Exclusivo para afiliados a la AMFPRO con registro vigente.</p>
                </div>
                
                <div class="col-lg-8 ps-lg-5">
                  <div class="tech-pills-grid justify-content-center justify-content-lg-start">
                    <span v-for="service in services" :key="service" class="rehab-chip" :class="{'chip-highlight': isHighlight(service)}">
                      {{ service }}
                    </span>
                  </div>
                </div>
                
              </div>
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
      specialties: [
        { title: 'Terapia Física', icon: 'fitness_center', desc: 'Rehabilitación avanzada para optimizar el rendimiento físico y acelerar la recuperación de lesiones.' },
        { title: 'Consultas Médicas', icon: 'medical_services', desc: 'Evaluaciones profesionales continuas para garantizar tu salud óptima en cada etapa de tu carrera.' },
        { title: 'Nutrición', icon: 'restaurant_menu', desc: 'Planes alimenticios personalizados para ayudarte a alcanzar y mantener tu máximo potencial en la cancha.' },
        { title: 'Psicología', icon: 'psychology', desc: 'Apoyo emocional y mental, vital para enfrentar la presión y los desafíos de la alta competencia.' }
      ],
      services: [
        'Ultrasonido', 'Electroterapia', 'Terapia instrumentalizada', 'Punción seca', 'Kinesiotape', 
        'Presoterapia', 'Magnetoterapia', 'MEP con ultrasonido guiado', 'Ozonoterapia', 'Ondas de choque', 
        'Ácido hialurónico', 'Plasma rico en plaquetas', 'Pruebas de esfuerzo', 'Isocinecia', 
        'EPI', 'Electrocardiograma', 'Terapia de calor y frío', 'Antropometría', 'Masajes de descarga','Ultrasonido de Diagnóstico'
      ]
    }
  },
  methods: {
    isHighlight(s) {
      return ['Ozonoterapia', 'Plasma rico en plaquetas', 'Ondas de choque', 'Ácido hialurónico'].includes(s);
    }
  }
}
</script>

<style lang="scss" scoped>
/* Importamos ROBOTO para todo el componente */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

/* Forzamos Roboto en este contenedor */
.font-roboto {
  font-family: 'Roboto', sans-serif !important;
  
  h1, h2, h3, h4, h5, h6, p, span, div {
    font-family: 'Roboto', sans-serif !important;
  }
}

$rehab-blue: #00AEEF;
$rehab-light-blue: rgba(0, 174, 239, 0.08);

.rehab-blue-text { color: $rehab-blue !important; }
.rehab-bg-blue { background-color: $rehab-blue !important; }
.rehab-gradient-bg { background: linear-gradient(135deg, $rehab-blue 0%, #008CBE 100%); }
.accent-line-blue { width: 80px; height: 5px; background-color: $rehab-blue; border-radius: 10px; }

/* Tipografía Pro */
.rehab-main-title { font-size: clamp(2.5rem, 4vw, 3.5rem); letter-spacing: -2px; font-weight: 900;}
.title-pro { font-size: clamp(1.5rem, 2.5vw, 2rem); letter-spacing: -0.5px; }
.tracking-widest { letter-spacing: 3px; }
.tracking-wide { letter-spacing: 1px; }
.lh-lg { line-height: 1.8 !important; }

/* Fondo y Patrón */
.rehab-section-master {
  background-color: #F8F9FA;
  .rehab-bg-pattern {
    position: absolute; top: -100px; right: -100px; width: 600px; height: 600px;
    background: radial-gradient(circle, $rehab-light-blue 0%, transparent 60%);
    z-index: 1; opacity: 0.6; pointer-events: none;
  }
}

/* Badge Superior */
.rehab-badge-light {
  background: #ffffff;
  border: 1px solid rgba(0, 174, 239, 0.15);
  box-shadow: 0 4px 15px rgba(0, 174, 239, 0.05);
}

/* Bloque Intro Premium */
.intro-rehab-container {
  overflow: hidden;
  background: #ffffff;
  transition: transform 0.4s ease;
  .id-divider-right {
    @media (min-width: 992px) { border-right: 1px solid rgba(0,0,0,0.04); }
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.06) !important;
  }
}

.rehab-logo-hero-card {
  width: 100%;
//   max-width: 320px;
  .rehab-main-logo {
    // max-height: 100px;
    filter: drop-shadow(0 10px 20px rgba(0, 174, 239, 0.15));
    transition: transform 0.4s ease;
  }
  &:hover .rehab-main-logo {
    transform: scale(1.05);
  }
}

/* Ícono Blanco para Tarjeta Evolución Constante */
.icon-small-white {
  width: 35px; height: 35px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  i { font-size: 1.2rem; }
}

/* Tarjetas Pro (Especialidades) */
.rehab-pro-card {
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: default;
  
  .card-top-accent {
    position: absolute; top: 0; left: 0; width: 0; height: 4px;
    background-color: $rehab-blue;
    transition: width 0.4s ease;
  }

  .icon-box-rehab {
    width: 60px; height: 60px;
    background: $rehab-light-blue;
    color: $rehab-blue;
    border-radius: 16px; 
    display: flex; align-items: center; justify-content: center;
    transition: all 0.4s ease;
    i { font-size: 2rem; transition: transform 0.4s ease; }
  }
  
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 174, 239, 0.2);
    box-shadow: 0 20px 40px rgba(0, 174, 239, 0.08) !important;
    
    .card-top-accent { width: 100%; }
    
    .icon-box-rehab {
      background: $rehab-blue;
      color: white;
      transform: scale(1.1);
    }
  }
}

/* Banner de Servicios */
.vip-rehab-banner {
  .rehab-pill-active {
    background: linear-gradient(135deg, $rehab-blue 0%, #008CBE 100%);
    color: white;
    font-size: 0.85rem;
    font-weight: 800;
    padding: 8px 20px;
    border-radius: 50px;
    letter-spacing: 2px;
  }
  @media (min-width: 992px) {
    .border-end-lg { border-right: 1px solid rgba(0,0,0,0.06); }
  }
}

/* Grid de Chips Evolucionados */
.tech-pills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  
  .rehab-chip {
    background: #ffffff;
    border: 1px solid rgba(0,0,0,0.08);
    color: #475569;
    padding: 8px 18px;
    border-radius: 30px; 
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: default;
    
    &:hover {
      background: $rehab-light-blue;
      border-color: rgba(0, 174, 239, 0.4);
      color: $rehab-blue;
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0, 174, 239, 0.12);
    }
    
    &.chip-highlight {
      border-color: rgba(0, 174, 239, 0.3);
      font-weight: 700;
      color: #008CBE;
      background: rgba(0, 174, 239, 0.04);
      
      &:hover {
        background: $rehab-blue;
        color: white;
        box-shadow: 0 6px 15px rgba(0, 174, 239, 0.25);
      }
    }
  }
}

/* Animaciones Reveal */
.reveal-up { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.is-visible.reveal-up { opacity: 1; transform: translateY(0); }
.delay-1 { transition-delay: 0.15s; } .delay-2 { transition-delay: 0.3s; } 
.delay-3 { transition-delay: 0.45s; } .delay-4 { transition-delay: 0.6s; }

/* Ajustes Responsive */
@media (max-width: 991px) {
  .intro-rehab-container { margin-left: 10px; margin-right: 10px; }
  .id-divider-right { border-bottom: 1px solid rgba(0,0,0,0.05); }
  .tech-pills-grid { justify-content: center; }
}
</style>