(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/inicio/inicio.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inicio/inicio.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"height: 100vh;\">\r\n  <div class=\"row\" style=\"height: 30vh;background-color: white\">\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 imgPrincipal\">\r\n      <div class=\"col-sm-12 my-auto\" >\r\n        <img class=\"rounded mx-auto d-block\" style=\"width: 50%\" src=\"/assets/images/logo-BROKTOOL.png\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row styleBody\">\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 textHeader\">\r\n      <div class=\"row_content\" >\r\n        <p class=\"row_content-p\">Cierra negocios</p>\r\n        <p class=\"row_content-p\">con un click</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n      <div style=\"text-align: center!important;\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 align-self-center\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control input__text\" placeholder=\"Email\" [(ngModel)]=\"user.usuario\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control input__text\" placeholder=\"Contraseña\" [(ngModel)]=\"user.password\" />\r\n          </div>\r\n          <input class=\"btn btnBroktool\" type=\"button\" value=\"Ingresar\" (click)=\"login()\">\r\n        </div>\r\n      </div>\r\n      <div style=\"text-align: center!important;\">\r\n        <button class=\"btn btnBroktool\" type=\"button\" routerLink=\"/registro\">\r\n          Registrar\r\n        </button>\r\n      </div>\r\n      <div style=\"text-align: center!important;\">\r\n        <p style=\"color: #67adc9;\"  (click)=\"recuperarPassword()\">Olvidé contraseña</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n      <input class=\"btn btnBroktool\" type=\"button\" value=\"Política de Privacidad\" (click)=\"irPoliticas()\" style=\"margin-top: 2vw;width: 90vw\">\r\n      <input class=\"btn btnBroktool\" type=\"button\" value=\"Términos y Condiciones\" (click)=\"irTerminos()\" style=\"margin-top: 2vw;width: 90vw\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer *ngIf=\"isKeyboardHide\"></app-footer>\r\n"

/***/ }),

/***/ "./src/app/inicio/inicio-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "./src/app/inicio/inicio.page.ts");




var routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
var InicioPageRoutingModule = /** @class */ (function () {
    function InicioPageRoutingModule() {
    }
    InicioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InicioPageRoutingModule);
    return InicioPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.module.ts":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/inicio/inicio-routing.module.ts");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/inicio/inicio.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var InicioPageModule = /** @class */ (function () {
    function InicioPageModule() {
    }
    InicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
        })
    ], InicioPageModule);
    return InicioPageModule;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.page.scss":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnBroktool {\n  background-color: white;\n  border-radius: 10px;\n  width: 40vw;\n  color: #094f72;\n  margin: 1vw;\n  text-transform: uppercase;\n}\n\n.imgPrincipal {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.styleBody {\n  background-color: #094f72;\n  height: calc(70vh - 56px);\n}\n\n.textHeader {\n  text-align: center;\n  color: white;\n  text-transform: uppercase;\n  padding-top: 5%;\n}\n\n.row_content {\n  font-size: 2.5vh;\n  letter-spacing: 1px;\n  padding-top: 2vh;\n}\n\n.row_content-p {\n  margin: 0;\n  font-family: \"Lato\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL0M6XFxCaXRCdWNrZXRcXEFwcHNcXGJyb2tlcnMtbmV0d29yay1pb3NcXGJyb2tlcnMtbmV0d29yay9zcmNcXGFwcFxcaW5pY2lvXFxpbmljaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFNBQUE7RUFDQSwrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJ0bkJyb2t0b29sIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgY29sb3I6ICMwOTRmNzI7XHJcbiAgICBtYXJnaW46IDF2dztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5pbWdQcmluY2lwYWwge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bzsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uc3R5bGVCb2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTRmNzI7IFxyXG4gICAgaGVpZ2h0OiBjYWxjKDcwdmggLSA1NnB4KTtcclxufVxyXG5cclxuLnRleHRIZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5cclxuLnJvd19jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMi41dmg7IFxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDsgXHJcbiAgICBwYWRkaW5nLXRvcDogMnZoO1xyXG59XHJcblxyXG4ucm93X2NvbnRlbnQtcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbiIsIi5idG5Ccm9rdG9vbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNDB2dztcbiAgY29sb3I6ICMwOTRmNzI7XG4gIG1hcmdpbjogMXZ3O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaW1nUHJpbmNpcGFsIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLnN0eWxlQm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTRmNzI7XG4gIGhlaWdodDogY2FsYyg3MHZoIC0gNTZweCk7XG59XG5cbi50ZXh0SGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLnJvd19jb250ZW50IHtcbiAgZm9udC1zaXplOiAyLjV2aDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZy10b3A6IDJ2aDtcbn1cblxuLnJvd19jb250ZW50LXAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/inicio/inicio.page.ts":
