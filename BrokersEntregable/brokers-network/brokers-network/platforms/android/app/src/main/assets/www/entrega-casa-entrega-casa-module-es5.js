(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entrega-casa-entrega-casa-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/entrega-casa/entrega-casa.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/entrega-casa/entrega-casa.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"row\" class=\"container--subHeader\">\r\n      <p class=\"sub-Header\">\r\n        <ion-icon size=\"large\" name=\"arrow-back\" style=\"float: left;\" routerLink=\"/propiedades\"></ion-icon>{{propiedad.tipo}}\r\n      </p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <ion-item>\r\n        <ion-thumbnail slot=\"start\">\r\n          <img *ngIf=\"propiedad.tipo=='Renta'\" src=\"/assets/images/renta1.png\">\r\n          <img *ngIf=\"propiedad.tipo=='Venta'\" src=\"/assets/images/renta2.png\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h2 style=\"text-transform: capitalize\">{{propiedad.nombre}}</h2>\r\n          <p>{{propiedad.direccion}} - {{propiedad.referencia}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n          <p class=\"container--letter-section\">\r\n            E</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--text-section\">\r\n          <p>\r\n            Entrega de la propiedad</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\" style=\"margin-top: 5vw;\">\r\n      <div class=\"col-3\" routerLink=\"/detalles-casa\">\r\n        <div class=\"container--titulo-section--menu\" style=\"background-color: #67adc9\">\r\n          <p class=\"container--letter-section--menu\">\r\n           C</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-3\" routerLink=\"/promocion-casa\">\r\n        <div class=\"container--titulo-section--menu\" style=\"background-color: #b6d3e0\">\r\n          <p class=\"container--letter-section--menu\">\r\n            P</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-3\" routerLink=\"/interes-casa\">\r\n        <div class=\"container--titulo-section--menu\" style=\"background-color: #fcb686\">\r\n          <p class=\"container--letter-section--menu\">\r\n            I</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-3\" routerLink=\"/firma-casa\">\r\n        <div class=\"container--titulo-section--menu\" style=\"background-color: #80d8ae\">\r\n          <p class=\"container--letter-section--menu\">\r\n            F</p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <ion-grid style=\"margin-bottom: 15%; margin-top: 15px;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <!-- Sliding item with text options on both sides -->\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_e.entrega\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Entrega</h2>\r\n            <!--    <p>Asistir a la entrega de la</p>\r\n                <p>propiedad y dar seguimiento necesario</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Entrega','Asistir a la entrega de la propiedad y dar seguimiento necesario.')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n          <ion-item-sliding>\r\n\r\n            <ion-item (click)=\"crearComision()\">\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_e.pago_comision\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Pago de comisión</h2>\r\n               <!-- <p>Recibo de recepción de comisión</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Pago de comisión','Recibo de recepción de comisión.')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n        </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n      <div class=\"form-group\">\r\n        <input\r\n                type=\"button\"\r\n                class=\"form-control button__siguiente\"\r\n                value=\"No se concretó la operación\"\r\n                (click)=\"cancelarPropiedad()\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </ion-grid>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <img src=\"/assets/images/floatmenu_2.png\" />\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/portfolio\">\r\n        <img src=\"/assets/images/portfolio.png\" />\r\n      </ion-fab-button>\r\n<!--      <ion-fab-button color=\"light\" routerLink=\"/network\">\r\n        <img src=\"/assets/images/globe.png\" />\r\n      </ion-fab-button>-->\r\n      <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\r\n        <img src=\"/assets/images/study.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/clientes\">\r\n        <img src=\"/assets/images/user.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n   <!-- <ion-fab-list side=\"start\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/entrega-casa\">\r\n        <img src=\"/assets/images/entrega.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/firma-casa\">\r\n        <img src=\"/assets/images/firma.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/interes-casa\">\r\n        <img src=\"/assets/images/interes.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/promocion-casa\">\r\n        <img src=\"/assets/images/promocion.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/detalles-casa\">\r\n        <img src=\"/assets/images/captacion.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>-->\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n<app-footer-blue></app-footer-blue>\r\n"

/***/ }),

/***/ "./src/app/entrega-casa/entrega-casa-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/entrega-casa/entrega-casa-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EntregaCasaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregaCasaPageRoutingModule", function() { return EntregaCasaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entrega_casa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entrega-casa.page */ "./src/app/entrega-casa/entrega-casa.page.ts");




