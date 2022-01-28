(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-archivados-clientes-archivados-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/clientes-archivados/clientes-archivados.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clientes-archivados/clientes-archivados.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\" class=\"container--subHeader\">\n      <p class=\"sub-Header\">\n        <ion-icon size=\"large\" name=\"arrow-back\" style=\"float: left;\" routerLink=\"/clientes\"></ion-icon>Clientes Archivados\n      </p>\n    </div>\n   <!-- <div class=\"row\">\n\n      &lt;!&ndash;      <ion-icon size=\"large\" name=\"arrow-back\" style=\"float: left;margin-top: 1vw;color:white\" routerLink=\"/clientes\"></ion-icon>&ndash;&gt;\n\n      <ion-item style=\"background-color: transparent\">\n        <ion-icon slot=\"start\" size=\"large\" name=\"arrow-back\" routerLink=\"/clientes\"></ion-icon>\n        <ion-label style=\"border: none\">\n          <h2 style=\"text-transform: capitalize\">Clientes Archivados</h2>\n        </ion-label>\n      </ion-item>\n    </div>-->\n  </div>\n\n  <div class=\"row d-flex justify-content-center\" style=\"margin-top: 1vw\">\n    <div class=\"botonera\" style=\"\">\n      <tabset [justified]=\"true\" style=\"margin-top: 2vw;margin-bottom: 2vw;text-align: center;    width: 100%;\">\n        <tab heading=\"Renta\" customClass=\"customClass\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <ion-list style=\"width: 100%;\">\n                <ion-item-sliding *ngFor=\"let cliente of filteredclientesRenta\">\n                  <ion-item style=\"padding: 1vw\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"/assets/images/clientes.png\">\n                    </ion-avatar>\n                    <div class=\"row\" style=\"width: 100%\">\n                      <div class=\"col-7\" style=\"padding-right: 0px\">\n                        <ion-label>\n                          <h2 style=\"text-transform: capitalize\" *ngIf=\"cliente.nombre.length<=20\">{{cliente.nombre}}</h2>\n                          <h2 style=\"text-transform: capitalize\" *ngIf=\"cliente.nombre.length>20\">{{cliente.nombre.substring(0,20)}}...</h2>\n\n                          <h4 style=\"text-transform: capitalize\" *ngIf=\"cliente.zona_busca!=''&&cliente.zona_busca.length<=20\">{{cliente.zona_busca}}</h4>\n                          <h4 style=\"text-transform: capitalize\" *ngIf=\"cliente.zona_busca!=''&&cliente.zona_busca.length>20\">{{cliente.zona_busca.substring(0,20)}}...</h4>\n                          <p *ngIf=\"cliente.zona_busca==''\">Sin Zona</p>\n                          <p>{{cliente.presupuesto | currency}}</p>\n                        </ion-label>\n                      </div>\n                      <div class=\"col-5\" style=\"text-align: right; padding: 0px\">\n                        <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"desarchivarCliente(cliente.id_cliente)\">\n                          <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n                        </ion-button>\n                        <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"eliminarCliente(cliente.id_cliente)\">\n                          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                        </ion-button>\n                      </div>\n                    </div>\n                  </ion-item>\n                </ion-item-sliding>\n                <ion-item-sliding *ngIf=\"filteredclientesRenta.length==0\" >\n                  <ion-item style=\"padding: 5vw\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"/assets/images/clientes.png\">\n                    </ion-avatar>\n                    <!-- <ion-thumbnail slot=\"start\">\n                       <img src=\"/assets/images/clientes.png\">\n                     </ion-thumbnail>-->\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                        <ion-label>\n                          <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\n                        </ion-label>\n                      </div>\n                    </div>\n                  </ion-item>\n                </ion-item-sliding>\n              </ion-list>\n            </div>\n          </div>\n        </tab>\n        <tab heading=\"Venta\" customClass=\"customClass\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <ion-list style=\"width: 100%;\">\n                <ion-item-sliding *ngFor=\"let cliente of filteredclientesVenta\">\n                  <ion-item style=\"padding: 1vw\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"/assets/images/clientes.png\">\n                    </ion-avatar>\n                    <div class=\"row\" style=\"width: 100%\">\n                      <div class=\"col-7\" style=\"padding-right: 0px\">\n                        <ion-label>\n                          <h2 style=\"text-transform: capitalize\" *ngIf=\"cliente.nombre.length<=20\">{{cliente.nombre}}</h2>\n                          <h2 style=\"text-transform: capitalize\" *ngIf=\"cliente.nombre.length>20\">{{cliente.nombre.substring(0,20)}}...</h2>\n                          <h4 style=\"text-transform: capitalize\" *ngIf=\"cliente.zona_busca!=''&&cliente.zona_busca.length<=20\">{{cliente.zona_busca}}</h4>\n                          <h4 style=\"text-transform: capitalize\" *ngIf=\"cliente.zona_busca!=''&&cliente.zona_busca.length>20\">{{cliente.zona_busca.substring(0,20)}}...</h4>\n                          <p *ngIf=\"cliente.zona_busca==''\">Sin Zona</p>\n                          <p>{{cliente.presupuesto | currency}}</p>\n                        </ion-label>\n                      </div>\n                      <div class=\"col-5\" style=\"text-align: right; padding: 0px\">\n                        <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"desarchivarCliente(cliente.id_cliente)\">\n                          <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n                        </ion-button>\n                        <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"eliminarCliente(cliente.id_cliente)\">\n                          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                        </ion-button>\n                      </div>\n                    </div>\n                  </ion-item>\n                </ion-item-sliding>\n                <ion-item-sliding *ngIf=\"filteredclientesVenta.length==0\" >\n                  <ion-item style=\"padding: 5vw\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"/assets/images/clientes.png\">\n                    </ion-avatar>\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                        <ion-label>\n                          <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\n                        </ion-label>\n                      </div>\n                    </div>\n                  </ion-item>\n                </ion-item-sliding>\n              </ion-list>\n            </div>\n          </div>\n        </tab>\n      </tabset>\n   <!--   <tabset [justified]=\"true\" style=\"margin-top: 2vw;margin-bottom: 2vw;text-align: center\">\n        <tab heading=\"Renta\" customClass=\"customClass\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <ion-list>\n                <ion-item-sliding *ngFor=\"let cliente of filteredclientesRenta\" >\n                  <ion-item style=\"padding: 1vw\" *ngIf=\"cliente.renta_o_venta=='Renta'\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"/assets/images/clientes.png\">\n                    </ion-avatar>\n                    &lt;!&ndash; <ion-thumbnail slot=\"start\">\n                       <img src=\"/assets/images/clientes.png\">\n                     </ion-thumbnail>&ndash;&gt;\n                    <div class=\"row\" style=\"width: 100%\">\n                      <div class=\"col-6\">\n                        <ion-label>\n                          <h2 style=\"text-transform: capitalize;white-space: normal;\">{{cliente.nombre}}</h2>\n                          <p style=\"white-space: normal;text-align: left\">{{cliente.email}}</p>\n                          <p style=\"white-space: normal;text-align: left\">{{cliente.zona_busca}}</p>\n                          <p style=\"white-space: normal;text-align: left\">{{cliente.presupuesto}}</p>\n                          <p style=\"white-space: normal;text-align: left\">{{cliente.referencia}}</p>\n                        </ion-label>\n                      </div>\n                      <div class=\"col-6\" style=\"text-align: center\">\n                        <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"desarchivarCliente(cliente.id_cliente)\">\n                          <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n                        </ion-button>\n                        <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"eliminarCliente(cliente.id_cliente)\">\n                          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                        </ion-button>\n                      </div>\n                    </div>\n                  </ion-item>\n                </ion-item-sliding>\n                <ion-item-sliding *ngIf=\"filteredclientesRenta.length==0\">\n                  <ion-item style=\"padding: 5vw\" >\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                        <ion-label>\n                          <h2 style=\"text-transform: capitalize;white-space: normal;\">Aún no se tienen registros para este concepto</h2>\n                        </ion-label>\n                      </div>\n                    </div>\n                  </ion-item>\n                </ion-item-sliding>\n              </ion-list>\n            </div>\n          </div>\n        </tab>\n\n        <tab heading=\"Venta\" customClass=\"customClass\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <ion-list>\n                <ion-item-sliding *ngFor=\"let cliente of filteredclientesVenta \" >\n                  <ion-item style=\"padding: 1vw\" *ngIf=\"cliente.renta_o_venta=='Venta'\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"/assets/images/clientes.png\">\n                    </ion-avatar>\n                    &lt;!&ndash; <ion-thumbnail slot=\"start\">\n                       <img src=\"/assets/images/clientes.png\">\n                     </ion-thumbnail>&ndash;&gt;\n                    <div class=\"row\" style=\"width: 100%\">\n                      <div class=\"col-6\">\n                        <ion-label>\n                          <h2 style=\"text-transform: capitalize;white-space: normal;\">{{cliente.nombre}}</h2>\n                          <p style=\"white-space: normal;text-align: left\">{{cliente.email}}</p>\n                          <p style=\"white-space: normal;text-align: left\">{{cliente.zona_busca}}</p>\n                          <p style=\"white-space: normal;text-align: left\">{{cliente.presupuesto}}</p>\n                          <p style=\"white-space: normal;text-align: left\">{{cliente.referencia}}</p>\n                        </ion-label>\n                      </div>\n                      <div class=\"col-6\" style=\"text-align: center\">\n                        <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"desarchivarCliente(cliente.id_cliente)\">\n                          <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n                        </ion-button>\n                        <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"eliminarCliente(cliente.id_cliente)\">\n                          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                        </ion-button>\n                      </div>\n                    </div>\n                  </ion-item>\n                </ion-item-sliding>\n                <ion-item-sliding *ngIf=\"filteredclientesVenta.length==0\">\n                  <ion-item style=\"padding: 5vw\" >\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                        <ion-label>\n                          <h2 style=\"text-transform: capitalize;white-space: normal;\">Aún no se tienen registros para este concepto</h2>\n                        </ion-label>\n                      </div>\n                    </div>\n                  </ion-item>\n                </ion-item-sliding>\n              </ion-list>\n            </div>\n          </div>\n        </tab>\n      </tabset>-->\n    </div>\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <img src=\"/assets/images/floatmenu_2.png\" />\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"light\" routerLink=\"/portfolio\">\n        <img src=\"/assets/images/portfolio.png\" />\n      </ion-fab-button>\n<!--      <ion-fab-button color=\"light\" routerLink=\"/network\">\n        <img src=\"/assets/images/globe.png\" />\n      </ion-fab-button>-->\n      <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\n        <img src=\"/assets/images/study.png\" />\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" routerLink=\"/clientes\">\n        <img src=\"/assets/images/user.png\" />\n      </ion-fab-button>\n    </ion-fab-list>\n    <!--  <ion-fab-list side=\"start\">\n        <ion-fab-button color=\"light\" routerLink=\"/entrega-casa\">\n          <img src=\"/assets/images/entrega.png\" />\n        </ion-fab-button>\n        <ion-fab-button color=\"light\" routerLink=\"/firma-casa\">\n          <img src=\"/assets/images/firma.png\" />\n        </ion-fab-button>\n        <ion-fab-button color=\"light\" routerLink=\"/interes-casa\">\n          <img src=\"/assets/images/interes.png\" />\n        </ion-fab-button>\n        <ion-fab-button color=\"light\" routerLink=\"/promocion-casa\">\n          <img src=\"/assets/images/promocion.png\" />\n        </ion-fab-button>\n        <ion-fab-button color=\"light\" routerLink=\"/detalles-casa\">\n          <img src=\"/assets/images/captacion.png\" />\n        </ion-fab-button>\n      </ion-fab-list>-->\n  </ion-fab>\n\n</ion-content>\n\n\n\n<app-footer-blue></app-footer-blue>\n"

/***/ }),

