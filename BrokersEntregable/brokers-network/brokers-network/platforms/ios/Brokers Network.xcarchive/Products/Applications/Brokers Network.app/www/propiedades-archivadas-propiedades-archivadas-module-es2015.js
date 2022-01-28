(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["propiedades-archivadas-propiedades-archivadas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/propiedades-archivadas/propiedades-archivadas.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/propiedades-archivadas/propiedades-archivadas.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\n\n<ion-content>\n  <div class=\"container\" style=\"border: none\">\n    <div class=\"row\" class=\"container--subHeader\">\n      <p class=\"sub-Header\">\n        <ion-icon size=\"large\" name=\"arrow-back\" style=\"float: left;\" routerLink=\"/propiedades\"></ion-icon>Propiedades Archivadas\n      </p>\n    </div>\n    <!--<div class=\"row\" style=\"border: none\">\n\n      &lt;!&ndash;      <ion-icon size=\"large\" name=\"arrow-back\" style=\"float: left;margin-top: 1vw;color:white\" routerLink=\"/clientes\"></ion-icon>&ndash;&gt;\n\n      <ion-item style=\"background-color: transparent;border: none !important;\">\n        <ion-icon slot=\"start\" size=\"large\" name=\"arrow-back\" routerLink=\"/propiedades\"></ion-icon>\n        <ion-label style=\"border: none\">\n          <h2 style=\"text-transform: capitalize;border: none\"></h2>\n        </ion-label>\n      </ion-item>\n    </div>-->\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row d-flex justify-content-center\" style=\"margin-top: 2vw\">\n      <div class=\"botonera\" style=\"\">\n        <tabset [justified]=\"true\" style=\"margin-top: 2vw;margin-bottom: 2vw;text-align: center;    width: 100%;\">\n          <tab heading=\"Renta\" customClass=\"customClass\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <ion-list style=\"width: 100%;\">\n                  <ion-item-sliding *ngFor=\"let propiedad of filteredpropiedadesRenta\">\n                    <ion-item style=\"padding: 1vw\">\n                      <ion-avatar slot=\"start\">\n                        <img src=\"/assets/images/study.png\">\n                      </ion-avatar>\n                      <div class=\"row\" style=\"width: 100%\">\n                        <div class=\"col-7\" style=\"padding-right: 0px\">\n                          <ion-label>\n                            <h2 style=\"text-transform: capitalize\" *ngIf=\"propiedad.nombre.length<=20\">{{propiedad.nombre}}</h2>\n                            <h2 style=\"text-transform: capitalize\" *ngIf=\"propiedad.nombre.length>20\">{{propiedad.nombre.substring(0,20)}}...</h2>\n\n                            <h4 style=\"text-transform: capitalize\" *ngIf=\"propiedad.direccion!=''&&propiedad.direccion.length<=20\">{{propiedad.direccion}}</h4>\n                            <h4 style=\"text-transform: capitalize\" *ngIf=\"propiedad.direccion!=''&&propiedad.direccion.length>20\">{{propiedad.direccion.substring(0,20)}}...</h4>\n                            <p *ngIf=\"propiedad.direccion==''\">Sin dirección</p>\n                            <p>{{propiedad.precio | currency}}</p>\n                          </ion-label>\n                        </div>\n                        <div class=\"col-5\" style=\"text-align: right; padding: 0px\">\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"desarchivarPropiedad(propiedad.id_propiedad)\">\n                            <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n                          </ion-button>\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"eliminarPropiedad(propiedad.id_propiedad)\">\n                            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                          </ion-button>\n                        </div>\n                      </div>\n                    </ion-item>\n                  </ion-item-sliding>\n                  <ion-item-sliding *ngIf=\"filteredpropiedadesRenta.length==0\" >\n                    <ion-item style=\"padding: 5vw\">\n                      <ion-avatar slot=\"start\">\n                        <img src=\"/assets/images/study.png\">\n                      </ion-avatar>\n                      <!-- <ion-thumbnail slot=\"start\">\n                         <img src=\"/assets/images/clientes.png\">\n                       </ion-thumbnail>-->\n                      <div class=\"row\">\n                        <div class=\"col-12\">\n                          <ion-label>\n                            <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\n                          </ion-label>\n                        </div>\n                      </div>\n                    </ion-item>\n                  </ion-item-sliding>\n                </ion-list>\n              </div>\n            </div>\n          </tab>\n          <tab heading=\"Venta\" customClass=\"customClass\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <ion-list style=\"width: 100%;\">\n                  <ion-item-sliding *ngFor=\"let propiedad of filteredpropiedadesVenta\">\n                    <ion-item style=\"padding: 1vw\">\n                      <ion-avatar slot=\"start\">\n                        <img src=\"/assets/images/study.png\">\n                      </ion-avatar>\n                      <div class=\"row\" style=\"width: 100%\">\n                        <div class=\"col-7\" style=\"padding-right: 0px\">\n                          <ion-label>\n                            <h2 style=\"text-transform: capitalize\" *ngIf=\"propiedad.nombre.length<=20\">{{propiedad.nombre}}</h2>\n                            <h2 style=\"text-transform: capitalize\" *ngIf=\"propiedad.nombre.length>20\">{{propiedad.nombre.substring(0,20)}}...</h2>\n                            <h4 style=\"text-transform: capitalize\" *ngIf=\"propiedad.direccion!=''&&propiedad.direccion.length<=20\">{{propiedad.direccion}}</h4>\n                            <h4 style=\"text-transform: capitalize\" *ngIf=\"propiedad.direccion!=''&&propiedad.direccion.length>20\">{{propiedad.direccion.substring(0,20)}}...</h4>\n                            <p *ngIf=\"propiedad.direccion==''\">Sin dirección</p>\n                            <p>{{propiedad.precio | currency}}</p>\n                          </ion-label>\n                        </div>\n                        <div class=\"col-5\" style=\"text-align: right;padding: 0px\">\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"desarchivarPropiedad(propiedad.id_propiedad)\">\n                            <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n                          </ion-button>\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"eliminarPropiedad(propiedad.id_propiedad)\">\n                            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                          </ion-button>\n                        </div>\n                      </div>\n                    </ion-item>\n                  </ion-item-sliding>\n                  <ion-item-sliding *ngIf=\"filteredpropiedadesVenta.length==0\" >\n                    <ion-item style=\"padding: 5vw\">\n                      <ion-avatar slot=\"start\">\n                        <img src=\"/assets/images/study.png\">\n                      </ion-avatar>\n                      <!-- <ion-thumbnail slot=\"start\">\n                         <img src=\"/assets/images/clientes.png\">\n                       </ion-thumbnail>-->\n                      <div class=\"row\">\n                        <div class=\"col-12\">\n                          <ion-label>\n                            <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\n                          </ion-label>\n                        </div>\n                      </div>\n                    </ion-item>\n                  </ion-item-sliding>\n                </ion-list>\n              </div>\n            </div>\n          </tab>\n        </tabset>\n      </div>\n    </div>\n  </div>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <img src=\"/assets/images/floatmenu_2.png\" />\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"light\" routerLink=\"/portfolio\">\n        <img src=\"/assets/images/portfolio.png\" />\n      </ion-fab-button>\n<!--      <ion-fab-button color=\"light\" routerLink=\"/network\">\n        <img src=\"/assets/images/globe.png\" />\n      </ion-fab-button>-->\n      <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\n        <img src=\"/assets/images/study.png\" />\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" routerLink=\"/clientes\">\n        <img src=\"/assets/images/user.png\" />\n      </ion-fab-button>\n    </ion-fab-list>\n    <!--  <ion-fab-list side=\"start\">\n        <ion-fab-button color=\"light\" routerLink=\"/entrega-casa\">\n          <img src=\"/assets/images/entrega.png\" />\n        </ion-fab-button>\n        <ion-fab-button color=\"light\" routerLink=\"/firma-casa\">\n          <img src=\"/assets/images/firma.png\" />\n        </ion-fab-button>\n        <ion-fab-button color=\"light\" routerLink=\"/interes-casa\">\n          <img src=\"/assets/images/interes.png\" />\n        </ion-fab-button>\n        <ion-fab-button color=\"light\" routerLink=\"/promocion-casa\">\n          <img src=\"/assets/images/promocion.png\" />\n        </ion-fab-button>\n        <ion-fab-button color=\"light\" routerLink=\"/detalles-casa\">\n          <img src=\"/assets/images/captacion.png\" />\n        </ion-fab-button>\n      </ion-fab-list>-->\n  </ion-fab>\n\n</ion-content>\n\n\n<app-footer-blue></app-footer-blue>\n"

/***/ }),

