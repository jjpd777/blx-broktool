(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interes-casa-interes-casa-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/interes-casa/interes-casa.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/interes-casa/interes-casa.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"row\" class=\"container--subHeader\">\r\n      <p class=\"sub-Header\">\r\n        <ion-icon size=\"large\" name=\"arrow-back\" style=\"float: left;\" routerLink=\"/propiedades\"></ion-icon>{{propiedad.tipo}}\r\n      </p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <ion-item>\r\n        <ion-thumbnail slot=\"start\">\r\n          <img *ngIf=\"propiedad.tipo=='Renta'\" src=\"/assets/images/renta1.png\">\r\n          <img *ngIf=\"propiedad.tipo=='Venta'\" src=\"/assets/images/renta2.png\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h2 style=\"text-transform: capitalize\">{{propiedad.nombre}}</h2>\r\n          <p>{{propiedad.direccion}} - {{propiedad.referencia}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n          <p class=\"container--letter-section\">\r\n            I</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--text-section\">\r\n          <p>\r\n            Interés de la propiedad</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\" style=\"margin-top: 5vw;\">\r\n      <div class=\"col-3\" routerLink=\"/detalles-casa\">\r\n        <div class=\"container--titulo-section--menu\" style=\"background-color: #67adc9\">\r\n          <p class=\"container--letter-section--menu\">\r\n            C</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-3\" routerLink=\"/promocion-casa\">\r\n        <div class=\"container--titulo-section--menu\" style=\"background-color: #b6d3e0\">\r\n          <p class=\"container--letter-section--menu\">\r\n            P</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-3\" routerLink=\"/firma-casa\">\r\n        <div class=\"container--titulo-section--menu\" style=\"background-color: #80d8ae\">\r\n          <p class=\"container--letter-section--menu\">\r\n            F</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-3\" routerLink=\"/entrega-casa\">\r\n        <div class=\"container--titulo-section--menu\" style=\"background-color: #56c1be\">\r\n          <p class=\"container--letter-section--menu\">\r\n            E</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-grid style=\"margin-bottom: 15%; margin-top: 15px;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_i.oferta\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Oferta</h2>\r\n                <!--<p>Recibo de anticipo, Cheque de resguardo</p>\r\n                <p>o anticipo</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"bulb\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Oferta','Logra oferta por escrito, junto con su apartado (anticipo o cheque de resguardo).')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n          <ion-item-sliding *ngIf=\"propiedad.tipo=='Renta'\">\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_i.documentacion_cliente\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Documentación del cliente</h2>\r\n                <!--<p>Solicitar datos del interesado y conocer</p>\r\n                <p>si cuenta con fiador/aval/póliza jurídica</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Documentación del cliente','Solicita documentos para investigación y conoce si cuenta con fiador/aval/póliza jurídica/mediación.')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_i.contrato\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Contrato</h2>\r\n                <!--<p>Enviarlo a los involucrados para</p>\r\n                <p>su revisión.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Contrato','Enviarlo a los involucrados para su revisión y establecer fecha de firma. Hacer inventario si la propiedad está amueblada.')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n          <ion-item-sliding *ngIf=\"propiedad.tipo=='Venta'\">\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_i.seguimiento_banco_notaria\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Seguimiento con Banco o Notaría</h2>\r\n              <!--  <p>En caso de no contar con aval,</p>\r\n                <p>sugerir contratación de Póliza Juridica.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Seguimiento con Banco o Notaría','Da seguimiento necesario con el Banco (en caso de Crédito Hipotecario), y con la Notaria: para el avalúo y la escrituración.')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n          <ion-item-sliding *ngIf=\"propiedad.tipo=='Venta'\">\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_i.avaluo\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Avalúo</h2>\r\n               <!-- <p>Si es amueblado</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Avalúo','Atención a valuador')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n\r\n          </ion-item-sliding>\r\n\r\n        </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n      <div class=\"form-group\">\r\n        <input\r\n                type=\"button\"\r\n                class=\"form-control button__siguiente\"\r\n                value=\"No se concretó la operación\"\r\n                (click)=\"cancelarPropiedad()\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </ion-grid>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <img src=\"/assets/images/floatmenu_2.png\" />\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/portfolio\">\r\n        <img src=\"/assets/images/portfolio.png\" />\r\n      </ion-fab-button>\r\n<!--      <ion-fab-button color=\"light\" routerLink=\"/network\">\r\n        <img src=\"/assets/images/globe.png\" />\r\n      </ion-fab-button>-->\r\n      <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\r\n        <img src=\"/assets/images/study.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/clientes\">\r\n        <img src=\"/assets/images/user.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n <!--   <ion-fab-list side=\"start\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/entrega-casa\">\r\n        <img src=\"/assets/images/entrega.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/firma-casa\">\r\n        <img src=\"/assets/images/firma.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/interes-casa\">\r\n        <img src=\"/assets/images/interes.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/promocion-casa\">\r\n        <img src=\"/assets/images/promocion.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/detalles-casa\">\r\n        <img src=\"/assets/images/captacion.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>-->\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n<app-footer-blue></app-footer-blue>\r\n"

