(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firma-casa-firma-casa-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firma-casa/firma-casa.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firma-casa/firma-casa.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"row\" class=\"container--subHeader\">\r\n      <p class=\"sub-Header\">\r\n        <ion-icon size=\"large\" name=\"arrow-back\" style=\"float: left;\" routerLink=\"/propiedades\"></ion-icon>{{propiedad.tipo}}\r\n      </p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <ion-item>\r\n        <ion-thumbnail slot=\"start\">\r\n          <img *ngIf=\"propiedad.tipo=='Renta'\" src=\"/assets/images/renta1.png\">\r\n          <img *ngIf=\"propiedad.tipo=='Venta'\" src=\"/assets/images/renta2.png\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h2 style=\"text-transform: capitalize\">{{propiedad.nombre}}</h2>\r\n          <p>{{propiedad.direccion}} - {{propiedad.referencia}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n          <p class=\"container--letter-section\">\r\n            F</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--text-section\">\r\n          <p>\r\n            Firma del contrato</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\" style=\"margin-top: 5vw;\">\r\n      <div class=\"col-3\" routerLink=\"/detalles-casa\">\r\n        <div class=\"container--titulo-section--menu\" style=\"background-color: #67adc9\">\r\n          <p class=\"container--letter-section--menu\">\r\n            C</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-3\" routerLink=\"/promocion-casa\">\r\n        <div class=\"container--titulo-section--menu\" style=\"background-color: #b6d3e0\">\r\n          <p class=\"container--letter-section--menu\">\r\n            P</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-3\" routerLink=\"/interes-casa\">\r\n        <div class=\"container--titulo-section--menu\" style=\"background-color: #fcb686\">\r\n          <p class=\"container--letter-section--menu\">\r\n            I</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-3\" routerLink=\"/entrega-casa\">\r\n        <div class=\"container--titulo-section--menu\" style=\"background-color: #56c1be\">\r\n          <p class=\"container--letter-section--menu\">\r\n            E</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-grid style=\"margin-bottom: 15%; margin-top: 15px;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <!-- Sliding item with text options on both sides -->\r\n<!--          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_f.confirmar_fecha_firma\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Confirmar fecha de firma</h2>\r\n               &lt;!&ndash; <p>Reconfirma la cita para firma del</p>\r\n                <p>contrato con asesor/cliente y propietario</p>&ndash;&gt;\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Confirmar fecha de firma','Reconfirma la cita para firma del contrato con asesor/cliente y propietario.')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>-->\r\n\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_f.firma\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Firma</h2>\r\n               <!-- <p>Recordar a los involucrados y </p>\r\n                <p>enviar requisitos</p>\r\n                <p>No olvides llevar las impresiones</p>\r\n                <p>necesarias del contrato, fólder y</p>\r\n                <p>llaves del inmueble.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Firma','No olvides llevar las impresiones necesarias (ID oficiales, comprobantes de pago, documentación del inmueble) y llaves del inmueble..')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n        </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n      <div class=\"form-group\">\r\n        <input\r\n                type=\"button\"\r\n                class=\"form-control button__siguiente\"\r\n                value=\"No se concretó la operación\"\r\n                (click)=\"cancelarPropiedad()\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </ion-grid>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <img src=\"/assets/images/floatmenu_2.png\" />\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/portfolio\">\r\n        <img src=\"/assets/images/portfolio.png\" />\r\n      </ion-fab-button>\r\n<!--      <ion-fab-button color=\"light\" routerLink=\"/network\">\r\n        <img src=\"/assets/images/globe.png\" />\r\n      </ion-fab-button>-->\r\n      <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\r\n        <img src=\"/assets/images/study.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/clientes\">\r\n        <img src=\"/assets/images/user.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  <!--  <ion-fab-list side=\"start\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/entrega-casa\">\r\n        <img src=\"/assets/images/entrega.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/firma-casa\">\r\n        <img src=\"/assets/images/firma.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/interes-casa\">\r\n        <img src=\"/assets/images/interes.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/promocion-casa\">\r\n        <img src=\"/assets/images/promocion.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/detalles-casa\">\r\n        <img src=\"/assets/images/captacion.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>-->\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n<app-footer-blue></app-footer-blue>\r\n"

/***/ }),

/***/ "./src/app/firma-casa/firma-casa-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/firma-casa/firma-casa-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FirmaCasaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmaCasaPageRoutingModule", function() { return FirmaCasaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _firma_casa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firma-casa.page */ "./src/app/firma-casa/firma-casa.page.ts");




const routes = [
    {
        path: '',
        component: _firma_casa_page__WEBPACK_IMPORTED_MODULE_3__["FirmaCasaPage"]
    }
];
let FirmaCasaPageRoutingModule = class FirmaCasaPageRoutingModule {
};
FirmaCasaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FirmaCasaPageRoutingModule);



