<template>
  <div class="registro-page-wrapper">
    
    <header class="header-main border-bottom fixed-top bg-white">
      <div class="container-fluid py-2 px-3 px-lg-5">
        <div class="row align-items-center flex-nowrap m-0">
          
          <div class="col-4 text-start px-0">
            <a href="" class="text-decoration-none">
              <div class="hash-tag fw-bold text-secondary text-truncate">#UnidosSomosMásFuertes</div>
            </a>
          </div>
          
          <div class="col-4 text-center px-0">
            <a href="">
              <img src="recursos/logo.png" alt="Logo AMFPRO" class="logo-header">
            </a>
          </div>
          
          <div class="col-4 text-end d-flex justify-content-end gap-2 px-0">
            <img src="recursos/x.png" alt="X" class="social-nav">
            <img src="recursos/facebook.png" alt="FB" class="social-nav">
            <img src="recursos/instagram.png" alt="IG" class="social-nav">
          </div>

        </div>
      </div>
    </header>

    <div class="container py-5 mt-5 pt-4">
      <div class="registration-card shadow-lg mx-auto">
        
        <div class="registration-header">
          <div class="d-flex align-items-center gap-3">
            <div class="icon-brand-box shadow-sm">
              <i class="material-icons">how_to_reg</i>
            </div>
            <div>
              <h4 class="fw-bolder amf-green-text-2 mb-0" style="letter-spacing: -0.5px;">REGISTRO DE ASOCIADO</h4>
              <span class="text-muted" style="font-size: 0.8rem;">Únete a la red de futbolistas profesionales de México</span>
            </div>
          </div>
        </div>

        <div class="registration-body bg-light-gray">
          <form @submit.prevent="createAfiliado" enctype="multipart/form-data" novalidate>
            <div class="form-section shadow-sm mb-3">
              <h6 class="section-title"><i class="material-icons text-success">badge</i> Información Personal</h6>
              
              <div class="row g-2">
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="text" class="form-control" :class="{ 'input-error': afiliado.nombre == '' && afiliadoError.nombre }" v-model="afiliado.nombre" id="nombres" placeholder="Nombre(s)" autocomplete="off">
                    <label for="nombres">Nombre(s) *</label>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="text" class="form-control" :class="{ 'input-error': afiliado.apellido_pat == '' && afiliadoError.apellido_pat }" v-model="afiliado.apellido_pat" id="paterno" placeholder="Apellido paterno" autocomplete="off">
                    <label for="paterno">Apellido paterno *</label>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="text" class="form-control" :class="{ 'input-error': afiliado.apellido_mat == '' && afiliadoError.apellido_mat }" v-model="afiliado.apellido_mat" id="materno" placeholder="Apellido materno" autocomplete="off">
                    <label for="materno">Apellido materno *</label>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="form-floating compact-floating">
                    <select class="form-select" :class="{ 'input-error': afiliado.sexo == '' && afiliadoError.sexo }" v-model="afiliado.sexo" id="sexo">
                      <option value="">Seleccionar</option>
                      <option value="Femenino">Femenino</option>
                      <option value="Masculino">Masculino</option>
                    </select>
                    <label for="sexo">Sexo *</label>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="form-floating compact-floating">
                    <input type="date" class="form-control" :class="{ 'input-error': afiliado.nacimiento == '' && afiliadoError.nacimiento }" v-model="afiliado.nacimiento" id="nacimiento" autocomplete="off">
                    <label for="nacimiento">Nacimiento *</label>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="form-floating compact-floating">
                    <select class="form-select" :class="{ 'input-error': afiliado.nacionalidad == '' && afiliadoError.nacionalidad }" v-model="afiliado.nacionalidad" @change="esMexicano(afiliado.nacionalidad)" id="pais">
                      <option value="">Seleccionar</option>
                      <option value=" Afganistán"> Afganistán</option>
                      <option value=" Albania"> Albania</option>
                      <option value=" Alemania"> Alemania</option>
                      <option value=" Argentina"> Argentina</option>
                      <option value=" Australia"> Australia</option>
                      <option value=" Brasil"> Brasil</option>
                      <option value=" Canadá"> Canadá</option>
                      <option value=" Chile"> Chile</option>
                      <option value=" Colombia"> Colombia</option>
                      <option value=" Costa Rica"> Costa Rica</option>
                      <option value=" Cuba"> Cuba</option>
                      <option value=" Ecuador"> Ecuador</option>
                      <option value=" El Salvador"> El Salvador</option>
                      <option value=" España"> España</option>
                      <option value=" Estados Unidos"> Estados Unidos</option>
                      <option value=" Francia"> Francia</option>
                      <option value=" Guatemala"> Guatemala</option>
                      <option value=" Honduras"> Honduras</option>
                      <option value=" Italia"> Italia</option>
                      <option value=" México"> México</option>
                      <option value=" Nicaragua"> Nicaragua</option>
                      <option value=" Panamá"> Panamá</option>
                      <option value=" Paraguay"> Paraguay</option>
                      <option value=" Perú"> Perú</option>
                      <option value=" Reino Unido"> Reino Unido</option>
                      <option value=" Uruguay"> Uruguay</option>
                      <option value=" Venezuela"> Venezuela</option>
                      <option value=" Otro"> Otro</option>
                    </select>
                    <label for="pais">País *</label>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="form-floating compact-floating">
                    <select class="form-select" :class="{ 'input-error': afiliado.escolaridad == '' && afiliadoError.escolaridad }" v-model="afiliado.escolaridad" ref="escolaridadRef" id="escolaridad">
                      <option value="">Seleccionar</option>
                      <option value="Básico">Básico</option>
                      <option value="Media Superior">Media Superior</option>
                      <option value="Superior">Superior</option>
                    </select>
                    <label for="escolaridad">Escolaridad *</label>
                  </div>
                </div>

                <div class="col-12 col-md-12">
                  <div class="form-floating compact-floating">
                    <input type="text" class="form-control" :class="{ 'input-error': afiliado.calle == '' && afiliadoError.calle }" v-model="afiliado.calle" id="domicilio" placeholder="Domicilio" autocomplete="off">
                    <label for="domicilio">Domicilio (Calle, número, municipo, estado y C.P) *</label>
                  </div>
                </div>

                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="email" class="form-control" :class="{ 'input-error': afiliado.mail == '' && afiliadoError.mail }" v-model="afiliado.mail" id="email" placeholder="Email" autocomplete="off">
                    <label for="email">Correo Electrónico *</label>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="password" class="form-control" :class="{ 'input-error': afiliado.password == '' && afiliadoError.password }" v-model="afiliado.password" id="pass" placeholder="Contraseña" autocomplete="new-password">
                    <label for="pass">Contraseña (Mín. 8) *</label>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="password" class="form-control" :class="{ 'input-error': (afiliado.password_confirmation == '' || afiliado.password !== afiliado.password_confirmation) && afiliadoError.password_confirmation }" v-model="afiliado.password_confirmation" id="pass2" placeholder="Confirmar" autocomplete="new-password">
                    <label for="pass2">Confirmar Contraseña *</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-section shadow-sm mb-3">
              <h6 class="section-title"><i class="material-icons text-primary">sports_soccer</i> Perfil Deportivo</h6>
              <div class="row g-2">
                
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating position-relative">
                    <input type="text" class="form-control" :class="{ 'input-error': afiliado.curp == '' && afiliadoError.curp }" v-model="afiliado.curp" id="curp" placeholder="CURP" autocomplete="off" maxlength="18" :disabled="mexicano" @input="convertirAMayusculas">
                    <label for="curp">CURP *</label>
                    <a href="https://www.gob.mx/curp/" target="_blank" class="position-absolute end-0 top-50 translate-middle-y me-3 x-small text-decoration-none text-primary fw-bold">¿Buscar?</a>
                  </div>
                </div>
                
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="text" class="form-control" :class="{ 'input-error': afiliado.nui == '' && afiliadoError.nui }" v-model="afiliado.nui" @change="ExisteNUI(afiliado.nui)" id="nui" placeholder="NUI" autocomplete="off" maxlength="7">
                    <label for="nui">NUI (Registro FMF) *</label>
                  </div>
                  <small class="text-muted d-block mt-1 x-small" style="line-height:1;">
                    Consulta tu NUI: <a href="http://ligamx.net/cancha/bsqdavnzd" target="_blank">Varonil</a> | <a href="http://www.ligafemenil.mx/cancha/bsqdavnzd" target="_blank">Femenil</a>
                  </small>
                </div>

                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="text" class="form-control" :class="{ 'input-error': afiliado.celular == '' && afiliadoError.celular }" v-model="afiliado.celular" id="celular" placeholder="Celular" autocomplete="off" maxlength="11">
                    <label for="celular">Teléfono Celular *</label>
                  </div>
                </div>

                <div :class="muestra_categoria ? 'col-12 col-md-4' : 'col-12 col-md-6'">
                  <div class="form-floating compact-floating">
                    <select class="form-select" :class="{ 'input-error': afiliado.division == '' && afiliadoError.division }" v-model="afiliado.division" @change="listaEquipos(afiliado.division)" id="division">
                      <option value="">Seleccionar</option>
                      <option value="Liga MX Femenil">Liga MX Femenil</option>
                      <option value="Liga MX">Liga MX</option>
                      <option value="Liga Expansión MX">Liga Expansión MX</option>
                      <option value="Liga Premier">Liga Premier</option>
                      <option value="Liga TDP">Liga TDP</option>
                      <option value="Otro">Otro / Extranjero</option>
                    </select>
                    <label for="division">División *</label>
                  </div>
                </div>

                <div :class="muestra_categoria ? 'col-12 col-md-4' : 'col-12 col-md-6'">
                  <div class="form-floating compact-floating">
                    <select class="form-select" :class="{ 'input-error': afiliado.club == '' && afiliadoError.club }" v-model="afiliado.club" :disabled="selectDisabled" id="club">
                      <option value="">Seleccionar</option>
                      <option v-for="(le, index) in lista_equipos" :key="index" :value="le.nombre">{{le.nombre}}</option>
                    </select>
                    <label for="club">Club *</label>
                  </div>
                </div>

                <div class="col-12 col-md-4" v-show="muestra_categoria">
                  <div class="form-floating compact-floating">
                    <select class="form-select" :class="{ 'input-error': afiliado.categoria == '' && afiliadoError.categoria }" v-model="afiliado.categoria" :disabled="selectDisabled2" id="categoria">
                      <option value="">Seleccionar</option>
                      <option value="Liga MX Femenil" v-show="afiliado.division == 'Liga MX Femenil'">Liga MX Femenil</option>
                      <option value="Liga MX" v-show="afiliado.division == 'Liga MX'">Liga MX</option>
                      <option value="Sub 23" v-show="afiliado.division == 'Liga MX'">Sub 23</option>
                      <option value="Sub 20" v-show="afiliado.division == 'Liga MX'">Sub 20</option>
                      <option value="Sub 19" v-show="afiliado.division == 'Liga MX Femenil'">Sub 19</option>                   
                      <option value="Sub 18">Sub 18</option>
                      <option value="Sub 17">Sub 17</option>
                      <option value="Sub 16" v-show="afiliado.division == 'Liga MX'">Sub 16</option>
                      <option value="Sub 15" v-show="afiliado.division == 'Liga MX'">Sub 15</option>
                      <option value="Sub 14" v-show="afiliado.division == 'Liga MX'">Sub 14</option>
                      <option value="Sub 13" v-show="afiliado.division == 'Liga MX'">Sub 13</option>
                    </select>
                    <label for="categoria">Categoría *</label>
                  </div>
                </div>

                <div :class="muestra_tipo ? 'col-12 col-md-6' : 'col-12 col-md-12'">
                  <div class="form-floating compact-floating">
                    <select class="form-select" :class="{ 'input-error': afiliado.seleccion == '' && afiliadoError.seleccion }" v-model="afiliado.seleccion" @change="muestraSelectTIpo(afiliado.seleccion)" id="seleccion">
                      <option value="">Seleccionar</option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                    <label for="seleccion">Selección Nacional *</label>
                  </div>
                </div>

                <div class="col-12 col-md-6" v-show="muestra_tipo">
                  <div class="form-floating compact-floating">
                    <select class="form-select" :class="{ 'input-error': afiliado.tipo_seleccion == '' && afiliadoError.tipo_seleccion }" v-model="afiliado.tipo_seleccion" id="tipo_seleccion">
                      <option value="">Seleccionar</option>
                      <option value="Mayor">Mayor</option>
                      <option value="Inferiores">Inferiores</option>
                    </select>
                    <label for="tipo_seleccion">Tipo de Selección *</label>
                  </div>
                </div>

              </div>
            </div>

            <div class="row g-3 mb-3">
              <div class="col-md-7">
                <div class="form-section shadow-sm h-100 mb-0 p-3">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="mb-0 fw-bold fs-6"><i class="material-icons align-middle text-warning me-1">contact_page</i> Identificación (INE/Pasaporte)</h6>
                  </div>
                  <p class="x-small text-muted mb-2 line-height-1">Menores: credencial escolar o permiso. JPEG, JPG o PNG.</p>
                  <div class="d-flex gap-2">
                    <div class="custom-file-upload flex-fill">
                      <input type="file" id="ine_frente" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefrente" @change="ineFrente()">
                      <label for="ine_frente" class="file-label" :class="{ 'input-error': afiliado.pdf == '' && afiliadoError.pdf }">
                        <i class="material-icons">upload_file</i> 
                        {{ nombre_archivo_frente !== 'Examinar...' ? 'Frente Listo ✓' : 'Subir Frente' }}
                      </label>
                    </div>
                    <div class="custom-file-upload flex-fill">
                      <input type="file" id="ine_atras" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="fileatras" @change="ineAtras()">
                      <label for="ine_atras" class="file-label" :class="{ 'input-error': afiliado.pdf2 == '' && afiliadoError.pdf2 }">
                        <i class="material-icons">upload_file</i> 
                        {{ nombre_archivo_atras !== 'Examinar...' ? 'Atrás Listo ✓' : 'Subir Atrás' }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-md-5">
                <div class="form-section shadow-sm h-100 mb-0 p-3">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="mb-0 fw-bold fs-6"><i class="material-icons align-middle text-info me-1">account_box</i> Fotografía Reciente</h6>
                  </div>
                  <p class="x-small text-muted mb-2 line-height-1">Fondo blanco, tipo credencial. JPEG, JPG o PNG.</p>
                  <div class="custom-file-upload w-100">
                    <input type="file" id="foto_perfil" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefoto" @change="ineFoto()">
                    <label for="foto_perfil" class="file-label" :class="{ 'input-error': afiliado.foto === '' && afiliadoError.foto }">
                      <i class="material-icons">add_a_photo</i> 
                      {{ nombre_archivo_foto !== 'Examinar...' ? 'Foto Lista ✓' : 'Cargar Fotografía' }}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center bg-white p-3 rounded-4 shadow-sm border border-light mt-4">
              <div class="legal-compact me-md-3 mb-3 mb-md-0">
                <div class="form-check custom-check mb-1">
                  <input class="form-check-input" :class="{ 'input-error': !afiliado.terminos && afiliadoError.terminos }" type="checkbox" v-model="afiliado.terminos" id="check1">
                  <label class="form-check-label x-small text-muted" for="check1">
                    Solicito mi afiliación como Asociado Jugador de la AMF PRO, A.C., aceptando cumplir sus disposiciones legales y estatutarias.
                  </label>
                </div>
                <div class="form-check custom-check">
                  <input class="form-check-input" :class="{ 'input-error': !afiliado.aviso && afiliadoError.aviso }" type="checkbox" v-model="afiliado.aviso" id="check2">
                  <label class="form-check-label x-small text-muted" for="check2">
                    Acepto el <a href="#" data-toggle="modal" data-target="#avisoprivacidad" class="fw-bold text-success text-decoration-none">Aviso de Privacidad y Política de Protección de Datos</a>.
                  </label>
                </div>
              </div>
              
              <div class="text-end flex-shrink-0">
                <button type="submit" class="btn btn-register-premium w-100 shadow-lg">
                  <i class="material-icons align-middle me-1">check_circle</i> COMPLETAR
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
    
    <div class="loadingprincipal" v-show="verloading">
      <div class="cube-wrapper">
        <div class="cube-folding">
          <span class="leaf1"></span><span class="leaf2"></span>
          <span class="leaf3"></span><span class="leaf4"></span>
        </div>
        <span class="loadingtexto" data-name="Loading">Guardando</span>
      </div>
    </div>

    <div class="modal fade" id="avisoprivacidad" tabindex="-1" role="dialog" aria-hidden="true" style="z-index: 10000;">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header" style="background-color: #50C026;">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style="color: white;">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div align="center" class="p-5">
                <img src="estilos_pagina/assets/images/LOGO_AMFpro_color.svg" width="200px" alt="">
                <h3><strong>AM FUT PRO, A.C. <br>Aviso de Privacidad del Registro de Afiliados</strong></h3>
              </div>
              <p>AM FUT PRO, A.C., es responsable del tratamiento de sus datos personales...</p>
              <div align="right"><p>Fecha de última actualización: 26 de Febrero de 2024.</p></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PaginaRegistro',
  mounted() {
    toastr.options = {
      "closeButton": true,
      "progressBar": true,
      "positionClass": "toast-top-right",
      "timeOut": "4000",
    };
  },
  data() {
    return {
      muestra_categoria: false,
      muestra_tipo: false,
      verloading: false,
      afiliado: {
        nombre: "", apellido_pat: "", apellido_mat: "", sexo: "",
        nacionalidad: "", escolaridad: "", mail: "", curp: "",
        nacimiento: "", calle: "", celular: "", nui: "",
        division: "", club: "", categoria: "", seleccion: "",
        tipo_seleccion: "", terminos: false, aviso: false,
        pdf: "", pdf2: "", foto: "", password: "",
        password_confirmation: "", fec_registro: ''
      },
      lista_equipos: [],
      selectDisabled: true,
      selectDisabled2: true,
      mexicano: true,
      afiliadoError: {
        nombre: false, apellido_pat: false, apellido_mat: false, sexo: false,
        nacionalidad: false, escolaridad: false, mail: false, curp: false,
        nacimiento: false, calle: false, celular: false, nui: false,
        division: false, club: false, categoria: false, seleccion: false,
        tipo_seleccion: false, terminos: false, aviso: false, pdf: false,
        pdf2: false, foto: false, password: false, password_confirmation: false
      },
      exisNui: [],
      nombre_archivo_frente: 'Examinar...',
      nombre_archivo_atras: 'Examinar...',
      nombre_archivo_foto: 'Examinar...',
      nombre_archivo_permiso: 'Examinar...'
    }
  },
  methods: {
    listaEquipos(division) {
      this.afiliado.club = "";
      this.afiliado.categoria = "";
      if (division == "") {
        this.selectDisabled = true;
        this.selectDisabled2 = true;
        this.muestra_categoria = false;
      } else {
        let nuevaDiv = division;
        if (['Sub 13', 'Sub 14', 'Sub 15', 'Sub 16', 'Sub 17', 'Sub 18', 'Sub 19', 'Sub 20', 'Sub 23'].includes(division)) {
          nuevaDiv = 'Liga MX';
        }
        axios.post('registro/devuelve-equipos', { nuevaDiv: nuevaDiv })
          .then(res => { this.lista_equipos = res.data; })
          .catch(error => { console.error("Error al obtener los equipos:", error); });
        
        this.selectDisabled = false;
        if (division == "Liga Expansión MX" || division == "Liga Premier" || division == "Liga TDP") {
          this.selectDisabled2 = true;
          this.afiliado.categoria = '';
          this.muestra_categoria = false;
        } else {
          this.selectDisabled2 = false;
          this.muestra_categoria = true;
        }
        if (division == "Otro") {
          this.selectDisabled = true;
          this.selectDisabled2 = true;
          this.afiliado.club = 'Otro';
          this.muestra_categoria = false;
        }
      }
    },
    ineFrente() {
      this.file = this.$refs.filefrente.files[0];
      if(!this.file) return;
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(this.file.type)) {
        swal('Solo se permiten imágenes en formato JPEG, JPG o PNG', { position: 'center', icon: 'error', buttons: false, timer: 1600 });
        this.$refs.filefrente.value = null; return;
      }
      this.afiliado.pdf = this.file;
      this.nombre_archivo_frente = this.file.name;
    },
    ineAtras() {
      this.file = this.$refs.fileatras.files[0];
      if(!this.file) return;
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(this.file.type)) {
        swal('Solo se permiten imágenes en formato JPEG, JPG o PNG', { position: 'center', icon: 'error', buttons: false, timer: 1600 });
        this.$refs.fileatras.value = null; return;
      }
      this.afiliado.pdf2 = this.file;
      this.nombre_archivo_atras = this.file.name;
    },
    ineFoto() {
      this.file = this.$refs.filefoto.files[0];
      if(!this.file) return;
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(this.file.type)) {
        swal('Solo se permiten imágenes en formato JPEG, JPG o PNG', { position: 'center', icon: 'error', buttons: false, timer: 1600 });
        this.$refs.filefoto.value = null; return;
      }
      this.afiliado.foto = this.file;
      this.nombre_archivo_foto = this.file.name;
    },
    createAfiliado() {
      if (
        this.afiliado.nombre == "" || this.afiliado.apellido_pat == "" || this.afiliado.apellido_mat == "" ||
        this.afiliado.sexo == "" || this.afiliado.nacionalidad == "" || this.afiliado.escolaridad == "" ||
        this.afiliado.mail == "" || this.afiliado.password == "" || this.afiliado.password.length < 8 ||
        this.afiliado.password !== this.afiliado.password_confirmation || this.afiliado.curp == "" ||
        this.afiliado.nacimiento == "" || this.afiliado.calle == "" || this.afiliado.celular == "" ||
        this.afiliado.nui == "" || this.afiliado.division == "" ||
        ((this.afiliado.division == "Liga MX" || this.afiliado.division == "Liga MX Femenil") && this.afiliado.categoria == "") ||
        this.afiliado.club == "" || this.afiliado.seleccion == "" ||
        (this.afiliado.seleccion == "Si" && this.afiliado.tipo_seleccion == "") ||
        !this.validarCaracteresEspecialesNUI(this.afiliado.nui) ||
        !this.validarCaracteresEspecialesTelefono(this.afiliado.celular) ||
        !this.validarFormatoCorreo(this.afiliado.mail) ||
        !this.validarCaracteresEspeciales(this.afiliado.nombre) ||
        !this.validarCaracteresEspeciales(this.afiliado.apellido_pat) ||
        !this.validarCaracteresEspeciales(this.afiliado.apellido_mat) ||
        this.afiliado.pdf == "" || this.afiliado.pdf2 == "" || this.afiliado.foto == "" ||
        !this.afiliado.terminos || !this.afiliado.aviso
      ) {
        if (this.afiliado.nombre == "") { toastr.error('Ingresar nombre'); this.afiliadoError.nombre = true; } 
        else if(!this.validarCaracteresEspeciales(this.afiliado.nombre)) { toastr.error('El nombre no debe contener números o algunos caracteres especiales'); this.afiliadoError.nombre = true; }
        if (this.afiliado.apellido_pat == "") { toastr.error('Ingresar apellido paterno'); this.afiliadoError.apellido_pat = true; } 
        else if(!this.validarCaracteresEspeciales(this.afiliado.apellido_pat)) { toastr.error('El apellido paterno no debe contener números'); this.afiliadoError.apellido_pat = true; }
        if (this.afiliado.apellido_mat == "") { toastr.error('Ingresar apellido materno'); this.afiliadoError.apellido_mat = true; } 
        else if(!this.validarCaracteresEspeciales(this.afiliado.apellido_mat)) { toastr.error('El apellido materno no debe contener números'); this.afiliadoError.apellido_mat = true; }
        if (this.afiliado.sexo == "") { toastr.error('Seleccionar sexo'); this.afiliadoError.sexo = true; }
        if (this.afiliado.nacionalidad == "") { toastr.error('Seleccionar país'); this.afiliadoError.nacionalidad = true; }
        if (this.afiliado.escolaridad == "") { toastr.error('Seleccionar grado escolar'); this.afiliadoError.escolaridad = true; }
        if (this.afiliado.mail == "") { toastr.error('Ingresar email'); this.afiliadoError.mail = true; } 
        else if(!this.validarFormatoCorreo(this.afiliado.mail)) { toastr.error('Ingrese un correo electrónico válido'); this.afiliadoError.mail = true; }
        if (this.afiliado.password == "") { toastr.error('Ingresa una contraseña'); this.afiliadoError.password = true; } 
        else if (this.afiliado.password.length < 8) { toastr.error('La contraseña debe tener al menos 8 caracteres'); this.afiliadoError.password = true; }
        if (this.afiliado.password !== this.afiliado.password_confirmation) { toastr.error('Las contraseñas no coinciden'); this.afiliadoError.password_confirmation = true; }
        if (this.afiliado.curp == "") { toastr.error('Ingresar curp'); this.afiliadoError.curp = true; }
        if (this.afiliado.nacimiento == "") { toastr.error('Ingresar fecha de nacimiento'); this.afiliadoError.nacimiento = true; }
        if (this.afiliado.calle == "") { toastr.error('Ingresar dirección'); this.afiliadoError.calle = true; }
        if (this.afiliado.celular == "") { toastr.error('Ingresar teléfono celular'); this.afiliadoError.celular = true; } 
        else if(!this.validarCaracteresEspecialesTelefono(this.afiliado.celular)) { toastr.error('Formato incorrecto en celular'); this.afiliadoError.celular = true; }
        if (this.afiliado.nui == "") { toastr.error('Ingresar NUI'); this.afiliadoError.nui = true; } 
        else if(!this.validarCaracteresEspecialesNUI(this.afiliado.nui)) { toastr.error('NUI formato incorrecto'); this.afiliadoError.nui = true; }
        if (this.afiliado.division == "") { toastr.error('Seleccionar división'); this.afiliadoError.division = true; }
        if (this.afiliado.club == "") { toastr.error('Seleccionar club'); this.afiliadoError.club = true; }
        if ((this.afiliado.division === "Liga MX" || this.afiliado.division === "Liga MX Femenil") && this.afiliado.categoria === "") { toastr.error('Seleccionar una categoría'); this.afiliadoError.categoria = true; }
        if (this.afiliado.seleccion == "") { toastr.error('Seleccionar opcion de selección'); this.afiliadoError.seleccion = true; }
        if (this.afiliado.seleccion == "Si" && this.afiliado.tipo_seleccion == "") { toastr.error('Seleccionar tipo de selección'); this.afiliadoError.tipo_seleccion = true; }
        if (this.afiliado.pdf == "") { toastr.error('Adjuntar archivo frente'); this.afiliadoError.pdf = true; }
        if (this.afiliado.pdf2 == "") { toastr.error('Adjuntar archivo atrás'); this.afiliadoError.pdf2 = true; }
        if (this.afiliado.foto == "") { toastr.error('Adjuntar archivo foto'); this.afiliadoError.foto = true; }
        if (this.afiliado.terminos == false) { toastr.error('Aceptar terminos'); this.afiliadoError.terminos = true; }
        if (this.afiliado.aviso == false) { toastr.error('Aceptar Aviso de Privacidad'); this.afiliadoError.aviso = true; }
        return;
      }
      
      this.verloading = true;
      const fechaActual = new Date();
      const anio = fechaActual.getFullYear();
      const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
      const dia = String(fechaActual.getDate()).padStart(2, '0');
      
      this.afiliado.fec_registro = `${anio}-${mes}-${dia}`;

      let formData = new FormData();
      formData.append('nombre', this.afiliado.nombre);
      formData.append('apellido_pat', this.afiliado.apellido_pat);
      formData.append('apellido_mat', this.afiliado.apellido_mat);
      formData.append('sexo', this.afiliado.sexo);
      formData.append('nacionalidad', this.afiliado.nacionalidad);
      formData.append('escolaridad', this.afiliado.escolaridad);
      formData.append('mail', this.afiliado.mail);
      formData.append('password', this.afiliado.password);
      formData.append('password_confirmation', this.afiliado.password_confirmation);
      formData.append('curp', this.afiliado.curp);
      formData.append('nacimiento', this.afiliado.nacimiento);
      formData.append('calle', this.afiliado.calle);
      formData.append('celular', this.afiliado.celular);
      formData.append('nui', this.afiliado.nui);
      formData.append('division', this.afiliado.division);
      formData.append('club', this.afiliado.club);
      formData.append('categoria', this.afiliado.categoria);
      formData.append('seleccion', this.afiliado.seleccion);
      formData.append('tipo_seleccion', this.afiliado.tipo_seleccion);
      formData.append('terminos', this.afiliado.terminos);
      formData.append('aviso', this.afiliado.aviso);
      formData.append('pdf', this.afiliado.pdf);
      formData.append('pdf2', this.afiliado.pdf2);
      formData.append('foto', this.afiliado.foto);
      formData.append('fec_registro', this.afiliado.fec_registro);
      
      axios.post('registro/create', formData).then(res => {
        this.verloading = false;
        Swal.fire({
          title: '¡Registro exitoso!',
          text: 'Tu cuenta ha sido creada e iniciamos tu sesión. Comunícate con el área Jurídica de la AMFPRO para validar tus datos.',
          icon: 'success',
          confirmButtonText: '<i class="material-icons align-middle me-1">person</i> ¡Ir a mi Perfil!',
          buttonsStyling: false,
          backdrop: 'rgba(15, 23, 42, 0.8)',
          customClass: {
            container: 'swal-super-top', 
            popup: 'swal-premium-popup',
            title: 'swal-premium-title',
            htmlContainer: 'swal-premium-text',
            confirmButton: 'btn-swal-premium-success'
          },
          didClose: () => { window.location.href = `perfil`; }
        });
      }).catch(error => {
        this.verloading = false;
        if (error.response) {
          let mensajeError = error.response.data.error || 'Ocurrió un error en el servidor.';
          toastr.error(mensajeError); 
          if (error.response.status === 422) { this.afiliadoError.mail = true; }
        } else {
          toastr.error('Error de conexión. Por favor intenta más tarde.'); 
        }
      });
    },
    esMexicano(nacionalidad) {
      if(nacionalidad == " México"){
        this.mexicano = false;
        this.afiliado.curp = "";
      } else {
        this.mexicano = true;
        this.afiliado.curp = "XEXX010100HMXXXX10";
      }
    },
    validarFormatoCorreo(correo) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo); },
    validarCaracteresEspeciales(texto) { return /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s\-_]+$/.test(texto); },
    validarCaracteresEspecialesTelefono(texto) { return /^\d{10}$/.test(texto); },
    validarCaracteresEspecialesNUI(texto) { return /^[0-9]{1,6}$/.test(texto); },
    ExisteNUI(nui) {
      if(!nui) return;
      axios.get(`registro/existe_nui/${nui}`).then(res => {
        this.exisNui = res.data;
        if(this.exisNui.length != 0){
            Swal.fire({
                icon: 'error',
                title: '¡NUI Registrado!',
                text: 'El NUI que ingresaste ya existe en nuestra base de datos. Verifica el chat para más información.',
                confirmButtonText: '<i class="material-icons align-middle me-1">check_circle</i> Entendido',
                buttonsStyling: false,
                backdrop: 'rgba(15, 23, 42, 0.8)',
                customClass: {
                    container: 'swal-super-top',
                    popup: 'swal-premium-popup',
                    title: 'swal-premium-title',
                    htmlContainer: 'swal-premium-text',
                    confirmButton: 'btn-swal-premium-danger'
                }
            }).then((result) => {
                if (result.isConfirmed || result.isDismissed) {
                    // Limpiamos el formulario, pero ya no emitimos la señal de cerrar
                    this.afiliado = {
                        nombre: "", apellido_pat: "", apellido_mat: "", sexo: "",
                        nacionalidad: "", escolaridad: "", mail: "", curp: "",
                        nacimiento: "", calle: "", celular: "", nui: "",
                        division: "", club: "", categoria: "", seleccion: "",
                        tipo_seleccion: "", terminos: false, aviso: false,
                        pdf: "", pdf2: "", foto: "", password: "",
                        password_confirmation: "", fec_registro: this.hoy
                    };
                    this.lista_equipos = [];
                    this.selectDisabled = true;
                    this.selectDisabled2 = true;
                    this.mexicano = true;
                    this.muestra_tipo = false;
                    this.muestra_categoria = false;
                    this.nombre_archivo_frente = 'Examinar...';
                    this.nombre_archivo_atras = 'Examinar...';
                    this.nombre_archivo_foto = 'Examinar...';
                }
            });
        }
      });
    },
    convertirAMayusculas() { this.afiliado.curp = this.afiliado.curp.toUpperCase(); },
    muestraSelectTIpo(seleccion) {
      if (seleccion == "Si") { this.muestra_tipo = true; } 
      if (seleccion == "No" || seleccion == ""){ this.muestra_tipo = false; this.afiliado.tipo_seleccion = ""; }
    }
  }
}
</script>

