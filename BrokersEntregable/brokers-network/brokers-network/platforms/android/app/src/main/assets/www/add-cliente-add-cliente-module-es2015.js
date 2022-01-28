(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-cliente-add-cliente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-cliente/add-cliente.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-cliente/add-cliente.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\n\n<ion-content>\n  <div class=\"row\" style=\"background-color: #67adc9; padding: 2vw\">\n    <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 align-self-center\">\n      <ion-icon style=\"color: white;float: left\" size=\"large\" name=\"arrow-back\" routerLink=\"/clientes\"></ion-icon>\n    </div>\n    <div class=\"col-8 col-sm-8 col-md-8 col-lg-8 align-self-center\">\n      <p class=\"header__subtitle\" style=\"margin-bottom: 0px;text-align: left;\">Agregar Cliente</p>\n    </div>\n  </div>\n<!--  <div class=\"row row&#45;&#45;header\">\n\n    <div class=\"row&#45;&#45;header__align\">\n      <p class=\"header__subtitle\" style=\"margin-bottom: 0px;\">Agregar Cliente</p>\n\n    </div>\n  </div>-->\n\n  <div class=\"container\" style=\"padding-top: 4vh;\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Nombre del Cliente\" [(ngModel)]=\"newCliente.nombre\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control input__text\" placeholder=\"Email\" [(ngModel)]=\"newCliente.email\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Teléfono\" [(ngModel)]=\"newCliente.telefono\" />\n          <input                  style=\"margin-top: 2vw;border-radius: 15px;\"\n                                  type=\"button\"\n                                  class=\"form-control button__siguiente\"\n                                  value=\"Buscar Contacto\"\n                                  (click)=\"buscarContacto()\"\n          />\n        </div>\n      </div>\n     <!-- <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Sitio Web\" [(ngModel)]=\"newCliente.website\" />\n        </div>\n      </div>-->\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Referencia\" [(ngModel)]=\"newCliente.referencia\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Propiedad que busca\" [(ngModel)]=\"newCliente.propiedad_busca\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"newCliente.tipo_propiedad\">\n            <ion-select-option value=\"Villa\">Villa</ion-select-option>\n            <ion-select-option value=\"Casa\">Casa</ion-select-option>\n            <ion-select-option value=\"Departamento\">Departamento</ion-select-option>\n            <ion-select-option value=\"Dúplex\">Dúplex</ion-select-option>\n            <ion-select-option value=\"Terreno/Lote\">Terreno/Lote</ion-select-option>\n            <ion-select-option value=\"Quinta\">Quinta</ion-select-option>\n            <ion-select-option value=\"Casa en condominio\">Casa en condominio</ion-select-option>\n            <ion-select-option value=\"Departamento Compartido\">Departamento Compartido</ion-select-option>\n            <ion-select-option value=\"Rancho\">Rancho</ion-select-option>\n\n            <ion-select-option value=\"Casa uso de suelo\">Casa uso de suelo</ion-select-option>\n            <ion-select-option value=\"Huerta\">Huerta</ion-select-option>\n            <ion-select-option value=\"Inmueble productivo urbano\">Inmueble productivo urbano</ion-select-option>\n            <ion-select-option value=\"Local en centro comercial\">Local en centro comercial</ion-select-option>\n            <ion-select-option value=\"Terreno comercial\">Terreno comercial</ion-select-option>\n            <ion-select-option value=\"Bodega comercial\">Bodega comercial</ion-select-option>\n            <ion-select-option value=\"Nave industrial\">Nave industrial</ion-select-option>\n            <ion-select-option value=\"Oficina\">Oficina</ion-select-option>\n            <ion-select-option value=\"Local Comercial\">Local Comercial</ion-select-option>\n            <ion-select-option value=\"Edificio\">Edificio</ion-select-option>\n          </ion-select>\n          <!--<input type=\"text\" class=\"form-control input__text\" placeholder=\"Tipo de Operación\" [(ngModel)]=\"newPropiedad.tipoOperacion\"/>-->\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"newCliente.renta_o_venta\">\n            <ion-select-option value=\"Renta\">Renta</ion-select-option>\n            <ion-select-option value=\"Venta\">Venta</ion-select-option>\n          </ion-select>\n          <!--<input type=\"text\" class=\"form-control input__text\" placeholder=\"Tipo de Operación\" [(ngModel)]=\"newPropiedad.tipoOperacion\"/>-->\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Zona donde busca\" [(ngModel)]=\"newCliente.zona_busca\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Récamaras\" [(ngModel)]=\"newCliente.recamaras\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Baños\" [(ngModel)]=\"newCliente.banos\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Estacionamientos\" [(ngModel)]=\"newCliente.estacionamientos\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"m2\" [(ngModel)]=\"newCliente.m2\" />\n        </div>\n      </div>\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\n        <div class=\"form-group\">\n          <input\n                  readonly\n                  placeholder=\"Fecha para concretar\"\n                  class=\"form-control input__text\"\n                  #dp=\"bsDatepicker\"\n                  [(ngModel)]=\"newCliente.fecha_concretar\"\n                  bsDatepicker\n                  [bsConfig]=\"{ containerClass: 'theme-blue' }\"\n          />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Presupuesto\" [(ngModel)]=\"newCliente.presupuesto_mostrar\" (blur)=\"formatCurrency_TaxableValue($event)\">\n\n          <!--<input type=\"text\" class=\"form-control input__text\" placeholder=\"Presupuesto\" [(ngModel)]=\"newCliente.presupuesto\" />-->\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Sus recursos consisten\" [(ngModel)]=\"newCliente.recursos_consisten\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Requisitos especiales\" [(ngModel)]=\"newCliente.requisitos_especiales\" />\n        </div>\n      </div>\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\" style=\"padding-top: 15px; margin-bottom: 50px;\">\n        <div class=\"form-group\">\n          <input type=\"button\" class=\"form-control button__siguiente\" value=\"Agregar\" routerLink=\"/clientes\" (click)=\"agregarCliente()\"/>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"button\" class=\"form-control button__cancelar\" value=\"Cancelar\" routerLink=\"/clientes\" />\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<app-footer-blue></app-footer-blue>\n"

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

/***/ "./src/app/add-cliente/add-cliente-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-cliente/add-cliente-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientePageRoutingModule", function() { return AddClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-cliente.page */ "./src/app/add-cliente/add-cliente.page.ts");




const routes = [
    {
        path: '',
        component: _add_cliente_page__WEBPACK_IMPORTED_MODULE_3__["AddClientePage"]
    }
];
let AddClientePageRoutingModule = class AddClientePageRoutingModule {
};
AddClientePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddClientePageRoutingModule);



