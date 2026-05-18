<template>
    <section class="py-5 bg-white text-center mt-5 section-noticias">       
      <div class="container mt-5 pt-4">
        <h2 class="section-main-title fw-bold text-center mb-5">NOTICIAS</h2>

        <div class="row text-start text-dark">
          <div class="col-lg-8 order-2 order-lg-1">
            
            <div v-if="noticiasList.length === 0" class="text-center py-5 text-muted">
              <i class="material-icons" style="font-size: 3rem;">article</i>
              <p class="mt-3">No se encontraron noticias con los filtros seleccionados.</p>
            </div>

            <div v-else>
              <div v-for="(fila, index) in noticiasEnFilas" :key="'fila-'+index" class="row g-4 mb-4 position-relative">
                <div v-for="noticia in fila" :key="noticia.id" 
                    class="news-col-transition"
                    :class="getColClass(noticia.id)">
                  
                  <div class="news-card-vertical bg-white rounded-5 overflow-hidden h-100 shadow-sm border"
                      :class="{ 'expanded': selectedNews === noticia.id }"
                      @click="toggleNews(noticia.id)">
                    
                    <div v-if="selectedNews === noticia.id" class="close-btn">×</div>
                    <img :src="obtenerRutaImagen(noticia.imagen)" class="w-100 news-img">
                    
                    <div class="p-4">
                      <span class="text-muted small">{{ noticia.fecha }}</span>
                      <h5 class="fw-bold amf-green-text-2 mt-1">{{ noticia.titulo }}</h5>
                      
                      <div v-if="selectedNews === noticia.id" class="expanded-info">
                        <div class="small text-dark mt-3" v-html="noticia.detalle"></div>
                        <button @click.stop="compartirNoticia(noticia)" class="btn btn-sm btn-outline-success mt-4 mb-2 shadow-sm rounded-pill px-3">
                          <i class="material-icons" style="font-size: 1rem; vertical-align: text-bottom;">share</i> 
                          Compartir Noticia
                        </button>
                      </div>
                      <div v-else class="small text-muted mb-0 mt-2 truncate-text-2" v-html="noticia.desc"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-center mt-5" v-if="totalPages > 1">
                <nav>
                  <ul class="pagination custom-pagination">
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                      <a class="page-link" @click.prevent="changePage(currentPage - 1)" href="#">&lt;</a>
                    </li>
                    <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
                      <a class="page-link" @click.prevent="changePage(page)" href="#">{{ page }}</a>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                      <a class="page-link" @click.prevent="changePage(currentPage + 1)" href="#">&gt;</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div class="col-lg-4 order-1 order-lg-2 mb-5 mb-lg-0">
            <div class="sidebar-news sticky-top" style="top: 100px;">
              <button class="btn btn-accent-green w-100 fw-bold text-white mb-4 rounded-3 py-2" @click="resetFiltros">
                TODAS LAS NOTICIAS
              </button>

              <div class="sidebar-box bg-white p-4 rounded-4 mb-4 shadow-sm border">
                <h6 class="fw-bold amf-green-text-2 mb-3 text-center">Categorías</h6>
                <select class="form-select border-success rounded-3 mb-3" v-model="filtros.categoria" @change="getNoticias">
                  <option value="">Elegir la categoría</option>
                  <option value="Noticias">Noticias</option>
                  <option value="Comunicados">Comunicados</option>
                </select>
                
                <div class="position-relative">
                  <input type="text" class="form-control border-success rounded-3 pe-5" placeholder="Buscar" v-model="filtros.busqueda" @input="debounceSearch">
                  <i class="material-icons position-absolute top-50 end-0 translate-middle-y me-3 text-success">search</i>
                </div>
              </div>

              <div class="sidebar-box bg-white p-4 rounded-4 mb-4 shadow-sm border">
                <h6 class="fw-bold amf-green-text-2 mb-4 text-center">Nuestras Redes</h6>
                
                <div class="social-embed-container mb-4" v-if="redes.instagram">
                  <p class="x-small fw-bold text-muted mb-2 d-flex align-items-center justify-content-center">
                     <img src="recursos/instagram.png" style="width:16px; margin-right:5px;"> Último Post en Instagram
                  </p>
                  <a :href="redes.instagram.permalink" target="_blank" class="text-decoration-none text-dark">
                    <img :src="redes.instagram.media_url" class="w-100 rounded-3 border mb-2" style="height: 250px; object-fit: cover;">
                    <p class="x-small text-muted truncate-text-2 mb-0">{{ redes.instagram.caption }}</p>
                  </a>
                </div>
                <div v-else-if="cargandoRedes" class="text-center py-3"><div class="spinner-border text-success spinner-border-sm"></div></div>

                <div class="social-embed-container" v-if="redes.facebook">
                  <p class="x-small fw-bold text-muted mb-2 d-flex align-items-center justify-content-center">
                     <img src="recursos/facebook.png" style="width:16px; margin-right:5px;"> Último Post en Facebook
                  </p>
                  <a :href="redes.facebook.permalink_url" target="_blank" class="text-decoration-none text-dark">
                    <img :src="redes.facebook.full_picture" class="w-100 rounded-3 border mb-2" style="height: 226px; object-fit: cover;">
                    <p class="x-small text-muted truncate-text-2 mb-0">{{ redes.facebook.message }}</p>
                  </a>
                </div>
                <div v-else-if="cargandoRedes" class="text-center py-3"><div class="spinner-border text-success spinner-border-sm"></div></div>
              </div>

              <div class="sidebar-box bg-white p-4 rounded-4 shadow-sm border">
                <h6 class="fw-bold amf-green-text-2 mb-3 text-center">Etiquetas</h6>
                <div class="d-flex flex-wrap gap-2 justify-content-center">
                  <span v-for="tag in etiquetas" :key="tag" 
                        class="tag-badge" 
                        :class="{'bg-dark text-white': filtros.etiqueta === tag}"
                        @click="filtrarPorEtiqueta(tag)">
                    {{ tag }}
                  </span>
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
    // Establecemos los metas por defecto al cargar la sección
    this.updateMetaTags(null);
  },
  data() {
    return {
      selectedNews: null,
      currentPage: 1,
      itemsPerPage: 4,
      noticiasList: [], 
      filtros: { categoria: '', busqueda: '', etiqueta: '' },
      searchTimeout: null,
      etiquetas: ['Femenil', 'Varonil', 'Jurídico', 'Visitas', 'Colaboradores'],
      
      cargandoRedes: true,
      redes: {
        instagram: null,
        facebook: null
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
                  fecha: n.fecha_texto || '', 
                  desc: n.subtitulo || '',
                  detalle: n.informacion || '',
                  imagen: n.imagen_p,
                  categoria: n.categoria || '',
                  ruta: n.ruta || '' // <-- IMPORTANTE: Asegúrate de mapear la ruta aquí
              }));

              const urlActual = window.location.href;
              const urlParts = urlActual.split('?')[0].split('/');
              const slug = urlParts.pop() || urlParts.pop(); 

              // Buscamos si la palabra final coincide con alguna noticia
              const indexNoticia = this.noticiasList.findIndex(n => n.ruta === slug);
              
              if (indexNoticia !== -1) {
                  const noticiaEnlazada = this.noticiasList[indexNoticia];

                  // 1. CALCULAMOS EN QUÉ PÁGINA ESTÁ Y CAMBIAMOS A ELLA
                  // Math.floor divide la posición entre 4 (tus itemsPerPage) y le suma 1
                  const paginaCorrecta = Math.floor(indexNoticia / this.itemsPerPage) + 1;
                  this.currentPage = paginaCorrecta;

                  // 2. Expandimos la noticia y seteamos metas
                  this.selectedNews = noticiaEnlazada.id;
                  this.updateMetaTags(noticiaEnlazada);
                  
                  // 3. Hacemos el Scroll exacto
                  this.$nextTick(() => {
                      setTimeout(() => {
                          const el = document.querySelector('.section-noticias');
                          if (el) {
                              const headerOffset = 100; 
                              const elementPosition = el.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                              
                              window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                          }
                      }, 800); 
                  });
              }

              if (this.filtros.busqueda) {
                  const query = this.filtros.busqueda.toLowerCase();
                  this.noticiasList = this.noticiasList.filter(n => 
                      (n.titulo && n.titulo.toLowerCase().includes(query)) || 
                      (n.desc && n.desc.toLowerCase().includes(query))
                  );
              }
          })
          .catch(error => { console.error("Error al cargar datos:", error); });
      },

      compartirNoticia(noticia) {
          let basePath = window.location.origin + window.location.pathname;
          
          // Si estás trabajando en local y la URL tiene "/public/"
          if (basePath.includes('/public/')) {
              basePath = basePath.substring(0, basePath.indexOf('/public/') + 8);
          } else {
              // Si ya estás en el servidor en vivo (amfpro.mx)
              basePath = window.location.origin + '/';
          }

          // Armamos el enlace final
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
          
          // === MAGIA DE LOS METAS AQUÍ ===
          if (this.selectedNews) {
              const noticiaSeleccionada = this.noticiasList.find(n => n.id === id);
              this.updateMetaTags(noticiaSeleccionada);
          } else {
              this.updateMetaTags(null); // Regresa a los metas por defecto
          }
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
          }
      },
      
      // ==========================================
      // FUNCIONES PARA INYECTAR METAS DINÁMICOS
      // ==========================================
      updateMetaTags(noticia) {
          if (!noticia) {
              // Metas por defecto de la página de Noticias
              document.title = "Noticias y Comunicados - AMFpro";
              this.setMeta('description', "Entérate de las últimas noticias, comunicados y acciones de la Asociación Mexicana de Futbolistas.");
              this.setMeta('og:title', "Noticias y Comunicados - AMFpro", true);
              this.setMeta('og:description', "Entérate de las últimas noticias, comunicados y acciones de la Asociación Mexicana de Futbolistas.", true);
              this.setMeta('og:image', "http://amfpro.mx/recursos/logo.png", true); // Pon un logo por defecto tuyo
              return;
          }

          // Limpiamos etiquetas HTML de la descripción para que el meta quede limpio
          const plainDesc = noticia.desc ? noticia.desc.replace(/<[^>]+>/g, '') : 'Noticia AMFpro';

          // Actualizamos los metas con la información de la noticia seleccionada
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
      }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.amf-landing-page { font-family: 'Roboto', sans-serif !important; }
