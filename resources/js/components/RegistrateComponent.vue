<template>
  <div class="registro-page-wrapper" style="--bg-desktop: url('estilos_login/assets/img/amfpro/banner_login.png'); --bg-mobile: url('estilos_login/assets/img/amfpro/banner_login_dispositivo.jpg');">
    
    <header class="header-main border-bottom fixed-top glass-header">
      <div class="container-fluid py-2 px-3 px-lg-5">
        <div class="row align-items-center justify-content-center m-0">
          <div class="col-12 text-center px-0">
            <a href="/">
              <img src="recursos/logo.png" alt="Logo AMFPRO" class="logo-header rounded px-2" style="max-height: 45px;" /> 
            </a>
          </div>
        </div>
      </div>
    </header>

    <div class="container py-5 mt-5 pt-4 position-relative z-2">
      
      <div class="registration-card shadow-lg mx-auto mt-4">
        
        <div class="registration-header border-bottom-glass d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div class="d-flex align-items-center gap-3">
            <div class="icon-brand-box shadow-sm flex-shrink-0">
              <i class="material-icons">how_to_reg</i>
            </div>
            <div>
              <h4 class="fw-bolder text-white mb-0" style="letter-spacing: -0.5px;">REGISTRO</h4>
            </div>
          </div>
          <a href="inicio" class="btn-back-home text-decoration-none d-inline-flex align-items-center px-4 py-2 rounded-pill shadow-sm flex-shrink-0">
            <i class="material-icons">arrow_back</i>
            <span class="fw-bold ms-2 small text-uppercase tracking-wider">Regresar</span>
          </a>
        </div>

        <div class="registration-body">
          <transition name="fade" mode="out-in">
            
            <!-- ==============================================================
                 CREDENCIAL DIGITAL (ÉXITO)
                 ============================================================== -->
            <div v-if="registroExitoso" key="exito" class="text-center py-4">
              <div class="mb-4">
                <div class="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-circle mb-3" style="width: 80px; height: 80px;">
                    <i class="material-icons" style="font-size: 3rem;">verified</i>
                </div>
                <h2 class="text-white fw-black mb-2" style="letter-spacing: -1px;">¡Bienvenido a la AMFpro!</h2>
                <p class="text-slate-300 mx-auto" style="max-width: 500px; font-size: 0.95rem;">Tu solicitud ha sido enviada con éxito. Mientras validamos tus documentos.</p>
              </div>

              <!-- TARJETA CREDENCIAL DIGITAL -->
              <div class="digital-credential-card mx-auto text-start mb-2" id="credencial-digital">
                <div class="credential-shine"></div>
                
                <div class="credential-header">
                  <img src="recursos/logo.png" alt="AMFpro" class="credential-logo">
                  <span class="credential-badge">AFILIADO OFICIAL</span>
                </div>
                
                <div class="credential-body">
                  <div class="credential-photo">
                    <img :src="fotoPreview || 'recursos/default-avatar.png'" alt="Foto Perfil">
                  </div>
                  
                  <div class="credential-data">
                    <h3 class="credential-name">{{ afiliado.nombre }} {{ afiliado.apellido_pat }} {{ afiliado.apellido_mat }}</h3>
                    
                    <div class="credential-grid">
                      <div class="data-group">
                        <span class="data-label">NUI</span>
                        <span class="data-value text-success">{{ afiliado.nui }}</span>
                      </div>
                      <div class="data-group">
                        <span class="data-label">DIVISIÓN</span>
                        <span class="data-value">{{ afiliado.division }}</span>
                      </div>
                      <div class="data-group">
                        <span class="data-label">CLUB</span>
                        <span class="data-value">{{ afiliado.club }}</span>
                      </div>
                      <div class="data-group">
                        <span class="data-label">CATEGORÍA</span>
                        <span class="data-value">{{ afiliado.categoria || 'N/A' }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="credential-footer">
                  <div class="credential-date">
                    <span class="d-block" style="font-size: 0.6rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Miembro desde</span>
                    <span class="fw-bold">{{ afiliado.fec_registro }}</span>
                  </div>
                  <div class="credential-watermark">
                    <i class="material-icons text-success" style="font-size: 2rem; opacity: 0.5;">fingerprint</i>
                  </div>
                </div>
              </div>

              <!-- BOTÓN DISCRETO DE DESCARGA -->
              <div class="text-center mb-5">
                <button @click="descargarCredencial" class="btn btn-link text-slate-300 text-decoration-none small fw-bold d-inline-flex align-items-center transition-all hover-white" style="opacity: 0.8;">
                  <i class="material-icons me-1" style="font-size: 1.1rem;">download</i> Guardar imagen en mi dispositivo
                </button>
              </div>

              <!-- BOTONES DE ACCIÓN POST-REGISTRO -->
              <div class="mt-4 pt-4 border-top border-light-glass">
                <p class="text-white fw-bold mx-auto mb-4" style="font-size: 1.05rem;">¿Te gustaría aprovechar alguno de tus beneficios ahora mismo?</p>
                
                <div class="row justify-content-center g-3 mx-auto" style="max-width: 550px;">
                  <div class="col-12 col-sm-6">
                    <a href="inicio#juridico" class="btn btn-premium w-100 py-3 m-0 d-flex align-items-center justify-content-center text-decoration-none shadow-lg" style="border-radius: 50px; font-size: 0.95rem !important;">
                      <i class="material-icons align-middle me-2">gavel</i> Asesoría Jurídica
                    </a>
                  </div>
                  <div class="col-12 col-sm-6">
                    <a href="inicio#convenios" class="btn-glass-premium w-100 py-3 m-0 d-flex align-items-center justify-content-center text-decoration-none" style="border-radius: 50px; font-size: 0.95rem !important;">
                      <i class="material-icons align-middle me-2">school</i> Convenios Educativos
                    </a>
                  </div>
                </div>
                
                <div class="mt-4 pt-2">
                  <a href="inicio" class="text-slate-300 text-decoration-none small fw-bold transition-all hover-white d-inline-flex align-items-center">
                    <i class="material-icons me-1" style="font-size: 1.1rem;">home</i> Volver al inicio
                  </a>
                </div>
              </div>
            </div>

            <!-- ==============================================================
                 VERIFICACIÓN DE NUI (PASO INICIAL)
                 ============================================================== -->
            <div v-else-if="pasoPreValidacion" key="paso1">
              <div class="form-section glass-box shadow-sm mb-4 border-light-glass">
                <h6 class="section-title text-white">
                  <i class="material-icons text-success">badge</i> Validación de Registro
                </h6>
                <p class="x-small text-slate-300 mb-3 line-height-1">
                  Ingresa tu NUI (Registro FMF) para comprobar si ya te encuentras afiliado a la AMFpro y continuar con tu proceso. 
                  <br class="d-none d-md-block" />
                  ¿No conoces tu NUI? Búscalo aquí: 
                  <a href="http://ligamx.net/cancha/bsqdavnzd" target="_blank" class="text-success text-decoration-none fw-bold">Varonil</a> | 
                  <a href="http://www.ligafemenil.mx/cancha/bsqdavnzd" target="_blank" class="text-success text-decoration-none fw-bold">Femenil</a>
                </p>

                <div class="row g-2 align-items-center">
                  <div class="col-12 col-md-8">
                    <div class="form-floating compact-floating">
                      <input type="text" class="form-control custom-input" id="nuiPre" v-model="nuiPreValidacion" @input="limpiarNUIPre" placeholder="NUI" maxlength="7" @keyup.enter.prevent="verificarNuiInicial" />
                      <label for="nuiPre">Ingresa tu NUI *</label>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 mt-3 mt-md-0">
                    <button type="button" @click="verificarNuiInicial" class="btn btn-premium w-100 shadow-sm" style="height: calc(3rem + 2px);" :disabled="verificandoNuiInicial || !nuiPreValidacion">
                      <span v-if="verificandoNuiInicial" class="spinner-border spinner-border-sm me-2"></span>
                      <i v-else class="material-icons align-middle me-1">search</i> 
                      {{ verificandoNuiInicial ? 'Verificando...' : 'VERIFICAR Y CONTINUAR' }}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- ==============================================================
                 FORMULARIO COMPLETO
                 ============================================================== -->
            <div v-else key="paso2">
              <form @submit.prevent="createAfiliado" enctype="multipart/form-data" novalidate>
                
                <!-- SECCIÓN 1: ORIGEN Y EDAD -->
                <div class="form-section glass-box shadow-sm mb-4 border-light-glass">
                  <h6 class="section-title text-white"><i class="material-icons text-success">public</i> Origen y Edad</h6>
                  
                  <div class="row g-3">
                    <!-- PAÍS -->
                    <div class="col-12 col-md-6">
                      <div class="premium-dropdown-wrapper" v-outside-click="cerrarDropdownPais">
                        <div class="premium-dropdown-trigger" :class="{ 'input-error': afiliadoError.nacionalidad }" @click="toggleDropdownPais">
                          <div class="trigger-info">
                            <span class="trigger-label">Nacionalidad *</span>
                            <span class="trigger-value">{{ afiliado.nacionalidad || 'Seleccionar País' }}</span>
                          </div>
                          <i class="material-icons arrow-icon">{{ dropdownPaisAbierto ? 'expand_less' : 'expand_more' }}</i>
                        </div>
                        
                        <div class="premium-dropdown-menu-box" v-if="dropdownPaisAbierto">
                          <div class="menu-search-wrapper">
                            <i class="material-icons search-icon">search</i>
                            <input type="text" class="menu-search-control" v-model="busquedaPais" placeholder="Buscar país..." ref="searchPaisInput" @click.stop />
                            <i class="material-icons clear-icon" v-if="busquedaPais" @click.stop="busquedaPais = ''">close</i>
                          </div>
                          <ul class="menu-options-list">
                            <li v-for="(pais, index) in paisesFiltrados" :key="index" class="menu-option-item" :class="{ 'selected-item': afiliado.nacionalidad === pais }" @click="seleccionarPais(pais)">
                              {{ pais }}
                              <i class="material-icons check-icon" v-if="afiliado.nacionalidad === pais">check</i>
                            </li>
                            <li v-if="paisesFiltrados.length === 0" class="menu-no-results">No se encontraron resultados</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <!-- EDAD (Aparece a un costado) -->
                    <transition name="fade">
                      <div class="col-12 col-md-6" v-if="afiliado.nacionalidad !== ''">
                        <div class="form-floating compact-floating">
                          <select class="form-select custom-input" :class="{ 'input-error': afiliadoError.es_mayor_edad }" v-model="es_mayor_edad" @change="limpiarDocumentosEdad" id="es_mayor_edad">
                            <option value="" class="dark-option">Seleccionar...</option>
                            <option value="Mayor" class="dark-option">Soy Mayor de Edad (+18 años)</option>
                            <option value="Menor" class="dark-option">Soy Menor de Edad (-18 años)</option>
                          </select>
                          <label for="es_mayor_edad">¿Eres mayor o menor de edad? *</label>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>

                <!-- SECCIÓN 2: DOCUMENTOS (APARECE AL SELECCIONAR EDAD) -->
                <transition name="fade">
                  <div v-if="es_mayor_edad !== ''" key="seccion-docs">
                    
                    <!-- ==========================================
                         CASO: MAYOR DE EDAD
                         ========================================== -->
                    <div v-if="es_mayor_edad === 'Mayor'">
                      
                      <!-- MAYOR Y MEXICANO -->
                      <div v-if="mexicano" class="form-section glass-box shadow-sm mb-4" style="background: rgba(80, 192, 38, 0.05); border-color: rgba(80, 192, 38, 0.2);">
                        <h6 class="section-title text-white"><i class="material-icons text-success">document_scanner</i> Identidad y Foto de Perfil</h6>
                        
                        <div class="alert-premium-green d-flex align-items-center p-3 mb-3 rounded-3 shadow-sm border border-success border-opacity-25" style="background: rgba(80, 192, 38, 0.1);">
                          <i class="material-icons text-success me-3 fs-3">auto_awesome</i>
                          <div>
                            <h6 class="text-white fw-bold mb-1" style="font-size: 0.9rem;">¡Registro Inteligente!</h6>
                            <p class="x-small text-slate-300 mb-1 line-height-1">Sube la foto frontal de tu INE y <strong>autocompletaremos tus datos automáticamente</strong>. Una vez procesada, el formulario se desbloqueará.</p>
                          </div>
                        </div>
                        
                        <div class="row g-2">
                          <div class="col-12 col-md-4">
                            <div class="custom-file-upload flex-fill h-100" @click="!escaneandoINEFrente ? seleccionarMetodoArchivo('filefrente', 'documento') : null">
                              <input type="file" id="ine_frente" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefrente" @change="ineFrente()" :disabled="escaneandoINEFrente" />
                              <div class="file-label h-100" :class="{ 'input-error': afiliadoError.pdf, 'border-success text-success': nombre_archivo_frente !== 'Examinar...' }">
                                <div v-if="escaneandoINEFrente" class="spinner-border text-success mb-2" role="status" style="width: 1.6rem; height: 1.6rem;"></div>
                                <i v-else class="material-icons" :class="{ 'text-success': nombre_archivo_frente !== 'Examinar...' }">{{ nombre_archivo_frente !== 'Examinar...' ? 'check_circle' : 'document_scanner' }}</i> 
                                {{ escaneandoINEFrente ? 'Procesando...' : (nombre_archivo_frente !== 'Examinar...' ? 'Frente Escaneado ✓' : '1. Escanear Frente INE') }}
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-4">
                            <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('fileatras', 'documento')">
                              <input type="file" id="ine_atras" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="fileatras" @change="ineAtras('fileatras')" />
                              <div class="file-label h-100" :class="{ 'input-error': afiliadoError.pdf2, 'border-success text-success': nombre_archivo_atras !== 'Examinar...' }">
                                <i class="material-icons" :class="{ 'text-success': nombre_archivo_atras !== 'Examinar...' }">{{ nombre_archivo_atras !== 'Examinar...' ? 'check_circle' : 'upload_file' }}</i> 
                                {{ nombre_archivo_atras !== 'Examinar...' ? 'Atrás Listo ✓' : '2. Subir Atrás INE' }}
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-4">
                            <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('filefoto_mex', 'perfil')">
                              <input type="file" id="foto_perfil_mex" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefoto_mex" @change="ineFoto('filefoto_mex')" />
                              <div class="file-label h-100" :class="{ 'input-error': afiliadoError.foto, 'border-success text-success': nombre_archivo_foto !== 'Examinar...' }">
                                <i class="material-icons" :class="{ 'text-success': nombre_archivo_foto !== 'Examinar...' }">{{ nombre_archivo_foto !== 'Examinar...' ? 'check_circle' : 'account_box' }}</i> 
                                {{ nombre_archivo_foto !== 'Examinar...' ? 'Foto Lista ✓' : '3. Subir Foto Perfil' }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- MAYOR Y EXTRANJERO -->
                      <div v-else class="form-section glass-box shadow-sm mb-4" style="background: rgba(13, 110, 253, 0.05); border-color: rgba(13, 110, 253, 0.2);">
                        <h6 class="section-title text-white"><i class="material-icons text-primary">badge</i> Identidad y Foto de Perfil</h6>
                        <p class="x-small text-slate-300 mb-3 line-height-1">Selecciona qué documento oficial vas a proporcionar y adjunta tu foto de perfil.</p>
                        
                        <div class="row g-2 mb-3">
                          <div class="col-12">
                            <div class="form-floating compact-floating">
                              <select class="form-select custom-input" :class="{ 'input-error': afiliadoError.tipo_identificacion_extranjero }" v-model="tipo_identificacion_extranjero" @change="limpiarArchivosExtranjero" id="tipo_doc_ext">
                                <option value="" class="dark-option">Seleccionar Documento</option>
                                <option value="Residente" class="dark-option">Residente en México (Tarjeta de Residente)</option>
                                <option value="Pasaporte" class="dark-option">Pasaporte</option>
                              </select>
                              <label for="tipo_doc_ext">Tipo de Documento *</label>
                            </div>
                          </div>
                        </div>

                        <div class="row g-2" v-if="tipo_identificacion_extranjero === 'Residente'">
                          <div class="col-12 col-md-4">
                            <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('filefrente_res', 'documento')">
                              <input type="file" id="ine_frente_res" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefrente_res" @change="ineFrenteManual('filefrente_res')" />
                              <div class="file-label h-100" :class="{ 'input-error': afiliadoError.pdf, 'border-success text-success': nombre_archivo_frente !== 'Examinar...' }">
                                <i class="material-icons" :class="{ 'text-success': nombre_archivo_frente !== 'Examinar...' }">{{ nombre_archivo_frente !== 'Examinar...' ? 'check_circle' : 'upload_file' }}</i> 
                                {{ nombre_archivo_frente !== 'Examinar...' ? 'Frente Listo ✓' : '1. Subir Frente Tarjeta' }}
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-4">
                            <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('fileatras_res', 'documento')">
                              <input type="file" id="ine_atras_res" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="fileatras_res" @change="ineAtras('fileatras_res')" />
                              <div class="file-label h-100" :class="{ 'input-error': afiliadoError.pdf2, 'border-success text-success': nombre_archivo_atras !== 'Examinar...' }">
                                <i class="material-icons" :class="{ 'text-success': nombre_archivo_atras !== 'Examinar...' }">{{ nombre_archivo_atras !== 'Examinar...' ? 'check_circle' : 'upload_file' }}</i> 
                                {{ nombre_archivo_atras !== 'Examinar...' ? 'Atrás Listo ✓' : '2. Subir Atrás Tarjeta' }}
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-4">
                            <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('filefoto_res', 'perfil')">
                              <input type="file" id="foto_perfil_res" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefoto_res" @change="ineFoto('filefoto_res')" />
                              <div class="file-label h-100" :class="{ 'input-error': afiliadoError.foto, 'border-success text-success': nombre_archivo_foto !== 'Examinar...' }">
                                <i class="material-icons" :class="{ 'text-success': nombre_archivo_foto !== 'Examinar...' }">{{ nombre_archivo_foto !== 'Examinar...' ? 'check_circle' : 'account_box' }}</i> 
                                {{ nombre_archivo_foto !== 'Examinar...' ? 'Foto Lista ✓' : '3. Subir Foto Perfil' }}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row g-2" v-else-if="tipo_identificacion_extranjero === 'Pasaporte'">
                          <div class="col-12 col-md-6">
                            <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('filefrente_pas', 'documento')">
                              <input type="file" id="ine_frente_pas" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefrente_pas" @change="ineFrenteManual('filefrente_pas')" />
                              <div class="file-label h-100" :class="{ 'input-error': afiliadoError.pdf, 'border-success text-success': nombre_archivo_frente !== 'Examinar...' }">
                                <i class="material-icons" :class="{ 'text-success': nombre_archivo_frente !== 'Examinar...' }">{{ nombre_archivo_frente !== 'Examinar...' ? 'check_circle' : 'upload_file' }}</i> 
                                {{ nombre_archivo_frente !== 'Examinar...' ? 'Pasaporte Listo ✓' : '1. Subir Pasaporte' }}
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('filefoto_pas', 'perfil')">
                              <input type="file" id="foto_perfil_pas" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefoto_pas" @change="ineFoto('filefoto_pas')" />
                              <div class="file-label h-100" :class="{ 'input-error': afiliadoError.foto, 'border-success text-success': nombre_archivo_foto !== 'Examinar...' }">
                                <i class="material-icons" :class="{ 'text-success': nombre_archivo_foto !== 'Examinar...' }">{{ nombre_archivo_foto !== 'Examinar...' ? 'check_circle' : 'account_box' }}</i> 
                                {{ nombre_archivo_foto !== 'Examinar...' ? 'Foto Lista ✓' : '2. Subir Foto Perfil' }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <!-- ==========================================
                         CASO: MENOR DE EDAD
                         ========================================== -->
                    <div v-else-if="es_mayor_edad === 'Menor'" class="form-section glass-box shadow-sm mb-4" style="background: rgba(245, 158, 11, 0.05); border-color: rgba(245, 158, 11, 0.2);">
                      <h6 class="section-title text-white"><i class="material-icons text-warning">child_care</i> Identidad y Foto de Perfil (Menor de Edad)</h6>
                      <p class="x-small text-slate-300 mb-3 line-height-1">Selecciona qué documento oficial vas a proporcionar y adjunta tu foto de perfil.</p>
                      
                      <div class="row g-2 mb-3">
                        <div class="col-12 col-md-6">
                          <div class="form-floating compact-floating">
                            <select class="form-select custom-input" :class="{ 'input-error': afiliadoError.tipo_identificacion_menor }" v-model="tipo_identificacion_menor" @change="limpiarArchivosMenor" id="tipo_doc_menor">
                              <option value="" class="dark-option">Seleccionar Documento</option>
                              <option value="Pasaporte" class="dark-option">Pasaporte</option>
                              <option value="Certificado" class="dark-option">Certificado Escolar (Más reciente)</option>
                              <option value="Escolar" class="dark-option">Identificación Escolar</option>
                            </select>
                            <label for="tipo_doc_menor">Tipo de Documento *</label>
                          </div>
                        </div>
                      </div>

                      <!-- Documentos Pasaporte (Menor) -->
                      <div class="row g-2" v-if="tipo_identificacion_menor === 'Pasaporte'">
                        <div class="col-12 col-md-6">
                          <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('filefrente_pas_menor', 'documento')">
                            <input type="file" id="ine_frente_pas_menor" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefrente_pas_menor" @change="ineFrenteManual('filefrente_pas_menor')" />
                            <div class="file-label h-100" :class="{ 'input-error': afiliadoError.pdf, 'border-success text-success': nombre_archivo_frente !== 'Examinar...' }">
                              <i class="material-icons" :class="{ 'text-success': nombre_archivo_frente !== 'Examinar...' }">{{ nombre_archivo_frente !== 'Examinar...' ? 'check_circle' : 'upload_file' }}</i> 
                              {{ nombre_archivo_frente !== 'Examinar...' ? 'Pasaporte Listo ✓' : '1. Subir Pasaporte' }}
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('filefoto_pas_menor', 'perfil')">
                            <input type="file" id="foto_perfil_pas_menor" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefoto_pas_menor" @change="ineFoto('filefoto_pas_menor')" />
                            <div class="file-label h-100" :class="{ 'input-error': afiliadoError.foto, 'border-success text-success': nombre_archivo_foto !== 'Examinar...' }">
                              <i class="material-icons" :class="{ 'text-success': nombre_archivo_foto !== 'Examinar...' }">{{ nombre_archivo_foto !== 'Examinar...' ? 'check_circle' : 'account_box' }}</i> 
                              {{ nombre_archivo_foto !== 'Examinar...' ? 'Foto Lista ✓' : '2. Subir Foto Perfil' }}
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Documentos Certificado Escolar -->
                      <div class="row g-2" v-else-if="tipo_identificacion_menor === 'Certificado'">
                        <div class="col-12 col-md-6">
                          <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('filefrente_cert', 'documento')">
                            <input type="file" id="ine_frente_cert" class="file-hidden" accept="image/jpeg,image/jpg,image/png,application/pdf" ref="filefrente_cert" @change="ineFrenteManual('filefrente_cert')" />
                            <div class="file-label h-100" :class="{ 'input-error': afiliadoError.pdf, 'border-success text-success': nombre_archivo_frente !== 'Examinar...' }">
                              <i class="material-icons" :class="{ 'text-success': nombre_archivo_frente !== 'Examinar...' }">{{ nombre_archivo_frente !== 'Examinar...' ? 'check_circle' : 'upload_file' }}</i> 
                              {{ nombre_archivo_frente !== 'Examinar...' ? 'Certificado Listo ✓' : '1. Subir Certificado' }}
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('filefoto_cert', 'perfil')">
                            <input type="file" id="foto_perfil_cert" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefoto_cert" @change="ineFoto('filefoto_cert')" />
                            <div class="file-label h-100" :class="{ 'input-error': afiliadoError.foto, 'border-success text-success': nombre_archivo_foto !== 'Examinar...' }">
                              <i class="material-icons" :class="{ 'text-success': nombre_archivo_foto !== 'Examinar...' }">{{ nombre_archivo_foto !== 'Examinar...' ? 'check_circle' : 'account_box' }}</i> 
                              {{ nombre_archivo_foto !== 'Examinar...' ? 'Foto Lista ✓' : '2. Subir Foto Perfil' }}
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Documentos Escolar -->
                      <div class="row g-2" v-else-if="tipo_identificacion_menor === 'Escolar'">
                        <div class="col-12 col-md-4">
                          <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('filefrente_esc', 'documento')">
                            <input type="file" id="ine_frente_esc" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefrente_esc" @change="ineFrenteManual('filefrente_esc')" />
                            <div class="file-label h-100" :class="{ 'input-error': afiliadoError.pdf, 'border-success text-success': nombre_archivo_frente !== 'Examinar...' }">
                              <i class="material-icons" :class="{ 'text-success': nombre_archivo_frente !== 'Examinar...' }">{{ nombre_archivo_frente !== 'Examinar...' ? 'check_circle' : 'upload_file' }}</i> 
                              {{ nombre_archivo_frente !== 'Examinar...' ? 'Frente Listo ✓' : '1. Subir Frente Credencial' }}
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('fileatras_esc', 'documento')">
                            <input type="file" id="ine_atras_esc" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="fileatras_esc" @change="ineAtras('fileatras_esc')" />
                            <div class="file-label h-100" :class="{ 'input-error': afiliadoError.pdf2, 'border-success text-success': nombre_archivo_atras !== 'Examinar...' }">
                              <i class="material-icons" :class="{ 'text-success': nombre_archivo_atras !== 'Examinar...' }">{{ nombre_archivo_atras !== 'Examinar...' ? 'check_circle' : 'upload_file' }}</i> 
                              {{ nombre_archivo_atras !== 'Examinar...' ? 'Atrás Listo ✓' : '2. Subir Atrás Credencial' }}
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="custom-file-upload flex-fill h-100" @click="seleccionarMetodoArchivo('filefoto_esc', 'perfil')">
                            <input type="file" id="foto_perfil_esc" class="file-hidden" accept="image/jpeg,image/jpg,image/png" ref="filefoto_esc" @change="ineFoto('filefoto_esc')" />
                            <div class="file-label h-100" :class="{ 'input-error': afiliadoError.foto, 'border-success text-success': nombre_archivo_foto !== 'Examinar...' }">
                              <i class="material-icons" :class="{ 'text-success': nombre_archivo_foto !== 'Examinar...' }">{{ nombre_archivo_foto !== 'Examinar...' ? 'check_circle' : 'account_box' }}</i> 
                              {{ nombre_archivo_foto !== 'Examinar...' ? 'Foto Lista ✓' : '3. Subir Foto Perfil' }}
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </transition>

                <!-- SECCIÓN 3: RESTO DEL FORMULARIO -->
                <transition name="fade">
                  <div v-if="mostrarFormularioCompleto">
                    
                    <div class="form-section glass-box shadow-sm mb-3">
                      <h6 class="section-title text-white"><i class="material-icons text-success">badge</i> Información Personal</h6>
                      <div class="row g-2">
                        <div class="col-12 col-md-4">
                          <div class="form-floating compact-floating position-relative">
                            <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliadoError.nombre, 'autocompleted-field': nombreAutocompletado }" v-model="afiliado.nombre" id="nombres" placeholder="Nombre(s)" autocomplete="off" />
                            <label for="nombres">Nombre(s) *</label>
                            <i v-if="nombreAutocompletado" class="material-icons position-absolute end-0 top-50 translate-middle-y me-4 text-success" style="font-size: 1.2rem;">auto_awesome</i>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="form-floating compact-floating position-relative">
                            <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliadoError.apellido_pat, 'autocompleted-field': nombreAutocompletado }" v-model="afiliado.apellido_pat" id="paterno" placeholder="Apellido paterno" autocomplete="off" />
                            <label for="paterno">Apellido paterno *</label>
                            <i v-if="nombreAutocompletado" class="material-icons position-absolute end-0 top-50 translate-middle-y me-4 text-success" style="font-size: 1.2rem;">auto_awesome</i>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="form-floating compact-floating position-relative">
                            <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliadoError.apellido_mat, 'autocompleted-field': nombreAutocompletado }" v-model="afiliado.apellido_mat" id="materno" placeholder="Apellido materno" autocomplete="off" />
                            <label for="materno">Apellido materno *</label>
                            <i v-if="nombreAutocompletado" class="material-icons position-absolute end-0 top-50 translate-middle-y me-4 text-success" style="font-size: 1.2rem;">auto_awesome</i>
                          </div>
                        </div>

                        <div class="col-12 col-md-12">
                          <div class="form-floating compact-floating position-relative">
                            <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliadoError.curp, 'autocompleted-field': curpAutocompletada }" v-model="afiliado.curp" id="curp" placeholder="CURP" autocomplete="off" maxlength="18" :disabled="mexicano && es_mayor_edad === 'Mayor' && !curpAutocompletada" @input="procesarCURP" />
                            <label for="curp">{{ mexicano ? 'CURP *' : 'Registro de Identidad (No Aplica Extranjeros)' }}</label>
                            <i v-if="curpAutocompletada" class="material-icons position-absolute end-0 top-50 translate-middle-y me-4 text-success" style="font-size: 1.2rem;">auto_awesome</i>
                            <a v-if="mexicano && !curpAutocompletada" href="https://www.gob.mx/curp/" target="_blank" class="position-absolute end-0 top-50 translate-middle-y me-3 x-small text-decoration-none text-success fw-bold">¿Buscar?</a>
                          </div>
                        </div>
                        
                        <div class="col-6 col-md-6">
                          <div class="form-floating compact-floating position-relative">
                            <select class="form-select custom-input" :class="{ 'input-error': afiliadoError.sexo, 'autocompleted-field': sexoAutocompletado }" v-model="afiliado.sexo" id="sexo">
                              <option value="" class="dark-option">Seleccionar</option>
                              <option value="Femenino" class="dark-option">Femenino</option>
                              <option value="Masculino" class="dark-option">Masculino</option>
                            </select>
                            <label for="sexo">Sexo *</label>
                            <i v-if="sexoAutocompletado" class="material-icons position-absolute end-0 top-50 translate-middle-y me-4 text-success" style="font-size: 1.2rem;">auto_awesome</i>
                          </div>
                        </div>
                        
                        <div class="col-6 col-md-6">
                          <div class="form-floating compact-floating position-relative">
                            <input type="date" class="form-control custom-input" :class="{ 'input-error': afiliadoError.nacimiento, 'autocompleted-field': nacimientoAutocompletado }" v-model="afiliado.nacimiento" id="nacimiento" autocomplete="off" />
                            <label for="nacimiento">Nacimiento *</label>
                            <i v-if="nacimientoAutocompletado" class="material-icons position-absolute end-0 top-50 translate-middle-y me-4 text-success" style="font-size: 1.2rem;">auto_awesome</i>
                          </div>
                        </div>

                        <!-- SECCIÓN COMENTADA: ESCOLARIDAD (Para uso futuro)
                        <div class="col-12 col-md-4">
                          <div class="form-floating compact-floating">
                            <select class="form-select custom-input" :class="{ 'input-error': afiliadoError.escolaridad }" v-model="afiliado.escolaridad" ref="escolaridadRef" id="escolaridad">
                              <option value="" class="dark-option">Seleccionar</option>
                              <option value="Básico" class="dark-option">Básico</option>
                              <option value="Media Superior" class="dark-option">Media Superior</option>
                              <option value="Superior" class="dark-option">Superior</option>
                            </select>
                            <label for="escolaridad">Escolaridad *</label>
                          </div>
                        </div>
                        -->

                        <div class="col-12 mt-3 mb-1">
                          <h6 class="text-white-50 small mb-0"><i class="material-icons align-middle me-1" style="font-size:1.1rem;">location_on</i> Ubicación y Contacto</h6>
                        </div>

                        <div class="col-12">
                          <div class="form-floating compact-floating">
                            <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliadoError.calle }" v-model="afiliado.calle" id="calle" placeholder="Domicilio completo" autocomplete="off" />
                            <label for="calle">Domicilio Completo (Calle, Número, Colonia, Municipio, Estado, C.P.) *</label>
                          </div>
                        </div>

                        <div class="col-12 col-md-4 mt-3">
                          <div class="form-floating compact-floating">
                            <input type="text" class="form-control custom-input" :class="{ 'input-error': afiliadoError.celular }" v-model="afiliado.celular" @input="formatPhone" id="celular" placeholder="Celular" autocomplete="off" maxlength="17" />
                            <label for="celular">Teléfono Celular *</label>
                          </div>
                        </div>

                        <div class="col-12 col-md-8 mt-3">
                          <div class="form-floating compact-floating">
                            <input type="email" class="form-control custom-input" :class="{ 'input-error': afiliadoError.mail }" v-model="afiliado.mail" id="email" placeholder="Email" autocomplete="off" />
                            <label for="email">Correo Electrónico *</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- PERFIL DEPORTIVO -->
                    <div class="form-section glass-box shadow-sm mb-3">
                      <h6 class="section-title text-white"><i class="material-icons text-primary">sports_soccer</i> Perfil Deportivo</h6>
                      <div class="row g-2">
                        <div class="col-12 col-md-12">
                          <div class="form-floating compact-floating position-relative">
                            <!-- NUI AHORA ESTÁ BLOQUEADO PORQUE YA LO VERIFICÓ ANTES -->
                            <input type="text" class="form-control custom-input text-success fw-bold" v-model="afiliado.nui" id="nui" placeholder="NUI" readonly />
                            <label for="nui">NUI Verificado *</label>
                            <i class="material-icons position-absolute end-0 top-50 translate-middle-y me-4 text-success" style="font-size: 1.2rem;">check_circle</i>
                          </div>
                        </div>
                        <div :class="muestra_categoria ? 'col-12 col-md-4' : 'col-12 col-md-6'">
                          <div class="form-floating compact-floating">
                            <select class="form-select custom-input" :class="{ 'input-error': afiliadoError.division }" v-model="afiliado.division" @change="listaEquipos(afiliado.division)" id="division">
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
                          <div class="premium-dropdown-wrapper" v-outside-click="cerrarDropdownClub">
                            <div class="premium-dropdown-trigger" :class="{ 'disabled-trigger': selectDisabled, 'input-error': afiliadoError.club }" @click="toggleDropdownClub">
                              <div class="trigger-info">
                                <span class="trigger-label">Club *</span>
                                <span class="trigger-value">{{ afiliado.club || 'Seleccionar Club' }}</span>
                              </div>
                              <i class="material-icons arrow-icon">{{ dropdownClubAbierto ? 'expand_less' : 'expand_more' }}</i>
                            </div>
                            <div class="premium-dropdown-menu-box" v-if="dropdownClubAbierto">
                              <div class="menu-search-wrapper">
                                <i class="material-icons search-icon">search</i>
                                <input type="text" class="menu-search-control" v-model="busquedaClub" placeholder="Buscar club..." ref="searchClubInput" @click.stop />
                                <i class="material-icons clear-icon" v-if="busquedaClub" @click.stop="busquedaClub = ''">close</i>
                              </div>
                              <ul class="menu-options-list">
                                <li v-for="(le, index) in clubesFiltrados" :key="index" class="menu-option-item" :class="{ 'selected-item': afiliado.club === le.nombre }" @click="seleccionarClub(le.nombre)">
                                  {{ le.nombre }}
                                  <i class="material-icons check-icon" v-if="afiliado.club === le.nombre">check</i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4" v-show="muestra_categoria">
                          <div class="form-floating compact-floating">
                            <select class="form-select custom-input" :class="{ 'input-error': afiliadoError.categoria }" v-model="afiliado.categoria" :disabled="selectDisabled2" id="categoria">
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
                            <select class="form-select custom-input" :class="{ 'input-error': afiliadoError.seleccion }" v-model="afiliado.seleccion" @change="muestraSelectTIpo(afiliado.seleccion)" id="seleccion">
                              <option value="" class="dark-option">Seleccionar</option>
                              <option value="Si" class="dark-option">Si</option>
                              <option value="No" class="dark-option">No</option>
                            </select>
                            <label for="seleccion">Selección Nacional *</label>
                          </div>
                        </div>
                        <div class="col-12 col-md-6" v-show="muestra_tipo">
                          <div class="form-floating compact-floating">
                            <select class="form-select custom-input" :class="{ 'input-error': afiliadoError.tipo_seleccion }" v-model="afiliado.tipo_seleccion" id="tipo_seleccion">
                              <option value="" class="dark-option">Seleccionar</option>
                              <option value="Mayor" class="dark-option">Mayor</option>
                              <option value="Inferiores" class="dark-option">Inferiores</option>
                            </select>
                            <label for="tipo_seleccion">Tipo de Selección *</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- BOTÓN Y LEGAL -->
                    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center glass-bottom-bar p-3 rounded-4 shadow-sm border-light-glass mt-4">
                      <div class="legal-compact me-md-3 mb-3 mb-md-0">
                        <div class="form-check custom-check mb-1">
                          <input class="form-check-input" :class="{ 'input-error': afiliadoError.terminos }" type="checkbox" v-model="afiliado.terminos" id="check1" />
                          <label class="form-check-label x-small text-slate-300" for="check1">
                            Por medio de la presente, solicito mi afiliación como Asociado Jugador de la AM FUT PRO, A.C., de acuerdo con las disposiciones legales, reglamentarias y estatutarias que resulten aplicables. Asimismo, me comprometo a cumplir y respetar las disposiciones emanadas de la Asociación, una vez afiliado con el carácter que corresponda atendiendo la presente solicitud.
                          </label>
                        </div>
                        <div class="form-check custom-check">
                          <input class="form-check-input" :class="{ 'input-error': afiliadoError.aviso }" type="checkbox" v-model="afiliado.aviso" id="check2" />
                          <label class="form-check-label x-small text-slate-300" for="check2">
                            Acepto el <a href="#" data-toggle="modal" data-target="#avisoprivacidad" class="fw-bold text-success text-decoration-none">Aviso de Privacidad y Política de Protección de Datos</a>.
                          </label>
                        </div>
                      </div>
                      <div class="text-end flex-shrink-0">
                        <button type="submit" class="btn btn-premium w-100 shadow-lg">
                          <i class="material-icons align-middle me-1">check_circle</i> COMPLETAR AFILIACIÓN
                        </button>
                      </div>
                    </div>

                  </div>
                </transition>

              </form>
            </div>
          </transition>
        </div>
      </div>
    </div>
    
    <div class="loadingprincipal" v-show="verloading">
      <div class="cube-wrapper">
        <div class="cube-folding">
          <span class="leaf1"></span><span class="leaf2"></span>
          <span class="leaf3"></span><span class="leaf4"></span>
        </div>
        <span class="loadingtexto" data-name="Loading">Enviando</span>
      </div>
    </div>

    <!-- MODERNO OVERLAY DE ESCANEO OCR CON IA -->
    <transition name="fade">
      <div v-if="escaneandoINEFrente" class="ocr-scanner-overlay">
        <div class="scanner-container">
          <div class="scanner-corners top-left"></div>
          <div class="scanner-corners top-right"></div>
          <div class="scanner-corners bottom-left"></div>
          <div class="scanner-corners bottom-right"></div>
          <div class="laser-beam"></div>
          <i class="material-icons text-success scanner-icon">document_scanner</i>
        </div>
       <h4 class="text-white mt-4 fw-bold text-uppercase tracking-wider text-glow-green">Análisis Inteligente</h4>