/***/ "./src/app/propiedades-archivadas/propiedades-archivadas-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/propiedades-archivadas/propiedades-archivadas-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PropiedadesArchivadasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropiedadesArchivadasPageRoutingModule", function() { return PropiedadesArchivadasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _propiedades_archivadas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propiedades-archivadas.page */ "./src/app/propiedades-archivadas/propiedades-archivadas.page.ts");




const routes = [
    {
        path: '',
        component: _propiedades_archivadas_page__WEBPACK_IMPORTED_MODULE_3__["PropiedadesArchivadasPage"]
    }
];
let PropiedadesArchivadasPageRoutingModule = class PropiedadesArchivadasPageRoutingModule {
};
PropiedadesArchivadasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PropiedadesArchivadasPageRoutingModule);



/***/ }),

/***/ "./src/app/propiedades-archivadas/propiedades-archivadas.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/propiedades-archivadas/propiedades-archivadas.module.ts ***!
  \*************************************************************************/
/*! exports provided: PropiedadesArchivadasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropiedadesArchivadasPageModule", function() { return PropiedadesArchivadasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _propiedades_archivadas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./propiedades-archivadas-routing.module */ "./src/app/propiedades-archivadas/propiedades-archivadas-routing.module.ts");
/* harmony import */ var _propiedades_archivadas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./propiedades-archivadas.page */ "./src/app/propiedades-archivadas/propiedades-archivadas.page.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









