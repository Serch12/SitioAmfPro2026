<template>
    <section id="noticias" class="py-6 bg-light text-center mt-5 section-noticias relative-container">       
      <div class="container px-md-5">
        
        <!-- Título Principal Premium (Estandarizado) -->
        <div class="row justify-content-center mb-5 reveal-up">
            <div class="col-lg-8 text-center">
              <h6 class="std-subtitle text-muted mb-3">Mantente informado</h6>
              <h2 class="std-title-section fw-black amf-green-text mb-4 text-uppercase" style="font-size: clamp(2.5rem, 4vw, 3.5rem) !important;">NOTICIAS</h2>
              <div class="accent-line mx-auto mb-4"></div>
            </div>
        </div>

        <div class="row text-start text-dark">
          <div class="col-lg-8 order-2 order-lg-1">
            
            <div v-if="noticiasList.length === 0" class="text-center py-5 text-muted reveal-up delay-1">
              <i class="material-icons opacity-50" style="font-size: 4rem;">article</i>
              <p class="std-text mt-3">No se encontraron noticias con los filtros seleccionados.</p>
            </div>

            <div v-else>
              <div v-for="(fila, index) in noticiasEnFilas" :key="'fila-'+index" class="row g-4 mb-4 position-relative">
                <div v-for="noticia in fila" :key="noticia.id" 
                    class="news-col-transition reveal-up"
                    :class="getColClass(noticia.id)">
                  
                  <!-- Tarjeta de Noticia Ultra-Premium -->
                  <div class="premium-news-card bg-white rounded-4 overflow-hidden h-100 shadow-sm border border-light d-flex flex-column"
                      @click="irAlDetalle(noticia)">
                    
                    <div class="news-img-wrapper position-relative overflow-hidden">
                      <img :src="obtenerRutaImagen(noticia.imagen)" class="w-100 news-img" loading="lazy">
                      
                      <!-- Sombra interior en hover para dar profundidad 3D -->
                      <div class="img-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                      
                      <!-- Badge Categoría flotante -->
                      <span v-if="noticia.categoria" class="std-subtitle badge-category position-absolute top-0 start-0 m-3 px-3 py-2 fw-bold text-uppercase shadow-sm">
                        {{ noticia.categoria }}
                      </span>
                    </div>
                    
                    <div class="p-4 p-md-5 d-flex flex-column flex-grow-1 card-content-wrapper">
                      <div class="d-flex align-items-center mb-3">
                        <span class="badge-date rounded-pill px-3 py-1 std-text-small fw-bold shadow-sm d-inline-flex align-items-center">
                          <i class="material-icons fs-6 me-1">calendar_today</i>
                          {{ noticia.fecha }}
                        </span>
                      </div>
                      
                      <!-- Título con Truncado (3 puntos) y Tooltip Nativo (Estandarizado) -->
                      <h4 class="std-title-card fw-bold text-dark mb-3 news-title truncate-text-title" 
                          :title="noticia.titulo">
                        {{ noticia.titulo }}
                      </h4>
                      
                      <div class="std-text-small text-secondary mb-4 mt-auto truncate-text-2" v-html="noticia.desc"></div>
                      
                      <div class="read-more-link d-inline-flex align-items-center fw-bold text-uppercase tracking-wider std-text-small mt-3">
                        <span class="link-text">Leer Artículo</span>
                        <i class="material-icons ms-2 transition-icon fs-5">arrow_forward</i>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              <!-- Paginación Premium -->
              <div class="d-flex justify-content-center mt-6 reveal-up" v-if="totalPages > 1">
                <nav>
                  <ul class="pagination custom-pagination shadow-sm rounded-pill overflow-hidden">
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                      <a class="page-link" @click.prevent="changePage(currentPage - 1)" href="#">
                        <i class="material-icons">chevron_left</i>
                      </a>
                    </li>
                    <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
                      <a class="page-link std-text-small fw-bold" @click.prevent="changePage(page)" href="#">{{ page }}</a>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                      <a class="page-link" @click.prevent="changePage(currentPage + 1)" href="#">
                        <i class="material-icons">chevron_right</i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <!-- Sidebar Premium -->
          <div class="col-lg-4 order-1 order-lg-2 mb-5 mb-lg-0 reveal-up delay-2">
            <div class="sidebar-news sticky-top" style="top: 100px;">
              <button class="btn btn-premium-green w-100 fw-bold text-uppercase std-subtitle mb-4 rounded-pill py-3 shadow-sm" @click="resetFiltros">
                Mostrar Todas
              </button>

              <div class="premium-sidebar-box bg-white p-4 p-md-5 rounded-4 mb-4 shadow-sm border border-light">
                <div class="d-flex align-items-center mb-4">
                  <i class="material-icons amf-green-text fs-4 me-2">filter_alt</i>
                  <h5 class="std-title-card fw-bold text-dark mb-0">Filtros</h5>
                </div>
                
                <p class="std-subtitle text-muted mb-2">Categoría</p>
                <select class="form-select premium-input rounded-3 mb-4 shadow-none std-text-small" v-model="filtros.categoria" @change="getNoticias">
                  <option value="">Todas las categorías</option>
                  <option value="Noticias">Noticias</option>
                  <option value="Comunicados">Comunicados</option>
                </select>
                
                <p class="std-subtitle text-muted mb-2">Búsqueda</p>
                <div class="position-relative">
                  <input type="text" class="form-control premium-input rounded-3 pe-5 shadow-none std-text-small" placeholder="Buscar palabras clave..." v-model="filtros.busqueda" @input="debounceSearch">
                  <i class="material-icons position-absolute top-50 end-0 translate-middle-y me-3 text-muted">search</i>
                </div>
              </div>

              <div class="premium-sidebar-box bg-white p-4 p-md-5 rounded-4 mb-4 shadow-sm border border-light">
                <div class="d-flex align-items-center mb-4">
                  <i class="material-icons amf-green-text fs-4 me-2">public</i>
                  <h5 class="std-title-card fw-bold text-dark mb-0">Redes</h5>
                </div>
                
                <div v-if="cargandoRedes" class="text-center py-4">
                  <div class="spinner-border text-success spinner-border-sm"></div>
                  <p class="std-text-small text-muted mt-2">Cargando publicaciones...</p>
                </div>

                <div v-else>
                  <!-- Instagram -->
                  <div v-if="redes.instagram && redes.instagram.length > 0">
                    <p class="std-subtitle text-dark mb-3 border-bottom pb-2 d-flex align-items-center text-uppercase">
                      <img src="recursos/instagram.png" style="width:16px; margin-right:8px; filter: grayscale(100%);" loading="lazy"> Instagram
                    </p>
                    
                    <div v-for="(igPost, index) in redes.instagram" :key="'ig-'+index" class="social-embed-container mb-4">
                      <a :href="igPost.permalink" target="_blank" class="text-decoration-none text-dark">
                        <div class="position-relative overflow-hidden rounded-3 shadow-sm mb-2 social-img-wrapper">
                          <img :src="igPost.media_url" class="w-100" style="height: 200px; object-fit: cover;" loading="lazy">
                          <div class="social-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                            <i class="material-icons text-white fs-1">open_in_new</i>
                          </div>
                        </div>
                        <p class="std-text-small text-muted truncate-text-2 mb-0">{{ igPost.caption }}</p>
                      </a>
                    </div>
                  </div>

                  <!-- Facebook -->
                  <div v-if="redes.facebook && redes.facebook.length > 0" class="mt-5">
                    <p class="std-subtitle text-dark mb-3 border-bottom pb-2 d-flex align-items-center text-uppercase">
                      <img src="recursos/facebook.png" style="width:16px; margin-right:8px; filter: grayscale(100%);" loading="lazy"> Facebook
                    </p>
                    
                    <div v-for="(fbPost, index) in redes.facebook" :key="'fb-'+index" class="social-embed-container mb-4">
                      <a :href="fbPost.permalink_url" target="_blank" class="text-decoration-none text-dark">
                        <div class="position-relative overflow-hidden rounded-3 shadow-sm mb-2 social-img-wrapper" v-if="fbPost.full_picture">
                          <img :src="fbPost.full_picture" class="w-100" style="height: 200px; object-fit: cover;" loading="lazy">
                          <div class="social-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                            <i class="material-icons text-white fs-1">open_in_new</i>
                          </div>
                        </div>
                        <p class="std-text-small text-muted truncate-text-2 mb-0">{{ fbPost.message }}</p>
                      </a>
                    </div>
                  </div>
                  <div v-if="(!redes.instagram || redes.instagram.length === 0) && (!redes.facebook || redes.facebook.length === 0)" class="text-center text-muted std-text-small py-3">
                    No hay publicaciones recientes.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.getNoticias();
    this.getRedesSociales();
    this.updateMetaTags(null);
    
    const options = { root: null, rootMargin: '0px', threshold: 0.15 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);

    this.refrescarAnimaciones();
  },
  data() {
    return {
      observer: null,
      selectedNews: null,
      currentPage: 1,
      itemsPerPage: 4,
      noticiasList: [], 
      filtros: { categoria: '', busqueda: '', etiqueta: '' },
      searchTimeout: null,
      etiquetas: ['Femenil', 'Varonil', 'Jurídico', 'Visitas', 'Colaboradores'],
      
      cargandoRedes: true,
      redes: {
        instagram: [],
        facebook: []
      }
    }
  },
  computed: {
    noticiasPaginadas() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.noticiasList.slice(start, end);
    },
    noticiasEnFilas() {
      let filas = [];
      for (let i = 0; i < this.noticiasPaginadas.length; i += 2) {
        filas.push(this.noticiasPaginadas.slice(i, i + 2));
      }
      return filas;
    },
    totalPages() {
      return Math.ceil(this.noticiasList.length / this.itemsPerPage) || 1;
    }
  },
  methods: {
      refrescarAnimaciones() {
        this.$nextTick(() => {
          document.querySelectorAll('.reveal-up').forEach(el => {
            if (this.observer) this.observer.observe(el);
          });
        });
      },
      getNoticias() {
          this.currentPage = 1;
          this.selectedNews = null;
          this.updateMetaTags(null); 

          let url = 'noticias/listado-noticias';
          if (this.filtros.categoria === 'Comunicados') {
              url = 'noticias/listado-comunicados';
          }

          axios.get(url, { params: { busqueda: this.filtros.busqueda } })
          .then(response => {
              this.noticiasList = response.data.map(n => ({
                  id: n.id_p,
                  titulo: n.titulo || 'Sin título',
                  fecha: this.formatearFechaEspanol(n.fecha_texto),
                  desc: n.subtitulo || '',
                  detalle: n.informacion || '',
                  imagen: n.imagen_p,
                  categoria: n.categoria || '',
                  ruta: n.ruta || '' 
              }));

              const urlActual = window.location.href;
              const urlParts = urlActual.split('?')[0].split('/');
              const slug = urlParts.pop() || urlParts.pop(); 

              const indexNoticia = this.noticiasList.findIndex(n => n.ruta === slug);
              
              if (indexNoticia !== -1) {
                  const noticiaEnlazada = this.noticiasList[indexNoticia];
                  const paginaCorrecta = Math.floor(indexNoticia / this.itemsPerPage) + 1;
                  this.currentPage = paginaCorrecta;

                  this.irAlDetalle(noticiaEnlazada);
                  this.updateMetaTags(noticiaEnlazada);
              }

              if (this.filtros.busqueda) {
                  const query = this.filtros.busqueda.toLowerCase();
                  this.noticiasList = this.noticiasList.filter(n => 
                      (n.titulo && n.titulo.toLowerCase().includes(query)) || 
                      (n.desc && n.desc.toLowerCase().includes(query))
                  );
              }
              this.refrescarAnimaciones();
          })
          .catch(error => { console.error("Error al cargar datos:", error); });
      },

      compartirNoticia(noticia) {
          let basePath = window.location.origin + window.location.pathname;
          
          if (basePath.includes('/public/')) {
              basePath = basePath.substring(0, basePath.indexOf('/public/') + 8);
          } else {
              basePath = window.location.origin + '/';
          }

          const urlCompartir = `${basePath}noticias/${noticia.ruta}`;
          
          navigator.clipboard.writeText(urlCompartir).then(() => {
              alert(`¡Enlace copiado!\n\n${urlCompartir}`);
          }).catch(err => {
              console.error('Error al copiar: ', err);
          });
      },
      getRedesSociales() {
          this.cargandoRedes = true;
          axios.get('noticias/ultimas-redes')
          .then(response => {
              this.redes.instagram = response.data.instagram;
              this.redes.facebook = response.data.facebook;
          })
          .catch(error => {
              console.error("No se pudieron cargar las redes sociales", error);
          })
          .finally(() => {
              this.cargandoRedes = false;
          });
      },
      obtenerRutaImagen(nombreImagen) {
          if (!nombreImagen) return 'recursos/default.png';
          if (nombreImagen.startsWith('http')) return nombreImagen;
          return 'http://amfpro.mx/intranet/public/ArchivosSistema/Post/' + nombreImagen;
      },
      resetFiltros() {
          this.filtros.categoria = '';
          this.filtros.busqueda = '';
          this.filtros.etiqueta = '';
          this.getNoticias();
      },
      debounceSearch() {
          clearTimeout(this.searchTimeout);
          this.searchTimeout = setTimeout(() => { this.getNoticias(); }, 500);
      },
      filtrarPorEtiqueta(tag) {
          this.filtros.etiqueta = this.filtros.etiqueta === tag ? '' : tag;
          this.getNoticias();
      },
      toggleNews(id) {
          this.selectedNews = this.selectedNews === id ? null : id;
          
          if (this.selectedNews) {
              const noticiaSeleccionada = this.noticiasList.find(n => n.id === id);
              this.updateMetaTags(noticiaSeleccionada);
          } else {
              this.updateMetaTags(null);
          }
      },
      irAlDetalle(noticia) {
          this.$emit('noticia-seleccionada', noticia);
      },
      getColClass(id) {
          if (this.selectedNews === id) return 'col-12';
          if (this.selectedNews !== null) {
              const filaConSeleccionada = this.noticiasEnFilas.find(fila => fila.some(n => n.id === this.selectedNews));
              if (filaConSeleccionada && filaConSeleccionada.some(n => n.id === id)) return 'd-none'; 
          }
          return 'col-md-6';
      },
      changePage(page) {
          if (page > 0 && page <= this.totalPages) {
              this.currentPage = page;
              this.selectedNews = null; 
              this.updateMetaTags(null);
              this.refrescarAnimaciones();
          }
      },
      updateMetaTags(noticia) {
          if (!noticia) {
              document.title = "AMFpro";
              this.setMeta('description', "Entérate de las últimas noticias, comunicados y acciones de la Asociación Mexicana de Futbolistas.");
              this.setMeta('og:title', "Noticias y Comunicados - AMFpro", true);
              this.setMeta('og:description', "Entérate de las últimas noticias, comunicados y acciones de la Asociación Mexicana de Futbolistas.", true);
              this.setMeta('og:image', "http://amfpro.mx/recursos/logo.png", true); 
              return;
          }

          const plainDesc = noticia.desc ? noticia.desc.replace(/<[^>]+>/g, '') : 'Noticia AMFpro';

          document.title = `${noticia.titulo} - AMFpro`;
          this.setMeta('description', plainDesc);
          this.setMeta('og:title', noticia.titulo, true);
          this.setMeta('og:description', plainDesc, true);
          this.setMeta('og:image', this.obtenerRutaImagen(noticia.imagen), true);
          this.setMeta('twitter:title', noticia.titulo);
          this.setMeta('twitter:description', plainDesc);
          this.setMeta('twitter:image', this.obtenerRutaImagen(noticia.imagen));
      },

      setMeta(name, content, isProperty = false) {
          const attribute = isProperty ? 'property' : 'name';
          let meta = document.querySelector(`meta[${attribute}="${name}"]`);
          
          if (!meta) {
              meta = document.createElement('meta');
              meta.setAttribute(attribute, name);
              document.head.appendChild(meta);
          }
          
          meta.setAttribute('content', content);
      },
      formatearFechaEspanol(fechaString) {
          if (!fechaString) return '';
          const fecha = new Date(fechaString.replace(/-/g, '/'));
          if (isNaN(fecha.getTime())) return fechaString;
          const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
          return fecha.toLocaleDateString('es-MX', opciones);
      }
  }
}
</script>

