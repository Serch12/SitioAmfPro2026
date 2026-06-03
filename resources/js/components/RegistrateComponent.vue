<template>
  <div class="registro-page-wrapper" style="--bg-desktop: url('estilos_login/assets/img/amfpro/banner_login.png'); --bg-mobile: url('estilos_login/assets/img/amfpro/banner_login_dispositivo.jpg');">
    
    <header class="header-main border-bottom fixed-top glass-header">
      <div class="container-fluid py-2 px-3 px-lg-5">
        <div class="row align-items-center flex-nowrap m-0">
          
          <div class="col-4 text-start px-0">
            <a href="" class="text-decoration-none">
              <div class="hash-tag fw-bold text-truncate" style="color: #cbd5e1;">#UnidosSomosMásFuertes</div>
            </a>
          </div>
          
          <div class="col-4 text-center px-0">
            <a href="">
              <img src="recursos/logo.png" alt="Logo AMFPRO" class="logo-header rounded px-2"> 
            </a>
          </div>
          
          <div class="col-4 text-end d-flex justify-content-end gap-2 px-0">
            <img src="recursos/x.png" alt="X" class="social-nav ">
            <img src="recursos/facebook.png" alt="FB" class="social-nav ">
            <img src="recursos/instagram.png" alt="IG" class="social-nav ">
          </div>

        </div>
      </div>
    </header>

    <div class="container py-5 mt-5 pt-4">
      <div class="registration-card shadow-lg mx-auto">
        
        <div class="registration-header border-bottom-glass">
          <div class="d-flex align-items-center gap-3">
            <div class="icon-brand-box shadow-sm">
              <i class="material-icons">how_to_reg</i>
            </div>
            <div>
              <h4 class="fw-bolder text-white mb-0" style="letter-spacing: -0.5px;">REGISTRO DE ASOCIADO</h4>
              <span class="text-slate-300" style="font-size: 0.8rem;">Únete a la red de futbolistas profesionales de México</span>
            </div>
          </div>
        </div>

        <div class="registration-body">
          <form @submit.prevent="createAfiliado" enctype="multipart/form-data" novalidate>
            
            <div class="form-section glass-box shadow-sm mb-3">
              <h6 class="section-title text-white"><i class="material-icons text-success">badge</i> Información Personal</h6>
              
              <div class="row g-2">
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliado.nombre == '' && afiliadoError.nombre }" v-model="afiliado.nombre" id="nombres" placeholder="Nombre(s)" autocomplete="off">
                    <label for="nombres">Nombre(s) *</label>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliado.apellido_pat == '' && afiliadoError.apellido_pat }" v-model="afiliado.apellido_pat" id="paterno" placeholder="Apellido paterno" autocomplete="off">
                    <label for="paterno">Apellido paterno *</label>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliado.apellido_mat == '' && afiliadoError.apellido_mat }" v-model="afiliado.apellido_mat" id="materno" placeholder="Apellido materno" autocomplete="off">
                    <label for="materno">Apellido materno *</label>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="form-floating compact-floating">
                    <select class="form-select custom-input" :class="{ 'input-error': afiliado.sexo == '' && afiliadoError.sexo }" v-model="afiliado.sexo" id="sexo">
                      <option value="" class="dark-option">Seleccionar</option>
                      <option value="Femenino" class="dark-option">Femenino</option>
                      <option value="Masculino" class="dark-option">Masculino</option>
                    </select>
                    <label for="sexo">Sexo *</label>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="form-floating compact-floating">
                    <input type="date" class="form-control custom-input" :class="{ 'input-error': afiliado.nacimiento == '' && afiliadoError.nacimiento }" v-model="afiliado.nacimiento" id="nacimiento" autocomplete="off">
                    <label for="nacimiento">Nacimiento *</label>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="form-floating compact-floating">
                    <select class="form-select custom-input" :class="{ 'input-error': afiliado.nacionalidad == '' && afiliadoError.nacionalidad }" v-model="afiliado.nacionalidad" @change="esMexicano(afiliado.nacionalidad)" id="pais">
                      <option value="" class="dark-option">Seleccionar</option>
                      <option value=" Afganistán" class="dark-option"> Afganistán</option>
                      <option value=" Alemania" class="dark-option"> Alemania</option>
                      <option value=" Argentina" class="dark-option"> Argentina</option>
                      <option value=" Brasil" class="dark-option"> Brasil</option>
                      <option value=" Canadá" class="dark-option"> Canadá</option>
                      <option value=" Chile" class="dark-option"> Chile</option>
                      <option value=" Colombia" class="dark-option"> Colombia</option>
                      <option value=" España" class="dark-option"> España</option>
                      <option value=" Estados Unidos" class="dark-option"> Estados Unidos</option>
                      <option value=" México" class="dark-option"> México</option>
                      <option value=" Otro" class="dark-option"> Otro</option>
                    </select>
                    <label for="pais">País *</label>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="form-floating compact-floating">
                    <select class="form-select custom-input" :class="{ 'input-error': afiliado.escolaridad == '' && afiliadoError.escolaridad }" v-model="afiliado.escolaridad" ref="escolaridadRef" id="escolaridad">
                      <option value="" class="dark-option">Seleccionar</option>
                      <option value="Básico" class="dark-option">Básico</option>
                      <option value="Media Superior" class="dark-option">Media Superior</option>
                      <option value="Superior" class="dark-option">Superior</option>
                    </select>
                    <label for="escolaridad">Escolaridad *</label>
                  </div>
                </div>

                <div class="col-12 col-md-12">
                  <div class="form-floating compact-floating">
                    <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliado.calle == '' && afiliadoError.calle }" v-model="afiliado.calle" id="domicilio" placeholder="Domicilio" autocomplete="off">
                    <label for="domicilio">Domicilio (Calle, número, municipo, estado y C.P) *</label>
                  </div>
                </div>

                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="email" class="form-control custom-input" :class="{ 'input-error': afiliado.mail == '' && afiliadoError.mail }" v-model="afiliado.mail" id="email" placeholder="Email" autocomplete="off">
                    <label for="email">Correo Electrónico *</label>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="password" class="form-control custom-input" :class="{ 'input-error': afiliado.password == '' && afiliadoError.password }" v-model="afiliado.password" id="pass" placeholder="Contraseña" autocomplete="new-password">
                    <label for="pass">Contraseña (Mín. 8) *</label>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="password" class="form-control custom-input" :class="{ 'input-error': (afiliado.password_confirmation == '' || afiliado.password !== afiliado.password_confirmation) && afiliadoError.password_confirmation }" v-model="afiliado.password_confirmation" id="pass2" placeholder="Confirmar" autocomplete="new-password">
                    <label for="pass2">Confirmar Contraseña *</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-section glass-box shadow-sm mb-3">
              <h6 class="section-title text-white"><i class="material-icons text-primary">sports_soccer</i> Perfil Deportivo</h6>
              <div class="row g-2">
                
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating position-relative">
                    <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliado.curp == '' && afiliadoError.curp }" v-model="afiliado.curp" id="curp" placeholder="CURP" autocomplete="off" maxlength="18" :disabled="mexicano" @input="convertirAMayusculas">
                    <label for="curp">CURP *</label>
                    <a href="https://www.gob.mx/curp/" target="_blank" class="position-absolute end-0 top-50 translate-middle-y me-3 x-small text-decoration-none text-success fw-bold">¿Buscar?</a>
                  </div>
                </div>
                
                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliado.nui == '' && afiliadoError.nui }" v-model="afiliado.nui" @change="ExisteNUI(afiliado.nui)" id="nui" placeholder="NUI" autocomplete="off" maxlength="7">
                    <label for="nui">NUI (Registro FMF) *</label>
                  </div>
                  <small class="text-slate-300 d-block mt-1 x-small" style="line-height:1;">
                    Consulta tu NUI: <a href="http://ligamx.net/cancha/bsqdavnzd" target="_blank" class="text-success text-decoration-none">Varonil</a> | <a href="http://www.ligafemenil.mx/cancha/bsqdavnzd" target="_blank" class="text-success text-decoration-none">Femenil</a>
                  </small>
                </div>

                <div class="col-12 col-md-4">
                  <div class="form-floating compact-floating">
                    <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliado.celular == '' && afiliadoError.celular }" v-model="afiliado.celular" id="celular" placeholder="Celular" autocomplete="off" maxlength="11">
                    <label for="celular">Teléfono Celular *</label>
                  </div>
                </div>

                <div :class="muestra_categoria ? 'col-12 col-md-4' : 'col-12 col-md-6'">
                  <div class="form-floating compact-floating">
                    <select class="form-select custom-input" :class="{ 'input-error': afiliado.division == '' && afiliadoError.division }" v-model="afiliado.division" @change="listaEquipos(afiliado.division)" id="division">
                      <option value="" class="dark-option">Seleccionar</option>
                      <option value="Liga MX Femenil" class="dark-option">Liga MX Femenil</option>
                      <option value="Liga MX" class="dark-option">Liga MX</option>
                      <option value="Liga Expansión MX" class="dark-option">Liga Expansión MX</option>
                      <option value="Liga Premier" class="dark-option">Liga Premier</option>
                      <option value="Liga TDP" class="dark-option">Liga TDP</option>
                      <option value="Otro" class="dark-option">Otro / Extranjero</option>
                    </select>
                    <label for="division">División *</label>
                  </div>
                </div>

                <div :class="muestra_categoria ? 'col-12 col-md-4' : 'col-12 col-md-6'">
                  <div class="form-floating compact-floating">
                    <select class="form-select custom-input" :class="{ 'input-error': afiliado.club == '' && afiliadoError.club }" v-model="afiliado.club" :disabled="selectDisabled" id="club">
                      <option value="" class="dark-option">Seleccionar</option>
                      <option v-for="(le, index) in lista_equipos" :key="index" :value="le.nombre" class="dark-option">{{le.nombre}}</option>
                    </select>
                    <label for="club">Club *</label>
                  </div>
                </div>

                <div class="col-12 col-md-4" v-show="muestra_categoria">
                  <div class="form-floating compact-floating">
                    <select class="form-select custom-input" :class="{ 'input-error': afiliado.categoria == '' && afiliadoError.categoria }" v-model="afiliado.categoria" :disabled="selectDisabled2" id="categoria">
                      <option value="" class="dark-option">Seleccionar</option>
                      <option value="Liga MX Femenil" class="dark-option" v-show="afiliado.division == 'Liga MX Femenil'">Liga MX Femenil</option>
                      <option value="Liga MX" class="dark-option" v-show="afiliado.division == 'Liga MX'">Liga MX</option>
                      <option value="Sub 23" class="dark-option" v-show="afiliado.division == 'Liga MX'">Sub 23</option>
                      <option value="Sub 20" class="dark-option" v-show="afiliado.division == 'Liga MX'">Sub 20</option>
                      <option value="Sub 19" class="dark-option" v-show="afiliado.division == 'Liga MX Femenil'">Sub 19</option>                   
                      <option value="Sub 18" class="dark-option">Sub 18</option>
                      <option value="Sub 17" class="dark-option">Sub 17</option>
                      <option value="Sub 16" class="dark-option" v-show="afiliado.division == 'Liga MX'">Sub 16</option>
                      <option value="Sub 15" class="dark-option" v-show="afiliado.division == 'Liga MX'">Sub 15</option>
                      <option value="Sub 14" class="dark-option" v-show="afiliado.division == 'Liga MX'">Sub 14</option>
                      <option value="Sub 13" class="dark-option" v-show="afiliado.division == 'Liga MX'">Sub 13</option>
                    </select>
                    <label for="categoria">Categoría *</label>
                  </div>
                </div>

                <div :class="muestra_tipo ? 'col-12 col-md-6' : 'col-12 col-md-12'">
                  <div class="form-floating compact-floating">
                    <select class="form-select custom-input" :class="{ 'input-error': afiliado.seleccion == '' && afiliadoError.seleccion }" v-model="afiliado.seleccion" @change="muestraSelectTIpo(afiliado.seleccion)" id="seleccion">
                      <option value="" class="dark-option">Seleccionar</option>
                      <option value="Si" class="dark-option">Si</option>
                      <option value="No" class="dark-option">No</option>
                    </select>
                    <label for="seleccion">Selección Nacional *</label>
                  </div>
                </div>

                <div class="col-12 col-md-6" v-show="muestra_tipo">
                  <div class="form-floating compact-floating">
                    <select class="form-select custom-input" :class="{ 'input-error': afiliado.tipo_seleccion == '' && afiliadoError.tipo_seleccion }" v-model="afiliado.tipo_seleccion" id="tipo_seleccion">
                      <option value="" class="dark-option">Seleccionar</option>
                      <option value="Mayor" class="dark-option">Mayor</option>
                      <option value="Inferiores" class="dark-option">Inferiores</option>
                    </select>
                    <label for="tipo_seleccion">Tipo de Selección *</label>
                  </div>
                </div>

              </div>
            </div>

            <div class="row g-3 mb-3">
              <div class="col-md-7">
                <div class="form-section glass-box h-100 mb-0 p-3">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="mb-0 fw-bold fs-6 text-white"><i class="material-icons align-middle text-warning me-1">contact_page</i> Identificación (INE/Pasaporte)</h6>
                  </div>
                  <p class="x-small text-slate-300 mb-2 line-height-1">Menores: credencial escolar o permiso. JPEG, JPG o PNG.</p>
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
                <div class="form-section glass-box h-100 mb-0 p-3">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="mb-0 fw-bold fs-6 text-white"><i class="material-icons align-middle text-info me-1">account_box</i> Fotografía Reciente</h6>
                  </div>
                  <p class="x-small text-slate-300 mb-2 line-height-1">Fondo blanco, tipo credencial. JPEG, JPG o PNG.</p>
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

            <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center glass-bottom-bar p-3 rounded-4 shadow-sm border-light-glass mt-4">
              <div class="legal-compact me-md-3 mb-3 mb-md-0">
                <div class="form-check custom-check mb-1">
                  <input class="form-check-input" :class="{ 'input-error': !afiliado.terminos && afiliadoError.terminos }" type="checkbox" v-model="afiliado.terminos" id="check1">
                  <label class="form-check-label x-small text-slate-300" for="check1">
                    Solicito mi afiliación como Asociado Jugador de la AMF PRO, A.C., aceptando cumplir sus disposiciones legales y estatutarias.
                  </label>
                </div>
                <div class="form-check custom-check">
                  <input class="form-check-input" :class="{ 'input-error': !afiliado.aviso && afiliadoError.aviso }" type="checkbox" v-model="afiliado.aviso" id="check2">
                  <label class="form-check-label x-small text-slate-300" for="check2">
                    Acepto el <a href="#" data-toggle="modal" data-target="#avisoprivacidad" class="fw-bold text-success text-decoration-none">Aviso de Privacidad y Política de Protección de Datos</a>.
                  </label>
                </div>
              </div>
              
              <div class="text-end flex-shrink-0">
                <button type="submit" class="btn btn-premium w-100 shadow-lg">
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
      <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
        <div class="modal-content border-0 rounded-4 shadow-lg">
          
          <div class="modal-header border-0 px-4 py-3" style="background-color: #50C026;">
            <h5 class="modal-title text-white fw-bold">Aviso de Privacidad</h5>
            <button type="button" class="close bg-transparent border-0" data-dismiss="modal" aria-label="Close" style="font-size: 1.8rem; line-height: 1;">
              <span aria-hidden="true" style="color: white; font-weight: 300;">&times;</span>
            </button>
          </div>
          
          <div class="modal-body px-4 px-lg-5 py-4" style="text-align: justify; line-height: 1.7; color: #444; font-size: 0.95rem;">
            <div class="container-fluid">
              
              <div align="center" class="pb-4 mb-4 border-bottom">
                <img src="recursos/logo.png" width="180px" alt="Logo AMFpro" class="mb-3">
                <h3 class="fw-black text-dark display-6 mb-2">AM FUT PRO, A.C.</h3>
                <h5 class="text-muted fw-bold">Aviso de Privacidad del Registro de Afiliados</h5>
              </div>

              <h4 class="fw-bold mt-4 mb-3" style="color: #50C026; font-size: 1.25rem;">
                ¿Quién es el Responsable de recabar los datos personales para el Registro de Afiliados?
              </h4>
              <p>
                <strong>AM FUT PRO, A.C.</strong>, (en lo sucesivo “AMFpro”), con domicilio ubicado en Avenida Industria Automotriz, número 33, Interior 203, Colonia Corredor Industrial, Toluca Lerma, C.P. 52004, Estado de México, es responsable del tratamiento de sus datos personales en términos de lo establecido por los artículos 3, fracción XIV de la Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP), 47 de su Reglamento (RLFPDPPP), así como por las disposiciones contenidas en los artículos 1, 3 y 5 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD).
              </p>

              <h4 class="fw-bold mt-4 mb-3" style="color: #50C026; font-size: 1.25rem;">
                ¿Cuáles son las finalidades de tratamiento de datos personales que se recaban para el Registro de Afiliados?
              </h4>
              
              <h6 class="fw-bold text-dark mt-3 mb-2">Finalidades primarias:</h6>
              
              <p class="mb-2"><strong>1.1.</strong> AMFpro tratará los datos de identificación y deportivos del Titular para las siguientes finalidades:</p>
              <ol type="a" class="ps-4 mb-3">
                <li>Dar de alta a los jugadores asociados en los sistemas y bases de datos de la AMFpro;</li>
                <li>Realizar los trámites de afiliación y registro como asociado de la AMFpro;</li>
                <li>Identificar y contactar a los jugadores asociados;</li>
                <li>Generar las credenciales de los jugadores afiliados de la AMFpro;</li>
                <li>Confirmar, actualizar y corregir los datos personales de contacto registrados por la AMFpro;</li>
                <li>Brindar asesoría jurídica a los asociados;</li>
                <li>Mantener a los asociados informados sobre el estatus de sus procesos legales;</li>
                <li>Enviar a los asociados información sobre eventos y actividades que realice la AMFpro;</li>
                <li>Registrar y confirmar la asistencia de los asociados a las diferentes actividades realizadas por la asociación;</li>
                <li>Envío de noticias de última hora (flashes informativos), de interés para los futbolistas asociados;</li>
                <li>Contactar a los asociados, ya sea por correo electrónico o telefónicamente para compartirles información a la que tengan derecho como miembros de la AMFpro;</li>
                <li>Atender sus dudas y comentarios de los asociados recibidos a través del correo electrónico, redes sociales, telefónicamente o por videoconferencias;</li>
                <li>Elaboración y gestión del historial deportivo de los asociados, así como para dar seguimiento a su estatus como jugador profesional;</li>
                <li>Integrar los expedientes físicos y electrónicos de los asociados para la resolución de controversias;</li>
                <li>Representar al jugador asociado ante la Comisión de Conciliación y Resolución de Controversias;</li>
                <li>Llevar a cabo el patrocinio de los asociados (únicamente de aquellos jugadores sin contrato);</li>
                <li>Realizar el registro de los asociados en los diplomados, cursos, eventos y actividades “en línea” organizados por la AMFpro; y,</li>
                <li>Cumplir con las disposiciones legales aplicables a la prestación de los servicios que brinda la AMFpro.</li>
              </ol>

              <p class="mb-2"><strong>1.2.</strong> AMFpro tratará los datos patrimoniales del Titular para las siguientes finalidades:</p>
              <ol type="a" class="ps-4 mb-4">
                <li>Gestionar el pago de sus beneficios económicos debido al trabajo de intermediación que lleva a cabo ésta, y</li>
                <li>Dar cumplimiento a la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.</li>
              </ol>

              <h6 class="fw-bold text-dark mt-3 mb-2">Finalidades secundarias:</h6>
              <p class="mb-2">AMFpro tratará los datos de identificación del Titular para las siguientes finalidades no esenciales:</p>
              <ol type="a" class="ps-4 mb-4">
                <li>Ofrecerle promociones, descuentos de instituciones educativas nacionales e internacionales con las que la asociación tiene convenios;</li>
                <li>Fines estadísticos; y,</li>
                <li>Publicidad, prospección comercial y mercadotecnia.</li>
              </ol>

              <h4 class="fw-bold mt-4 mb-3" style="color: #50C026; font-size: 1.25rem;">
                ¿Cómo se pueden ejercer los derechos de acceso, rectificación, cancelación u oposición, de los datos personales del Registro de Afiliados?
              </h4>
              <p class="mb-3">
                El Titular podrá en todo momento ejercer sus derechos ARCO (acceso, rectificación, cancelación u oposición) respecto de sus datos personales presentando una solicitud en el formato que usted considere pertinente, misma que debe contener la información y documentación siguiente:
              </p>
              
              <ol class="ps-4 mb-3">
                <li>Nombre del Titular, domicilio y otro medio (correo electrónico, teléfono celular, etc.), para comunicarle la respuesta a su solicitud;</li>
                <li>Los documentos vigentes que acrediten su identidad (copia simple en formato impreso o electrónico de su credencial de elector, pasaporte o Visa Fm2 o Fm3) o, en su caso, la representación legal del Titular (copia simple en formato impreso o electrónico de la carta poder simple con firma autógrafa del Titular, el mandatario y sus correspondientes identificaciones oficiales vigentes: credencial de elector, pasaporte o Visa Fm2 o Fm3);</li>
                <li>La descripción clara y precisa de los datos respecto de los que busca ejercer alguno de los Derechos ARCO, y cualquier otro elemento o documento que facilite la localización de los datos personales del Titular.</li>
              </ol>

              <p class="mb-3">
                En el caso de las solicitudes de rectificación de datos personales, el Titular deberá también indicar las modificaciones a realizarse y aportar la documentación que sustente su petición.
              </p>
              <p class="mb-3">
                Para dar cumplimiento a la obligación de acceso a sus datos personales, se hará previa acreditación de la identidad del Titular o personalidad del representante; poniendo la información a disposición en sitio en el domicilio del Responsable. Se podrá acordar otro medio entre el Titular y el Responsable siempre que la información solicitada así lo permita.
              </p>
              <p class="mb-2">
                Para ejercer sus derechos ARCO, la revocación de su consentimiento y los demás derechos previstos en la LFPDPPP ponemos a su disposición los siguientes medios:
              </p>
              
              <ul class="ps-4 mb-3" style="list-style-type: square;">
                <li><strong>Correo electrónico:</strong> arco@amfpro.mx</li>
                <li><strong>Presencialmente:</strong> Avenida Industria Automotriz, número 33, Interior 203, Colonia Corredor Industrial, Toluca Lerma, C.P. 52004, Estado de México.</li>
              </ul>

              <p class="mb-4">
                AMFpro responderá al Titular en un plazo máximo de veinte días hábiles, contados desde la fecha hábil en que se recibió la solicitud a efecto de que, si resulta procedente, haga efectiva la misma dentro de los quince días hábiles siguientes a que se comunique la respuesta. En todos los casos, la respuesta se dará por la misma vía por la que haya presentado su solicitud o en su caso por cualquier otro medio acordado con el Titular. Los plazos antes referidos podrán ser ampliados en términos de la LFPDPPP.
              </p>

              <h4 class="fw-bold mt-4 mb-3" style="color: #50C026; font-size: 1.25rem;">
                ¿Con quienes se transfieren los datos personales del Registro de Afiliados?
              </h4>
              <p class="mb-3">
                Los datos personales recabados por la AMFpro, podrán compartirse con la Federación Mexicana de Fútbol Asociación, A.C., y sus integrantes, a efecto de gestionar actividades de intermediación de pago de salarios que requieran nuestros asociados. Esta transferencia es necesaria para dar cumplimiento a los trabajos establecidos en beneficio de los asociados, por lo que será necesario contar con el consentimiento expreso del titular de los datos, el cual será recabado a través de un formato específico.
              </p>
              <p class="mb-3">
                También le comunicamos que sus datos personales podrán compartirse con los proveedores de bienes y servicios que nos auxilian, para proveer de estos a los requeridos por nuestros asociados, los cuáles son necesarios para dar cumplimiento a nuestra función de intermediación, por lo que para esta transferencia no será necesario contar con el consentimiento expreso del titular de los datos, de conformidad con lo señalado por el artículo 37, fracción VII de la LFPDPPP, así como por lo dispuesto por el artículo 44 del RGPD. Los receptores de los datos personales, están obligados por virtud del contrato correspondiente, a mantener la confidencialidad de los datos personales suministrados y a observar el presente Aviso de Privacidad.
              </p>
              <p class="mb-4">
                Salvo los casos señalados con anterioridad y a menos que se actualice alguno de los supuestos contenidos en el artículo 37 de la LFPDPPP y 49 del RGPD, los datos proporcionados por nuestros Asociados y visitantes no serán transmitidos en ninguna otra circunstancia.
              </p>

              <div class="text-end border-top pt-3 mt-4 text-muted" style="font-size: 0.85rem;">
                <p class="mb-0">Fecha de última actualización: 26 de Febrero de 2024.</p>
              </div>

            </div>
          </div>
          
          <div class="modal-footer border-0 px-4 py-3 bg-light rounded-bottom-4">
            <button type="button" class="btn btn-secondary rounded-pill px-4" data-dismiss="modal">Cerrar</button>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