let PropiedadesArchivadasPageModule = class PropiedadesArchivadasPageModule {
};
PropiedadesArchivadasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _propiedades_archivadas_routing_module__WEBPACK_IMPORTED_MODULE_5__["PropiedadesArchivadasPageRoutingModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"]
        ],
        declarations: [_propiedades_archivadas_page__WEBPACK_IMPORTED_MODULE_6__["PropiedadesArchivadasPage"]]
    })
], PropiedadesArchivadasPageModule);



/***/ }),

/***/ "./src/app/propiedades-archivadas/propiedades-archivadas.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/propiedades-archivadas/propiedades-archivadas.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-native .item-inner {\n  border: none;\n}\n\n.item-inner {\n  border: none !important;\n}\n\n.container--subHeader {\n  background-color: #ff7949;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.sub-Header {\n  text-transform: uppercase;\n  text-align: center;\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 22px;\n  height: 20%;\n  color: white;\n  font-weight: 600;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.botonera {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  align-content: space-around;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9neW9zb2x1dGlvbnMvRG9jdW1lbnRzL0FwcHMvYnJva2Vycy1uZXR3b3JrL3NyYy9hcHAvcHJvcGllZGFkZXMtYXJjaGl2YWRhcy9wcm9waWVkYWRlcy1hcmNoaXZhZGFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvcGllZGFkZXMtYXJjaGl2YWRhcy9wcm9waWVkYWRlcy1hcmNoaXZhZGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJvcGllZGFkZXMtYXJjaGl2YWRhcy9wcm9waWVkYWRlcy1hcmNoaXZhZGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLW5hdGl2ZSAuaXRlbS1pbm5lcntcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5pdGVtLWlubmVye1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVyLS1zdWJIZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5NDk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG59XHJcblxyXG4uc3ViLUhlYWRlciB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJvdG9uZXJhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbiIsIi5pdGVtLW5hdGl2ZSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLml0ZW0taW5uZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lci0tc3ViSGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzk0OTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuXG4uc3ViLUhlYWRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogMjAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ib3RvbmVyYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/propiedades-archivadas/propiedades-archivadas.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/propiedades-archivadas/propiedades-archivadas.page.ts ***!
  \***********************************************************************/