<style lang="scss" scoped>
@use "sass:color";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

/* =========================================================
   SISTEMA DE TIPOGRAFÍA ESTANDARIZADA (ROBOTO 100%)
   ========================================================= */

/* Obligamos a usar Roboto, pero respetamos estrictamente los íconos */
h1, h2, h3, h4, h5, h6, p, a, button, li, ul, strong, input, select, span { 
  font-family: 'Roboto', sans-serif !important; 
}
div:not(.material-icons), span:not(.material-icons) {
  font-family: 'Roboto', sans-serif;
}
.material-icons {
  font-family: 'Material Icons' !important;
}

/* Pesos estandarizados */
.fw-black { font-weight: 900 !important; }
.fw-bold { font-weight: 700 !important; }
.fw-light { font-weight: 300 !important; }

/* 1. Títulos Principales (Hero / Números gigantes) */
.std-title-hero {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.1;
}

/* 2. Títulos de Sección (NOSOTROS, CONVENIOS, OBJETIVO) */
.std-title-section {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  letter-spacing: -1px;
}

/* 3. Títulos de Tarjetas (Misión, Visión, Nombres) */
.std-title-card {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  line-height: 1.3;
}

/* 4. Subtítulos (Etiquetas superiores, "PREPÁRATE FUERA DEL CAMPO") */
.std-subtitle {
  font-size: clamp(0.75rem, 1.5vw, 0.9rem);
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 700;
}