$amf-dark: #3E9452; $amf-main: #3e9452; $amf-accent: #50c026;
.amf-green-text-2 { color: #50c026 !important; }

.section-noticias {
  .news-col-transition { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
  .news-card-vertical {
    cursor: pointer; transition: all 0.4s ease; position: relative;
    &.expanded { cursor: default; .news-img { height: 500px; } }
    .news-img { height: 350px; object-fit: cover; transition: height 0.5s ease; }
    .close-btn {
      position: absolute; top: 15px; right: 15px; z-index: 10;
      background: rgba(0,0,0,0.5); color: white; width: 30px; height: 30px;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
    }
  }
  .expanded-info { animation: slideUp 0.5s ease forwards; }
  .btn-accent-green { background-color: $amf-accent; border: none; &:hover { background-color: darken($amf-accent, 10%); } }
  
  .tag-badge {
    background-color: $amf-accent; color: white; padding: 5px 12px; border-radius: 5px;
    font-size: 0.7rem; font-weight: bold; cursor: pointer; transition: all 0.2s ease;
    &:hover { opacity: 0.8; transform: translateY(-2px); }
  }
  
  .custom-pagination {
    .page-link { border: none; background-color: $amf-accent; color: white; margin: 0 5px; border-radius: 8px !important; font-weight: bold; &:hover { background-color: white; color: $amf-accent; } }
    .page-item.active .page-link { background-color: white; color: $amf-accent; border: 1px solid $amf-accent; }
  }

  .truncate-text { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
  .truncate-text-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

  .social-embed-container {
    transition: transform 0.3s ease;
    &:hover { transform: translateY(-3px); }
  }
}

@keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

::v-deep .expanded-info p,
::v-deep .truncate-text-2 p { margin-bottom: 0.5rem; }
::v-deep .truncate-text-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; p { display: inline; } }
</style>