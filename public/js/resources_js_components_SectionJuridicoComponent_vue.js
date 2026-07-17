"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SectionJuridicoComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionJuridicoComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionJuridicoComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      observer: null,
      isModalFemenilOpen: false,
      comisionMembers: [{
        nombre: 'Dirce Delgado',
        club: 'Atlas-2025',
        puesto: 'Presidente',
        img: 'recursos/dirce.png',
        imgError: false
      }, {
        nombre: 'Ana Gabriela Paz',
        club: 'Rayados de Monterrey-2025',
        puesto: 'Secretario',
        img: 'recursos/ana.png',
        imgError: false
      }, {
        nombre: 'Mónica Ocampo',
        club: 'Pachuca-2025',
        puesto: 'Vocal',
        img: 'recursos/monica.png',
        imgError: false
      }, {
        nombre: 'Daniela Gómez',
        club: 'Ex-Futbolista',
        puesto: 'Enlace del Fútbol Femenil',
        img: 'recursos/daniela.png',
        imgError: false
      }],
      categories: [{
        title: 'Carácter económico',
        icon: 'account_balance_wallet',
        points: [{
          id: 1,
          text: 'Adeudo de salario',
          detalle: 'Si tu club te debe salario ya sea durante o al término del torneo (individual o grupal).',
          show: false
        }, {
          id: 2,
          text: 'Despido injustificado',
          detalle: 'Si tu club te informa que no entras en planes y tienes contrato vigente.',
          show: false
        }, {
          id: 3,
          text: 'Falta de pago de bonos o premios',
          detalle: 'Si en tu contrato en el algún documento se reconoció el pago de bonos o premios que el club no te ha realizado.',
          show: false
        }, {
          id: 4,
          text: 'Incumplimiento de convenio de pago',
          detalle: 'Si firmaste con tu club un acuerdo de pagos registrado ante la FMF y no lo ha cumplido.',
          show: false
        }, {
          id: 5,
          text: 'Pago de porcentaje por transferencia',
          detalle: 'Derivado de los acuerdos entre la FMF y la AMFpro, cuando te transfieren de forma definitiva a un club, tienes derecho a recibir un 10% del total de la transferencia, al ser un derecho irrenunciable y no negociable.',
          show: false
        }, {
          id: 6,
          text: 'Cobro ilegal de cuotas por jugar',
          detalle: 'Si el club pretende cobrarte por el registro, cuotas mensuales, viajes, uniformes, alimentos y/o documentos por jugar los partidos.',
          show: false
        }]
      }, {
        title: 'Gestión de documentos',
        icon: 'folder_shared',
        points: [{
          id: 1,
          text: 'Información para registros',
          detalle: 'Infórmate de todo lo que necesitas para no tener problemas al momento de firmar tu contrato y registrarte.',
          show: false
        }, {
          id: 2,
          text: 'Solicitud de historial deportivo / estatus',
          detalle: 'Documentos que expide la FMF y que pueden servirte como currículum deportivo.',
          show: false
        }, {
          id: 3,
          text: 'Retención de documentos y expedientes',
          detalle: 'Si al terminar tu contrato el club no te entrega tu finiquito o te pide dinero por darte tus documentos.',
          show: false
        }, {
          id: 4,
          text: 'Asesoría sobre los derechos por embarazo y maternidad',
          detalle: 'Si eres Jugadora de la Liga MX Femenil y quieres recibir información sobre estos derechos contemplados en el Reglamento de Transferencias y Contrataciones de la FMF.',
          show: false
        }, {
          id: 5,
          text: 'Pase internacional (CTI)',
          detalle: 'Para poder jugar en otro país es indispensable contar con el finiquito y el TPO (que ningún tercero ajeno al fútbol tiene derechos económicos sobre ti), del último club en que jugaste; esto, para que el nuevo club pueda pedir tu pase internacional a través del TMS (Sistema de Transferencias Internacional) de la FIFA.',
          show: false
        }, {
          id: 6,
          text: 'Solicitud de copia de contrato',
          detalle: 'Pídele a tu club y si no te la entregan, nosotros podemos apoyarte a solicitarla a la FMF.',
          show: false
        }]
      }, {
        title: 'Incidencias de integridad del jugador',
        icon: 'health_and_safety',
        points: [{
          id: 1,
          text: 'Rescisión anticipada de contrato',
          detalle: 'En caso de incumplimiento o adeudo de las obligaciones señaladas en el contrato.',
          show: false
        }, {
          id: 2,
          text: 'Falta de atención médica / lesiones',
          detalle: 'Si sufriste una lesión en partido o entrenamiento, tienes derecho a que tu club te de la atención médica necesaria hasta tu total recuperación.',
          show: false
        }, {
          id: 3,
          text: 'Separación de los entrenamientos',
          detalle: 'Si te enviaron a entrenar solo o con una categoría inferior dentro del club, como medida de presión o castigo.',
          show: false
        }]
      }],
      docsData: [{
        title: 'Reglamento de la comisión de conciliación y resolución de controversias',
        icon_grey: 'recursos/documento-verde.png',
        url_link: 'https://fmf.mx/docs/reglamentos/441.pdf',
        isModal: false
      }, {
        title: 'Reglamento de transferencias y contrataciones',
        icon_grey: 'recursos/dobledocumento-verde.png',
        url_link: 'https://fmf.mx/docs/reglamentos/472.pdf',
        isModal: false
      }, {
        title: 'Código de Ética',
        icon_grey: 'recursos/ball-verde.png',
        url_link: 'https://fmf.mx/docs/reglamentos/475.pdf',
        isModal: false
      }, {
        title: 'Derechos y Regulaciones del Fútbol Femenil',
        isModal: true
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    this.observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, options);
    this.$nextTick(function () {
      document.querySelectorAll('.reveal-up').forEach(function (el) {
        _this.observer.observe(el);
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.observer) this.observer.disconnect();
  },
  methods: {
    openModalFemenil: function openModalFemenil() {
      this.isModalFemenilOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeModalFemenil: function closeModalFemenil() {
      this.isModalFemenilOpen = false;
      document.body.style.overflow = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionJuridicoComponent.vue?vue&type=template&id=45f78960&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionJuridicoComponent.vue?vue&type=template&id=45f78960&scoped=true ***!
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
  return _c("div", {
    staticClass: "font-roboto"
  }, [_c("section", {
    staticClass: "py-6 bg-light text-center section-derechos relative-container",
    attrs: {
      id: "juridico"
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "container px-md-5 mt-4"
  }, [_vm._m(1), _vm._v(" "), _vm._l(_vm.categories, function (category, cIndex) {
    return _c("div", {
      key: category.title,
      staticClass: "mb-6 reveal-up",
      "class": "delay-" + (cIndex % 3 + 1)
    }, [_c("div", {
      staticClass: "d-flex align-items-center justify-content-center justify-content-lg-start mb-4"
    }, [_c("div", {
      staticClass: "category-icon-wrapper shadow-sm rounded-circle d-flex align-items-center justify-content-center bg-white me-3",
      staticStyle: {
        width: "50px",
        height: "50px"
      }
    }, [_c("i", {
      staticClass: "material-icons amf-green-text fs-4"
    }, [_vm._v(_vm._s(category.icon))])]), _vm._v(" "), _c("h4", {
      staticClass: "fw-bold amf-green-text mb-0 std-title-card"
    }, [_vm._v(_vm._s(category.title))])]), _vm._v(" "), _c("div", {
      staticClass: "row g-4 text-start"
    }, _vm._l(category.points, function (point, pIndex) {
      return _c("div", {
        key: point.id,
        staticClass: "col-12 col-md-6 col-lg-4"
      }, [_c("div", {
        staticClass: "premium-legal-card bg-white p-4 rounded-4 shadow-sm border border-light h-100 position-relative overflow-hidden",
        on: {
          mouseenter: function mouseenter($event) {
            point.show = true;
          },
          mouseleave: function mouseleave($event) {
            point.show = false;
          }
        }
      }, [_c("div", {
        staticClass: "card-top-line"
      }), _vm._v(" "), _c("div", {
        staticClass: "d-flex justify-content-between align-items-start mb-2"
      }, [_c("h6", {
        staticClass: "fw-bold text-dark mb-0 transition-color pe-3 mt-2",
        "class": {
          "amf-green-text": point.show
        },
        staticStyle: {
          "line-height": "1.4"
        }
      }, [_vm._v("\n                  " + _vm._s(point.text) + "\n                ")]), _vm._v(" "), _c("span", {
        staticClass: "legal-number amf-green-text fw-black transition-number",
        "class": point.show ? "opacity-100" : "opacity-25",
        staticStyle: {
          "font-size": "3rem",
          "line-height": "1"
        }
      }, [_vm._v("\n                  0" + _vm._s(point.id) + "\n                ")])]), _vm._v(" "), _c("div", {
        staticClass: "legal-detail-wrapper",
        "class": {
          "is-expanded": point.show
        }
      }, [_c("div", {
        staticClass: "border-top pt-3 mt-2 opacity-25"
      }), _vm._v(" "), _c("p", {
        staticClass: "text-secondary small mb-0 lh-lg"
      }, [_vm._v(_vm._s(point.detalle))])])])]);
    }), 0)]);
  }), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "row g-4 justify-content-center reveal-up delay-2"
  }, _vm._l(_vm.docsData, function (doc) {
    return _c("div", {
      key: doc.title,
      staticClass: "col-12 col-sm-6 col-lg-3 text-start"
    }, [!doc.isModal ? _c("a", {
      staticClass: "text-decoration-none",
      attrs: {
        href: doc.url_link,
        target: "_blank"
      }
    }, [_c("div", {
      staticClass: "premium-doc-card bg-white p-4 rounded-4 shadow-sm border border-light h-100 d-flex flex-column position-relative overflow-hidden"
    }, [_c("div", {
      staticClass: "icon-container mb-4 position-relative z-2"
    }, [_c("div", {
      staticClass: "icon-box rounded-circle d-flex align-items-center justify-content-center shadow-sm",
      staticStyle: {
        width: "55px",
        height: "55px",
        "background-color": "rgba(62, 148, 82, 0.1)"
      }
    }, [_c("img", {
      staticClass: "img-fluid main-icon",
      staticStyle: {
        height: "40px",
        "object-fit": "contain"
      },
      attrs: {
        src: doc.icon_grey
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "content-container mt-auto position-relative z-2"
    }, [_c("h6", {
      staticClass: "fw-bold text-dark mb-4 lh-base doc-title",
      staticStyle: {
        "min-height": "45px",
        "font-size": "0.95rem"
      }
    }, [_vm._v("\n                  " + _vm._s(doc.title) + "\n                ")]), _vm._v(" "), _vm._m(3, true)])])]) : _c("div", {
      staticClass: "cursor-pointer h-100",
      on: {
        click: _vm.openModalFemenil
      }
    }, [_c("div", {
      staticClass: "premium-doc-card card-femenil p-4 rounded-4 shadow-sm border border-light h-100 d-flex flex-column position-relative overflow-hidden"
    }, [_c("div", {
      staticClass: "card-femenil-bg"
    }), _vm._v(" "), _vm._m(4, true), _vm._v(" "), _c("div", {
      staticClass: "content-container mt-auto position-relative z-2"
    }, [_c("h6", {
      staticClass: "fw-bold text-white mb-4 lh-base doc-title",
      staticStyle: {
        "min-height": "45px",
        "font-size": "0.95rem"
      }
    }, [_vm._v("\n                  " + _vm._s(doc.title) + "\n                ")]), _vm._v(" "), _vm._m(5, true)])])])]);
  }), 0)], 2)]), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm.isModalFemenilOpen ? _c("div", {
    staticClass: "modal-overlay-femenil",
    on: {
      click: function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.closeModalFemenil.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "modal-content-femenil shadow-2xl rounded-4 overflow-hidden position-relative",
    attrs: {
      role: "dialog"
    }
  }, [_c("div", {
    staticClass: "modal-femenil-header px-4 py-4 d-flex justify-content-between align-items-center"
  }, [_vm._m(8), _vm._v(" "), _c("button", {
    staticClass: "btn-close-femenil shadow-sm",
    on: {
      click: _vm.closeModalFemenil
    }
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("close")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-femenil-body p-4 p-md-5 bg-light overflow-auto",
    staticStyle: {
      "max-height": "75vh"
    }
  }, [_c("div", {
    staticClass: "row g-4"
  }, [_c("div", {
    staticClass: "col-12 col-lg-5"
  }, [_c("div", {
    staticClass: "bg-white p-4 rounded-4 shadow-sm border border-light h-100"
  }, [_vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), _c("h6", {
    staticClass: "fw-bold text-dark mb-3 border-bottom pb-2"
  }, [_vm._v("La Comisión está conformada por:")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-column gap-4"
  }, _vm._l(_vm.comisionMembers, function (miembro) {
    return _c("div", {
      key: miembro.nombre,
      staticClass: "d-flex align-items-center p-3 rounded-3 hover-bg-light transition-all border border-light shadow-sm"
    }, [_c("div", {
      staticClass: "member-avatar rounded-circle d-flex align-items-center justify-content-center me-4 text-white fw-bold shadow-sm overflow-hidden position-relative flex-shrink-0",
      staticStyle: {
        width: "70px",
        height: "70px",
        background: "linear-gradient(135deg, #50c026 0%, #3E9452 100%)",
        "font-size": "1.5rem"
      }
    }, [miembro.img && !miembro.imgError ? _c("img", {
      staticStyle: {
        width: "100%",
        height: "100%",
        "object-fit": "cover"
      },
      attrs: {
        src: miembro.img,
        alt: miembro.nombre
      },
      on: {
        error: function error($event) {
          miembro.imgError = true;
        }
      }
    }) : _c("span", [_vm._v(_vm._s(miembro.nombre.charAt(0)))])]), _vm._v(" "), _c("div", [_c("h6", {
      staticClass: "fw-bold text-dark mb-1",
      staticStyle: {
        "font-size": "1.1rem"
      }
    }, [_vm._v(_vm._s(miembro.nombre))]), _vm._v(" "), _c("span", {
      staticClass: "d-block text-secondary small mb-1",
      staticStyle: {
        "font-size": "0.85rem"
      }
    }, [_vm._v(_vm._s(miembro.club))]), _vm._v(" "), _c("span", {
      staticClass: "badge bg-light text-dark border",
      staticStyle: {
        "font-size": "0.75rem"
      }
    }, [_vm._v(_vm._s(miembro.puesto))])])]);
  }), 0)])]), _vm._v(" "), _vm._m(11)])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "split-icon-container-2"
  }, [_c("img", {
    attrs: {
      src: "recursos/mazo-icon.png",
      alt: "Contacto Icon"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row justify-content-center mb-6 reveal-up"
  }, [_c("div", {
    staticClass: "col-lg-8 text-center"
  }, [_c("h6", {
    staticClass: "text-uppercase tracking-widest text-muted fw-bold mb-3 std-subtitle"
  }, [_vm._v("Asesoría y")]), _vm._v(" "), _c("h2", {
    staticClass: "display-3 fw-black amf-green-text mb-4 text-uppercase std-title-section"
  }, [_vm._v("Seguimiento Jurídico")]), _vm._v(" "), _c("div", {
    staticClass: "accent-line mx-auto mb-4"
  }), _vm._v(" "), _c("p", {
    staticClass: "text-secondary fs-5 px-md-5 lh-lg std-text"
  }, [_vm._v("\n            La AMFpro, a través de su coordinación jurídica brinda asesoría y seguimiento de las acciones legales interpuestas por sus afiliados y afiliadas. Contáctanos si necesitas apoyo en los siguientes casos:\n          ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row justify-content-center mt-6 mb-5 reveal-up"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [_c("h6", {
    staticClass: "text-uppercase tracking-widest text-muted fw-bold mb-3 std-subtitle"
  }, [_vm._v("Descargas e Información")]), _vm._v(" "), _c("h3", {
    staticClass: "display-6 fw-black amf-green-text mb-4 std-title-section"
  }, [_vm._v("Documentos de Conocimiento")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "download-link d-inline-flex align-items-center fw-bold text-uppercase tracking-wider small"
  }, [_c("span", {
    staticClass: "link-text"
  }, [_vm._v("Descargar PDF")]), _vm._v(" "), _c("i", {
    staticClass: "material-icons ms-2 transition-icon fs-5"
  }, [_vm._v("arrow_forward")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "icon-container mb-4 position-relative z-2"
  }, [_c("div", {
    staticClass: "icon-box-femenil rounded-circle d-flex align-items-center justify-content-center shadow-sm"
  }, [_c("i", {
    staticClass: "material-icons text-white fs-3"
  }, [_vm._v("sports_score")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "download-link-femenil d-inline-flex align-items-center fw-bold text-uppercase tracking-wider small text-white"
  }, [_c("span", {
    staticClass: "link-text"
  }, [_vm._v("Ver Información")]), _vm._v(" "), _c("i", {
    staticClass: "material-icons ms-2 transition-icon fs-5"
  }, [_vm._v("visibility")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "section-contacto py-6 text-white position-relative",
    staticStyle: {
      "background-color": "#3e9452"
    }
  }, [_c("div", {
    staticClass: "position-absolute top-0 start-0 w-100 h-100 opacity-50",
    staticStyle: {
      background: "radial-gradient(circle at center, rgba(62,148,82,0.4) 0%, transparent 70%)"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "container position-relative z-2",
    staticStyle: {
      "margin-bottom": "120px",
      "margin-top": "50px"
    }
  }, [_c("div", {
    staticClass: "row text-center mb-5 reveal-up"
  }, [_c("div", {
    staticClass: "col-md-12 mb-5"
  }, [_c("h2", {
    staticClass: "display-5 fw-black text-white mb-3 std-title-section"
  }, [_vm._v("Contáctanos para más información")]), _vm._v(" "), _c("p", {
    staticClass: "fs-6 text-white-50 mx-auto std-text",
    staticStyle: {
      "max-width": "600px"
    }
  }, [_vm._v("\n            Envía tu nombre completo, NUI, tu duda y un teléfono para comunicarnos contigo de manera personalizada.\n          ")])])]), _vm._v(" "), _c("div", {
    staticClass: "row g-4 text-center justify-content-center"
  }, [_c("div", {
    staticClass: "col-md-4 reveal-up delay-1"
  }, [_c("div", {
    staticClass: "contact-glass-card h-100 p-4 rounded-4"
  }, [_c("i", {
    staticClass: "material-icons mb-3",
    staticStyle: {
      "font-size": "2.5rem",
      color: "#50c026"
    }
  }, [_vm._v("email")]), _vm._v(" "), _c("h6", {
    staticClass: "fw-bold text-uppercase mb-3 tracking-wider std-subtitle"
  }, [_vm._v("Correo")]), _vm._v(" "), _c("p", {
    staticClass: "small mb-1 text-white-50"
  }, [_c("a", {
    staticClass: "text-white text-decoration-none hover-green",
    attrs: {
      href: "mailto:contacto@amfpro.mx"
    }
  }, [_vm._v("contacto@amfpro.mx")])]), _vm._v(" "), _c("p", {
    staticClass: "small text-white-50"
  }, [_c("a", {
    staticClass: "text-white text-decoration-none hover-green",
    attrs: {
      href: "mailto:juridico@amfpro.mx"
    }
  }, [_vm._v("juridico@amfpro.mx")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 reveal-up delay-2"
  }, [_c("div", {
    staticClass: "contact-glass-card h-100 p-4 rounded-4",
    staticStyle: {
      "border-bottom": "3px solid #50c026"
    }
  }, [_c("i", {
    staticClass: "material-icons mb-3",
    staticStyle: {
      "font-size": "2.5rem",
      color: "#50c026"
    }
  }, [_vm._v("schedule")]), _vm._v(" "), _c("h6", {
    staticClass: "fw-bold text-uppercase mb-3 tracking-wider std-subtitle"
  }, [_vm._v("Atención")]), _vm._v(" "), _c("p", {
    staticClass: "small mb-1 text-white-50"
  }, [_c("strong", {
    staticClass: "text-white"
  }, [_vm._v("Lunes a Jueves")]), _c("br"), _vm._v("10:00 AM - 17:00 PM")]), _vm._v(" "), _c("p", {
    staticClass: "small text-white-50"
  }, [_c("strong", {
    staticClass: "text-white"
  }, [_vm._v("Viernes")]), _c("br"), _vm._v("10:00 AM - 15:00 PM")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 reveal-up delay-3"
  }, [_c("div", {
    staticClass: "contact-glass-card h-100 p-4 rounded-4"
  }, [_c("i", {
    staticClass: "material-icons mb-3",
    staticStyle: {
      "font-size": "2.5rem",
      color: "#50c026"
    }
  }, [_vm._v("phone_in_talk")]), _vm._v(" "), _c("h6", {
    staticClass: "fw-bold text-uppercase mb-3 tracking-wider std-subtitle"
  }, [_vm._v("Llámanos")]), _vm._v(" "), _c("p", {
    staticClass: "small text-white-50"
  }, [_c("a", {
    staticClass: "text-white text-decoration-none hover-green fs-5",
    attrs: {
      href: "tel:7286906040"
    }
  }, [_vm._v("(728) 690 6040")]), _c("br"), _c("span", {
    staticClass: "opacity-75 mt-2 d-block"
  }, [_vm._v("Ext: 105 y 107")])])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "bg-offwhite py-6 border-top border-light",
    attrs: {
      id: "convenios"
    }
  }, [_c("div", {
    staticClass: "container py-5"
  }, [_c("div", {
    staticClass: "row justify-content-center mb-6 reveal-up"
  }, [_c("div", {
    staticClass: "col-lg-8 text-center"
  }, [_c("h6", {
    staticClass: "std-subtitle text-muted mb-3"
  }, [_vm._v("PREPÁRATE FUERA DEL CAMPO")]), _vm._v(" "), _c("h2", {
    staticClass: "std-title-section fw-black amf-green-text mb-4 text-uppercase"
  }, [_vm._v("Convenios Educativos")]), _vm._v(" "), _c("p", {
    staticClass: "std-text text-secondary mb-5 px-md-5"
  }, [_vm._v("Ofrecemos opciones para finalizar tu preparatoria, estudios universitarios, maestrías o cursos. Pide informes directamente a nuestra área encargada.")]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-premium-green btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm d-inline-flex align-items-center",
    attrs: {
      href: "mailto:desarrolloeducativo@amfpro.mx"
    }
  }, [_c("i", {
    staticClass: "material-icons me-2"
  }, [_vm._v("email")]), _vm._v(" desarrolloeducativo@amfpro.mx\n          ")])])]), _vm._v(" "), _c("div", {
    staticClass: "stacking-cards-container"
  }, [_c("div", {
    staticClass: "stack-card reveal-up",
    attrs: {
      id: "card-1"
    }
  }, [_c("div", {
    staticClass: "row g-0 h-100 bg-white rounded-4 shadow-sm overflow-hidden border border-light premium-clean-card"
  }, [_c("div", {
    staticClass: "col-lg-8 p-4 p-md-5 d-flex flex-column justify-content-center"
  }, [_c("img", {
    staticClass: "mb-4 convenio-logo",
    staticStyle: {
      "max-height": "60px",
      width: "auto",
      "align-self": "flex-start"
    },
    attrs: {
      src: "recursos/logo-cruyff.png",
      alt: "Cruyff"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "std-title-card fw-black text-dark mb-4"
  }, [_vm._v("Posgrados y cursos en Administración y Negocios del Futbol ONLINE")]), _vm._v(" "), _c("p", {
    staticClass: "std-text text-secondary text-justify mb-3"
  }, [_vm._v("Sus programas de formación han sido diseñados por profesionales de la industria del deporte, enriquecidos por las experiencias personales de profesores y alumnos.")]), _vm._v(" "), _c("p", {
    staticClass: "std-text text-secondary text-justify mb-4 fw-bold text-dark"
  }, [_vm._v("Modelo de aprendizaje basado en:")]), _vm._v(" "), _c("div", {
    staticClass: "row g-3"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("ul", {
    staticClass: "premium-list std-text-small m-0 p-0 text-secondary text-justify"
  }, [_c("li", [_vm._v("100% orientado al deporte")]), _vm._v(" "), _c("li", [_vm._v("Centrado en el alumno")]), _vm._v(" "), _c("li", [_vm._v("‘Learning by doing’ (Aprender haciendo)")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("ul", {
    staticClass: "premium-list std-text-small m-0 p-0 text-secondary text-justify"
  }, [_c("li", [_vm._v("Motivacional y participativo")]), _vm._v(" "), _c("li", [_vm._v("Adaptado a la carga de trabajo y disponibilidad")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 text-white p-4 p-md-5 d-flex flex-column justify-content-center align-items-center text-center",
    staticStyle: {
      "background-color": "#232a5c"
    }
  }, [_c("h6", {
    staticClass: "std-subtitle fw-bold opacity-75 mb-4 text-white"
  }, [_vm._v("BECAS 2026/2027")]), _vm._v(" "), _c("div", {
    staticClass: "w-100 mb-4"
  }, [_c("h2", {
    staticClass: "std-title-hero fw-black mb-0 text-white"
  }, [_vm._v("15%")]), _vm._v(" "), _c("span", {
    staticClass: "std-text-small fw-bold opacity-75 d-block mt-2 text-white"
  }, [_vm._v("Pago en parcialidades.")])]), _vm._v(" "), _c("div", {
    staticClass: "w-100 border-top border-light border-opacity-25 pt-4"
  }, [_c("h2", {
    staticClass: "std-title-hero fw-black mb-0 text-white"
  }, [_vm._v("20%")]), _vm._v(" "), _c("span", {
    staticClass: "std-text-small fw-bold opacity-75 d-block mt-2 text-white"
  }, [_vm._v("Pago de contado.")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "stack-card reveal-up",
    attrs: {
      id: "card-3"
    }
  }, [_c("div", {
    staticClass: "row g-0 h-100 bg-white rounded-4 shadow-sm overflow-hidden border border-light premium-clean-card"
  }, [_c("div", {
    staticClass: "col-lg-8 p-4 p-md-5 d-flex flex-column justify-content-center"
  }, [_c("img", {
    staticClass: "mb-4 convenio-logo",
    staticStyle: {
      "max-height": "50px",
      width: "auto",
      "align-self": "flex-start"
    },
    attrs: {
      src: "recursos/logo-uvn.svg",
      alt: "UVN"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "std-title-card fw-black text-dark mb-4"
  }, [_vm._v("Universidad 100% en línea para gente que trabaja.")]), _vm._v(" "), _c("p", {
    staticClass: "std-text text-secondary text-justify mb-4"
  }, [_vm._v("Estudia solo 20 minutos al día, sin tareas. Prepa en 2 o 4 meses. Todo desde tu celular con acceso a Internet.")]), _vm._v(" "), _c("div", {
    staticClass: "row g-4"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("h6", {
    staticClass: "std-text fw-bold mb-3 border-bottom pb-2 text-dark"
  }, [_vm._v("Carreras Profesionales (3 años)")]), _vm._v(" "), _c("ul", {
    staticClass: "premium-list std-text-small m-0 p-0 text-secondary text-justify"
  }, [_c("li", [_vm._v("Administración de Empresas")]), _vm._v(" "), _c("li", [_vm._v("Mercadotecnia & Finanzas")]), _vm._v(" "), _c("li", [_vm._v("Ingeniería Industrial y de Sistemas")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("h6", {
    staticClass: "std-text fw-bold mb-3 border-bottom pb-2 text-dark"
  }, [_vm._v("Maestrías (18 meses)")]), _vm._v(" "), _c("ul", {
    staticClass: "premium-list std-text-small m-0 p-0 text-secondary text-justify"
  }, [_c("li", [_vm._v("Administración y Alta Dirección")]), _vm._v(" "), _c("li", [_vm._v("Dirección Comercial y Mercadotecnia")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 text-white p-4 p-md-5 d-flex flex-column justify-content-center",
    staticStyle: {
      "background-color": "#A8192E"
    }
  }, [_c("h6", {
    staticClass: "std-subtitle text-white fw-bold opacity-75 mb-3 text-center"
  }, [_vm._v("PROGRAMA DE BECAS")]), _vm._v(" "), _c("p", {
    staticClass: "std-text-small text-center mb-4 px-2 text-white",
    staticStyle: {
      opacity: "0.9"
    }
  }, [_vm._v("\n                Todos los asociados tienen derecho a becas especiales.\n              ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between align-items-center border-bottom border-light border-opacity-25 pb-3 mb-3"
  }, [_c("span", {
    staticClass: "std-subtitle text-white fw-bold mb-0"
  }, [_vm._v("Preparatoria")]), _vm._v(" "), _c("h3", {
    staticClass: "std-title-card fw-black mb-0 text-white"
  }, [_vm._v("30% "), _c("small", {
    staticClass: "fw-normal opacity-75",
    staticStyle: {
      "font-size": "0.8rem"
    }
  }, [_vm._v("(4 meses)")])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between align-items-center border-bottom border-light border-opacity-25 pb-3 mb-3"
  }, [_c("span", {
    staticClass: "std-subtitle text-white fw-bold mb-0"
  }, [_vm._v("Licenciatura")]), _vm._v(" "), _c("h3", {
    staticClass: "std-title-card fw-black mb-0 text-white"
  }, [_vm._v("40% "), _c("small", {
    staticClass: "fw-normal opacity-75",
    staticStyle: {
      "font-size": "0.8rem"
    }
  }, [_vm._v("(3 años)")])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("span", {
    staticClass: "std-subtitle text-white fw-bold mb-0"
  }, [_vm._v("Maestría")]), _vm._v(" "), _c("h3", {
    staticClass: "std-title-card fw-black mb-0 text-white"
  }, [_vm._v("50% "), _c("small", {
    staticClass: "fw-normal opacity-75",
    staticStyle: {
      "font-size": "0.8rem"
    }
  }, [_vm._v("(18 meses)")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "stack-card reveal-up",
    attrs: {
      id: "card-2"
    }
  }, [_c("div", {
    staticClass: "row g-0 h-100 bg-white rounded-4 shadow-sm overflow-hidden border border-light premium-clean-card"
  }, [_c("div", {
    staticClass: "col-lg-8 p-4 p-md-5 d-flex flex-column justify-content-center"
  }, [_c("img", {
    staticClass: "mb-4 convenio-logo",
    staticStyle: {
      "max-height": "60px",
      width: "auto",
      "align-self": "flex-start"
    },
    attrs: {
      src: "recursos/logo-conamat.png",
      alt: "CONAMAT"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "std-title-card fw-black text-dark mb-4"
  }, [_vm._v("Preparatoria en 4 meses con el “Curso de preparación para certificación en un sólo examen”")]), _vm._v(" "), _c("p", {
    staticClass: "std-text text-secondary text-justify mb-0"
  }, [_vm._v("Inscríbete al curso 100% en línea y obtén tu certificado con validez oficial de la SEP a través de una plataforma disponible las 24 horas al día.")])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 text-white p-4 p-md-5 d-flex flex-column justify-content-center align-items-center text-center position-relative",
    staticStyle: {
      "background-color": "#003B73"
    }
  }, [_c("div", {
    staticClass: "position-relative z-2"
  }, [_c("h6", {
    staticClass: "std-subtitle text-white fw-bold opacity-75 mb-4"
  }, [_vm._v("BECA ÚNICA")]), _vm._v(" "), _c("h2", {
    staticClass: "std-title-hero fw-black mb-3 text-white"
  }, [_vm._v("30%")]), _vm._v(" "), _c("div", {
    staticClass: "bg-white px-3 py-3 rounded-3 shadow-sm d-inline-block mt-2"
  }, [_c("span", {
    staticClass: "std-text-small fw-bold d-block",
    staticStyle: {
      color: "#003B73"
    }
  }, [_vm._v("Aplica en cualquier modalidad de pago")])])])])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", {
    staticClass: "icon-header-femenil me-3 shadow-sm rounded-circle d-flex align-items-center justify-content-center"
  }, [_c("i", {
    staticClass: "material-icons text-white"
  }, [_vm._v("diversity_1")])]), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-white-50 fw-bold tracking-widest text-uppercase small mb-1"
  }, [_vm._v("Estatutos y Derechos")]), _vm._v(" "), _c("h3", {
    staticClass: "fw-black text-white mb-0"
  }, [_vm._v("FÚTBOL FEMENIL")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex align-items-center mb-3"
  }, [_c("i", {
    staticClass: "material-icons fs-4 me-2 amf-green-text"
  }, [_vm._v("gavel")]), _vm._v(" "), _c("h5", {
    staticClass: "fw-bold text-dark mb-0"
  }, [_vm._v("La Comisión Femenil")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "std-text-small text-secondary text-justify mb-4"
  }, [_vm._v("\n                La "), _c("b", {
    staticStyle: {
      color: "#50C026"
    }
  }, [_vm._v("Comisión Femenil")]), _vm._v(" tiene como objetivo obtener información sobre posibles problemáticas que presentan las Futbolistas, con el fin de emitir recomendaciones tendientes a "), _c("b", {
    staticStyle: {
      color: "#50C026"
    }
  }, [_vm._v("mejorar la calidad y las condiciones laborales")]), _vm._v(", asimismo tiene la atribución de participar en la "), _c("b", {
    staticStyle: {
      color: "#50C026"
    }
  }, [_vm._v("Asamblea General")]), _vm._v(".\n              ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12 col-lg-7"
  }, [_c("div", {
    staticClass: "bg-white p-4 rounded-4 shadow-sm border border-light mb-4 position-relative overflow-hidden"
  }, [_c("div", {
    staticClass: "card-accent-femenil"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center mb-3"
  }, [_c("div", {
    staticClass: "icon-wrapper-soft me-3"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("pregnant_woman")])]), _vm._v(" "), _c("h5", {
    staticClass: "fw-bold text-dark mb-0"
  }, [_vm._v("Maternidad y Lactancia")])]), _vm._v(" "), _c("ul", {
    staticClass: "custom-femenil-list text-secondary std-text-small text-justify mb-0"
  }, [_c("li", [_vm._v("Como Futbolista Profesional, tienes derecho a solicitar tu baja por maternidad, ejercer un permiso por adopción o permiso parental.")]), _vm._v(" "), _c("li", [_vm._v("En estos supuestos, debes recibir el cien por ciento del salario que estipule tu contrato, durante el periodo de vigencia.")]), _vm._v(" "), _c("li", [_vm._v("La continuidad o renovación de tu contrato "), _c("strong", [_vm._v("no estará condicionada")]), _vm._v(" a que te realices una prueba de embarazo.")]), _vm._v(" "), _c("li", [_vm._v("En el caso de la lactancia, el club garantizará un lugar adecuado donde puedas amamantar a tu bebé o realizar la extracción de leche materna.")])])]), _vm._v(" "), _c("div", {
    staticClass: "bg-white p-4 rounded-4 shadow-sm border border-light position-relative overflow-hidden"
  }, [_c("div", {
    staticClass: "card-accent-femenil"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center mb-3"
  }, [_c("div", {
    staticClass: "icon-wrapper-soft me-3"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("water_drop")])]), _vm._v(" "), _c("h5", {
    staticClass: "fw-bold text-dark mb-0"
  }, [_vm._v("Salud Menstrual")])]), _vm._v(" "), _c("p", {
    staticClass: "std-text-small text-secondary fw-bold mb-3 text-justify"
  }, [_vm._v("\n                Los Clubes deben respetar en todo momento las necesidades de las Jugadoras en relación con su ciclo y salud menstrual.\n              ")]), _vm._v(" "), _c("ul", {
    staticClass: "custom-femenil-list text-secondary std-text-small text-justify mb-0"
  }, [_c("li", [_vm._v("Una Futbolista tiene derecho a ausentarse de entrenamientos o partidos por motivos de salud menstrual, previa presentación de un certificado médico válido, expedido por un doctor especialista.")]), _vm._v(" "), _c("li", [_vm._v("La Jugadora tendrá derecho a recibir su "), _c("strong", [_vm._v("salario íntegro")]), _vm._v(" cuando disfrute de estos derechos.")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionJuridicoComponent.vue?vue&type=style&index=0&id=45f78960&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionJuridicoComponent.vue?vue&type=style&index=0&id=45f78960&lang=scss&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* FORZAR LA TIPOGRAFÍA ROBOTO PARA TODO EL COMPONENTE */\n.font-roboto[data-v-45f78960] {\n  font-family: \"Roboto\", sans-serif !important;\n}\n.font-roboto h1[data-v-45f78960], .font-roboto h2[data-v-45f78960], .font-roboto h3[data-v-45f78960], .font-roboto h4[data-v-45f78960], .font-roboto h5[data-v-45f78960], .font-roboto h6[data-v-45f78960], .font-roboto p[data-v-45f78960], .font-roboto span[data-v-45f78960], .font-roboto div[data-v-45f78960], .font-roboto a[data-v-45f78960], .font-roboto button[data-v-45f78960], .font-roboto li[data-v-45f78960], .font-roboto strong[data-v-45f78960] {\n  font-family: \"Roboto\", sans-serif !important;\n}\n.material-icons[data-v-45f78960] {\n  font-family: \"Material Icons\" !important;\n}\n.fw-black[data-v-45f78960] {\n  font-weight: 900 !important;\n}\n.fw-bold[data-v-45f78960] {\n  font-weight: 700 !important;\n}\n.fw-light[data-v-45f78960] {\n  font-weight: 300 !important;\n}\n\n/* Títulos Estandarizados */\n.std-title-section[data-v-45f78960] {\n  font-size: clamp(2rem, 4vw, 3rem);\n  line-height: 1.2;\n  letter-spacing: -1px;\n}\n.std-title-card[data-v-45f78960] {\n  font-size: clamp(1.2rem, 2vw, 1.5rem);\n  line-height: 1.3;\n}\n.std-subtitle[data-v-45f78960] {\n  font-size: clamp(0.75rem, 1.5vw, 0.9rem);\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.std-text[data-v-45f78960] {\n  font-size: clamp(1rem, 1.5vw, 1.1rem);\n  line-height: 1.8;\n}\n.std-text-small[data-v-45f78960] {\n  font-size: clamp(0.85rem, 1vw, 0.95rem);\n  line-height: 1.6;\n}\n.text-justify[data-v-45f78960] {\n  text-align: justify !important;\n}\n.amf-green-text[data-v-45f78960] {\n  color: #50c026 !important;\n}\n.tracking-widest[data-v-45f78960] {\n  letter-spacing: 4px;\n}\n.tracking-wider[data-v-45f78960] {\n  letter-spacing: 2px;\n}\n.accent-line[data-v-45f78960] {\n  width: 100px;\n  height: 8px;\n  background-color: #50c026;\n  border-radius: 4px;\n}\n.py-6[data-v-45f78960] {\n  padding-top: 6rem;\n  padding-bottom: 6rem;\n}\n.mt-6[data-v-45f78960] {\n  margin-top: 5rem;\n}\n.mb-6[data-v-45f78960] {\n  margin-bottom: 5rem;\n}\n.hover-green[data-v-45f78960]:hover {\n  color: #50c026 !important;\n  transition: 0.3s ease;\n}\n.cursor-pointer[data-v-45f78960] {\n  cursor: pointer;\n}\n.transition-all[data-v-45f78960] {\n  transition: all 0.3s ease;\n}\n.hover-bg-light[data-v-45f78960]:hover {\n  background-color: #f8f9fa;\n  transform: translateX(5px);\n}\n.relative-container[data-v-45f78960] {\n  position: relative;\n  z-index: 10;\n}\n.split-icon-container-2[data-v-45f78960] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10;\n  top: -195px;\n}\n.section-contacto .split-icon-container-2[data-v-45f78960] {\n  bottom: -160px;\n  top: auto;\n}\n.reveal-up[data-v-45f78960] {\n  opacity: 0;\n  transform: translateY(40px);\n  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.is-visible.reveal-up[data-v-45f78960], .is-visible .reveal-up[data-v-45f78960] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.delay-1[data-v-45f78960] {\n  transition-delay: 0.15s;\n}\n.delay-2[data-v-45f78960] {\n  transition-delay: 0.3s;\n}\n.delay-3[data-v-45f78960] {\n  transition-delay: 0.45s;\n}\n\n/* Tarjetas Criterios Legales */\n.premium-legal-card[data-v-45f78960] {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  cursor: pointer;\n}\n.premium-legal-card .card-top-line[data-v-45f78960] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  width: 0;\n  background-color: #3E9452;\n  transition: width 0.4s ease;\n}\n.premium-legal-card .transition-color[data-v-45f78960] {\n  transition: color 0.3s ease;\n}\n.premium-legal-card .transition-number[data-v-45f78960] {\n  transition: opacity 0.4s ease;\n}\n.premium-legal-card .legal-detail-wrapper[data-v-45f78960] {\n  max-height: 0;\n  opacity: 0;\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.premium-legal-card .legal-detail-wrapper.is-expanded[data-v-45f78960] {\n  max-height: 250px;\n  opacity: 1;\n}\n.premium-legal-card[data-v-45f78960]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 15px 30px rgba(62, 148, 82, 0.15) !important;\n  border-color: rgba(62, 148, 82, 0.3) !important;\n}\n.premium-legal-card:hover .card-top-line[data-v-45f78960] {\n  width: 100%;\n}\n\n/* Tarjetas Descargas Base */\n.premium-doc-card[data-v-45f78960] {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.premium-doc-card .icon-box[data-v-45f78960] {\n  transition: all 0.4s ease;\n}\n.premium-doc-card .icon-box .main-icon[data-v-45f78960] {\n  transition: all 0.4s ease;\n}\n.premium-doc-card .doc-title[data-v-45f78960] {\n  transition: color 0.3s ease;\n}\n.premium-doc-card .download-link[data-v-45f78960] {\n  color: #50c026;\n  transition: color 0.3s ease;\n}\n.premium-doc-card .download-link .transition-icon[data-v-45f78960] {\n  transition: transform 0.4s ease;\n}\n.premium-doc-card[data-v-45f78960]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(62, 148, 82, 0.15) !important;\n  border-color: rgba(62, 148, 82, 0.3) !important;\n}\n.premium-doc-card:hover .icon-box[data-v-45f78960] {\n  background-color: #3E9452 !important;\n  transform: scale(1.1);\n}\n.premium-doc-card:hover .icon-box .main-icon[data-v-45f78960] {\n  filter: brightness(0) invert(1);\n}\n.premium-doc-card:hover .doc-title[data-v-45f78960] {\n  color: #50c026 !important;\n}\n.premium-doc-card:hover .download-link[data-v-45f78960] {\n  color: #112a18;\n}\n.premium-doc-card:hover .download-link .transition-icon[data-v-45f78960] {\n  transform: translateX(8px);\n}\n\n/* Tarjeta Femenil Especial (Ajustada a verde) */\n.card-femenil[data-v-45f78960] {\n  border-color: rgba(80, 192, 38, 0.2) !important;\n}\n.card-femenil .card-femenil-bg[data-v-45f78960] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, #50c026 0%, #3e9452 100%);\n  opacity: 0.9;\n  z-index: 1;\n  transition: opacity 0.3s ease;\n}\n.card-femenil .icon-box-femenil[data-v-45f78960] {\n  width: 55px;\n  height: 55px;\n  background-color: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(5px);\n  transition: transform 0.4s ease;\n}\n.card-femenil .download-link-femenil .transition-icon[data-v-45f78960] {\n  transition: transform 0.4s ease;\n}\n.card-femenil[data-v-45f78960]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(80, 192, 38, 0.25) !important;\n}\n.card-femenil:hover .card-femenil-bg[data-v-45f78960] {\n  opacity: 1;\n}\n.card-femenil:hover .icon-box-femenil[data-v-45f78960] {\n  transform: scale(1.1);\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.card-femenil:hover .download-link-femenil .transition-icon[data-v-45f78960] {\n  transform: translateX(8px);\n}\n\n/* Tarjetas Contacto */\n.contact-glass-card[data-v-45f78960] {\n  background: rgba(255, 255, 255, 0.05);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  transition: transform 0.4s ease, background 0.4s ease;\n}\n.contact-glass-card[data-v-45f78960]:hover {\n  transform: translateY(-10px);\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(80, 192, 38, 0.4);\n}\n\n/* ESTILOS DE CONVENIOS */\n.bg-offwhite[data-v-45f78960] {\n  background-color: #F8F9FA;\n}\n.premium-clean-card[data-v-45f78960] {\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.03);\n  border: 1px solid rgba(0, 0, 0, 0.02);\n  transition: all 0.4s ease;\n}\n.premium-clean-card[data-v-45f78960]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.06);\n}\n.premium-list[data-v-45f78960] {\n  list-style: none !important;\n  padding-left: 0;\n}\n.premium-list li[data-v-45f78960] {\n  position: relative;\n  padding-left: 1.8rem;\n  margin-bottom: 1rem;\n  color: #495057;\n}\n.premium-list li[data-v-45f78960]::before {\n  content: \"verified\";\n  font-family: \"Material Icons\" !important;\n  position: absolute;\n  left: 0;\n  top: 0;\n  color: #3E9452;\n  font-size: 1.2rem;\n}\n.stacking-cards-container[data-v-45f78960] {\n  position: relative;\n  padding-bottom: 1vh;\n}\n.stack-card[data-v-45f78960] {\n  position: sticky;\n  margin-bottom: 4rem;\n}\n#card-1[data-v-45f78960] {\n  top: 12vh;\n}\n#card-2[data-v-45f78960] {\n  top: 14vh;\n}\n#card-3[data-v-45f78960] {\n  top: 16vh;\n}\n.convenio-logo[data-v-45f78960] {\n  transition: transform 0.4s ease;\n}\n.premium-clean-card:hover .convenio-logo[data-v-45f78960] {\n  transform: scale(1.05);\n}\n.std-title-hero[data-v-45f78960] {\n  font-size: clamp(2.5rem, 5vw, 4.5rem);\n  line-height: 1.1;\n}\n.btn-premium-green[data-v-45f78960] {\n  background: #50c026;\n  color: white;\n  border: none;\n  box-shadow: 0 10px 20px rgba(80, 192, 38, 0.2);\n}\n.btn-premium-green[data-v-45f78960]:hover {\n  background: #111;\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\n  transform: translateY(-3px);\n  color: white;\n}\n\n/* =========================================================\n   MODAL ULTRA-PREMIUM (FÚTBOL FEMENIL) EN VERDE INSTITUCIONAL\n   ========================================================= */\n.modal-overlay-femenil[data-v-45f78960] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(15, 23, 42, 0.85);\n  backdrop-filter: blur(8px);\n  z-index: 10000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\n.modal-content-femenil[data-v-45f78960] {\n  width: 100%;\n  max-width: 1100px;\n  background: white;\n  animation: modalScaleIn-45f78960 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.modal-femenil-header[data-v-45f78960] {\n  background: linear-gradient(135deg, #50c026 0%, #3e9452 100%);\n}\n.modal-femenil-header .icon-header-femenil[data-v-45f78960] {\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(5px);\n}\n.btn-close-femenil[data-v-45f78960] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.btn-close-femenil[data-v-45f78960]:hover {\n  background: white;\n  color: #50c026;\n  transform: rotate(90deg);\n}\n\n/* Body del Modal Femenil */\n.modal-femenil-body[data-v-45f78960]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-femenil-body[data-v-45f78960]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.modal-femenil-body[data-v-45f78960]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 10px;\n}\n.modal-femenil-body[data-v-45f78960]::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n.card-accent-femenil[data-v-45f78960] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 100%;\n  background: linear-gradient(135deg, #50c026 0%, #3e9452 100%);\n}\n.icon-wrapper-soft[data-v-45f78960] {\n  width: 45px;\n  height: 45px;\n  border-radius: 12px;\n  background: rgba(80, 192, 38, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-wrapper-soft i[data-v-45f78960] {\n  color: #3E9452;\n  font-size: 1.6rem;\n}\n.custom-femenil-list[data-v-45f78960] {\n  list-style: none;\n  padding-left: 0;\n}\n.custom-femenil-list li[data-v-45f78960] {\n  position: relative;\n  padding-left: 1.5rem;\n  margin-bottom: 0.8rem;\n}\n.custom-femenil-list li[data-v-45f78960]::before {\n  content: \"check_circle\";\n  font-family: \"Material Icons\";\n  position: absolute;\n  left: 0;\n  top: 2px;\n  font-size: 1.1rem;\n  color: #50c026;\n}\n@keyframes modalScaleIn-45f78960 {\nfrom {\n    opacity: 0;\n    transform: scale(0.95) translateY(20px);\n}\nto {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionJuridicoComponent.vue?vue&type=style&index=0&id=45f78960&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionJuridicoComponent.vue?vue&type=style&index=0&id=45f78960&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionJuridicoComponent_vue_vue_type_style_index_0_id_45f78960_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionJuridicoComponent.vue?vue&type=style&index=0&id=45f78960&lang=scss&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionJuridicoComponent.vue?vue&type=style&index=0&id=45f78960&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionJuridicoComponent_vue_vue_type_style_index_0_id_45f78960_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionJuridicoComponent_vue_vue_type_style_index_0_id_45f78960_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/SectionJuridicoComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/SectionJuridicoComponent.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SectionJuridicoComponent_vue_vue_type_template_id_45f78960_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionJuridicoComponent.vue?vue&type=template&id=45f78960&scoped=true */ "./resources/js/components/SectionJuridicoComponent.vue?vue&type=template&id=45f78960&scoped=true");
/* harmony import */ var _SectionJuridicoComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionJuridicoComponent.vue?vue&type=script&lang=js */ "./resources/js/components/SectionJuridicoComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _SectionJuridicoComponent_vue_vue_type_style_index_0_id_45f78960_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionJuridicoComponent.vue?vue&type=style&index=0&id=45f78960&lang=scss&scoped=true */ "./resources/js/components/SectionJuridicoComponent.vue?vue&type=style&index=0&id=45f78960&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SectionJuridicoComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectionJuridicoComponent_vue_vue_type_template_id_45f78960_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SectionJuridicoComponent_vue_vue_type_template_id_45f78960_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "45f78960",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SectionJuridicoComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SectionJuridicoComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/SectionJuridicoComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionJuridicoComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionJuridicoComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionJuridicoComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionJuridicoComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SectionJuridicoComponent.vue?vue&type=template&id=45f78960&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/SectionJuridicoComponent.vue?vue&type=template&id=45f78960&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionJuridicoComponent_vue_vue_type_template_id_45f78960_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionJuridicoComponent_vue_vue_type_template_id_45f78960_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionJuridicoComponent_vue_vue_type_template_id_45f78960_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionJuridicoComponent.vue?vue&type=template&id=45f78960&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionJuridicoComponent.vue?vue&type=template&id=45f78960&scoped=true");


/***/ }),

/***/ "./resources/js/components/SectionJuridicoComponent.vue?vue&type=style&index=0&id=45f78960&lang=scss&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/SectionJuridicoComponent.vue?vue&type=style&index=0&id=45f78960&lang=scss&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionJuridicoComponent_vue_vue_type_style_index_0_id_45f78960_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionJuridicoComponent.vue?vue&type=style&index=0&id=45f78960&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SectionJuridicoComponent.vue?vue&type=style&index=0&id=45f78960&lang=scss&scoped=true");


/***/ })

}]);