/***/ }),

/***/ "./src/app/interes-casa/interes-casa-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/interes-casa/interes-casa-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: InteresCasaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteresCasaPageRoutingModule", function() { return InteresCasaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _interes_casa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interes-casa.page */ "./src/app/interes-casa/interes-casa.page.ts");




const routes = [
    {
        path: '',
        component: _interes_casa_page__WEBPACK_IMPORTED_MODULE_3__["InteresCasaPage"]
    }
];
let InteresCasaPageRoutingModule = class InteresCasaPageRoutingModule {
};
InteresCasaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InteresCasaPageRoutingModule);



/***/ }),

/***/ "./src/app/interes-casa/interes-casa.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/interes-casa/interes-casa.module.ts ***!
  \*****************************************************/
/*! exports provided: InteresCasaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteresCasaPageModule", function() { return InteresCasaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _interes_casa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interes-casa-routing.module */ "./src/app/interes-casa/interes-casa-routing.module.ts");
/* harmony import */ var _interes_casa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interes-casa.page */ "./src/app/interes-casa/interes-casa.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let InteresCasaPageModule = class InteresCasaPageModule {
};
InteresCasaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _interes_casa_routing_module__WEBPACK_IMPORTED_MODULE_5__["InteresCasaPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_interes_casa_page__WEBPACK_IMPORTED_MODULE_6__["InteresCasaPage"]]
    })
], InteresCasaPageModule);



/***/ }),

