(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-propiedad-add-propiedad-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-propiedad/add-propiedad.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-propiedad/add-propiedad.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n\r\n<ion-content>\r\n<!--  <div class=\"row row&#45;&#45;header\">\r\n\r\n    <div class=\"row&#45;&#45;header__align\">\r\n      <p class=\"header__subtitle\" style=\"margin-bottom: 0px;\">Nueva propiedad</p>\r\n\r\n    </div>\r\n  </div>-->\r\n  <div class=\"row\" style=\"background-color: #ff7949; padding: 2vw\">\r\n    <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 align-self-center\">\r\n      <ion-icon style=\"color: white;float: left\" size=\"large\" name=\"arrow-back\" routerLink=\"/propiedades\"></ion-icon>\r\n    </div>\r\n    <div class=\"col-8 col-sm-8 col-md-8 col-lg-8 align-self-center\">\r\n      <p class=\"header__subtitle\" style=\"margin-bottom: 0px;text-align: left;\">Agregar Propiedad</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\" style=\"padding-top: 4vh;\">\r\n    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Nombre del Propietario\" [(ngModel)]=\"newPropiedad.nombrePropietario\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Celular\" [(ngModel)]=\"newPropiedad.celular\" />\r\n          <input\r\n                  style=\"margin-top: 2vw;border-radius: 15px;\"\r\n                  type=\"button\"\r\n                  class=\"form-control button__siguiente\"\r\n                  value=\"Buscar Contacto\"\r\n                  (click)=\"buscarContacto()\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" class=\"form-control input__text\" placeholder=\"Email\" [(ngModel)]=\"newPropiedad.email\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Precio\" [(ngModel)]=\"newPropiedad.precio_mostrar\" (blur)=\"formatCurrency_TaxableValue($event)\">\r\n          <!--<input type=\"number\" class=\"form-control input__text\" placeholder=\"Precio\" [(ngModel)]=\"newPropiedad.precio\" />-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Referencia\" [(ngModel)]=\"newPropiedad.referencia\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Dirección\" [(ngModel)]=\"newPropiedad.direccionPropietario\" />\r\n        </div>\r\n      </div>\r\n        <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n            <div class=\"form-group\">\r\n                <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"newPropiedad.tipo_propiedad\">\r\n                  <ion-select-option value=\"Villa\">Villa</ion-select-option>\r\n                  <ion-select-option value=\"Casa\">Casa</ion-select-option>\r\n                  <ion-select-option value=\"Departamento\">Departamento</ion-select-option>\r\n                  <ion-select-option value=\"Dúplex\">Dúplex</ion-select-option>\r\n                  <ion-select-option value=\"Terreno/Lote\">Terreno/Lote</ion-select-option>\r\n                  <ion-select-option value=\"Quinta\">Quinta</ion-select-option>\r\n                  <ion-select-option value=\"Casa en condominio\">Casa en condominio</ion-select-option>\r\n                  <ion-select-option value=\"Departamento Compartido\">Departamento Compartido</ion-select-option>\r\n                  <ion-select-option value=\"Rancho\">Rancho</ion-select-option>\r\n\r\n                  <ion-select-option value=\"Casa uso de suelo\">Casa uso de suelo</ion-select-option>\r\n                  <ion-select-option value=\"Huerta\">Huerta</ion-select-option>\r\n                  <ion-select-option value=\"Inmueble productivo urbano\">Inmueble productivo urbano</ion-select-option>\r\n                  <ion-select-option value=\"Local en centro comercial\">Local en centro comercial</ion-select-option>\r\n                  <ion-select-option value=\"Terreno comercial\">Terreno comercial</ion-select-option>\r\n                  <ion-select-option value=\"Bodega comercial\">Bodega comercial</ion-select-option>\r\n                  <ion-select-option value=\"Nave industrial\">Nave industrial</ion-select-option>\r\n                  <ion-select-option value=\"Oficina\">Oficina</ion-select-option>\r\n                  <ion-select-option value=\"Local Comercial\">Local Comercial</ion-select-option>\r\n                  <ion-select-option value=\"Edificio\">Edificio</ion-select-option>\r\n                </ion-select>\r\n                <!--<input type=\"text\" class=\"form-control input__text\" placeholder=\"Tipo de Operación\" [(ngModel)]=\"newPropiedad.tipoOperacion\"/>-->\r\n            </div>\r\n        </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"newPropiedad.tipoOperacion\">\r\n            <ion-select-option value=\"Renta\">Renta</ion-select-option>\r\n            <ion-select-option value=\"Venta\">Venta</ion-select-option>\r\n          </ion-select>\r\n          <!--<input type=\"text\" class=\"form-control input__text\" placeholder=\"Tipo de Operación\" [(ngModel)]=\"newPropiedad.tipoOperacion\"/>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Link\" [(ngModel)]=\"newPropiedad.link\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <textarea class=\"form-control input__text input__textarea\" placeholder=\"Notas\" rows=\"5\" [(ngModel)]=\"newPropiedad.notas\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\" style=\"padding-top: 15px; margin-bottom: 50px;\">\r\n        <div class=\"form-group\">\r\n          <input type=\"button\" class=\"form-control button__siguiente\" value=\"Agregar\" routerLink=\"/propiedades\" (click)=\"agregarPropiedad()\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"button\" class=\"form-control button__cancelar\" value=\"Cancelar\" routerLink=\"/propiedades\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<app-footer-blue></app-footer-blue>\r\n"

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

/***/ "./src/app/add-propiedad/add-propiedad-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/add-propiedad/add-propiedad-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AddPropiedadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPropiedadPageRoutingModule", function() { return AddPropiedadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_propiedad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-propiedad.page */ "./src/app/add-propiedad/add-propiedad.page.ts");




const routes = [
    {
        path: '',
        component: _add_propiedad_page__WEBPACK_IMPORTED_MODULE_3__["AddPropiedadPage"]
    }
];
let AddPropiedadPageRoutingModule = class AddPropiedadPageRoutingModule {
};
AddPropiedadPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddPropiedadPageRoutingModule);



