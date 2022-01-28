(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formulario-formulario-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/formulario/formulario.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/formulario/formulario.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\n\n<ion-content>\n  <div class=\"row\" style=\"background-color: #67adc9; padding: 2vw\">\n    <div class=\"col-2 col-sm-2 col-md-2 col-lg-2 align-self-center\">\n      <ion-icon style=\"color: white;float: left\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    </div>\n    <div class=\"col-8 col-sm-8 col-md-8 col-lg-8 align-self-center\" style=\"margin: 1vw;\">\n      <p class=\"header__subtitle\" style=\"margin-bottom: 0px;text-align: left;color: white; font-weight: bold\">{{formularioAVer}}</p>\n    </div>\n  </div>\n  <div class=\"container\" style=\"padding-top: 2vw;\">\n    <!--Propiedades-->\n    <div class=\"row d-flex justify-content-center\" *ngIf=\"formularioAVer=='Documentación para Renta'\">\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Datos del Propietario</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Dirección de correo electrónico</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Calle y Número\" [(ngModel)]=\"formulario_documentacion_renta.datos_propietario.correo\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Celular</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Ciudad\" [(ngModel)]=\"formulario_documentacion_renta.datos_propietario.celular\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Dirección completa del inmueble</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Colonia\" [(ngModel)]=\"formulario_documentacion_renta.datos_propietario.direccion\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Propietario(s) del Inmueble</p>\n          <div class=\"form-group\">\n            <div class=\"checkbox\">\n              <label class=\"checkbox__label\">\n                <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_renta.datos_propietario.tipo.persona_fisica\">\n                Persona Física\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"checkbox\">\n              <label class=\"checkbox__label\">\n                <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_renta.datos_propietario.tipo.persona_moral\">\n                Persona Moral\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"checkbox\">\n              <label class=\"checkbox__label\">\n                <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_renta.datos_propietario.tipo.copropiedad\">\n                Copropiedad\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Nombre completo de Propietario(s)</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Asesor que atendió\" [(ngModel)]=\"formulario_documentacion_renta.datos_propietario.nombre\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"row d-flex justify-content-center\" *ngIf=\"formularioAVer=='Documentación para Venta'\">\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Documentos para solicitar al Propietario</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Dirección de correo electrónico</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Email\" [(ngModel)]=\"formulario_documentacion_venta.datos_propietario.correo\" />\n        </div>\n        <div class=\"form-group\">\n          <h6>Tipo de Persona</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_documentacion_venta.tipo_persona\">\n            <ion-select-option value=\"Persona Física\">Persona Física</ion-select-option>\n            <ion-select-option value=\"Persona Moral\">Persona Moral</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_persona=='Persona Física'\">\n          <h6>Nacional o Extranjero</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_documentacion_venta.mex_o_ext.tipo\">\n            <ion-select-option value=\"Nacional\">Nacional</ion-select-option>\n            <ion-select-option value=\"Extranjero\">Extranjero</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\" *ngIf=\"(formulario_documentacion_venta.mex_o_ext.tipo=='Nacional' ||formulario_documentacion_venta.mex_o_ext.tipo=='Extranjero') && formulario_documentacion_venta.tipo_persona=='Persona Física'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.mex_o_ext.identificacion\">\n              Identificación oficial vigente\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.mex_o_ext.tipo=='Nacional' && formulario_documentacion_venta.tipo_persona=='Persona Física'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.mex_o_ext.acta_matrimonio\">\n              Acta de Matrimonio\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.mex_o_ext.tipo=='Nacional' && formulario_documentacion_venta.tipo_persona=='Persona Física'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.mex_o_ext.rfc\">\n              RFC\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.mex_o_ext.tipo=='Nacional' && formulario_documentacion_venta.tipo_persona=='Persona Física'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.mex_o_ext.curp\">\n              CURP\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.mex_o_ext.tipo=='Extranjero' && formulario_documentacion_venta.tipo_persona=='Persona Física'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.mex_o_ext.fm3\">\n              Copia de su FM3\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.mex_o_ext.tipo=='Extranjero' && formulario_documentacion_venta.tipo_persona=='Persona Física'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.mex_o_ext.carta_naturalizacion\">\n              En su caso, Carta de Naturalización\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_persona=='Persona Moral'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.moral.acta_constitutiva\">\n              Acta constitutiva de la empresa (con inscripción al Registro Público de la Propiedad)\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_persona=='Persona Moral'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.moral.rfc\">\n              RFC\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_persona=='Persona Moral'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.moral.poder_representante\">\n              Poder Notarial del Representante Legal\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_persona=='Persona Moral'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.moral.indentificacion\">\n              Identificación Oficial del Apoderado\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_persona=='Persona Moral'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.moral.domicilio\">\n              Comprobante de domicilio de la Empresa\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <h6>Tipo Propiedad</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_documentacion_venta.tipo_propiedad.tipo\">\n            <ion-select-option value=\"INMUEBLE\">INMUEBLE</ion-select-option>\n            <ion-select-option value=\"EDIFICIO\">EDIFICIO</ion-select-option>\n            <ion-select-option value=\"DEPARTAMENTO, CASA, LOCAL Y OFICINA EN CONDOMINIO\">DEPARTAMENTO, CASA, LOCAL Y OFICINA EN CONDOMINIO</ion-select-option>\n            <ion-select-option value=\"EDIFICIO\">EDIFICIO</ion-select-option>\n          </ion-select>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_propiedad.tipo=='INMUEBLE'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.tipo_propiedad.inmueble.escritura\">\n              Escritura de Propiedad con datos de inscripción en Registro Público de la Propiedad\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_propiedad.tipo=='INMUEBLE'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.tipo_propiedad.inmueble.predial\">\n              Última boleta de predial\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_propiedad.tipo=='INMUEBLE'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.tipo_propiedad.inmueble.agua\">\n              Última boleta de agua\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_propiedad.tipo=='EDIFICIO'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.tipo_propiedad.edificio.licencia\">\n              Licencia de construcción (si tiene)\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_propiedad.tipo=='EDIFICIO'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.tipo_propiedad.edificio.aviso_terminacion\">\n              Aviso de terminación de obra (si tiene)\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_propiedad.tipo=='EDIFICIO'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.tipo_propiedad.edificio.alineamiento_num_oficial\">\n              Alineamiento y número oficial (si tiene)\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_propiedad.tipo=='DEPARTAMENTO, CASA, LOCAL Y OFICINA EN CONDOMINIO'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.tipo_propiedad.departamento_casa.regimen_propiedad\">\n              Régimen de propiedad en condominio (si tiene)\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_propiedad.tipo=='DEPARTAMENTO, CASA, LOCAL Y OFICINA EN CONDOMINIO'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.tipo_propiedad.departamento_casa.reglamento\">\n              Reglamento (si tiene)\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_propiedad.tipo=='DEPARTAMENTO, CASA, LOCAL Y OFICINA EN CONDOMINIO'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.tipo_propiedad.departamento_casa.mantenimiento\">\n              Último recibo de mantenimiento\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.tipo_propiedad.tipo=='DEPARTAMENTO, CASA, LOCAL Y OFICINA EN CONDOMINIO'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.tipo_propiedad.departamento_casa.uso_suelo\">\n              Uso de suelo (sólo uso comercial)\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <h6>¿Tiene Hipoteca?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_documentacion_venta.hipoteca.tiene\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n            <ion-select-option value=\"Sí, pero ya esta liberada\">Sí, pero ya esta liberada</ion-select-option>\n          </ion-select>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.hipoteca.tiene=='Sí'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.hipoteca.escritura\">\n              Escritura de Hipoteca\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.hipoteca.tiene=='Sí'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.hipoteca.recibo_pagado\">\n              Último recibo de la hipoteca pagado\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.hipoteca.tiene=='Sí'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.hipoteca.recibo_mantenimineto\">\n              Último recibo de mantenimiento\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.hipoteca.tiene=='Sí'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.hipoteca.estado_cuenta\">\n              Estado de Cuenta\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.hipoteca.tiene=='Sí, pero ya esta liberada'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.hipoteca.carta_liberacion\">\n              Escritura, Carta o Instrumento de liberación\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <h6>¿Es Herencia?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_documentacion_venta.herencia.tiene\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.herencia.tiene=='Sí'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.herencia.carta_aceptacion\">\n              Escritura de aceptación de herencia\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.herencia.tiene=='Sí'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.herencia.carta_notario\">\n              Carta del Notario (si la aceptación de herencia está en proceso)\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.herencia.tiene=='Sí'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.herencia.escritura_adjudicacion\">\n              Escritura de adjudicación de herencia (Si ya se adjudicó)*\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.herencia.tiene=='Sí'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.herencia.carta_notario_proceso\">\n              Carta del Notario (Si está en proceso la adjudicación)\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formulario_documentacion_venta.herencia.tiene=='Sí'\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_documentacion_venta.herencia.propietario_fallecio\">\n              Si el propietario falleció antes del 2000, traer acta de matrimonio de los herederos y si los herederos están casados por propiedad conyugal, que firme el Cónyuge también de aceptación)\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <h6>¿Estarías de acuerdo de pagar una comisión por intermediación inmobiliaria del 5% del precio de venta?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_documentacion_venta.disposicion\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n    </div>\n    <div class=\"row d-flex justify-content-center\" *ngIf=\"formularioAVer=='Conseguir la Propiedad'\">\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>¿Qué quiero vender?</h4>\n        <div class=\"form-group\">\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.que_vende\">\n            <ion-select-option value=\"Departamento\">Departamento</ion-select-option>\n            <ion-select-option value=\"Casa Sola\">Casa Sola</ion-select-option>\n            <ion-select-option value=\"Casa en Condominio\">Casa en Condominio</ion-select-option>\n            <ion-select-option value=\"Terreno\">Terreno</ion-select-option>\n            <ion-select-option value=\"Oficina\">Oficina</ion-select-option>\n            <ion-select-option value=\"Bodega\">Bodega</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Fecha límite</h4>\n        <div class=\"form-group\">\n          <input\n                  readonly\n                  placeholder=\"Selecciona una fecha\"\n                  class=\"form-control input__text\"\n                  #dp=\"bsDatepicker\"\n                  [(ngModel)]=\"formulario_conseguir_propiedad.fechaLimite\"\n                  bsDatepicker\n                  [bsConfig]=\"{ containerClass: 'theme-blue' }\"\n          />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>¿Qué preferencias tengo sobre el comprador?</h4>\n        <div class=\"form-group\">\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.preferencias_comprador\">\n            <ion-select-option value=\"Pago en efectivo\">Pago en efectivo</ion-select-option>\n            <ion-select-option value=\"Crédito bancario autorizado y en orden\">Crédito bancario autorizado y en orden</ion-select-option>\n            <ion-select-option value=\"Requiero comprar antes de vender\">Requiero comprar antes de vender</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Sobre el valor de mi propiedad...</h4>\n        <div class=\"form-group\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_conseguir_propiedad.valor_propiedad.precio_definido\">\n              Tengo ya precio definido por mi\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_conseguir_propiedad.valor_propiedad.avaluo\">\n              Cuento con un avalúo\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_conseguir_propiedad.valor_propiedad.asesoria\">\n              Me gustaría me asesoraran sobre mi propiedad según el precio del mercado\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"checkbox\">\n            <label class=\"checkbox__label\">\n              <input type=\"checkbox\" [(ngModel)]=\"formulario_conseguir_propiedad.valor_propiedad.precio_estimado\">\n              Precio estimado\n            </label>\n          </div>\n          <input *ngIf=\"formulario_conseguir_propiedad.valor_propiedad.precio_estimado\" type=\"text\" class=\"form-control input__text\" placeholder=\"Ingresa el Precio Estimado\" [(ngModel)]=\"formulario_conseguir_propiedad.valor_propiedad.precio\" />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>¿ Qué espacios tiene mi propiedad? (según aplique)</h4>\n        <div class=\"form-group\">\n          <h6>Recámaras</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.prioridad.recamaras\">\n            <ion-select-option value=\"0\">0</ion-select-option>\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6 o más\">6 o más</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Estudio / Family</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.prioridad.estudio\">\n            <ion-select-option value=\"0\">0</ion-select-option>\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6 o más\">6 o más</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Baños completos</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.prioridad.banos_completos\">\n            <ion-select-option value=\"0\">0</ion-select-option>\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6 o más\">6 o más</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Medios baños</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.prioridad.medios_banos\">\n            <ion-select-option value=\"0\">0</ion-select-option>\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6 o más\">6 o más</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Estacionamientos</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.prioridad.estacionamientos\">\n            <ion-select-option value=\"0\">0</ion-select-option>\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6 o más\">6 o más</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Número de pisos</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.prioridad.pisos\">\n            <ion-select-option value=\"0\">0</ion-select-option>\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6 o más\">6 o más</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Número de casas</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.prioridad.numero_casas\">\n            <ion-select-option value=\"0\">0</ion-select-option>\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6 o más\">6 o más</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Más detalles sobre mi propiedad:</h4>\n        <div class=\"form-group\">\n          <h6>Ubicación</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles.ubicacion\">\n            <ion-select-option value=\"Excelente\">Excelente</ion-select-option>\n            <ion-select-option value=\"Buena\">Buena</ion-select-option>\n            <ion-select-option value=\"Regular\">Regular</ion-select-option>\n            <ion-select-option value=\"Mala\">Mala</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Orientación</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles.orientacion\">\n            <ion-select-option value=\"Excelente\">Excelente</ion-select-option>\n            <ion-select-option value=\"Buena\">Buena</ion-select-option>\n            <ion-select-option value=\"Regular\">Regular</ion-select-option>\n            <ion-select-option value=\"Mala\">Mala</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Luz Interior</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles.luz_interior\">\n            <ion-select-option value=\"Excelente\">Excelente</ion-select-option>\n            <ion-select-option value=\"Buena\">Buena</ion-select-option>\n            <ion-select-option value=\"Regular\">Regular</ion-select-option>\n            <ion-select-option value=\"Mala\">Mala</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Conservación en General</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles.conservacion\">\n            <ion-select-option value=\"Excelente\">Excelente</ion-select-option>\n            <ion-select-option value=\"Buena\">Buena</ion-select-option>\n            <ion-select-option value=\"Regular\">Regular</ion-select-option>\n            <ion-select-option value=\"Mala\">Mala</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Conservación Acabados</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles.acabados\">\n            <ion-select-option value=\"Excelente\">Excelente</ion-select-option>\n            <ion-select-option value=\"Buena\">Buena</ion-select-option>\n            <ion-select-option value=\"Regular\">Regular</ion-select-option>\n            <ion-select-option value=\"Mala\">Mala</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Vigilancia</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles.vigilancia\">\n            <ion-select-option value=\"Excelente\">Excelente</ion-select-option>\n            <ion-select-option value=\"Buena\">Buena</ion-select-option>\n            <ion-select-option value=\"Regular\">Regular</ion-select-option>\n            <ion-select-option value=\"Mala\">Mala</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Detalles aproximados de mi propiedad</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">M2 de construcción</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Metros cuadrados\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles_aprox.m2_construccion\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">M2 de terreno</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Metros cuadrados\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles_aprox.m2_terreno\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">M2 de jardín</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Metros cuadrados\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles_aprox.m2_jardin\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">M2 de terraza</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Metros cuadrados\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles_aprox.m2_terraza\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Uso de suelo</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles_aprox.uso_suelo\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Edad de mi propiedad</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles_aprox.edad\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Costo de mantenimiento</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles_aprox.costo_mantenimiento\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Costo de vigilancia</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles_aprox.costo_vigilancia\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Número de departamentos o casas en el Condominio</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"\" [(ngModel)]=\"formulario_conseguir_propiedad.detalles_aprox.numero_casas\" />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Sobre mi proceso de venta:</h4>\n        <div class=\"form-group\">\n          <h6>¿Me han atendido otros corredores?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.proceso.otros_corredores\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Llevas una relación de todos los interesados?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.proceso.lleva_relacion\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Has intentado vender anteriormente sin buenos resultados?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.proceso.ha_decidido_comprar\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Cómo calificas tu experiencia de búsqueda hasta ahora</h6>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"\" [(ngModel)]=\"formulario_conseguir_propiedad.proceso.experiencia\" />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Si nos eligieras como tu agente inmobiliario</h4>\n        <div class=\"form-group\">\n          <h6>¿Aceptarías compartir una comisión del 5% del total de la compra?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.eleccion_agente.compartir_comision\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Aceptarías firmar un contrato de fidelidad (no exclusividad) para brindarte asesoría integral, trato eficiente y protegerte de malas prácticas?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.eleccion_agente.firmar_contrato\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Te gustaría agendar citas previo acuerdo?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.eleccion_agente.agendar_citas\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Dejarías llave por si no hay quien reciba?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_propiedad.eleccion_agente.dejaria_llave\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Registro de datos</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Nombre completo</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Nombre completo\" [(ngModel)]=\"formulario_conseguir_propiedad.mis_datos.nombre\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Teléfono de contacto</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Teléfono de contacto\" [(ngModel)]=\"formulario_conseguir_propiedad.mis_datos.telefono\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Email de contacto</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Email de contacto\" [(ngModel)]=\"formulario_conseguir_propiedad.mis_datos.email\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Dirección Completa</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Dirección Completa\" [(ngModel)]=\"formulario_conseguir_propiedad.mis_datos.direccion\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">¿Quién te refirió con nosotros?</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"¿Quién te refirió con nosotros?\" [(ngModel)]=\"formulario_conseguir_propiedad.mis_datos.referencia\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"row d-flex justify-content-center\" *ngIf=\"formularioAVer=='Contrato para Renta'\">\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>¿ Cuántos somos en mi familia ?</h4>\n        <div class=\"form-group\">\n          <p>Adultos</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.familia.adultos\">\n            <ion-select-option value=\"0\">0</ion-select-option>\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p>Niños / Jóvenes (hombres)</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.familia.hombres_no_adultos\">\n            <ion-select-option value=\"0\">0</ion-select-option>\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p>Niñas / Jóvenes (mujeres)</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.familia.mujeres_no_adultas\">\n            <ion-select-option value=\"0\">0</ion-select-option>\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p>Gente de servicio</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.familia.servicio\">\n            <ion-select-option value=\"0\">0</ion-select-option>\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p>Mascotas</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.familia.mascotas\">\n            <ion-select-option value=\"0\">0</ion-select-option>\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>¿Qué estoy buscando?</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Departamento</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.que_busca.departamento\">\n            <ion-select-option value=\"50-100 m2\">50-100 m2</ion-select-option>\n            <ion-select-option value=\"100-200 m2\">100-200 m2</ion-select-option>\n            <ion-select-option value=\"200 - 300 m2\">200 - 300 m2</ion-select-option>\n            <ion-select-option value=\"300 - 450 m2\">300 - 450 m2</ion-select-option>\n            <ion-select-option value=\"450 - 600 m2\">450 - 600 m2</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Casa</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.que_busca.casa\">\n            <ion-select-option value=\"50-100 m2\">50-100 m2</ion-select-option>\n            <ion-select-option value=\"100-200 m2\">100-200 m2</ion-select-option>\n            <ion-select-option value=\"200 - 300 m2\">200 - 300 m2</ion-select-option>\n            <ion-select-option value=\"300 - 450 m2\">300 - 450 m2</ion-select-option>\n            <ion-select-option value=\"450 - 600 m2\">450 - 600 m2</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Casa en Condominio</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.que_busca.casa_condominio\">\n            <ion-select-option value=\"50-100 m2\">50-100 m2</ion-select-option>\n            <ion-select-option value=\"100-200 m2\">100-200 m2</ion-select-option>\n            <ion-select-option value=\"200 - 300 m2\">200 - 300 m2</ion-select-option>\n            <ion-select-option value=\"300 - 450 m2\">300 - 450 m2</ion-select-option>\n            <ion-select-option value=\"450 - 600 m2\">450 - 600 m2</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Terreno</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.que_busca.terreno\">\n            <ion-select-option value=\"50-100 m2\">50-100 m2</ion-select-option>\n            <ion-select-option value=\"100-200 m2\">100-200 m2</ion-select-option>\n            <ion-select-option value=\"200 - 300 m2\">200 - 300 m2</ion-select-option>\n            <ion-select-option value=\"300 - 450 m2\">300 - 450 m2</ion-select-option>\n            <ion-select-option value=\"450 - 600 m2\">450 - 600 m2</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Oficina</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.que_busca.oficina\">\n            <ion-select-option value=\"50-100 m2\">50-100 m2</ion-select-option>\n            <ion-select-option value=\"100-200 m2\">100-200 m2</ion-select-option>\n            <ion-select-option value=\"200 - 300 m2\">200 - 300 m2</ion-select-option>\n            <ion-select-option value=\"300 - 450 m2\">300 - 450 m2</ion-select-option>\n            <ion-select-option value=\"450 - 600 m2\">450 - 600 m2</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Bodega</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.que_busca.bodega\">\n            <ion-select-option value=\"50-100 m2\">50-100 m2</ion-select-option>\n            <ion-select-option value=\"100-200 m2\">100-200 m2</ion-select-option>\n            <ion-select-option value=\"200 - 300 m2\">200 - 300 m2</ion-select-option>\n            <ion-select-option value=\"300 - 450 m2\">300 - 450 m2</ion-select-option>\n            <ion-select-option value=\"450 - 600 m2\">450 - 600 m2</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Fecha límite</h4>\n        <div class=\"form-group\">\n          <input\n                  readonly\n                  placeholder=\"Selecciona una fecha\"\n                  class=\"form-control input__text\"\n                  #dp=\"bsDatepicker\"\n                  [(ngModel)]=\"formulario_contrato_renta.fechaOperacion\"\n                  bsDatepicker\n                  [bsConfig]=\"{ containerClass: 'theme-blue' }\"\n          />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>¿Quién avalará mi renta?</h4>\n        <div class=\"form-group\">\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.aval\">\n            <ion-select-option value=\"Mi empresa como fiadora\">Mi empresa como fiadora</ion-select-option>\n            <ion-select-option value=\"Un inmueble como garantía\">Un inmueble como garantía</ion-select-option>\n            <ion-select-option value=\"Un fiador\">Un fiador</ion-select-option>\n            <ion-select-option value=\"Ninguno y contrataré una póliza jurídica\">Ninguno y contrataré una póliza jurídica</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Detalles</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Zona de mi interés</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Zonas de mi interés\" [(ngModel)]=\"formulario_contrato_renta.zona\" />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Sobre el presupuesto que tengo...</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Deseo propiedad amueblada o semi amueblada</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"\" [(ngModel)]=\"formulario_contrato_renta.presupuesto.amueblada\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Ya incluyo mantenimiento</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"\" [(ngModel)]=\"formulario_contrato_renta.presupuesto.mantenimiento\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Ya incluyo servicios</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"\" [(ngModel)]=\"formulario_contrato_renta.presupuesto.servicios\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Mi presupuesto permite pagar aparte mantenimiento</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"\" [(ngModel)]=\"formulario_contrato_renta.presupuesto.aparte_mantenimiento\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Mi presupuesto permite pagar servicios aparte</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"\" [(ngModel)]=\"formulario_contrato_renta.presupuesto.aparte_servicios\" />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Presupuesto Máximo</h4>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Presupuesto\" [(ngModel)]=\"formulario_contrato_renta.presupuesto.tope\" />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Espacios</h4>\n        <div class=\"form-group\">\n          <p>Recámaras</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.espacios.recamaras\">\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p>Baños</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.espacios.banos\">\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p>Estacionamientos</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.espacios.estacionamientos\">\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Preferencias</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Orientación</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Descripción\" [(ngModel)]=\"formulario_contrato_renta.preferencias.orientacion\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Luz Interior</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Descripción\" [(ngModel)]=\"formulario_contrato_renta.preferencias.luz_interior\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Calle cerrada y vigilancia</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Descripción\" [(ngModel)]=\"formulario_contrato_renta.preferencias.calle_cerrada\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Tipo decoración</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Descripción\" [(ngModel)]=\"formulario_contrato_renta.preferencias.decoracion\" />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Sobre mi proceso de búsqueda...</h4>\n        <div class=\"form-group\">\n          <h6>¿Me gustaría tener amenities como algo indispensable?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.busqueda.amenities\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Me gustan edificios altos?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.busqueda.edificios_altos\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Me han atendido otros corredores?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.busqueda.otros_corredores\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Ya has visto algunas propiedades sin que algo te convenza?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.busqueda.visitado_propiedades\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Tu experiencia hasta ahora ha sido positiva?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_contrato_renta.busqueda.experiencia_positiva\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Registro de datos</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Nombre completo</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Nombre completo\" [(ngModel)]=\"formulario_contrato_renta.mis_datos.nombre\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Teléfono de contacto</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Teléfono de contacto\" [(ngModel)]=\"formulario_contrato_renta.mis_datos.telefono\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Email de contacto</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Email de contacto\" [(ngModel)]=\"formulario_contrato_renta.mis_datos.email\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">¿Quién te refirió con nosotros?</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"¿Quién te refirió con nosotros?\" [(ngModel)]=\"formulario_contrato_renta.mis_datos.referencia\" />\n        </div>\n      </div>\n    </div>\n    <!--Clientes-->\n    <div class=\"row d-flex justify-content-center\" *ngIf=\"formularioAVer=='Conseguir el Cliente'\">\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Datos</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Nombre completo</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Nombre completo\" [(ngModel)]=\"formulario_conseguir_cliente.datos.nombre\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Teléfono de contacto</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Teléfono de contacto\" [(ngModel)]=\"formulario_conseguir_cliente.datos.telefono\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Email de contacto</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Email de contacto\" [(ngModel)]=\"formulario_conseguir_cliente.datos.email\" />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Espacios</h4>\n        <div class=\"form-group\">\n          <p>Recámaras</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.espacios.recamaras\">\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p>Baños</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.espacios.banos\">\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p>Estacionamientos</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.espacios.estacionamientos\">\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Dimensiones </h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Departamento</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.dimensiones.departamento\">\n            <ion-select-option value=\"50-100 m2\">50-100 m2</ion-select-option>\n            <ion-select-option value=\"100-200 m2\">100-200 m2</ion-select-option>\n            <ion-select-option value=\"200 - 300 m2\">200 - 300 m2</ion-select-option>\n            <ion-select-option value=\"300 - 450 m2\">300 - 450 m2</ion-select-option>\n            <ion-select-option value=\"450 - 600 m2\">450 - 600 m2</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Casa</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.dimensiones.casa\">\n            <ion-select-option value=\"50-100 m2\">50-100 m2</ion-select-option>\n            <ion-select-option value=\"100-200 m2\">100-200 m2</ion-select-option>\n            <ion-select-option value=\"200 - 300 m2\">200 - 300 m2</ion-select-option>\n            <ion-select-option value=\"300 - 450 m2\">300 - 450 m2</ion-select-option>\n            <ion-select-option value=\"450 - 600 m2\">450 - 600 m2</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Casa en Condominio</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.dimensiones.casa_condominio\">\n            <ion-select-option value=\"50-100 m2\">50-100 m2</ion-select-option>\n            <ion-select-option value=\"100-200 m2\">100-200 m2</ion-select-option>\n            <ion-select-option value=\"200 - 300 m2\">200 - 300 m2</ion-select-option>\n            <ion-select-option value=\"300 - 450 m2\">300 - 450 m2</ion-select-option>\n            <ion-select-option value=\"450 - 600 m2\">450 - 600 m2</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Terreno</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.dimensiones.terreno\">\n            <ion-select-option value=\"50-100 m2\">50-100 m2</ion-select-option>\n            <ion-select-option value=\"100-200 m2\">100-200 m2</ion-select-option>\n            <ion-select-option value=\"200 - 300 m2\">200 - 300 m2</ion-select-option>\n            <ion-select-option value=\"300 - 450 m2\">300 - 450 m2</ion-select-option>\n            <ion-select-option value=\"450 - 600 m2\">450 - 600 m2</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Oficina</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.dimensiones.oficina\">\n            <ion-select-option value=\"50-100 m2\">50-100 m2</ion-select-option>\n            <ion-select-option value=\"100-200 m2\">100-200 m2</ion-select-option>\n            <ion-select-option value=\"200 - 300 m2\">200 - 300 m2</ion-select-option>\n            <ion-select-option value=\"300 - 450 m2\">300 - 450 m2</ion-select-option>\n            <ion-select-option value=\"450 - 600 m2\">450 - 600 m2</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Bodega</p>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.dimensiones.bodega\">\n            <ion-select-option value=\"50-100 m2\">50-100 m2</ion-select-option>\n            <ion-select-option value=\"100-200 m2\">100-200 m2</ion-select-option>\n            <ion-select-option value=\"200 - 300 m2\">200 - 300 m2</ion-select-option>\n            <ion-select-option value=\"300 - 450 m2\">300 - 450 m2</ion-select-option>\n            <ion-select-option value=\"450 - 600 m2\">450 - 600 m2</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Fecha Operación</h4>\n        <div class=\"form-group\">\n          <input\n                  readonly\n                  placeholder=\"Selecciona una fecha\"\n                  class=\"form-control input__text\"\n                  #dp=\"bsDatepicker\"\n                  [(ngModel)]=\"formulario_conseguir_cliente.fechaOperacion\"\n                  bsDatepicker\n                  [bsConfig]=\"{ containerClass: 'theme-blue' }\"\n          />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Presupuesto Máximo</h4>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Presupuesto\" [(ngModel)]=\"formulario_conseguir_cliente.presupuesto\" />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>¿Quién avalará mi renta?</h4>\n        <div class=\"form-group\">\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.aval\">\n            <ion-select-option value=\"Mi empresa como aval\">Mi empresa como aval</ion-select-option>\n            <ion-select-option value=\"Fiador conUn inmueble como garantía (idealmente en la CDMX)\">Fiador conUn inmueble como garantía (idealmente en la CDMX)</ion-select-option>\n            <ion-select-option value=\"Un obligado solidario (persona física)\">Un obligado solidario (persona física)</ion-select-option>\n            <ion-select-option value=\"Póliza jurídica\">Póliza jurídica</ion-select-option>\n            <ion-select-option value=\"Contrato de mediación\">Contrato de mediación</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Detalles</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Zonas de mi interés</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Zonas de mi interés\" [(ngModel)]=\"formulario_conseguir_cliente.zonas\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Alguna especificación especial que se debe considerar en la búsqueda</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Especificación especial\" [(ngModel)]=\"formulario_conseguir_cliente.especificacion_especial\" />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Sobre mi proceso de venta:</h4>\n        <div class=\"form-group\">\n          <h6>¿Me han atendido otros corredores?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.proceso.otros_corredores\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Llevas una relación de todos los interesados?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.proceso.lleva_relacion\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Has intentado vender anteriormente sin buenos resultados?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_conseguir_cliente.proceso.iniciado_busqueda\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n    </div>\n    <!--Ambos-->\n    <div class=\"row d-flex justify-content-center\" *ngIf=\"formularioAVer=='Informe de Visita'\">\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Propiedad Visitada</h4>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 align-self-center\">\n            <div class=\"form-group\">\n              <p class=\"ion-no-margin\">Dirección</p>\n              <input type=\"text\" class=\"form-control input__text\" placeholder=\"Calle y Número\" [(ngModel)]=\"formulario_informe_visita.propiedad_visitada.calle\" />\n            </div>\n            <!--<div class=\"form-group\">\n              <p class=\"ion-no-margin\">Ciudad</p>\n              <input type=\"text\" class=\"form-control input__text\" placeholder=\"Ciudad\" [(ngModel)]=\"formulario_informe_visita.propiedad_visitada.ciudad\" />\n            </div>-->\n          </div>\n        <!--  <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 align-self-center\">\n            <div class=\"form-group\">\n              <p class=\"ion-no-margin\">Colonia</p>\n              <input type=\"text\" class=\"form-control input__text\" placeholder=\"Colonia\" [(ngModel)]=\"formulario_informe_visita.propiedad_visitada.colonia\" />\n            </div>\n            <div class=\"form-group\">\n              <p class=\"ion-no-margin\">Estado</p>\n              <input type=\"text\" class=\"form-control input__text\" placeholder=\"Estado\" [(ngModel)]=\"formulario_informe_visita.propiedad_visitada.estado\" />\n            </div>\n          </div>-->\n          <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 align-self-center\">\n            <div class=\"form-group\">\n              <p class=\"ion-no-margin\">Asesor que atendió</p>\n              <input type=\"text\" class=\"form-control input__text\" placeholder=\"Asesor que atendió\" [(ngModel)]=\"formulario_informe_visita.propiedad_visitada.asesor\" />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Fecha de la visita</h4>\n        <div class=\"form-group\">\n          <input\n                  readonly\n                  placeholder=\"Selecciona una fecha\"\n                  class=\"form-control input__text\"\n                  #dp=\"bsDatepicker\"\n                  [(ngModel)]=\"formulario_informe_visita.fechaVisita\"\n                  bsDatepicker\n                  [bsConfig]=\"{ containerClass: 'theme-blue' }\"\n          />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>¿ Qué le gustó de la propiedad ?</h4>\n        <div class=\"row\">\n          <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 align-self-center\">\n            <div class=\"form-group\">\n              <div class=\"checkbox\">\n                <label class=\"checkbox__label\">\n                  <input type=\"checkbox\" [(ngModel)]=\"formulario_informe_visita.gustos.ubicacion\">\n                  Ubicación\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"checkbox\">\n                <label class=\"checkbox__label\">\n                  <input type=\"checkbox\" [(ngModel)]=\"formulario_informe_visita.gustos.conservacion\">\n                  Conservación\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"checkbox\">\n                <label class=\"checkbox__label\">\n                  <input type=\"checkbox\" [(ngModel)]=\"formulario_informe_visita.gustos.espacio\">\n                  Espacio\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"checkbox\">\n                <label class=\"checkbox__label\">\n                  <input type=\"checkbox\" [(ngModel)]=\"formulario_informe_visita.gustos.precio\">\n                  Precio\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 align-self-center\">\n            <div class=\"form-group\">\n              <div class=\"checkbox\">\n                <label class=\"checkbox__label\">\n                  <input type=\"checkbox\" [(ngModel)]=\"formulario_informe_visita.gustos.distribucion\">\n                  Distribución\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"checkbox\">\n                <label class=\"checkbox__label\">\n                  <input type=\"checkbox\" [(ngModel)]=\"formulario_informe_visita.gustos.acabados\">\n                  Acabados\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"checkbox\">\n                <label class=\"checkbox__label\">\n                  <input type=\"checkbox\" [(ngModel)]=\"formulario_informe_visita.gustos.estilo\">\n                  Estilo\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"checkbox\">\n                <label class=\"checkbox__label\">\n                  <input type=\"checkbox\" [(ngModel)]=\"formulario_informe_visita.gustos.otro\">\n                  Otro\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Áreas de oportunidad del inmueble</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">¿Hubo algo que no le convenciera?</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"¿Hubo algo que no le convenciera?\" [(ngModel)]=\"formulario_informe_visita.oportunidad.no_convencio\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">¿Falta algún área que necesite?</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"¿Falta algún área que necesite?\" [(ngModel)]=\"formulario_informe_visita.oportunidad.falta_area\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Su calificación del 1 al 10</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Su calificación del 1 al 10\" [(ngModel)]=\"formulario_informe_visita.oportunidad.calificacion\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">¿Le gustaría visitar de nuevo el inmueble?</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"¿Le gustaría visitar de nuevo el inmueble?\" [(ngModel)]=\"formulario_informe_visita.oportunidad.visitar_nuevo\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Algún comentario sobre la visita...</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Algún comentario sobre la visita...\" [(ngModel)]=\"formulario_informe_visita.oportunidad.comentario\" />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>¿Cómo considera nuestro servicio hasta ahora?</h4>\n        <div class=\"row\">\n          <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 align-self-center\">\n            <div class=\"form-group\">\n              <h6 class=\"ion-no-margin\">Atención</h6>\n              <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_informe_visita.servicio.atencion\">\n                <ion-select-option value=\"Excelente\">Excelente</ion-select-option>\n                <ion-select-option value=\"Bueno\">Bueno</ion-select-option>\n                <ion-select-option value=\"Regular\">Regular</ion-select-option>\n                <ion-select-option value=\"Malo\">Malo</ion-select-option>\n              </ion-select>\n            </div>\n            <div class=\"form-group\">\n              <h6 class=\"ion-no-margin\">Información</h6>\n              <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_informe_visita.servicio.informacion\">\n                <ion-select-option value=\"Excelente\">Excelente</ion-select-option>\n                <ion-select-option value=\"Bueno\">Bueno</ion-select-option>\n                <ion-select-option value=\"Regular\">Regular</ion-select-option>\n                <ion-select-option value=\"Malo\">Malo</ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n          <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 align-self-center\">\n            <div class=\"form-group\">\n              <h6 class=\"ion-no-margin\">Puntualidad</h6>\n              <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_informe_visita.servicio.puntualidad\">\n                <ion-select-option value=\"Excelente\">Excelente</ion-select-option>\n                <ion-select-option value=\"Bueno\">Bueno</ion-select-option>\n                <ion-select-option value=\"Regular\">Regular</ion-select-option>\n                <ion-select-option value=\"Malo\">Malo</ion-select-option>\n              </ion-select>\n            </div>\n            <div class=\"form-group\">\n              <h6 class=\"ion-no-margin\">Profesionalismo</h6>\n              <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_informe_visita.servicio.profesionalismo\">\n                <ion-select-option value=\"Excelente\">Excelente</ion-select-option>\n                <ion-select-option value=\"Bueno\">Bueno</ion-select-option>\n                <ion-select-option value=\"Regular\">Regular</ion-select-option>\n                <ion-select-option value=\"Malo\">Malo</ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Registro de mis datos</h4>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Nombre completo</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Nombre completo\" [(ngModel)]=\"formulario_informe_visita.mis_datos.nombre\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Teléfono de contacto</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Teléfono de contacto\" [(ngModel)]=\"formulario_informe_visita.mis_datos.telefono\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Email de contacto</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Email de contacto\" [(ngModel)]=\"formulario_informe_visita.mis_datos.email\" />\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">¿Quién te refirió con nosotros?</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"¿Quién te refirió con nosotros?\" [(ngModel)]=\"formulario_informe_visita.mis_datos.referencia\" />\n        </div>\n      </div>\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Sobre mi proceso de búsqueda...</h4>\n        <div class=\"form-group\">\n          <h6>¿Me han atendido otros corredores?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_informe_visita.proceso.otros_corredores\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Llevas una relación de lo que ya has visto?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_informe_visita.proceso.lleva_relacion\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>¿Has decidido comprar anteriormente sin buenos resultados?</h6>\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"formulario_informe_visita.proceso.ha_decidido_comprar\">\n            <ion-select-option value=\"Sí\">Sí</ion-select-option>\n            <ion-select-option value=\"No\">No</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"form-group\">\n          <h6>Cómo calificas tu experiencia de búsqueda hasta ahora</h6>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"\" [(ngModel)]=\"formulario_informe_visita.proceso.experiencia\" />\n        </div>\n      </div>\n    </div>\n\n\n\n      <div class=\"row d-flex justify-content-center\">\n          <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\n              <div class=\"form-group\">\n                  <input\n                          type=\"button\"\n                          class=\"form-control button__siguiente\"\n                          value=\"Enviar\"\n                          (click)=\"enviarFormulario()\"\n                  />\n              </div>\n          </div>\n      </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/button-fab/button-fab.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/button-fab/button-fab.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button>\r\n    <!-- <a routerLink=\"/\"> -->\r\n    <img src=\"/assets/images/floatmenu_2.png\">\r\n    <!-- </a> -->\r\n  </ion-fab-button>\r\n  <ion-fab-list side=\"top\">\r\n    <ion-fab-button color=\"light\" routerLink=\"/\" ng-reflect-router-link=\"/\">\r\n      <img src=\"/assets/images/portfolio.png\">\r\n    </ion-fab-button>\r\n    <ion-fab-button color=\"light\">\r\n      <a routerLink=\"/\">\r\n        <img src=\"/assets/images/globe.png\">\r\n      </a>\r\n    </ion-fab-button>\r\n    <ion-fab-button color=\"light\">\r\n      <img src=\"/assets/images/study.png\">\r\n    </ion-fab-button>\r\n    <ion-fab-button color=\"light\">\r\n      <img src=\"/assets/images/user.png\">\r\n    </ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer-blue/footer-blue.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer-blue/footer-blue.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-footer no-border (click)=\"openLink()\">\r\n  <ion-toolbar color=\"primary\">\r\n  <p style=\"text-align: center; margin-top: 1rem; color: white; background-color: #094f72; \">www.brokersnetwork.mx</p>\r\n</ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-footer no-border (click)=\"openLink()\"  >\r\n  <p style=\"text-align: center; margin-top: 1rem; color: #094f72\">www.brokersnetwork.mx</p>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/main-header/main-header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/main-header/main-header.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header no-border >\r\n\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    \r\n      <ion-img slot=\"end\" [src]=\"urlLogo\" style=\"\r\n      width: 30%;\r\n      margin-top: 10px!important;\r\n      margin-bottom: 10px;\r\n      margin-right: 3vh;\"></ion-img>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/menu-registro/menu-registro.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/menu-registro/menu-registro.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-header no-border >\r\n\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-text text-center>\r\n      <ion-img [src]=\"urlLogo\" style=\"\r\n      width: 30%;\r\n      margin-top: 10px!important;\r\n      left: 0;\r\n      right: 0;\r\n      margin: 0 auto;\r\n      top: 50%;\r\n      margin-bottom: 10px;\"></ion-img>\r\n    </ion-text>\r\n  </ion-toolbar>\r\n</ion-header>\r\n"

/***/ }),