/***/ }),

/***/ "./src/app/firma-casa/firma-casa.module.ts":
/*!*************************************************!*\
  !*** ./src/app/firma-casa/firma-casa.module.ts ***!
  \*************************************************/
/*! exports provided: FirmaCasaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmaCasaPageModule", function() { return FirmaCasaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _firma_casa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firma-casa-routing.module */ "./src/app/firma-casa/firma-casa-routing.module.ts");
/* harmony import */ var _firma_casa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firma-casa.page */ "./src/app/firma-casa/firma-casa.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let FirmaCasaPageModule = class FirmaCasaPageModule {
};
FirmaCasaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _firma_casa_routing_module__WEBPACK_IMPORTED_MODULE_5__["FirmaCasaPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_firma_casa_page__WEBPACK_IMPORTED_MODULE_6__["FirmaCasaPage"]]
    })
], FirmaCasaPageModule);



/***/ }),

/***/ "./src/app/firma-casa/firma-casa.page.scss":
/*!*************************************************!*\
  !*** ./src/app/firma-casa/firma-casa.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-card {\n  display: -webkit-box;\n  display: flex;\n  margin-left: 10%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-right: 10%;\n  padding-top: 20px;\n}\n\n.container-card__img {\n  height: 40%;\n  width: 40%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container-card__texto {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-left: 10px;\n}\n\n.container-card__texto--formato {\n  text-transform: uppercase;\n  color: #094f72;\n  font-weight: 700;\n}\n\n.sub-Header {\n  text-align: center;\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 22px;\n  height: 20%;\n  color: white;\n  font-weight: 600;\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.container--subHeader {\n  background-color: #ff7949;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.container--titulo-section {\n  background: #80d8ae;\n  border-radius: 50%;\n  width: 75px;\n  border: 3px solid white;\n  height: 75px;\n  box-shadow: 4px 5px 10px #616161;\n  float: left;\n  position: absolute;\n  z-index: 1;\n}\n\n.container--letter-section {\n  margin-bottom: 0px;\n  font-size: 46px;\n  display: -webkit-box;\n  display: flex;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container--titulo-section--menu {\n  background: #67adc9;\n  border-radius: 50%;\n  width: 50px;\n  border: 2px solid white;\n  height: 50px;\n  box-shadow: 4px 5px 10px #616161;\n  z-index: 1;\n  text-align: center;\n}\n\n.container--letter-section--menu {\n  margin-bottom: 0px;\n  font-size: 32px;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container--text-section {\n  background: #80d8ae;\n  width: 90%;\n  float: right;\n  margin-left: 45px;\n  padding-left: 36px;\n  margin-top: 15px;\n  border-radius: 25px;\n}\n\n.container--text-section p {\n  margin-bottom: 0px;\n  margin-bottom: 0px;\n  font-size: 20px;\n  display: -webkit-box;\n  display: flex;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9neW9zb2x1dGlvbnMvRG9jdW1lbnRzL0FwcHMvYnJva2Vycy1uZXR3b3JrL3NyYy9hcHAvZmlybWEtY2FzYS9maXJtYS1jYXNhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlybWEtY2FzYS9maXJtYS1jYXNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Zpcm1hLWNhc2EvZmlybWEtY2FzYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWNhcmRfX2ltZyB7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWNhcmRfX3RleHRvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWNhcmRfX3RleHRvLS1mb3JtYXRvIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjMDk0ZjcyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zdWItSGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci0tc3ViSGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci0tdGl0dWxvLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICM4MGQ4YWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gIGhlaWdodDogNzVweDtcclxuICBib3gtc2hhZG93OiA0cHggNXB4IDEwcHggIzYxNjE2MTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmNvbnRhaW5lci0tbGV0dGVyLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LXNpemU6IDQ2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXItLXRpdHVsby1zZWN0aW9uLS1tZW51IHtcclxuICBiYWNrZ3JvdW5kOiAjNjdhZGM5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogNHB4IDVweCAxMHB4ICM2MTYxNjE7XHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXItLWxldHRlci1zZWN0aW9uLS1tZW51IHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci0tdGV4dC1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiAjODBkOGFlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzZweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItLXRleHQtc2VjdGlvbiBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4iLCIuY29udGFpbmVyLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5jb250YWluZXItY2FyZF9faW1nIHtcbiAgaGVpZ2h0OiA0MCU7XG4gIHdpZHRoOiA0MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItY2FyZF9fdGV4dG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb250YWluZXItY2FyZF9fdGV4dG8tLWZvcm1hdG8ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzA5NGY3MjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1Yi1IZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDIwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uY29udGFpbmVyLS1zdWJIZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG59XG5cbi5jb250YWluZXItLXRpdHVsby1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzgwZDhhZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGhlaWdodDogNzVweDtcbiAgYm94LXNoYWRvdzogNHB4IDVweCAxMHB4ICM2MTYxNjE7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXItLWxldHRlci1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDQ2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItLXRpdHVsby1zZWN0aW9uLS1tZW51IHtcbiAgYmFja2dyb3VuZDogIzY3YWRjOTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogNHB4IDVweCAxMHB4ICM2MTYxNjE7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci0tbGV0dGVyLXNlY3Rpb24tLW1lbnUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci0tdGV4dC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzgwZDhhZTtcbiAgd2lkdGg6IDkwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogNDVweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uY29udGFpbmVyLS10ZXh0LXNlY3Rpb24gcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/firma-casa/firma-casa.page.ts":
/*!***********************************************!*\
  !*** ./src/app/firma-casa/firma-casa.page.ts ***!
  \***********************************************/