/***/ }),

/***/ "./src/app/add-propiedad/add-propiedad.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/add-propiedad/add-propiedad.module.ts ***!
  \*******************************************************/
/*! exports provided: AddPropiedadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPropiedadPageModule", function() { return AddPropiedadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_propiedad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-propiedad-routing.module */ "./src/app/add-propiedad/add-propiedad-routing.module.ts");
/* harmony import */ var _add_propiedad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-propiedad.page */ "./src/app/add-propiedad/add-propiedad.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let AddPropiedadPageModule = class AddPropiedadPageModule {
};
AddPropiedadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_propiedad_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPropiedadPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_add_propiedad_page__WEBPACK_IMPORTED_MODULE_6__["AddPropiedadPage"]]
    })
], AddPropiedadPageModule);



/***/ }),

/***/ "./src/app/add-propiedad/add-propiedad.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/add-propiedad/add-propiedad.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__title {\n  color: white;\n  font-size: 27px;\n  font-weight: 600;\n  margin: 0px;\n  text-transform: uppercase;\n}\n\n.header__subtitle {\n  color: white;\n  font-size: 15px;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 700;\n}\n\n.btn-network {\n  width: 100%;\n  height: auto;\n  border-radius: 20px;\n  font-size: 20px;\n  background-color: #ff7949;\n  border-color: #ff7949;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 300;\n}\n\n.botonera {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  align-content: space-around;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.row--header {\n  background-color: #ff7949;\n  height: 15vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.row--header__align {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.header--content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.header--content__textos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-left: 15px;\n}\n\n.input__text {\n  border-radius: 50px;\n  border-color: #67adc9;\n  font-size: 15px;\n  color: #094f72;\n}\n\n.input__textarea {\n  border-radius: 20px !important;\n}\n\n::-webkit-input-placeholder {\n  color: #67adc9;\n}\n\n::-moz-placeholder {\n  color: #67adc9;\n}\n\n::-ms-input-placeholder {\n  color: #67adc9;\n}\n\n::placeholder {\n  color: #67adc9;\n}\n\n.button__siguiente {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #094f72;\n  color: white;\n  font-weight: 700;\n}\n\n.button__cancelar {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #ff7949;\n  color: white;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb3BpZWRhZC9DOlxcQml0QnVja2V0XFxBcHBzXFxicm9rZXJzLW5ldHdvcmstaW9zXFxicm9rZXJzLW5ldHdvcmsvc3JjXFxhcHBcXGFkZC1wcm9waWVkYWRcXGFkZC1wcm9waWVkYWQucGFnZS5zY3NzIiwic3JjL2FwcC9hZGQtcHJvcGllZGFkL2FkZC1wcm9waWVkYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0RKOztBRElFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FES0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRko7O0FES0U7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDRko7O0FES0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0ZKOztBREtFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtJO0VBQ0EsOEJBQUE7QUNGSjs7QURLRTtFQUNFLGNBQUE7QUNGSjs7QURDRTtFQUNFLGNBQUE7QUNGSjs7QURDRTtFQUNFLGNBQUE7QUNGSjs7QURDRTtFQUNFLGNBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9hZGQtcHJvcGllZGFkL2FkZC1wcm9waWVkYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uaGVhZGVyX190aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyX19zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1uZXR3b3JrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc5NDk7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjc5NDk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgXHJcbiAgLmJvdG9uZXJhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5yb3ctLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnJvdy0taGVhZGVyX19hbGlnbiB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci0tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci0tY29udGVudF9fdGV4dG9zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0X190ZXh0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICM2N2FkYzk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzA5NGY3MjtcclxuICB9XHJcblxyXG4gICAgLmlucHV0X190ZXh0YXJlYSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM2N2FkYzk7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uX19zaWd1aWVudGUge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5NGY3MjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uX19jYW5jZWxhciB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9IiwiLmhlYWRlcl9fdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oZWFkZXJfX3N1YnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ0bi1uZXR3b3JrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xuICBib3JkZXItY29sb3I6ICNmZjc5NDk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJvdG9uZXJhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvdy0taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzk0OTtcbiAgaGVpZ2h0OiAxNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJvdy0taGVhZGVyX19hbGlnbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oZWFkZXItLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci0tY29udGVudF9fdGV4dG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5pbnB1dF9fdGV4dCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1jb2xvcjogIzY3YWRjOTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzA5NGY3Mjtcbn1cblxuLmlucHV0X190ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNjdhZGM5O1xufVxuXG4uYnV0dG9uX19zaWd1aWVudGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTRmNzI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbl9fY2FuY2VsYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5NDk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-propiedad/add-propiedad.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-propiedad/add-propiedad.page.ts ***!
  \*****************************************************/