/***/ }),

/***/ "./src/app/add-cliente/add-cliente.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-cliente/add-cliente.module.ts ***!
  \***************************************************/
/*! exports provided: AddClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientePageModule", function() { return AddClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-cliente-routing.module */ "./src/app/add-cliente/add-cliente-routing.module.ts");
/* harmony import */ var _add_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-cliente.page */ "./src/app/add-cliente/add-cliente.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");









let AddClientePageModule = class AddClientePageModule {
};
AddClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddClientePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"]
        ],
        declarations: [_add_cliente_page__WEBPACK_IMPORTED_MODULE_6__["AddClientePage"]]
    })
], AddClientePageModule);



/***/ }),

/***/ "./src/app/add-cliente/add-cliente.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-cliente/add-cliente.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__title {\n  color: white;\n  font-size: 27px;\n  font-weight: 600;\n  margin: 0px;\n  text-transform: uppercase;\n}\n\n.header__subtitle {\n  color: white;\n  font-size: 15px;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 700;\n}\n\n.btn-network {\n  width: 100%;\n  height: auto;\n  border-radius: 20px;\n  font-size: 20px;\n  background-color: #ff7949;\n  border-color: #ff7949;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 300;\n}\n\n.botonera {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  align-content: space-around;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.row--header {\n  background-color: #67adc9;\n  height: 15vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.row--header__align {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.header--content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.header--content__textos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-left: 15px;\n}\n\n.input__text {\n  border-radius: 50px;\n  border-color: #67adc9;\n  font-size: 15px;\n  color: #094f72;\n}\n\n.input__textarea {\n  border-radius: 20px !important;\n}\n\n::-webkit-input-placeholder {\n  color: #67adc9;\n}\n\n::-moz-placeholder {\n  color: #67adc9;\n}\n\n::-ms-input-placeholder {\n  color: #67adc9;\n}\n\n::placeholder {\n  color: #67adc9;\n}\n\n.button__siguiente {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #094f72;\n  color: white;\n  font-weight: 700;\n}\n\n.button__cancelar {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #67adc9;\n  color: white;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNsaWVudGUvQzpcXEJpdEJ1Y2tldFxcQXBwc1xcYnJva2Vycy1uZXR3b3JrLWlvc1xcYnJva2Vycy1uZXR3b3JrL3NyY1xcYXBwXFxhZGQtY2xpZW50ZVxcYWRkLWNsaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9hZGQtY2xpZW50ZS9hZGQtY2xpZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNERjs7QURLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNGRjs7QURLQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFDRSw4QkFBQTtBQ0ZGOztBREtBO0VBQ0UsY0FBQTtBQ0ZGOztBRENBO0VBQ0UsY0FBQTtBQ0ZGOztBRENBO0VBQ0UsY0FBQTtBQ0ZGOztBRENBO0VBQ0UsY0FBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2FkZC1jbGllbnRlL2FkZC1jbGllbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmhlYWRlcl9fdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uaGVhZGVyX19zdWJ0aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYnRuLW5ldHdvcmsge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmNzk0OTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYm90b25lcmEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5yb3ctLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3YWRjOTtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdy0taGVhZGVyX19hbGlnbiB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaGVhZGVyLS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci0tY29udGVudF9fdGV4dG9zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5pbnB1dF9fdGV4dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3JkZXItY29sb3I6ICM2N2FkYzk7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMDk0ZjcyO1xyXG59XHJcblxyXG4uaW5wdXRfX3RleHRhcmVhIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM2N2FkYzk7XHJcbn1cclxuXHJcbi5idXR0b25fX3NpZ3VpZW50ZSB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYnV0dG9uX19jYW5jZWxhciB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjdhZGM5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbiIsIi5oZWFkZXJfX3RpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGVhZGVyX19zdWJ0aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idG4tbmV0d29yayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzk0OTtcbiAgYm9yZGVyLWNvbG9yOiAjZmY3OTQ5O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5ib3RvbmVyYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yb3ctLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2N2FkYzk7XG4gIGhlaWdodDogMTV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yb3ctLWhlYWRlcl9fYWxpZ24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGVhZGVyLS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItLWNvbnRlbnRfX3RleHRvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uaW5wdXRfX3RleHQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXItY29sb3I6ICM2N2FkYzk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMwOTRmNzI7XG59XG5cbi5pbnB1dF9fdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzY3YWRjOTtcbn1cblxuLmJ1dHRvbl9fc2lndWllbnRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b25fX2NhbmNlbGFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjdhZGM5O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/add-cliente/add-cliente.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-cliente/add-cliente.page.ts ***!
  \*************************************************/
