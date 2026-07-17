"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SectionNoticiasComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionNoticiasComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionNoticiasComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    this.getNoticias();
    this.getRedesSociales();
    this.updateMetaTags(null);
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    this.observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);
    this.refrescarAnimaciones();
  },
  data: function data() {
    return {
      observer: null,
      selectedNews: null,
      currentPage: 1,
      itemsPerPage: 4,
      noticiasList: [],
      filtros: {
        categoria: '',
        busqueda: '',
        etiqueta: ''
      },
      searchTimeout: null,
      etiquetas: ['Femenil', 'Varonil', 'Jurídico', 'Visitas', 'Colaboradores'],
      cargandoRedes: true,
      redes: {
        instagram: [],
        facebook: []
      }
    };
  },
  computed: {
    noticiasPaginadas: function noticiasPaginadas() {
      var start = (this.currentPage - 1) * this.itemsPerPage;
      var end = start + this.itemsPerPage;
      return this.noticiasList.slice(start, end);
    },
    noticiasEnFilas: function noticiasEnFilas() {
      var filas = [];
      for (var i = 0; i < this.noticiasPaginadas.length; i += 2) {
        filas.push(this.noticiasPaginadas.slice(i, i + 2));
      }
      return filas;
    },
    totalPages: function totalPages() {
      return Math.ceil(this.noticiasList.length / this.itemsPerPage) || 1;
    }
  },
  methods: {
    refrescarAnimaciones: function refrescarAnimaciones() {
      var _this = this;
      this.$nextTick(function () {
        document.querySelectorAll('.reveal-up').forEach(function (el) {
          if (_this.observer) _this.observer.observe(el);
        });
      });
    },
    getNoticias: function getNoticias() {
      var _this2 = this;
      this.currentPage = 1;
      this.selectedNews = null;
      this.updateMetaTags(null);
      var url = 'noticias/listado-noticias';
      if (this.filtros.categoria === 'Comunicados') {
        url = 'noticias/listado-comunicados';
      }
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
        params: {
          busqueda: this.filtros.busqueda
        }
      }).then(function (response) {
        _this2.noticiasList = response.data.map(function (n) {
          return {
            id: n.id_p,
            titulo: n.titulo || 'Sin título',
            fecha: _this2.formatearFechaEspanol(n.fecha_texto),
            desc: n.subtitulo || '',
            detalle: n.informacion || '',
            imagen: n.imagen_p,
            categoria: n.categoria || '',
            ruta: n.ruta || ''
          };
        });
        var urlActual = window.location.href;
        var urlParts = urlActual.split('?')[0].split('/');
        var slug = urlParts.pop() || urlParts.pop();
        var indexNoticia = _this2.noticiasList.findIndex(function (n) {
          return n.ruta === slug;
        });
        if (indexNoticia !== -1) {
          var noticiaEnlazada = _this2.noticiasList[indexNoticia];
          var paginaCorrecta = Math.floor(indexNoticia / _this2.itemsPerPage) + 1;
          _this2.currentPage = paginaCorrecta;
          _this2.irAlDetalle(noticiaEnlazada);
          _this2.updateMetaTags(noticiaEnlazada);
        }
        if (_this2.filtros.busqueda) {
          var query = _this2.filtros.busqueda.toLowerCase();
          _this2.noticiasList = _this2.noticiasList.filter(function (n) {
            return n.titulo && n.titulo.toLowerCase().includes(query) || n.desc && n.desc.toLowerCase().includes(query);
          });
        }
        _this2.refrescarAnimaciones();
      })["catch"](function (error) {
        console.error("Error al cargar datos:", error);
      });
    },
    compartirNoticia: function compartirNoticia(noticia) {
      var basePath = window.location.origin + window.location.pathname;
      if (basePath.includes('/public/')) {
        basePath = basePath.substring(0, basePath.indexOf('/public/') + 8);
      } else {
        basePath = window.location.origin + '/';
      }
      var urlCompartir = "".concat(basePath, "noticias/").concat(noticia.ruta);
      navigator.clipboard.writeText(urlCompartir).then(function () {
        alert("\xA1Enlace copiado!\n\n".concat(urlCompartir));
      })["catch"](function (err) {
        console.error('Error al copiar: ', err);
      });
    },
    getRedesSociales: function getRedesSociales() {
      var _this3 = this;
      this.cargandoRedes = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('noticias/ultimas-redes').then(function (response) {
        _this3.redes.instagram = response.data.instagram;
        _this3.redes.facebook = response.data.facebook;
      })["catch"](function (error) {
        console.error("No se pudieron cargar las redes sociales", error);
      })["finally"](function () {
        _this3.cargandoRedes = false;
      });
    },
    obtenerRutaImagen: function obtenerRutaImagen(nombreImagen) {
      if (!nombreImagen) return 'recursos/default.png';
      if (nombreImagen.startsWith('http')) return nombreImagen;
      return 'http://amfpro.mx/intranet/public/ArchivosSistema/Post/' + nombreImagen;
    },
    resetFiltros: function resetFiltros() {
      this.filtros.categoria = '';
      this.filtros.busqueda = '';
      this.filtros.etiqueta = '';
      this.getNoticias();
    },
    debounceSearch: function debounceSearch() {
      var _this4 = this;
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(function () {
        _this4.getNoticias();
      }, 500);
    },
    filtrarPorEtiqueta: function filtrarPorEtiqueta(tag) {
      this.filtros.etiqueta = this.filtros.etiqueta === tag ? '' : tag;
      this.getNoticias();
    },
    toggleNews: function toggleNews(id) {
      this.selectedNews = this.selectedNews === id ? null : id;
      if (this.selectedNews) {
        var noticiaSeleccionada = this.noticiasList.find(function (n) {
          return n.id === id;
        });
        this.updateMetaTags(noticiaSeleccionada);
      } else {
        this.updateMetaTags(null);
      }
    },
    irAlDetalle: function irAlDetalle(noticia) {
      this.$emit('noticia-seleccionada', noticia);
    },
    getColClass: function getColClass(id) {
      var _this5 = this;
      if (this.selectedNews === id) return 'col-12';
      if (this.selectedNews !== null) {
        var filaConSeleccionada = this.noticiasEnFilas.find(function (fila) {
          return fila.some(function (n) {
            return n.id === _this5.selectedNews;
          });
        });
        if (filaConSeleccionada && filaConSeleccionada.some(function (n) {
          return n.id === id;
        })) return 'd-none';
      }
      return 'col-md-6';
    },
    changePage: function changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
        this.selectedNews = null;
        this.updateMetaTags(null);
        this.refrescarAnimaciones();
      }
    },
    updateMetaTags: function updateMetaTags(noticia) {
      if (!noticia) {
        document.title = "AMFpro";
        this.setMeta('description', "Entérate de las últimas noticias, comunicados y acciones de la Asociación Mexicana de Futbolistas.");
        this.setMeta('og:title', "Noticias y Comunicados - AMFpro", true);
        this.setMeta('og:description', "Entérate de las últimas noticias, comunicados y acciones de la Asociación Mexicana de Futbolistas.", true);
        this.setMeta('og:image', "http://amfpro.mx/recursos/logo.png", true);
        return;
      }
      var plainDesc = noticia.desc ? noticia.desc.replace(/<[^>]+>/g, '') : 'Noticia AMFpro';
      document.title = "".concat(noticia.titulo, " - AMFpro");
      this.setMeta('description', plainDesc);
      this.setMeta('og:title', noticia.titulo, true);
      this.setMeta('og:description', plainDesc, true);
      this.setMeta('og:image', this.obtenerRutaImagen(noticia.imagen), true);
      this.setMeta('twitter:title', noticia.titulo);
      this.setMeta('twitter:description', plainDesc);
      this.setMeta('twitter:image', this.obtenerRutaImagen(noticia.imagen));
    },
    setMeta: function setMeta(name, content) {
      var isProperty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attribute = isProperty ? 'property' : 'name';
      var meta = document.querySelector("meta[".concat(attribute, "=\"").concat(name, "\"]"));
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    },
    formatearFechaEspanol: function formatearFechaEspanol(fechaString) {
      if (!fechaString) return '';
      var fecha = new Date(fechaString.replace(/-/g, '/'));
      if (isNaN(fecha.getTime())) return fechaString;
      var opciones = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      };
      return fecha.toLocaleDateString('es-MX', opciones);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionNoticiasComponent.vue?vue&type=template&id=7fef7ad6&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionNoticiasComponent.vue?vue&type=template&id=7fef7ad6&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "py-6 text-center mt-5 section-noticias relative-container font-roboto",
    attrs: {
      id: "noticias"
    }
  }, [_c("div", {
    staticClass: "container px-md-5"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row text-start text-dark"
  }, [_c("div", {
    staticClass: "col-lg-8 order-2 order-lg-1"
  }, [_vm.noticiasList.length === 0 ? _c("div", {
    staticClass: "text-center py-5 text-muted reveal-up delay-1"
  }, [_c("i", {
    staticClass: "material-icons opacity-50",
    staticStyle: {
      "font-size": "4rem"
    }
  }, [_vm._v("article")]), _vm._v(" "), _c("p", {
    staticClass: "std-text mt-3"
  }, [_vm._v("No se encontraron noticias con los filtros seleccionados.")])]) : _c("div", [_vm._l(_vm.noticiasEnFilas, function (fila, index) {
    return _c("div", {
      key: "fila-" + index,
      staticClass: "row g-4 mb-4 position-relative"
    }, _vm._l(fila, function (noticia) {
      return _c("div", {
        key: noticia.id,
        staticClass: "news-col-transition reveal-up",
        "class": _vm.getColClass(noticia.id)
      }, [_c("div", {
        staticClass: "premium-news-card bg-white rounded-4 overflow-hidden h-100 shadow-sm border border-light d-flex flex-column",
        on: {
          click: function click($event) {
            return _vm.irAlDetalle(noticia);
          }
        }
      }, [_c("div", {
        staticClass: "news-img-wrapper position-relative overflow-hidden"
      }, [_c("img", {
        staticClass: "w-100 news-img",
        attrs: {
          src: _vm.obtenerRutaImagen(noticia.imagen),
          loading: "lazy"
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "img-overlay position-absolute top-0 start-0 w-100 h-100"
      }), _vm._v(" "), noticia.categoria ? _c("span", {
        staticClass: "std-subtitle badge-category position-absolute top-0 start-0 m-3 px-3 py-2 fw-bold text-uppercase shadow-sm"
      }, [_vm._v("\n                    " + _vm._s(noticia.categoria) + "\n                  ")]) : _vm._e()]), _vm._v(" "), _c("div", {
        staticClass: "p-4 p-md-5 d-flex flex-column flex-grow-1 card-content-wrapper"
      }, [_c("div", {
        staticClass: "d-flex align-items-center mb-3"
      }, [_c("span", {
        staticClass: "badge-date rounded-pill px-3 py-1 std-text-small fw-bold shadow-sm d-inline-flex align-items-center"
      }, [_c("i", {
        staticClass: "material-icons fs-6 me-1"
      }, [_vm._v("calendar_today")]), _vm._v("\n                      " + _vm._s(noticia.fecha) + "\n                    ")])]), _vm._v(" "), _c("h4", {
        staticClass: "std-title-card fw-bold text-dark mb-3 news-title truncate-text-title",
        attrs: {
          title: noticia.titulo
        }
      }, [_vm._v("\n                    " + _vm._s(noticia.titulo) + "\n                  ")]), _vm._v(" "), _c("div", {
        staticClass: "std-text-small text-secondary mb-4 mt-auto truncate-text-2",
        domProps: {
          innerHTML: _vm._s(noticia.desc)
        }
      }), _vm._v(" "), _vm._m(1, true)])])]);
    }), 0);
  }), _vm._v(" "), _vm.totalPages > 1 ? _c("div", {
    staticClass: "d-flex justify-content-center mt-6 reveal-up"
  }, [_c("nav", [_c("ul", {
    staticClass: "pagination custom-pagination shadow-sm rounded-pill overflow-hidden"
  }, [_c("li", {
    staticClass: "page-item",
    "class": {
      disabled: _vm.currentPage === 1
    }
  }, [_c("a", {
    staticClass: "page-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changePage(_vm.currentPage - 1);
      }
    }
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("chevron_left")])])]), _vm._v(" "), _vm._l(_vm.totalPages, function (page) {
    return _c("li", {
      key: page,
      staticClass: "page-item",
      "class": {
        active: _vm.currentPage === page
      }
    }, [_c("a", {
      staticClass: "page-link std-text-small fw-bold",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.changePage(page);
        }
      }
    }, [_vm._v(_vm._s(page))])]);
  }), _vm._v(" "), _c("li", {
    staticClass: "page-item",
    "class": {
      disabled: _vm.currentPage === _vm.totalPages
    }
  }, [_c("a", {
    staticClass: "page-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changePage(_vm.currentPage + 1);
      }
    }
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("chevron_right")])])])], 2)])]) : _vm._e()], 2)]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 order-1 order-lg-2 mb-5 mb-lg-0 reveal-up delay-2"
  }, [_c("div", {
    staticClass: "sidebar-news sticky-top",
    staticStyle: {
      top: "100px"
    }
  }, [_c("button", {
    staticClass: "btn btn-premium-green w-100 fw-bold text-uppercase std-subtitle mb-4 rounded-pill py-3 shadow-sm",
    on: {
      click: _vm.resetFiltros
    }
  }, [_vm._v("\n            Mostrar Todas\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "premium-sidebar-box bg-white p-4 p-md-5 rounded-4 mb-4 shadow-sm border border-light"
  }, [_vm._m(2), _vm._v(" "), _c("p", {
    staticClass: "std-subtitle text-muted mb-2"
  }, [_vm._v("Categoría")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtros.categoria,
      expression: "filtros.categoria"
    }],
    staticClass: "form-select premium-input rounded-3 mb-4 shadow-none std-text-small",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filtros, "categoria", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.getNoticias]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Todas las categorías")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Noticias"
    }
  }, [_vm._v("Noticias")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Comunicados"
    }
  }, [_vm._v("Comunicados")])]), _vm._v(" "), _c("p", {
    staticClass: "std-subtitle text-muted mb-2"
  }, [_vm._v("Búsqueda")]), _vm._v(" "), _c("div", {
    staticClass: "position-relative"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtros.busqueda,
      expression: "filtros.busqueda"
    }],
    staticClass: "form-control premium-input rounded-3 pe-5 shadow-none std-text-small",
    attrs: {
      type: "text",
      placeholder: "Buscar palabras clave..."
    },
    domProps: {
      value: _vm.filtros.busqueda
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filtros, "busqueda", $event.target.value);
      }, _vm.debounceSearch]
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "material-icons position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
  }, [_vm._v("search")])])]), _vm._v(" "), _c("div", {
    staticClass: "premium-sidebar-box bg-white p-4 p-md-5 rounded-4 mb-4 shadow-sm border border-light"
  }, [_vm._m(3), _vm._v(" "), _vm.cargandoRedes ? _c("div", {
    staticClass: "text-center py-4"
  }, [_c("div", {
    staticClass: "spinner-border text-success spinner-border-sm"
  }), _vm._v(" "), _c("p", {
    staticClass: "std-text-small text-muted mt-2"
  }, [_vm._v("Cargando publicaciones...")])]) : _c("div", [_vm.redes.instagram && _vm.redes.instagram.length > 0 ? _c("div", [_vm._m(4), _vm._v(" "), _vm._l(_vm.redes.instagram, function (igPost, index) {
    return _c("div", {
      key: "ig-" + index,
      staticClass: "social-embed-container mb-4"
    }, [_c("a", {
      staticClass: "text-decoration-none text-dark",
      attrs: {
        href: igPost.permalink,
        target: "_blank"
      }
    }, [_c("div", {
      staticClass: "position-relative overflow-hidden rounded-3 shadow-sm mb-2 social-img-wrapper"
    }, [_c("img", {
      staticClass: "w-100",
      staticStyle: {
        height: "200px",
        "object-fit": "cover"
      },
      attrs: {
        src: igPost.media_url,
        loading: "lazy"
      }
    }), _vm._v(" "), _vm._m(5, true)]), _vm._v(" "), _c("p", {
      staticClass: "std-text-small text-muted truncate-text-2 mb-0"
    }, [_vm._v(_vm._s(igPost.caption))])])]);
  })], 2) : _vm._e(), _vm._v(" "), _vm.redes.facebook && _vm.redes.facebook.length > 0 ? _c("div", {
    staticClass: "mt-5"
  }, [_vm._m(6), _vm._v(" "), _vm._l(_vm.redes.facebook, function (fbPost, index) {
    return _c("div", {
      key: "fb-" + index,
      staticClass: "social-embed-container mb-4"
    }, [_c("a", {
      staticClass: "text-decoration-none text-dark",
      attrs: {
        href: fbPost.permalink_url,
        target: "_blank"
      }
    }, [fbPost.full_picture ? _c("div", {
      staticClass: "position-relative overflow-hidden rounded-3 shadow-sm mb-2 social-img-wrapper"
    }, [_c("img", {
      staticClass: "w-100",
      staticStyle: {
        height: "200px",
        "object-fit": "cover"
      },
      attrs: {
        src: fbPost.full_picture,
        loading: "lazy"
      }
    }), _vm._v(" "), _vm._m(7, true)]) : _vm._e(), _vm._v(" "), _c("p", {
      staticClass: "std-text-small text-muted truncate-text-2 mb-0"
    }, [_vm._v(_vm._s(fbPost.message))])])]);
  })], 2) : _vm._e(), _vm._v(" "), (!_vm.redes.instagram || _vm.redes.instagram.length === 0) && (!_vm.redes.facebook || _vm.redes.facebook.length === 0) ? _c("div", {
    staticClass: "text-center text-muted std-text-small py-3"
  }, [_vm._v("\n                No hay publicaciones recientes.\n              ")]) : _vm._e()])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row justify-content-center mb-5 reveal-up"
  }, [_c("div", {
    staticClass: "col-lg-8 text-center"
  }, [_c("h6", {
    staticClass: "std-subtitle text-muted mb-3"
  }, [_vm._v("Mantente informado")]), _vm._v(" "), _c("h2", {
    staticClass: "std-title-section fw-black amf-green-text mb-4 text-uppercase"
  }, [_vm._v("NOTICIAS")]), _vm._v(" "), _c("div", {
    staticClass: "accent-line mx-auto mb-4"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "read-more-link d-inline-flex align-items-center fw-bold text-uppercase tracking-wider std-text-small mt-3"
  }, [_c("span", {
    staticClass: "link-text"
  }, [_vm._v("Leer Artículo")]), _vm._v(" "), _c("i", {
    staticClass: "material-icons ms-2 transition-icon fs-5"
  }, [_vm._v("arrow_forward")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex align-items-center mb-4"
  }, [_c("i", {
    staticClass: "material-icons amf-green-text fs-4 me-2"
  }, [_vm._v("filter_alt")]), _vm._v(" "), _c("h5", {
    staticClass: "std-title-card fw-bold text-dark mb-0"
  }, [_vm._v("Filtros")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex align-items-center mb-4"
  }, [_c("i", {
    staticClass: "material-icons amf-green-text fs-4 me-2"
  }, [_vm._v("public")]), _vm._v(" "), _c("h5", {
    staticClass: "std-title-card fw-bold text-dark mb-0"
  }, [_vm._v("Redes")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "std-subtitle text-dark mb-3 border-bottom pb-2 d-flex align-items-center text-uppercase"
  }, [_c("img", {
    staticStyle: {
      width: "16px",
      "margin-right": "8px",
      filter: "grayscale(100%)"
    },
    attrs: {
      src: "recursos/instagram.png",
      loading: "lazy"
    }
  }), _vm._v(" Instagram\n                ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "social-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
  }, [_c("i", {
    staticClass: "material-icons text-white fs-1"
  }, [_vm._v("open_in_new")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "std-subtitle text-dark mb-3 border-bottom pb-2 d-flex align-items-center text-uppercase"
  }, [_c("img", {
    staticStyle: {
      width: "16px",
      "margin-right": "8px",
      filter: "grayscale(100%)"
    },
    attrs: {
      src: "recursos/facebook.png",
      loading: "lazy"
    }
  }), _vm._v(" Facebook\n                ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "social-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
  }, [_c("i", {
    staticClass: "material-icons text-white fs-1"
  }, [_vm._v("open_in_new")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionNoticiasComponent.vue?vue&type=style&index=0&id=7fef7ad6&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionNoticiasComponent.vue?vue&type=style&index=0&id=7fef7ad6&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* FORZAR LA TIPOGRAFÍA ROBOTO PARA TODO EL COMPONENTE */\n.font-roboto[data-v-7fef7ad6] {\n  font-family: \"Roboto\", sans-serif !important;\n}\n.font-roboto h1[data-v-7fef7ad6], .font-roboto h2[data-v-7fef7ad6], .font-roboto h3[data-v-7fef7ad6], .font-roboto h4[data-v-7fef7ad6], .font-roboto h5[data-v-7fef7ad6], .font-roboto h6[data-v-7fef7ad6], .font-roboto p[data-v-7fef7ad6], .font-roboto span[data-v-7fef7ad6], .font-roboto div[data-v-7fef7ad6], .font-roboto a[data-v-7fef7ad6], .font-roboto button[data-v-7fef7ad6], .font-roboto li[data-v-7fef7ad6], .font-roboto strong[data-v-7fef7ad6] {\n  font-family: \"Roboto\", sans-serif !important;\n}\n.material-icons[data-v-7fef7ad6] {\n  font-family: \"Material Icons\" !important;\n}\n\n/* Pesos estandarizados */\n.fw-black[data-v-7fef7ad6] {\n  font-weight: 900 !important;\n}\n.fw-bold[data-v-7fef7ad6] {\n  font-weight: 700 !important;\n}\n.fw-light[data-v-7fef7ad6] {\n  font-weight: 300 !important;\n}\n\n/* Títulos Estandarizados */\n.std-title-hero[data-v-7fef7ad6] {\n  font-size: clamp(2.5rem, 6vw, 4.5rem);\n  line-height: 1.1;\n}\n.std-title-section[data-v-7fef7ad6] {\n  font-size: clamp(2rem, 4vw, 3rem);\n  line-height: 1.2;\n  letter-spacing: -1px;\n}\n.std-title-card[data-v-7fef7ad6] {\n  font-size: clamp(1.2rem, 2vw, 1.5rem);\n  line-height: 1.3;\n}\n.std-subtitle[data-v-7fef7ad6] {\n  font-size: clamp(0.75rem, 1.5vw, 0.9rem);\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.std-text[data-v-7fef7ad6] {\n  font-size: clamp(1rem, 1.5vw, 1.1rem);\n  line-height: 1.8;\n}\n.std-text-small[data-v-7fef7ad6] {\n  font-size: clamp(0.85rem, 1vw, 0.95rem);\n  line-height: 1.6;\n}\n\n/* =========================================================\n   VARIABLES GLOBALES\n   ========================================================= */\n.amf-green-text[data-v-7fef7ad6] {\n  color: #50c026 !important;\n}\n.tracking-widest[data-v-7fef7ad6] {\n  letter-spacing: 4px;\n}\n.tracking-wider[data-v-7fef7ad6] {\n  letter-spacing: 2px;\n}\n.accent-line[data-v-7fef7ad6] {\n  width: 100px;\n  height: 8px;\n  background-color: #50c026;\n  border-radius: 4px;\n}\n.py-6[data-v-7fef7ad6] {\n  padding-top: 6rem;\n  padding-bottom: 6rem;\n}\n.mt-6[data-v-7fef7ad6] {\n  margin-top: 5rem;\n}\n.mb-6[data-v-7fef7ad6] {\n  margin-bottom: 5rem;\n}\n\n/* SISTEMA DE ANIMACIÓN REVEAL-UP */\n.reveal-up[data-v-7fef7ad6] {\n  opacity: 0;\n  transform: translateY(40px);\n  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.is-visible.reveal-up[data-v-7fef7ad6], .is-visible .reveal-up[data-v-7fef7ad6] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.delay-1[data-v-7fef7ad6] {\n  transition-delay: 0.15s;\n}\n.delay-2[data-v-7fef7ad6] {\n  transition-delay: 0.3s;\n}\n\n/* =========================================================\n   TARJETAS DE NOTICIAS ULTRA-PREMIUM\n   ========================================================= */\n.premium-news-card[data-v-7fef7ad6] {\n  cursor: pointer;\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform-style: preserve-3d;\n}\n.premium-news-card .news-img-wrapper[data-v-7fef7ad6] {\n  height: 250px;\n}\n.premium-news-card .news-img-wrapper .news-img[data-v-7fef7ad6] {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.premium-news-card .news-img-wrapper .img-overlay[data-v-7fef7ad6] {\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(17, 42, 24, 0.6) 100%);\n  opacity: 0;\n  transition: opacity 0.5s ease;\n}\n.premium-news-card .news-img-wrapper .badge-category[data-v-7fef7ad6] {\n  background-color: rgba(255, 255, 255, 0.95);\n  color: #50c026;\n  border-radius: 8px;\n  backdrop-filter: blur(10px);\n  transition: transform 0.4s ease, box-shadow 0.4s ease;\n}\n.premium-news-card .card-content-wrapper[data-v-7fef7ad6] {\n  background-color: white;\n  z-index: 2;\n}\n.premium-news-card .badge-date[data-v-7fef7ad6] {\n  background-color: rgba(62, 148, 82, 0.1);\n  color: #50c026;\n  transition: all 0.4s ease;\n}\n.premium-news-card .truncate-text-title[data-v-7fef7ad6] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-height: 58px;\n  line-height: 1.3;\n}\n.premium-news-card .news-title[data-v-7fef7ad6] {\n  transition: color 0.4s ease;\n  background-image: linear-gradient(transparent calc(100% - 3px), #50c026 3px);\n  background-repeat: no-repeat;\n  background-size: 0% 100%;\n  background-position: left bottom;\n  transition: background-size 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.3s ease;\n}\n.premium-news-card .read-more-link[data-v-7fef7ad6] {\n  color: #50c026;\n  transition: color 0.3s ease;\n}\n.premium-news-card .read-more-link .transition-icon[data-v-7fef7ad6] {\n  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.premium-news-card[data-v-7fef7ad6]:hover {\n  transform: translateY(-12px);\n  box-shadow: 0 25px 50px rgba(17, 42, 24, 0.15) !important;\n  border-color: rgba(62, 148, 82, 0.4) !important;\n}\n.premium-news-card:hover .news-img-wrapper .news-img[data-v-7fef7ad6] {\n  transform: scale(1.1) rotate(1.5deg);\n}\n.premium-news-card:hover .news-img-wrapper .img-overlay[data-v-7fef7ad6] {\n  opacity: 1;\n}\n.premium-news-card:hover .news-img-wrapper .badge-category[data-v-7fef7ad6] {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important;\n}\n.premium-news-card:hover .badge-date[data-v-7fef7ad6] {\n  background-color: #50c026;\n  color: white;\n}\n.premium-news-card:hover .news-title[data-v-7fef7ad6] {\n  color: #50c026 !important;\n  background-size: 100% 100%;\n}\n.premium-news-card:hover .read-more-link[data-v-7fef7ad6] {\n  color: #112a18;\n}\n.premium-news-card:hover .read-more-link .transition-icon[data-v-7fef7ad6] {\n  transform: translateX(8px) scale(1.1);\n}\n\n/* =========================================================\n   SIDEBAR & FILTROS PREMIUM\n   ========================================================= */\n.btn-premium-green[data-v-7fef7ad6] {\n  background-color: #50c026;\n  color: white;\n  border: none;\n  transition: all 0.3s ease;\n}\n.btn-premium-green[data-v-7fef7ad6]:hover {\n  background-color: #112a18;\n  transform: translateY(-3px);\n  box-shadow: 0 10px 20px rgba(62, 148, 82, 0.3) !important;\n}\n.premium-input[data-v-7fef7ad6] {\n  border: 1px solid #e9ecef;\n  background-color: #f8f9fa;\n  transition: all 0.3s ease;\n}\n.premium-input[data-v-7fef7ad6]:focus {\n  border-color: #50c026;\n  background-color: white;\n  box-shadow: 0 0 0 0.25rem rgba(62, 148, 82, 0.1);\n}\n.social-img-wrapper .social-hover-overlay[data-v-7fef7ad6] {\n  background-color: rgba(62, 148, 82, 0.7);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  backdrop-filter: blur(3px);\n}\n.social-embed-container:hover .social-hover-overlay[data-v-7fef7ad6] {\n  opacity: 1;\n}\n\n/* =========================================================\n   PAGINACIÓN\n   ========================================================= */\n.custom-pagination[data-v-7fef7ad6] {\n  background-color: white;\n  padding: 5px;\n}\n.custom-pagination .page-link[data-v-7fef7ad6] {\n  border: none;\n  background-color: transparent;\n  color: #6c757d;\n  margin: 0 2px;\n  border-radius: 50% !important;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.custom-pagination .page-link[data-v-7fef7ad6]:hover {\n  background-color: rgba(62, 148, 82, 0.1);\n  color: #50c026;\n}\n.custom-pagination .page-item.active .page-link[data-v-7fef7ad6] {\n  background-color: #50c026;\n  color: white;\n  box-shadow: 0 5px 15px rgba(62, 148, 82, 0.3);\n}\n.custom-pagination .page-item.disabled .page-link[data-v-7fef7ad6] {\n  opacity: 0.5;\n}\n.truncate-text-2[data-v-7fef7ad6] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionNoticiasComponent.vue?vue&type=style&index=0&id=7fef7ad6&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionNoticiasComponent.vue?vue&type=style&index=0&id=7fef7ad6&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionNoticiasComponent_vue_vue_type_style_index_0_id_7fef7ad6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionNoticiasComponent.vue?vue&type=style&index=0&id=7fef7ad6&lang=scss&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionNoticiasComponent.vue?vue&type=style&index=0&id=7fef7ad6&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionNoticiasComponent_vue_vue_type_style_index_0_id_7fef7ad6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionNoticiasComponent_vue_vue_type_style_index_0_id_7fef7ad6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/SectionNoticiasComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/SectionNoticiasComponent.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SectionNoticiasComponent_vue_vue_type_template_id_7fef7ad6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionNoticiasComponent.vue?vue&type=template&id=7fef7ad6&scoped=true */ "./resources/js/components/SectionNoticiasComponent.vue?vue&type=template&id=7fef7ad6&scoped=true");
/* harmony import */ var _SectionNoticiasComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionNoticiasComponent.vue?vue&type=script&lang=js */ "./resources/js/components/SectionNoticiasComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _SectionNoticiasComponent_vue_vue_type_style_index_0_id_7fef7ad6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionNoticiasComponent.vue?vue&type=style&index=0&id=7fef7ad6&lang=scss&scoped=true */ "./resources/js/components/SectionNoticiasComponent.vue?vue&type=style&index=0&id=7fef7ad6&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SectionNoticiasComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectionNoticiasComponent_vue_vue_type_template_id_7fef7ad6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SectionNoticiasComponent_vue_vue_type_template_id_7fef7ad6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7fef7ad6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SectionNoticiasComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SectionNoticiasComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/SectionNoticiasComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionNoticiasComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionNoticiasComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionNoticiasComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionNoticiasComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SectionNoticiasComponent.vue?vue&type=template&id=7fef7ad6&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/SectionNoticiasComponent.vue?vue&type=template&id=7fef7ad6&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionNoticiasComponent_vue_vue_type_template_id_7fef7ad6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionNoticiasComponent_vue_vue_type_template_id_7fef7ad6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionNoticiasComponent_vue_vue_type_template_id_7fef7ad6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionNoticiasComponent.vue?vue&type=template&id=7fef7ad6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionNoticiasComponent.vue?vue&type=template&id=7fef7ad6&scoped=true");


/***/ }),

/***/ "./resources/js/components/SectionNoticiasComponent.vue?vue&type=style&index=0&id=7fef7ad6&lang=scss&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/SectionNoticiasComponent.vue?vue&type=style&index=0&id=7fef7ad6&lang=scss&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionNoticiasComponent_vue_vue_type_style_index_0_id_7fef7ad6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionNoticiasComponent.vue?vue&type=style&index=0&id=7fef7ad6&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionNoticiasComponent.vue?vue&type=style&index=0&id=7fef7ad6&lang=scss&scoped=true");


/***/ })

}]);