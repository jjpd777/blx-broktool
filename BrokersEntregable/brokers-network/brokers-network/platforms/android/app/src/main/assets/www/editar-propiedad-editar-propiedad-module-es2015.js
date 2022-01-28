(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editar-propiedad-editar-propiedad-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/editar-propiedad/editar-propiedad.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/editar-propiedad/editar-propiedad.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\n\n<ion-content>\n<!--  <div class=\"row row&#45;&#45;header\">\n\n    <div class=\"row&#45;&#45;header__align\">\n      <p class=\"header__subtitle\" style=\"margin-bottom: 0px;\">Editar Propiedad</p>\n\n    </div>\n  </div>-->\n  <div class=\"row\" style=\"background-color: #ff7949; padding: 2vw\">\n    <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 align-self-center\">\n      <ion-icon style=\"color: white;float: left\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    </div>\n    <div class=\"col-8 col-sm-8 col-md-8 col-lg-8 align-self-center\">\n      <p class=\"header__subtitle\" style=\"margin-bottom: 0px;text-align: left;\">Editar Propiedad</p>\n    </div>\n  </div>\n\n  <div class=\"container\" style=\"padding-top: 4vh;\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Nombre del Propietario\" [(ngModel)]=\"propiedad.nombre\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Celular\" [(ngModel)]=\"propiedad.celular\" />\n          <input\n                  style=\"margin-top: 2vw;border-radius: 15px;\"\n                  type=\"button\"\n                  class=\"form-control button__siguiente\"\n                  value=\"Buscar Contacto\"\n                  (click)=\"buscarContacto()\"\n          />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control input__text\" placeholder=\"Email\" [(ngModel)]=\"propiedad.email\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Precio\" [(ngModel)]=\"propiedad.precio_mostrar\" (blur)=\"formatCurrency_TaxableValue($event)\">\n<!--\n          <input type=\"currency\" value=\"{{propiedad.precio | number :'1.2-2' | currency }}\" class=\"form-control input__text\" placeholder=\"Precio\" [(ngModel)]=\"propiedad.precio\" />\n-->\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Referencia\" [(ngModel)]=\"propiedad.referencia\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Dirección\" [(ngModel)]=\"propiedad.direccion\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"propiedad.tipo_propiedad\">\n            <ion-select-option value=\"Villa\">Villa</ion-select-option>\n            <ion-select-option value=\"Casa\">Casa</ion-select-option>\n            <ion-select-option value=\"Departamento\">Departamento</ion-select-option>\n            <ion-select-option value=\"Dúplex\">Dúplex</ion-select-option>\n            <ion-select-option value=\"Terreno/Lote\">Terreno/Lote</ion-select-option>\n            <ion-select-option value=\"Quinta\">Quinta</ion-select-option>\n            <ion-select-option value=\"Casa en condominio\">Casa en condominio</ion-select-option>\n            <ion-select-option value=\"Departamento Compartido\">Departamento Compartido</ion-select-option>\n            <ion-select-option value=\"Rancho\">Rancho</ion-select-option>\n\n            <ion-select-option value=\"Casa uso de suelo\">Casa uso de suelo</ion-select-option>\n            <ion-select-option value=\"Huerta\">Huerta</ion-select-option>\n            <ion-select-option value=\"Inmueble productivo urbano\">Inmueble productivo urbano</ion-select-option>\n            <ion-select-option value=\"Local en centro comercial\">Local en centro comercial</ion-select-option>\n            <ion-select-option value=\"Terreno comercial\">Terreno comercial</ion-select-option>\n            <ion-select-option value=\"Bodega comercial\">Bodega comercial</ion-select-option>\n            <ion-select-option value=\"Nave industrial\">Nave industrial</ion-select-option>\n            <ion-select-option value=\"Oficina\">Oficina</ion-select-option>\n            <ion-select-option value=\"Local Comercial\">Local Comercial</ion-select-option>\n            <ion-select-option value=\"Edificio\">Edificio</ion-select-option>\n          </ion-select>\n          <!--<input type=\"text\" class=\"form-control input__text\" placeholder=\"Tipo de Operación\" [(ngModel)]=\"newPropiedad.tipoOperacion\"/>-->\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"propiedad.tipo\">\n            <ion-select-option value=\"Renta\">Renta</ion-select-option>\n            <ion-select-option value=\"Venta\">Venta</ion-select-option>\n          </ion-select>\n          <!--<input type=\"text\" class=\"form-control input__text\" placeholder=\"Tipo de Operación\" [(ngModel)]=\"newPropiedad.tipoOperacion\"/>-->\n        </div>\n      </div>\n\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Link\" [(ngModel)]=\"propiedad.link\" />\n        </div>\n      </div>\n\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <textarea class=\"form-control input__text input__textarea\" placeholder=\"Notas\" rows=\"5\" [(ngModel)]=\"propiedad.notas\"></textarea>\n        </div>\n      </div>\n\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\" style=\"padding-top: 15px; margin-bottom: 50px;\">\n        <div class=\"form-group\">\n          <input type=\"button\" class=\"form-control button__siguiente\" value=\"Guardar\" (click)=\"editarPropiedad()\"/>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"button\" class=\"form-control button__cancelar\" value=\"Cancelar\" (click)=\"goBack()\" />\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<app-footer-blue></app-footer-blue>\n"

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

/***/ "./src/app/editar-propiedad/editar-propiedad-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/editar-propiedad/editar-propiedad-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EditarPropiedadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPropiedadPageRoutingModule", function() { return EditarPropiedadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _editar_propiedad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar-propiedad.page */ "./src/app/editar-propiedad/editar-propiedad.page.ts");




const routes = [
    {
        path: '',
        component: _editar_propiedad_page__WEBPACK_IMPORTED_MODULE_3__["EditarPropiedadPage"]
    }
];
let EditarPropiedadPageRoutingModule = class EditarPropiedadPageRoutingModule {
};
EditarPropiedadPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditarPropiedadPageRoutingModule);



