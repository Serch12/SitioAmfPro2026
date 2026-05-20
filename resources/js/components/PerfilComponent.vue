<template>
    <div class="dashboard-wrapper">
        
        <header class="header-main border-bottom fixed-top bg-white shadow-sm">
          <div class="container-fluid py-2 px-3 px-lg-5">
            <div class="row align-items-center flex-nowrap m-0">
              
              <div class="col-3 col-md-4 text-start px-0">
                <a href="" class="text-decoration-none">
                  <div class="hash-tag fw-bold text-secondary text-truncate">#UnidosSomosMásFuertes</div>
                </a>
              </div>
              
              <div class="col-5 col-md-4 text-center px-0">
                <a href="">
                  <img src="recursos/logo.png" alt="Logo AMFPRO" class="logo-header">
                </a>
              </div>
              
              <div class="col-4 col-md-4 text-end d-flex justify-content-end align-items-center gap-2 px-0">
                <button @click="logout" class="btn-logout-premium shadow-sm me-2">
                    <i class="material-icons">logout</i>
                    <span class="d-none d-lg-inline">Cerrar Sesión</span>
                </button>

                <div class="d-none d-sm-flex gap-2 border-start ps-2">
                    <img src="recursos/x.png" alt="X" class="social-nav">
                    <img src="recursos/facebook.png" alt="FB" class="social-nav">
                    <img src="recursos/instagram.png" alt="IG" class="social-nav">
                </div>
              </div>

            </div>
          </div>
        </header>

        <div class="container py-4 mt-5 pt-4">
            
            <div class="profile-hero-card shadow-lg mb-5">
                <div class="hero-bg-pattern"></div>
                
                <div class="card-body p-4 p-md-5 position-relative z-1 d-flex flex-column flex-md-row align-items-center justify-content-between">
                    
                    <div class="d-flex flex-column flex-md-row align-items-center gap-4 text-center text-md-start">
                        
                        <div class="avatar-container shadow">
                            <div class="avatar-circle bg-white d-flex align-items-center justify-content-center overflow-hidden">
                                <img v-if="afiliado.foto" 
                                     :src="obtenerUrlArchivo(afiliado.foto, afiliado.existecarpetafoto)" 
                                     class="img-fluid object-cover">
                                <span v-else class="display-3 text-muted fw-bold">{{ afiliado.nombre ? afiliado.nombre.charAt(0) : '' }}</span>
                            </div>
                            <button @click="$refs.inputFoto.click()" class="btn-edit-avatar shadow-lg" title="Cambiar foto de perfil">
                                <i class="material-icons">photo_camera</i>
                            </button>
                        </div>
                        
                        <div class="text-white mt-2 mt-md-0">
                            <h1 class="fw-bolder mb-2 hero-title text-shadow">
                                {{ afiliado.nombre }} {{ afiliado.apellido_pat }} {{ afiliado.apellido_mat }}
                            </h1>
                            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start gap-2">
                                <span class="glass-badge fw-bold shadow-sm">
                                    <i class="material-icons fs-6 me-1">badge</i> NUI: {{ afiliado.nui }}
                                </span>
                                <span class="glass-badge fw-bold shadow-sm">
                                    <i class="material-icons fs-6 me-1 text-warning">verified</i> Asociado Activo
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 mt-md-0">
                        <button class="btn btn-premium-edit shadow-lg rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-bold" 
                                @click="abrirModalEdicion">
                            <i class="material-icons">edit_note</i> Actualizar Info
                        </button>
                    </div>

                </div>
            </div>

            <div class="row g-4">
                
                <div class="col-lg-8">
                    
                    <div class="premium-card shadow-sm mb-4">
                        <div class="card-body p-4 row text-center">
                            <div class="col-md-4 py-3 border-end-md info-hover">
                                <div class="icon-circle bg-success-light text-success mx-auto mb-3">
                                    <i class="material-icons fs-3">email</i>
                                </div>
                                <span class="d-block text-muted small fw-bold text-uppercase mb-1">Email</span>
                                <div class="text-dark fw-bolder text-truncate px-2">{{ afiliado.mail }}</div>
                            </div>
                            <div class="col-md-4 py-3 border-end-md info-hover">
                                <div class="icon-circle bg-primary-light text-primary mx-auto mb-3">
                                    <i class="material-icons fs-3">phone_iphone</i>
                                </div>
                                <span class="d-block text-muted small fw-bold text-uppercase mb-1">Celular</span>
                                <div class="text-dark fw-bolder">{{ afiliado.celular || 'No registrado' }}</div>
                            </div>
                            <div class="col-md-4 py-3 info-hover">
                                <div class="icon-circle bg-warning-light text-warning mx-auto mb-3">
                                    <i class="material-icons fs-3">fingerprint</i>
                                </div>
                                <span class="d-block text-muted small fw-bold text-uppercase mb-1">CURP</span>
                                <div class="text-dark fw-bolder">{{ afiliado.curp || 'N/A' }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="premium-card shadow-sm mb-4">
                        <div class="card-header bg-white border-0 pt-4 px-4 pb-0">
                            <h5 class="fw-bolder amf-green-text-2 d-flex align-items-center m-0">
                                <i class="material-icons me-2">person_outline</i> Datos Personales
                            </h5>
                        </div>
                        <div class="card-body p-4">
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <div class="data-box px-4 py-3 rounded-4 bg-light-gray border border-light">
                                        <span class="text-muted small fw-bold d-block mb-1 text-uppercase">Sexo</span>
                                        <span class="text-dark fw-bolder fs-6">{{ afiliado.sexo || 'N/A' }}</span>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="data-box px-4 py-3 rounded-4 bg-light-gray border border-light">
                                        <span class="text-muted small fw-bold d-block mb-1 text-uppercase">Nacionalidad</span>
                                        <span class="text-dark fw-bolder fs-6">{{ afiliado.nacionalidad || 'N/A' }}</span>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="data-box px-4 py-3 rounded-4 bg-light-gray border border-light">
                                        <span class="text-muted small fw-bold d-block mb-1 text-uppercase">Escolaridad</span>
                                        <span class="text-dark fw-bolder fs-6">{{ afiliado.escolaridad || 'N/A' }}</span>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="data-box px-4 py-3 rounded-4 bg-light-gray border border-light">
                                        <span class="text-muted small fw-bold d-block mb-1 text-uppercase">Nacimiento</span>
                                        <span class="text-dark fw-bolder fs-6">{{ afiliado.nacimiento || 'N/A' }}</span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="data-box px-4 py-3 rounded-4 bg-light-gray border border-light d-flex align-items-center gap-3">
                                        <i class="material-icons text-muted opacity-50 fs-2">location_on</i>
                                        <div>
                                            <span class="text-muted small fw-bold d-block mb-1 text-uppercase">Domicilio Completo</span>
                                            <span class="text-dark fw-bolder">{{ afiliado.calle || 'Sin registro' }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="premium-card shadow-sm mb-4">
                        <div class="card-header bg-white border-0 pt-4 px-4 pb-0">
                            <h5 class="fw-bolder text-primary d-flex align-items-center m-0">
                                <i class="material-icons me-2">card_membership</i> Documentación Oficial
                            </h5>
                        </div>
                        <div class="card-body p-4">
                            <div class="row g-4">
                                
                                <div class="col-md-6">
                                    <div class="document-label mb-2 fw-bold text-secondary text-uppercase small">
                                        Identificación (Frente)
                                    </div>
                                    <div class="id-card-wrapper shadow-sm">
                                        <img v-if="afiliado.pdf" 
                                             :src="obtenerUrlArchivo(afiliado.pdf, afiliado.existecarpetapdf)" 
                                             class="id-card-img">
                                        <div v-else class="id-card-empty">
                                            <i class="material-icons">badge</i>
                                            <span>Falta Documento</span>
                                        </div>
                                        <div class="id-card-overlay">
                                            <button @click="$refs.inputIneFrente.click()" class="btn btn-light rounded-pill fw-bold shadow">
                                                <i class="material-icons align-middle me-1">upload_file</i> Actualizar
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="document-label mb-2 fw-bold text-secondary text-uppercase small">
                                        Identificación (Reverso)
                                    </div>
                                    <div class="id-card-wrapper shadow-sm">
                                        <img v-if="afiliado.pdf2" 
                                             :src="obtenerUrlArchivo(afiliado.pdf2, afiliado.existecarpetapdf2)" 
                                             class="id-card-img">
                                        <div v-else class="id-card-empty">
                                            <i class="material-icons">credit_card</i>
                                            <span>Falta Documento</span>
                                        </div>
                                        <div class="id-card-overlay">
                                            <button @click="$refs.inputIneAtras.click()" class="btn btn-light rounded-pill fw-bold shadow">
                                                <i class="material-icons align-middle me-1">upload_file</i> Actualizar
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-lg-4">
                    <div class="premium-card shadow-sm sticky-top" style="top: 90px; border-top: 5px solid #1e293b;">
                        <div class="card-header bg-white border-0 pt-4 px-4 pb-2 text-center">
                            <div class="icon-brand-box mx-auto mb-3 shadow" style="background: #1e293b; width: 60px; height: 60px; border-radius: 15px; display: flex; align-items: center; justify-content: center;">
                                <i class="material-icons text-white" style="font-size: 2rem;">sports_soccer</i>
                            </div>
                            <h4 class="fw-bolder text-dark m-0">Estatus Deportivo</h4>
                        </div>
                        <div class="card-body p-4 text-center">
                            <div class="status-box mb-4 bg-light-gray p-3 rounded-4 border border-light">
                                <span class="material-icons text-primary d-block mb-1">shield</span>
                                <small class="text-muted d-block fw-bold text-uppercase mb-1">Club Actual</small>
                                <span class="h5 fw-bolder text-dark m-0">{{ afiliado.club || 'Sin Club' }}</span>
                            </div>
                            
                            <div class="status-box mb-4 bg-light-gray p-3 rounded-4 border border-light">
                                <span class="material-icons text-warning d-block mb-1">emoji_events</span>
                                <small class="text-muted d-block fw-bold text-uppercase mb-1">División</small>
                                <span class="h6 fw-bolder text-secondary m-0">{{ afiliado.division || 'N/A' }}</span>
                            </div>
                            
                            <div class="status-box mb-2 p-3">
                                <small class="text-muted d-block fw-bold text-uppercase mb-3">Selección Nacional</small>
                                <span class="badge rounded-pill shadow-sm py-2 px-4 fs-6" 
                                      :class="afiliado.seleccion === 'Si' ? 'bg-success' : 'bg-secondary'">
                                    <i class="material-icons align-middle fs-5 me-1" v-if="afiliado.seleccion === 'Si'">public</i>
                                    {{ afiliado.seleccion === 'Si' ? 'Seleccionado' : 'No Registrado' }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="modal fade" id="modalEditarPerfil" tabindex="-1" role="dialog" aria-hidden="true" style="z-index: 10000;">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content premium-modal border-0 overflow-hidden shadow-lg">
                    
                    <div class="modal-header d-flex align-items-center" style="background: linear-gradient(135deg, #50c026 0%, #3e9452 100%); border: none; padding: 1.5rem 2rem;">
                        <h5 class="modal-title fw-bolder text-white d-flex align-items-center">
                            <i class="material-icons me-2">manage_accounts</i> Actualizar Información
                        </h5>
                        <button type="button" class="btn text-white p-0 border-0 shadow-none d-flex align-items-center justify-content-center" @click="cerrarModal">
                            <i class="material-icons fs-2 opacity-75 hover-opacity-100 transition-all">close</i>
                        </button>
                    </div>
                    
                    <div class="modal-body p-4 p-md-5 bg-light-gray">
                        <form @submit.prevent="updateAfiliado">
                            
                            <h6 class="fw-bold text-secondary mb-3 text-uppercase" style="font-size: 0.8rem; letter-spacing: 1px;"><i class="material-icons align-middle fs-5 me-1">feed</i> Datos Generales</h6>
                            <div class="row g-3 mb-4">
                                <div class="col-md-6">
                                    <div class="form-floating compact-floating">
                                        <select class="form-select" v-model="afiliadoEdit.sexo" id="editSexo">
                                            <option value="Femenino">Femenino</option>
                                            <option value="Masculino">Masculino</option>
                                        </select>
                                        <label for="editSexo">Sexo *</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating compact-floating">
                                        <select class="form-select" v-model="afiliadoEdit.escolaridad" id="editEscolaridad">
                                            <option value="Básico">Básico</option>
                                            <option value="Media Superior">Media Superior</option>
                                            <option value="Superior">Superior</option>
                                        </select>
                                        <label for="editEscolaridad">Escolaridad *</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating compact-floating">
                                        <input type="text" class="form-control" v-model="afiliadoEdit.curp" id="editCurp" placeholder="CURP">
                                        <label for="editCurp">CURP *</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating compact-floating">
                                        <input type="text" class="form-control" v-model="afiliadoEdit.celular" id="editCelular" placeholder="Celular">
                                        <label for="editCelular">Teléfono Celular *</label>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-floating compact-floating">
                                        <input type="text" class="form-control" v-model="afiliadoEdit.calle" id="editCalle" placeholder="Domicilio">
                                        <label for="editCalle">Domicilio (Calle, número, colonia, municipio y C.P) *</label>
                                    </div>
                                </div>
                            </div>

                            <h6 class="fw-bold text-primary mb-3 text-uppercase mt-2" style="font-size: 0.8rem; letter-spacing: 1px;"><i class="material-icons align-middle fs-5 me-1">sports_soccer</i> Perfil Deportivo</h6>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating compact-floating">
                                        <select class="form-select" v-model="afiliadoEdit.division" @change="listaEquipos(afiliadoEdit.division);" id="editDivision">
                                            <option value="Liga MX Femenil">Liga MX Femenil</option>
                                            <option value="Liga MX">Liga MX</option>
                                            <option value="Liga Expansión MX">Liga Expansión MX</option>
                                            <option value="Liga Premier">Liga Premier</option>
                                            <option value="Liga TDP">Liga TDP</option>
                                            <option value="Otro">Otro / Extranjero</option>
                                        </select>
                                        <label for="editDivision">División *</label>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-floating compact-floating">
                                        <input v-if="es_otro" type="text" class="form-control" v-model="afiliadoEdit.club" placeholder="Nombre del club" id="editClubOtro">
                                        <select v-else class="form-select" v-model="afiliadoEdit.club" :disabled="selectDisabled" id="editClubSelect">
                                            <option v-for="(le, index) in lista_equipos" :key="index" :value="le.nombre">{{le.nombre}}</option> 
                                        </select>
                                        <label for="editClubSelect">Club Actual *</label>
                                    </div>
                                </div>

                                <div class="col-md-6" v-show="muestra_categoria || es_otro">
                                    <div class="form-floating compact-floating">
                                        <input v-if="es_otro" type="text" class="form-control" v-model="afiliadoEdit.categoria" placeholder="Categoría" id="editCatOtro">
                                        <select v-else class="form-select" v-model="afiliadoEdit.categoria" :disabled="selectDisabled2" id="editCatSelect">
                                            <option value="Liga MX Femenil" v-show="afiliadoEdit.division == 'Liga MX Femenil'">Liga MX Femenil</option>
                                            <option value="Liga MX" v-show="afiliadoEdit.division == 'Liga MX'">Liga MX</option>
                                            <option value="Sub 23" v-show="afiliadoEdit.division == 'Liga MX'">Sub 23</option>
                                            <option value="Sub 20" v-show="afiliadoEdit.division == 'Liga MX'">Sub 20</option>
                                            <option value="Sub 19" v-show="afiliadoEdit.division == 'Liga MX Femenil'">Sub 19</option>                   
                                            <option value="Sub 18">Sub 18</option>
                                            <option value="Sub 17">Sub 17</option>
                                            <option value="Sub 16" v-show="afiliadoEdit.division == 'Liga MX'">Sub 16</option>
                                            <option value="Sub 15" v-show="afiliadoEdit.division == 'Liga MX'">Sub 15</option>
                                            <option value="Sub 14" v-show="afiliadoEdit.division == 'Liga MX'">Sub 14</option>
                                            <option value="Sub 13" v-show="afiliadoEdit.division == 'Liga MX'">Sub 13</option>
                                        </select>
                                        <label for="editCatSelect">Categoría *</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="text-end mt-5 pt-4 border-top">
                                <button type="button" class="btn btn-light fw-bold text-secondary me-3 px-4 rounded-pill border" @click="cerrarModal">Cancelar</button>
                                <button type="submit" class="btn btn-premium-save px-4 rounded-pill shadow-lg d-inline-flex align-items-center gap-2">
                                    <i class="material-icons fs-5">save</i> Guardar Cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <input type="file" ref="inputFoto" class="d-none" accept="image/*" @change="uploadImage($event, 'foto')">
        <input type="file" ref="inputIneFrente" class="d-none" accept="image/*" @change="uploadImage($event, 'pdf')">
        <input type="file" ref="inputIneAtras" class="d-none" accept="image/*" @change="uploadImage($event, 'pdf2')">
        
        <div class="loadingprincipal" v-show="verloading">
            <div class="cube-wrapper">
                <div class="cube-folding">
                    <span class="leaf1"></span><span class="leaf2"></span>
                    <span class="leaf3"></span><span class="leaf4"></span>
                </div>
                <span class="loadingtexto" data-name="Loading">Guardando</span>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted () {
        this.loadAfiliadoData();
    },
    data() {
        return {
            afiliadoEdit: {},
            afiliado: {}, 
            lista_equipos: [],
            selectDisabled: true,
            selectDisabled2: true,
            muestra_categoria: false,
            muestra_tipo: false,
            verloading: false,
            es_otro: true,
            // Las URLs ya no están aquí fijas, se calculan inteligentemente en Methods/Computed
        }
    },
    computed: {
        // DETECCIÓN AUTOMÁTICA DE ENTORNO
        isLocalhost() {
            const host = window.location.hostname;
            return host === 'localhost' || host === '127.0.0.1';
        }
    },
    methods: {
        logout() {
            this.verloading = true;
            const baseUrl = document.querySelector('base') ? document.querySelector('base').href : '/';
            
            axios.post(baseUrl + 'logout')
                .then(() => {
                    // Redirigimos al inicio una vez cerrada la sesión
                    window.location.href = baseUrl;
                })
                .catch(error => {
                    console.error("Error al cerrar sesión:", error);
                    // Si falla el post (ej. por token expirado), forzamos recarga al home
                    window.location.href = baseUrl;
                });
        },
        // FUNCIÓN QUE GENERA LA RUTA DE LA IMAGEN AUTOMÁTICAMENTE SEGÚN DONDE ESTÉS
        obtenerUrlArchivo(nombreArchivo, existeCarpetaFalsa) {
            if (!nombreArchivo || !this.afiliado.nui) return '';
            
            let baseUrl = '';
            
            // Si la base de datos dice false, significa que pertenece a intranet
            if (existeCarpetaFalsa === false) {
                baseUrl = this.isLocalhost 
                    ? 'http://localhost/IntranetAMF/public/ArchivosSistema/Afiliados/'
                    : 'https://test-intranet.amfpro.mx/ArchivosSistema/Afiliados/';
            } else {
                // Pertenece a la web normal
                baseUrl = this.isLocalhost 
                    ? 'http://localhost/amfpro-web-2026/public/ArchivosSistema/Afiliados/'
                    : 'https://deployment.amfpro.mx/ArchivosSistema/Afiliados/';
            }

            return `${baseUrl}${this.afiliado.nui}/${nombreArchivo}`;
        },

        // MANEJO LIMPIO DEL MODAL (Abriendo)
        abrirModalEdicion() {
            this.afiliadoEdit = JSON.parse(JSON.stringify(this.afiliado));
            if(this.afiliadoEdit.division) {
                this.listaEquipos(this.afiliadoEdit.division, false);
            }
            if (window.jQuery) {
                window.jQuery('#modalEditarPerfil').modal('show');
            }
        },

        // MANEJO LIMPIO DEL MODAL (Cerrando de raíz)
        cerrarModal() {
            if (window.jQuery) {
                window.jQuery('#modalEditarPerfil').modal('hide');
            }
            setTimeout(() => {
                const backdrops = document.querySelectorAll('.modal-backdrop');
                backdrops.forEach(bg => bg.remove());
                document.body.classList.remove('modal-open');
                document.body.style.paddingRight = '';
            }, 300);
        },

        mostrarError(mensaje) {
            if (this.$toasted) {
                this.$toasted.show(mensaje, { type: 'error', position: 'top-right', duration: 4500 });
            } else if (window.toastr) {
                window.toastr.error(mensaje);
            } else {
                alert(mensaje);
            }
        },

        mostrarExito(mensaje) {
            if (this.$toasted) {
                this.$toasted.show(mensaje, { type: 'success', position: 'top-right', duration: 3000 });
            } else if (window.toastr) {
                window.toastr.success(mensaje);
            } else {
                alert(mensaje);
            }
        },

        listaEquipos(division, limpiarFields = true) {
            if (limpiarFields) {
                this.afiliadoEdit.club = "";
                this.afiliadoEdit.categoria = "";
            }

            this.es_otro = (division === "Otro");

            if (!division || division === "") {
                this.selectDisabled = true;
                this.selectDisabled2 = true;
                this.muestra_categoria = false;
                return;
            } 
            
            let divisionesLigaMX = ['Sub 13', 'Sub 14', 'Sub 15', 'Sub 16', 'Sub 17', 'Sub 18', 'Sub 19', 'Sub 20', 'Sub 23'];
            let nuevaDiv = divisionesLigaMX.includes(division) ? 'Liga MX' : division;

            axios.post('registro/devuelve-equipos', { nuevaDiv: nuevaDiv })
                .then(res => {
                    this.lista_equipos = res.data;
                    this.selectDisabled = false;
                })
                .catch(error => console.error("Error al obtener equipos:", error));

            if (["Liga Expansión MX", "Liga Premier", "Liga TDP", "Otro"].includes(division)) {
                this.selectDisabled2 = true;
                if (limpiarFields) this.afiliadoEdit.categoria = '';
                this.muestra_categoria = false;
            } else {
                this.selectDisabled2 = false;
                this.muestra_categoria = true;
            }

            if (division === "Otro") {
                this.selectDisabled = true;
                this.selectDisabled2 = true;
                if (limpiarFields) this.afiliadoEdit.club = 'Otro'; 
                this.muestra_categoria = false;
            }
        },

        loadAfiliadoData() {
            axios.get('afiliado/datos')
                .then(response => { this.afiliado = response.data; })
                .catch(error => console.error('Error al cargar los datos:', error));
        },

        uploadImage(event, tipo) {
            const file = event.target.files[0];
            if (!file) return;

            if (!file.type.match('image.*')) {
                this.mostrarError('Por favor selecciona un archivo de imagen válido');
                return;
            }

            let formData = new FormData();
            formData.append('archivo', file);
            formData.append('tipo', tipo);
            formData.append('nui', this.afiliado.nui);
            formData.append('id_afi', this.afiliado.id_afi);

            this.verloading = true;

            axios.post('afiliado/update-foto', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(() => {
                this.verloading = false;
                this.mostrarExito('¡Imagen actualizada con éxito!');
                this.loadAfiliadoData(); 
            })
            .catch(() => {
                this.verloading = false;
                this.mostrarError('Error al procesar la imagen en el servidor.');
            });
        },

        updateAfiliado() {
            const edicion = this.afiliadoEdit;

            let faltantes = [];
            if (!edicion.sexo) faltantes.push('Sexo');
            if (!edicion.escolaridad) faltantes.push('Escolaridad');
            if (!edicion.calle) faltantes.push('Domicilio');
            if (!edicion.celular) faltantes.push('Celular');
            if (!edicion.division) faltantes.push('División');
            if (!edicion.club) faltantes.push('Club Actual');

            if (faltantes.length > 0) {
                this.mostrarError('Campos obligatorios faltantes: ' + faltantes.join(', '));
                return; 
            }

            if (this.muestra_categoria && !edicion.categoria) {
                this.mostrarError('Por favor selecciona una categoría deportiva.');
                return;
            }

            this.verloading = true;
            
            axios.post(`afiliado/update/${edicion.id_afi}`, edicion)
                .then(response => {
                    this.verloading = false;
                    this.cerrarModal(); // Llamamos al limpiador
                    this.mostrarExito('¡Información actualizada correctamente!');
                    this.loadAfiliadoData(); 
                })
                .catch(error => {
                    this.verloading = false;
                    let msg = error.response?.data?.message || 'Hubo un error interno al guardar los cambios en el servidor.';
                    this.mostrarError(msg);
                });
        }
    },
}
</script>

<style lang="scss" scoped>
@use "sass:color";
/* --- ESTILOS DEL HEADER (Landing Page) --- */
.header-main {
  .hash-tag { font-size: 0.65rem; }
  .logo-header { height: 40px; object-fit: contain; }
  .social-nav { width: 25px; height: 25px; cursor: pointer; transition: transform 0.2s; &:hover { transform: scale(1.1); } }
  @media (min-width: 768px) {
    .hash-tag { font-size: 0.875rem; }
    .logo-header { height: 50px; }
    .social-nav { width: 30px; height: 30px; margin-left: 5px; }
  }
}

/* --- ESTILOS GENERALES Y ESTRUCTURA --- */
.dashboard-wrapper {
  background-color: #f1f5f9;
  min-height: 100vh;
  padding-bottom: 3rem;
}

.bg-light-gray { background-color: #f8fafc; }
.amf-green-text-2 { color: #3e9452; }
.text-shadow { text-shadow: 0px 2px 4px rgba(0,0,0,0.3); }

/* --- TARJETAS PREMIUM --- */
.premium-card {
    border-radius: 20px;
    border: none;
    background: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover { box-shadow: 0 15px 30px rgba(0,0,0,0.06) !important; }
}

.info-hover {
    transition: background 0.3s ease, border-radius 0.3s ease;
    padding: 1rem;
    &:hover { background: #f8fafc; border-radius: 16px; }
}

.border-end-md {
    @media (min-width: 768px) { border-right: 1px dashed #e2e8f0; }
}

/* --- COLORES PASTEL ICONOS --- */
.bg-success-light { background: #dcfce7; }
.bg-primary-light { background: #e0e7ff; }
.bg-warning-light { background: #fef3c7; }

.icon-circle {
    width: 55px; height: 55px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
}

/* --- HERO BANNER (CABECERA PERFIL) --- */
.profile-hero-card {
    border-radius: 24px;
    background: linear-gradient(135deg, #50C026 0%, #2b7038 100%);
    border: none;
    overflow: hidden;
    position: relative;
    
    .hero-bg-pattern {
        position: absolute; inset: 0; opacity: 0.1;
        background-image: radial-gradient(white 1px, transparent 1px);
        background-size: 20px 20px;
    }
}

.avatar-container {
    width: 140px; height: 140px; border-radius: 50%;
    border: 5px solid rgba(255,255,255,0.3);
    position: relative;
    
    .avatar-circle {
        width: 100%; height: 100%; border-radius: 50%;
        .object-cover { object-fit: cover; width: 100%; height: 100%; }
    }
    
    .btn-edit-avatar {
        position: absolute; bottom: 0px; right: 0px;
        width: 42px; height: 42px; border-radius: 50%;
        background: white; border: none; color: #50C026;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        z-index: 10;
        
        &:hover { transform: scale(1.15); background: #f0fdf4; }
        i { font-size: 1.3rem; }
    }
}

.glass-badge {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 8px 16px;
    border-radius: 30px;
    display: flex;
    align-items: center;
}

.btn-premium-edit {
    background: white;
    color: #3e9452 !important;
    border: none;
    transition: all 0.3s;
    &:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15) !important; background: #f8fafc; }
}

/* --- TARJETAS DE CREDENCIALES (ID CARDS) --- */
.id-card-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1.58 / 1; /* Proporción oficial de una tarjeta INE/ID */
    background: #f1f5f9;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e2e8f0;
    
    .id-card-img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Esto evita el espacio blanco, llena toda la tarjeta */
    }
    
    .id-card-empty {
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        color: #94a3b8;
        i { font-size: 4rem; opacity: 0.5; margin-bottom: 10px; }
        span { font-weight: bold; letter-spacing: 0.5px; }
    }
    
    .id-card-overlay {
        position: absolute; inset: 0;
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        display: flex; align-items: center; justify-content: center;
        opacity: 0; transition: opacity 0.3s ease;
        
        .btn { transition: transform 0.2s; &:hover { transform: scale(1.05); } }
    }
    
    &:hover .id-card-overlay { opacity: 1; }
}

/* --- MODAL Y FORMULARIOS (COMPACT FLOATING) --- */
.premium-modal { border-radius: 20px; }

.hover-opacity-100 { transition: opacity 0.3s; &:hover { opacity: 1 !important; } }
.transition-all { transition: all 0.3s; }

.compact-floating {
  .form-control, .form-select {
    height: calc(3.5rem + 2px); 
    padding: 1rem 0.75rem 0.25rem 0.75rem;
    border-radius: 12px;
    border: 1px solid #cbd5e1;
    background: #ffffff;
    font-size: 0.95rem;
    color: #334155;
    font-weight: 500;
    
    &:focus { border-color: #50c026; box-shadow: 0 0 0 4px rgba(80, 192, 38, 0.1); }
    &:disabled { background: #e2e8f0; opacity: 0.8; }
  }
  
  label { 
    padding: 0.8rem 0.75rem; 
    color: #64748b; 
    font-size: 0.85rem; 
    font-weight: 600;
  }
}

.btn-premium-save {
    background: linear-gradient(135deg, #50c026 0%, #3e9452 100%);
    color: white; border: none; font-weight: bold; transition: all 0.3s;
    &:hover { transform: translateY(-2px); color: white; box-shadow: 0 8px 15px rgba(80, 192, 38, 0.3) !important; filter: brightness(1.05); }
}

/* ===================================================
   LOADING SPINNER (Original intacto)
   =================================================== */
@mixin transform($transform) { -webkit-transform: $transform; -moz-transform: $transform; transform: $transform; }
@mixin animation($animation) { -webkit-animation: $animation; -moz-animation: $animation; animation: $animation; }
@mixin keyframes($name, $name1) {
  @-webkit-keyframes #{$name} { @content; }
  @-moz-keyframes #{$name} { @content; }
  @-ms-keyframes #{$name} { @content; }
  @keyframes #{$name} { @content; }
}
@mixin opacity($opacity) { -webkit-opacity: $opacity; -moz-opacity: $opacity; opacity: $opacity; }
@mixin border-radius($radius) { -webkit-border-radius: $radius; -moz-border-radius: $radius; border-radius: $radius; }

$size: 50px;
$primary-color: green;

.cube-folding {
  width: $size; height: $size; display: inline-block; background: transparent;
  @include transform(rotate(45deg)); font-size: 0;
  span {
    position: relative; width: $size * 0.5; height: $size * 0.5; @include transform(scale(1.1)); display: inline-block;
    &::before {
      content: ""; background-color: $primary-color; position: absolute; left: 0; top: 0; display: block;
      width: $size * 0.5; height: $size * 0.5; transform-origin: 100% 100%;
      @include animation(folding 2.5s infinite linear both);
    }
  }
  .leaf2 { @include transform(rotateZ(90deg) scale(1.1)); &::before { animation-delay: 0.3s; background-color: color.adjust($primary-color, $lightness: -5%); } }
  .leaf3 { @include transform(rotateZ(270deg) scale(1.1)); &::before { animation-delay: 0.9s; background-color: color.adjust($primary-color, $lightness: -5%); } }
  .leaf4 { @include transform(rotateZ(180deg) scale(1.1)); &::before { animation-delay: 0.6s; background-color: color.adjust($primary-color, $lightness: -10%); } }
}

@include keyframes(folding, folding animation) {
  0%, 10% { @include transform(perspective(140px) rotateX(-180deg)); @include opacity(0); }
  25%, 75% { @include transform(perspective(140px) rotateX(0deg)); @include opacity(1); }
  90%, 100% { @include transform(perspective(140px) rotateY(180deg)); @include opacity(0); }
}

.cube-wrapper {
  position: fixed; left: 50%; top: 50%; margin-top: -$size; margin-left: -$size;
  width: $size * 2; height: $size * 2; text-align: center;
  &:after {
    content: ""; position: absolute; left: 0; right: 0; bottom: -20px; margin: auto;
    width: $size * 1.8; height: 6px; z-index: 1; filter: blur(2px); @include border-radius(100%);
    @include animation(shadow 0.5s ease infinite alternate);
  }
  .loadingtexto {
    font-size: 15px; letter-spacing: 0.1em; display: block; color: white; position: relative; top: $size * 0.5; z-index: 2;
    @include animation(text 0.5s ease infinite alternate);
  }
}
@include keyframes(text, text animation) { 100% { top: ($size * 0.5) + 10; } }
@include keyframes(shadow, shadow animation) { 100% { bottom: -18px; width: $size * 2; } }

.loadingprincipal {
  position: fixed; z-index: 10050; height: 2em; overflow: visible;
  margin: auto; top: 0; left: 0; bottom: 0; right: 0;
  &:before { content: ''; display: block; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.6); }
}
.btn-logout-premium {
    background: rgba(239, 68, 68, 0.08);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.2);
    padding: 8px 18px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 0.85rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    i { font-size: 1.2rem; }

    &:hover {
        background: #ef4444;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(239, 68, 68, 0.3);
        border-color: #ef4444;
    }

    &:active { transform: translateY(0); }
}
</style>