(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["propiedades-propiedades-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/propiedades/propiedades.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/propiedades/propiedades.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n\r\n<ion-content>\r\n  <div class=\"row row--header\">\r\n\r\n    <div class=\"header--content\">\r\n      <img style=\"width: 10%;\"\r\n          class=\"imge\"\r\n          src=\"/assets/images/propiedades.png\"\r\n        />\r\n        <div class=\"header--content__textos\">\r\n          <p class=\"header__title\">Mis propiedades</p>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container\">\r\n    <div class=\"row\" style=\"padding: 1vw;margin-top: 3vw;\">\r\n        <div class=\"col-sm-5 col-md-5 col-5\"style=\"text-align: left; margin-top: 1vw\">\r\n          <p class=\"header__subtitle\"><span>{{concretados}}</span> Concretados</p>\r\n        </div>\r\n        <div class=\"col-sm-5 col-md-5 col-5\" style=\"text-align: left; margin-top: 1vw\">\r\n          <p class=\"header__subtitle\"><span>{{filteredpropiedadesRenta.length + filteredpropiedadesVenta.length}}</span> Por concretar</p>\r\n        </div>\r\n        <div class=\"col-sm-2 col-md-3 col-2\" style=\"text-align: left\">\r\n            <ion-icon slot=\"icon-only\" name=\"add\" style=\"color: #ff7949;font-size: 28px\" routerLink=\"/add-propiedad\"></ion-icon>\r\n        </div>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"botonera\" style=\"\">\r\n      <!--  <div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 2vw;margin-bottom: 2vw\">\r\n          <button type=\"button\" class=\"btn btn-network\" routerLink=\"/add-propiedad\">Agregar propiedades</button>\r\n        </div>-->\r\n\r\n        <tabset active=\"0\" [justified]=\"true\" style=\"margin-top: 2vw;margin-bottom: 2vw;text-align: center;    width: 100%;\" (change)=\"cambioTab()\">\r\n       <!--   <tab heading=\"Renta\" customClass=\"customClass\">\r\n            <div class=\"container\">\r\n              <div class=\"row\" style=\"min-width: 90vw\">\r\n                <a *ngFor=\"let propiedad of filteredpropiedadesRenta\" (click)=\"verPropiedad(propiedad,$event)\" style=\"width: 96vw;margin-left: 2vw;\">\r\n                  <ion-item *ngIf=\"propiedad.tipo=='Renta'\">\r\n                    <ion-thumbnail slot=\"start\">\r\n                      <img src=\"/assets/images/study.png\">\r\n                    </ion-thumbnail>\r\n                    <ion-label>\r\n                      <h2 style=\"text-transform: capitalize\">{{propiedad.nombre}}</h2>\r\n                      <p>{{propiedad.direccion}}</p>\r\n                      <p>{{propiedad.precio | currency}}</p>\r\n                    </ion-label>\r\n                    <ion-button slot=\"end\" routerLink=\"/editar-propiedad\" style=\"width: 12vw;height: 10vw;\" (click)=\"asignarPropiedadAEditar(propiedad,$event)\" >\r\n                      <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button slot=\"end\" style=\"width: 12vw;height: 10vw;\" (click)=\"archivarPropiedad(propiedad,$event)\">\r\n                      <ion-icon slot=\"icon-only\" name=\"archive\"></ion-icon>\r\n                    </ion-button>\r\n                  </ion-item>\r\n                </a>\r\n                <ion-item *ngIf=\"filteredpropiedadesRenta.length==0\"  style=\"padding: 5vw\">\r\n                  <ion-avatar slot=\"start\">\r\n                    <img src=\"/assets/images/study.png\">\r\n                  </ion-avatar>\r\n                  &lt;!&ndash; <ion-thumbnail slot=\"start\">\r\n                     <img src=\"/assets/images/clientes.png\">\r\n                   </ion-thumbnail>&ndash;&gt;\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                      <ion-label>\r\n                        <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\r\n                      </ion-label>\r\n                    </div>\r\n                  </div>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n          </tab>-->\r\n          <!--<tab heading=\"Renta\" customClass=\"customClass\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <ion-list>\r\n                  <ion-item-sliding *ngFor=\"let propiedad of filteredpropiedadesRenta\">\r\n                    <ion-item style=\"padding: 1vw\" (click)=\"verPropiedad(propiedad,$event)\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/study.png\">\r\n                      </ion-avatar>\r\n                      <div class=\"row\" style=\"width: 90%\">\r\n                          <div class=\"col-8\">\r\n                            <ion-label>\r\n                              <h2 style=\"text-transform: capitalize\">{{propiedad.nombre}}</h2>\r\n                              <p *ngIf=\"propiedad.direccion!=''\">{{propiedad.direccion}}</p>\r\n                              <p *ngIf=\"propiedad.direccion==''\">Sin dirección registrada</p>\r\n                              <p>{{propiedad.precio | currency}}</p>\r\n                            </ion-label>\r\n                          </div>\r\n                          <div class=\"col-4\" style=\"text-align: right\">\r\n                            <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"asignarPropiedadAEditar(propiedad,$event)\" >\r\n                              <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\r\n                            </ion-button>\r\n                            <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"archivarPropiedad(propiedad,$event)\">\r\n                              <ion-icon slot=\"icon-only\" name=\"archive\"></ion-icon>\r\n                            </ion-button>\r\n                          </div>\r\n                        </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                  <ion-item-sliding *ngIf=\"filteredpropiedadesRenta.length==0\" >\r\n                    <ion-item style=\"padding: 5vw\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/study.png\">\r\n                      </ion-avatar>\r\n                      &lt;!&ndash; <ion-thumbnail slot=\"start\">\r\n                         <img src=\"/assets/images/clientes.png\">\r\n                       </ion-thumbnail>&ndash;&gt;\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          <ion-label>\r\n                            <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\r\n                          </ion-label>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                </ion-list>\r\n              </div>\r\n            </div>\r\n          </tab>-->\r\n          <tab heading=\"Renta\" customClass=\"customClass\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <ion-list style=\"width: 100%;\">\r\n                  <ion-item-sliding *ngFor=\"let propiedad of filteredpropiedadesRenta\">\r\n                    <ion-item style=\"padding: 1vw\" (click)=\"verPropiedad(propiedad,$event)\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/study.png\">\r\n                      </ion-avatar>\r\n                      <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-7\" style=\"padding-right: 0px\">\r\n                          <ion-label>\r\n                            <h2 style=\"text-transform: capitalize\" *ngIf=\"propiedad.nombre.length<=20\">{{propiedad.nombre}}</h2>\r\n                            <h2 style=\"text-transform: capitalize\" *ngIf=\"propiedad.nombre.length>20\">{{propiedad.nombre.substring(0,20)}}...</h2>\r\n\r\n                            <h4 style=\"text-transform: capitalize\" *ngIf=\"propiedad.direccion!=''&&propiedad.direccion.length<=20\">{{propiedad.direccion}}</h4>\r\n                            <h4 style=\"text-transform: capitalize\" *ngIf=\"propiedad.direccion!=''&&propiedad.direccion.length>20\">{{propiedad.direccion.substring(0,20)}}...</h4>\r\n                            <p *ngIf=\"propiedad.direccion==''\">Sin dirección</p>\r\n                            <p>{{propiedad.precio | currency}}</p>\r\n                          </ion-label>\r\n                        </div>\r\n                        <div class=\"col-5\" style=\"text-align: right; padding: 0px\">\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openTelefono(propiedad.celular,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openWhatsapp(propiedad.celular,propiedad.nombre,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button routerLink=\"/editar-propiedad\" style=\"width: 12vw;height: 10vw;\" (click)=\"asignarPropiedadAEditar(propiedad,$event)\" >\r\n                            <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"archivarPropiedad(propiedad,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"archive\"></ion-icon>\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                  <ion-item-sliding *ngIf=\"filteredpropiedadesRenta.length==0\" >\r\n                    <ion-item style=\"padding: 5vw\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/study.png\">\r\n                      </ion-avatar>\r\n                      <!-- <ion-thumbnail slot=\"start\">\r\n                         <img src=\"/assets/images/clientes.png\">\r\n                       </ion-thumbnail>-->\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          <ion-label>\r\n                            <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\r\n                          </ion-label>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                </ion-list>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab heading=\"Venta\" customClass=\"customClass\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <ion-list style=\"width: 100%;\">\r\n                  <ion-item-sliding *ngFor=\"let propiedad of filteredpropiedadesVenta\">\r\n                    <ion-item style=\"padding: 1vw\" (click)=\"verPropiedad(propiedad,$event)\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/study.png\">\r\n                      </ion-avatar>\r\n                      <div class=\"row\" style=\"width: 100%\">\r\n                          <div class=\"col-7\" style=\"padding-right: 0px\">\r\n                            <ion-label>\r\n                              <h2 style=\"text-transform: capitalize\" *ngIf=\"propiedad.nombre.length<=20\">{{propiedad.nombre}}</h2>\r\n                              <h2 style=\"text-transform: capitalize\" *ngIf=\"propiedad.nombre.length>20\">{{propiedad.nombre.substring(0,20)}}...</h2>\r\n                              <h4 style=\"text-transform: capitalize\" *ngIf=\"propiedad.direccion!=''&&propiedad.direccion.length<=20\">{{propiedad.direccion}}</h4>\r\n                              <h4 style=\"text-transform: capitalize\" *ngIf=\"propiedad.direccion!=''&&propiedad.direccion.length>20\">{{propiedad.direccion.substring(0,20)}}...</h4>\r\n                              <p *ngIf=\"propiedad.direccion==''\">Sin dirección</p>\r\n                              <p>{{propiedad.precio | currency}}</p>\r\n                            </ion-label>\r\n                          </div>\r\n                          <div class=\"col-5\" style=\"text-align: right;padding: 0px\">\r\n                            <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openTelefono(propiedad.celular,$event)\">\r\n                              <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\r\n                            </ion-button>\r\n                            <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openWhatsapp(propiedad.celular,propiedad.nombre,$event)\">\r\n                              <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                            </ion-button>\r\n                            <ion-button routerLink=\"/editar-propiedad\" style=\"width: 12vw;height: 10vw;\" (click)=\"asignarPropiedadAEditar(propiedad,$event)\" >\r\n                              <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\r\n                            </ion-button>\r\n                            <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"archivarPropiedad(propiedad,$event)\">\r\n                              <ion-icon slot=\"icon-only\" name=\"archive\"></ion-icon>\r\n                            </ion-button>\r\n                          </div>\r\n                        </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                  <ion-item-sliding *ngIf=\"filteredpropiedadesVenta.length==0\" >\r\n                    <ion-item style=\"padding: 5vw\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/study.png\">\r\n                      </ion-avatar>\r\n                      <!-- <ion-thumbnail slot=\"start\">\r\n                         <img src=\"/assets/images/clientes.png\">\r\n                       </ion-thumbnail>-->\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          <ion-label>\r\n                            <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\r\n                          </ion-label>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                </ion-list>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n        </tabset>\r\n\r\n\r\n     <!--   <div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 6vw;\">\r\n          <button type=\"button\" class=\"btn btn-network\" routerLink=\"/mis-propiedades\">Mis propiedades</button>\r\n        </div>-->\r\n     <!--   <div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 6vw;\">\r\n          <button type=\"button\" class=\"btn btn-network\">Solicitar colaboración</button>\r\n        </div>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 align-self-center\">\r\n    <div class=\"form-group\">\r\n      <input\r\n              routerLink=\"/propiedades-archivadas\"\r\n              type=\"button\"\r\n              class=\"form-control\"\r\n              value=\"Ver propiedades archivadas\"\r\n      />\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <img src=\"/assets/images/floatmenu_2.png\" />\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/portfolio\">\r\n        <img src=\"/assets/images/portfolio.png\" />\r\n      </ion-fab-button>\r\n<!--      <ion-fab-button color=\"light\" routerLink=\"/network\">\r\n        <img src=\"/assets/images/globe.png\" />\r\n      </ion-fab-button>-->\r\n      <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\r\n        <img src=\"/assets/images/study.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/clientes\">\r\n        <img src=\"/assets/images/user.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<app-footer-blue></app-footer-blue>\r\n\r\n"

/***/ }),

/***/ "./src/app/propiedades/propiedades-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/propiedades/propiedades-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PropiedadesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropiedadesPageRoutingModule", function() { return PropiedadesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _propiedades_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propiedades.page */ "./src/app/propiedades/propiedades.page.ts");




var routes = [
    {
        path: '',
        component: _propiedades_page__WEBPACK_IMPORTED_MODULE_3__["PropiedadesPage"]
    }
];
var PropiedadesPageRoutingModule = /** @class */ (function () {
    function PropiedadesPageRoutingModule() {
    }
    PropiedadesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PropiedadesPageRoutingModule);
    return PropiedadesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/propiedades/propiedades.module.ts":
/*!***************************************************!*\
  !*** ./src/app/propiedades/propiedades.module.ts ***!
  \***************************************************/
/*! exports provided: PropiedadesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropiedadesPageModule", function() { return PropiedadesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _propiedades_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./propiedades-routing.module */ "./src/app/propiedades/propiedades-routing.module.ts");
/* harmony import */ var _propiedades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./propiedades.page */ "./src/app/propiedades/propiedades.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");