/***/ "./src/app/clientes-archivados/clientes-archivados-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/clientes-archivados/clientes-archivados-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ClientesArchivadosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesArchivadosPageRoutingModule", function() { return ClientesArchivadosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _clientes_archivados_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientes-archivados.page */ "./src/app/clientes-archivados/clientes-archivados.page.ts");




const routes = [
    {
        path: '',
        component: _clientes_archivados_page__WEBPACK_IMPORTED_MODULE_3__["ClientesArchivadosPage"]
    }
];
let ClientesArchivadosPageRoutingModule = class ClientesArchivadosPageRoutingModule {
};
ClientesArchivadosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClientesArchivadosPageRoutingModule);



/***/ }),

/***/ "./src/app/clientes-archivados/clientes-archivados.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/clientes-archivados/clientes-archivados.module.ts ***!
  \*******************************************************************/
/*! exports provided: ClientesArchivadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesArchivadosPageModule", function() { return ClientesArchivadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _clientes_archivados_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clientes-archivados-routing.module */ "./src/app/clientes-archivados/clientes-archivados-routing.module.ts");
/* harmony import */ var _clientes_archivados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clientes-archivados.page */ "./src/app/clientes-archivados/clientes-archivados.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");









let ClientesArchivadosPageModule = class ClientesArchivadosPageModule {
};
ClientesArchivadosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _clientes_archivados_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientesArchivadosPageRoutingModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"]
        ],
        declarations: [_clientes_archivados_page__WEBPACK_IMPORTED_MODULE_6__["ClientesArchivadosPage"]]
    })
], ClientesArchivadosPageModule);