/***/ }),

/***/ "./src/app/editar-propiedad/editar-propiedad.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/editar-propiedad/editar-propiedad.module.ts ***!
  \*************************************************************/
/*! exports provided: EditarPropiedadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPropiedadPageModule", function() { return EditarPropiedadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editar_propiedad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-propiedad-routing.module */ "./src/app/editar-propiedad/editar-propiedad-routing.module.ts");
/* harmony import */ var _editar_propiedad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar-propiedad.page */ "./src/app/editar-propiedad/editar-propiedad.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");









let EditarPropiedadPageModule = class EditarPropiedadPageModule {
};
EditarPropiedadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _editar_propiedad_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarPropiedadPageRoutingModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"]
        ],
        declarations: [_editar_propiedad_page__WEBPACK_IMPORTED_MODULE_6__["EditarPropiedadPage"]]
    })
], EditarPropiedadPageModule);



/***/ }),

/***/ "./src/app/editar-propiedad/editar-propiedad.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/editar-propiedad/editar-propiedad.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__title {\n  color: white;\n  font-size: 27px;\n  font-weight: 600;\n  margin: 0px;\n  text-transform: uppercase;\n}\n\n.header__subtitle {\n  color: white;\n  font-size: 15px;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 700;\n}\n\n.btn-network {\n  width: 100%;\n  height: auto;\n  border-radius: 20px;\n  font-size: 20px;\n  background-color: #ff7949;\n  border-color: #ff7949;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 300;\n}\n\n.botonera {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  align-content: space-around;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.row--header {\n  background-color: #67adc9;\n  height: 15vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.row--header__align {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.header--content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.header--content__textos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-left: 15px;\n}\n\n.input__text {\n  border-radius: 50px;\n  border-color: #67adc9;\n  font-size: 15px;\n  color: #094f72;\n}\n\n.input__textarea {\n  border-radius: 20px !important;\n}\n\n::-webkit-input-placeholder {\n  color: #67adc9;\n}\n\n::-moz-placeholder {\n  color: #67adc9;\n}\n\n::-ms-input-placeholder {\n  color: #67adc9;\n}\n\n::placeholder {\n  color: #67adc9;\n}\n\n.button__siguiente {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #094f72;\n  color: white;\n  font-weight: 700;\n}\n\n.button__cancelar {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #67adc9;\n  color: white;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdGFyLXByb3BpZWRhZC9DOlxcQml0QnVja2V0XFxBcHBzXFxicm9rZXJzLW5ldHdvcmstaW9zXFxicm9rZXJzLW5ldHdvcmsvc3JjXFxhcHBcXGVkaXRhci1wcm9waWVkYWRcXGVkaXRhci1wcm9waWVkYWQucGFnZS5zY3NzIiwic3JjL2FwcC9lZGl0YXItcHJvcGllZGFkL2VkaXRhci1wcm9waWVkYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREY7O0FES0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDRkY7O0FES0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0UsOEJBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7QUNGRjs7QURDQTtFQUNFLGNBQUE7QUNGRjs7QURDQTtFQUNFLGNBQUE7QUNGRjs7QURDQTtFQUNFLGNBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9lZGl0YXItcHJvcGllZGFkL2VkaXRhci1wcm9waWVkYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uaGVhZGVyX190aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3N1YnRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5idG4tbmV0d29yayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5NDk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmY3OTQ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5ib3RvbmVyYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnJvdy0taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjdhZGM5O1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucm93LS1oZWFkZXJfX2FsaWduIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5oZWFkZXItLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLS1jb250ZW50X190ZXh0b3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmlucHV0X190ZXh0IHtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzY3YWRjOTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICMwOTRmNzI7XHJcbn1cclxuXHJcbi5pbnB1dF9fdGV4dGFyZWEge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzY3YWRjOTtcclxufVxyXG5cclxuLmJ1dHRvbl9fc2lndWllbnRlIHtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTRmNzI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5idXR0b25fX2NhbmNlbGFyIHtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2N2FkYzk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIiwiLmhlYWRlcl9fdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oZWFkZXJfX3N1YnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ0bi1uZXR3b3JrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xuICBib3JkZXItY29sb3I6ICNmZjc5NDk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJvdG9uZXJhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvdy0taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3YWRjOTtcbiAgaGVpZ2h0OiAxNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJvdy0taGVhZGVyX19hbGlnbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oZWFkZXItLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci0tY29udGVudF9fdGV4dG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5pbnB1dF9fdGV4dCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1jb2xvcjogIzY3YWRjOTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzA5NGY3Mjtcbn1cblxuLmlucHV0X190ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNjdhZGM5O1xufVxuXG4uYnV0dG9uX19zaWd1aWVudGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTRmNzI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbl9fY2FuY2VsYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2N2FkYzk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/editar-propiedad/editar-propiedad.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/editar-propiedad/editar-propiedad.page.ts ***!
  \***********************************************************/
