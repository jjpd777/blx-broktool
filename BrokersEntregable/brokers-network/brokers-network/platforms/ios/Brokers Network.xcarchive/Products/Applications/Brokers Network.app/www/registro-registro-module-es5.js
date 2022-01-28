(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-registro-module"],{

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'check';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f00c';
var svgPathData = 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCheck = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/registro/registro.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registro/registro.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"    position: absolute;\r\n    z-index: 9999;\r\n    left: 6vw;\r\n    top: 2vw;\r\n    color: white;\">\r\n  <ion-icon size=\"large\" name=\"arrow-back\" routerLink=\"/inicio\"></ion-icon>\r\n</div>\r\n<app-menu-registro></app-menu-registro>\r\n\r\n<ion-content>\r\n\r\n\r\n    <div class=\"row d-flex justify-content-center containerFoto\">\r\n      <div class=\"col-6 col-sm-6 col-md-6 col-lg-6\">\r\n        <button type=\"button\" class=\"form-control containerFoto__boton\" id=\"exampleInputEmail1\" (click)=\"buscarFotoPerfil('PERFIL')\"\r\n          aria-describedby=\"emailHelp\">\r\n          <i *ngIf=\"newUser.fotoPerfil!=''\" class=\"cr-icon fa fa-check\" style=\"color: #fff\"></i>\r\n          <span *ngIf=\"newUser.fotoPerfil==''\">Subir foto de perfil</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Nombre\" [(ngModel)]=\"newUser.nombre\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Apellido\" [(ngModel)]=\"newUser.apellido\" />\r\n        </div>\r\n      </div>\r\n<!--      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Usuario\" [(ngModel)]=\"newUser.usuario\"/>\r\n        </div>\r\n      </div>-->\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" class=\"form-control input__text\" placeholder=\"Email\" [(ngModel)]=\"newUser.email\"/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" class=\"form-control input__text\" placeholder=\"Password\" [(ngModel)]=\"newUser.password\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"number\" class=\"form-control input__text\" placeholder=\"Celular\" [(ngModel)]=\"newUser.celular\" />\r\n        </div>\r\n      </div>\r\n\r\n\r\n      \r\n <!--     <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\" style=\"text-align: right\">\r\n          <input type=\"button\" class=\"form-control button__siguiente\" value=\"Subir CURP \" (click)=\"buscarCurp()\"/>\r\n          <i *ngIf=\"newUser.curp!=''\" class=\"cr-icon fa fa-check\" style=\"color: #094F72;\"></i>\r\n        </div>\r\n      </div>-->\r\n\r\n<!--\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"RFC\" [(ngModel)]=\"newUser.rfc\" />\r\n        </div>\r\n      </div>\r\n-->\r\n\r\n<!--      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Ciudad\" [(ngModel)]=\"newUser.ciudad\"/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Zonas para cubrir\"  [(ngModel)]=\"newUser.zonaParaCubrir\"/>\r\n        </div>\r\n      </div>-->\r\n\r\n<!--      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Horario para cubrir citas\" [(ngModel)]=\"newUser.horarioParaCubrir\"/>\r\n        </div>\r\n      </div>-->\r\n\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input\r\n                  type=\"text\"\r\n                  class=\"form-control input__text\"\r\n                  placeholder=\"Empresa\" [(ngModel)]=\"newUser.empresa\"\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"checkbox\">\r\n        <label class=\"checkbox__label\">\r\n          <input type=\"checkbox\" value=\"\" (click)=\"asesorIndependienteClick()\">\r\n          <span class=\"cr\"><i class=\"cr-icon fa fa-check\"></i></span>\r\n          Soy asesor independiente\r\n        </label>\r\n      </div>-->\r\n\r\n      <ion-item (click)=\"asesorIndependienteClick()\">\r\n        <ion-label style=\"white-space: normal;\">Soy asesor independiente</ion-label>\r\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"soyasesorchecked\" ></ion-checkbox>\r\n      </ion-item>\r\n\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n\r\n       <!-- <div class=\"checkbox\">\r\n          <label class=\"checkbox__label\">\r\n            <input type=\"checkbox\" value=\"\" (click)=\"terminosClick()\">\r\n            <span class=\"cr\"><i class=\"cr-icon fa fa-check\"></i></span>\r\n            He leído términos y condiciones\r\n          </label>\r\n        </div>-->\r\n\r\n        <ion-item (click)=\"terminosClick()\">\r\n          <ion-label style=\"white-space: nowrap;\">Términos y condiciones</ion-label>\r\n          <ion-checkbox slot=\"end\" [(ngModel)]=\"toschecked\" ></ion-checkbox>\r\n        </ion-item>\r\n\r\n<!--        <div class=\"checkbox\">\r\n          <label class=\"checkbox__label\">\r\n            <input type=\"checkbox\" value=\"\" (click)=\"poliitcasClick()\">\r\n            <span class=\"cr\"><i class=\"cr-icon fa fa-check\"></i></span>\r\n            Acepto política de privacidad\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"checkbox\">\r\n          <label class=\"checkbox__label\">\r\n            <input type=\"checkbox\" value=\"\" (click)=\"notificacionesClick()\">\r\n            <span class=\"cr\"><i class=\"cr-icon fa fa-check\"></i></span>\r\n            Deseo recibir notificaciones\r\n          </label>\r\n        </div>-->\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\" style=\"padding-top: 15px\">\r\n        <div class=\"form-group\">\r\n          <input type=\"button\" class=\"form-control button__siguiente\" value=\"Registrarse\" (click)=\"finalizarRegistro()\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n</ion-content>\r\n<app-footer-blue></app-footer-blue>\r\n"

/***/ }),