/*! exports provided: PropiedadesArchivadasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropiedadesArchivadasPage", function() { return PropiedadesArchivadasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");





let PropiedadesArchivadasPage = class PropiedadesArchivadasPage {
    constructor(alertCtrl, http, rs, loadingController, alertController, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.rs = rs;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.TIME_IN_MS = 5000;
        this.propiedades = [];
        this.filteredpropiedades = [];
        this.filteredpropiedadesRenta = [];
        this.filteredpropiedadesVenta = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getPropiedades();
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Cargando tu información...',
            });
            yield this.loader.present();
        });
    }
    getPropiedades() {
        this.presentLoading();
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Propiedades/getPropiedades.php", {
            "id_usuario": window.localStorage.getItem("id_usuario"),
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            console.log(data.data);
            this.loader.dismiss();
            this.propiedades = JSON.parse(data.data);
            //this.filteredpropiedades = this.propiedades.filter(t=>t.archivado ==1)
            /*
                      this.filteredpropiedadesRenta = this.propiedades.filter(t=>(t.archivado ==1&&t.tipo=='Renta'));
                      this.filteredpropiedadesVenta= this.propiedades.filter(t=>(t.archivado ==1&&t.tipo=='Venta'));*/
            this.filteredpropiedades = this.propiedades.filter(t => (t.archivado == 1));
            this.filteredpropiedadesRenta = [];
            this.filteredpropiedadesVenta = [];
            this.filteredpropiedades.forEach((value) => {
                if (value.tipo == "Renta") {
                    this.filteredpropiedadesRenta.push(value);
                }
                if (value.tipo == "Venta") {
                    this.filteredpropiedadesVenta.push(value);
                }
            });
        })
            .catch(error => {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            this.loader.dismiss();
        });
    }
    desarchivarPropiedad(id_propiedad) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alerta = yield this.alertCtrl.create({
                header: "¿Deseas desarchivar la propiedad?",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Si, desarchivar',
                        handler: data => {
                            console.log("ROOTURL", this.rs.ROOTURL);
                            this.http.setRequestTimeout(5.0);
                            this.http.post(this.rs.ROOTURL + "Propiedades/desarchivarPropiedad.php", {
                                "id_propiedad": id_propiedad
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                console.log(data.data);
                                alert("Propiedad desarchivada correctamente");
                                this.navCtrl.navigateRoot('/propiedades');
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
            yield alerta.present();
        });
    }
    eliminarPropiedad(id_propiedad) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alerta = yield this.alertCtrl.create({
                header: "¿Deseas eliminar la propiedad?",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Si, eliminar',
                        handler: data => {
                            console.log("ROOTURL", this.rs.ROOTURL);
                            this.http.setRequestTimeout(5.0);
                            this.http.post(this.rs.ROOTURL + "Propiedades/eliminarPropiedad.php", {
                                "id_propiedad": id_propiedad
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                console.log(data.data);
                                alert("Propiedad eliminada correctamente");
                                this.getPropiedades();
                                //this.navCtrl.navigateRoot('/propiedades');
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
            yield alerta.present();
        });
    }
};
PropiedadesArchivadasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PropiedadesArchivadasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-propiedades-archivadas',
        template: __webpack_require__(/*! raw-loader!./propiedades-archivadas.page.html */ "./node_modules/raw-loader/index.js!./src/app/propiedades-archivadas/propiedades-archivadas.page.html"),
        styles: [__webpack_require__(/*! ./propiedades-archivadas.page.scss */ "./src/app/propiedades-archivadas/propiedades-archivadas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PropiedadesArchivadasPage);



/***/ })

}]);
//# sourceMappingURL=propiedades-archivadas-propiedades-archivadas-module-es2015.js.map