// Todo tu script se queda idéntico porque funciona perfecto.
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

<style lang="scss" scoped>
@use "sass:color";

/* ==================================================
   NUEVOS ESTILOS DARK MODE / GLASSMORPHISM (COMO EN LOGIN)
   ================================================== */
   
.registro-page-wrapper {
  /* Fondo similar al Login */
  background-image: var(--bg-desktop);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: #0f172a; 
  min-height: 100vh;
  position: relative;
  
  /* Capa oscura superpuesta */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(15, 23, 42, 0.65); /* Un poquito más oscuro que el login para facilitar la lectura del form */
    z-index: 1;
  }
  
  .header-main, .container {
    position: relative;
    z-index: 2;
  }
}

@media (max-width: 767px) {
  .registro-page-wrapper {
    background-image: var(--bg-mobile);
  }
}

/* HEADER GLASSMORPHISM */
.glass-header {
  background: rgba(15, 23, 42, 0.7) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

// .filter-white {
//   filter: brightness(0) invert(1);
//   opacity: 0.8;
//   transition: opacity 0.3s;
//   &:hover { opacity: 1; }
// }

.logo-header {
  height: 32px; 
  object-fit: contain;
}

/* TARJETA PRINCIPAL Y SECCIONES GLASS */
.registration-card {
  width: 100%;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: scaleUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.95) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.registration-header {
  padding: 30px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.border-bottom-glass { border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.text-slate-300 { color: #cbd5e1 !important; }

.icon-brand-box {
  background: linear-gradient(135deg, #50c026 0%, #3e9452 100%);
  width: 45px; height: 45px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  color: white;
  .material-icons { font-size: 1.6rem; }
}

.registration-body {
  padding: 30px;
  background: transparent;
}

.glass-box {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  
  .section-title {
    font-size: 0.95rem;
    font-weight: 800;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    i { margin-right: 8px; font-size: 1.3rem; }
  }
}

/* --- INPUTS ESTILO DARK MODE --- */
.compact-floating {
  .custom-input {
    height: calc(3rem + 2px); 
    padding: 1rem 0.75rem 0.25rem 0.75rem;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    
    &:focus {
      background: rgba(255, 255, 255, 0.1);
      border-color: #50c026;
      box-shadow: 0 0 0 3px rgba(80, 192, 38, 0.15);
      color: white;
    }
    
    &.input-error {
      border-color: #ef4444 !important;
      background: rgba(239, 68, 68, 0.1) !important;
    }
  }

  /* Para las opciones nativas del Select que no pueden ser transparentes */
  .dark-option {
    background-color: #0f172a;
    color: white;
  }
  
  label { 
    padding: 0.6rem 0.75rem; 
    color: #94a3b8; 
    font-size: 0.85rem; 
  }
}

/* Modificación de la etiqueta flotante de Bootstrap para Dark Mode */
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  color: #50c026;
  background-color: #1e293b; /* Fondo solido oscuro para tapar la linea del borde */
  border-radius: 4px;
  height: auto;
  padding: 0 5px;
  transform: scale(.85) translateY(-.6rem) translateX(.5rem);
}
.form-floating > .form-control:focus ~ label::after,
.form-floating > .form-control:not(:placeholder-shown) ~ label::after,
.form-floating > .form-select ~ label::after {
  background-color: transparent !important;
}

/* --- CUSTOM FILE UPLOAD (GLASS) --- */
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
    background: rgba(255, 255, 255, 0.05);
    border: 2px dashed rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    color: #cbd5e1;
    font-size: 0.8rem;
    font-weight: 600;
    
    i { font-size: 1.6rem; color: #94a3b8; margin-bottom: 4px; transition: color 0.2s; }
    
    &:hover {
      background: rgba(80, 192, 38, 0.1);
      border-color: #50c026;
      color: white;
      i { color: #50c026; transform: translateY(-2px); }
    }
    
    &.input-error {
      border-color: #ef4444 !important;
      color: #fca5a5 !important;
      i { color: #fca5a5 !important; }
    }
  }
}

/* --- BARRA INFERIOR --- */
.glass-bottom-bar {
  background: rgba(255, 255, 255, 0.03);
}
.border-light-glass {
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* --- BOTÓN DE REGISTRO PREMIUM --- */
.btn-premium {
  background: linear-gradient(135deg, #50c026 0%, #3e9452 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 25px;
  font-size: 1rem;
  letter-spacing: 0.5px;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(80, 192, 38, 0.4) !important;
    color: white;
  }
}

/* --- CHECKBOX CUSTOM --- */
.custom-check {
  .form-check-input {
    background-color: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.2);
    &:checked { background-color: #50c026; border-color: #50c026; }
    &.input-error { border-color: #ef4444 !important; }
  }
}

/* --- UTILIDADES --- */
.x-small { font-size: 0.75rem; }
.line-height-1 { line-height: 1.2; }

/* ===================================================
   CÓDIGO ORIGINAL DEL SPINNER (Cubo de Carga) 
   (Intacto)
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

/* SWAL PREMIUM (Intacto) */
.swal-super-top { z-index: 10050 !important; }
.swal-premium-popup { border-radius: 24px !important; padding: 2.5rem 2rem 2rem 2rem !important; box-shadow: 0 25px 50px rgba(0,0,0,0.3) !important; background: #ffffff !important; }
.swal-premium-title { font-size: 1.5rem !important; font-weight: 800 !important; color: #1e293b !important; letter-spacing: -0.5px; margin-bottom: 0.5rem !important; }
.swal-premium-text { font-size: 0.95rem !important; color: #64748b !important; line-height: 1.5 !important; }
.btn-swal-premium-danger { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important; color: white !important; border: none !important; border-radius: 12px !important; padding: 12px 30px !important; font-size: 1rem !important; font-weight: bold !important; letter-spacing: 0.5px !important; width: 100% !important; margin-top: 1.5rem !important; box-shadow: 0 8px 15px rgba(239, 68, 68, 0.3) !important; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important; cursor: pointer !important; display: flex !important; justify-content: center !important; align-items: center !important; }
.btn-swal-premium-danger:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 20px rgba(239, 68, 68, 0.4) !important; filter: brightness(1.1) !important; }
.btn-swal-premium-success { background: linear-gradient(135deg, #50c026 0%, #3e9452 100%) !important; color: white !important; border: none !important; border-radius: 12px !important; padding: 12px 30px !important; font-size: 1rem !important; font-weight: bold !important; letter-spacing: 0.5px !important; width: 100% !important; margin-top: 1.5rem !important; box-shadow: 0 8px 15px rgba(80, 192, 38, 0.3) !important; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important; cursor: pointer !important; display: flex !important; justify-content: center !important; align-items: center !important; }
.btn-swal-premium-success:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 20px rgba(80, 192, 38, 0.4) !important; filter: brightness(1.1) !important; }
</style>