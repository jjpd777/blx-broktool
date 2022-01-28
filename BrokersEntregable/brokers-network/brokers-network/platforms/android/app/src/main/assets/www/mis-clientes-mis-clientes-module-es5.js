(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mis-clientes-mis-clientes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mis-clientes/mis-clientes.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mis-clientes/mis-clientes.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\n\n<ion-content>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <ion-list>\n        <ion-item-sliding *ngFor=\"let cliente of clientes\">\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"/assets/images/clientes.png\">\n          </ion-avatar>\n         <!-- <ion-thumbnail slot=\"start\">\n            <img src=\"/assets/images/clientes.png\">\n          </ion-thumbnail>-->\n          <div class=\"row\">\n            <div class=\"col-7\">\n              <ion-label>\n                <h2 style=\"text-transform: capitalize;white-space: normal;\">{{cliente.nombre}}</h2>\n                 <p style=\"white-space: normal;text-align: justify\">{{cliente.email}}</p>\n                 <p style=\"white-space: normal;text-align: justify\">{{cliente.referencia}}</p>\n              </ion-label>\n            </div>\n            <div class=\"col-5\" style=\"text-align: center\">\n              <ion-button style=\"width: 12vw;height: 10vw;\">\n                <a href=\"tel:{{cliente.telefono}}\" style=\"text-decoration: none; color:white;\">\n                  <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\n                </a>\n              </ion-button>\n\n              <ion-button style=\"width: 12vw;height: 10vw;\">\n                <a href=\"mailto:{{cliente.email}}\" style=\"text-decoration: none; color:white;\">\n                  <ion-icon slot=\"icon-only\" name=\"mail\"></ion-icon>\n                </a>\n              </ion-button>\n\n              <ion-button style=\"width: 12vw;height: 10vw;\">\n                <a href=\"https://wa.me/+521{{cliente.telefono}}?text=Hola %20{{cliente.nombre}}, \" style=\"text-decoration: none; color:white;\">\n                  <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\n                </a>\n              </ion-button>\n            </div>\n          </div>\n\n\n        </ion-item>\n          <ion-item-options side=\"start\" (click)=\"eliminarCliente(cliente)\">\n            <ion-item-option color=\"danger\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n        <ion-item-options side=\"end\" (click)=\"editarCliente(cliente)\" routerLink=\"/editar-cliente\">\n          <ion-item-option><ion-icon slot=\"icon-only\" name=\"create\"></ion-icon></ion-item-option>\n        </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n      <!--<a routerLink=\"/detalles-casa\"  (click)=\"verCliente(cliente)\">\n        &lt;!&ndash;<div class=\"container-card\" (click)=\"verPropiedad(propiedad)\">\n          <div class=\"container-card__img\">\n            <img src=\"/assets/images/renta1.png\" alt=\"\" style=\"width: 30vw\">\n          </div>\n          <div class=\"container-card__texto\">\n            <p class=\"container-card__texto&#45;&#45;formato\">{{propiedad.nombre}} - {{propiedad.direccion}}</p>\n          </div>\n        </div>&ndash;&gt;\n\n\n      </a>-->\n    </div>\n  </div>\n\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <img src=\"/assets/images/floatmenu_2.png\" />\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"light\" routerLink=\"/portfolio\">\n        <img src=\"/assets/images/portfolio.png\" />\n      </ion-fab-button>\n<!--      <ion-fab-button color=\"light\" routerLink=\"/network\">\n        <img src=\"/assets/images/globe.png\" />\n      </ion-fab-button>-->\n      <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\n        <img src=\"/assets/images/study.png\" />\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" routerLink=\"/clientes\">\n        <img src=\"/assets/images/user.png\" />\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n\n<app-footer-blue></app-footer-blue>\n"

/***/ }),

/***/ "./src/app/mis-clientes/mis-clientes-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/mis-clientes/mis-clientes-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MisClientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisClientesPageRoutingModule", function() { return MisClientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mis_clientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis-clientes.page */ "./src/app/mis-clientes/mis-clientes.page.ts");




var routes = [
    {
        path: '',
        component: _mis_clientes_page__WEBPACK_IMPORTED_MODULE_3__["MisClientesPage"]
    }
];
var MisClientesPageRoutingModule = /** @class */ (function () {
    function MisClientesPageRoutingModule() {
    }
    MisClientesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MisClientesPageRoutingModule);
    return MisClientesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/mis-clientes/mis-clientes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/mis-clientes/mis-clientes.module.ts ***!
  \*****************************************************/
/*! exports provided: MisClientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisClientesPageModule", function() { return MisClientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mis_clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mis-clientes-routing.module */ "./src/app/mis-clientes/mis-clientes-routing.module.ts");
/* harmony import */ var _mis_clientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mis-clientes.page */ "./src/app/mis-clientes/mis-clientes.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var MisClientesPageModule = /** @class */ (function () {
    function MisClientesPageModule() {
    }
    MisClientesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _mis_clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["MisClientesPageRoutingModule"]
            ],
            declarations: [_mis_clientes_page__WEBPACK_IMPORTED_MODULE_6__["MisClientesPage"]]
        })
    ], MisClientesPageModule);
    return MisClientesPageModule;
}());