/***/ }),

/***/ "./src/app/clientes-archivados/clientes-archivados.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/clientes-archivados/clientes-archivados.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-inner {\n  border: none !important;\n}\n\n.container--subHeader {\n  background-color: #67adc9;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.sub-Header {\n  text-transform: uppercase;\n  text-align: center;\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 22px;\n  height: 20%;\n  color: white;\n  font-weight: 600;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.botonera {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  align-content: space-around;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMtYXJjaGl2YWRvcy9DOlxcQml0QnVja2V0XFxBcHBzXFxicm9rZXJzLW5ldHdvcmstaW9zXFxicm9rZXJzLW5ldHdvcmsvc3JjXFxhcHBcXGNsaWVudGVzLWFyY2hpdmFkb3NcXGNsaWVudGVzLWFyY2hpdmFkb3MucGFnZS5zY3NzIiwic3JjL2FwcC9jbGllbnRlcy1hcmNoaXZhZG9zL2NsaWVudGVzLWFyY2hpdmFkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRlcy1hcmNoaXZhZG9zL2NsaWVudGVzLWFyY2hpdmFkb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0taW5uZXJ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRhaW5lci0tc3ViSGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjdhZGM5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxufVxyXG5cclxuLnN1Yi1IZWFkZXIge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5ib3RvbmVyYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4iLCIuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyLS1zdWJIZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjdhZGM5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG59XG5cbi5zdWItSGVhZGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiAyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJvdG9uZXJhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/clientes-archivados/clientes-archivados.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/clientes-archivados/clientes-archivados.page.ts ***!
  \*****************************************************************/