/***/ "./src/app/registro/registro-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function() { return RegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro.page */ "./src/app/registro/registro.page.ts");




var routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }
];
var RegistroPageRoutingModule = /** @class */ (function () {
    function RegistroPageRoutingModule() {
    }
    RegistroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegistroPageRoutingModule);
    return RegistroPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/registro/registro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-routing.module */ "./src/app/registro/registro-routing.module.ts");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/registro/registro.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ],
            declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());



/***/ }),

/***/ "./src/app/registro/registro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  color: #094f72;\n  font-weight: 700;\n}\n\n::-moz-placeholder {\n  color: #094f72;\n  font-weight: 700;\n}\n\n::-ms-input-placeholder {\n  color: #094f72;\n  font-weight: 700;\n}\n\n::placeholder {\n  color: #094f72;\n  font-weight: 700;\n}\n\n.containerFoto {\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.containerFoto__boton {\n  box-shadow: 8px 6px 13px 0px #888888;\n  border-radius: 50%;\n  height: 15vh;\n  width: 15vh;\n  margin: auto;\n  background-color: #82c6d1;\n  color: white;\n  border-style: solid;\n  border-color: white;\n  border-width: 5px;\n}\n\n.input__text {\n  text-align: center;\n  border-radius: 50px;\n  border-color: #82c6d1;\n}\n\n.checkbox__label {\n  font-size: 1em;\n  color: #094f72;\n  text-align: center !important;\n}\n\n.button__siguiente {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #094f72;\n  color: white;\n  font-weight: 700;\n}\n\n.checkbox label:after,\n.radio label:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.checkbox .cr,\n.radio .cr {\n  position: relative;\n  display: inline-block;\n  border: 2px solid #82c6d1;\n  border-radius: 0.25em;\n  width: 1.3em;\n  height: 1.3em;\n  float: left;\n  margin-right: 0.5em;\n}\n\n.radio .cr {\n  border-radius: 50%;\n}\n\n.checkbox .cr .cr-icon,\n.radio .cr .cr-icon {\n  position: absolute;\n  font-size: 0.8em;\n  line-height: 0;\n  top: 50%;\n  left: 20%;\n}\n\n.radio .cr .cr-icon {\n  margin-left: 0.04em;\n}\n\n.checkbox label input[type=checkbox],\n.radio label input[type=radio] {\n  display: none;\n}\n\n.checkbox label input[type=checkbox] + .cr > .cr-icon,\n.radio label input[type=radio] + .cr > .cr-icon {\n  -webkit-transform: scale(3) rotateZ(-20deg);\n          transform: scale(3) rotateZ(-20deg);\n  opacity: 0;\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n}\n\n.checkbox label input[type=checkbox]:checked + .cr > .cr-icon,\n.radio label input[type=radio]:checked + .cr > .cr-icon {\n  -webkit-transform: scale(1) rotateZ(0deg);\n          transform: scale(1) rotateZ(0deg);\n  opacity: 1;\n}\n\n.checkbox label input[type=checkbox]:disabled + .cr,\n.radio label input[type=radio]:disabled + .cr {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9neW9zb2x1dGlvbnMvRG9jdW1lbnRzL0FwcHMvYnJva2Vycy1uZXR3b3JrL3NyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QUREQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRERBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDREo7O0FEREE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURLRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLRTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRko7O0FETUU7O0VBRUksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDSE47O0FETUU7O0VBRUksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0hOOztBRE1FO0VBQ0ksa0JBQUE7QUNITjs7QURNRTs7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDSE47O0FETUU7RUFDSSxtQkFBQTtBQ0hOOztBRE1FOztFQUVJLGFBQUE7QUNITjs7QURNRTs7RUFFSSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNITjs7QURNRTs7RUFFSSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsVUFBQTtBQ0hOOztBRE1FOztFQUVJLFlBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzA5NGY3MjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNvbnRhaW5lckZvdG8ge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lckZvdG9fX2JvdG9uIHtcclxuICAgIGJveC1zaGFkb3c6IDhweCA2cHggMTNweCAwcHggIzg4ODg4ODsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gICAgaGVpZ2h0OiAxNXZoOyBcclxuICAgIHdpZHRoOiAxNXZoOyBcclxuICAgIG1hcmdpbjogYXV0bzsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJjNmQxOyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkOyBcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dF9fdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IFxyXG4gICAgYm9yZGVyLWNvbG9yOiAjODJjNmQxO1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrYm94X19sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMDk0ZjcyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5idXR0b25fX3NpZ3VpZW50ZSB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4vLyAgSW5pY2lvIENoZWNrIGJveCBcclxuICAuY2hlY2tib3ggbGFiZWw6YWZ0ZXIsIFxyXG4gIC5yYWRpbyBsYWJlbDphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja2JveCAuY3IsXHJcbiAgLnJhZGlvIC5jciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjODJjNmQxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcclxuICAgICAgd2lkdGg6IDEuM2VtO1xyXG4gICAgICBoZWlnaHQ6IDEuM2VtO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xyXG4gIH1cclxuICBcclxuICAucmFkaW8gLmNyIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2tib3ggLmNyIC5jci1pY29uLFxyXG4gIC5yYWRpbyAuY3IgLmNyLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYWRpbyAuY3IgLmNyLWljb24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMC4wNGVtO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2tib3ggbGFiZWwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4gIC5yYWRpbyBsYWJlbCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2tib3ggbGFiZWwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgLmNyID4gLmNyLWljb24sXHJcbiAgLnJhZGlvIGxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIC5jciA+IC5jci1pY29uIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzKSByb3RhdGVaKC0yMGRlZyk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbjtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrYm94IGxhYmVsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLmNyID4gLmNyLWljb24sXHJcbiAgLnJhZGlvIGxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLmNyID4gLmNyLWljb24ge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja2JveCBsYWJlbCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQgKyAuY3IsXHJcbiAgLnJhZGlvIGxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZCArIC5jciB7XHJcbiAgICAgIG9wYWNpdHk6IC41O1xyXG4gIH1cclxuXHJcbi8vICBGaW4gQ2hlY2sgYm94ICIsIjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzA5NGY3MjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNvbnRhaW5lckZvdG8ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uY29udGFpbmVyRm90b19fYm90b24ge1xuICBib3gtc2hhZG93OiA4cHggNnB4IDEzcHggMHB4ICM4ODg4ODg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxNXZoO1xuICB3aWR0aDogMTV2aDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJjNmQxO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci13aWR0aDogNXB4O1xufVxuXG4uaW5wdXRfX3RleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1jb2xvcjogIzgyYzZkMTtcbn1cblxuLmNoZWNrYm94X19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzA5NGY3MjtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25fX3NpZ3VpZW50ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NGY3MjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY2hlY2tib3ggbGFiZWw6YWZ0ZXIsXG4ucmFkaW8gbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jaGVja2JveCAuY3IsXG4ucmFkaW8gLmNyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MmM2ZDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgd2lkdGg6IDEuM2VtO1xuICBoZWlnaHQ6IDEuM2VtO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuLnJhZGlvIC5jciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNoZWNrYm94IC5jciAuY3ItaWNvbixcbi5yYWRpbyAuY3IgLmNyLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMjAlO1xufVxuXG4ucmFkaW8gLmNyIC5jci1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMDRlbTtcbn1cblxuLmNoZWNrYm94IGxhYmVsIGlucHV0W3R5cGU9Y2hlY2tib3hdLFxuLnJhZGlvIGxhYmVsIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNoZWNrYm94IGxhYmVsIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNyID4gLmNyLWljb24sXG4ucmFkaW8gbGFiZWwgaW5wdXRbdHlwZT1yYWRpb10gKyAuY3IgPiAuY3ItaWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMykgcm90YXRlWigtMjBkZWcpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xufVxuXG4uY2hlY2tib3ggbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jciA+IC5jci1pY29uLFxuLnJhZGlvIGxhYmVsIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAuY3IgPiAuY3ItaWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNoZWNrYm94IGxhYmVsIGlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkICsgLmNyLFxuLnJhZGlvIGxhYmVsIGlucHV0W3R5cGU9cmFkaW9dOmRpc2FibGVkICsgLmNyIHtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/registro/registro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCheck */ "./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");