/***/ "./src/app/formulario/formulario-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/formulario/formulario-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FormularioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioPageRoutingModule", function() { return FormularioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _formulario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulario.page */ "./src/app/formulario/formulario.page.ts");




const routes = [
    {
        path: '',
        component: _formulario_page__WEBPACK_IMPORTED_MODULE_3__["FormularioPage"]
    }
];
let FormularioPageRoutingModule = class FormularioPageRoutingModule {
};
FormularioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormularioPageRoutingModule);



/***/ }),

/***/ "./src/app/formulario/formulario.module.ts":
/*!*************************************************!*\
  !*** ./src/app/formulario/formulario.module.ts ***!
  \*************************************************/
/*! exports provided: FormularioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioPageModule", function() { return FormularioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _formulario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario-routing.module */ "./src/app/formulario/formulario-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _formulario_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formulario.page */ "./src/app/formulario/formulario.page.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");









let FormularioPageModule = class FormularioPageModule {
};
FormularioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _formulario_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormularioPageRoutingModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"]
        ],
        declarations: [_formulario_page__WEBPACK_IMPORTED_MODULE_7__["FormularioPage"]]
    })
], FormularioPageModule);



/***/ }),

/***/ "./src/app/formulario/formulario.page.scss":
/*!*************************************************!*\
  !*** ./src/app/formulario/formulario.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button__siguiente {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #094f72;\n  color: white;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9neW9zb2x1dGlvbnMvRG9jdW1lbnRzL0FwcHMvYnJva2Vycy1uZXR3b3JrL3NyYy9hcHAvZm9ybXVsYXJpby9mb3JtdWxhcmlvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9ybXVsYXJpby9mb3JtdWxhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZm9ybXVsYXJpby9mb3JtdWxhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25fX3NpZ3VpZW50ZSB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbiIsIi5idXR0b25fX3NpZ3VpZW50ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NGY3MjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/formulario/formulario.page.ts":
/*!***********************************************!*\
  !*** ./src/app/formulario/formulario.page.ts ***!
  \***********************************************/