var routes = [
    {
        path: '',
        component: _entrega_casa_page__WEBPACK_IMPORTED_MODULE_3__["EntregaCasaPage"]
    }
];
var EntregaCasaPageRoutingModule = /** @class */ (function () {
    function EntregaCasaPageRoutingModule() {
    }
    EntregaCasaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EntregaCasaPageRoutingModule);
    return EntregaCasaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/entrega-casa/entrega-casa.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/entrega-casa/entrega-casa.module.ts ***!
  \*****************************************************/
/*! exports provided: EntregaCasaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregaCasaPageModule", function() { return EntregaCasaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entrega_casa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entrega-casa-routing.module */ "./src/app/entrega-casa/entrega-casa-routing.module.ts");
/* harmony import */ var _entrega_casa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entrega-casa.page */ "./src/app/entrega-casa/entrega-casa.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var EntregaCasaPageModule = /** @class */ (function () {
    function EntregaCasaPageModule() {
    }
    EntregaCasaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _entrega_casa_routing_module__WEBPACK_IMPORTED_MODULE_5__["EntregaCasaPageRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_entrega_casa_page__WEBPACK_IMPORTED_MODULE_6__["EntregaCasaPage"]]
        })
    ], EntregaCasaPageModule);
    return EntregaCasaPageModule;
}());



/***/ }),

/***/ "./src/app/entrega-casa/entrega-casa.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/entrega-casa/entrega-casa.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-card {\n  display: -webkit-box;\n  display: flex;\n  margin-left: 10%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-right: 10%;\n  padding-top: 20px;\n}\n\n.container-card__img {\n  height: 40%;\n  width: 40%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container-card__texto {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-left: 10px;\n}\n\n.container-card__texto--formato {\n  text-transform: uppercase;\n  color: #094f72;\n  font-weight: 700;\n}\n\n.sub-Header {\n  text-align: center;\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 22px;\n  height: 20%;\n  color: white;\n  font-weight: 600;\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.container--subHeader {\n  background-color: #ff7949;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.container--titulo-section {\n  background: #56c1be;\n  border-radius: 50%;\n  width: 75px;\n  border: 3px solid white;\n  height: 75px;\n  box-shadow: 4px 5px 10px #616161;\n  float: left;\n  position: absolute;\n  z-index: 1;\n}\n\n.container--letter-section {\n  margin-bottom: 0px;\n  font-size: 46px;\n  display: -webkit-box;\n  display: flex;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container--titulo-section--menu {\n  background: #67adc9;\n  border-radius: 50%;\n  width: 50px;\n  border: 2px solid white;\n  height: 50px;\n  box-shadow: 4px 5px 10px #616161;\n  z-index: 1;\n  text-align: center;\n}\n\n.container--letter-section--menu {\n  margin-bottom: 0px;\n  font-size: 32px;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container--text-section {\n  background: #56c1be;\n  width: 90%;\n  float: right;\n  margin-left: 45px;\n  padding-left: 36px;\n  margin-top: 15px;\n  border-radius: 25px;\n}\n\n.container--text-section p {\n  margin-bottom: 0px;\n  margin-bottom: 0px;\n  font-size: 20px;\n  display: -webkit-box;\n  display: flex;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cmVnYS1jYXNhL0M6XFxCaXRCdWNrZXRcXEFwcHNcXGJyb2tlcnMtbmV0d29yay1pb3NcXGJyb2tlcnMtbmV0d29yay9zcmNcXGFwcFxcZW50cmVnYS1jYXNhXFxlbnRyZWdhLWNhc2EucGFnZS5zY3NzIiwic3JjL2FwcC9lbnRyZWdhLWNhc2EvZW50cmVnYS1jYXNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2VudHJlZ2EtY2FzYS9lbnRyZWdhLWNhc2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jYXJkX19pbWcge1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jYXJkX190ZXh0byB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jYXJkX190ZXh0by0tZm9ybWF0byB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzA5NGY3MjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc3ViLUhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItLXN1YkhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzk0OTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItLXRpdHVsby1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiAjNTZjMWJlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNzVweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgYm94LXNoYWRvdzogNHB4IDVweCAxMHB4ICM2MTYxNjE7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jb250YWluZXItLWxldHRlci1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOiA0NnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLS10aXR1bG8tc2VjdGlvbi0tbWVudSB7XHJcbiAgYmFja2dyb3VuZDogIzY3YWRjOTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDRweCA1cHggMTBweCAjNjE2MTYxO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLS1sZXR0ZXItc2VjdGlvbi0tbWVudSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXItLXRleHQtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogIzU2YzFiZTtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogNDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLS10ZXh0LXNlY3Rpb24gcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuIiwiLmNvbnRhaW5lci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uY29udGFpbmVyLWNhcmRfX2ltZyB7XG4gIGhlaWdodDogNDAlO1xuICB3aWR0aDogNDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWNhcmRfX3RleHRvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29udGFpbmVyLWNhcmRfX3RleHRvLS1mb3JtYXRvIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwOTRmNzI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWItSGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiAyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmNvbnRhaW5lci0tc3ViSGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzk0OTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuXG4uY29udGFpbmVyLS10aXR1bG8tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICM1NmMxYmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDc1cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDc1cHg7XG4gIGJveC1zaGFkb3c6IDRweCA1cHggMTBweCAjNjE2MTYxO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGFpbmVyLS1sZXR0ZXItc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiA0NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLS10aXR1bG8tc2VjdGlvbi0tbWVudSB7XG4gIGJhY2tncm91bmQ6ICM2N2FkYzk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDRweCA1cHggMTBweCAjNjE2MTYxO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItLWxldHRlci1zZWN0aW9uLS1tZW51IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItLXRleHQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICM1NmMxYmU7XG4gIHdpZHRoOiA5MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmNvbnRhaW5lci0tdGV4dC1zZWN0aW9uIHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/entrega-casa/entrega-casa.page.ts":
/*!***************************************************!*\
  !*** ./src/app/entrega-casa/entrega-casa.page.ts ***!
  \***************************************************/