//import { ImagePicker } from '@ionic-native/image-picker/ngx';





var RegistroPage = /** @class */ (function () {
    function RegistroPage(menuCtrl, transfer, rs, http, navCtrl, loadingController, camera, file) {
        this.menuCtrl = menuCtrl;
        this.transfer = transfer;
        this.rs = rs;
        this.http = http;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.camera = camera;
        this.file = file;
        this.toschecked = false;
        this.soyasesorchecked = false;
        this.checkIcon = _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
        this.TIME_IN_MS = 5000;
        this.irFinalizar = function () {
            window.localStorage.setItem("newUser", JSON.stringify(this.newUser));
            console.log("this.newUser", this.newUser);
        };
        this.finalizarRegistro = function () {
            var _this = this;
            console.log("ROOTURL", this.rs.ROOTURL);
            this.http.setRequestTimeout(5.0);
            this.presentLoading();
            this.http.post(this.rs.ROOTURL + "Mailchimp/register_audience.php", {
                "name": this.newUser.nombre,
                "lastname": this.newUser.apellido,
                "email": this.newUser.email,
                "phone": this.newUser.celular,
            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                .then(function (data) {
                console.log("data", data.data);
            })
                .catch(function (error) {
                //this.loader.dismiss();
                console.log(error);
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
            this.http.post(this.rs.ROOTURL + "Usuarios/agregarUsuario.php", {
                "nombreApellido": this.newUser.nombre + " " + this.newUser.apellido,
                "usuario": this.newUser.usuario,
                "celular": this.newUser.celular,
                "email": this.newUser.email,
                "password": this.newUser.password,
                "curp": this.newUser.curp,
                "rfc": this.newUser.rfc,
                "ciudad": this.newUser.ciudad,
                "zonaParaCubrir": this.newUser.zonaParaCubrir,
                "horarioParaCubrir": this.newUser.horarioParaCubrir,
                "terminosCondiciones": this.newUser.terminosCondiciones,
                "politicasPrivacidad": this.newUser.politicasPrivacidad,
                "notificaciones": this.newUser.notificaciones,
                "fotoPerfil": this.newUser.fotoPerfil,
                "empresa": this.newUser.empresa,
                "desdeCuando": this.newUser.desdeCuando,
                "datosTarjeta1": this.newUser.datosTarjeta1,
                "datosTarjeta2": this.newUser.datosTarjeta2,
                "datosTarjeta3": this.newUser.datosTarjeta3,
                "datosTarjeta4": this.newUser.datosTarjeta4,
                "asesorIndependiente": this.newUser.asesorIndependiente,
                "accesoUbicacion": this.newUser.accesoUbicacion,
                "fotoPortada": this.newUser.fotoPortada,
                "pushToken": this.newUser.pushToken
            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                .then(function (data) {
                // let json = JSON.parse(data.data);
                alert("Registro completado correctamente, ahora puedes inciar sesión.");
                console.log("JSON", data);
                _this.loader.dismiss();
                _this.navCtrl.navigateRoot('/inicio');
            })
                .catch(function (error) {
                _this.loader.dismiss();
                console.log(error);
                console.log(error.status);
                alert(error.error);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
        };
        this.fileUrl = null;
    }
    RegistroPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
        this.newUser = {
            nombre: '',
            apellido: '',
            usuario: '',
            celular: '',
            email: '',
            password: '',
            curp: '',
            rfc: '',
            ciudad: '',
            zonaParaCubrir: '',
            horarioParaCubrir: '',
            terminosCondiciones: 0,
            politicasPrivacidad: 0,
            notificaciones: 0,
            fotoPerfil: '',
            empresa: '',
            desdeCuando: '',
            datosTarjeta1: '',
            datosTarjeta2: '',
            datosTarjeta3: '',
            datosTarjeta4: '',
            asesorIndependiente: 0,
            accesoUbicacion: 0,
            fotoPortada: '',
            pushToken: ''
        };
    };
    RegistroPage.prototype.ionViewDidEnter = function () {
    };
    RegistroPage.prototype.presentLoading = function () {
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
    RegistroPage.prototype.asesorIndependienteClick = function () {
        if (this.newUser.asesorIndependiente == 0) {
            this.newUser.asesorIndependiente = 1;
        }
        else {
            if (this.newUser.asesorIndependiente == 1) {
                this.newUser.asesorIndependiente = 0;
            }
        }
        console.log(this.newUser.asesorIndependiente);
    };
    /*  buscarCurp()
      {
        var options = {
          quality: 80,
          outputType: 0
        };
        this.imagePicker.getPictures(options).then((results) => {
          for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
            this.fileUrl = results[i]
    
            const fileTransfer: FileTransferObject = this.transfer.create();
            const uploadOpts: FileUploadOptions = {
              fileKey: 'file',
              fileName: this.fileUrl.substr(this.fileUrl.lastIndexOf('/') + 1)
            };
    
            fileTransfer.upload(this.fileUrl, this.rs.ROOTURL+"Docs/uploadDoc.php?type=CURP", uploadOpts)
                .then((data) => {
                  console.log(data);
                 var respData = data.response
                  console.log(respData);
                  this.newUser.curp = respData;
                }, (err) => {
                  console.log(err);
                });
    
          }
        }, (err) => { });
      }*/
    RegistroPage.prototype.buscarFotoPerfil = function (type) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.fileUrl = imageData;
            var fileTransfer = _this.transfer.create();
            var uploadOpts = {
                fileKey: 'file',
                fileName: _this.fileUrl.substr(_this.fileUrl.lastIndexOf('/') + 1)
            };
            _this.presentLoading();
            fileTransfer.upload(_this.fileUrl, _this.rs.ROOTURL + "Docs/uploadDoc.php?type=FOTOPERFIL", uploadOpts)
                .then(function (data) {
                console.log(data);
                var respData = data.response;
                console.log(respData);
                _this.newUser.fotoPerfil = respData;
                _this.loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
        });
    };
    /*  buscarFotoPerfil_old()
      {
        var options = {
          quality: 80,
          outputType: 0
        };
        this.imagePicker.getPictures(options).then((results) => {
          for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
            this.fileUrl = results[i]
    
            const fileTransfer: FileTransferObject = this.transfer.create();
            const uploadOpts: FileUploadOptions = {
              fileKey: 'file',
              fileName: this.fileUrl.substr(this.fileUrl.lastIndexOf('/') + 1)
            };
    
            fileTransfer.upload(this.fileUrl, this.rs.ROOTURL+"Docs/uploadDoc.php?type=FOTOPERFIL", uploadOpts)
                .then((data) => {
                  console.log(data);
                  var respData = data.response
                  console.log(respData);
                  this.newUser.fotoPerfil = respData;
                }, (err) => {
                  console.log(err);
                });
    
          }
        }, (err) => { });
      }*/
    RegistroPage.prototype.terminosClick = function () {
        if (this.newUser.terminosCondiciones == 0) {
            this.newUser.terminosCondiciones = 1;
        }
        else {
            if (this.newUser.terminosCondiciones == 1) {
                this.newUser.terminosCondiciones = 0;
            }
        }
        console.log(this.newUser.terminosCondiciones);
    };
    RegistroPage.prototype.notificacionesClick = function () {
        if (this.newUser.notificaciones == 0) {
            this.newUser.notificaciones = 1;
        }
        else {
            if (this.newUser.notificaciones == 1) {
                this.newUser.notificaciones = 0;
            }
        }
        //console.log(this.newUser.notificaciones)
    };
    RegistroPage.prototype.poliitcasClick = function () {
        if (this.newUser.politicasPrivacidad == 0) {
            this.newUser.politicasPrivacidad = 1;
        }
        else {
            if (this.newUser.politicasPrivacidad == 1) {
                this.newUser.politicasPrivacidad = 0;
            }
        }
        console.log(this.newUser.politicasPrivacidad);
    };
    RegistroPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
        { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] }
    ]; };
    RegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! raw-loader!./registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/registro/registro.page.html"),
            styles: [__webpack_require__(/*! ./registro.page.scss */ "./src/app/registro/registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"], _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"]])
    ], RegistroPage);
    return RegistroPage;
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
//# sourceMappingURL=registro-registro-module-es5.js.map