/*! exports provided: FormularioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioPage", function() { return FormularioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");






let FormularioPage = class FormularioPage {
    constructor(navCtrl, http, loadingController, rs, emailComposer) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingController = loadingController;
        this.rs = rs;
        this.emailComposer = emailComposer;
        this.TIME_IN_MS = 10000;
        //Formularios Propiedad
        this.formulario_conseguir_propiedad = {
            que_vende: "",
            preferencias_comprador: "",
            prioridad: {
                recamaras: "",
                estudio: "",
                banos_completos: "",
                medios_banos: "",
                estacionamientos: "",
                pisos: "",
                numero_casas: ""
            },
            fechaLimite: new Date(),
            valor_propiedad: {
                precio_definido: false,
                avaluo: false,
                asesoria: false,
                precio_estimado: false,
                precio: "",
            },
            detalles: {
                ubicacion: "",
                orientacion: "",
                luz_interior: "",
                conservacion: "",
                acabados: "",
                vigilancia: "",
            },
            detalles_aprox: {
                m2_construccion: "",
                m2_terreno: "",
                m2_jardin: "",
                m2_terraza: "",
                uso_suelo: "",
                edad: "",
                costo_mantenimiento: "",
                costo_vigilancia: "",
                numero_casas: ""
            },
            proceso: {
                otros_corredores: "",
                lleva_relacion: "",
                ha_decidido_comprar: "",
                experiencia: ""
            },
            eleccion_agente: {
                compartir_comision: "",
                firmar_contrato: "",
                agendar_citas: "",
                dejaria_llave: ""
            },
            mis_datos: {
                nombre: "",
                telefono: "",
                email: "",
                direccion: "",
                referencia: ""
            },
        };
        this.formulario_documentacion_venta = {
            datos_propietario: {
                correo: "",
            },
            mex_o_ext: {
                tipo: "",
                identificacion: false,
                rfc: false,
                curp: false,
                acta_matrimonio: false,
                fm3: false,
                carta_naturalizacion: false
            },
            moral: {
                acta_constitutiva: false,
                rfc: false,
                poder_representante: false,
                indentificacion: false,
                domicilio: false,
            },
            tipo_persona: "",
            tipo_propiedad: {
                tipo: "",
                inmueble: {
                    escritura: false,
                    predial: false,
                    agua: false
                },
                edificio: {
                    licencia: false,
                    aviso_terminacion: false,
                    alineamiento_num_oficial: false
                },
                departamento_casa: {
                    regimen_propiedad: false,
                    reglamento: false,
                    mantenimiento: false,
                    uso_suelo: false,
                }
            },
            hipoteca: {
                tiene: "",
                escritura: false,
                recibo_pagado: false,
                recibo_mantenimineto: false,
                estado_cuenta: false,
                carta_liberacion: false,
            },
            herencia: {
                tiene: "",
                carta_aceptacion: false,
                carta_notario: false,
                escritura_adjudicacion: false,
                carta_notario_proceso: false,
                propietario_fallecio: false,
            },
            disposicion: ""
        };
        this.formulario_documentacion_renta = {
            datos_propietario: {
                correo: "",
                celular: "",
                direccion: "",
                nombre: "",
                tipo: {
                    persona_fisica: false,
                    persona_moral: false,
                    copropiedad: false
                }
            }
        };
        this.formulario_contrato_renta = {
            familia: {
                adultos: "",
                hombres_no_adultos: "",
                mujeres_no_adultas: "",
                servicio: "",
                mascotas: ""
            },
            que_busca: {
                departamento: "",
                casa: "",
                casa_condominio: "",
                oficina: "",
                bodega: ""
            },
            fechaOperacion: new Date(),
            aval: "",
            zona: "",
            presupuesto: {
                amueblada: false,
                mantenimiento: false,
                servicios: false,
                aparte_mantenimiento: false,
                aparte_servicios: false,
                tope: ""
            },
            espacios: {
                recamaras: "",
                banos: "",
                estacionamientos: ""
            },
            preferencias: {
                orientacion: "",
                luz_interior: "",
                calle_cerrada: "",
                decoracion: "",
            },
            busqueda: {
                amenities: "",
                edificios_altos: "",
                otros_corredores: "",
                visitado_propiedades: "",
                experiencia_positiva: ""
            },
            horarios: "",
            mis_datos: {
                nombre: "",
                telefono: "",
                email: "",
                referencia: ""
            },
        };
        //Formularios Cliente
        this.formulario_conseguir_cliente = {
            proceso: {
                otros_corredores: "",
                lleva_relacion: "",
                iniciado_busqueda: "",
            },
            presupuesto: "",
            especificacion_especial: "",
            aval: "",
            zonas: "",
            fechaOperacion: new Date(),
            datos: {
                nombre: "",
                celular: "",
                email: "",
            },
            espacios: {
                recamaras: "",
                banos: "",
                estacionamientos: ""
            },
            dimensiones: {
                departamento: "",
                casa: "",
                casa_condominio: "",
                terreno: "",
                oficina: "",
                bodega: ""
            },
        };
        //Formulario Ambos
        this.formulario_informe_visita = {
            propiedad_visitada: {
                calle: "",
                colonia: "",
                ciudad: "",
                estado: "",
                asesor: ""
            },
            fechaVistia: new Date(),
            gustos: {
                ubicacion: false,
                conservacion: false,
                distribucion: false,
                acabados: false,
                espacios: false,
                estilo: false,
                precio: false,
                otro: false
            },
            oportunidad: {
                no_convencio: "",
                falta_area: "",
                calificacion: "",
                visitar_nuevo: "",
                comentario: ""
            },
            servicio: {
                atencion: "",
                puntualidad: "",
                informacion: "",
                profesionalismo: ""
            },
            mis_datos: {
                nombre: "",
                telefono: "",
                email: "",
                referencia: ""
            },
            proceso: {
                otros_corredores: "",
                lleva_relacion: "",
                ha_decidido_comprar: "",
                experiencia: ""
            }
        };
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Actualizando...',
            });
            yield this.loader.present();
        });
    }
    showLoader() {
        this.presentLoading();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.formularioAVer = window.localStorage.getItem("formularioAVer");
        this.tipoFormularioAVer = window.localStorage.getItem("tipoFormularioAVer");
        if (this.tipoFormularioAVer == "Cliente") {
            if (window.localStorage.getItem("cliente_a_ver"))
                this.cliente = JSON.parse(window.localStorage.getItem("cliente_a_ver"));
            try {
                if (this.cliente.formulario_conseguir_cliente != '')
                    this.formulario_conseguir_cliente = JSON.parse(this.cliente.formulario_conseguir_cliente);
            }
            catch (e) {
                console.log("JSONPARSERRORFORM", e);
                console.log(this.formulario_conseguir_cliente);
            }
            try {
                if (this.cliente.formulario_informe_visita != '')
                    this.formulario_informe_visita = JSON.parse(this.cliente.formulario_informe_visita);
            }
            catch (e) {
                console.log("JSONPARSERRORFORM", e);
                console.log(this.formulario_informe_visita);
            }
        }
        if (this.tipoFormularioAVer == "Propiedad") {
            if (window.localStorage.getItem("propiedad_a_ver"))
                this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"));
            this.formulario_informe_visita.propiedad_visitada.calle = this.propiedad.direccion;
            this.user_info = JSON.parse(window.localStorage.getItem("user_info"));
            console.log(this.user_info);
            this.formulario_informe_visita.propiedad_visitada.asesor = this.user_info.nombreApellido;
            /*      try {
                    if(this.propiedad.formulario_conseguir_propiedad!='')
                      this.formulario_conseguir_propiedad = JSON.parse(this.propiedad.formulario_conseguir_propiedad);
                  }
                  catch (e) {
                    console.log("JSONPARSERRORFORM",e)
                    console.log(this.formulario_conseguir_propiedad)
                  }
                  try {
                    if(this.propiedad.formulario_documentacion_renta!='')
                      this.formulario_documentacion_renta = JSON.parse(this.propiedad.formulario_documentacion_renta);
                  }
                  catch (e) {
                    console.log("JSONPARSERRORFORM",e)
                    console.log(this.formulario_documentacion_renta)
                  }
                  try {
                    if(this.propiedad.formulario_documentacion_venta!='')
                      this.formulario_documentacion_venta = JSON.parse(this.propiedad.formulario_documentacion_venta);
                  }
                  catch (e) {
                    console.log("JSONPARSERRORFORM",e)
                    console.log(this.formulario_documentacion_renta)
                  }
                  try {
                  /!*  if(this.propiedad.formulario_informe_visita!='')
                    {
                      this.formulario_informe_visita = JSON.parse(this.propiedad.formulario_informe_visita);
                    }*!/
            
            
                  }
                  catch (e) {
                    console.log("JSONPARSERRORFORM",e)
                    console.log(this.formulario_informe_visita)
                  }
                  try {
                    if(this.propiedad.formulario_contrato_renta!='')
                      this.formulario_contrato_renta = JSON.parse(this.propiedad.formulario_contrato_renta);
                  }
                  catch (e) {
                    console.log("JSONPARSERRORFORM",e)
                    console.log(this.formulario_contrato_renta)
                  }*/
        }
        console.log("this.formularioAVer", this.formularioAVer);
    }
    guardarFormulario() {
        this.showLoader();
        var tipo = "formulario_";
        var formulario;
        var formulario_php;
        var id;
        if (this.tipoFormularioAVer == "Cliente") {
            id = this.cliente.id_cliente;
            formulario_php = "Clientes";
        }
        if (this.tipoFormularioAVer == "Propiedad") {
            id = this.propiedad.id_propiedad;
            formulario_php = "Propiedades";
        }
        if (this.formularioAVer == "Conseguir el Cliente") {
            formulario = JSON.stringify(this.formulario_conseguir_cliente);
            tipo = tipo + "conseguir_cliente";
        }
        if (this.formularioAVer == "Informe de Visita") {
            formulario = JSON.stringify(this.formulario_informe_visita);
            tipo = tipo + "informe_visita";
        }
        if (this.formularioAVer == "Conseguir la Propiedad") {
            formulario = JSON.stringify(this.formulario_conseguir_propiedad);
            tipo = tipo + "conseguir_propiedad";
        }
        if (this.formularioAVer == "Documentación para Renta") {
            formulario = JSON.stringify(this.formulario_documentacion_renta);
            tipo = tipo + "documentacion_renta";
        }
        if (this.formularioAVer == "Documentación para Venta") {
            formulario = JSON.stringify(this.formulario_documentacion_venta);
            tipo = tipo + "documentacion_venta";
        }
        if (this.formularioAVer == "Contrato para Renta") {
            formulario = JSON.stringify(this.formulario_contrato_renta);
            tipo = tipo + "contrato_renta";
        }
        this.http.setRequestTimeout(5.0);
        /*    console.log("formulario",formulario)
            console.log("tipo",tipo)
            console.log("id",id)*/
        this.http.post(this.rs.ROOTURL + formulario_php + "/updateFormulario.php", {
            "formulario": formulario,
            "tipo": tipo,
            "id": id
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            this.loader.dismiss();
            console.log(data.data);
            if (this.formularioAVer == "Informe de Visita") {
                if (this.tipoFormularioAVer == "Cliente") {
                    this.cliente.formulario_informe_visita = this.formulario_informe_visita;
                }
                if (this.tipoFormularioAVer == "Propiedad") {
                    this.propiedad.formulario_informe_visita = this.formulario_informe_visita;
                }
            }
            if (this.formularioAVer == "Conseguir el Cliente") {
                this.cliente.formulario_conseguir_cliente = this.formulario_conseguir_cliente;
            }
            if (this.formularioAVer == "Conseguir la Propiedad") {
                this.propiedad.formulario_conseguir_propiedad = this.formulario_conseguir_propiedad;
            }
            if (this.formularioAVer == "Documentación para Renta") {
                this.propiedad.formulario_documentacion_venta = this.formulario_documentacion_venta;
            }
            if (this.formularioAVer == "Documentación para Renta") {
                this.propiedad.formulario_documentacion_venta = this.formulario_documentacion_venta;
            }
            if (this.formularioAVer == "Contrato para Renta") {
                this.propiedad.formulario_contrato_renta = this.formulario_contrato_renta;
            }
            if (this.tipoFormularioAVer == "Cliente") {
                window.localStorage.setItem("cliente_a_ver", JSON.stringify(this.cliente));
            }
            if (this.tipoFormularioAVer == "Propiedad") {
                window.localStorage.setItem("propiedad_a_ver", JSON.stringify(this.propiedad));
            }
            this.goBack();
        })
            .catch(error => {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            this.loader.dismiss();
        });
    }
    goBack() {
        this.navCtrl.pop();
    }
    enviarFormulario() {
        //this.showLoader();
        var body;
        var datos_cliente = "";
        if (this.formularioAVer == "Conseguir el Cliente") {
            datos_cliente = "Datos Cliente";
            body = "Datos:<br>" +
                "- Nombre completo: " + this.formulario_conseguir_cliente.datos.nombre + "<br>" +
                "- Teléfono de contacto: " + this.formulario_conseguir_cliente.datos.telefono + "<br>" +
                "- Email de contacto: " + this.formulario_conseguir_cliente.datos.email + "<br><br>" +
                "Espacios: " + "<br>" +
                "- Recámaras: " + this.formulario_conseguir_cliente.espacios.recamaras + "<br>" +
                "- Baños: " + this.formulario_conseguir_cliente.espacios.banos + "<br>" +
                "- Estacionamientos: " + this.formulario_conseguir_cliente.espacios.estacionamientos + "<br><br>" +
                "Dimensiones: " + "<br>" +
                "- Departamento: " + this.formulario_conseguir_cliente.dimensiones.departamento + "<br>" +
                "- Casa: " + this.formulario_conseguir_cliente.dimensiones.casa + "<br>" +
                "- Casa en Condominio: " + this.formulario_conseguir_cliente.dimensiones.casa_condominio + "<br>" +
                "- Terreno: " + this.formulario_conseguir_cliente.dimensiones.terreno + "<br>" +
                "- Oficina: " + this.formulario_conseguir_cliente.dimensiones.oficina + "<br>" +
                "- Bodega: " + this.formulario_conseguir_cliente.dimensiones.bodega + "<br><br>" +
                "Fecha Operación: " + "<br>" +
                "- Fecha: " + this.formulario_conseguir_cliente.fechaOperacion + "<br><br>" +
                "Presupuesto: " + "<br>" +
                "- Presupuesto Máximo: " + this.formulario_conseguir_cliente.presupuesto + "<br><br>" +
                "Aval: " + "<br>" +
                "- ¿Quién avalará mi renta?: " + this.formulario_conseguir_cliente.aval + "<br><br>" +
                "Detalles " + "<br>" +
                "- Zonas de mi interés: " + this.formulario_conseguir_cliente.zonas + "<br>" +
                "- Alguna especificación especial que se debe considerar en la búsqueda: " + this.formulario_conseguir_cliente.especificacion_especial + "<br><br>" +
                "Sobre mi proceso de venta " + "<br>" +
                "- ¿Me han atendido otros corredores?: " + this.formulario_conseguir_cliente.proceso.otros_corredores + "<br>" +
                "- ¿Llevas una relación de lo que ya has visto?: " + this.formulario_conseguir_cliente.proceso.lleva_relacion + "<br>" +
                "- ¿Has intentado vender anteriormente sin buenos resultados?: " + this.formulario_conseguir_cliente.proceso.iniciado_busqueda;
        }
        if (this.formularioAVer == "Informe de Visita") {
            var ubicacion = "No";
            if (this.formulario_informe_visita.gustos.ubicacion) {
                ubicacion = "Sí";
            }
            var conservacion = "No";
            if (this.formulario_informe_visita.gustos.conservacion) {
                conservacion = "Sí";
            }
            var espacio = "No";
            if (this.formulario_informe_visita.gustos.espacio) {
                espacio = "Sí";
            }
            var precio = "No";
            if (this.formulario_informe_visita.gustos.precio) {
                precio = "Sí";
            }
            var distribucion = "No";
            if (this.formulario_informe_visita.gustos.distribucion) {
                distribucion = "Sí";
            }
            var acabados = "No";
            if (this.formulario_informe_visita.gustos.acabados) {
                acabados = "Sí";
            }
            var estilo = "No";
            if (this.formulario_informe_visita.gustos.estilo) {
                estilo = "Sí";
            }
            var otro = "No";
            if (this.formulario_informe_visita.gustos.otro) {
                otro = "Sí";
            }
            body = "- Propiedad Visitada:<br>" +
                "- Dirección: " + this.formulario_informe_visita.propiedad_visitada.calle + "<br>" +
                /*    "- Ciudad: "+this.formulario_informe_visita.propiedad_visitada.ciudad+"<br>"+
                    "- Colonia: "+this.formulario_informe_visita.propiedad_visitada.colonia+"<br>"+
                    "- Estado: "+this.formulario_informe_visita.propiedad_visitada.estado+"<br>"+*/
                "- Asesor que atendió: " + this.formulario_informe_visita.propiedad_visitada.asesor + "<br><br>" +
                "Fecha de la visita: " + "<br>" +
                "- Fecha: " + this.formulario_informe_visita.fechaVisita + "<br><br>" +
                "¿Qué le gustó de la propiedad?: " + "<br>" +
                "- Ubicación: " + this.formulario_informe_visita.gustos.ubicacion + "<br>" +
                "- Conservación: " + this.formulario_informe_visita.gustos.conservacion + "<br>" +
                "- Espacio: " + this.formulario_informe_visita.gustos.espacio + "<br>" +
                "- Precio: " + this.formulario_informe_visita.gustos.precio + "<br>" +
                "- Distribución: " + this.formulario_informe_visita.gustos.distribucion + "<br>" +
                "- Acabados: " + this.formulario_informe_visita.gustos.acabados + "<br>" +
                "- Estilo: " + this.formulario_informe_visita.gustos.estilo + "<br>" +
                "- Otro: " + this.formulario_informe_visita.gustos.otro + "<br><br>" +
                "Áreas de oportunidad del inmueble: " + "<br>" +
                "- ¿Hubo algo que no le convenciera?: " + this.formulario_informe_visita.oportunidad.no_convencio + "<br>" +
                "- ¿Falta algún área que necesite?: " + this.formulario_informe_visita.oportunidad.falta_area + "<br>" +
                "- Su calificación del 1 al 10: " + this.formulario_informe_visita.oportunidad.calificacion + "<br>" +
                "- ¿Le gustaría visitar de nuevo el inmueble?: " + this.formulario_informe_visita.oportunidad.visitar_nuevo + "<br>" +
                "- Algún comentario sobre la visita...: " + this.formulario_informe_visita.oportunidad.comentario + "<br><br>" +
                "¿Cómo considera nuestro servicio hasta ahora?: " + "<br>" +
                "- Atención: " + this.formulario_informe_visita.servicio.atencion + "<br>" +
                "- Información: " + this.formulario_informe_visita.servicio.informacion + "<br>" +
                "- Puntualidad: " + this.formulario_informe_visita.servicio.puntualidad + "<br>" +
                "- Profesionalismo: " + this.formulario_informe_visita.servicio.profesionalismo + "<br><br>" +
                "Registro de mis datos: " + "<br>" +
                "- Nombre completo: " + this.formulario_informe_visita.mis_datos.nombre + "<br>" +
                "- Teléfono de contacto: " + this.formulario_informe_visita.mis_datos.telefono + "<br>" +
                "- Email de contacto: " + this.formulario_informe_visita.mis_datos.email + "<br>" +
                "- ¿Quién te refirió con nosotros?: " + this.formulario_informe_visita.mis_datos.referencia + "<br>" + "<br>" +
                "Sobre mi proceso de búsqueda... " + "<br>" +
                "- ¿Me han atendido otros corredores?: " + this.formulario_informe_visita.proceso.otros_corredores + "<br>" +
                "- ¿Llevas una relación de lo que ya has visto?: " + this.formulario_informe_visita.proceso.lleva_relacion + "<br>" +
                "- ¿Has decidido comprar anteriormente sin buenos resultados?: " + this.formulario_informe_visita.proceso.ha_decidido_comprar + "<br>" +
                "- Cómo calificas tu experiencia de búsqueda hasta ahora: " + this.formulario_informe_visita.proceso.experiencia;
        }
        if (this.formularioAVer == "Conseguir la Propiedad") {
            var precio_definido = "No";
            if (this.formulario_conseguir_propiedad.valor_propiedad.precio_definido) {
                precio_definido = "Sí";
            }
            var avaluo = "No";
            if (this.formulario_conseguir_propiedad.valor_propiedad.avaluo) {
                avaluo = "Sí";
            }
            var asesoria = "No";
            if (this.formulario_conseguir_propiedad.valor_propiedad.asesoria) {
                asesoria = "Sí";
            }
            var precio_estimado = "No";
            if (this.formulario_conseguir_propiedad.valor_propiedad.precio_estimado) {
                precio_estimado = "Sí";
            }
            body = "- Qué vende: " + this.formulario_conseguir_propiedad.que_vende + "<br>" +
                "- Fecha Límite: " + this.formulario_conseguir_propiedad.fechaLimite + "<br>" +
                "- ¿Qué preferencias tengo sobre el comprador?: " + this.formulario_conseguir_propiedad.preferencias_comprador + "<br>" + "<br>" +
                "Sobre el valor de mi propiedad: " + "<br>" +
                "- Tengo ya precio definido por mi: " + precio_definido + "<br>" +
                "- Cuento con un avalúo: " + avaluo + "<br>" +
                "- Me gustaría me asesoraran sobre mi propiedad según el precio del mercado: " + asesoria + "<br>" +
                "- Precio estimado : " + precio_estimado + "<br>" +
                "- Precio: " + this.formulario_conseguir_propiedad.valor_propiedad.precio + "<br>" + "<br>" +
                "¿Qué espacios tiene mi propiedad?: " + "<br>" +
                "- Recámaras: " + this.formulario_conseguir_propiedad.prioridad.recamaras + "<br>" +
                "- Estudio / Family: " + this.formulario_conseguir_propiedad.prioridad.estudio + "<br>" +
                "- Baños completos: " + this.formulario_conseguir_propiedad.prioridad.banos_completos + "<br>" +
                "- Medios baños: " + this.formulario_conseguir_propiedad.prioridad.medios_banos + "<br>" +
                "- Número de pisos: " + this.formulario_conseguir_propiedad.prioridad.pisos + "<br>" +
                "- Número de casas: " + this.formulario_conseguir_propiedad.prioridad.numero_casas + "<br>" + "<br>" +
                "Más detalles sobre mi propiedad: " + "<br>" +
                "- Ubicación: " + this.formulario_conseguir_propiedad.detalles.ubicacion + "<br>" +
                "- Orientación: " + this.formulario_conseguir_propiedad.detalles.orientacion + "<br>" +
                "- Luz Interior: " + this.formulario_conseguir_propiedad.detalles.luz_interior + "<br>" +
                "- Conservación en General: " + this.formulario_conseguir_propiedad.detalles.conservacion + "<br>" +
                "- Conservación Acabados: " + this.formulario_conseguir_propiedad.detalles.acabados + "<br>" +
                "- Vigilancia: " + this.formulario_conseguir_propiedad.detalles.vigilancia + "<br>" + "<br>" +
                "Detalles aproximados de mi propiedad: " + "<br>" +
                "- M2 de construcción: " + this.formulario_conseguir_propiedad.detalles_aprox.m2_construccion + "<br>" +
                "- M2 de terreno: " + this.formulario_conseguir_propiedad.detalles_aprox.m2_terreno + "<br>" +
                "- M2 de jardín: " + this.formulario_conseguir_propiedad.detalles_aprox.m2_jardin + "<br>" +
                "- M2 de terraza " + this.formulario_conseguir_propiedad.detalles_aprox.m2_terraza + "<br>" +
                "- Uso de suelo: " + this.formulario_conseguir_propiedad.detalles_aprox.uso_suelo + "<br>" +
                "- Edad de mi propiedad: " + this.formulario_conseguir_propiedad.detalles_aprox.edad + "<br>" +
                "- Costo de mantenimiento: " + this.formulario_conseguir_propiedad.detalles_aprox.costo_mantenimiento + "<br>" +
                "- Costo de vigilancia: " + this.formulario_conseguir_propiedad.detalles_aprox.costo_vigilancia + "<br>" +
                "- Número de departamentos o casas en el Condominio: " + this.formulario_conseguir_propiedad.detalles_aprox.numero_casas + "<br>" + "<br>" +
                "Sobre mi proceso de venta: " + "<br>" +
                "- ¿Me han atendido otros corredores?: " + this.formulario_conseguir_propiedad.proceso.otros_corredores + "<br>" +
                "- ¿Llevas una relación de todos los interesados?: " + this.formulario_conseguir_propiedad.proceso.lleva_relacion + "<br>" +
                "- ¿Has intentado vender anteriormente sin buenos resultados?: " + this.formulario_conseguir_propiedad.proceso.ha_decidido_comprar + "<br>" +
                "- Cómo calificas tu experiencia de búsqueda hasta ahora: " + this.formulario_conseguir_propiedad.proceso.experiencia + "<br>" + "<br>" +
                "Si nos eligieras como tu agente inmobiliario: " + "<br>" +
                "- ¿Aceptarías compartir una comisión del 5% del total de la compra?: " + this.formulario_conseguir_propiedad.eleccion_agente.compartir_comision + "<br>" +
                "- ¿Aceptarías firmar un contrato de fidelidad (no exclusividad) para brindarte asesoría integral, trato eficiente y protegerte de malas prácticas?: " + this.formulario_conseguir_propiedad.eleccion_agente.firmar_contrato + "<br>" +
                "- ¿Te gustaría agendar citas previo acuerdo?: " + this.formulario_conseguir_propiedad.eleccion_agente.agendar_citas + "<br>" +
                "- ¿Dejarías llave por si no hay quien reciba?: " + this.formulario_conseguir_propiedad.eleccion_agente.dejaria_llave + "<br>" + "<br>" +
                "Registro de datos: " + "<br>" +
                "- Nombre completo: " + this.formulario_conseguir_propiedad.mis_datos.nombre + "<br>" +
                "- Teléfono de contacto: " + this.formulario_conseguir_propiedad.mis_datos.telefono + "<br>" +
                "- Email de contacto: " + this.formulario_conseguir_propiedad.mis_datos.email + "<br>" +
                "- Dirección Completa " + this.formulario_conseguir_propiedad.mis_datos.direccion + "<br>" +
                "-¿Quién te refirió con nosotros?: " + this.formulario_conseguir_propiedad.mis_datos.referencia;
        }
        if (this.formularioAVer == "Documentación para Renta") {
            body = "";
        }
        if (this.formularioAVer == "Documentación para Venta") {
            var identificacion = "No";
            if (this.formulario_documentacion_venta.mex_o_ext.identificacion) {
                identificacion = "Sí";
            }
            var acta_matrimonio = "No";
            if (this.formulario_documentacion_venta.mex_o_ext.acta_matrimonio) {
                acta_matrimonio = "Sí";
            }
            var rfc = "No";
            if (this.formulario_documentacion_venta.mex_o_ext.rfc) {
                rfc = "Sí";
            }
            var curp = "No";
            if (this.formulario_documentacion_venta.mex_o_ext.curp) {
                curp = "Sí";
            }
            var fm3 = "No";
            if (this.formulario_documentacion_venta.mex_o_ext.fm3) {
                fm3 = "Sí";
            }
            var carta_naturalizacion = "No";
            if (this.formulario_documentacion_venta.mex_o_ext.carta_naturalizacion) {
                carta_naturalizacion = "Sí";
            }
            var acta_constitutiva = "No";
            if (this.formulario_documentacion_venta.moral.acta_constitutiva) {
                acta_constitutiva = "Sí";
            }
            var rfc_m = "No";
            if (this.formulario_documentacion_venta.moral.rfc) {
                rfc_m = "Sí";
            }
            var poder_representante = "No";
            if (this.formulario_documentacion_venta.moral.poder_representante) {
                poder_representante = "Sí";
            }
            var indentificacion_m = "No";
            if (this.formulario_documentacion_venta.moral.indentificacion_m) {
                indentificacion_m = "Sí";
            }
            var domicilio = "No";
            if (this.formulario_documentacion_venta.moral.domicilio) {
                domicilio = "Sí";
            }
            //Inmueble
            var escritura = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.inmueble.escritura) {
                escritura = "Sí";
            }
            var predial = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.inmueble.predial) {
                predial = "Sí";
            }
            var agua = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.inmueble.agua) {
                agua = "Sí";
            }
            //Edificio
            var licencia = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.edificio.licencia) {
                licencia = "Sí";
            }
            var aviso_terminacion = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.edificio.aviso_terminacion) {
                aviso_terminacion = "Sí";
            }
            var alineamiento_num_oficial = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.edificio.alineamiento_num_oficial) {
                alineamiento_num_oficial = "Sí";
            }
            //DEPARTAMENTO, CASA, LOCAL Y OFICINA EN CONDOMINIO
            var regimen_propiedad = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.departamento_casa.regimen_propiedad) {
                regimen_propiedad = "Sí";
            }
            var reglamento = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.departamento_casa.reglamento) {
                reglamento = "Sí";
            }
            var mantenimiento = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.departamento_casa.mantenimiento) {
                mantenimiento = "Sí";
            }
            var uso_suelo = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.departamento_casa.uso_suelo) {
                uso_suelo = "Sí";
            }
            //Hipoteca
            var escritura = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.hipoteca.escritura) {
                escritura = "Sí";
            }
            var recibo_pagado = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.hipoteca.recibo_pagado) {
                recibo_pagado = "Sí";
            }
            var recibo_mantenimineto = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.hipoteca.recibo_mantenimineto) {
                recibo_mantenimineto = "Sí";
            }
            var estado_cuenta = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.hipoteca.estado_cuenta) {
                estado_cuenta = "Sí";
            }
            var carta_liberacion = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.hipoteca.carta_liberacion) {
                carta_liberacion = "Sí";
            }
            //Herencia
            var carta_aceptacion = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.hipoteca.carta_aceptacion) {
                carta_aceptacion = "Sí";
            }
            var carta_notario = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.hipoteca.carta_notario) {
                carta_notario = "Sí";
            }
            var escritura_adjudicacion = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.hipoteca.escritura_adjudicacion) {
                escritura_adjudicacion = "Sí";
            }
            var carta_notario_proceso = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.hipoteca.carta_notario_proceso) {
                carta_notario_proceso = "Sí";
            }
            var propietario_fallecio = "No";
            if (this.formulario_documentacion_venta.tipo_propiedad.hipoteca.propietario_fallecio) {
                propietario_fallecio = "Sí";
            }
            body = "Documentos para solicitar al Propietario: " + "<br><br>" +
                "- Dirección de correo electrónico: " + this.formulario_documentacion_venta.datos_propietario.correo + "<br>" +
                "- Tipo de Persona: " + this.formulario_documentacion_venta.tipo_persona + "<br>" +
                "- Nacional o Extranjero: " + this.formulario_documentacion_venta.mex_o_ext.tipo + "<br><br>" +
                "Persona Física: " + "<br>" +
                "- Identificación oficial vigente: " + identificacion + "<br>" +
                "- Acta de Matrimonio: " + acta_matrimonio + "<br>" +
                "- RFC: " + rfc + "<br>" +
                "- CURP: " + curp + "<br>" +
                "- Copia de su FM3: " + fm3 + "<br>" +
                "- En su caso, Carta de Naturalización: " + carta_naturalizacion + "<br><br>" +
                "Persona Moral: " + "<br>" +
                "- Acta constitutiva de la empresa (con inscripción al Registro Público de la Propiedad): " + acta_constitutiva + "<br>" +
                "- RFC: " + rfc_m + "<br>" +
                "- Poder Notarial del Representante Legal: " + poder_representante + "<br>" +
                "- Identificación Oficial del Apoderado: " + indentificacion_m + "<br>" +
                "- Comprobante de domicilio de la Empresa: " + domicilio + "<br><br>" +
                "Propiedad: " + "<br>" +
                "- Tipo de Propiedad: " + this.formulario_documentacion_venta.tipo_propiedad.tipo + "<br><br>" +
                "Inmueble: " + "<br>" +
                "- Escritura de Propiedad con datos de inscripción en Registro Público de la Propiedad: " + escritura + "<br>" +
                "- Última boleta de predial: " + predial + "<br>" +
                "- Última boleta de agua: " + agua + "<br><br>" +
                "Edificio: " + "<br>" +
                "- Licencia de construcción (si tiene): " + licencia + "<br>" +
                "- Aviso de terminación de obra (si tiene): " + aviso_terminacion + "<br>" +
                "- Alineamiento y número oficial (si tiene): " + alineamiento_num_oficial + "<br><br>" +
                "DEPARTAMENTO, CASA, LOCAL Y OFICINA EN CONDOMINIO: " + "<br>" +
                "- Régimen de propiedad en condominio (si tiene): " + regimen_propiedad + "<br>" +
                "- Reglamento (si tiene): " + reglamento + "<br>" +
                "- Último recibo de mantenimiento: " + mantenimiento + "<br>" +
                "- Uso de suelo (sólo uso comercial): " + uso_suelo + "<br><br>" +
                "Hipoteca: " + "<br>" +
                "- ¿Tiene Hipoteca?: " + this.formulario_documentacion_venta.hipoteca.tiene + "<br>" +
                "- Escritura de Hipoteca: " + escritura + "<br>" +
                "- Último recibo de la hipoteca pagado: " + recibo_pagado + "<br>" +
                "- Último recibo de mantenimiento: " + recibo_mantenimineto + "<br>" +
                "- Estado de Cuenta: " + estado_cuenta + "<br>" +
                "- Escritura, Carta o Instrumento de liberación: " + carta_liberacion + "<br><br>" +
                "Herencia: " + "<br>" +
                "- ¿Es Herencia?: " + this.formulario_documentacion_venta.herencia.tiene + "<br>" +
                "- Escritura de aceptación de herencia: " + carta_aceptacion + "<br>" +
                "- Carta del Notario (si la aceptación de herencia está en proceso): " + carta_notario + "<br>" +
                "- Escritura de adjudicación de herencia (Si ya se adjudicó)*: " + escritura_adjudicacion + "<br>" +
                "- Carta del Notario (Si está en proceso la adjudicación): " + carta_notario_proceso + "<br>" +
                "- Si el propietario falleció antes del 2000, traer acta de matrimonio de los herederos y si los herederos están casados por propiedad conyugal, que firme el Cónyuge también de aceptación): " + propietario_fallecio + "<br><br>" +
                "Comisión: " + "<br>" +
                "- ¿Estarías de acuerdo de pagar una comisión por intermediación inmobiliaria del 5% del precio de venta?: " + this.formulario_documentacion_venta.disposicion + "<br>";
        }
        if (this.formularioAVer == "Contrato para Renta") {
            body = "Integrantes:<br>" +
                "- Adultos: " + this.formulario_contrato_renta.familia.adultos + "<br>" +
                "- Niños / Jóvenes (hombres): " + this.formulario_contrato_renta.familia.hombres_no_adultos + "<br>" +
                "- Niñas / Jóvenes (mujeres): " + this.formulario_contrato_renta.familia.mujeres_no_adultas + "<br>" +
                "- Gente de servicio: " + this.formulario_contrato_renta.familia.servicio + "<br>" +
                "- Mascotas: " + this.formulario_contrato_renta.familia.mascotas + "<br><br>" +
                "¿Qué estoy buscando?: " + "<br>" +
                "- Departamento: " + this.formulario_contrato_renta.que_busca.departamento + "<br>" +
                "- Casa: " + this.formulario_contrato_renta.que_busca.casa + "<br>" +
                "- Casa en Condominio: " + this.formulario_contrato_renta.que_busca.casa_condominio + "<br>" +
                "- Terreno: " + this.formulario_contrato_renta.que_busca.terreno + "<br>" +
                "- Oficina: " + this.formulario_contrato_renta.que_busca.oficina + "<br>" +
                "- Bodega: " + this.formulario_contrato_renta.que_busca.bodega + "<br><br>" +
                "Fecha límite: " + "<br>" +
                "- Fecha: " + this.formulario_contrato_renta.fechaOperacion + "<br><br>" +
                "Aval: " + "<br>" +
                "- ¿Quién avalará mi renta?: " + this.formulario_contrato_renta.aval + "<br><br>" +
                "Detalles " + "<br>" +
                "- Zonas de mi interés: " + this.formulario_contrato_renta.zona + "<br><br>" +
                "Presupuesto: " + "<br>" +
                "- Deseo propiedad amueblada o semi amueblada: " + this.formulario_contrato_renta.presupuesto.amueblada + "<br>" +
                "- Ya incluyo mantenimiento: " + this.formulario_contrato_renta.presupuesto.mantenimiento + "<br>" +
                "- Ya incluyo servicios: " + this.formulario_contrato_renta.presupuesto.servicios + "<br>" +
                "- Mi presupuesto permite pagar aparte mantenimiento: " + this.formulario_contrato_renta.presupuesto.aparte_mantenimiento + "<br>" +
                "- Mi presupuesto permite pagar servicios aparte: " + this.formulario_contrato_renta.presupuesto.aparte_servicios + "<br>" +
                "- Presupuesto Máximo: " + this.formulario_contrato_renta.presupuesto.tope + "<br><br>" +
                "Espacios: " + "<br>" +
                "- Recámaras: " + this.formulario_contrato_renta.espacios.recamaras + "<br>" +
                "- Baños: " + this.formulario_contrato_renta.espacios.banos + "<br>" +
                "- Estacionamientos: " + this.formulario_contrato_renta.espacios.estacionamientos + "<br><br>" +
                "Preferencias: " + "<br>" +
                "- Orientación: " + this.formulario_contrato_renta.preferencias.orientacion + "<br>" +
                "- Luz Interior: " + this.formulario_contrato_renta.preferencias.luz_interior + "<br>" +
                "- Calle cerrada y vigilancia: " + this.formulario_contrato_renta.preferencias.calle_cerrada + "<br>" +
                "- Tipo decoración: " + this.formulario_contrato_renta.preferencias.decoracion + "<br><br>" +
                "Sobre mi proceso de búsqueda " + "<br>" +
                "- ¿Me gustaría tener amenities como algo indispensable?: " + this.formulario_contrato_renta.busqueda.amenities + "<br>" +
                "- ¿Me gustan edificios altos?: " + this.formulario_contrato_renta.busqueda.edificios_altos + "<br>" +
                "- ¿Me han atendido otros corredores?: " + this.formulario_contrato_renta.busqueda.otros_corredores + "<br>" +
                "- ¿Ya has visto algunas propiedades sin que algo te convenza?: " + this.formulario_contrato_renta.busqueda.visitado_propiedades + "<br>" +
                "- ¿Tu experiencia hasta ahora ha sido positiva?: " + this.formulario_contrato_renta.busqueda.experiencia_positiva + "<br><br>" +
                "Registro de datos " + "<br>" +
                "- Nombre completo: " + this.formulario_contrato_renta.mis_datos.nombre + "<br>" +
                "- Teléfono de contacto: " + this.formulario_contrato_renta.mis_datos.telefono + "<br>" +
                "- Email de contacto: " + this.formulario_contrato_renta.mis_datos.email + "<br>" +
                "- ¿Quién te refirió con nosotros?: " + this.formulario_contrato_renta.mis_datos.referencia;
        }
        let email = {
            to: window.localStorage.getItem("user"),
            //to:"tomas.p@gyo-solutions.com",
            /*      cc: 'erika@mustermann.de',
                  bcc: ['john@doe.com', 'jane@doe.com'],*/
            /* attachments: [
               'file://img/logo.png',
               'res://icon.png',
               'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
               'file://README.pdf'
             ],*/
            subject: 'Envio de formulario ' + datos_cliente,
            body: body,
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
        this.goBack();
    }
};
FormularioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__["EmailComposer"] }
];
FormularioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formulario',
        template: __webpack_require__(/*! raw-loader!./formulario.page.html */ "./node_modules/raw-loader/index.js!./src/app/formulario/formulario.page.html"),
        styles: [__webpack_require__(/*! ./formulario.page.scss */ "./src/app/formulario/formulario.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__["EmailComposer"]])
], FormularioPage);



