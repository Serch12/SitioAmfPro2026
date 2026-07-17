"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_DetalleNoticiaComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetalleNoticiaComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetalleNoticiaComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['noticia'],
  data: function data() {
    return {
      lightboxVisible: false,
      lightboxIndex: 0,
      galeriaImagenes: [],
      scrollProgress: 0
    };
  },
  mounted: function mounted() {
    this.cargarGaleria();
    window.addEventListener('scroll', this.calcularProgreso);
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener('scroll', this.calcularProgreso);
  },
  computed: {
    detalleProcesado: function detalleProcesado() {
      if (!this.noticia.detalle) return '';
      var html = this.noticia.detalle;
      return html.replace(/src="(?!\s*https?:\/\/)([^"]+)"/g, function (match, path) {
        if (path.startsWith('/')) {
          return "src=\"http://amfpro.mx".concat(path, "\"");
        }
        return "src=\"http://amfpro.mx/intranet/public/ArchivosSistema/Post/".concat(path, "\"");
      });
    },
    // NUEVA FUNCIÓN PREMIUM: Calcula el tiempo estimado de lectura
    tiempoLectura: function tiempoLectura() {
      if (!this.noticia.detalle) return 1;
      // Quitamos las etiquetas HTML para dejar solo el texto puro
      var textoPlano = this.noticia.detalle.replace(/<[^>]+>/g, '');
      // Contamos las palabras dividiendo por los espacios
      var totalPalabras = textoPlano.split(/\s+/).filter(function (word) {
        return word.length > 0;
      }).length;
      // Una persona promedio lee 200 palabras por minuto
      var minutos = Math.ceil(totalPalabras / 200);
      return minutos === 0 ? 1 : minutos;
    }
  },
  methods: {
    cargarGaleria: function cargarGaleria() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("noticias/".concat(_this.noticia.id, "/galeria"));
            case 1:
              response = _context.v;
              _this.galeriaImagenes = response.data;
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("Error al cargar la galería:", _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    obtenerRutaImagen: function obtenerRutaImagen(nombreImagen) {
      if (!nombreImagen) return 'recursos/default.png';
      var ruta = nombreImagen.startsWith('http') ? nombreImagen : 'http://amfpro.mx/intranet/public/ArchivosSistema/Post/' + nombreImagen;
      return encodeURI(ruta);
    },
    calcularProgreso: function calcularProgreso() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight;
      var clientHeight = document.documentElement.clientHeight;
      var height = scrollHeight - clientHeight;
      if (height > 0) {
        this.scrollProgress = scrollTop / height * 100;
      } else {
        this.scrollProgress = 0;
      }
    },
    copiarEnlace: function copiarEnlace() {
      var url = "".concat(window.location.origin, "/noticias/").concat(this.noticia.ruta || this.noticia.id);
      navigator.clipboard.writeText(url).then(function () {
        if (window.Swal) {
          window.Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: '¡Enlace copiado!',
            text: 'Listo para compartir con tus amigos.',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#fff',
            color: '#333',
            iconColor: '#50c026'
          });
        } else if (window.toastr) {
          window.toastr.success('Listo para compartir', '¡Enlace copiado!');
        }
      });
    },
    abrirLightbox: function abrirLightbox(index) {
      this.lightboxIndex = index;
      this.lightboxVisible = true;
      document.body.style.overflow = 'hidden';
    },
    cerrarLightbox: function cerrarLightbox() {
      this.lightboxVisible = false;
      document.body.style.overflow = 'auto';
    },
    prevImg: function prevImg() {
      if (this.lightboxIndex > 0) {
        this.lightboxIndex--;
      } else {
        this.lightboxIndex = this.galeriaImagenes.length - 1;
      }
    },
    nextImg: function nextImg() {
      if (this.lightboxIndex < this.galeriaImagenes.length - 1) {
        this.lightboxIndex++;
      } else {
        this.lightboxIndex = 0;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetalleNoticiaComponent.vue?vue&type=template&id=e1b1de18&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetalleNoticiaComponent.vue?vue&type=template&id=e1b1de18&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("transition", {
    attrs: {
      name: "fade-slide"
    }
  }, [_c("div", {
    staticClass: "detalle-noticia-wrapper bg-white"
  }, [_c("div", {
    staticClass: "reading-progress-bar",
    style: {
      width: _vm.scrollProgress + "%"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "news-hero",
    style: {
      backgroundImage: "url('".concat(_vm.obtenerRutaImagen(_vm.noticia.imagen), "')")
    }
  }, [_c("div", {
    staticClass: "hero-overlay"
  }), _vm._v(" "), _c("div", {
    staticClass: "container hero-content w-100"
  }, [_c("h1", {
    staticClass: "display-3 fw-black text-white mb-4"
  }, [_vm._v(_vm._s(_vm.noticia.titulo))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-4 w-100 pb-2"
  }, [_c("div", {
    staticClass: "meta-info d-flex flex-wrap align-items-center gap-3 fw-bold",
    staticStyle: {
      color: "#50c026"
    }
  }, [_c("div", {
    staticClass: "badge-category m-0"
  }, [_vm._v(_vm._s(_vm.noticia.categoria))]), _vm._v(" "), _c("span", {
    staticClass: "text-white-50 d-none d-sm-inline"
  }, [_vm._v("•")]), _vm._v(" "), _c("span", {
    staticClass: "d-flex align-items-center gap-1"
  }, [_c("i", {
    staticClass: "material-icons",
    staticStyle: {
      "font-size": "1.1rem"
    }
  }, [_vm._v("calendar_month")]), _vm._v(" " + _vm._s(_vm.noticia.fecha) + "\n            ")]), _vm._v(" "), _c("span", {
    staticClass: "text-white-50"
  }, [_vm._v("•")]), _vm._v(" "), _c("span", {
    staticClass: "d-flex align-items-center gap-1 text-white-50"
  }, [_c("i", {
    staticClass: "material-icons",
    staticStyle: {
      "font-size": "1.1rem"
    }
  }, [_vm._v("schedule")]), _vm._v(" " + _vm._s(_vm.tiempoLectura) + " min de lectura\n            ")])]), _vm._v(" "), _c("button", {
    staticClass: "btn-back m-0 flex-shrink-0",
    on: {
      click: function click($event) {
        return _vm.$emit("regresar");
      }
    }
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("arrow_back")]), _vm._v(" "), _c("span", [_vm._v("Regresar al listado")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container content-body py-5"
  }, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-lg-9"
  }, [_c("div", {
    staticClass: "noticia-texto mb-5",
    domProps: {
      innerHTML: _vm._s(_vm.detalleProcesado)
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "share-section border-top border-bottom py-4 mb-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
  }, [_c("span", {
    staticClass: "fw-bold text-muted"
  }, [_vm._v("¿Te gustó esta noticia? Compártela:")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2"
  }, [_c("button", {
    staticClass: "btn btn-success rounded-pill px-4 d-inline-flex align-items-center gap-2",
    on: {
      click: _vm.copiarEnlace
    }
  }, [_c("i", {
    staticClass: "material-icons",
    staticStyle: {
      "font-size": "1.2rem"
    }
  }, [_vm._v("link")]), _vm._v(" Copiar Link\n              ")])])]), _vm._v(" "), _vm.galeriaImagenes && _vm.galeriaImagenes.length > 0 ? _c("div", {
    staticClass: "gallery-section mt-5 pt-4"
  }, [_c("h3", {
    staticClass: "fw-black text-dark mb-4 display-6"
  }, [_vm._v("\n              Galería "), _c("span", {
    staticClass: "amf-green-text-2"
  }, [_vm._v("Exclusiva")])]), _vm._v(" "), _c("div", {
    staticClass: "pro-gallery-grid"
  }, _vm._l(_vm.galeriaImagenes, function (img, idx) {
    return _c("div", {
      key: idx,
      staticClass: "pro-gallery-item",
      on: {
        click: function click($event) {
          return _vm.abrirLightbox(idx);
        }
      }
    }, [_c("img", {
      attrs: {
        src: _vm.obtenerRutaImagen(img.nombre),
        alt: "Galería AMFPro"
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "pro-gallery-overlay"
    }, [_c("i", {
      staticClass: "material-icons"
    }, [_vm._v("fullscreen")])])]);
  }), 0)]) : _vm._e()])])]), _vm._v(" "), _c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.lightboxVisible ? _c("div", {
    staticClass: "lightbox-modal",
    on: {
      click: function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.cerrarLightbox.apply(null, arguments);
      }
    }
  }, [_c("button", {
    staticClass: "lightbox-close",
    on: {
      click: _vm.cerrarLightbox
    }
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("close")])]), _vm._v(" "), _vm.galeriaImagenes.length > 1 ? _c("button", {
    staticClass: "lightbox-nav nav-prev",
    on: {
      click: _vm.prevImg
    }
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("chevron_left")])]) : _vm._e(), _vm._v(" "), _c("img", {
    staticClass: "lightbox-img",
    attrs: {
      src: _vm.obtenerRutaImagen(_vm.galeriaImagenes[_vm.lightboxIndex].nombre)
    }
  }), _vm._v(" "), _vm.galeriaImagenes.length > 1 ? _c("button", {
    staticClass: "lightbox-nav nav-next",
    on: {
      click: _vm.nextImg
    }
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("chevron_right")])]) : _vm._e()]) : _vm._e()])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetalleNoticiaComponent.vue?vue&type=style&index=0&id=e1b1de18&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetalleNoticiaComponent.vue?vue&type=style&index=0&id=e1b1de18&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.reading-progress-bar[data-v-e1b1de18] {\n  position: fixed;\n  top: 65px;\n  left: 0;\n  height: 7px;\n  background-color: #50c026;\n  z-index: 999999;\n  transition: width 0.1s ease;\n  border-radius: 0 5px 5px 0;\n  box-shadow: 0 2px 10px rgba(80, 192, 38, 0.6);\n}\n.detalle-noticia-wrapper[data-v-e1b1de18] {\n  position: relative;\n  min-height: 100vh;\n  z-index: 1000;\n}\n.detalle-noticia-wrapper .news-hero[data-v-e1b1de18] {\n  height: 70vh;\n  background-color: #111;\n  background-size: contain;\n  background-position: top center;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 4rem;\n}\n.detalle-noticia-wrapper .news-hero .hero-overlay[data-v-e1b1de18] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 100%);\n}\n.detalle-noticia-wrapper .news-hero .hero-content[data-v-e1b1de18] {\n  position: relative;\n  z-index: 2;\n}\n.detalle-noticia-wrapper[data-v-e1b1de18] {\n  /* BOTÓN ALINEADO MILIMÉTRICAMENTE */\n}\n.detalle-noticia-wrapper .btn-back[data-v-e1b1de18] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center; /* Asegura el centrado en el eje flex */\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  padding: 8px 24px;\n  border-radius: 50px;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  font-weight: 500;\n}\n.detalle-noticia-wrapper .btn-back i[data-v-e1b1de18] {\n  font-size: 1.3rem;\n  line-height: 0; /* Mata la caja invisible del ícono */\n}\n.detalle-noticia-wrapper .btn-back span[data-v-e1b1de18] {\n  line-height: 1; /* Iguala la altura de la fuente */\n  padding-top: 2px; /* Ajuste óptico fino para la fuente Roboto */\n}\n.detalle-noticia-wrapper .btn-back[data-v-e1b1de18]:hover {\n  background: #50c026;\n  border-color: #50c026;\n  transform: translateX(-5px);\n}\n.detalle-noticia-wrapper .badge-category[data-v-e1b1de18] {\n  background: #50c026;\n  color: white;\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 4px;\n  font-weight: bold;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.detalle-noticia-wrapper .noticia-texto[data-v-e1b1de18] {\n  font-size: 1.15rem;\n  line-height: 1.9;\n  color: #444;\n  text-align: justify;\n}\n.detalle-noticia-wrapper .noticia-texto[data-v-e1b1de18] p:first-of-type::first-letter {\n  font-size: 4rem;\n  float: left;\n  margin-top: 8px;\n  margin-right: 12px;\n  margin-bottom: -5px;\n  font-weight: 900;\n  color: #50c026;\n  line-height: 0.8;\n  text-transform: uppercase;\n}\n.detalle-noticia-wrapper .noticia-texto[data-v-e1b1de18] p {\n  margin-bottom: 0.3rem;\n}\n.detalle-noticia-wrapper .noticia-texto[data-v-e1b1de18] img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 12px;\n  margin: 2rem 0;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n}\n.detalle-noticia-wrapper .noticia-texto[data-v-e1b1de18] a {\n  color: #50c026;\n  font-weight: bold;\n  text-decoration: none;\n}\n.detalle-noticia-wrapper .pro-gallery-grid[data-v-e1b1de18] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1.5rem;\n}\n.detalle-noticia-wrapper .pro-gallery-item[data-v-e1b1de18] {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 1/1;\n  cursor: pointer;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);\n  background: #f8f9fa;\n}\n.detalle-noticia-wrapper .pro-gallery-item img[data-v-e1b1de18] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\n}\n.detalle-noticia-wrapper .pro-gallery-item .pro-gallery-overlay[data-v-e1b1de18] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(80, 192, 38, 0.8), rgba(0, 0, 0, 0.2));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.4s ease;\n}\n.detalle-noticia-wrapper .pro-gallery-item .pro-gallery-overlay i[data-v-e1b1de18] {\n  color: white;\n  font-size: 3rem;\n  transform: scale(0.5);\n  transition: transform 0.4s cubic-bezier(0.2, 1, 0.3, 1);\n}\n.detalle-noticia-wrapper .pro-gallery-item:hover img[data-v-e1b1de18] {\n  transform: scale(1.1);\n}\n.detalle-noticia-wrapper .pro-gallery-item:hover .pro-gallery-overlay[data-v-e1b1de18] {\n  opacity: 1;\n}\n.detalle-noticia-wrapper .pro-gallery-item:hover .pro-gallery-overlay i[data-v-e1b1de18] {\n  transform: scale(1);\n}\n.lightbox-modal[data-v-e1b1de18] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.95);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(5px);\n}\n.lightbox-img[data-v-e1b1de18] {\n  max-width: 90%;\n  max-height: 90vh;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 8px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\n  animation: zoomIn-e1b1de18 0.3s ease;\n}\n.lightbox-close[data-v-e1b1de18] {\n  position: absolute;\n  top: 30px;\n  right: 40px;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 3rem;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n.lightbox-close[data-v-e1b1de18]:hover {\n  color: #50c026;\n}\n.lightbox-nav[data-v-e1b1de18] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  color: white;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.lightbox-nav i[data-v-e1b1de18] {\n  font-size: 2.5rem;\n}\n.lightbox-nav[data-v-e1b1de18]:hover {\n  background: #50c026;\n}\n.lightbox-nav.nav-prev[data-v-e1b1de18] {\n  left: 30px;\n}\n.lightbox-nav.nav-next[data-v-e1b1de18] {\n  right: 30px;\n}\n.fw-black[data-v-e1b1de18] {\n  font-weight: 900;\n}\n.amf-green-text-2[data-v-e1b1de18] {\n  color: #50c026;\n}\n.fade-slide-enter-active[data-v-e1b1de18], .fade-slide-leave-active[data-v-e1b1de18] {\n  transition: all 0.5s;\n}\n.fade-slide-enter[data-v-e1b1de18], .fade-slide-leave-to[data-v-e1b1de18] {\n  opacity: 0;\n  transform: translateY(30px);\n}\n.fade-enter-active[data-v-e1b1de18], .fade-leave-active[data-v-e1b1de18] {\n  transition: opacity 0.3s;\n}\n.fade-enter[data-v-e1b1de18], .fade-leave-to[data-v-e1b1de18] {\n  opacity: 0;\n}\n@keyframes zoomIn-e1b1de18 {\nfrom {\n    transform: scale(0.9);\n    opacity: 0;\n}\nto {\n    transform: scale(1);\n    opacity: 1;\n}\n}\n@media (max-width: 768px) {\n.news-hero[data-v-e1b1de18] {\n    background-size: cover !important;\n    background-position: center center !important;\n    background-attachment: scroll !important;\n    height: 55vh !important;\n    padding-bottom: 2rem !important;\n}\n.news-hero .display-3[data-v-e1b1de18] {\n    font-size: 2.5rem;\n    line-height: 1.1;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetalleNoticiaComponent.vue?vue&type=style&index=0&id=e1b1de18&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetalleNoticiaComponent.vue?vue&type=style&index=0&id=e1b1de18&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleNoticiaComponent_vue_vue_type_style_index_0_id_e1b1de18_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetalleNoticiaComponent.vue?vue&type=style&index=0&id=e1b1de18&lang=scss&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetalleNoticiaComponent.vue?vue&type=style&index=0&id=e1b1de18&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleNoticiaComponent_vue_vue_type_style_index_0_id_e1b1de18_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleNoticiaComponent_vue_vue_type_style_index_0_id_e1b1de18_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/DetalleNoticiaComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/DetalleNoticiaComponent.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetalleNoticiaComponent_vue_vue_type_template_id_e1b1de18_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetalleNoticiaComponent.vue?vue&type=template&id=e1b1de18&scoped=true */ "./resources/js/components/DetalleNoticiaComponent.vue?vue&type=template&id=e1b1de18&scoped=true");
/* harmony import */ var _DetalleNoticiaComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetalleNoticiaComponent.vue?vue&type=script&lang=js */ "./resources/js/components/DetalleNoticiaComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _DetalleNoticiaComponent_vue_vue_type_style_index_0_id_e1b1de18_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetalleNoticiaComponent.vue?vue&type=style&index=0&id=e1b1de18&lang=scss&scoped=true */ "./resources/js/components/DetalleNoticiaComponent.vue?vue&type=style&index=0&id=e1b1de18&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DetalleNoticiaComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetalleNoticiaComponent_vue_vue_type_template_id_e1b1de18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DetalleNoticiaComponent_vue_vue_type_template_id_e1b1de18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e1b1de18",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DetalleNoticiaComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DetalleNoticiaComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/DetalleNoticiaComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleNoticiaComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetalleNoticiaComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetalleNoticiaComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleNoticiaComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DetalleNoticiaComponent.vue?vue&type=template&id=e1b1de18&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/DetalleNoticiaComponent.vue?vue&type=template&id=e1b1de18&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleNoticiaComponent_vue_vue_type_template_id_e1b1de18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleNoticiaComponent_vue_vue_type_template_id_e1b1de18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleNoticiaComponent_vue_vue_type_template_id_e1b1de18_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetalleNoticiaComponent.vue?vue&type=template&id=e1b1de18&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetalleNoticiaComponent.vue?vue&type=template&id=e1b1de18&scoped=true");


/***/ }),

/***/ "./resources/js/components/DetalleNoticiaComponent.vue?vue&type=style&index=0&id=e1b1de18&lang=scss&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/DetalleNoticiaComponent.vue?vue&type=style&index=0&id=e1b1de18&lang=scss&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleNoticiaComponent_vue_vue_type_style_index_0_id_e1b1de18_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetalleNoticiaComponent.vue?vue&type=style&index=0&id=e1b1de18&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetalleNoticiaComponent.vue?vue&type=style&index=0&id=e1b1de18&lang=scss&scoped=true");


/***/ })

}]);