/*! exports provided: AddPropiedadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPropiedadPage", function() { return AddPropiedadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");






let AddPropiedadPage = class AddPropiedadPage {
    constructor(alertCtrl, http, rs, contacts) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.rs = rs;
        this.contacts = contacts;
        this.newPropiedad = {
            nombrePropietario: "",
            celular: "",
            email: "",
            referencia: "",
            direccionPropietario: "",
            tipoOperacion: "Renta",
            tipo_propiedad: "Casa",
            notas: "",
        };
    }
    ngOnInit() {
    }
    formatCurrency_TaxableValue(event) {
        var uy = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(event.target.value);
        this.newPropiedad.precio = event.target.value;
        this.newPropiedad.precio_mostrar = uy;
    }
    buscarContacto() {
        this.telefono_contacto = "";
        this.contacts.pickContact().then(contacto => {
            console.log("Contacto", contacto);
            this.nombre_contacto = contacto.name.givenName + " " + contacto.name.familyName;
            this.newPropiedad.nombrePropietario = this.nombre_contacto;
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
                this.newPropiedad.celular = this.telefono_contacto;
            }
        });
    }
    agregarPropiedad() {
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Propiedades/agregarPropiedad.php", {
            "nombrePropietario": this.newPropiedad.nombrePropietario,
            "id_usuario": window.localStorage.getItem("id_usuario"),
            "celular": this.newPropiedad.celular,
            "email": this.newPropiedad.email,
            "precio": this.newPropiedad.precio,
            "referencia": this.newPropiedad.referencia,
            "direccionPropietario": this.newPropiedad.direccionPropietario,
            "tipoOperacion": this.newPropiedad.tipoOperacion,
            "link": this.newPropiedad.link,
            "notas": this.newPropiedad.notas,
            "tipo_propiedad": this.newPropiedad.tipo_propiedad
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            console.log(data.data);
        })
            .catch(error => {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
};
AddPropiedadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"] }
];
AddPropiedadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-propiedad',
        template: __webpack_require__(/*! raw-loader!./add-propiedad.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-propiedad/add-propiedad.page.html"),
        styles: [__webpack_require__(/*! ./add-propiedad.page.scss */ "./src/app/add-propiedad/add-propiedad.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"]])
], AddPropiedadPage);



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
//# sourceMappingURL=add-propiedad-add-propiedad-module-es2015.js.map