/*!***************************************!*\
  !*** ./src/app/inicio/inicio.page.ts ***!
  \***************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");









var InicioPage = /** @class */ (function () {
    function InicioPage(localeService, alertCtrl, menuCtrl, http, rs, navCtrl, loadingController, iab, keyboard, platform, loading) {
        this.localeService = localeService;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.rs = rs;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.iab = iab;
        this.keyboard = keyboard;
        this.platform = platform;
        this.loading = loading;
        this.user = {
            usuario: "",
            password: ""
        };
        /*  async presentLoading() {
            this.loader = await this.loadingController.create({
              message: 'Cargando tu información...',
            });
            await this.loader.present();
          }*/
        this.TIME_IN_MS = 2000;
        this.isKeyboardHide = true;
    }
    InicioPage.prototype.ngOnInit = function () {
        this.loading.present();
    };
    InicioPage.prototype.login = function () {
        var _this = this;
        if (this.user.usuario == "" || this.user.password == "") {
            alert("Porfavor ingresa tus datos de acceso.");
        }
        else {
            console.log("ROOTURL", this.rs.ROOTURL);
            this.http.setRequestTimeout(5.0);
            var url = this.rs.ROOTURL + "Auth/doLogin.php";
            var data = {
                "usuario": this.user.usuario.toLowerCase(),
                "pass": this.user.password
            };
            var headers = { 'Accept': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/x-www-form-urlencoded' };
            this.http.post(url, data, headers)
                .then(function (data) {
                var json = JSON.parse(data.data);
                if (json.length == 0) {
                    alert("Usuario o Contraseña incorrecto, porfavor intentalo de nuevo");
                }
                else {
                    console.log("JSON", data);
                    window.localStorage.setItem("user", _this.user.usuario);
                    window.localStorage.setItem("user_info", JSON.stringify(json[0]));
                    window.localStorage.setItem("id_usuario", json[0].id_usuario);
                    _this.navCtrl.navigateRoot('/perfil-main');
                }
                //this.loader.dismiss();
                //this.ref.detectChanges();
            })
                .catch(function (error) {
                console.log(error);
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
        }
    };
    InicioPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loading.present();
        this.menuCtrl.enable(false);
        if (window.localStorage.getItem("id_usuario") && window.localStorage.getItem("id_usuario") != "") {
            console.log(window.localStorage.getItem("id_usuario"));
            var hideLoaderTimeout = setTimeout(function () {
                _this.loading.dismiss();
                _this.navCtrl.navigateRoot('/perfil-main');
            }, this.TIME_IN_MS);
        }
        else {
            this.loading.dismiss();
        }
    };
    /*ionViewWillEnter() {
  
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
    InicioPage.prototype.recuperarPassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alerta;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Por favor ingresa tu correo para enviarte las instrucciones de recuperación de contraseña",
                            inputs: [
                                {
                                    name: 'email',
                                    placeholder: 'Ingresa tu Email',
                                    value: ""
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
                                    text: 'Recuperar',
                                    handler: function (data) {
                                        _this.http.setRequestTimeout(5.0);
                                        var url = _this.rs.ROOTURL + "Auth/recuperarPassword.php";
                                        var data_ = {
                                            "email": data.email,
                                        };
                                        var headers = { 'Accept': 'application/x-www-form-urlencoded',
                                            'Content-Type': 'application/x-www-form-urlencoded' };
                                        _this.http.post(url, data_, headers)
                                            .then(function (data_response) {
                                            // alert(JSON.stringify(data_response));
                                            alert("Email de recuperación enviado, porfavor sigue las instrucciones para reestablecer tu contraseña.");
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
    InicioPage.prototype.irPoliticas = function () {
        this.iab.create('http://www.broktool.com/aviso-de-privacidad.html', "_system");
    };
    InicioPage.prototype.irTerminos = function () {
        this.iab.create('http://www.broktool.com/teacuterminos-y-condiciones.html', "_system");
    };
    InicioPage.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
        { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_3__["RootSettingsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] }
    ]; };
    InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! raw-loader!./inicio.page.html */ "./node_modules/raw-loader/index.js!./src/app/inicio/inicio.page.html"),
            styles: [__webpack_require__(/*! ./inicio.page.scss */ "./src/app/inicio/inicio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_3__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]])
    ], InicioPage);
    return InicioPage;
}());



/***/ })

}]);
//# sourceMappingURL=inicio-inicio-module-es5.js.map