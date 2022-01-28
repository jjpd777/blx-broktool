(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-propiedad-add-propiedad-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-propiedad/add-propiedad.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-propiedad/add-propiedad.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n\r\n<ion-content>\r\n<!--  <div class=\"row row&#45;&#45;header\">\r\n\r\n    <div class=\"row&#45;&#45;header__align\">\r\n      <p class=\"header__subtitle\" style=\"margin-bottom: 0px;\">Nueva propiedad</p>\r\n\r\n    </div>\r\n  </div>-->\r\n  <div class=\"row\" style=\"background-color: #ff7949; padding: 2vw\">\r\n    <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 align-self-center\">\r\n      <ion-icon style=\"color: white;float: left\" size=\"large\" name=\"arrow-back\" routerLink=\"/propiedades\"></ion-icon>\r\n    </div>\r\n    <div class=\"col-8 col-sm-8 col-md-8 col-lg-8 align-self-center\">\r\n      <p class=\"header__subtitle\" style=\"margin-bottom: 0px;text-align: left;\">Agregar Propiedad</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\" style=\"padding-top: 4vh;\">\r\n    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Nombre del Propietario\" [(ngModel)]=\"newPropiedad.nombrePropietario\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Celular\" [(ngModel)]=\"newPropiedad.celular\" />\r\n          <input\r\n                  style=\"margin-top: 2vw;border-radius: 15px;\"\r\n                  type=\"button\"\r\n                  class=\"form-control button__siguiente\"\r\n                  value=\"Buscar Contacto\"\r\n                  (click)=\"buscarContacto()\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" class=\"form-control input__text\" placeholder=\"Email\" [(ngModel)]=\"newPropiedad.email\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Precio\" [(ngModel)]=\"newPropiedad.precio_mostrar\" (blur)=\"formatCurrency_TaxableValue($event)\">\r\n          <!--<input type=\"number\" class=\"form-control input__text\" placeholder=\"Precio\" [(ngModel)]=\"newPropiedad.precio\" />-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Referencia\" [(ngModel)]=\"newPropiedad.referencia\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Dirección\" [(ngModel)]=\"newPropiedad.direccionPropietario\" />\r\n        </div>\r\n      </div>\r\n        <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n            <div class=\"form-group\">\r\n                <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"newPropiedad.tipo_propiedad\">\r\n                  <ion-select-option value=\"Villa\">Villa</ion-select-option>\r\n                  <ion-select-option value=\"Casa\">Casa</ion-select-option>\r\n                  <ion-select-option value=\"Departamento\">Departamento</ion-select-option>\r\n                  <ion-select-option value=\"Dúplex\">Dúplex</ion-select-option>\r\n                  <ion-select-option value=\"Terreno/Lote\">Terreno/Lote</ion-select-option>\r\n                  <ion-select-option value=\"Quinta\">Quinta</ion-select-option>\r\n                  <ion-select-option value=\"Casa en condominio\">Casa en condominio</ion-select-option>\r\n                  <ion-select-option value=\"Departamento Compartido\">Departamento Compartido</ion-select-option>\r\n                  <ion-select-option value=\"Rancho\">Rancho</ion-select-option>\r\n\r\n                  <ion-select-option value=\"Casa uso de suelo\">Casa uso de suelo</ion-select-option>\r\n                  <ion-select-option value=\"Huerta\">Huerta</ion-select-option>\r\n                  <ion-select-option value=\"Inmueble productivo urbano\">Inmueble productivo urbano</ion-select-option>\r\n                  <ion-select-option value=\"Local en centro comercial\">Local en centro comercial</ion-select-option>\r\n                  <ion-select-option value=\"Terreno comercial\">Terreno comercial</ion-select-option>\r\n                  <ion-select-option value=\"Bodega comercial\">Bodega comercial</ion-select-option>\r\n                  <ion-select-option value=\"Nave industrial\">Nave industrial</ion-select-option>\r\n                  <ion-select-option value=\"Oficina\">Oficina</ion-select-option>\r\n                  <ion-select-option value=\"Local Comercial\">Local Comercial</ion-select-option>\r\n                  <ion-select-option value=\"Edificio\">Edificio</ion-select-option>\r\n                </ion-select>\r\n                <!--<input type=\"text\" class=\"form-control input__text\" placeholder=\"Tipo de Operación\" [(ngModel)]=\"newPropiedad.tipoOperacion\"/>-->\r\n            </div>\r\n        </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <ion-select class=\"form-control input__text\" okText=\"Listo\" cancelText=\"Cancelar\" [(ngModel)]=\"newPropiedad.tipoOperacion\">\r\n            <ion-select-option value=\"Renta\">Renta</ion-select-option>\r\n            <ion-select-option value=\"Venta\">Venta</ion-select-option>\r\n          </ion-select>\r\n          <!--<input type=\"text\" class=\"form-control input__text\" placeholder=\"Tipo de Operación\" [(ngModel)]=\"newPropiedad.tipoOperacion\"/>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Link\" [(ngModel)]=\"newPropiedad.link\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <textarea class=\"form-control input__text input__textarea\" placeholder=\"Notas\" rows=\"5\" [(ngModel)]=\"newPropiedad.notas\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-10 col-sm-10 col-md-10 col-lg-10 align-self-center\" style=\"padding-top: 15px; margin-bottom: 50px;\">\r\n        <div class=\"form-group\">\r\n          <input type=\"button\" class=\"form-control button__siguiente\" value=\"Agregar\" routerLink=\"/propiedades\" (click)=\"agregarPropiedad()\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"button\" class=\"form-control button__cancelar\" value=\"Cancelar\" routerLink=\"/propiedades\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<app-footer-blue></app-footer-blue>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_propiedad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-propiedad.page */ "./src/app/add-propiedad/add-propiedad.page.ts");




var routes = [
    {
        path: '',
        component: _add_propiedad_page__WEBPACK_IMPORTED_MODULE_3__["AddPropiedadPage"]
    }
];
var AddPropiedadPageRoutingModule = /** @class */ (function () {
    function AddPropiedadPageRoutingModule() {
    }
    AddPropiedadPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddPropiedadPageRoutingModule);
    return AddPropiedadPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_propiedad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-propiedad-routing.module */ "./src/app/add-propiedad/add-propiedad-routing.module.ts");
/* harmony import */ var _add_propiedad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-propiedad.page */ "./src/app/add-propiedad/add-propiedad.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var AddPropiedadPageModule = /** @class */ (function () {
    function AddPropiedadPageModule() {
    }
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
    return AddPropiedadPageModule;
}());