var PropiedadesPageModule = /** @class */ (function () {
    function PropiedadesPageModule() {
    }
    PropiedadesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _propiedades_routing_module__WEBPACK_IMPORTED_MODULE_5__["PropiedadesPageRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot()
            ],
            declarations: [_propiedades_page__WEBPACK_IMPORTED_MODULE_6__["PropiedadesPage"]]
        })
    ], PropiedadesPageModule);
    return PropiedadesPageModule;
}());



/***/ }),

/***/ "./src/app/propiedades/propiedades.page.scss":
/*!***************************************************!*\
  !*** ./src/app/propiedades/propiedades.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__title {\n  color: white;\n  font-size: 27px;\n  font-weight: 600;\n  margin: 0px;\n  text-transform: uppercase;\n}\n\n.header__subtitle {\n  color: #094f72;\n  font-size: 12px;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 700;\n}\n\n.btn-network {\n  width: 100%;\n  height: auto;\n  border-radius: 20px;\n  font-size: 20px;\n  background-color: #ff7949;\n  border-color: #ff7949;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 300;\n}\n\n.botonera {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  align-content: space-around;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.row--header {\n  background-color: #ff7949;\n  padding: 2vw;\n}\n\n.header--content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.header--content__textos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-left: 15px;\n}\n\n.item-inner {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGllZGFkZXMvQzpcXEJpdEJ1Y2tldFxcQXBwc1xcYnJva2Vycy1uZXR3b3JrLWlvc1xcYnJva2Vycy1uZXR3b3JrL3NyY1xcYXBwXFxwcm9waWVkYWRlc1xccHJvcGllZGFkZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9waWVkYWRlcy9wcm9waWVkYWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDREo7O0FESUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNESjs7QURLRTtFQUNFLHlCQUFBO0VBRUEsWUFBQTtBQ0hKOztBRE1FO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNISjs7QURNRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUU7RUFDRSxZQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wcm9waWVkYWRlcy9wcm9waWVkYWRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5oZWFkZXJfX3RpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXJfX3N1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjMDk0ZjcyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tbmV0d29yayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY3OTQ5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3RvbmVyYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAucm93LS1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzk0OTtcclxuICAgIC8vaGVpZ2h0OiAxNXZoO1xyXG4gICAgcGFkZGluZzogMnZ3O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLS1jb250ZW50X190ZXh0b3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1pbm5lcntcclxuICAgIGJvcmRlcjpub25lO1xyXG4gIH1cclxuIiwiLmhlYWRlcl9fdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oZWFkZXJfX3N1YnRpdGxlIHtcbiAgY29sb3I6ICMwOTRmNzI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnRuLW5ldHdvcmsge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5NDk7XG4gIGJvcmRlci1jb2xvcjogI2ZmNzk0OTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYm90b25lcmEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucm93LS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xuICBwYWRkaW5nOiAydnc7XG59XG5cbi5oZWFkZXItLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci0tY29udGVudF9fdGV4dG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/propiedades/propiedades.page.ts":
/*!*************************************************!*\
  !*** ./src/app/propiedades/propiedades.page.ts ***!
  \*************************************************/