/***/ }),

/***/ "./src/app/mis-clientes/mis-clientes.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/mis-clientes/mis-clientes.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-card {\n  display: -webkit-box;\n  display: flex;\n  margin-left: 10%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-right: 10%;\n  padding-top: 20px;\n}\n\n.container-card__img {\n  height: 40%;\n  width: 40%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container-card__texto {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-left: 10px;\n}\n\n.container-card__texto--formato {\n  text-transform: uppercase;\n  color: #094f72;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzLWNsaWVudGVzL0M6XFxCaXRCdWNrZXRcXEFwcHNcXGJyb2tlcnMtbmV0d29yay1pb3NcXGJyb2tlcnMtbmV0d29yay9zcmNcXGFwcFxcbWlzLWNsaWVudGVzXFxtaXMtY2xpZW50ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9taXMtY2xpZW50ZXMvbWlzLWNsaWVudGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9taXMtY2xpZW50ZXMvbWlzLWNsaWVudGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItY2FyZF9faW1nIHtcclxuICBoZWlnaHQ6IDQwJTtcclxuICB3aWR0aDogNDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXItY2FyZF9fdGV4dG8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItY2FyZF9fdGV4dG8tLWZvcm1hdG8ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICMwOTRmNzI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4iLCIuY29udGFpbmVyLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5jb250YWluZXItY2FyZF9faW1nIHtcbiAgaGVpZ2h0OiA0MCU7XG4gIHdpZHRoOiA0MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItY2FyZF9fdGV4dG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb250YWluZXItY2FyZF9fdGV4dG8tLWZvcm1hdG8ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzA5NGY3MjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mis-clientes/mis-clientes.page.ts":
/*!***************************************************!*\
  !*** ./src/app/mis-clientes/mis-clientes.page.ts ***!
  \***************************************************/
/*! exports provided: MisClientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisClientesPage", function() { return MisClientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");





var MisClientesPage = /** @class */ (function () {
    function MisClientesPage(alertCtrl, http, rs, loadingController, alertController) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.rs = rs;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.TIME_IN_MS = 5000;
        this.clientes = [];
    }
    MisClientesPage.prototype.ngOnInit = function () {
    };
    MisClientesPage.prototype.ionViewDidEnter = function () {
        this.getClientes();
    };
    MisClientesPage.prototype.presentLoading = function () {
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
    MisClientesPage.prototype.getClientes = function () {
        var _this = this;
        this.presentLoading();
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Clientes/getClientes.php", {}, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(function (data) {
            console.log(data.data);
            _this.loader.dismiss();
            _this.clientes = JSON.parse(data.data);
        })
            .catch(function (error) {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            _this.loader.dismiss();
        });
    };
    MisClientesPage.prototype.editarCliente = function (cliente) {
        window.localStorage.setItem("cliente_a_ver", JSON.stringify(cliente));
    };
    MisClientesPage.prototype.abrirWhatsapp = function (p) {
        var link = "";
        link = "whatsapp://send?phone=+521" + p.telefono + "&text=Estimad@ " + p.nombre + ", ¡Gracias por la confianza! Nos ponemos a trabajar para darte el mejor servicio posible. ¿Cuándo puedes recibirnos para conocer la propiedad y firmar el contrato de intermediación inmobiliaria?";
        window.open(encodeURI(link), '_system');
    };
    MisClientesPage.prototype.eliminarCliente = function (cliente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cuidado!',
                            message: 'Vas a eliminar al cliente ' + cliente.nombre + ', ¿Continuar?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Si, Eliminar',
                                    handler: function () {
                                        _this.presentLoading();
                                        console.log("ROOTURL", _this.rs.ROOTURL);
                                        _this.http.setRequestTimeout(5.0);
                                        _this.http.post(_this.rs.ROOTURL + "Clientes/eliminarCliente.php", {
                                            "id_cliente": cliente.id_cliente,
                                        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                            .then(function (data) {
                                            console.log(data.data);
                                            _this.loader.dismiss();
                                            _this.clientes = JSON.parse(data.data);
                                        })
                                            .catch(function (error) {
                                            console.log(error);
                                            console.log(error.status);
                                            console.log(error.error); // error message as string
                                            console.log(error.headers);
                                            _this.loader.dismiss();
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
    MisClientesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
        { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    MisClientesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mis-clientes',
            template: __webpack_require__(/*! raw-loader!./mis-clientes.page.html */ "./node_modules/raw-loader/index.js!./src/app/mis-clientes/mis-clientes.page.html"),
            styles: [__webpack_require__(/*! ./mis-clientes.page.scss */ "./src/app/mis-clientes/mis-clientes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], MisClientesPage);
    return MisClientesPage;
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
//# sourceMappingURL=mis-clientes-mis-clientes-module-es5.js.map