/***/ }),

/***/ "./src/app/add-propiedad/add-propiedad.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/add-propiedad/add-propiedad.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__title {\n  color: white;\n  font-size: 27px;\n  font-weight: 600;\n  margin: 0px;\n  text-transform: uppercase;\n}\n\n.header__subtitle {\n  color: white;\n  font-size: 15px;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 700;\n}\n\n.btn-network {\n  width: 100%;\n  height: auto;\n  border-radius: 20px;\n  font-size: 20px;\n  background-color: #ff7949;\n  border-color: #ff7949;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 300;\n}\n\n.botonera {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  align-content: space-around;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.row--header {\n  background-color: #ff7949;\n  height: 15vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.row--header__align {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.header--content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.header--content__textos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-left: 15px;\n}\n\n.input__text {\n  border-radius: 50px;\n  border-color: #67adc9;\n  font-size: 15px;\n  color: #094f72;\n}\n\n.input__textarea {\n  border-radius: 20px !important;\n}\n\n::-webkit-input-placeholder {\n  color: #67adc9;\n}\n\n::-moz-placeholder {\n  color: #67adc9;\n}\n\n::-ms-input-placeholder {\n  color: #67adc9;\n}\n\n::placeholder {\n  color: #67adc9;\n}\n\n.button__siguiente {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #094f72;\n  color: white;\n  font-weight: 700;\n}\n\n.button__cancelar {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #ff7949;\n  color: white;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9neW9zb2x1dGlvbnMvRG9jdW1lbnRzL0FwcHMvYnJva2Vycy1uZXR3b3JrL3NyYy9hcHAvYWRkLXByb3BpZWRhZC9hZGQtcHJvcGllZGFkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLXByb3BpZWRhZC9hZGQtcHJvcGllZGFkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNESjs7QURJRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKOztBREtFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0ZKOztBREtFO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0ZKOztBREtFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNGSjs7QURLRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0U7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGSjs7QURLSTtFQUNBLDhCQUFBO0FDRko7O0FES0U7RUFDRSxjQUFBO0FDRko7O0FEQ0U7RUFDRSxjQUFBO0FDRko7O0FEQ0U7RUFDRSxjQUFBO0FDRko7O0FEQ0U7RUFDRSxjQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvYWRkLXByb3BpZWRhZC9hZGQtcHJvcGllZGFkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmhlYWRlcl9fdGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlcl9fc3VidGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tbmV0d29yayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY3OTQ5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3RvbmVyYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAucm93LS1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzk0OTtcclxuICAgIGhlaWdodDogMTV2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5yb3ctLWhlYWRlcl9fYWxpZ24ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItLWNvbnRlbnRfX3RleHRvcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dF9fdGV4dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjdhZGM5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwOTRmNzI7XHJcbiAgfVxyXG5cclxuICAgIC5pbnB1dF9fdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNjdhZGM5O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbl9fc2lndWllbnRlIHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTRmNzI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbl9fY2FuY2VsYXIge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzk0OTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfSIsIi5oZWFkZXJfX3RpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGVhZGVyX19zdWJ0aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idG4tbmV0d29yayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzk0OTtcbiAgYm9yZGVyLWNvbG9yOiAjZmY3OTQ5O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5ib3RvbmVyYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yb3ctLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5NDk7XG4gIGhlaWdodDogMTV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yb3ctLWhlYWRlcl9fYWxpZ24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGVhZGVyLS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItLWNvbnRlbnRfX3RleHRvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uaW5wdXRfX3RleHQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXItY29sb3I6ICM2N2FkYzk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMwOTRmNzI7XG59XG5cbi5pbnB1dF9fdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzY3YWRjOTtcbn1cblxuLmJ1dHRvbl9fc2lndWllbnRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b25fX2NhbmNlbGFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");






