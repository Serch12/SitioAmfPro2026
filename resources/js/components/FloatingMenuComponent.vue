<template>
  <div class="amf-floating-wrapper">
    
    <!-- Sutil sombra radial detrás del menú para resaltar los botones sin tapar la pantalla -->
    <div class="menu-radial-backdrop" :class="{ 'is-active': isOpen }" @click="toggleMenu"></div>

    <div class="menu-container font-roboto">
      
      <nav class="floating-menu" :class="{ 'is-open': isOpen }">
        <!-- Renderizamos los botones dinámicamente para controlar mejor las animaciones -->
        <button v-for="(item, index) in menuItems" :key="item.id"
                @click="handleNav(item)" 
                class="menu-item shadow-sm interactive-element" 
                :style="{ '--i': menuItems.length - index }">
          
          <i class="material-icons">{{ item.icon }}</i>
          
          <!-- Tooltip Premium -->
          <span class="tooltip-text shadow-sm">{{ item.label }}</span>
        </button>
      </nav>

      <!-- Botón Principal -->
      <button class="main-toggle-btn shadow-lg mt-3 interactive-element" @click="toggleMenu" :class="{ 'is-active': isOpen }">
        <i class="material-icons icon-menu" :class="{ 'hide': isOpen }">menu</i>
        <i class="material-icons icon-close" :class="{ 'show': isOpen }">close</i>
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingMenu',
  data() { 
    return { 
      isOpen: false,
      // Centralizamos tu menú original y le agregamos Enlace Femenil
      menuItems: [
        { id: 'inicio', label: 'Inicio', icon: 'home', isRoute: false },
        { id: 'enlace-comision-femenil', label: 'Enlace Femenil', icon: 'woman', isRoute: true },
        { id: 'nosotros', label: 'Nosotros', icon: 'groups', isRoute: false },
        { id: 'asesores-equipo', label: 'Asesor Deportivo', icon: 'person', isRoute: false },
        { id: 'juridico', label: 'Jurídico', icon: 'trending_up', isRoute: false },
        { id: 'convenios', label: 'Convenios', icon: 'handshake', isRoute: false },
        { id: 'talentos', label: 'Talentos', icon: 'star', isRoute: false },
        { id: 'contacto', label: 'Contacto', icon: 'article', isRoute: false }
      ]
    } 
  },
  methods: {
    toggleMenu() { 
      this.isOpen = !this.isOpen; 
    },
    handleNav(item) {
      this.isOpen = false; // Cerramos el menú suavemente
      
      // Si el botón requiere cambiar de página (Ej: Femenil)
      if (item.isRoute) {
        setTimeout(() => {
          if (this.$router) {
            this.$router.push('/' + item.id);
          } else {
            const baseUrl = document.querySelector('base') ? document.querySelector('base').href : '/';
            window.location.href = baseUrl + item.id;
          }
        }, 300); // Esperamos 300ms a que termine la animación del menú
        return;
      }

      // Lógica de Scroll Original
      if (item.id === 'inicio') { 
        window.scrollTo({ top: 0, behavior: "smooth" }); 
      } else { 
        const el = document.getElementById(item.id); 
        if (el) { 
          const headerOffset = 70; 
          const elementPosition = el.getBoundingClientRect().top; 
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset; 
          window.scrollTo({ top: offsetPosition, behavior: "smooth" }); 
        } else {
          // Si estamos en Femenil y le da clic a "Jurídico", lo manda a la página principal a esa sección
          const baseUrl = document.querySelector('base') ? document.querySelector('base').href : '/';
          window.location.href = baseUrl + '#' + item.id;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

$amf-accent: #50c026;
$amf-dark: #3e9452;

.font-roboto { font-family: 'Roboto', sans-serif !important; }

/* Sombra radial detrás del menú (No oscurece todo, solo la esquina) */
.menu-radial-backdrop {
  position: fixed;
  bottom: 0; right: 0;
  width: 400px; height: 600px;
  background: radial-gradient(circle at bottom right, rgba(0,0,0,0.5) 0%, transparent 70%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 1040;

  &.is-active { opacity: 1; pointer-events: auto; }
  @media (max-width: 991px) { width: 300px; height: 500px; }
}

.menu-container { 
  position: fixed; 
  right: 25px; 
  top: 50%; 
  transform: translateY(-50%); 
  z-index: 1050; 
  display: flex; 
  flex-direction: column; 
  align-items: flex-end; 
  
  @media (max-width: 991px) { 
    top: auto; 
    bottom: 25px; 
    right: 20px; 
    transform: none; 
  } 
}

/* BOTÓN PRINCIPAL */
.main-toggle-btn { 
  width: 60px; 
  height: 60px; 
  border-radius: 50%; 
  background: linear-gradient(135deg, $amf-accent 0%, $amf-dark 100%);
  color: white; 
  border: none; 
  cursor: pointer; 
  z-index: 2; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  position: relative;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); 
  box-shadow: 0 5px 15px rgba(80, 192, 38, 0.4); 
  
  .material-icons { 
    font-size: 30px; 
    position: absolute;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  } 
  
  .icon-menu { opacity: 1; transform: rotate(0) scale(1); }
  .icon-menu.hide { opacity: 0; transform: rotate(90deg) scale(0); }
  
  .icon-close { opacity: 0; transform: rotate(-90deg) scale(0); }
  .icon-close.show { opacity: 1; transform: rotate(0) scale(1); }

  &:hover { 
    transform: scale(1.1); 
    box-shadow: 0 8px 25px rgba(80, 192, 38, 0.6); 
  } 
  &.is-active { 
    background: #111; /* Se vuelve negro al abrir para contrastar */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  } 
}

/* LISTA DE BOTONES */
.floating-menu { 
  display: flex; 
  flex-direction: column; 
  gap: 12px; 
  pointer-events: none; 
  align-items: center; 
  margin-right: 6px; 
  
  .menu-item { 
    background: white; 
    border: 1px solid rgba(80, 192, 38, 0.2); 
    color: $amf-dark; 
    width: 48px; 
    height: 48px; 
    border-radius: 50%; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    cursor: pointer; 
    position: relative; 
    opacity: 0; 
    
    /* Animación de entrada con "Rebote" */
    transform: scale(0) translateY(20px); 
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); 
    
    .material-icons { font-size: 22px; transition: transform 0.3s ease; } 
    
    /* TOOLTIPS MEJORADOS (Glassmorphism) */
    .tooltip-text { 
      position: absolute; 
      right: 60px; 
      background: rgba(17, 17, 17, 0.9); /* Negro casi sólido */
      backdrop-filter: blur(5px);
      color: white; 
      padding: 8px 16px; 
      border-radius: 12px; 
      font-size: 0.85rem; 
      font-weight: 700; 
      white-space: nowrap; 
      opacity: 0; 
      visibility: hidden; 
      transform: translateX(10px) scale(0.9); 
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55); 
      border: 1px solid rgba(255, 255, 255, 0.1);
      
      &::after { 
        content: ''; position: absolute; top: 50%; right: -5px; transform: translateY(-50%); 
        border-width: 5px 0 5px 5px; border-style: solid; border-color: transparent transparent transparent rgba(17, 17, 17, 0.9); 
      } 
    } 
    
    &:hover { 
      background: linear-gradient(135deg, $amf-accent 0%, $amf-dark 100%); 
      color: white; 
      border-color: transparent;
      transform: scale(1.1) !important;
      
      .material-icons { transform: scale(1.1); }
      .tooltip-text { opacity: 1; visibility: visible; transform: translateX(0) scale(1); } 
    } 
  } 
  
  &.is-open { 
    pointer-events: auto; 
    /* Cascading delay usando la variable inyectada */
    .menu-item { 
      opacity: 1; 
      transform: scale(1) translateY(0); 
      transition-delay: calc(0.04s * var(--i)); 
    } 
  } 
  
  @media (max-width: 991px) { 
    margin-right: 0; align-items: flex-end; 
    .tooltip-text { display: none !important; } 
    .menu-item { width: 44px; height: 44px; } /* Un poquito más chicos en móvil */
  } 
}
</style>