<style lang="scss">
@use "sass:color";
/* --- ESTILOS DEL HEADER ORIGINAL --- */
.header-main {
  .hash-tag {
    font-size: 0.65rem; 
  }
  
  .logo-header {
    height: 32px; 
    object-fit: contain;
  }
  
  .social-nav { 
    width: 20px; 
    height: 20px; 
    object-fit: contain; 
    cursor: pointer; 
  }

  @media (min-width: 768px) {
    .hash-tag { 
      font-size: 0.875rem; 
    }
    .logo-header { 
      height: 50px;
    }
    .social-nav { 
      width: 30px; 
      height: 30px; 
      margin-left: 5px;
    }
  }
}

/* --- FONDOS Y ESTRUCTURA DE LA PÁGINA --- */
.registro-page-wrapper {
  background-color: #f8fafc;
  min-height: 100vh;
}

.registration-card {
  width: 100%;
//   max-width: 1000px; 
  background: #f4f7f6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: scaleUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.95) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

/* --- HEADER --- */
.registration-header {
  padding: 30px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  
  .icon-brand-box {
    background: linear-gradient(135deg, #50c026 0%, #3e9452 100%);
    width: 45px; height: 45px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    color: white;
    .material-icons { font-size: 1.6rem; }
  }

  .amf-green-text-2 { color: #2c3e50; }
}

/* --- CUERPO Y SECCIONES --- */
.registration-body {
  padding: 30px;
}

.form-section {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(0,0,0,0.03);
  
  .section-title {
    font-size: 0.95rem;
    font-weight: 800;
    color: #334155;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    i { margin-right: 8px; font-size: 1.3rem; }
  }
}

/* --- COMPACT FLOATING LABELS --- */
.compact-floating {
  .form-control, .form-select {
    height: calc(3rem + 2px); 
    padding: 1rem 0.75rem 0.25rem 0.75rem;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    background: #f8fafc;
    font-size: 0.9rem;
    color: #334155;
    
    &:focus {
      border-color: #50c026;
      box-shadow: 0 0 0 3px rgba(80, 192, 38, 0.1);
      background: #ffffff;
    }
  }
  
  label { 
    padding: 0.6rem 0.75rem; 
    color: #94a3b8; 
    font-size: 0.85rem; 
  }
}

/* MARCAR ERRORES (BORDES ROJOS) */
.input-error {
  border-color: #dc3545 !important;
  background-color: #fff8f8 !important;
}

/* --- CUSTOM FILE UPLOAD --- */
.custom-file-upload {
  position: relative;
  
  .file-hidden {
    position: absolute;
    width: 0.1px; height: 0.1px;
    opacity: 0; overflow: hidden; z-index: -1;
  }
  
  .file-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 10px;
    background: #f8fafc;
    border: 2px dashed #cbd5e1;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    color: #64748b;
    font-size: 0.8rem;
    font-weight: 600;
    
    i { font-size: 1.6rem; color: #94a3b8; margin-bottom: 4px; transition: color 0.2s; }
    
    &:hover {
      background: #f0fdf4;
      border-color: #50c026;
      color: #3e9452;
      i { color: #50c026; transform: translateY(-2px); }
    }
    
    &.input-error {
      border-color: #dc3545 !important;
      color: #dc3545 !important;
      i { color: #dc3545 !important; }
    }
  }
}

/* --- BOTÓN DE REGISTRO --- */
.btn-register-premium {
  background: linear-gradient(to right, #50c026, #3e9452);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 25px;
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(80, 192, 38, 0.3) !important;
    color: white;
  }
}

/* --- CHECKBOX CUSTOM --- */
.custom-check {
  .form-check-input {
    border-color: #cbd5e1;
    &:checked { background-color: #50c026; border-color: #50c026; }
    &.input-error { border-color: #dc3545 !important; }
  }
}

/* --- UTILIDADES --- */
.x-small { font-size: 0.75rem; }
.line-height-1 { line-height: 1.2; }

/* ===================================================
   CÓDIGO ORIGINAL DEL SPINNER (Cubo de Carga)
   =================================================== */
$size: 50px;
$primary-color: green;

.cube-folding {
  width: $size;
  height: $size;
  display: inline-block;
  background: white;
  transform: rotate(45deg);
  font-size: 0;
  span {
    position: relative;
    width: $size * 0.5;
    height: $size * 0.5;
    transform: scale(1.1);
    display: inline-block;
    &::before {
      content: "";
      background-color: $primary-color;
      position: absolute;
      left: 0; top: 0;
      display: block;
      width: $size * 0.5; height: $size * 0.5;
      transform-origin: 100% 100%;
      animation: folding 2.5s infinite linear both;
    }
  }
  .leaf2 { transform: rotateZ(90deg) scale(1.1); &::before { animation-delay: 0.3s; background-color: color.adjust($primary-color, $lightness: -5%); } }
  .leaf3 { transform: rotateZ(270deg) scale(1.1); &::before { animation-delay: 0.9s; background-color: color.adjust($primary-color, $lightness: -5%); } }
  .leaf4 { transform: rotateZ(180deg) scale(1.1); &::before { animation-delay: 0.6s; background-color: color.adjust($primary-color, $lightness: -10%); } }
}

@keyframes folding {
  0%, 10% { transform: perspective(140px) rotateX(-180deg); opacity: 0; }
  25%, 75% { transform: perspective(140px) rotateX(0deg); opacity: 1; }
  90%, 100% { transform: perspective(140px) rotateY(180deg); opacity: 0; }
}

.cube-wrapper {
  position: fixed; left: 50%; top: 50%;
  margin-top: -$size; margin-left: -$size;
  width: $size * 2; height: $size * 2;
  text-align: center;
  &:after {
    content: ""; position: absolute; left: 0; right: 0; bottom: -20px;
    margin: auto; width: $size * 1.8; height: 6px; z-index: 1;
    filter: blur(2px); border-radius: 100%;
    animation: shadow 0.5s ease infinite alternate;
  }
  .loadingtexto {
    font-size: 15px; letter-spacing: 0.1em; display: block; color: white;
    position: relative; top: $size * 0.5; z-index: 2;
    animation: text 0.5s ease infinite alternate;
  }
}
@keyframes text { 100% { top: ($size * 0.5) + 10; } }
@keyframes shadow { 100% { bottom: -18px; width: $size * 2; } }

.loadingprincipal {
  position: fixed; z-index: 10005; height: 2em; overflow: visible;
  margin: auto; top: 0; left: 0; bottom: 0; right: 0;
}
.loadingprincipal:before {
  content: ''; display: block; position: fixed; top: 0; left: 0;
  width: 100%; height: 100%; background-color: rgba(0,0,0,0.6);
}

.swal-super-top { z-index: 10050 !important; }

.swal-premium-popup {
  border-radius: 24px !important;
  padding: 2.5rem 2rem 2rem 2rem !important;
  box-shadow: 0 25px 50px rgba(0,0,0,0.3) !important;
  background: #ffffff !important;
}

.swal-premium-title {
  font-size: 1.5rem !important;
  font-weight: 800 !important;
  color: #1e293b !important;
  letter-spacing: -0.5px;
  margin-bottom: 0.5rem !important;
}

.swal-premium-text {
  font-size: 0.95rem !important;
  color: #64748b !important;
  line-height: 1.5 !important;
}

.btn-swal-premium-danger {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;
  color: white !important;
  border: none !important;
  border-radius: 12px !important;
  padding: 12px 30px !important;
  font-size: 1rem !important;
  font-weight: bold !important;
  letter-spacing: 0.5px !important;
  width: 100% !important; 
  margin-top: 1.5rem !important;
  box-shadow: 0 8px 15px rgba(239, 68, 68, 0.3) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  cursor: pointer !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.btn-swal-premium-danger:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 20px rgba(239, 68, 68, 0.4) !important;
  filter: brightness(1.1) !important;
}

.btn-swal-premium-success {
  background: linear-gradient(135deg, #50c026 0%, #3e9452 100%) !important;
  color: white !important;
  border: none !important;
  border-radius: 12px !important;
  padding: 12px 30px !important;
  font-size: 1rem !important;
  font-weight: bold !important;
  letter-spacing: 0.5px !important;
  width: 100% !important; 
  margin-top: 1.5rem !important;
  box-shadow: 0 8px 15px rgba(80, 192, 38, 0.3) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  cursor: pointer !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.btn-swal-premium-success:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 20px rgba(80, 192, 38, 0.4) !important;
  filter: brightness(1.1) !important;
}
</style>