/***/ }),

/***/ "./src/app/services/rs.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/rs.service.ts ***!
  \****************************************/
/*! exports provided: RootSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootSettingsService", function() { return RootSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let RootSettingsService = class RootSettingsService {
    constructor(platform) {
        this.platform = platform;
        this.ROOTURL = "http://broktool.com/ControlPanel/php/admin/";
    }
    obtnerViajesPorIDServicio() {
    }
};
RootSettingsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
RootSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], RootSettingsService);



/***/ }),

/***/ "./src/app/shared/button-fab/button-fab.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/button-fab/button-fab.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9idXR0b24tZmFiL2J1dHRvbi1mYWIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/button-fab/button-fab.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/button-fab/button-fab.component.ts ***!
  \***********************************************************/
/*! exports provided: ButtonFabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonFabComponent", function() { return ButtonFabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonFabComponent = class ButtonFabComponent {
    constructor() { }
    ngOnInit() { }
};
ButtonFabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button-fab',
        template: __webpack_require__(/*! raw-loader!./button-fab.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/button-fab/button-fab.component.html"),
        styles: [__webpack_require__(/*! ./button-fab.component.scss */ "./src/app/shared/button-fab/button-fab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ButtonFabComponent);



/***/ }),

/***/ "./src/app/shared/footer-blue/footer-blue.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/footer-blue/footer-blue.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXItYmx1ZS9mb290ZXItYmx1ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/footer-blue/footer-blue.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/footer-blue/footer-blue.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterBlueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBlueComponent", function() { return FooterBlueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");



let FooterBlueComponent = class FooterBlueComponent {
    constructor(iab) {
        this.iab = iab;
    }
    ngOnInit() { }
    openLink() {
        this.iab.create("https://www.brokersnetwork.mx/", "_system");
    }
};
FooterBlueComponent.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] }
];
FooterBlueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer-blue',
        template: __webpack_require__(/*! raw-loader!./footer-blue.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer-blue/footer-blue.component.html"),
        styles: [__webpack_require__(/*! ./footer-blue.component.scss */ "./src/app/shared/footer-blue/footer-blue.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])
], FooterBlueComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let FooterComponent = class FooterComponent {
    constructor(iab, keyboard, platform) {
        this.iab = iab;
        this.keyboard = keyboard;
        this.platform = platform;
    }
    /*  isKeyboardHide=true;
    
      ionViewWillEnter() {
    
        this.platform.ready().then(() => {
          this.keyboard.onKeyboardWillShow().subscribe(()=>{
            this.isKeyboardHide=false;
            console.log('SHOWK');
          });
    
          this.keyboard.onKeyboardWillHide().subscribe(()=>{
            this.isKeyboardHide=true;
            console.log('HIDEK');
          });
        });
    
    
      }*/
    ngOnInit() { }
    openLink() {
        this.iab.create("https://www.brokersnetwork.mx/", "_system");
    }
};
FooterComponent.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/main-header/main-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/main-header/main-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/main-header/main-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/main-header/main-header.component.ts ***!
  \*************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainHeaderComponent = class MainHeaderComponent {
    constructor() {
        this.urlLogo = '/assets/images/logoHB.png';
    }
    ngOnInit() { }
};
MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-header',
        template: __webpack_require__(/*! raw-loader!./main-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/main-header/main-header.component.html"),
        styles: [__webpack_require__(/*! ./main-header.component.scss */ "./src/app/shared/main-header/main-header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainHeaderComponent);



/***/ }),

