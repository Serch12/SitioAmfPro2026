"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SectionTalentosComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionTalentosComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionTalentosComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
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
  props: ['scrollPosition'],
  data: function data() {
    return {
      observer: null,
      numerosAnimados: false,
      listaCopas: [{
        nombre: 'COPA BAJÍO',
        img: 'recursos/copa-1.png'
      }, {
        nombre: 'COPA CHIVAS',
        img: 'recursos/copa-2.png'
      }, {
        nombre: 'COPA SULTANES',
        img: 'recursos/copa-3.png'
      }, {
        nombre: 'COPA TECOS',
        img: 'recursos/copa-4.png'
      }, {
        nombre: 'USA CUP',
        img: 'recursos/copa-5.png'
      }, {
        nombre: 'COPA VALLARTA',
        img: 'recursos/copa-6.png'
      }, {
        nombre: 'COPA RECORD',
        img: 'recursos/copa-7.png'
      }, {
        nombre: 'COPA TITANES',
        img: 'recursos/copa-8.png'
      }],
      casosExito: [{
        id: 1,
        nombre: 'Osmar Piña',
        club: 'Academia de Toluca FC'
      }, {
        id: 2,
        nombre: 'Emerson Ponce',
        club: 'Academia de Toluca FC'
      }, {
        id: 3,
        nombre: 'Ronaldo Aguilar',
        club: 'Academia del Club Atlás'
      }, {
        id: 4,
        nombre: 'Johan Guerrero',
        club: 'Fuerzas Básicas Cruz Azul'
      }, {
        id: 5,
        nombre: 'Alan Valdivia',
        club: 'Fuerzas Básicas Tecos'
      }, {
        id: 6,
        nombre: 'Brian Gutiérrez',
        club: 'Fuerzas Básicas UDG'
      }],
      anioSeleccionado: 2023,
      torneosDelAno: [],
      cargandoTorneos: false,
      galeriaAbierta: false,
      torneoActivo: null,
      fotoActualIndex: 0,
      imagenesTorneoActual: [],
      cargandoImagenes: false,
      stats: [{
        val: 0,
        current: 0,
        label: 'Torneos Oficiales'
      }, {
        val: 0,
        current: 0,
        label: 'Talentos'
      }, {
        val: 0,
        current: 0,
        label: 'Experiencia'
      }, {
        val: 3,
        current: 0,
        label: 'Sedes'
      }],
      playersData: []
    };
  },
  computed: {
    aniosDisponibles: function aniosDisponibles() {
      var anioInicio = 2023;
      var anioActual = new Date().getFullYear();
      var anios = [];
      for (var i = anioActual; i >= anioInicio; i--) {
        anios.push(i);
      }
      return anios;
    }
  },
  watch: {
    anioSeleccionado: function anioSeleccionado(nuevoAno) {
      this.obtenerTorneos(nuevoAno);
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.obtenerTorneos(this.anioSeleccionado);
    this.datosAgrupados();
    this.datosTalentos();
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    this.observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          if (entry.target.classList.contains('section-hero')) {
            entry.target.classList.add('hero-visible');
          }
          if (entry.target.classList.contains('section-trayectoria') && !_this.numerosAnimados) {
            _this.animarContadores();
            _this.numerosAnimados = true;
          }
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, options);
    this.refrescarAnimaciones();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.observer) this.observer.disconnect();
  },
  methods: {
    animarContadores: function animarContadores() {
      this.stats.forEach(function (stat) {
        var start = 0;
        var target = stat.val;
        if (target === 0) {
          stat.current = 0;
          return;
        }
        var duration = 2000;
        var increment = target / (duration / 16);
        var timer = setInterval(function () {
          start += increment;
          if (start >= target) {
            stat.current = target;
            clearInterval(timer);
          } else {
            stat.current = start;
          }
        }, 16);
      });
    },
    refrescarAnimaciones: function refrescarAnimaciones() {
      var _this2 = this;
      this.$nextTick(function () {
        document.querySelectorAll('.reveal-up, .reveal-item, .section-hero, .section-trayectoria, .reveal-flip').forEach(function (el) {
          if (_this2.observer) _this2.observer.observe(el);
        });
      });
    },
    datosAgrupados: function datosAgrupados() {
      var _this3 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('torneos_agrupados_ano').then(function (response) {
        _this3.playersData = response.data.map(function (item, index) {
          return {
            year: item.year,
            img: "recursos/jugador".concat(index % 3 + 1, ".png"),
            copas: item.total_copas,
            cats: item.rango_categorias,
            parts: '270',
            "case": item.jugadores_seleccionados
          };
        });
        _this3.refrescarAnimaciones();
      })["catch"](function (error) {
        console.error("Error al cargar torneos agrupados:", error);
      });
    },
    datosTalentos: function datosTalentos() {
      var _this4 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('datos_talentos').then(function (response) {
        _this4.stats[0].val = response.data.total_torneos;
        _this4.stats[1].val = response.data.total_jugadores;
        _this4.stats[2].val = response.data.total_experiencia;
        if (_this4.numerosAnimados) {
          _this4.animarContadores();
        }
        _this4.refrescarAnimaciones();
      });
    },
    obtenerTorneos: function obtenerTorneos(ano) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var respuesta, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this5.cargandoTorneos = true;
              _context.p = 1;
              _context.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("filtra_torneo/".concat(ano));
            case 2:
              respuesta = _context.v;
              _this5.torneosDelAno = respuesta.data;
              _this5.refrescarAnimaciones();
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error("Error al cargar los torneos:", _t);
              _this5.torneosDelAno = [];
            case 4:
              _context.p = 4;
              _this5.cargandoTorneos = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    abrirGaleria: function abrirGaleria(torneo) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var respuesta, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _this6.torneoActivo = torneo;
              _this6.galeriaAbierta = true;
              _this6.cargandoImagenes = true;
              _this6.imagenesTorneoActual = [];
              document.body.style.overflow = 'hidden';
              _context2.p = 1;
              _context2.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("imagenes_torneo/".concat(torneo.id_talento));
            case 2:
              respuesta = _context2.v;
              _this6.imagenesTorneoActual = respuesta.data.map(function (imgObj) {
                return imgObj.img;
              });
              if (_this6.imagenesTorneoActual.length === 0) {
                alert('Aún no hay fotos cargadas para este torneo.');
                _this6.cerrarGaleria();
              } else {
                _this6.fotoActualIndex = 0;
              }
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              console.error("Error al cargar las imágenes:", _t2);
              _this6.cerrarGaleria();
            case 4:
              _context2.p = 4;
              _this6.cargandoImagenes = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    },
    obtenerRutaImagen: function obtenerRutaImagen(nombreImagen) {
      if (!nombreImagen) return 'recursos/default.png';
      if (nombreImagen.startsWith('http')) return nombreImagen;
      return 'http://amfpro.mx/intranet/public/ArchivosSistema/GaleriaTalentos/' + nombreImagen;
    },
    cerrarGaleria: function cerrarGaleria() {
      this.galeriaAbierta = false;
      this.torneoActivo = null;
      document.body.style.overflow = '';
    },
    siguienteFoto: function siguienteFoto() {
      if (this.fotoActualIndex < this.imagenesTorneoActual.length - 1) {
        this.fotoActualIndex++;
      } else {
        this.fotoActualIndex = 0;
      }
    },
    anteriorFoto: function anteriorFoto() {
      if (this.fotoActualIndex > 0) {
        this.fotoActualIndex--;
      } else {
        this.fotoActualIndex = this.imagenesTorneoActual.length - 1;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionTalentosComponent.vue?vue&type=template&id=188ad3da&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionTalentosComponent.vue?vue&type=template&id=188ad3da&scoped=true ***!
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
  return _c("div", [_vm._m(0), _vm._v(" "), _c("section", {
    staticClass: "section-carousel"
  }, [_c("div", {
    staticClass: "container px-md-5"
  }, [_c("div", {
    staticClass: "shields-carousel-container"
  }, [_c("div", {
    staticClass: "shields-track"
  }, _vm._l(_vm.listaCopas, function (copa, index) {
    return _c("div", {
      key: index,
      staticClass: "shields-item"
    }, [_c("img", {
      staticClass: "shield-icon",
      attrs: {
        src: copa.img,
        alt: copa.nombre,
        loading: "lazy"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "shield-text"
    }, [_vm._v(_vm._s(copa.nombre))])]);
  }), 0)])])]), _vm._v(" "), _c("section", {
    staticClass: "bg-white text-center section-trayectoria"
  }, [_c("div", {
    staticClass: "container px-md-5"
  }, [_c("div", {
    staticClass: "row g-0 border-top border-white-50 pt-4 px-lg-3 stats-container"
  }, _vm._l(_vm.stats, function (stat, index) {
    return _c("div", {
      key: stat.label,
      staticClass: "col-6 col-md-3 stat-item",
      "class": {
        "border-end border-white-50": (index + 1) % 4 !== 0
      }
    }, [_c("div", {
      staticClass: "stat-label text-dark fw-bold"
    }, [_vm._v(_vm._s(stat.label))]), _vm._v(" "), _c("div", {
      staticClass: "stat-number-wrapper reveal-flip",
      style: {
        transitionDelay: "".concat(0.15 * index, "s")
      }
    }, [_c("div", {
      staticClass: "stat-number"
    }, [_vm._v(_vm._s(Math.floor(stat.current)))])])]);
  }), 0), _vm._v(" "), _c("p", {
    staticClass: "section-sub text-dark mt-5 mb-0 reveal-up"
  }, [_vm._v("Nuestra trayectoria en los")]), _vm._v(" "), _c("h2", {
    staticClass: "section-main-title amf-green-text fw-bold mb-3 reveal-up delay-1"
  }, [_vm._v("TORNEOS")]), _vm._v(" "), _c("p", {
    staticClass: "quote-text section-sub text-dark mt-2 mb-5 reveal-up delay-2"
  }, [_vm._v('"La disciplina convierte sueños en victorias."')])])]), _vm._v(" "), _c("section", {
    staticClass: "section-torneos"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row justify-content-center g-4 pt-3"
  }, _vm._l(_vm.playersData, function (player, index) {
    return _c("div", {
      key: player.year,
      staticClass: "col-12 col-sm-6 col-lg-3 d-flex justify-content-center reveal-up",
      "class": "delay-" + (index % 4 + 1)
    }, [_c("div", {
      staticClass: "premium-player-card text-white text-center w-100 position-relative"
    }, [_c("div", {
      staticClass: "photo-wrapper d-flex justify-content-center align-items-end position-relative z-2",
      staticStyle: {
        height: "180px",
        "margin-bottom": "-40px"
      }
    }, [_c("div", {
      staticClass: "player-glow position-absolute top-50 start-50 translate-middle"
    }), _vm._v(" "), _c("img", {
      staticClass: "player-photo position-relative z-2",
      attrs: {
        src: player.img,
        alt: "Jugador AMFPRO"
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "card-green-body bg-amf-green p-4 position-relative z-1 d-flex flex-column transition-all shadow-sm",
      staticStyle: {
        "padding-top": "3.5rem !important"
      }
    }, [_c("div", {
      staticClass: "year-label fw-bold mt-2"
    }, [_vm._v("TORNEOS")]), _vm._v(" "), _c("div", {
      staticClass: "year-pill px-3 py-1 mb-3 transition-all d-inline-block mx-auto rounded-pill",
      staticStyle: {
        "background-color": "#50c026"
      }
    }, [_vm._v(_vm._s(player.year))]), _vm._v(" "), _c("div", {
      staticClass: "player-stats text-start small w-100 mt-auto"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between py-2 border-bottom border-light border-opacity-25 stat-row transition-all"
    }, [_c("span", [_vm._v("COPAS")]), _c("strong", {
      staticClass: "stat-val transition-all"
    }, [_vm._v(_vm._s(player.copas))])]), _vm._v(" "), _c("div", {
      staticClass: "d-flex justify-content-between py-2 border-bottom border-light border-opacity-25 stat-row transition-all"
    }, [_c("span", [_vm._v("CATEGORÍAS")]), _c("strong", {
      staticClass: "stat-val transition-all"
    }, [_vm._v(_vm._s(player.cats))])]), _vm._v(" "), _c("div", {
      staticClass: "row g-0 pt-2 pb-2 border-bottom border-light border-opacity-25 stat-row transition-all"
    }, [_c("div", {
      staticClass: "col-8"
    }, [_vm._v("PARTICIPANTES")]), _vm._v(" "), _c("div", {
      staticClass: "col-4 text-end"
    }, [_c("strong", {
      staticClass: "stat-val transition-all"
    }, [_vm._v(_vm._s(player.parts))])])]), _vm._v(" "), _c("div", {
      staticClass: "row g-0 pt-2 stat-row transition-all"
    }, [_c("div", {
      staticClass: "col-8"
    }, [_vm._v("CASOS DE ÉXITO")]), _vm._v(" "), _c("div", {
      staticClass: "col-4 text-end"
    }, [_c("strong", {
      staticClass: "stat-val transition-all text-white"
    }, [_vm._v(_vm._s(player["case"]))])])])])])])]);
  }), 0)])]), _vm._v(" "), _c("section", {
    staticClass: "py-5 bg-white text-center section-galeria"
  }, [_c("div", {
    staticClass: "container px-md-5"
  }, [_c("p", {
    staticClass: "section-sub text-dark mb-0 reveal-up"
  }, [_vm._v("Nuestros torneos en")]), _vm._v(" "), _c("h2", {
    staticClass: "section-main-title amf-green-text fw-bold mb-5 reveal-up delay-1"
  }, [_vm._v("GALERÍA")]), _vm._v(" "), _c("div", {
    staticClass: "row align-items-center reveal-up delay-2"
  }, [_c("div", {
    staticClass: "col-12 col-lg-2 text-lg-start mb-4 mb-lg-0 d-flex flex-column align-items-center align-items-lg-start"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "year-selector-wrapper position-relative w-100"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.anioSeleccionado,
      expression: "anioSeleccionado"
    }],
    staticClass: "custom-select-badge w-100",
    attrs: {
      disabled: _vm.cargandoTorneos
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.anioSeleccionado = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.aniosDisponibles, function (year) {
    return _c("option", {
      key: year,
      domProps: {
        value: year
      }
    }, [_vm._v(_vm._s(year))]);
  }), 0), _vm._v(" "), _c("i", {
    staticClass: "material-icons position-absolute icon-calendar"
  }, [_vm._v("calendar_today")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-10"
  }, [_vm.cargandoTorneos ? _c("div", {
    staticClass: "text-center py-5"
  }, [_c("div", {
    staticClass: "spinner-border text-success",
    attrs: {
      role: "status"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2 text-dark"
  }, [_vm._v("Buscando torneos...")])]) : _c("div", {
    staticClass: "galeria-scroll-container pb-3 px-2 mt-2"
  }, [_vm._l(_vm.torneosDelAno, function (torneo) {
    return _c("div", {
      key: torneo.id_talento,
      staticClass: "galeria-item"
    }, [_c("div", {
      staticClass: "ultra-gallery-card shadow-sm border border-light position-relative",
      on: {
        click: function click($event) {
          return _vm.abrirGaleria(torneo);
        }
      }
    }, [_c("div", {
      staticClass: "img-zoom-wrapper position-absolute top-0 start-0 w-100 h-100"
    }, [_c("img", {
      staticClass: "w-100 h-100 gallery-img",
      staticStyle: {
        "object-fit": "cover"
      },
      attrs: {
        src: _vm.obtenerRutaImagen(torneo.hidder),
        alt: torneo.copa,
        loading: "lazy"
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "gallery-glass-overlay position-absolute bottom-0 start-0 w-100 d-flex flex-column align-items-center justify-content-end p-3"
    }, [_vm._m(2, true), _vm._v(" "), _c("div", {
      staticClass: "torneo-name fw-bold text-white mb-1 truncate-text text-shadow"
    }, [_vm._v(_vm._s(torneo.copa))]), _vm._v(" "), _c("div", {
      staticClass: "torneo-year text-white-50 small",
      staticStyle: {
        "font-size": "0.75rem"
      }
    }, [_vm._v(_vm._s(torneo.year) + " - Ver galería")])])])]);
  }), _vm._v(" "), _vm.torneosDelAno.length === 0 ? _c("div", {
    staticClass: "col-12 text-center py-4 w-100"
  }, [_c("i", {
    staticClass: "material-icons text-dark",
    staticStyle: {
      "font-size": "3rem"
    }
  }, [_vm._v("event_busy")]), _vm._v(" "), _c("p", {
    staticClass: "text-dark mt-2"
  }, [_vm._v("Aún no hay torneos cargados para el año " + _vm._s(_vm.anioSeleccionado) + ".")])]) : _vm._e()], 2)])]), _vm._v(" "), _c("br")])]), _vm._v(" "), _vm.galeriaAbierta && _vm.torneoActivo ? _c("div", {
    staticClass: "lightbox-overlay",
    on: {
      click: function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.cerrarGaleria.apply(null, arguments);
      }
    }
  }, [_c("button", {
    staticClass: "btn-close-lightbox",
    on: {
      click: _vm.cerrarGaleria
    }
  }, [_vm._v("×")]), _vm._v(" "), _vm.cargandoImagenes ? _c("div", {
    staticClass: "text-center text-white"
  }, [_c("div", {
    staticClass: "spinner-border",
    staticStyle: {
      width: "3rem",
      height: "3rem"
    },
    attrs: {
      role: "status"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-3"
  }, [_vm._v("Cargando fotos...")])]) : _c("div", {
    staticClass: "lightbox-content"
  }, [_vm.imagenesTorneoActual.length > 1 ? _c("button", {
    staticClass: "btn-nav left shadow-lg",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.anteriorFoto.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("chevron_left")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "img-container"
  }, [_c("img", {
    staticClass: "lightbox-img",
    attrs: {
      src: _vm.obtenerRutaImagen(_vm.imagenesTorneoActual[_vm.fotoActualIndex]),
      alt: "Foto Galería"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "lightbox-caption"
  }, [_c("h5", {
    staticClass: "mb-0 fw-bold"
  }, [_vm._v(_vm._s(_vm.torneoActivo.copa))]), _vm._v(" "), _c("span", {
    staticClass: "small"
  }, [_vm._v(_vm._s(_vm.fotoActualIndex + 1) + " de " + _vm._s(_vm.imagenesTorneoActual.length))])])]), _vm._v(" "), _vm.imagenesTorneoActual.length > 1 ? _c("button", {
    staticClass: "btn-nav right shadow-lg",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.siguienteFoto.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("chevron_right")])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c("section", {
    staticClass: "section-success py-5 text-white text-center position-relative"
  }, [_c("div", {
    staticClass: "container px-md-5"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "row g-3 justify-content-center mb-4 reveal-up delay-1"
  }, _vm._l(_vm.casosExito, function (caso, index) {
    return _c("div", {
      key: caso.id,
      staticClass: "col-12 col-md-6 col-lg-4",
      "class": "delay-" + (index % 3 + 1)
    }, [_c("div", {
      staticClass: "premium-success-card-compact bg-white rounded-3 shadow-sm p-3 position-relative overflow-hidden h-100 d-flex align-items-center text-start"
    }, [_c("i", {
      staticClass: "material-icons position-absolute watermark-icon z-0"
    }, [_vm._v("workspace_premium")]), _vm._v(" "), _vm._m(4, true), _vm._v(" "), _c("div", {
      staticClass: "position-relative z-1"
    }, [_c("h6", {
      staticClass: "fw-black text-dark mb-0",
      staticStyle: {
        "letter-spacing": "-0.5px",
        "font-size": "1.05rem"
      }
    }, [_vm._v(_vm._s(caso.nombre))]), _vm._v(" "), _c("span", {
      staticClass: "text-secondary small d-block lh-1 mt-1",
      staticStyle: {
        "font-size": "0.75rem"
      }
    }, [_vm._v("Reclutado por")]), _vm._v(" "), _c("span", {
      staticClass: "amf-green-text fw-bold",
      staticStyle: {
        "font-size": "0.85rem"
      }
    }, [_vm._v(_vm._s(caso.club))])])])]);
  }), 0), _vm._v(" "), _vm._m(5)]), _vm._v(" "), _vm._m(6)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "section-hero text-white text-center pb-5",
    attrs: {
      id: "talentos"
    }
  }, [_c("div", {
    staticClass: "container py-2 position-relative"
  }, [_c("div", {
    staticClass: "small mb-0 reveal-item"
  }, [_vm._v("AMFPRO")]), _vm._v(" "), _c("h1", {
    staticClass: "hero-title fw-bolder mb-0 reveal-item delay-1"
  }, [_vm._v("TALENTOS")]), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-center mb-5"
  }, [_c("div", {
    staticClass: "col-12 col-lg-9",
    staticStyle: {
      width: "54% !important"
    }
  }, [_c("p", {
    staticClass: "hero-description px-3 reveal-item delay-2"
  }, [_vm._v("\n             Talentos AMFpro es una iniciativa dedicada a impulsar el crecimiento de jóvenes futbolistas. \n             Su propósito es brindar, de manera gratuita, las condiciones necesarias para entrenar y \n             prepararse junto a exjugadores profesionales, fortaleciendo así su formación deportiva; \n             en nuestras tres sedes (CDMX, Guadalajara y Léon). Además, ofrece la oportunidad de \n             competir en torneos de gran prestigio a nivel nacional.\n             ")])])]), _vm._v(" "), _c("div", {
    staticClass: "goal-split-container reveal-item delay-3"
  }, [_c("img", {
    staticClass: "goal-img-split",
    staticStyle: {
      width: "190%"
    },
    attrs: {
      src: "recursos/areaporteria3.png",
      alt: "Portería Divisora",
      loading: "lazy"
    }
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "small text-dark fw-bold mb-2 d-flex align-items-center"
  }, [_c("i", {
    staticClass: "material-icons me-1",
    staticStyle: {
      "font-size": "1.1rem"
    }
  }, [_vm._v("filter_alt")]), _vm._v("\n               Año de torneos\n             ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "gallery-icon-wrapper mb-2 rounded-circle d-flex align-items-center justify-content-center"
  }, [_c("i", {
    staticClass: "material-icons text-white"
  }, [_vm._v("zoom_in")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row justify-content-center mb-4 reveal-up"
  }, [_c("div", {
    staticClass: "col-12 col-md-8 text-center"
  }, [_c("p", {
    staticClass: "text-uppercase tracking-widest text-white-50 fw-bold mb-2 small"
  }, [_vm._v("NUESTRO ORGULLO")]), _vm._v(" "), _c("h2", {
    staticClass: "display-4 fw-black text-white mb-3"
  }, [_vm._v("CASOS DE ÉXITO")]), _vm._v(" "), _c("p", {
    staticClass: "text-white-50 fs-6 mx-auto mb-0",
    staticStyle: {
      "max-width": "600px"
    }
  }, [_vm._v("\n               Conoce a los jóvenes talentos que, gracias a su esfuerzo y disciplina en nuestro programa, lograron dar el salto oficial al fútbol profesional.\n             ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "icon-success-wrapper-compact me-3 rounded-circle d-flex align-items-center justify-content-center position-relative z-1 flex-shrink-0"
  }, [_c("i", {
    staticClass: "material-icons text-white"
  }, [_vm._v("star")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row justify-content-center mt-4 reveal-up delay-2",
    staticStyle: {
      "padding-bottom": "3rem"
    }
  }, [_c("div", {
    staticClass: "col-11 col-md-10 col-lg-8"
  }, [_c("p", {
    staticClass: "text-center text-white-50 lh-lg mb-0"
  }, [_vm._v("\n               Para unirte a este gran proyecto, mantente atento a nuestras redes sociales, donde publicamos las convocatorias para los próximos escauteos y la selección de nuevos integrantes de Talentos AMFPRO.\n               ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "split-icon-container"
  }, [_c("img", {
    staticStyle: {
      width: "280px"
    },
    attrs: {
      src: "recursos/documento-reloj.png",
      alt: "Documento y Reloj"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionTalentosComponent.vue?vue&type=style&index=0&id=188ad3da&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionTalentosComponent.vue?vue&type=style&index=0&id=188ad3da&lang=scss&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.amf-landing-page[data-v-188ad3da] {\n  font-family: \"Roboto\", sans-serif !important;\n}\n*[data-v-188ad3da] {\n  font-family: \"Roboto\", sans-serif !important;\n}\n.material-icons[data-v-188ad3da] {\n  font-family: \"Material Icons\" !important;\n}\n.bg-amf-green[data-v-188ad3da] {\n  background-color: #3e9452;\n}\n.fw-black[data-v-188ad3da] {\n  font-weight: 900 !important;\n}\n.amf-green-text[data-v-188ad3da] {\n  color: #50c026 !important;\n}\n.social-nav[data-v-188ad3da] {\n  width: 30px;\n  height: 30px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.split-icon-container[data-v-188ad3da] {\n  position: absolute;\n  left: 51%;\n  transform: translateX(-50%);\n  z-index: 10;\n  bottom: -160px;\n}\n.amf-green-text[data-v-188ad3da] {\n  color: #50c026 !important;\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  letter-spacing: -1px;\n}\n.amf-green-text-2[data-v-188ad3da] {\n  color: #50c026 !important;\n}\n.section-sub[data-v-188ad3da] {\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.reveal-up[data-v-188ad3da] {\n  opacity: 0;\n  transform: translateY(40px);\n  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.is-visible.reveal-up[data-v-188ad3da], .is-visible .reveal-up[data-v-188ad3da] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.reveal-flip[data-v-188ad3da] {\n  opacity: 0;\n  transform: perspective(600px) rotateX(-90deg);\n  transform-origin: center top;\n  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.is-visible.reveal-flip[data-v-188ad3da], .is-visible .reveal-flip[data-v-188ad3da] {\n  opacity: 1;\n  transform: perspective(600px) rotateX(0deg);\n}\n.delay-1[data-v-188ad3da] {\n  transition-delay: 0.15s;\n}\n.delay-2[data-v-188ad3da] {\n  transition-delay: 0.3s;\n}\n.delay-3[data-v-188ad3da] {\n  transition-delay: 0.45s;\n}\n.section-hero[data-v-188ad3da] {\n  background: #3E9452;\n  position: relative;\n  z-index: 1;\n  height: 450px;\n}\n.section-hero .hero-title[data-v-188ad3da] {\n  font-size: 5rem;\n  letter-spacing: -2px;\n}\n@media (min-width: 768px) {\n.section-hero .hero-title[data-v-188ad3da] {\n    font-size: 5rem;\n    letter-spacing: -2px;\n}\n.section-hero .hero-description[data-v-188ad3da] {\n    font-size: 0.8rem;\n    text-align: justify;\n    padding-top: 25px;\n}\n}\n.section-hero .hero-description[data-v-188ad3da] {\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.9);\n  text-align: justify;\n}\n.section-hero .goal-split-container[data-v-188ad3da] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10;\n  top: -64px;\n}\n.section-hero .goal-img-split[data-v-188ad3da] {\n  filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2));\n}\n@media (max-width: 1400px) {\n.section-hero .goal-img-split[data-v-188ad3da] {\n    filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2));\n}\n.section-hero .goal-split-container[data-v-188ad3da] {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 10;\n    top: -64px;\n}\n}\n@media (max-width: 1024px) {\n.section-hero .goal-img-split[data-v-188ad3da] {\n    filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2));\n    width: 1050px;\n    height: 1000px;\n}\n.section-hero .goal-split-container[data-v-188ad3da] {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 10;\n    top: -64px;\n}\n}\n@media (max-width: 768px) {\n.section-hero .goal-img-split[data-v-188ad3da] {\n    max-width: 600px;\n    height: 900px;\n}\n.section-hero .goal-split-container[data-v-188ad3da] {\n    top: -30px;\n}\n.section-hero .hero-title[data-v-188ad3da] {\n    font-size: 4rem;\n    letter-spacing: -2px;\n}\n.section-hero .hero-description[data-v-188ad3da] {\n    margin-top: 36px;\n    font-size: 0.6rem;\n    font-weight: 400;\n    color: rgba(255, 255, 255, 0.9);\n    text-align: justify;\n}\n}\n.section-hero .reveal-item[data-v-188ad3da] {\n  opacity: 0;\n  transform: translateY(50px);\n  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.section-hero .goal-split-container.reveal-item[data-v-188ad3da] {\n  transform: translateX(-50%) translateY(80px) scale(0.95);\n}\n.section-hero.hero-visible .reveal-item[data-v-188ad3da] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.section-hero.hero-visible .goal-split-container.reveal-item[data-v-188ad3da] {\n  transform: translateX(-94%) translateY(0) scale(1);\n}\n.section-carousel .shields-carousel-container[data-v-188ad3da] {\n  width: 100%;\n  overflow: hidden;\n  z-index: 0;\n}\n.section-carousel .shields-track[data-v-188ad3da] {\n  display: flex;\n  width: -moz-max-content;\n  width: max-content;\n  animation: scrollLeft-188ad3da 40s linear infinite;\n}\n@keyframes scrollLeft-188ad3da {\nfrom {\n    transform: translateX(0);\n}\nto {\n    transform: translateX(-50%);\n}\n}\n.section-carousel .shields-item[data-v-188ad3da] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin: 0 40px;\n}\n.section-carousel .shield-icon[data-v-188ad3da] {\n  height: 50px;\n  width: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.section-carousel .shield-text[data-v-188ad3da] {\n  font-size: 1.2rem;\n  white-space: nowrap;\n}\n.section-trayectoria[data-v-188ad3da] {\n  position: relative;\n}\n.section-trayectoria .stats-container[data-v-188ad3da] {\n  margin-top: clamp(100px, 20vh, 246px);\n}\n.section-trayectoria .stat-item[data-v-188ad3da] {\n  padding: 1rem;\n  text-align: center;\n}\n@media (max-width: 767px) {\n.section-trayectoria .stat-item[data-v-188ad3da] {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}\n.section-trayectoria .stat-item[data-v-188ad3da]:nth-child(2n) {\n    border-right: none !important;\n}\n.section-trayectoria .stat-item[data-v-188ad3da]:nth-last-child(-n+2) {\n    border-bottom: none;\n}\n}\n.section-trayectoria .stat-label[data-v-188ad3da] {\n  font-size: clamp(14px, 1.5vw, 24px);\n  line-height: 1.2;\n  margin-bottom: 5px;\n}\n.section-trayectoria .stat-number[data-v-188ad3da] {\n  font-size: clamp(40px, 5vw, 80px);\n  color: #50c026;\n  line-height: 1;\n  display: inline-block;\n}\n.year-selector-wrapper[data-v-188ad3da] {\n  display: inline-block;\n  position: relative;\n}\n.year-selector-wrapper .custom-select-badge[data-v-188ad3da] {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 30px;\n  padding: 10px 45px 10px 20px;\n  font-weight: bold;\n  font-size: 1rem;\n  color: #333;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n}\n.year-selector-wrapper .custom-select-badge[data-v-188ad3da]:hover, .year-selector-wrapper .custom-select-badge[data-v-188ad3da]:focus {\n  outline: none;\n  border-color: #50c026;\n  box-shadow: 0 4px 10px rgba(80, 192, 38, 0.15);\n}\n.year-selector-wrapper .icon-calendar[data-v-188ad3da] {\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: #50c026;\n  pointer-events: none;\n}\n.galeria-scroll-container[data-v-188ad3da] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  gap: 20px;\n  padding-bottom: 20px;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n}\n.galeria-scroll-container[data-v-188ad3da]::-webkit-scrollbar {\n  height: 6px;\n}\n.galeria-scroll-container[data-v-188ad3da]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 10px;\n}\n.galeria-scroll-container[data-v-188ad3da]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 10px;\n}\n.galeria-scroll-container[data-v-188ad3da]:hover::-webkit-scrollbar-thumb {\n  background: #50c026;\n}\n.galeria-scroll-container .galeria-item[data-v-188ad3da] {\n  flex: 0 0 auto;\n  width: calc(25% - 15px);\n}\n@media (max-width: 991px) {\n.galeria-scroll-container .galeria-item[data-v-188ad3da] {\n    width: calc(33.333% - 14px);\n}\n}\n@media (max-width: 768px) {\n.galeria-scroll-container .galeria-item[data-v-188ad3da] {\n    width: calc(50% - 10px);\n}\n}\n@media (max-width: 480px) {\n.galeria-scroll-container .galeria-item[data-v-188ad3da] {\n    width: 70%;\n}\n}\n.lightbox-overlay[data-v-188ad3da] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.9);\n  backdrop-filter: blur(5px);\n  z-index: 10000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.btn-close-lightbox[data-v-188ad3da] {\n  position: absolute;\n  top: 20px;\n  right: 30px;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 3rem;\n  cursor: pointer;\n  line-height: 1;\n  z-index: 10001;\n  transition: transform 0.2s ease;\n}\n.btn-close-lightbox[data-v-188ad3da]:hover {\n  transform: scale(1.1);\n  color: #50c026;\n}\n.lightbox-content[data-v-188ad3da] {\n  position: relative;\n  width: 90vw;\n  max-width: 1000px;\n  height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lightbox-content .btn-nav[data-v-188ad3da] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: white;\n  color: #50c026;\n  border: none;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  z-index: 10;\n}\n.lightbox-content .btn-nav i[data-v-188ad3da] {\n  font-size: 30px;\n}\n.lightbox-content .btn-nav[data-v-188ad3da]:hover {\n  background: #50c026;\n  color: white;\n  transform: translateY(-50%) scale(1.1);\n}\n.lightbox-content .btn-nav.left[data-v-188ad3da] {\n  left: -25px;\n}\n.lightbox-content .btn-nav.right[data-v-188ad3da] {\n  right: -25px;\n}\n.lightbox-content .img-container[data-v-188ad3da] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.lightbox-content .lightbox-img[data-v-188ad3da] {\n  max-width: 100%;\n  max-height: 90%;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n  -o-object-fit: contain;\n     object-fit: contain;\n  animation: fadeIn-188ad3da 0.4s ease;\n}\n.lightbox-content .lightbox-caption[data-v-188ad3da] {\n  margin-top: 15px;\n  color: white;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n@keyframes fadeIn-188ad3da {\nfrom {\n    opacity: 0;\n    transform: scale(0.98);\n}\nto {\n    opacity: 1;\n    transform: scale(1);\n}\n}\n@media (max-width: 768px) {\n.lightbox-content .btn-nav.left[data-v-188ad3da] {\n    left: 10px;\n}\n.lightbox-content .btn-nav.right[data-v-188ad3da] {\n    right: 10px;\n}\n}\n/* =========================================================\n   ESTILOS ULTRA PRO\n   ========================================================= */\n/* 4. TORNEOS: TARJETAS DE JUGADORES */\n.premium-player-card[data-v-188ad3da] {\n  max-width: 320px;\n  margin: 0 auto;\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.premium-player-card .transition-all[data-v-188ad3da] {\n  transition: all 0.4s ease;\n}\n.premium-player-card .photo-wrapper .player-glow[data-v-188ad3da] {\n  width: 150px;\n  height: 150px;\n  background: radial-gradient(circle, rgba(80, 192, 38, 0.5) 0%, transparent 70%);\n  opacity: 0;\n  transition: opacity 0.6s ease, transform 0.6s ease;\n  z-index: 1;\n}\n.premium-player-card .photo-wrapper .player-photo[data-v-188ad3da] {\n  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.5s ease;\n  max-height: 220px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.premium-player-card .card-green-body[data-v-188ad3da] {\n  border-radius: 2.2rem;\n  transition: all 0.4s ease;\n}\n.premium-player-card[data-v-188ad3da]:hover {\n  transform: translateY(-15px);\n}\n.premium-player-card:hover .card-green-body[data-v-188ad3da] {\n  box-shadow: 0 25px 50px rgba(80, 192, 38, 0.3) !important;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3), 0 25px 50px rgba(80, 192, 38, 0.2) !important;\n}\n.premium-player-card:hover .player-glow[data-v-188ad3da] {\n  opacity: 1;\n  transform: translate(-50%, -50%) scale(1.6);\n}\n.premium-player-card:hover .player-photo[data-v-188ad3da] {\n  transform: scale(1.1) translateY(-5px);\n  filter: drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3)) !important;\n}\n.premium-player-card:hover .year-pill[data-v-188ad3da] {\n  background-color: #fff !important;\n  color: #3e9452 !important;\n  transform: scale(1.05);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.premium-player-card:hover .stat-row[data-v-188ad3da] {\n  border-color: rgba(255, 255, 255, 0.4) !important;\n  transform: translateX(4px);\n}\n.premium-player-card:hover .stat-val[data-v-188ad3da] {\n  transform: scale(1.1);\n  display: inline-block;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n/* 5. GALERÍA */\n.ultra-gallery-card[data-v-188ad3da] {\n  cursor: pointer;\n  border-radius: 25px;\n  overflow: hidden;\n  aspect-ratio: 1/1;\n  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.ultra-gallery-card .img-zoom-wrapper .gallery-img[data-v-188ad3da] {\n  transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.ultra-gallery-card .gallery-glass-overlay[data-v-188ad3da] {\n  background: linear-gradient(to top, rgba(17, 42, 24, 0.9) 0%, transparent 100%);\n  opacity: 0.8;\n  transition: all 0.5s ease;\n  transform: translateY(30px);\n}\n.ultra-gallery-card .gallery-glass-overlay .gallery-icon-wrapper[data-v-188ad3da] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(5px);\n  opacity: 0;\n  transform: scale(0.5);\n  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.ultra-gallery-card .gallery-glass-overlay .text-shadow[data-v-188ad3da] {\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\n.ultra-gallery-card .gallery-glass-overlay .truncate-text[data-v-188ad3da] {\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.ultra-gallery-card .gallery-glass-overlay div[data-v-188ad3da] {\n  transition: transform 0.4s ease;\n}\n.ultra-gallery-card[data-v-188ad3da]:hover {\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;\n  border-color: rgba(80, 192, 38, 0.4) !important;\n  transform: translateY(-8px);\n}\n.ultra-gallery-card:hover .img-zoom-wrapper .gallery-img[data-v-188ad3da] {\n  transform: scale(1.15);\n}\n.ultra-gallery-card:hover .gallery-glass-overlay[data-v-188ad3da] {\n  opacity: 1;\n  transform: translateY(0);\n  background: linear-gradient(to top, rgba(62, 148, 82, 0.95) 0%, rgba(62, 148, 82, 0.4) 60%, transparent 100%);\n}\n.ultra-gallery-card:hover .gallery-glass-overlay .gallery-icon-wrapper[data-v-188ad3da] {\n  opacity: 1;\n  transform: scale(1) translateY(-5px);\n  background: #50c026;\n}\n.ultra-gallery-card:hover .gallery-glass-overlay div[data-v-188ad3da] {\n  transform: translateY(-3px);\n}\n\n/* 6. REDISEÑO COMPACTO DE TARJETAS \"CASOS DE ÉXITO\" */\n.section-success[data-v-188ad3da] {\n  background-color: #3e9452;\n}\n.premium-success-card-compact[data-v-188ad3da] {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  border-left: 4px solid transparent;\n  cursor: default;\n}\n.premium-success-card-compact .watermark-icon[data-v-188ad3da] {\n  font-size: 5rem;\n  color: rgba(0, 0, 0, 0.02);\n  top: -10px;\n  right: -10px;\n  transform: rotate(-15deg);\n  transition: all 0.4s ease;\n}\n.premium-success-card-compact .icon-success-wrapper-compact[data-v-188ad3da] {\n  width: 45px;\n  height: 45px;\n  background: linear-gradient(135deg, #50c026 0%, #3E9452 100%);\n  box-shadow: 0 5px 10px rgba(80, 192, 38, 0.2);\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.premium-success-card-compact .icon-success-wrapper-compact i[data-v-188ad3da] {\n  font-size: 1.2rem;\n}\n.premium-success-card-compact[data-v-188ad3da]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15) !important;\n  border-left: 4px solid #50c026;\n}\n.premium-success-card-compact:hover .watermark-icon[data-v-188ad3da] {\n  color: rgba(80, 192, 38, 0.05);\n  transform: rotate(0deg) scale(1.1);\n}\n.premium-success-card-compact:hover .icon-success-wrapper-compact[data-v-188ad3da] {\n  transform: scale(1.1);\n}\n.tracking-widest[data-v-188ad3da] {\n  letter-spacing: 4px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionTalentosComponent.vue?vue&type=style&index=0&id=188ad3da&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionTalentosComponent.vue?vue&type=style&index=0&id=188ad3da&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionTalentosComponent_vue_vue_type_style_index_0_id_188ad3da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionTalentosComponent.vue?vue&type=style&index=0&id=188ad3da&lang=scss&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionTalentosComponent.vue?vue&type=style&index=0&id=188ad3da&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionTalentosComponent_vue_vue_type_style_index_0_id_188ad3da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionTalentosComponent_vue_vue_type_style_index_0_id_188ad3da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/SectionTalentosComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/SectionTalentosComponent.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SectionTalentosComponent_vue_vue_type_template_id_188ad3da_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionTalentosComponent.vue?vue&type=template&id=188ad3da&scoped=true */ "./resources/js/components/SectionTalentosComponent.vue?vue&type=template&id=188ad3da&scoped=true");
/* harmony import */ var _SectionTalentosComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionTalentosComponent.vue?vue&type=script&lang=js */ "./resources/js/components/SectionTalentosComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _SectionTalentosComponent_vue_vue_type_style_index_0_id_188ad3da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionTalentosComponent.vue?vue&type=style&index=0&id=188ad3da&lang=scss&scoped=true */ "./resources/js/components/SectionTalentosComponent.vue?vue&type=style&index=0&id=188ad3da&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SectionTalentosComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectionTalentosComponent_vue_vue_type_template_id_188ad3da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SectionTalentosComponent_vue_vue_type_template_id_188ad3da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "188ad3da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SectionTalentosComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SectionTalentosComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/SectionTalentosComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionTalentosComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionTalentosComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionTalentosComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionTalentosComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SectionTalentosComponent.vue?vue&type=template&id=188ad3da&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/SectionTalentosComponent.vue?vue&type=template&id=188ad3da&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionTalentosComponent_vue_vue_type_template_id_188ad3da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionTalentosComponent_vue_vue_type_template_id_188ad3da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionTalentosComponent_vue_vue_type_template_id_188ad3da_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionTalentosComponent.vue?vue&type=template&id=188ad3da&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionTalentosComponent.vue?vue&type=template&id=188ad3da&scoped=true");


/***/ }),

/***/ "./resources/js/components/SectionTalentosComponent.vue?vue&type=style&index=0&id=188ad3da&lang=scss&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/SectionTalentosComponent.vue?vue&type=style&index=0&id=188ad3da&lang=scss&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionTalentosComponent_vue_vue_type_style_index_0_id_188ad3da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionTalentosComponent.vue?vue&type=style&index=0&id=188ad3da&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionTalentosComponent.vue?vue&type=style&index=0&id=188ad3da&lang=scss&scoped=true");


/***/ })

}]);