/*! exports provided: ClientesArchivadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesArchivadosPage", function() { return ClientesArchivadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");





let ClientesArchivadosPage = class ClientesArchivadosPage {
    constructor(alertCtrl, http, rs, loadingController, alertController, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.rs = rs;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.TIME_IN_MS = 5000;
        this.clientes = [];
        this.filteredclientes = [];
        this.filteredclientesRenta = [];
        this.filteredclientesVenta = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getClientes();
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Cargando tu información...',
            });
            yield this.loader.present();
        });
    }
    getClientes() {
        this.presentLoading();
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Clientes/getClientes.php", {
            "id_usuario": window.localStorage.getItem("id_usuario"),
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            console.log(data.data);
            this.loader.dismiss();
            this.clientes = JSON.parse(data.data);
            this.filteredclientes = this.clientes.filter(t => (t.archivado == 1));
            this.filteredclientesRenta = [];
            this.filteredclientesVenta = [];
            this.filteredclientes.forEach((value) => {
                if (value.renta_o_venta == "Renta") {
                    this.filteredclientesRenta.push(value);
                }
                if (value.renta_o_venta == "Venta") {
                    this.filteredclientesVenta.push(value);
                }
            });
            //this.filteredclientesVenta= this.clientes.filter(t=>(t.archivado ==1&&t.renta_o_venta=='Venta'));
        })
            .catch(error => {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            this.loader.dismiss();
        });
    }
    desarchivarCliente(id_cliente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alerta = yield this.alertCtrl.create({
                header: "¿Deseas desarchivar el cliente?",
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
                            this.http.post(this.rs.ROOTURL + "Clientes/desarchivarCliente.php", {
                                "id_cliente": id_cliente
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                console.log(data.data);
                                alert("Cliente desarchivado correctamente");
                                this.navCtrl.navigateRoot('/clientes');
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
    eliminarCliente(id_cliente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alerta = yield this.alertCtrl.create({
                header: "¿Deseas eliminar el cliente?",
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
                            this.http.post(this.rs.ROOTURL + "Clientes/eliminarCliente.php", {
                                "id_cliente": id_cliente
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                console.log(data.data);
                                alert("Cliente eliminado correctamente");
                                this.getClientes();
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
ClientesArchivadosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ClientesArchivadosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clientes-archivados',
        template: __webpack_require__(/*! raw-loader!./clientes-archivados.page.html */ "./node_modules/raw-loader/index.js!./src/app/clientes-archivados/clientes-archivados.page.html"),
        styles: [__webpack_require__(/*! ./clientes-archivados.page.scss */ "./src/app/clientes-archivados/clientes-archivados.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ClientesArchivadosPage);



/***/ })

}]);
//# sourceMappingURL=clientes-archivados-clientes-archivados-module-es2015.js.map