/***/ "./src/app/shared/menu-registro/menu-registro.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/menu-registro/menu-registro.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tZW51LXJlZ2lzdHJvL21lbnUtcmVnaXN0cm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/menu-registro/menu-registro.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/menu-registro/menu-registro.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenuRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRegistroComponent", function() { return MenuRegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuRegistroComponent = class MenuRegistroComponent {
    constructor() {
        this.urlLogo = '/assets/images/logoB.png';
    }
    ngOnInit() { }
};
MenuRegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-registro',
        template: __webpack_require__(/*! raw-loader!./menu-registro.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/menu-registro/menu-registro.component.html"),
        styles: [__webpack_require__(/*! ./menu-registro.component.scss */ "./src/app/shared/menu-registro/menu-registro.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuRegistroComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_registro_menu_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-registro/menu-registro.component */ "./src/app/shared/menu-registro/menu-registro.component.ts");
/* harmony import */ var _footer_blue_footer_blue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer-blue/footer-blue.component */ "./src/app/shared/footer-blue/footer-blue.component.ts");
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-header/main-header.component */ "./src/app/shared/main-header/main-header.component.ts");
/* harmony import */ var _button_fab_button_fab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button-fab/button-fab.component */ "./src/app/shared/button-fab/button-fab.component.ts");










let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _menu_registro_menu_registro_component__WEBPACK_IMPORTED_MODULE_6__["MenuRegistroComponent"],
            _footer_blue_footer_blue_component__WEBPACK_IMPORTED_MODULE_7__["FooterBlueComponent"],
            _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_8__["MainHeaderComponent"],
            _button_fab_button_fab_component__WEBPACK_IMPORTED_MODULE_9__["ButtonFabComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]
        ],
        exports: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _menu_registro_menu_registro_component__WEBPACK_IMPORTED_MODULE_6__["MenuRegistroComponent"],
            _footer_blue_footer_blue_component__WEBPACK_IMPORTED_MODULE_7__["FooterBlueComponent"],
            _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_8__["MainHeaderComponent"],
            _button_fab_button_fab_component__WEBPACK_IMPORTED_MODULE_9__["ButtonFabComponent"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=formulario-formulario-module-es2015.js.map