<p class="text-slate-300 small mb-0">Autocompletando tu registro. Esto tomará solo unos segundos...</p>
      </div>
    </transition>

    <!-- MODAL ORIGEN ARCHIVO CON GUÍA VISUAL -->
    <div class="modal fade" id="modalOrigenArchivo" tabindex="-1" role="dialog" aria-hidden="true" style="z-index: 10060;">
      <div class="modal-dialog modal-dialog-centered px-3" role="document" style="max-width: 400px; margin: 0 auto;">
        <div class="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
          <div class="modal-header border-0 pb-0 pt-4 px-4 d-flex justify-content-center position-relative">
            <h5 class="modal-title fw-bold text-dark text-center w-100" style="font-size: 1.2rem;">Origen del Archivo</h5>
            <button type="button" class="close position-absolute end-0 top-0 mt-3 me-3 bg-transparent border-0" data-dismiss="modal" aria-label="Close" style="font-size: 1.5rem; outline: none;">
              <span aria-hidden="true" class="text-muted">&times;</span>
            </button>
          </div>
          <div class="modal-body px-4 py-4 text-center">
            
            <!-- GUÍA VISUAL PREMIUM DINÁMICA -->
            <div class="visual-guide-container mb-4">
              <div v-if="currentUploadTipo === 'documento'">
                <div class="guide-doc-frame">
                  <i class="material-icons">badge</i>
                </div>
                <p class="small text-muted mt-3 mb-0 fw-bold px-2">Alinea tu documento dentro del marco de la cámara.</p>
              </div>
              
              <div v-if="currentUploadTipo === 'perfil'">
                <div class="guide-face-frame">
                  <i class="material-icons">face</i>
                </div>
                <p class="small text-muted mt-3 mb-0 fw-bold px-2">Asegúrate de tener buena iluminación en tu rostro.</p>
              </div>
            </div>

            <div class="d-flex flex-column gap-3">
              <button type="button" @click="triggerFileInput(true)" class="btn btn-premium w-100 shadow-sm" style="border-radius: 50px; padding: 12px; font-size: 1.05rem;">
                <i class="material-icons align-middle me-2">photo_camera</i> Tomar Foto
              </button>
              <button type="button" @click="triggerFileInput(false)" class="btn btn-outline-dark w-100 fw-bold" style="border-radius: 50px; padding: 12px; border: 2px solid #cbd5e1; font-size: 1.05rem; background: transparent;">
                <i class="material-icons align-middle me-2">photo_library</i> Elegir de Galería
              </button>
            </div>
            <button type="button" class="btn btn-link text-muted text-decoration-none mt-3 fw-bold w-100" data-dismiss="modal" style="font-size: 0.95rem;">Cancelar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL DE PRIVACIDAD COMPLETO -->
    <div class="modal fade" id="avisoprivacidad" tabindex="-1" role="dialog" aria-hidden="true" style="z-index: 10000;">
      <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
        <div class="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
          
          <div class="modal-header border-0 px-4 py-4" style="background: linear-gradient(135deg, #50c026 0%, #3e9452 100%);">
            <div class="d-flex align-items-center w-100">
              <i class="material-icons text-white me-2 fs-2">verified_user</i>
              <h4 class="modal-title text-white fw-bold mb-0">Aviso de Privacidad</h4>
            </div>
            <button type="button" class="close bg-transparent border-0" data-dismiss="modal" aria-label="Close" style="font-size: 2rem; line-height: 1;">
              <span aria-hidden="true" style="color: white; font-weight: 300;">&times;</span>
            </button>
          </div>
          
          <div class="modal-body px-4 px-lg-5 py-5" style="background-color: #f8f9fa;">
            <div class="container-fluid max-w-800 mx-auto">
              
              <div class="text-center pb-4 mb-4 border-bottom border-light">
                <img src="recursos/logo.png" width="160px" alt="Logo AMFpro" class="mb-3" />
                <h3 class="fw-black text-dark display-6 mb-2" style="letter-spacing: -1px;">AM FUT PRO, A.C.</h3>
                <h6 class="text-muted fw-bold text-uppercase tracking-wider">Aviso de Privacidad del Registro de Afiliados</h6>
              </div>
              
              <div class="privacy-content-wrapper text-secondary text-justify lh-lg" style="font-size: 0.95rem;">
                
                <div class="privacy-section mb-5">
                  <h5 class="fw-bold text-dark mb-3 d-flex align-items-center">
                    <i class="material-icons text-success me-2">corporate_fare</i> 
                    ¿Quién es el Responsable de recabar los datos personales?
                  </h5>
                  <p>
                    <strong class="text-dark">AM FUT PRO, A.C.,</strong> (en lo sucesivo “AMFpro”) con domicilio ubicado en Avenida Industria Automotriz, número 33, Interior 203, Colonia Corredor Industrial, Toluca Lerma, C.P. 52004, Estado de México, es responsable del tratamiento de sus datos personales en términos de lo establecido por los artículos 3, fracción XIV de la Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP), 47 de su Reglamento (RLFPDPPP), así como por las disposiciones contenidas en los artículos 1, 3 y 5 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD).
                  </p>
                </div>

                <div class="privacy-section mb-5">
                  <h5 class="fw-bold text-dark mb-3 d-flex align-items-center">
                    <i class="material-icons text-success me-2">fact_check</i> 
                    ¿Cuáles son las finalidades de tratamiento de datos personales?
                  </h5>
                  
                  <div class="premium-clean-card bg-white p-4 rounded-4 mb-4">
                    <h6 class="fw-bold text-dark mb-3 border-bottom pb-2">Finalidades Primarias:</h6>
                    <p class="small text-muted mb-2">1.1. AMFpro tratará los datos de identification y deportivos del Titular para las siguientes finalidades:</p>
                    <ul class="custom-bullet-list">
                      <li>Dar de alta a los jugadores asociados en los sistemas y bases de datos de la AMFpro.</li>
                      <li>Realizar los trámites de afiliación y registro como asociado de la AMFpro.</li>
                      <li>Identificar y contactar a los jugadores asociados.</li>
                      <li>Generar las credenciales de los jugadores afiliados de la AMFpro.</li>
                      <li>Confirmar, actualizar y corregir los datos personales de contacto registrados por la AMFpro.</li>
                      <li>Brindar asesoría jurídica a los asociados.</li>
                      <li>Mantener a los asociados informados sobre el estatus de sus procesos legales.</li>
                      <li>Enviar a los asociados información sobre eventos y actividades que realice la AMFpro.</li>
                      <li>Registrar y confirmar la asistencia de los asociados a las diferentes activities realizadas por la asociación.</li>
                      <li>Envío de noticias de última hora (flashes informativos), de interés para los futbolistas asociados.</li>
                      <li>Contactar a los asociados, ya sea por correo electrónico o telefónicamente para compartirles información a la que tengan derecho como miembros de la AMFpro.</li>
                      <li>Atender sus dudas y comentarios de los asociados recibidos a través del correo electrónico, redes sociales, telefónicamente o por videoconferencias.</li>
                      <li>Elaboración y gestión del historial deportivo de los asociados, así como para dar seguimiento a su estatus como jugador profesional.</li>
                      <li>Integrar los expedientes físicos y electrónicos de los asociados para la resolución de controversias.</li>
                      <li>Representar al jugador asociado ante la Comisión de Conciliación y Resolución de Controversias.</li>
                      <li>Llevar a cabo el patrocinio de los asociados (únicamente de aquelos jugadores sin contrato).</li>
                      <li>Realizar el registro de los asociados en los diplomados, cursos, eventos y actividades “en línea” organizados por la AMFpro.</li>
                      <li>Cumplir con las disposiciones legales aplicables a la prestación de los servicios que brinda la AMFpro.</li>
                    </ul>

                    <p class="small text-muted mb-2 mt-4">1.2. AMFpro tratará los datos patrimoniales del Titular para las siguientes finalidades:</p>
                    <ul class="custom-bullet-list">
                      <li>Gestionar el pago de sus beneficios económicos debido al trabajo de intermediación que lleva a cabo ésta.</li>
                      <li>Dar cumplimiento a la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.</li>
                    </ul>
                  </div>

                  <div class="premium-clean-card bg-white p-4 rounded-4">
                    <h6 class="fw-bold text-dark mb-3 border-bottom pb-2">Finalidades Secundarias:</h6>
                    <p class="small text-muted mb-2">AMFpro tratará los datos de identificación del Titular para las siguientes finalidades no esenciales:</p>
                    <ul class="custom-bullet-list">
                      <li>Ofrecerle promociones, descuentos de institutions educativas nacionales e internacionales con las que la asociación tiene convenios.</li>
                      <li>Fines estadísticos.</li>
                      <li>Publicidad, prospección comercial y mercadotecnia.</li>
                    </ul>
                  </div>
                </div>

                <div class="privacy-section mb-5">
                  <h5 class="fw-bold text-dark mb-3 d-flex align-items-center">
                    <i class="material-icons text-success me-2">manage_accounts</i> 
                    ¿Cómo ejercer los derechos de acceso, rectificación, cancelación u oposición?
                  </h5>
                  <p>
                    El Titular podrá en todo momento ejercer sus derechos ARCO (acceso, rectificación, cancelación u oposición) respecto de sus datos personales presentando una solicitud en el formato que usted considere pertinente, misma que debe contener la información y documentación siguiente:
                  </p>
                  <ol class="custom-number-list mb-4">
                    <li>Nombre del Titular, domicilio y otro medio (correo electrónico, teléfono celular, etc.), para comunicarle la respuesta a su solicitud.</li>
                    <li>Los documentos vigentes que acrediten su identidad (copia simple en formato impreso o electrónico de su credencial de elector, pasaporte o Visa Fm2 o Fm3) o, en su caso, la representación legal del Titular (copia simple en formato impreso o electrónico de la carta poder simple con firma autógrafa del Titular, el mandatario y sus correspondientes identificaciones oficiales vigentes: credencial de elector, pasaporte o Visa Fm2 o Fm3).</li>
                    <li>La description clara y precisa de los datos respecto de los que busca ejercer alguno de los Derechos ARCO, y cualquier otro elemento o documento que facilite la localización de los datos personales del Titular.</li>
                  </ol>
                  <p>
                    En el caso de las solicitudes de rectificación de datos personales, el Titular deberá también indicar las modificaciones a realizarse y aportar la documentación que sustente su petición.<br><br>
                    Para dar cumplimiento a la obligación de acceso a sus datos personales, se hará previa acreditación de la identidad del Titular o personalidad del representante; poniendo la información a disposición en sitio en el domicilio del Responsable. Se podrá acordar otro medio entre el Titular y el Responsable siempre que la información solicitada así lo permita.<br><br>
                    Para ejercer sus derechos ARCO, la revocación de su consentimiento y los demás derechos previstos en la LFPDPPP ponemos a su disposición los siguientes medios:
                  </p>
                  
                  <div class="contact-info-box p-3 bg-white rounded-3 shadow-sm border border-light mb-4 text-center">
                    <p class="mb-2"><strong class="text-dark">Correo electrónico:</strong> <a href="mailto:arco@amfpro.mx" class="text-success text-decoration-none">arco@amfpro.mx</a></p>
                    <p class="mb-0"><strong class="text-dark">Presencialmente:</strong> Avenida Industria Automotriz, número 33, Interior 203, Colonia Corredor Industrial, Toluca Lerma, C.P. 52004, Estado de México.</p>
                  </div>
                  
                  <p>
                    AMFpro responderá al Titular en un plazo máximo de veinte días hábiles, contados desde la fecha hábil en que se recibió la solicitud a efecto de que, si resulta procedente, haga efectiva la misma dentro de los quince días hábiles siguientes a que se comunique la respuesta. En todos los casos, la respuesta se dará por la misma vía por la que haya presentado su solicitud o en su caso por cualquier otro medio acordado con el Titular. Los plazos antes referidos podrán ser ampliados en términos de la LFPDPPP.
                  </p>
                </div>

                <div class="privacy-section mb-5">
                  <h5 class="fw-bold text-dark mb-3 d-flex align-items-center">
                    <i class="material-icons text-success me-2">share</i> 
                    ¿Con quiénes se transfieren los datos personales?
                  </h5>
                  <p>
                    Los datos personales recabados por la AMFpro, podrán compartirse con la Federación Mexicana de Fútbol Asociación, A.C., y sus integrantes, a efecto de gestionar actividades de intermediación de pago de salarios que requieran nuestros asociados. Esta transferencia es necesaria para dar cumplimiento a los trabajos establecidos en beneficio de los asociados, por lo que será necesario contar con el consentimiento expreso del titular de los datos, el cual será recabado a través de un formato especifico.<br><br>
                    También le comunicamos que sus datos personales podrán compartirse con los proveedores de bienes y servicios que nos auxilian, para proveer de estos a los requeridos por nuestros asociados, los cuáles son necesarios para dar cumplimiento a nuestra función de intermediación, por lo que para esta transferencia no será necesario contar con el consentimiento expreso del titular de los datos, de conformidad con lo señalado por el artículo 37, fracción VII de la LFPDPPP, así como por lo dispuesto por el artículo 44 del RGPD. Los receptores de los datos personales, están obligados por virtud del contrato correspondiente, a mantener la confidencialidad de los datos personales suministrados y a observar el presente Aviso de Privacidad.<br><br>
                    Salvo los casos señalados con anterioridad y a menos que se actualice alguno de los supuestos contenidos en el artículo 37 de la LFPDPPP y 49 del RGPD, los datos proporcionados por nuestros Asociados y visitantes no serán transmitidos en ninguna otra circunstancia.
                  </p>
                </div>

                <div class="text-center mt-5 pt-4 border-top border-light">
                  <p class="small text-muted fw-bold mb-0">Fecha de última actualización: 26 de Febrero de 2024.</p>
                </div>

              </div>
            </div>
          </div>
          
          <div class="modal-footer border-0 px-4 py-3 bg-white border-top border-light">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4 fw-bold shadow-sm" data-dismiss="modal">Cerrar documento</button>
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
  
  directives: {
    outsideClick: {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
      },
      unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
      }
    }
  },
  
  watch: {
    afiliado: {
      handler(val) {
        this.guardarBorrador();
        
        Object.keys(this.afiliadoError).forEach(key => {
          if (this.afiliadoError[key]) {
            if (typeof val[key] === 'boolean' && val[key] === true) {
              this.afiliadoError[key] = false;
            } else if (typeof val[key] === 'string' && val[key].trim() !== '') {
              this.afiliadoError[key] = false;
            } else if (val[key] instanceof File || val[key] instanceof Blob) {
              this.afiliadoError[key] = false;
            }
          }
        });
      },
      deep: true
    },
    es_mayor_edad(val) {
        this.guardarBorrador();
        if(val !== '') this.afiliadoError.es_mayor_edad = false;
    },
    tipo_identificacion_menor(val) {
        this.guardarBorrador();
        if(val !== '') this.afiliadoError.tipo_identificacion_menor = false;
    },
    tipo_identificacion_extranjero(val) {
        if(val !== '') this.afiliadoError.tipo_identificacion_extranjero = false;
    }
  },

  mounted() {
    toastr.options = { "closeButton": true, "progressBar": true, "positionClass": "toast-top-right", "timeOut": "4000" };
    
    const pendienteJuridico = localStorage.getItem('pendiente_juridico');
    if (pendienteJuridico) {
        const datosGuardados = JSON.parse(pendienteJuridico);
        if(datosGuardados.nui) {
            this.nuiPreValidacion = datosGuardados.nui;
            this.afiliado.nui = datosGuardados.nui;
            this.pasoPreValidacion = false; 
        }
    }
  },
  data() {
    return {
      pasoPreValidacion: true,
      registroExitoso: false, 
      fotoPreview: null, 
      
      nuiPreValidacion: '',
      verificandoNuiInicial: false,

      muestra_categoria: false,
      muestra_tipo: false,
      verloading: false,
      
      es_mayor_edad: "", 
      tipo_identificacion_menor: "", 
      
      busquedaPais: "",
      dropdownPaisAbierto: false,
      lista_paises: [
        'México', 'Afganistán', 'Albania', 'Alemania', 'Andorra', 'Angola', 'Anguila', 'Antigua y Barbuda', 
        'Arabia Saudita', 'Argelia', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaiyán', 
        'Bahamas', 'Bangladés', 'Barbados', 'Baréin', 'Bélgica', 'Belice', 'Benín', 'Bermudas', 'Bielorrusia', 
        'Birmania', 'Bolivia', 'Bonaire', 'Bosnia y Herzegovina', 'Botsuana', 'Brasil', 'Brunéi', 'Bulgaria', 
        'Burkina Faso', 'Burundi', 'Bután', 'Cabo Verde', 'Camboya', 'Camerún', 'Canadá', 'Catar', 'Chad', 
        'Chile', 'China', 'Chipre', 'Ciudad del Vaticano', 'Colombia', 'Comoras', 'Corea del Norte', 
        'Corea del Sur', 'Costa de Marfil', 'Costa Rica', 'Croacia', 'Cuba', 'Curazao', 'Dinamarca', 
        'Dominica', 'Ecuador', 'Egipto', 'El Salvador', 'Emiratos Árabes Unidos', 'Eritrea', 'Escocia', 
        'Eslovaquia', 'Eslovenia', 'España', 'Estados Unidos', 'Estonia', 'Etiopía', 'Filipinas', 'Finlandia', 
        'Fiyi', 'Francia', 'Gabón', 'Gales', 'Gambia', 'Georgia', 'Ghana', 'Gibraltar', 'Granada', 'Grecia', 
        'Guadalupe', 'Guam', 'Guatemala', 'Guayana Francesa', 'Guinea', 'Guinea ecuatorial', 'Guinea-Bisáu', 
        'Guyana', 'Haití', 'Honduras', 'Hong Kong', 'Hungría', 'India', 'Indonesia', 'Inglaterra', 'Irak', 
        'Irán', 'Irlanda', 'Irlanda del Norte', 'Islandia', 'Islas Caimán', 'Islas Cook', 'Islas Feroe', 
        'Islas Marshall', 'Islas Salomón', 'Islas Turcas y Caicos', 'Islas Vírgenes Británicas', 
        'Islas Vírgenes de los Estados Unidos', 'Israel', 'Italia', 'Jamaica', 'Japón', 'Jordania', 
        'Kazajistán', 'Kenia', 'Kirguistán', 'Kiribati', 'Kosovo', 'Kuwait', 'Laos', 'Lesoto', 'Letonia', 
        'Líbano', 'Liberia', 'Libia', 'Liechtenstein', 'Lituania', 'Luxemburgo', 'Macao', 'Macedonia del Norte', 
        'Madagascar', 'Malasia', 'Malaui', 'Maldivas', 'Malí', 'Malta', 'Marruecos', 'Martinica', 'Mauricio', 
        'Mauritania', 'Micronesia', 'Moldavia', 'Mónaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Mozambique', 
        'Namibia', 'Nauru', 'Nepal', 'Nicaragua', 'Níger', 'Nigeria', 'Noruega', 'Nueva Caledonia', 
        'Nueva Zelanda', 'Omán', 'Países Bajos', 'Pakistán', 'Palaos', 'Palestina', 'Panamá', 
        'Papúa Nueva Guinea', 'Paraguay', 'Perú', 'Polonia', 'Portugal', 'Puerto Rico', 
        'República Centroafricana', 'República Checa', 'República del Congo', 'República Democrática del Congo', 
        'República Dominicana', 'Ruanda', 'Rumanía', 'Rusia', 'Samoa', 'Samoa Americana', 
        'San Cristóbal y Nieves', 'San Marino', 'San Martín', 'San Vicente y las Granadinas', 'Santa Lucía', 
        'Santo Tomé y Príncipe', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leona', 'Singapur', 'Siria', 
        'Somalia', 'Sri Lanka', 'Suazilandia', 'Sudáfrica', 'Sudán', 'Sudán del Sur', 'Suecia', 'Suiza', 
        'Surinam', 'Tahití', 'Tailandia', 'Taiwán', 'Tanzania', 'Tayikistán', 'Timor Oriental', 'Togo', 
        'Tonga', 'Trinidad y Tobago', 'Túnez', 'Turkmenistán', 'Turquía', 'Tuvalu', 'Ucrania', 'Uganda', 
        'Uruguay', 'Uzbekistán', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Yibuti', 'Zambia', 'Zimbabue'
      ],

      busquedaClub: "",
      dropdownClubAbierto: false, 
      
      escaneandoINEFrente: false, 
      buscandoCURP: false,
      mostrarFormularioCompleto: false, 
      
      sexoAutocompletado: false,
      nacimientoAutocompletado: false,
      nombreAutocompletado: false,
      curpAutocompletada: false,
      
      tipo_identificacion_extranjero: '',

      currentUploadRef: '',
      currentUploadTipo: '',

      afiliado: {
        nombre: "", apellido_pat: "", apellido_mat: "", sexo: "",
        nacionalidad: "", escolaridad: "", mail: "", curp: "",
        nacimiento: "", calle: "", celular: "", nui: "",
        division: "", club: "", categoria: "", seleccion: "",
        tipo_seleccion: "", terminos: false, aviso: false,
        pdf: "", pdf2: "", foto: "", fec_registro: ''
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
        pdf2: false, foto: false, es_mayor_edad: false, tipo_identificacion_menor: false, tipo_identificacion_extranjero: false
      },
      
      exisNui: [],
      nombre_archivo_frente: 'Examinar...',
      nombre_archivo_atras: 'Examinar...',
      nombre_archivo_foto: 'Examinar...'
    }
  },
  computed: {
    clubesFiltrados() {
      if (!this.lista_equipos) return [];
      let filtrados = this.lista_equipos.filter(equipo => equipo.nombre.toLowerCase().includes(this.busquedaClub.toLowerCase()));
      return filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }));
    },
    paisesFiltrados() {
      let filtrados = this.lista_paises.filter(pais => pais.toLowerCase().includes(this.busquedaPais.toLowerCase()));
      filtrados.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
      const indiceMexico = filtrados.indexOf('México');
      if (indiceMexico > -1) {
        filtrados.splice(indiceMexico, 1);
        filtrados.unshift('México');
      }
      return filtrados;
    }
  },
  methods: {
    
    guardarBorrador() {
        if (this.pasoPreValidacion || this.registroExitoso) return;
        
        const dataToSave = {
          es_mayor_edad: this.es_mayor_edad,
          tipo_identificacion_menor: this.tipo_identificacion_menor,
          nombre: this.afiliado.nombre, apellido_pat: this.afiliado.apellido_pat, apellido_mat: this.afiliado.apellido_mat, sexo: this.afiliado.sexo,
          nacionalidad: this.afiliado.nacionalidad, escolaridad: this.afiliado.escolaridad, mail: this.afiliado.mail, curp: this.afiliado.curp,
          nacimiento: this.afiliado.nacimiento, calle: this.afiliado.calle, celular: this.afiliado.celular, nui: this.afiliado.nui,
          division: this.afiliado.division, club: this.afiliado.club, categoria: this.afiliado.categoria, seleccion: this.afiliado.seleccion,
          tipo_seleccion: this.afiliado.tipo_seleccion, terminos: this.afiliado.terminos, aviso: this.afiliado.aviso
        };
        localStorage.setItem('amfpro_registro_borrador', JSON.stringify(dataToSave));
    },

    descargarCredencial(event) {
      const btn = event.currentTarget;
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Guardando...';
      btn.disabled = true;

      if (!window.html2canvas) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = () => this.capturarCredencial(btn, originalText);
        document.head.appendChild(script);
      } else {
        this.capturarCredencial(btn, originalText);
      }
    },

    capturarCredencial(btn, originalText) {
      const target = document.getElementById('credencial-digital');
      window.html2canvas(target, { backgroundColor: null, scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = `Credencial_AMFpro_${this.afiliado.nui}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        btn.innerHTML = '<i class="material-icons align-middle me-2">check</i> ¡Descargada!';
        setTimeout(() => { btn.innerHTML = originalText; btn.disabled = false; }, 3000);
      }).catch(err => {
        console.error(err);
        btn.innerHTML = originalText; 
        btn.disabled = false; 
        toastr.error('Hubo un problema al guardar la imagen.');
      });
    },

    seleccionarMetodoArchivo(refName, tipo = 'documento') {
      this.currentUploadRef = refName;
      this.currentUploadTipo = tipo;
      const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (!esMovil) {
        this.triggerFileInput(false);
        return;
      }
      window.$('#modalOrigenArchivo').modal('show');
    },

    triggerFileInput(useCamera) {
      const input = this.$refs[this.currentUploadRef];
      if (!input) return;
      if (useCamera) {
        input.setAttribute('capture', this.currentUploadTipo === 'perfil' ? 'user' : 'environment');
      } else {
        input.removeAttribute('capture');
      }
      window.$('#modalOrigenArchivo').modal('hide');
      input.click();
    },

    limpiarNUIPre() {
        this.nuiPreValidacion = this.nuiPreValidacion.replace(/\D/g, '');
    },
    
    verificarNuiInicial() {
        if(!this.nuiPreValidacion) return;
        this.verificandoNuiInicial = true;
        
        axios.get(`registro/existe_nui/${this.nuiPreValidacion}`)
        .then(res => {
            let existeJugador = false;
            if (Array.isArray(res.data) && res.data.length > 0) { 
                existeJugador = true; 
            } else if (res.data && typeof res.data === 'object' && Object.keys(res.data).length > 0) { 
                existeJugador = true; 
            }

            if (existeJugador) {
                window.Swal.fire({
                    html: `
                        <div class="text-center mb-2">
                            <div class="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-circle mb-3" style="width: 80px; height: 80px;">
                                <i class="material-icons" style="font-size: 3rem;">how_to_reg</i>
                            </div>
                            <h3 class="fw-black text-dark mb-2" style="letter-spacing: -0.5px;">¡Ya estás afiliado!</h3>
                            <p class="text-muted" style="font-size: 0.95rem; line-height: 1.5;">
                                El NUI ingresado ya está activo en nuestra base de datos.
                            </p>
                            <div class="bg-light rounded-4 p-3 mt-4 mb-2 border border-light-subtle">
                                <p class="mb-0 fw-bold text-dark" style="font-size: 0.95rem;">Selecciona el tema de tu interés para dirigirte a la sección correspondiente y obtengas más información.</p>
                            </div>
                        </div>
                    `,
                    showCancelButton: true,
                    showCloseButton: true,
                    confirmButtonText: '<i class="material-icons align-middle me-2">gavel</i> Asesoría Jurídica',
                    cancelButtonText: '<i class="material-icons align-middle me-2">school</i> Convenios Educativos',
                    customClass: { popup: 'swal-premium-popup border-0', confirmButton: 'btn-swal-premium-success mb-2', cancelButton: 'btn-swal-premium-secondary mb-2' },
                    buttonsStyling: false, focusConfirm: false
                }).then((result) => {
                    if (result.isConfirmed) { window.location.href = 'inicio#juridico'; } 
                    else if (result.dismiss === window.Swal.DismissReason.cancel) { window.location.href = 'inicio#convenios'; } 
                    else { window.location.href = 'inicio'; }
                });
            } else {
                this.afiliado.nui = this.nuiPreValidacion;

                const borrador = localStorage.getItem('amfpro_registro_borrador');
                if (borrador) {
                    try {
                        const parsed = JSON.parse(borrador);
                        if (parsed.nui === this.afiliado.nui) {
                            Object.keys(parsed).forEach(k => { 
                                if(k !== 'es_mayor_edad' && k !== 'tipo_identificacion_menor') this.afiliado[k] = parsed[k]; 
                            });
                            
                            if (parsed.es_mayor_edad) this.es_mayor_edad = parsed.es_mayor_edad;
                            if (parsed.tipo_identificacion_menor) this.tipo_identificacion_menor = parsed.tipo_identificacion_menor;
                            
                            if (this.afiliado.nacionalidad) { this.esMexicano(this.afiliado.nacionalidad, true); }
                            if (this.afiliado.division) { this.listaEquipos(this.afiliado.division, true); }
                            if (this.afiliado.seleccion === 'Si') { this.muestra_tipo = true; }
                            
                            if (this.es_mayor_edad === 'Menor') {
                                this.mostrarFormularioCompleto = true;
                            } else if (this.es_mayor_edad === 'Mayor') {
                                if (!this.mexicano) {
                                    this.mostrarFormularioCompleto = true;
                                } else if (this.afiliado.nombre || this.afiliado.curp) {
                                    this.mostrarFormularioCompleto = true;
                                }
                            }
                        }
                    } catch(e) { console.log("Borrador inválido", e); }
                }

                window.Swal.fire({
                    icon: 'info',
                    title: '¡Vaya!',
                    text: 'No te encuentras registrado. Por favor, completa el siguiente formulario para afiliarte a la AMFpro.',
                    confirmButtonText: '<i class="material-icons align-middle me-1">edit_document</i> Llenar Formulario',
                    customClass: { confirmButton: 'btn-swal-premium-success' }, 
                    buttonsStyling: false
                }).then(() => {
                    this.pasoPreValidacion = false;
                });
            }
        })
        .catch(err => {
            console.error(err);
            toastr.error('Error al verificar conexión. Intenta de nuevo.');
        })
        .finally(() => {
            this.verificandoNuiInicial = false;
        });
    },

    toggleDropdownPais() {
      this.dropdownPaisAbierto = !this.dropdownPaisAbierto;
      if (this.dropdownPaisAbierto) {
        this.busquedaPais = "";
        this.$nextTick(() => { if (this.$refs.searchPaisInput) this.$refs.searchPaisInput.focus(); });
      }
    },
    cerrarDropdownPais() { this.dropdownPaisAbierto = false; },
    seleccionarPais(pais) { 
      this.afiliado.nacionalidad = pais; 
      this.cerrarDropdownPais();
      this.esMexicano(pais); 
    },

    formatPhone(e) {
      let input = e.target.value.replace(/\D/g, ''); 
      if (input.length > 10) input = input.substring(0, 10); 
      let formatted = input;
      if (input.length > 2 && input.length <= 6) { formatted = `(${input.substring(0,2)}) ${input.substring(2)}`; } 
      else if (input.length > 6) { formatted = `(${input.substring(0,2)}) ${input.substring(2,6)} - ${input.substring(6)}`; }
      this.afiliado.celular = formatted;
    },

    limpiarArchivosExtranjero() {
      this.afiliado.pdf = "";
      this.afiliado.pdf2 = "";
      this.nombre_archivo_frente = "Examinar...";
      this.nombre_archivo_atras = "Examinar...";
    },
    
    limpiarArchivosMenor() {
      this.afiliado.pdf = "";
      this.afiliado.pdf2 = "";
      this.nombre_archivo_frente = "Examinar...";
      this.nombre_archivo_atras = "Examinar...";
    },
    
    limpiarDocumentosEdad() {
      this.afiliado.pdf = "";
      this.afiliado.pdf2 = "";
      this.afiliado.foto = "";
      this.nombre_archivo_frente = "Examinar...";
      this.nombre_archivo_atras = "Examinar...";
      this.nombre_archivo_foto = "Examinar...";
      this.tipo_identificacion_menor = "";
      this.tipo_identificacion_extranjero = "";
      
      if (this.es_mayor_edad === 'Mayor' && this.mexicano) {
          this.mostrarFormularioCompleto = false;
      } else {
          this.mostrarFormularioCompleto = true;
      }
    },

    ineFrente() { 
      this.file = this.$refs.filefrente.files[0];
      if(!this.file) return;
      if (!['image/jpeg', 'image/jpg', 'image/png'].includes(this.file.type)) {
        swal('Solo se permiten imágenes en formato JPEG, JPG o PNG', { position: 'center', icon: 'error', buttons: false, timer: 1600 });
        this.$refs.filefrente.value = null; return;
      }
      this.afiliado.pdf = this.file;
      this.nombre_archivo_frente = this.file.name;
      
      this.escanearDocumento(this.file);
    },
    
    ineFrenteManual(refName = 'filefrente') {
      this.file = this.$refs[refName].files[0];
      if(!this.file) return;
      if (!['image/jpeg', 'image/jpg', 'image/png'].includes(this.file.type)) {
        swal('Solo se permiten imágenes en formato JPEG, JPG o PNG', { position: 'center', icon: 'error', buttons: false, timer: 1600 });
        this.$refs[refName].value = null; return;
      }
      this.afiliado.pdf = this.file;
      this.nombre_archivo_frente = this.file.name;
    },

    async escanearDocumento(file) {
      this.escaneandoINEFrente = true; 

      try {
        let formData = new FormData();
        formData.append('imagen', file); 

        const response = await axios.post('registro/escanear-ine', formData);
        const ocrData = response.data.data.parse_ocr;

        const obtenerValorOCR = (tipo) => {
            const campo = ocrData.find(item => item.type === tipo);
            return campo ? campo.value : '';
        };

        this.afiliado.nombre = obtenerValorOCR('Name');
        this.afiliado.apellido_pat = obtenerValorOCR('FatherSurname');
        this.afiliado.apellido_mat = obtenerValorOCR('MotherSurname');
        this.afiliado.nacionalidad = obtenerValorOCR('AddressCountry')
        this.afiliado.curp = obtenerValorOCR('PersonalNumber'); 
        
        const domicilioINE = obtenerValorOCR('PermanentAddress');
        if(domicilioINE) {
            this.afiliado.calle = domicilioINE;
        }

        if(this.afiliado.curp) {
           this.nombreAutocompletado = true;
           this.curpAutocompletada = true;
           toastr.success('Los datos se han extraído y cargado correctamente.', '¡Escaneo exitoso!');
           
           this.procesarCURP();
        } else {
           toastr.warning('No se pudo detectar la CURP clara en la imagen.', 'Revisa la foto');
        }

      } catch (error) {
        console.error(error);
        toastr.error('No pudimos leer la imagen con claridad. Por favor, ingresa tus datos manualmente.', 'Error de lectura');
      } finally {
        this.escaneandoINEFrente = false;
        this.mostrarFormularioCompleto = true; 
        
        setTimeout(() => { 
          this.nombreAutocompletado = false;
          this.curpAutocompletada = false;
        }, 4000);
      }
    },

    procesarCURP() {
      this.afiliado.curp = this.afiliado.curp.toUpperCase();
      const curpVal = this.afiliado.curp;
      
      if (curpVal.length === 18) {
        const sexoChar = curpVal.charAt(10);
        if (sexoChar === 'H') { this.afiliado.sexo = 'Masculino'; this.sexoAutocompletado = true; } 
        else if (sexoChar === 'M') { this.afiliado.sexo = 'Femenino'; this.sexoAutocompletado = true; }

        let yy = curpVal.substring(4, 6); let mm = curpVal.substring(6, 8); let dd = curpVal.substring(8, 10);
        const homoclave1 = curpVal.charAt(16);
        const siglo = isNaN(homoclave1) ? '20' : '19';
        
        this.afiliado.nacimiento = `${siglo}${yy}-${mm}-${dd}`;
        this.nacimientoAutocompletado = true;

        setTimeout(() => { this.sexoAutocompletado = false; this.nacimientoAutocompletado = false; this.nombreAutocompletado = false; }, 4000);
      }
    },

    toggleDropdownClub() {
      if (this.selectDisabled) return;
      this.dropdownClubAbierto = !this.dropdownClubAbierto;
      if (this.dropdownClubAbierto) {
        this.busquedaClub = "";
        this.$nextTick(() => { if (this.$refs.searchClubInput) this.$refs.searchClubInput.focus(); });
      }
    },
    cerrarDropdownClub() { this.dropdownClubAbierto = false; },
    seleccionarClub(clubNombre) { this.afiliado.club = clubNombre; this.cerrarDropdownClub(); },

    listaEquipos(division, isDraft = false) {
      if(!isDraft) {
          this.afiliado.club = ""; this.afiliado.categoria = ""; this.busquedaClub = ""; 
      }
      this.cerrarDropdownClub();
      
      if (division == "") {
        this.selectDisabled = true; this.selectDisabled2 = true; this.muestra_categoria = false; this.lista_equipos = [];
      } else {
        let nuevaDiv = division;
        if (['Sub 13', 'Sub 14', 'Sub 15', 'Sub 16', 'Sub 17', 'Sub 18', 'Sub 19', 'Sub 20', 'Sub 23'].includes(division)) { nuevaDiv = 'Liga MX'; }
        axios.post('registro/devuelve-equipos', { nuevaDiv: nuevaDiv }).then(res => { this.lista_equipos = res.data; }).catch(error => { console.error(error); });
        
        this.selectDisabled = false;
        if (division == "Liga Expansión MX" || division == "Liga Premier" || division == "Liga TDP") {
          this.selectDisabled2 = true; this.muestra_categoria = false;
          if(!isDraft) this.afiliado.categoria = ''; 
        } else {
          this.selectDisabled2 = false; this.muestra_categoria = true;
        }
        if (division == "Otro") {
          this.selectDisabled = true; this.selectDisabled2 = true; this.muestra_categoria = false; this.lista_equipos = [{ nombre: 'Otro' }];
          if(!isDraft) this.afiliado.club = 'Otro'; 
        }
      }
    },
    
    ineAtras(refName = 'fileatras') { this.manejarArchivo(refName, 'pdf2', 'nombre_archivo_atras'); },
    ineFoto(refName = 'filefoto') { 
      this.manejarArchivo(refName, 'foto', 'nombre_archivo_foto'); 
      if (this.afiliado.foto) {
        this.fotoPreview = URL.createObjectURL(this.afiliado.foto);
      }
    },
    
    manejarArchivo(refName, propName, nameProp) {
      this.file = this.$refs[refName].files[0];
      if(!this.file) return;
      if (!['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'].includes(this.file.type)) {
        swal('Solo se permiten imágenes (JPEG, PNG) o PDF', { position: 'center', icon: 'error', buttons: false, timer: 1600 });
        this.$refs[refName].value = null; return;
      }
      this.afiliado[propName] = this.file;
      this[nameProp] = this.file.name;
    },

    createAfiliado() {
      if (this.es_mayor_edad === 'Mayor' && !this.mexicano && this.tipo_identificacion_extranjero === 'Pasaporte') {
        this.afiliado.pdf2 = this.afiliado.pdf;
      } else if (this.es_mayor_edad === 'Menor' && (this.tipo_identificacion_menor === 'Pasaporte' || this.tipo_identificacion_menor === 'Certificado')) {
        this.afiliado.pdf2 = this.afiliado.pdf;
      }

      Object.keys(this.afiliadoError).forEach(key => this.afiliadoError[key] = false);
      let valid = true;

      if (this.afiliado.nacionalidad == "") { toastr.error('Seleccionar País'); this.afiliadoError.nacionalidad = true; valid = false; }
      if (this.es_mayor_edad == "") { toastr.error('Seleccionar si eres mayor o menor de edad'); this.afiliadoError.es_mayor_edad = true; valid = false; }
      
      if (this.es_mayor_edad === 'Mayor') {
          if (!this.mexicano && this.tipo_identificacion_extranjero === "") { toastr.error('Seleccionar Tipo de Documento'); this.afiliadoError.tipo_identificacion_extranjero = true; valid = false; }
      } else if (this.es_mayor_edad === 'Menor') {
          if (this.tipo_identificacion_menor === "") { toastr.error('Seleccionar Tipo de Documento Menor'); this.afiliadoError.tipo_identificacion_menor = true; valid = false; }
      }

      if (this.afiliado.pdf == "") { toastr.error('Adjuntar archivo frente del documento'); this.afiliadoError.pdf = true; valid = false; }
      if (this.afiliado.pdf2 == "") { toastr.error('Adjuntar archivo atrás del documento'); this.afiliadoError.pdf2 = true; valid = false; }
      if (this.afiliado.foto == "") { toastr.error('Adjuntar archivo de foto de perfil'); this.afiliadoError.foto = true; valid = false; }
      
      if (this.afiliado.nombre == "") { toastr.error('Ingresar nombre'); this.afiliadoError.nombre = true; valid = false; } 
      else if(!this.validarCaracteresEspeciales(this.afiliado.nombre)) { toastr.error('El nombre no debe contener números o algunos caracteres especiales'); this.afiliadoError.nombre = true; valid = false; }
      if (this.afiliado.apellido_pat == "") { toastr.error('Ingresar apellido paterno'); this.afiliadoError.apellido_pat = true; valid = false; } 
      else if(!this.validarCaracteresEspeciales(this.afiliado.apellido_pat)) { toastr.error('El apellido paterno no debe contener números'); this.afiliadoError.apellido_pat = true; valid = false; }
      if (this.afiliado.apellido_mat == "") { toastr.error('Ingresar apellido materno'); this.afiliadoError.apellido_mat = true; valid = false; } 
      else if(!this.validarCaracteresEspeciales(this.afiliado.apellido_mat)) { toastr.error('El apellido materno no debe contener números'); this.afiliadoError.apellido_mat = true; valid = false; }
      
      if (this.afiliado.curp == "") { toastr.error('Ingresar registro de identidad'); this.afiliadoError.curp = true; valid = false; }
      if (this.afiliado.sexo == "") { toastr.error('Seleccionar sexo'); this.afiliadoError.sexo = true; valid = false; }
      if (this.afiliado.nacimiento == "") { toastr.error('Ingresar fecha de nacimiento'); this.afiliadoError.nacimiento = true; valid = false; }
      // if (this.afiliado.escolaridad == "") { toastr.error('Seleccionar grado escolar'); this.afiliadoError.escolaridad = true; valid = false; }
      
      if (this.afiliado.calle == "") { toastr.error('Ingresa tu domicilio completo'); this.afiliadoError.calle = true; valid = false; }
      if (this.afiliado.celular == "") { toastr.error('Ingresar teléfono celular'); this.afiliadoError.celular = true; valid = false; } 
      else if(!this.validarCaracteresEspecialesTelefono(this.afiliado.celular)) { toastr.error('Formato incorrecto en celular'); this.afiliadoError.celular = true; valid = false; }
      if (this.afiliado.mail == "") { toastr.error('Ingresar email'); this.afiliadoError.mail = true; valid = false; } 
      else if(!this.validarFormatoCorreo(this.afiliado.mail)) { toastr.error('Ingrese un correo electrónico válido'); this.afiliadoError.mail = true; valid = false; }
      
      if (this.afiliado.nui == "") { toastr.error('Ingresar NUI'); this.afiliadoError.nui = true; valid = false; } 
      else if(!this.validarCaracteresEspecialesNUI(this.afiliado.nui)) { toastr.error('NUI formato incorrecto'); this.afiliadoError.nui = true; valid = false; }
      if (this.afiliado.division == "") { toastr.error('Seleccionar division'); this.afiliadoError.division = true; valid = false; }
      if (this.afiliado.club == "") { toastr.error('Seleccionar club'); this.afiliadoError.club = true; valid = false; }
      if ((this.afiliado.division === "Liga MX" || this.afiliado.division === "Liga MX Femenil") && this.afiliado.categoria === "") { toastr.error('Seleccionar una categoría'); this.afiliadoError.categoria = true; valid = false; }
      if (this.afiliado.seleccion == "") { toastr.error('Seleccionar opcion de selección'); this.afiliadoError.seleccion = true; valid = false; }
      if (this.afiliado.seleccion == "Si" && this.afiliado.tipo_seleccion == "") { toastr.error('Seleccionar tipo de selección'); this.afiliadoError.tipo_seleccion = true; valid = false; }
      
      if (this.afiliado.terminos == false) { toastr.error('Aceptar terminos'); this.afiliadoError.terminos = true; valid = false; }
      if (this.afiliado.aviso == false) { toastr.error('Aceptar Aviso de Privacidad'); this.afiliadoError.aviso = true; valid = false; }
      
      if(!valid) return;
      
      this.verloading = true;
      const f = new Date();
      this.afiliado.fec_registro = `${f.getFullYear()}-${String(f.getMonth() + 1).padStart(2, '0')}-${String(f.getDate()).padStart(2, '0')}`;

      let formData = new FormData();
      Object.keys(this.afiliado).forEach(key => {
        if(key === 'celular') {
          formData.append(key, this.afiliado[key].replace(/\D/g, ''));
        } else {
          formData.append(key, this.afiliado[key]);
        }
      });
      formData.append('es_mayor_edad', this.es_mayor_edad);
      
      axios.post('registro/create', formData).then(res => {
        localStorage.removeItem('amfpro_registro_borrador');
        this.verloading = false;
        this.mostrarFormularioCompleto = false;
        this.pasoPreValidacion = false;
        this.registroExitoso = true; 
      }).catch(error => {
        this.verloading = false;
        
        let responseData = error.response?.data;
        let errorMsg = responseData?.error || responseData?.message || 'Error de conexión al enviar el formulario.';
        
        if (
          (responseData?.errors && responseData.errors.mail) || 
          errorMsg.toLowerCase().includes('correo') || 
          errorMsg.toLowerCase().includes('email') ||
          errorMsg.toLowerCase().includes('mail')
        ) {
            toastr.error('El correo electrónico ya se encuentra registrado o ocupado.', 'Atención');
            this.afiliadoError.mail = true;
            
            setTimeout(() => {
                const el = document.getElementById('email');
                if(el) { el.focus(); el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
            }, 300);
            return;
        }
        
        if ((responseData?.errors && responseData.errors.nui) || errorMsg.toLowerCase().includes('nui')) {
            toastr.error('Este NUI ya se encuentra en nuestros registros.');
            this.afiliadoError.nui = true;
            return;
        }

        toastr.error(errorMsg);
      });
    },
    
    esMexicano(nacionalidad, isDraft = false) {
      const nacion = nacionalidad;
      const terminosGuardados = this.afiliado.terminos;
      const avisoGuardado = this.afiliado.aviso;
      const nuiGuardado = this.afiliado.nui; 

      if (!isDraft) {
          Object.assign(this.afiliado, {
            nombre: "", apellido_pat: "", apellido_mat: "", sexo: "",
            nacionalidad: nacion, escolaridad: "", mail: "", curp: "", nacimiento: "", 
            calle: "", celular: "", nui: nuiGuardado, division: "", 
            club: "", categoria: "", seleccion: "", tipo_seleccion: "", 
            terminos: terminosGuardados, aviso: avisoGuardado,
            pdf: "", pdf2: "", foto: "", fec_registro: ''
          });
          
          this.es_mayor_edad = "";
          this.tipo_identificacion_menor = "";
          this.tipo_identificacion_extranjero = "";
      } else {
          this.afiliado.nacionalidad = nacion;
      }

      this.nombre_archivo_frente = 'Examinar...';
      this.nombre_archivo_atras = 'Examinar...';
      this.nombre_archivo_foto = 'Examinar...';
      this.fotoPreview = null;
      
      if (!isDraft) {
          this.busquedaClub = "";
          this.lista_equipos = [];
          this.selectDisabled = true;
          this.selectDisabled2 = true;
          this.muestra_categoria = false;
          this.muestra_tipo = false;
      }

      Object.keys(this.afiliadoError).forEach(key => this.afiliadoError[key] = false);

      if(nacion === "") {
          this.mexicano = true; 
          this.mostrarFormularioCompleto = false;
      } else if (nacion === "México") { 
          this.mexicano = true; 
          if(!isDraft) this.mostrarFormularioCompleto = false;
      } else { 
          this.mexicano = false; 
          if(!isDraft) {
              this.afiliado.curp = "XEXX010100HMXXXX10"; 
              this.mostrarFormularioCompleto = true; 
          }
      }
    },
    validarFormatoCorreo(correo) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo); },
    validarCaracteresEspeciales(texto) { return /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s\-_]+$/.test(texto); },
    validarCaracteresEspecialesTelefono(texto) { return texto.replace(/\D/g, '').length === 10; },
    validarCaracteresEspecialesNUI(texto) { return /^[0-9]{1,6}$/.test(texto); },
    ExisteNUI(nui) {
      if(!nui) return;
      axios.get(`registro/existe_nui/${nui}`).then(res => {
        if(res.data.length != 0){
            Swal.fire({ icon: 'error', title: '¡NUI Registrado!', text: 'El NUI que ingresaste ya existe en nuestra base de datos.', confirmButtonText: 'Entendido' });
        }
      });
    },
    muestraSelectTIpo(seleccion) {
      this.muestra_tipo = seleccion == "Si";
      if(!this.muestra_tipo) this.afiliado.tipo_seleccion = "";
    }
  }
}
</script>

<style lang="scss">
@use "sass:color";

.registro-page-wrapper {
  background-image: var(--bg-desktop);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: #0f172a; 
  min-height: 100vh;
  position: relative;
  
  &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(15, 23, 42, 0.65); z-index: 1; }
  .header-main, .container { position: relative; z-index: 2; }
}

@media (max-width: 767px) { .registro-page-wrapper { background-image: var(--bg-mobile); } }
.glass-header { background: rgba(15, 23, 42, 0.7) !important; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important; }
.logo-header { object-fit: contain; transition: transform 0.3s ease; &:hover { transform: scale(1.05); } }
.btn-back-home { color: rgba(255, 255, 255, 0.8); background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.15); backdrop-filter: blur(8px); transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); i { font-size: 1.2rem; transition: transform 0.3s ease; } &:hover { background: #50c026; border-color: #50c026; color: white; box-shadow: 0 5px 15px rgba(80, 192, 38, 0.3) !important; i { transform: translateX(-4px); } } }
.tracking-wider { letter-spacing: 1px; }

.registration-card { width: 100%; background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 24px; color: white; display: flex; flex-direction: column; overflow: hidden; animation: scaleUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);padding-bottom: 125px;}
@keyframes scaleUp { from { opacity: 0; transform: scale(0.95) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }

.registration-header { padding: 30px; background: transparent; }
.border-bottom-glass { border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.text-slate-300 { color: #cbd5e1 !important; }
.icon-brand-box { background: linear-gradient(135deg, #50c026 0%, #3e9452 100%); width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; .material-icons { font-size: 1.6rem; } }
.registration-body { padding: 30px; background: transparent; }
.glass-box { background: rgba(255, 255, 255, 0.03); border-radius: 16px; padding: 20px; border: 1px solid rgba(255, 255, 255, 0.08); .section-title { font-size: 0.95rem; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; i { margin-right: 8px; font-size: 1.3rem; } } }

/* ==========================================================================
   OVERLAY DE ESCANEO OCR
   ========================================================================== */
.ocr-scanner-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(15, 23, 42, 0.92); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); z-index: 10080; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.scanner-container { width: 280px; height: 180px; background: rgba(80, 192, 38, 0.05); border-radius: 12px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; box-shadow: 0 0 40px rgba(80, 192, 38, 0.15); }
.scanner-corners { position: absolute; width: 35px; height: 35px; border-color: #50c026; border-style: solid; }
.top-left { top: 0; left: 0; border-width: 4px 0 0 4px; border-top-left-radius: 12px; }
.top-right { top: 0; right: 0; border-width: 4px 4px 0 0; border-top-right-radius: 12px; }
.bottom-left { bottom: 0; left: 0; border-width: 0 0 4px 4px; border-bottom-left-radius: 12px; }
.bottom-right { bottom: 0; right: 0; border-width: 0 4px 4px 0; border-bottom-right-radius: 12px; }
.laser-beam { position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: #50c026; box-shadow: 0 0 15px 5px rgba(80, 192, 38, 0.6); animation: scanLaser 2.5s ease-in-out infinite; z-index: 2; }
@keyframes scanLaser { 0% { top: 0; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
.scanner-icon { font-size: 5rem; opacity: 0.3; }
.text-glow-green { text-shadow: 0 0 15px rgba(80, 192, 38, 0.6); }

/* ==========================================================================
   ESTILOS DE LA CREDENCIAL DIGITAL PREMIUM
   ========================================================================== */
.digital-credential-card { width: 100%; max-width: 480px; background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 1) 100%); border: 1px solid rgba(80, 192, 38, 0.4); border-radius: 20px; padding: 30px; position: relative; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.1); transform: translateZ(0); }
.credential-shine { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.05) 45%, transparent 50%); transform: rotate(30deg); pointer-events: none; z-index: 0; }
.credential-header { position: relative; z-index: 1; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px; margin-bottom: 25px; }
.credential-logo { height: 40px; object-fit: contain; }
.credential-badge { font-size: 0.7rem; font-weight: 900; letter-spacing: 2px; color: #50c026; background: rgba(80, 192, 38, 0.15); padding: 6px 12px; border-radius: 20px; border: 1px solid rgba(80, 192, 38, 0.3); }
.credential-body { position: relative; z-index: 1; display: flex; gap: 25px; align-items: stretch; }
.credential-photo { width: 110px; height: 140px; border-radius: 12px; overflow: hidden; border: 2px solid #50c026; flex-shrink: 0; background: #000; box-shadow: 0 10px 20px rgba(0,0,0,0.3); }
.credential-photo img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
.credential-data { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; }
.credential-name { font-size: 1.25rem; font-weight: 900; color: white; text-transform: uppercase; margin-bottom: 20px; line-height: 1.2; }
.credential-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px 10px; }
.data-group { display: flex; flex-direction: column; }
.data-label { font-size: 0.65rem; color: #94a3b8; font-weight: 700; letter-spacing: 1px; margin-bottom: 2px; }
.data-value { font-size: 0.9rem; color: white; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.credential-footer { position: relative; z-index: 1; margin-top: 30px; display: flex; justify-content: space-between; align-items: flex-end; }

/* ==========================================================================
   INPUTS Y ANIMACIÓN DE ERROR
   ========================================================================== */
.autocompleted-field { background: rgba(80, 192, 38, 0.1) !important; border-color: #50c026 !important; transition: background 0.5s ease, border-color 0.5s ease; }
.compact-floating {
  .custom-input {
    height: calc(3rem + 2px); padding: 1rem 0.75rem 0.25rem 0.75rem; border-radius: 10px;
    background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.15); color: white; font-size: 0.9rem; transition: all 0.3s ease;
    &:focus { background: rgba(255, 255, 255, 0.1); border-color: #50c026; box-shadow: 0 0 0 3px rgba(80, 192, 38, 0.15); color: white; }
    
    /* Efecto "Shake" en campos rojos */
    &.input-error { 
      border-color: #ef4444 !important; 
      background: rgba(239, 68, 68, 0.1) !important; 
      animation: shake-error 0.4s ease-in-out;
    }
    
    &[readonly], &:disabled { background: rgba(0, 0, 0, 0.25) !important; color: #ffffff !important; border-color: rgba(255, 255, 255, 0.05) !important; cursor: not-allowed; opacity: 1; }
  }
  .dark-option { background-color: #0f172a; color: white; }
  label { padding: 0.6rem 0.75rem; color: #94a3b8; font-size: 0.85rem; }
}

@keyframes shake-error {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  75% { transform: translateX(-4px); }
}

.form-floating > .form-control:focus ~ label, .form-floating > .form-control:not(:placeholder-shown) ~ label, .form-floating > .form-select ~ label { color: #50c026; background-color: #1e293b; border-radius: 4px; height: auto; padding: 0 5px; transform: scale(.85) translateY(-.6rem) translateX(.5rem); }
.form-floating > .form-control:focus ~ label::after, .form-floating > .form-control:not(:placeholder-shown) ~ label::after, .form-floating > .form-select ~ label::after { background-color: transparent !important; }

.premium-dropdown-wrapper { position: relative; width: 100%; user-select: none; }
.premium-dropdown-trigger { height: calc(3rem + 2px); padding: 0.4rem 0.75rem; border-radius: 10px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.15); color: white; display: flex; align-items: center; justify-content: space-between; cursor: pointer; transition: all 0.3s ease; .trigger-info { display: flex; flex-direction: column; text-align: left; .trigger-label { font-size: 0.72rem; color: #50c026; font-weight: 500; transform: scale(0.85) translateY(-0.1rem) translateX(-0.35rem); } .trigger-value { font-size: 0.9rem; color: white; font-weight: 400; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; max-width: 200px; } } .arrow-icon { color: #94a3b8; font-size: 1.3rem; } &:focus, &:hover:not(.disabled-trigger) { background: rgba(255, 255, 255, 0.1); border-color: #50c026; } &.input-error { border-color: #ef4444 !important; background: rgba(239, 68, 68, 0.1) !important; animation: shake-error 0.4s ease-in-out; } }
.disabled-trigger { opacity: 0.4; cursor: not-allowed !important; background: rgba(255, 255, 255, 0.02) !important; .trigger-info .trigger-value { color: #64748b !important; } }
.premium-dropdown-menu-box { position: absolute; top: calc(100% + 6px); left: 0; width: 100%; max-height: 280px; background: #1e293b; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 12px; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4); z-index: 999; display: flex; flex-direction: column; overflow: hidden; animation: dropFade 0.2s cubic-bezier(0.165, 0.84, 0.44, 1); .menu-search-wrapper { display: flex; align-items: center; background: rgba(255, 255, 255, 0.03); border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding: 10px 12px; position: relative; .search-icon { color: #94a3b8; font-size: 1.1rem; margin-right: 8px; } .clear-icon { color: #64748b; font-size: 1.1rem; cursor: pointer; position: absolute; right: 20px; &:hover { color: white; } } .menu-search-control { background: rgba(255, 255, 255, 0.05) !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; color: white !important; font-size: 0.82rem; height: 32px; border-radius: 6px; padding-left: 10px; width: 100%; &:focus { border-color: #50c026 !important; box-shadow: none !important; outline: none !important; } } } .menu-options-list { list-style: none; margin: 0; padding: 5px 0; overflow-y: auto; flex-grow: 1; max-height: 130px; &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; } &::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; } .menu-option-item { padding: 10px 15px; font-size: 0.85rem; color: #cbd5e1; cursor: pointer; display: flex; align-items: center; justify-content: space-between; .check-icon { color: #50c026; font-size: 1rem; } &:hover { background: rgba(255, 255, 255, 0.05); color: white; } &.selected-item { background: rgba(80, 192, 38, 0.12); color: #50c026; font-weight: 600; } } .menu-no-results { padding: 20px 15px; text-align: center; color: #64748b; font-size: 0.82rem; font-style: italic; } } }
@keyframes dropFade { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }

.custom-file-upload { position: relative; .file-hidden { position: absolute; width: 0.1px; height: 0.1px; opacity: 0; overflow: hidden; z-index: -1; } .file-label { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 12px 10px; background: rgba(255, 255, 255, 0.05); border: 2px dashed rgba(255, 255, 255, 0.2); border-radius: 12px; cursor: pointer; transition: all 0.2s; color: #cbd5e1; font-size: 0.8rem; font-weight: 600; text-align: center; i { font-size: 1.6rem; color: #94a3b8; margin-bottom: 4px; transition: color 0.2s; } &:hover { background: rgba(80, 192, 38, 0.1); border-color: #50c026; color: white; i { color: #50c026; transform: translateY(-2px); } } &.input-error { border-color: #ef4444 !important; color: #fca5a5 !important; animation: shake-error 0.4s ease-in-out; i { color: #fca5a5 !important; } } } }

.btn-premium { background: linear-gradient(135deg, #50c026 0%, #3e9452 100%); color: white; border: none; border-radius: 12px; padding: 12px 25px; font-size: 1rem; letter-spacing: 0.5px; font-weight: 700; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: flex; align-items: center; justify-content: center; &:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(80, 192, 38, 0.4) !important; color: white; } }

.btn-swal-premium-secondary {
    background: rgba(15, 23, 42, 0.03) !important;
    color: #1e293b !important;
    border: 2px solid #cbd5e1 !important;
    border-radius: 50px !important;
    padding: 14px 40px !important;
    font-size: 1.05rem !important;
    font-weight: 800 !important;
    letter-spacing: 0.5px !important;
    text-transform: uppercase !important;
    width: 100% !important;
    margin-top: 0.5rem !important;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02) !important;
    cursor: pointer !important;
    display: inline-flex !important;
    justify-content: center !important;
    align-items: center !important;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.27) !important;
}

.btn-swal-premium-secondary:hover {
    background: #f8fafc !important;
    border-color: #94a3b8 !important;
    color: #0f172a !important;
    transform: translateY(-4px) scale(1.02) !important;
    box-shadow: 0 10px 20px rgba(0,0,0,0.08) !important;
}

.btn-swal-premium-secondary i { font-size: 1.4rem !important; transition: transform 0.3s ease !important; }
.btn-swal-premium-secondary:hover i { transform: scale(1.1) rotate(5deg) !important; }

.custom-check { .form-check-input { background-color: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); &:checked { background-color: #50c026; border-color: #50c026; } &.input-error { border-color: #ef4444 !important; animation: shake-error 0.4s ease-in-out; } } }
.x-small { font-size: 0.75rem; }
.line-height-1 { line-height: 1.2; }
.transition-all { transition: all 0.4s ease; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-enter, .fade-leave-to { opacity: 0; transform: translateY(-10px); }

$size: 50px; $primary-color: green;
.cube-folding { width: $size; height: $size; display: inline-block; background: white; transform: rotate(45deg); font-size: 0; span { position: relative; width: $size * 0.5; height: $size * 0.5; transform: scale(1.1); display: inline-block; &::before { content: ""; background-color: $primary-color; position: absolute; left: 0; top: 0; display: block; width: $size * 0.5; height: $size * 0.5; transform-origin: 100% 100%; animation: folding 2.5s infinite linear both; } } .leaf2 { transform: rotateZ(90deg) scale(1.1); &::before { animation-delay: 0.3s; background-color: color.adjust($primary-color, $lightness: -5%); } } .leaf3 { transform: rotateZ(270deg) scale(1.1); &::before { animation-delay: 0.9s; background-color: color.adjust($primary-color, $lightness: -5%); } } .leaf4 { transform: rotateZ(180deg) scale(1.1); &::before { animation-delay: 0.6s; background-color: color.adjust($primary-color, $lightness: -10%); } } }
@keyframes folding { 0%, 10% { transform: perspective(140px) rotateX(-180deg); opacity: 0; } 25%, 75% { transform: perspective(140px) rotateX(0deg); opacity: 1; } 90%, 100% { transform: perspective(140px) rotateY(180deg); opacity: 0; } }
.cube-wrapper { position: fixed; left: 50%; top: 50%; margin-top: -$size; margin-left: -$size; width: $size * 2; height: $size * 2; text-align: center; &:after { content: ""; position: absolute; left: 0; right: 0; bottom: -20px; margin: auto; width: $size * 1.8; height: 6px; z-index: 1; filter: blur(2px); border-radius: 100%; animation: shadow 0.5s ease infinite alternate; } .loadingtexto { font-size: 15px; letter-spacing: 0.1em; display: block; color: white; position: relative; top: $size * 0.5; z-index: 2; animation: text 0.5s ease infinite alternate; } }
@keyframes text { 100% { top: ($size * 0.5) + 10; } } @keyframes shadow { 100% { bottom: -18px; width: $size * 2; } }
.loadingprincipal { position: fixed; z-index: 10005; height: 2em; overflow: visible; margin: auto; top: 0; left: 0; bottom: 0; right: 0; &:before { content: ''; display: block; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.6); } }

.swal-super-top { z-index: 10050 !important; }
.swal-premium-popup { border-radius: 24px !important; padding: 2.5rem 2rem 2rem 2rem !important; box-shadow: 0 25px 50px rgba(0,0,0,0.3) !important; background: #ffffff !important; }
.swal-premium-title { font-size: 1.5rem !important; font-weight: 800 !important; color: #1e293b !important; letter-spacing: -0.5px; margin-bottom: 0.5rem !important; }
.swal-premium-text { font-size: 0.95rem !important; color: #64748b !important; line-height: 1.5 !important; }
.btn-swal-premium-success { 
  background: linear-gradient(135deg, #50c026 0%, #3e9452 100%) !important; 
  color: #ffffff !important; 
  border: 1px solid rgba(255, 255, 255, 0.2) !important; 
  border-radius: 50px !important; 
  padding: 14px 40px !important; 
  font-size: 1.05rem !important; 
  font-weight: 800 !important; 
  letter-spacing: 1px !important; 
  text-transform: uppercase !important;
  width: 100% !important; 
  margin-top: 1.5rem !important; 
  box-shadow: 0 10px 25px rgba(80, 192, 38, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.2) !important; 
  cursor: pointer !important; 
  display: inline-flex !important; 
  justify-content: center !important; 
  align-items: center !important; 
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.27) !important; 
  
  &:hover { 
    transform: translateY(-4px) scale(1.02) !important;
    box-shadow: 0 15px 35px rgba(80, 192, 38, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.3) !important; 
    background: linear-gradient(135deg, #5adc2b 0%, #46a75d 100%) !important; 
  } 

  i { font-size: 1.4rem !important; transition: transform 0.3s ease !important; }
  &:hover i { transform: scale(1.1) rotate(5deg) !important; }
}

.max-w-800 { max-width: 800px; }
.privacy-content-wrapper p { text-align: justify; margin-bottom: 1.2rem; }
.custom-bullet-list { list-style: none; padding-left: 0; }
.custom-bullet-list li { position: relative; padding-left: 1.8rem; margin-bottom: 0.8rem; }
.custom-bullet-list li::before { content: "check_circle"; font-family: "Material Icons"; position: absolute; left: 0; top: 2px; font-size: 1.2rem; color: #50c026; }
.custom-number-list { padding-left: 1.2rem; }
.custom-number-list li { margin-bottom: 0.8rem; padding-left: 0.5rem; }

.visual-guide-container { background: rgba(80, 192, 38, 0.05); border: 1px solid rgba(80, 192, 38, 0.1); border-radius: 16px; padding: 20px; }
.guide-doc-frame { width: 180px; height: 110px; border: 2px dashed #50c026; border-radius: 12px; margin: 0 auto; position: relative; display: flex; align-items: center; justify-content: center; animation: pulseGuide 2s infinite; }
.guide-doc-frame i { font-size: 3rem; color: rgba(80, 192, 38, 0.4); }
.guide-face-frame { width: 120px; height: 150px; border: 2px dashed #50c026; border-radius: 100px; margin: 0 auto; position: relative; display: flex; align-items: center; justify-content: center; animation: pulseGuide 2s infinite; }
.guide-face-frame i { font-size: 4rem; color: rgba(80, 192, 38, 0.4); }

@keyframes pulseGuide {
  0% { box-shadow: 0 0 0 0 rgba(80, 192, 38, 0.2); }
  70% { box-shadow: 0 0 0 15px rgba(80, 192, 38, 0); }
  100% { box-shadow: 0 0 0 0 rgba(80, 192, 38, 0); }
}

@media (max-width: 576px) {
  .registration-card { border-radius: 16px; padding-bottom: 80px;}
  .registration-header { padding: 20px 15px; flex-direction: column; align-items: stretch !important; text-align: center;}
  .registration-header .d-flex { justify-content: center; }
  .btn-back-home { width: 100%; justify-content: center; margin-top: 10px; }
  .registration-body { padding: 20px 15px; }
  
  .glass-box { padding: 15px 12px; border-radius: 12px; margin-bottom: 1rem !important; }
  .section-title { font-size: 0.9rem; margin-bottom: 12px; }
  
  .compact-floating .custom-input { font-size: 0.85rem; height: calc(2.8rem + 2px); padding-top: 1.2rem; }
  .compact-floating label { font-size: 0.8rem; padding: 0.5rem 0.75rem; }
  .premium-dropdown-trigger { height: calc(2.8rem + 2px); }
  
  .btn-premium { font-size: 0.9rem; padding: 10px 20px; }
  
  .swal-premium-popup { padding: 1.8rem 1.2rem 1.2rem 1.2rem !important; border-radius: 20px !important; width: 90% !important; }
  .swal-premium-title { font-size: 1.2rem !important; }
  .swal-premium-text, .swal2-html-container p, .swal2-html-container { font-size: 0.9rem !important; line-height: 1.4 !important; }
  
  .btn-swal-premium-success, .btn-swal-premium-secondary { padding: 12px 25px !important; font-size: 0.95rem !important; margin-top: 1rem !important; }
  .swal2-html-container .btn { padding: 10px !important; font-size: 0.9rem !important; }
  
  .custom-file-upload .file-label { padding: 10px 8px; font-size: 0.75rem; }
  .custom-file-upload .file-label i { font-size: 1.4rem; margin-bottom: 2px; }
  
  .digital-credential-card { padding: 20px; }
  .credential-photo { width: 85px; height: 110px; }
  .credential-name { font-size: 1.1rem; }
  .data-label { font-size: 0.55rem; }
  .data-value { font-size: 0.8rem; }
}

.btn-glass-premium {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: 800;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #ffffff;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  i { font-size: 1.4rem; transition: transform 0.3s ease; }
  &:hover i { transform: scale(1.1) rotate(5deg); }
}

.hover-white:hover { color: #ffffff !important; opacity: 1 !important; transform: translateY(-1px); }
.border-light-glass { border-color: rgba(255,255,255,0.1) !important; }
</style>