/*! exports provided: AddClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientePage", function() { return AddClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");






let AddClientePage = class AddClientePage {
    constructor(alertCtrl, http, rs, contacts) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.rs = rs;
        this.contacts = contacts;
        this.newCliente = {
            nombre: "",
            telefono: "",
            email: "",
            referencia: "",
            website: "",
            propiedad_busca: "",
            renta_o_venta: "Renta",
            zona_busca: "",
            recamaras: "",
            banos: "",
            estacionamientos: "",
            m2: "",
            fecha_concretar: "",
            presupuesto: "",
            recursos_consisten: "",
            requisitos_especiales: "",
            tipo_propiedad: "Casa",
        };
    }
    formatCurrency_TaxableValue(event) {
        var uy = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(event.target.value);
        this.newCliente.presupuesto = event.target.value;
        this.newCliente.presupuesto_mostrar = uy;
    }
    ngOnInit() {
        var uy = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(0);
        this.newCliente.presupuesto_mostrar = uy;
    }
    buscarContacto() {
        this.telefono_contacto = "";
        this.contacts.pickContact().then(contacto => {
            console.log("Contacto", contacto);
            this.nombre_contacto = contacto.name.givenName + " " + contacto.name.familyName;
            this.newCliente.nombre = this.nombre_contacto;
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
                this.newCliente.telefono = this.telefono_contacto;
            }
        });
    }
    agregarCliente() {
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Clientes/agregarCliente.php", {
            "id_usuario": window.localStorage.getItem("id_usuario"),
            "nombre": this.newCliente.nombre,
            "telefono": this.newCliente.telefono,
            "email": this.newCliente.email,
            "referencia": this.newCliente.referencia,
            "website": this.newCliente.website,
            "propiedad_busca": this.newCliente.propiedad_busca,
            "renta_o_venta": this.newCliente.renta_o_venta,
            "zona_busca": this.newCliente.zona_busca,
            "recamaras": this.newCliente.recamaras,
            "banos": this.newCliente.banos,
            "estacionamientos": this.newCliente.estacionamientos,
            "m2": this.newCliente.m2,
            "fecha_concretar": this.newCliente.fecha_concretar,
            "presupuesto": this.newCliente.presupuesto,
            "recursos_consisten": this.newCliente.recursos_consisten,
            "requisitos_especiales": this.newCliente.requisitos_especiales,
            "tipo_propiedad": this.newCliente.tipo_propiedad
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
AddClientePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"] }
];
AddClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-cliente',
        template: __webpack_require__(/*! raw-loader!./add-cliente.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-cliente/add-cliente.page.html"),
        styles: [__webpack_require__(/*! ./add-cliente.page.scss */ "./src/app/add-cliente/add-cliente.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"]])
], AddClientePage);



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
//# sourceMappingURL=add-cliente-add-cliente-module-es2015.js.map