/*! exports provided: PropiedadesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropiedadesPage", function() { return PropiedadesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");





var PropiedadesPage = /** @class */ (function () {
    function PropiedadesPage(alertCtrl, http, rs, loadingController, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.rs = rs;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.isActive = 0;
        this.propiedades = [];
        this.concretados = 0;
        this.por_concretar = 0;
        this.filteredpropiedades = [];
        this.filteredpropiedadesRenta = [];
        this.filteredpropiedadesVenta = [];
    }
    PropiedadesPage.prototype.ngOnInit = function () {
    };
    PropiedadesPage.prototype.cambioTab = function () {
        console.log(this.isActive);
    };
    PropiedadesPage.prototype.asignarPropiedadAEditar = function (propiedad, event) {
        event.stopPropagation();
        window.localStorage.setItem("state_propiedad", this.isActive);
        window.localStorage.setItem("propiedad_a_ver", JSON.stringify(propiedad));
        this.navCtrl.navigateRoot('/editar-propiedad');
    };
    PropiedadesPage.prototype.verPropiedad = function (propiedad, event) {
        event.stopPropagation();
        window.localStorage.setItem("state_propiedad", this.isActive);
        window.localStorage.setItem("propiedad_a_ver", JSON.stringify(propiedad));
        this.navCtrl.navigateRoot('/detalles-casa');
    };
    PropiedadesPage.prototype.ionViewDidEnter = function () {
        if (window.localStorage.getItem("state_propiedad")) {
            this.isActive = window.localStorage.getItem("state_propiedad");
        }
        else {
            this.isActive = false;
        }
        this.getPropiedades();
    };
    PropiedadesPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Cargando tu información...',
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
    PropiedadesPage.prototype.getPropiedades = function () {
        var _this = this;
        this.presentLoading();
        var headers = { 'Accept': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded' };
        // this.presentLoading();
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Propiedades/getPropiedades.php", {
            "id_usuario": window.localStorage.getItem("id_usuario"),
        }, headers)
            .then(function (data) {
            console.log("Propiedades", data.data);
            _this.loader.dismiss();
            _this.propiedades = JSON.parse(data.data);
            _this.por_concretar = 0;
            _this.concretados = 0;
            for (var _i = 0, _a = _this.propiedades; _i < _a.length; _i++) {
                var propiedad = _a[_i];
                // Do something.
                if (propiedad.eval_e.includes('pago_comision":false')) {
                    if (propiedad.archivado == 0) {
                        console.log(propiedad);
                        _this.por_concretar++;
                    }
                }
                else {
                    _this.concretados++;
                }
            }
            //this.filteredpropiedades = this.propiedades.filter(t=>t.archivado ==0);
            /*          this.filteredpropiedadesRenta = this.propiedades.filter(t=>(t.archivado ==0&&t.tipo=='Renta'));
                      this.filteredpropiedadesVenta= this.propiedades.filter(t=>(t.archivado ==0&&t.tipo=='Venta'));*/
            _this.filteredpropiedades = _this.propiedades.filter(function (t) { return (t.archivado == 0); });
            _this.filteredpropiedadesRenta = [];
            _this.filteredpropiedadesVenta = [];
            _this.filteredpropiedades.forEach(function (value) {
                if (value.tipo == "Renta") {
                    _this.filteredpropiedadesRenta.push(value);
                }
                if (value.tipo == "Venta") {
                    _this.filteredpropiedadesVenta.push(value);
                }
            });
        })
            .catch(function (error) {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            // this.loader.dismiss();
        });
    };
    PropiedadesPage.prototype.archivarPropiedad = function (propiedad, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alerta;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.stopPropagation();
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "¿Deseas archivar la propiedad?",
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function (data) {
                                            console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: 'Si, archivar',
                                        handler: function (data) {
                                            console.log("ROOTURL", _this.rs.ROOTURL);
                                            var headers = { 'Accept': 'application/x-www-form-urlencoded',
                                                'Content-Type': 'application/x-www-form-urlencoded' };
                                            _this.http.setRequestTimeout(5.0);
                                            _this.http.post(_this.rs.ROOTURL + "Propiedades/archivarPropiedad.php", {
                                                "id_propiedad": propiedad.id_propiedad
                                            }, headers)
                                                .then(function (data) {
                                                console.log(data.data);
                                                alert("Propiedad archivada correctamente");
                                                _this.navCtrl.navigateRoot('/propiedades');
                                                _this.getPropiedades();
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
                        alerta = _a.sent();
                        return [4 /*yield*/, alerta.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PropiedadesPage.prototype.openWhatsapp = function (telefono_contacto, nombre_contacto, event) {
        event.stopPropagation();
        var link = "";
        if (telefono_contacto[0] != "+") {
            telefono_contacto = "+52" + telefono_contacto;
        }
        link = "whatsapp://send?phone=" + telefono_contacto + "&text=Estimad@ " + nombre_contacto + ", ¡Gracias por la confianza! ";
        window.open(encodeURI(link), '_system');
    };
    PropiedadesPage.prototype.openTelefono = function (telefono_contacto, event) {
        event.stopPropagation();
        var link = "";
        link = "tel:" + telefono_contacto;
        window.open(encodeURI(link), '_system');
    };
    PropiedadesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
        { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    PropiedadesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-propiedades',
            template: __webpack_require__(/*! raw-loader!./propiedades.page.html */ "./node_modules/raw-loader/index.js!./src/app/propiedades/propiedades.page.html"),
            styles: [__webpack_require__(/*! ./propiedades.page.scss */ "./src/app/propiedades/propiedades.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], PropiedadesPage);
    return PropiedadesPage;
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
        this.ROOTURL = "http://broktoolserver.com/ControlPanel/php/admin/";
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
//# sourceMappingURL=propiedades-propiedades-module-es5.js.map