/* 5. Textos Generales (Párrafos) */
.std-text {
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.8;
}

/* 6. Textos Pequeños (Listas, detalles en tarjetas) */
.std-text-small {
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  line-height: 1.6;
}


/* =========================================================
   VARIABLES GLOBALES
   ========================================================= */
$amf-dark: #112a18;
$amf-main: #50c026;
$amf-accent: #50c026;

.amf-green-text { color: $amf-main !important; }
.tracking-widest { letter-spacing: 4px; }
.tracking-wider { letter-spacing: 2px; }
.accent-line { width: 100px; height: 8px; background-color: $amf-main; border-radius: 4px; }
.py-6 { padding-top: 6rem; padding-bottom: 6rem; }
.mt-6 { margin-top: 5rem; }
.mb-6 { margin-bottom: 5rem; }

/* SISTEMA DE ANIMACIÓN REVEAL-UP */
.reveal-up { 
  opacity: 0; 
  transform: translateY(40px); 
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); 
}
.is-visible.reveal-up, .is-visible .reveal-up { 
  opacity: 1; 
  transform: translateY(0); 
}
.delay-1 { transition-delay: 0.15s; }
.delay-2 { transition-delay: 0.3s; }

/* =========================================================
   TARJETAS DE NOTICIAS ULTRA-PREMIUM
   ========================================================= */
