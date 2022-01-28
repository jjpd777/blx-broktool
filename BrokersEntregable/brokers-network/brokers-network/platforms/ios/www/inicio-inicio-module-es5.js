(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/inicio/inicio.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inicio/inicio.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"height: 100vh;\">\r\n  <div class=\"row\" style=\"height: 30vh;background-color: white\">\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 imgPrincipal\">\r\n      <div class=\"col-sm-12 my-auto\" >\r\n        <img class=\"rounded mx-auto d-block\" style=\"width: 50%\" src=\"/assets/images/logo-BROKTOOL.png\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row styleBody\">\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 textHeader\">\r\n      <div class=\"row_content\" >\r\n        <p class=\"row_content-p\">Cierra negocios</p>\r\n        <p class=\"row_content-p\">con un click</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n      <div style=\"text-align: center!important;\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 align-self-center\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control input__text\" placeholder=\"Email\" [(ngModel)]=\"user.usuario\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control input__text\" placeholder=\"Contraseña\" [(ngModel)]=\"user.password\" />\r\n          </div>\r\n          <input class=\"btn btnBroktool\" type=\"button\" value=\"Ingresar\" (click)=\"login()\">\r\n        </div>\r\n      </div>\r\n      <div style=\"text-align: center!important;\">\r\n        <button class=\"btn btnBroktool\" type=\"button\" routerLink=\"/registro\">\r\n          Registrar\r\n        </button>\r\n      </div>\r\n      <div style=\"text-align: center!important;\">\r\n        <p style=\"color: #67adc9;\">Olvidé contraseña</p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<app-footer *ngIf=\"isKeyboardHide\"></app-footer>\r\n"

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

module.exports = ".btnBroktool {\n  background-color: white;\n  border-radius: 10px;\n  width: 40vw;\n  color: #094f72;\n  margin: 1vw;\n  text-transform: uppercase;\n}\n\n.imgPrincipal {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.styleBody {\n  background-color: #094f72;\n  height: calc(70vh - 56px);\n}\n\n.textHeader {\n  text-align: center;\n  color: white;\n  text-transform: uppercase;\n  padding-top: 5%;\n}\n\n.row_content {\n  font-size: 2.5vh;\n  letter-spacing: 1px;\n  padding-top: 2vh;\n}\n\n.row_content-p {\n  margin: 0;\n  font-family: \"Lato\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9neW9zb2x1dGlvbnMvRG9jdW1lbnRzL0FwcHMvYnJva2Vycy1uZXR3b3JrL3NyYy9hcHAvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiLCJzcmMvYXBwL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksU0FBQTtFQUNBLCtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRuQnJva3Rvb2wge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBjb2xvcjogIzA5NGY3MjtcclxuICAgIG1hcmdpbjogMXZ3O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmltZ1ByaW5jaXBhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvOyBcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5zdHlsZUJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5NGY3MjsgXHJcbiAgICBoZWlnaHQ6IGNhbGMoNzB2aCAtIDU2cHgpO1xyXG59XHJcblxyXG4udGV4dEhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IFxyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG4ucm93X2NvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAyLjV2aDsgXHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4OyBcclxuICAgIHBhZGRpbmctdG9wOiAydmg7XHJcbn1cclxuXHJcbi5yb3dfY29udGVudC1wIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuIiwiLmJ0bkJyb2t0b29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA0MHZ3O1xuICBjb2xvcjogIzA5NGY3MjtcbiAgbWFyZ2luOiAxdnc7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pbWdQcmluY2lwYWwge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4uc3R5bGVCb2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NGY3MjtcbiAgaGVpZ2h0OiBjYWxjKDcwdmggLSA1NnB4KTtcbn1cblxuLnRleHRIZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4ucm93X2NvbnRlbnQge1xuICBmb250LXNpemU6IDIuNXZoO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nLXRvcDogMnZoO1xufVxuXG4ucm93X2NvbnRlbnQtcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufSJdfQ== */"

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
    function InicioPage(localeService, menuCtrl, http, rs, navCtrl, loadingController, iab, keyboard, platform, loading) {
        this.localeService = localeService;
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
        this.TIME_IN_MS = 3000;
        this.isKeyboardHide = true;
    }
    InicioPage.prototype.ngOnInit = function () {
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
                    alert("Usuario incorrecto, porfavor intentalo de nuevo");
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
    InicioPage.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"] },
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_3__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]])
    ], InicioPage);
    return InicioPage;
}());



/***/ })

}]);
//# sourceMappingURL=inicio-inicio-module-es5.js.map