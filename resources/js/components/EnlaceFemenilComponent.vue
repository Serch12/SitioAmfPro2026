<template>
  <div class="enlace-femenil-wrapper font-roboto">
    
    <!-- BOTÓN FLOTANTE PARA REGRESAR (SIEMPRE VISIBLE - ABAJO A LA DERECHA) -->
    <a href="/" class="btn-floating-back shadow-lg">
      <i class="material-icons">arrow_back</i>
      <span class="d-none d-sm-inline ms-2">Volver al sitio</span>
    </a>

    <!-- ==========================================
         HERO SECTION
         ========================================== -->
    <section class="hero-section position-relative d-flex align-items-center">
      <div class="hero-bg-overlay"></div>
      <div class="hero-bg-image" style="background-image: url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1920&auto=format&fit=crop');"></div>
      
      <div class="container position-relative z-2">
        <div class="row align-items-center pb-5 pt-5 pt-lg-0 mt-5 mt-lg-0">
          
          <div class="col-12 col-lg-7 text-white pb-5 pb-lg-0 reveal-on-scroll fade-up">
            <span class="badge-premium mb-4 d-inline-block text-uppercase">Protección Profesional</span>
            <h1 class="hero-title fw-black mb-3 text-white">
              Tu Carrera,<br>
              <span class="text-gradient-neon">Nuestra Misión</span>
            </h1>
            <p class="hero-subtitle text-slate-300 mb-5 pe-lg-5">
              Representamos y protegemos los derechos de las futbolistas profesionales en México. Uniendo fuerzas para un futuro más justo y equitativo.
            </p>
            <a href="/#registrate" class="btn btn-hero-success rounded-pill px-5 py-3 shadow-lg d-inline-flex align-items-center">
              Regístrate Hoy <i class="material-icons ms-2 fs-5">arrow_forward</i>
            </a>
          </div>

          <!-- Tarjeta Glassmorphism Derecha -->
          <div class="col-12 col-lg-5 d-none d-lg-block reveal-on-scroll fade-left delay-2">
            <div class="glass-impact-card p-4 p-xl-5 rounded-4 ms-auto position-relative overflow-hidden floating-anim" style="max-width: 340px;">
              <div class="glass-glow"></div>
              
              <div class="d-flex justify-content-between align-items-center mb-4 position-relative z-2 border-bottom border-light border-opacity-10 pb-3">
                <span class="fw-bold text-white tracking-wider text-uppercase" style="font-size: 0.8rem;">Resumen de Impacto</span>
                <div class="d-flex align-items-center justify-content-center rounded-circle" style="width: 38px; height: 38px; background: rgba(255, 255, 255, 0.05);">
                  <i class="material-icons text-gradient-neon fs-5">trending_up</i>
                </div>
              </div>
              
              <div class="position-relative z-2 mt-2">
                <h2 class="fw-black text-gradient-neon mb-1" style="font-size: 4.5rem; line-height: 1; letter-spacing: -2px;">450+</h2>
                <span class="text-slate-300 fw-bold tracking-wider text-uppercase d-block mt-2" style="font-size: 0.85rem;">Jugadoras Afiliadas</span>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================
         COMISIÓN FEMENIL SECTION
         ========================================== -->
    <section class="comision-section py-6 bg-white position-relative">
      <div class="container py-5">
        <div class="text-center mb-5 pb-4 reveal-on-scroll fade-up">
          <h2 class="fw-black text-dark mb-3 display-6" style="letter-spacing: -1px;">La Comisión Femenil</h2>
          <p class="text-muted mx-auto lh-lg" style="max-width: 700px; font-size: 1.05rem;">
            Un equipo de expertas y atletas dedicadas a mejorar las condiciones laborales y la calidad de vida de las futbolistas, participando activamente en la <strong class="text-success-dark">Asamblea General</strong>.
          </p>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-12 col-sm-6 col-lg-3 reveal-on-scroll fade-up" 
               v-for="(miembro, index) in comision" :key="index" 
               :style="`transition-delay: ${0.1 * index}s;`">
            <div class="profile-card bg-white p-4 rounded-4 text-center h-100 transition-all border border-light shadow-sm">
              <div class="profile-img-wrapper mx-auto mb-4 position-relative">
                <img :src="miembro.img" :alt="miembro.nombre" class="profile-img rounded-circle object-fit-cover" />
                <span class="profile-badge badge rounded-pill position-absolute start-50 translate-middle-x shadow-sm text-uppercase" :class="miembro.badgeClass">
                  {{ miembro.cargo }}
                </span>
              </div>
              <h5 class="fw-bold text-dark mb-1 fs-5">{{ miembro.nombre }}</h5>
              <p class="text-muted mb-0" style="font-size: 0.85rem;">{{ miembro.equipo }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         TUS DERECHOS SECTION
         ========================================== -->
    <section class="derechos-section py-6 position-relative z-1">
      <div class="bg-pattern position-absolute top-0 start-0 w-100 h-100 opacity-25"></div>
      
      <div class="container py-5 position-relative z-2">
        <div class="row align-items-center g-5">
          
          <div class="col-12 col-lg-6 pe-lg-5 reveal-on-scroll fade-up">
            <h2 class="fw-black text-white mb-5 rights-title">
              Tus Derechos,<br><span class="text-gradient-neon">Innegociables</span>
            </h2>

            <div class="rights-list">
              <div class="right-item d-flex mb-2 p-3 rounded-4 transition-all hover-glass" v-for="(derecho, index) in derechos" :key="index">
                <div class="right-icon-box flex-shrink-0 me-4 d-flex align-items-center justify-content-center rounded-4 shadow-sm">
                  <i class="material-icons text-success-neon fs-3">{{ derecho.icono }}</i>
                </div>
                <div>
                  <h6 class="text-white fw-bold mb-2 fs-5">{{ derecho.titulo }}</h6>
                  <p class="rights-desc mb-0 text-justify">
                    {{ derecho.descripcion }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-6 position-relative mt-5 mt-lg-0 reveal-on-scroll fade-up delay-2">
            <div class="image-showcase-wrapper position-relative">
              <div class="image-backdrop-shape position-absolute rounded-5 pulse-slow"></div>
              
              <div class="image-showcase position-relative z-2 rounded-5 overflow-hidden shadow-lg border border-white border-opacity-10">
                <img src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1000&auto=format&fit=crop" alt="Equipo Femenil" class="img-fluid w-100 object-fit-cover showcase-img hover-zoom" />
                
                <div class="floating-stat position-absolute bottom-0 start-0 p-4 p-md-5 w-100">
                  <h3 class="fw-black text-success-neon mb-0" style="font-size: 4rem; line-height: 1;">100%</h3>
                  <span class="text-white fw-bold tracking-wider text-uppercase" style="font-size: 0.85rem; letter-spacing: 2px;">Protección de Derechos</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================
         EL PROCESO SECTION
         ========================================== -->
    <section class="proceso-section py-6 bg-white border-top border-light overflow-hidden">
      <div class="container py-5">
        <div class="text-center mb-5 pb-4 reveal-on-scroll fade-up">
          <h2 class="fw-black text-dark mb-3 display-6" style="letter-spacing: -1px;">El Proceso de Protección</h2>
          <p class="text-muted" style="font-size: 1.05rem;">Tres pasos simples para asegurar tu futuro profesional.</p>
        </div>

        <div class="proceso-wrapper mt-5 pt-2 reveal-on-scroll fade-up delay-1">
          <div class="row g-4 position-relative z-2">
            
            <div class="col-12 col-md-4 text-center step-col" v-for="(paso, index) in pasos" :key="index">
              <div class="step-circle mx-auto mb-4 d-flex align-items-center justify-content-center fw-black fs-4 transition-all hover-bounce" 
                   :class="index === pasos.length - 1 ? 'step-active' : 'step-normal'">
                {{ index + 1 }}
              </div>
              <h5 class="fw-bold text-dark mb-3 fs-5">{{ paso.titulo }}</h5>
              <p class="text-muted mx-auto px-lg-3 lh-lg" style="max-width: 280px; font-size: 0.95rem;">{{ paso.descripcion }}</p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         CTA FINAL SECTION
         ========================================== -->
    <section class="cta-section py-6 position-relative overflow-hidden">
      <div class="glow-sphere position-absolute top-50 start-50 translate-middle"></div>
      
      <div class="container py-5 text-center position-relative z-2 reveal-on-scroll fade-up">
        <h2 class="cta-title fw-black text-white mb-5 mx-auto" style="max-width: 700px; line-height: 1.2;">
          Únete a la voz que está <br class="d-none d-md-block"> cambiando el fútbol
        </h2>
        <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4 mt-2">
          <a href="/#registrate" class="btn bg-white text-success-dark fw-bold rounded-pill px-5 py-3 shadow-lg hover-scale text-uppercase" style="font-size: 0.95rem; letter-spacing: 0.5px;">
            Regístrate Ahora
          </a>
          <a href="/#contacto" class="btn btn-link text-white fw-bold text-decoration-none d-inline-flex align-items-center hover-translate" style="font-size: 1rem;">
            Hablar con un Asesor <i class="material-icons ms-2 fs-5">arrow_forward</i>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'EnlaceFemenilComponent',
  data() {
    return {
      observer: null,
      comision: [
        {
          nombre: "Dirce Delgado",
          equipo: "Atlas-2026",
          cargo: "PRESIDENTE",
          badgeClass: "badge-green",
          img: "https://randomuser.me/api/portraits/women/44.jpg" 
        },
        {
          nombre: "Ana Gabriela Paz",
          equipo: "Rayados de Monterrey",
          cargo: "SECRETARIO",
          badgeClass: "badge-grey",
          img: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
          nombre: "Mónica Ocampo",
          equipo: "Pachuca-2026",
          cargo: "VOCAL",
          badgeClass: "badge-grey",
          img: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
          nombre: "Daniela Gómez",
          equipo: "Ex-Futbolista",
          cargo: "ENLACE",
          badgeClass: "badge-green",
          img: "https://randomuser.me/api/portraits/women/32.jpg"
        }
      ],
      derechos: [
        {
          icono: "child_care",
          titulo: "Maternidad y Lactancia",
          descripcion: "Como Futbolista Profesional, tienes derecho a solicitar tu baja por maternidad, ejercer un permiso por adopción o permiso parental. El club garantizará un lugar adecuado para la extracción o lactancia."
        },
        {
          icono: "health_and_safety",
          titulo: "Salud Menstrual",
          descripcion: "Los Clubes deben respetar tus necesidades. Tienes derecho a ausentarte de entrenamientos o partidos por motivos de salud menstrual con certificado médico, percibiendo tu salario íntegro."
        },
        {
          icono: "gavel",
          titulo: "Garantía Salarial",
          descripcion: "Debes recibir el 100% de tu salario durante periodos de licencia. La continuidad de tu contrato no estará condicionada por pruebas de embarazo."
        }
      ],
      pasos: [
        {
          titulo: "Identificación",
          descripcion: "Analizamos tu situación legal y contractual de manera confidencial."
        },
        {
          titulo: "Contacto",
          descripcion: "Nuestro equipo legal se pone en contacto directo con las autoridades pertinentes."
        },
        {
          titulo: "Solución",
          descripcion: "Garantizamos una resolución justa que proteja tu integridad y carrera."
        }
      ]
    };
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

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
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
</script>

<style lang="scss" scoped>
/* FUENTE Y VARIABLES */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');

$bg-dark: #1a1c20;
$bg-darker: #131514;
$success-neon: #60d635;
$success-dark: #37951a;
$success-box: #233120;
$slate-300: #cbd5e1;
$slate-400: #94a3b8;

.font-roboto {
  font-family: 'Roboto', sans-serif !important;
  h1, h2, h3, h4, h5, h6, p, span, a { font-family: 'Roboto', sans-serif !important; }
}

/* UTILIDADES GENERALES */
.fw-black { font-weight: 900 !important; }
.tracking-wider { letter-spacing: 1px; }
.transition-all { transition: all 0.3s ease; }
.text-success-neon { color: $success-neon !important; }
.text-success-dark { color: $success-dark !important; }
.bg-success-dark { background-color: $success-dark !important; }
.py-6 { padding-top: 6rem; padding-bottom: 6rem; }

/* ==============================================================
   BOTÓN FLOTANTE (STICKY) PARA REGRESAR - ABAJO A LA DERECHA
   ============================================================== */
.btn-floating-back {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  background: linear-gradient(135deg, #60d635 0%, #37951a 100%); /* Verde llamativo */
  color: white !important;
  padding: 12px 24px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.27);
  box-shadow: 0 10px 25px rgba(55, 149, 26, 0.5);
  
  &:hover {
    background: #1a1c20; /* Cambia a oscuro al pasar el mouse */
    color: #60d635 !important;
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  }
  
  i {
    transition: transform 0.3s ease;
  }
  &:hover i {
    transform: translateX(-4px);
  }

  /* Responsive: En celular solo mostramos el ícono para no estorbar y que sea más grande */
  @media (max-width: 575px) {
    bottom: 20px;
    right: 20px;
    padding: 15px;
    width: 55px;
    height: 55px;
    justify-content: center;
    border-radius: 50%;
    
    i {
      margin: 0 !important;
      font-size: 1.5rem;
    }
  }
}

/* DEGRADADO DE TEXTO METÁLICO/NEÓN */
.text-gradient-neon {
  background: linear-gradient(135deg, #74eba6 0%, #46c52b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent; 
  display: inline-block;
}

/* SISTEMA DE ANIMACIONES AL SCROLL (INTERSECTION OBSERVER) */
.reveal-on-scroll {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.fade-up { transform: translateY(35px); }
.fade-left { transform: translateX(35px); }
.is-visible { opacity: 1 !important; transform: translate(0, 0) !important; }
.delay-1 { transition-delay: 0.2s; }
.delay-2 { transition-delay: 0.4s; }

/* ANIMACIONES EXTRAS Y HOVERS */
.floating-anim { animation: float 6s ease-in-out infinite; }
.pulse-slow { animation: pulse 4s infinite alternate; }
@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
@keyframes pulse { 0% { opacity: 0.8; transform: scale(0.98); } 100% { opacity: 1; transform: scale(1.02); } }

/* HERO SECTION */
.hero-section {
  min-height: 85vh;
  background-color: $bg-darker;
  .hero-bg-image {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background-size: cover; background-position: center; z-index: 0;
  }
  .hero-bg-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to right, rgba(19, 21, 20, 0.95) 0%, rgba(19, 21, 20, 0.5) 100%); z-index: 1;
  }
  .badge-premium {
    background: transparent; border: 1px solid rgba(96, 214, 53, 0.4);
    color: $success-neon; padding: 6px 18px; border-radius: 50px; font-size: 0.65rem; font-weight: 800; letter-spacing: 1.5px;
  }
  .hero-title { font-size: clamp(2.8rem, 5vw, 4.5rem); letter-spacing: -1.5px; line-height: 1.05; }
  .hero-subtitle { font-size: 1.1rem; max-width: 550px; line-height: 1.7; }
}

/* BOTÓN VERDE HERO */
.btn-hero-success {
  background: linear-gradient(135deg, #46c52b 0%, #308117 100%);
  color: white !important; border: none; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.27);
  &:hover { transform: translateY(-4px) scale(1.03); box-shadow: 0 15px 30px rgba(55, 149, 26, 0.5) !important; color: white !important; }
}

/* TARJETA DE IMPACTO (GLASS) */
.glass-impact-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  .glass-glow {
    position: absolute; top: -50px; right: -50px; width: 180px; height: 180px;
    background: $success-neon; filter: blur(70px); opacity: 0.15; z-index: 0;
  }
}

/* COMISIÓN TARJETAS */
.profile-card {
  border-radius: 20px;
  &:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important; border-color: rgba(96, 214, 53, 0.3) !important; }
  .profile-img-wrapper { width: 110px; height: 110px; margin-bottom: 25px !important; }
  .profile-img { width: 100%; height: 100%; object-fit: cover; border: 4px solid white; box-shadow: 0 8px 20px rgba(0,0,0,0.12); }
  .profile-badge { 
    font-size: 0.6rem; font-weight: 800; letter-spacing: 1px; padding: 6px 16px; 
    bottom: -15px; 
  }
  .badge-green { background-color: $success-neon; color: white; }
  .badge-grey { background-color: #475569; color: white; }
}

/* DERECHOS SECTION */
.derechos-section {
  background-color: $bg-dark;
  .bg-pattern {
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 30px 30px;
  }
  .rights-title { font-size: clamp(2.5rem, 4vw, 3.2rem); letter-spacing: -1.5px; line-height: 1.1; }
  
  .rights-desc {
    color: #a1a1aa !important; 
    font-size: 0.95rem !important;
    line-height: 1.7 !important;
    font-weight: 300 !important;
  }

  .right-icon-box {
    width: 60px; height: 60px; background-color: $success-box; border: 1px solid rgba(96,214,53,0.1);
    transition: all 0.3s ease;
  }
  
  /* MICRO-INTERACCIÓN DE HOVER EN DERECHOS */
  .hover-glass { border: 1px solid transparent; }
  .hover-glass:hover {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    .right-icon-box { background-color: $success-dark; transform: scale(1.1) rotate(5deg); border-color: $success-neon; }
  }

  /* COMPOSICIÓN DE LA IMAGEN DERECHA */
  .image-showcase-wrapper { padding: 15px; }
  .image-showcase {
    border-radius: 35px;
    .showcase-img { height: 500px; transition: transform 0.7s ease; }
    &:hover .showcase-img { transform: scale(1.05); }
    .floating-stat { background: linear-gradient(to top, rgba(25, 28, 27, 0.95) 0%, rgba(25, 28, 27, 0.4) 50%, transparent 100%); }
  }
  .image-backdrop-shape {
    background-color: #202d1d; 
    width: 100%; height: 90%;
    top: -15px; right: -25px; z-index: 1;
    border-radius: 40px;
  }
}

/* PROCESO SECTION */
.proceso-wrapper {
  position: relative;
  &::before {
    content: ''; position: absolute;
    top: 30px; left: 16%; width: 68%; height: 2px;
    background-color: #e2e8f0; z-index: 0;
  }
  @media (max-width: 767px) { &::before { display: none; } }
}

.step-col { position: relative; }
.step-circle {
  width: 60px; height: 60px; border-radius: 50%; z-index: 2; position: relative;
}
.step-normal {
  background-color: #ffffff; color: $success-dark; border: 2px solid #e2e8f0 !important;
}
.step-active {
  background-color: $success-dark; color: #ffffff !important; box-shadow: 0 10px 25px rgba(55, 149, 26, 0.4) !important;
}
.hover-bounce:hover { transform: translateY(-5px); }

/* CTA SECTION */
.cta-section {
  background-color: $success-dark;
  .glow-sphere {
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
  }
  .cta-title { font-size: clamp(2rem, 4vw, 3rem); }
}

.hover-scale { transition: transform 0.3s ease; &:hover { transform: scale(1.05); color: $success-dark !important; } }
.hover-translate { transition: transform 0.3s ease; &:hover { transform: translateX(6px); color: white; } }
</style>