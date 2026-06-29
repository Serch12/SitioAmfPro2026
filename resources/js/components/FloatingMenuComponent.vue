<template>
  <div>
    <div class="menu-container">
      
      <nav class="floating-menu" :class="{ 'is-open': isOpen }">
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
        <button @click="handleNav('juridico')" style="--i:4">
          <i class="material-icons">trending_up</i>
          <span class="tooltip-text">Jurídico</span>
        </button>
        <button @click="handleNav('convenios')" style="--i:5">
          <i class="material-icons">handshake</i>
          <span class="tooltip-text">Convenios</span>
        </button>
        <button @click="handleNav('talentos')" style="--i:6">
          <i class="material-icons">star</i>
          <span class="tooltip-text">Talentos</span>
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
export default {
  name: 'FloatingMenu',
  data() { 
    return { 
      isOpen: false 
    } 
  },
  methods: {
    toggleMenu() { 
      this.isOpen = !this.isOpen; 
    },
    handleNav(id) {
      if (id === 'inicio') { 
        window.scrollTo({ top: 0, behavior: "smooth" }); 
      } 
      else { 
        const el = document.getElementById(id); 
        if (el) { 
          const headerOffset = 70; 
          const elementPosition = el.getBoundingClientRect().top; 
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset; 
          window.scrollTo({ top: offsetPosition, behavior: "smooth" }); 
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
  &:hover { transform: scale(1.1); box-shadow: 0 8px 25px rgba(80, 192, 38, 0.4); } 
  &.is-active { background-color: #3E9452; .material-icons { transform: rotate(180deg); } } 
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
      position: absolute; right: 65px; background-color: #50c026; color: white; padding: 6px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: bold; white-space: nowrap; opacity: 0; visibility: hidden; transform: translateX(10px); transition: all 0.3s ease; 
      &::after { content: ''; position: absolute; top: 50%; right: -6px; transform: translateY(-50%); border-width: 6px 0 6px 6px; border-style: solid; border-color: transparent transparent transparent #50c026; } 
    } 
    
    &:hover { 
      background: $amf-accent; color: white; 
      .tooltip-text { opacity: 1; visibility: visible; transform: translateX(0); } 
    } 
  } 
  
  &.is-open { 
    pointer-events: auto; 
    button { opacity: 1; transform: scale(1) translateY(0) rotate(0deg); } 
  } 
  
  @media (max-width: 991px) { 
    margin-right: 0; align-items: flex-end; 
    .tooltip-text { display: none !important; } 
  } 
}
</style>