/*! exports provided: FirmaCasaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmaCasaPage", function() { return FirmaCasaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");






let FirmaCasaPage = class FirmaCasaPage {
    constructor(localeService, menuCtrl, http, rs, navCtrl, loadingController, alertCtrl) {
        this.localeService = localeService;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.rs = rs;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.propiedad = {
            nombre: "",
            eval_f: { "confirmar_fecha_firma": false, "firma_contrato": false }
        };
        this.TIME_IN_MS = 5000;
    }
    cancelarPropiedad() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Cancelar Operación",
                subHeader: "Se cancelará la operación y no seguirás viendo la información de esta propiedad en tus propiedades, ¿Continuar?",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: data => {
                            console.log('OK clicked');
                        }
                    },
                    {
                        text: 'Si, continuar',
                        handler: data => {
                            this.http.setRequestTimeout(5.0);
                            this.http.post(this.rs.ROOTURL + "Propiedades/cancelarPropiedad.php", {
                                "id_propiedad": this.propiedad.id_propiedad
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                this.verInfo("Listo!", "La propiedad fue cancelada correctamente.");
                                console.log(data.data);
                                this.navCtrl.navigateRoot('/mis-propiedades');
                            })
                                .catch(error => {
                                console.log(error);
                                console.log(error.status);
                                console.log(error.error); // error message as string
                                console.log(error.headers);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    verInfo(titulo, msj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: titulo,
                subHeader: msj,
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel',
                        handler: data => {
                            console.log('OK clicked');
                        }
                    },
                ]
            });
            yield alert.present();
            /*
                let alert = this.alertCtrl.create({
                  inputs: [
                    {
                      name: 'meta',
                      placeholder: 'Monto de la meta',
                      value:metaActual
                    },
                  ],
                  buttons: [
                    {
                      text: 'Cancel',
                      role: 'cancel',
                      handler: data => {
                        console.log('Cancel clicked');
                      }
                    },
                    {
                      text: 'Login',
                      handler: data => {
                        console.log(data.meta)
                      }
                    }
                  ]
                });
                alert.present();*/
        });
    }
    ngOnInit() {
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Actualizando...',
            });
            yield this.loader.present();
        });
    }
    ionViewDidEnter() {
        this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"));
        console.log("propiedad", this.propiedad);
        try {
            this.propiedad.eval_f = JSON.parse(this.propiedad.eval_f);
        }
        catch (e) {
            console.log("JSONPARSERROR", e);
            console.log(this.propiedad.eval_f);
        }
    }
    updateEval() {
        console.log("this.propiedad.eval_f", this.propiedad.eval_f);
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Propiedades/updateEval.php", {
            "eval": "eval_f",
            "json": JSON.stringify(this.propiedad.eval_f),
            "id_propiedad": this.propiedad.id_propiedad
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            this.loader.dismiss();
            console.log(data.data);
            window.localStorage.setItem("propiedad_a_ver", JSON.stringify(this.propiedad));
        })
            .catch(error => {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
};
FirmaCasaPage.ctorParameters = () => [
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsLocaleService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_5__["RootSettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
FirmaCasaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-firma-casa',
        template: __webpack_require__(/*! raw-loader!./firma-casa.page.html */ "./node_modules/raw-loader/index.js!./src/app/firma-casa/firma-casa.page.html"),
        styles: [__webpack_require__(/*! ./firma-casa.page.scss */ "./src/app/firma-casa/firma-casa.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsLocaleService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_5__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], FirmaCasaPage);



/***/ })

}]);
//# sourceMappingURL=firma-casa-firma-casa-module-es2015.js.map