.premium-news-card {
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform-style: preserve-3d;

  .news-img-wrapper {
    height: 250px;
    
    .news-img {
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    
    .img-overlay {
      background: linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(17, 42, 24, 0.6) 100%);
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    
    .badge-category {
      background-color: rgba(255, 255, 255, 0.95);
      color: $amf-main;
      border-radius: 8px;
      backdrop-filter: blur(10px);
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
  }

  .card-content-wrapper {
    background-color: white;
    z-index: 2;
  }

  .badge-date {
    background-color: rgba(62, 148, 82, 0.1);
    color: $amf-main;
    transition: all 0.4s ease;
  }

  .truncate-text-title {
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 58px; 
    line-height: 1.3;
  }

  .news-title {
    transition: color 0.4s ease;
    background-image: linear-gradient(transparent calc(100% - 3px), $amf-main 3px);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position: left bottom;
    transition: background-size 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.3s ease;
  }

  .read-more-link {
    color: $amf-main;
    transition: color 0.3s ease;
    
    .transition-icon {
      transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(17, 42, 24, 0.15) !important;
    border-color: rgba(62, 148, 82, 0.4) !important;

    .news-img-wrapper {
      .news-img {
        transform: scale(1.1) rotate(1.5deg); 
      }
      .img-overlay {
        opacity: 1; 
      }
      .badge-category {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.15) !important;
      }
    }

    .badge-date {
      background-color: $amf-main;
      color: white;
    }

    .news-title {
      color: $amf-main !important;
      background-size: 100% 100%; 
    }

    .read-more-link {
      color: $amf-dark;
      .transition-icon {
        transform: translateX(8px) scale(1.1); 
      }
    }
  }
}

/* =========================================================
   SIDEBAR & FILTROS PREMIUM
   ========================================================= */
.btn-premium-green {
  background-color: $amf-main; 
  color: white; 
  border: none;
  transition: all 0.3s ease;
  &:hover { 
    background-color: $amf-dark; 
    transform: translateY(-3px); 
    box-shadow: 0 10px 20px rgba(62, 148, 82, 0.3) !important;
  }
}

.premium-input {
  border: 1px solid #e9ecef;
  background-color: #f8f9fa;
  transition: all 0.3s ease;
  &:focus {
    border-color: $amf-main;
    background-color: white;
    box-shadow: 0 0 0 0.25rem rgba(62, 148, 82, 0.1);
  }
}

.social-img-wrapper {
  .social-hover-overlay {
    background-color: rgba(62, 148, 82, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(3px);
  }
}

.social-embed-container:hover {
  .social-hover-overlay {
    opacity: 1;
  }
}

/* =========================================================
   PAGINACIÓN
   ========================================================= */
.custom-pagination {
  background-color: white;
  padding: 5px;
  
  .page-link { 
    border: none; 
    background-color: transparent; 
    color: #6c757d; 
    margin: 0 2px; 
    border-radius: 50% !important; 
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover { 
      background-color: rgba(62, 148, 82, 0.1); 
      color: $amf-main; 
    } 
  }
  .page-item.active .page-link { 
    background-color: $amf-main; 
    color: white; 
    box-shadow: 0 5px 15px rgba(62, 148, 82, 0.3);
  }
  .page-item.disabled .page-link {
    opacity: 0.5;
  }
}

.truncate-text-2 { 
  display: -webkit-box; 
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical; 
  overflow: hidden; 
}
</style>