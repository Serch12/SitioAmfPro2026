<template>
  <div>
    <div class="menu-container">
      
      <button v-if="!isLoggedIn" class="btn-register-pill shadow-lg" @click="goToLogin" title="Iniciar sesión">
        <i class="material-icons">login</i>
        <span class="btn-text">Iniciar sesión</span>
      </button>

      <div v-else class="profile-menu-wrapper">
        <button class="profile-avatar-btn shadow-lg" @click="toggleProfileMenu" :class="{ 'is-active': isProfileMenuOpen }">
          <img v-if="afiliado.foto" :src="obtenerUrlArchivo(afiliado.foto, afiliado.existecarpetafoto)" class="avatar-img">
          <span v-else class="avatar-initial">{{ afiliado.nombre ? afiliado.nombre.charAt(0) : 'U' }}</span>
        </button>

        <div class="profile-dropdown shadow-lg" :class="{ 'show-dropdown': isProfileMenuOpen }">
          <div class="dropdown-header">
            <strong>{{ afiliado.nombre }} {{ afiliado.apellido_pat }}</strong>
            <span>NUI: {{ afiliado.nui }}</span>
          </div>
          <button @click="goToProfile" class="dropdown-item-btn">
            <i class="material-icons">person</i> Mi Perfil
          </button>
          <div class="dropdown-divider"></div>
          <button @click="logout" class="dropdown-item-btn text-danger">
            <i class="material-icons">logout</i> Cerrar Sesión
          </button>
        </div>
      </div>

      <nav class="floating-menu" :class="{ 'is-open': isOpen }">
        <!-- Eliminamos los números estáticos, ahora todo funciona por el ID -->
        <button @click="handleNav('inicio')" style="--i:1">
          <i class="material-icons">home</i>
          <span class="tooltip-text">Inicio</span>
        </button>
        <button @click="handleNav('nosotros')" style="--i:2">
          <i class="material-icons">groups</i>
          <span class="tooltip-text">Nosotros</span>  
        </button>
        <button @click="handleNav('asesor-deportivo')" style="--i:3">
          <i class="material-icons">person</i>
          <span class="tooltip-text">Asesor Deportivo</span>
        </button>
        <button @click="handleNav('convenios')" style="--i:4">
          <i class="material-icons">handshake</i>
          <span class="tooltip-text">Convenios</span>
        </button>
        <button @click="handleNav('talentos')" style="--i:5">
          <i class="material-icons">star</i>
          <span class="tooltip-text">Talentos</span>
        </button>
        <button @click="handleNav('juridico')" style="--i:6">
          <i class="material-icons">trending_up</i>
          <span class="tooltip-text">Jurídico</span>
        </button>
        <button @click="handleNav('contacto')" style="--i:7">
          <i class="material-icons">article</i>
          <span class="tooltip-text">Contacto</span>
        </button>
      </nav>

      <button class="main-toggle-btn shadow-lg mt-2" @click="toggleMenu" :class="{ 'is-active': isOpen }">
        <i class="material-icons">{{ isOpen ? 'close' : 'menu' }}</i>
      </button>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FloatingMenu',
  data() {
    return {
      isOpen: false,
      isLoggedIn: false,
      isProfileMenuOpen: false,
      afiliado: {}
    }
  },
  mounted() {
    this.checkAuthStatus();
  },
  methods: {
    checkAuthStatus() {
      axios.get('afiliado/datos')
        .then(response => {
          if (response.data && response.data.id_afi) {
            this.isLoggedIn = true;
            this.afiliado = response.data;
          }
        })
        .catch(error => {
          this.isLoggedIn = false;
        });
    },

    obtenerUrlArchivo(nombreArchivo, existeCarpetaFalsa) {
        if (!nombreArchivo || !this.afiliado.nui) return '';
        const host = window.location.hostname;
        const isLocalhost = host === 'localhost' || host === '127.0.0.1';
        let baseUrl = '';

        if (existeCarpetaFalsa === false) {
            baseUrl = isLocalhost 
                ? 'http://localhost/IntranetAMF/public/ArchivosSistema/Afiliados/'
                : 'https://test-intranet.amfpro.mx/ArchivosSistema/Afiliados/';
        } else {
            baseUrl = isLocalhost 
                ? 'http://localhost/amfpro-web-2026/public/ArchivosSistema/Afiliados/'
                : 'https://deployment.amfpro.mx/ArchivosSistema/Afiliados/';
        }
        return `${baseUrl}${this.afiliado.nui}/${nombreArchivo}`;
    },

    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen;
      if(this.isProfileMenuOpen) this.isOpen = false; 
    },
    goToProfile() {
      const baseUrl = document.querySelector('base') ? document.querySelector('base').href : '/';
      window.location.href = baseUrl + 'perfil';
    },
    logout() {
      const baseUrl = document.querySelector('base') ? document.querySelector('base').href : '/';
      axios.post(baseUrl + 'logout')
        .then(() => { window.location.href = baseUrl; })
        .catch(() => { window.location.href = baseUrl; });
    },

    toggleMenu() {
      this.isOpen = !this.isOpen;
      if(this.isOpen) this.isProfileMenuOpen = false; 
    },
    goToLogin() {
      const baseUrl = document.querySelector('base') ? document.querySelector('base').href : '/';
      window.location.href = baseUrl + 'login';
    },
    
    // Función de navegación mejorada y dinámica
    handleNav(id) {
      if (id === 'inicio') {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(id);
        if (el) {
          const headerOffset = 70; 
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        } else {
          console.warn(`Sección no encontrada: Falta agregar el id="${id}" en tu HTML`);
        }
      }
      
      this.isOpen = false;
    }
  }
}
</script>