/***/ "./src/app/interes-casa/interes-casa.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/interes-casa/interes-casa.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-card {\n  display: -webkit-box;\n  display: flex;\n  margin-left: 10%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-right: 10%;\n  padding-top: 20px;\n}\n\n.container-card__img {\n  height: 40%;\n  width: 40%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container-card__texto {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-left: 10px;\n}\n\n.container-card__texto--formato {\n  text-transform: uppercase;\n  color: #094f72;\n  font-weight: 700;\n}\n\n.sub-Header {\n  text-align: center;\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 22px;\n  height: 20%;\n  color: white;\n  font-weight: 600;\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.container--subHeader {\n  background-color: #ff7949;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.container--titulo-section {\n  background: #fcb686;\n  border-radius: 50%;\n  width: 75px;\n  border: 3px solid white;\n  height: 75px;\n  box-shadow: 4px 5px 10px #616161;\n  float: left;\n  position: absolute;\n  z-index: 1;\n}\n\n.container--letter-section {\n  margin-bottom: 0px;\n  font-size: 46px;\n  display: -webkit-box;\n  display: flex;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container--titulo-section--menu {\n  background: #67adc9;\n  border-radius: 50%;\n  width: 50px;\n  border: 2px solid white;\n  height: 50px;\n  box-shadow: 4px 5px 10px #616161;\n  z-index: 1;\n  text-align: center;\n}\n\n.container--letter-section--menu {\n  margin-bottom: 0px;\n  font-size: 32px;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container--text-section {\n  background: #fcb686;\n  width: 90%;\n  float: right;\n  margin-left: 45px;\n  padding-left: 36px;\n  margin-top: 15px;\n  border-radius: 25px;\n}\n\n.container--text-section p {\n  margin-bottom: 0px;\n  margin-bottom: 0px;\n  font-size: 20px;\n  display: -webkit-box;\n  display: flex;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9neW9zb2x1dGlvbnMvRG9jdW1lbnRzL0FwcHMvYnJva2Vycy1uZXR3b3JrL3NyYy9hcHAvaW50ZXJlcy1jYXNhL2ludGVyZXMtY2FzYS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ludGVyZXMtY2FzYS9pbnRlcmVzLWNhc2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvaW50ZXJlcy1jYXNhL2ludGVyZXMtY2FzYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWNhcmRfX2ltZyB7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWNhcmRfX3RleHRvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWNhcmRfX3RleHRvLS1mb3JtYXRvIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjMDk0ZjcyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zdWItSGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci0tc3ViSGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci0tdGl0dWxvLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNmY2I2ODY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gIGhlaWdodDogNzVweDtcclxuICBib3gtc2hhZG93OiA0cHggNXB4IDEwcHggIzYxNjE2MTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXItLWxldHRlci1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOiA0NnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLS10aXR1bG8tc2VjdGlvbi0tbWVudSB7XHJcbiAgYmFja2dyb3VuZDogIzY3YWRjOTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDRweCA1cHggMTBweCAjNjE2MTYxO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLS1sZXR0ZXItc2VjdGlvbi0tbWVudSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXItLXRleHQtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZjYjY4NjtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogNDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLS10ZXh0LXNlY3Rpb24gcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuIiwiLmNvbnRhaW5lci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uY29udGFpbmVyLWNhcmRfX2ltZyB7XG4gIGhlaWdodDogNDAlO1xuICB3aWR0aDogNDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWNhcmRfX3RleHRvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29udGFpbmVyLWNhcmRfX3RleHRvLS1mb3JtYXRvIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwOTRmNzI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWItSGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiAyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmNvbnRhaW5lci0tc3ViSGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzk0OTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuXG4uY29udGFpbmVyLS10aXR1bG8tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmY2I2ODY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDc1cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDc1cHg7XG4gIGJveC1zaGFkb3c6IDRweCA1cHggMTBweCAjNjE2MTYxO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGFpbmVyLS1sZXR0ZXItc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiA0NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLS10aXR1bG8tc2VjdGlvbi0tbWVudSB7XG4gIGJhY2tncm91bmQ6ICM2N2FkYzk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDRweCA1cHggMTBweCAjNjE2MTYxO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItLWxldHRlci1zZWN0aW9uLS1tZW51IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItLXRleHQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmY2I2ODY7XG4gIHdpZHRoOiA5MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmNvbnRhaW5lci0tdGV4dC1zZWN0aW9uIHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/interes-casa/interes-casa.page.ts":
/*!***************************************************!*\
  !*** ./src/app/interes-casa/interes-casa.page.ts ***!
  \***************************************************/
/*! exports provided: InteresCasaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteresCasaPage", function() { return InteresCasaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");






let InteresCasaPage = class InteresCasaPage {
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
            eval_i: { "documentacion_cliente": false, "carta_oferta_apartado": false, "poliza_juridica": false, "contrato_arrendamiento": false, "realizar_inventario": false }
        };
        this.TIME_IN_MS = 5000;
    }
    ngOnInit() {
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
    ionViewDidEnter() {
        this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"));
        console.log("propiedad", this.propiedad);
        try {
            this.propiedad.eval_i = JSON.parse(this.propiedad.eval_i);
        }
        catch (e) {
            console.log("JSONPARSERROR", e);
            console.log(this.propiedad.eval_i);
        }
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Actualizando...',
            });
            yield this.loader.present();
        });
    }
    updateEval() {
        console.log("this.propiedad.eval_i", this.propiedad.eval_i);
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Propiedades/updateEval.php", {
            "eval": "eval_i",
            "json": JSON.stringify(this.propiedad.eval_i),
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
InteresCasaPage.ctorParameters = () => [
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsLocaleService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_5__["RootSettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
InteresCasaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-interes-casa',
        template: __webpack_require__(/*! raw-loader!./interes-casa.page.html */ "./node_modules/raw-loader/index.js!./src/app/interes-casa/interes-casa.page.html"),
        styles: [__webpack_require__(/*! ./interes-casa.page.scss */ "./src/app/interes-casa/interes-casa.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsLocaleService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_5__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], InteresCasaPage);



/***/ })

}]);
//# sourceMappingURL=interes-casa-interes-casa-module-es2015.js.map