/*! exports provided: EntregaCasaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregaCasaPage", function() { return EntregaCasaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");






var EntregaCasaPage = /** @class */ (function () {
    function EntregaCasaPage(alertCtrl, localeService, menuCtrl, http, rs, navCtrl, loadingController) {
        this.alertCtrl = alertCtrl;
        this.localeService = localeService;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.rs = rs;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.propiedad = {
            nombre: "",
            eval_e: { "entrega": false, "pago_comision": false }
        };
        this.TIME_IN_MS = 5000;
    }
    EntregaCasaPage.prototype.ngOnInit = function () {
    };
    EntregaCasaPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Actualizando...',
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [4 /*yield*/, this.loader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EntregaCasaPage.prototype.ionViewDidEnter = function () {
        this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"));
        console.log("propiedad", this.propiedad);
        try {
            this.propiedad.eval_e = JSON.parse(this.propiedad.eval_e);
        }
        catch (e) {
            console.log("JSONPARSERROR", e);
            console.log(this.propiedad.eval_e);
        }
    };
    EntregaCasaPage.prototype.updateEval = function () {
        var _this = this;
        console.log("this.propiedad.eval_e", this.propiedad.eval_e);
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Propiedades/updateEval.php", {
            "eval": "eval_e",
            "json": JSON.stringify(this.propiedad.eval_e),
            "id_propiedad": this.propiedad.id_propiedad
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(function (data) {
            console.log(data.data);
            _this.loader.dismiss();
            window.localStorage.setItem("propiedad_a_ver", JSON.stringify(_this.propiedad));
        })
            .catch(function (error) {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    };
    EntregaCasaPage.prototype.cancelarPropiedad = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Cancelar Operación",
                            subHeader: "Se cancelará la operación y no seguirás viendo la información de esta propiedad en tus propiedades, ¿Continuar?",
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function (data) {
                                        console.log('OK clicked');
                                    }
                                },
                                {
                                    text: 'Si, continuar',
                                    handler: function (data) {
                                        _this.http.setRequestTimeout(5.0);
                                        _this.http.post(_this.rs.ROOTURL + "Propiedades/cancelarPropiedad.php", {
                                            "id_propiedad": _this.propiedad.id_propiedad
                                        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                            .then(function (data) {
                                            _this.verInfo("Listo!", "La propiedad fue cancelada correctamente.");
                                            console.log(data.data);
                                            _this.navCtrl.navigateRoot('/mis-propiedades');
                                        })
                                            .catch(function (error) {
                                            console.log(error);
                                            console.log(error.status);
                                            console.log(error.error); // error message as string
                                            console.log(error.headers);
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EntregaCasaPage.prototype.verInfo = function (titulo, msj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: titulo,
                            subHeader: msj,
                            buttons: [
                                {
                                    text: 'OK',
                                    role: 'cancel',
                                    handler: function (data) {
                                        console.log('OK clicked');
                                    }
                                },
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EntregaCasaPage.prototype.crearComision = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Cuanta comisión recibí",
                            inputs: [
                                {
                                    name: 'monto',
                                    placeholder: 'Monto de la comision',
                                    value: 0
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Agregar',
                                    handler: function (data) {
                                        console.log("ROOTURL", _this.rs.ROOTURL);
                                        _this.http.setRequestTimeout(5.0);
                                        _this.http.post(_this.rs.ROOTURL + "Comisiones/subirComision.php", {
                                            "monto": data.monto,
                                            "id_usuario": window.localStorage.getItem("id_usuario"),
                                            "id_propiedad": _this.propiedad.id_propiedad,
                                            "renta_o_venta": _this.propiedad.tipo
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
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EntregaCasaPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsLocaleService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
        { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    EntregaCasaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entrega-casa',
            template: __webpack_require__(/*! raw-loader!./entrega-casa.page.html */ "./node_modules/raw-loader/index.js!./src/app/entrega-casa/entrega-casa.page.html"),
            styles: [__webpack_require__(/*! ./entrega-casa.page.scss */ "./src/app/entrega-casa/entrega-casa.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsLocaleService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], EntregaCasaPage);
    return EntregaCasaPage;
}());



/***/ })

}]);
//# sourceMappingURL=entrega-casa-entrega-casa-module-es5.js.map