<style lang="scss" scoped>
$amf-accent: #50c026;

.menu-container {
  position: fixed;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1050;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;

  @media (max-width: 991px) {
    top: auto;
    bottom: 25px;
    right: 20px; 
    transform: none; 
  }
}

/* =========================================
   ESTILOS DEL BOTÓN "INICIAR SESIÓN"
   ========================================= */
.btn-register-pill {
  background: linear-gradient(135deg, #50c026 0%, #3e9452 100%);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  .material-icons { font-size: 1.4rem; }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 20px rgba(80, 192, 38, 0.4) !important;
  }

  /* OPTIMIZACIÓN PARA MÓVILES (Lo convierte en un círculo perfecto) */
  @media (max-width: 991px) {
    width: 55px;
    height: 55px;
    padding: 0; /* Quitamos el relleno lateral */
    border-radius: 50%; /* Lo hacemos redondo */
    gap: 0;

    .btn-text {
      display: none; /* Ocultamos el texto "Iniciar sesión" */
    }

    .material-icons {
      font-size: 1.6rem; /* Hacemos el ícono apenas un poco más grande para compensar */
      margin-left: 4px; /* Un ligero ajuste visual porque el ícono "login" a veces se ve descentrado */
    }
  }
}

/* =========================================
   ESTILOS DEL AVATAR Y SU MENÚ
   ========================================= */
.profile-menu-wrapper {
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.profile-avatar-btn {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 3px solid white;
  padding: 0;
  background: linear-gradient(135deg, #50c026 0%, #3e9452 100%);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 3;

  &:hover, &.is-active {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(80, 192, 38, 0.4) !important;
    border-color: #f0fdf4;
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .avatar-initial {
    color: white;
    font-weight: 900;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}

.profile-dropdown {
  position: absolute;
  right: 70px;
  top: 0;
  background: white;
  border-radius: 16px;
  width: 220px;
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateX(20px) scale(0.95);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-origin: right top;

  &.show-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateX(0) scale(1);
  }

  .dropdown-header {
    padding: 12px 20px;
    background: #f8fafc;
    margin-top: -8px;
    margin-bottom: 8px;
    border-radius: 16px 16px 0 0;
    border-bottom: 1px solid #e2e8f0;

    strong { display: block; color: #1e293b; font-size: 0.95rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    span { color: #64748b; font-size: 0.75rem; font-weight: bold; }
  }

  .dropdown-divider {
    height: 1px;
    background-color: #f1f5f9;
    margin: 4px 0;
  }

  .dropdown-item-btn {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #475569;
    cursor: pointer;
    transition: all 0.2s;

    &:hover { background: #f0fdf4; color: #50c026; }
    
    &.text-danger {
      color: #ef4444;
      &:hover { background: #fef2f2; color: #dc2626; }
    }

    i { font-size: 1.3rem; }
  }

  @media (max-width: 991px) {
    top: auto;
    bottom: 0;
    transform-origin: right bottom;
  }
}

/* =========================================
   ESTILOS DEL BOTÓN MENÚ ORIGINAL
   ========================================= */
.main-toggle-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: $amf-accent;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  
  .material-icons { font-size: 30px; transition: transform 0.4s; }

  &:hover { transform: scale(1.1); }
  &.is-active {
    background-color: #3E9452;
    .material-icons { transform: rotate(180deg); }
  }
}

.floating-menu {
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;
  align-items: center;
  margin-right: 6px;

  button {
    background: white;
    border: 2px solid rgba(80, 192, 38, 0.1);
    color: #3E9452;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    
    opacity: 0;
    transform: scale(0) translateY(40px) rotate(-45deg);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition-delay: calc(0.05s * var(--i));

    .material-icons { font-size: 22px; }

    .tooltip-text {
      position: absolute;
      right: 65px;
      background-color: #50c026;
      color: white;
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: bold;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transform: translateX(10px);
      transition: all 0.3s ease;
      &::after {
        content: ''; position: absolute; top: 50%; right: -6px;
        transform: translateY(-50%); border-width: 6px 0 6px 6px;
        border-style: solid; border-color: transparent transparent transparent #50c026;
      }
    }

    &:hover {
      background: $amf-accent;
      color: white;
      .tooltip-text { opacity: 1; visibility: visible; transform: translateX(0); }
    }
  }

  &.is-open {
    pointer-events: auto;
    button {
      opacity: 1;
      transform: scale(1) translateY(0) rotate(0deg);
    }
  }

  @media (max-width: 991px) {
    margin-right: 0;
    align-items: flex-end;
    .tooltip-text {
      display: none !important;
    }
  }
}
</style>