var AddPropiedadPage = /** @class */ (function () {
    function AddPropiedadPage(alertCtrl, http, rs, contacts) {
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
    AddPropiedadPage.prototype.ngOnInit = function () {
    };
    AddPropiedadPage.prototype.formatCurrency_TaxableValue = function (event) {
        var uy = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(event.target.value);
        this.newPropiedad.precio = event.target.value;
        this.newPropiedad.precio_mostrar = uy;
    };
    AddPropiedadPage.prototype.buscarContacto = function () {
        var _this = this;
        this.telefono_contacto = "";
        this.contacts.pickContact().then(function (contacto) {
            console.log("Contacto", contacto);
            _this.nombre_contacto = contacto.name.givenName + " " + contacto.name.familyName;
            _this.newPropiedad.nombrePropietario = _this.nombre_contacto;
            for (var _i = 0, _a = contacto.phoneNumbers; _i < _a.length; _i++) {
                var tel = _a[_i];
                if (tel.type == "mobile") {
                    _this.telefono_contacto = tel.value;
                }
                else {
                    if (tel.type == "home") {
                        _this.telefono_contacto = tel.value;
                    }
                    else {
                        if (tel.type == "work") {
                            _this.telefono_contacto = tel.value;
                        }
                    }
                }
            }
            if (_this.telefono_contacto == "") {
                alert("Este contacto no tiene un teléfono movil asignado.");
            }
            else {
                _this.newPropiedad.celular = _this.telefono_contacto;
            }
        });
    };
    AddPropiedadPage.prototype.agregarPropiedad = function () {
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
            .then(function (data) {
            console.log(data.data);
        })
            .catch(function (error) {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    };
    AddPropiedadPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
        { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
        { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"] }
    ]; };
    AddPropiedadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-propiedad',
            template: __webpack_require__(/*! raw-loader!./add-propiedad.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-propiedad/add-propiedad.page.html"),
            styles: [__webpack_require__(/*! ./add-propiedad.page.scss */ "./src/app/add-propiedad/add-propiedad.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"]])
    ], AddPropiedadPage);
    return AddPropiedadPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var RootSettingsService = /** @class */ (function () {
    function RootSettingsService(platform) {
        this.platform = platform;
        this.ROOTURL = "http://broktool.com/ControlPanel/php/admin/";
    }
    RootSettingsService.prototype.obtnerViajesPorIDServicio = function () {
    };
    RootSettingsService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    RootSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], RootSettingsService);
    return RootSettingsService;
}());



/***/ })

}]);
//# sourceMappingURL=add-propiedad-add-propiedad-module-es5.js.map