/*! exports provided: EditarPropiedadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPropiedadPage", function() { return EditarPropiedadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");






let EditarPropiedadPage = class EditarPropiedadPage {
    constructor(alertCtrl, http, rs, contacts, navCtrl, loadingController) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.rs = rs;
        this.contacts = contacts;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.propiedad = {
            nombre: "",
            telefono: "",
            email: "",
            notas: "",
        };
        this.TIME_IN_MS = 5000;
    }
    buscarContacto() {
        this.telefono_contacto = "";
        this.contacts.pickContact().then(contacto => {
            console.log("Contacto", contacto);
            this.nombre_contacto = contacto.name.givenName + " " + contacto.name.familyName;
            this.propiedad.nombre = this.nombre_contacto;
            for (let tel of contacto.phoneNumbers) {
                if (tel.type == "mobile") {
                    this.telefono_contacto = tel.value;
                }
                else {
                    if (tel.type == "home") {
                        this.telefono_contacto = tel.value;
                    }
                    else {
                        if (tel.type == "work") {
                            this.telefono_contacto = tel.value;
                        }
                    }
                }
            }
            if (this.telefono_contacto == "") {
                alert("Este contacto no tiene un teléfono movil asignado.");
            }
            else {
                this.propiedad.celular = this.telefono_contacto;
            }
        });
    }
    ngOnInit() {
    }
    formatCurrency_TaxableValue(event) {
        var uy = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(event.target.value);
        this.propiedad.precio = event.target.value;
        this.propiedad.precio_mostrar = uy;
    }
    ionViewDidEnter() {
        this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"));
        var uy = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(this.propiedad.precio);
        this.propiedad.precio_mostrar = uy;
        console.log("propiedad", this.propiedad);
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Cargando tu información...',
            });
            yield this.loader.present();
        });
    }
    editarPropiedad() {
        this.presentLoading();
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Propiedades/editarPropiedad.php", {
            "id_propiedad": this.propiedad.id_propiedad,
            "nombre": this.propiedad.nombre,
            "celuar": this.propiedad.celular,
            "email": this.propiedad.email,
            "tipo": this.propiedad.tipo,
            "precio": this.propiedad.precio,
            "direccion": this.propiedad.direccion,
            "referencia": this.propiedad.referencia,
            "link": this.propiedad.link,
            "notas": this.propiedad.notas,
            "tipo_propiedad": this.propiedad.tipo_propiedad
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            this.loader.dismiss();
            console.log(data.data);
            window.localStorage.setItem("propiedad_a_ver", JSON.stringify(this.propiedad));
            this.goBack();
        })
            .catch(error => {
            this.loader.dismiss();
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
    goBack() {
        this.navCtrl.back();
    }
};
EditarPropiedadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
EditarPropiedadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar-propiedad',
        template: __webpack_require__(/*! raw-loader!./editar-propiedad.page.html */ "./node_modules/raw-loader/index.js!./src/app/editar-propiedad/editar-propiedad.page.html"),
        styles: [__webpack_require__(/*! ./editar-propiedad.page.scss */ "./src/app/editar-propiedad/editar-propiedad.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], EditarPropiedadPage);



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
        this.ROOTURL = "http://broktoolserver.com/ControlPanel/php/admin/";
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
//# sourceMappingURL=editar-propiedad-editar-propiedad-module-es2015.js.map