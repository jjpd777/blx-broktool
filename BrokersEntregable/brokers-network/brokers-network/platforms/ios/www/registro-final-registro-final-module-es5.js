(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-final-registro-final-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/registro-final/registro-final.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registro-final/registro-final.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"    position: absolute;\r\n    z-index: 9999;\r\n    left: 6vw;\r\n    top: 2vw;\r\n    color: white;\">\r\n  <ion-icon size=\"large\" name=\"arrow-back\" routerLink=\"/perfil-main\"></ion-icon>\r\n</div>\r\n<app-menu-registro></app-menu-registro>\r\n\r\n<ion-content>\r\n<!--  <div class=\"row\" style=\" margin-bottom: 25px; height: 10vh;\">\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"form-control button__uploadImg\"\r\n        id=\"exampleInputEmail1\"\r\n        aria-describedby=\"emailHelp\"\r\n      >\r\n        Subir foto de portada\r\n      </button>\r\n    </div>\r\n  </div>-->\r\n\r\n  <div class=\"container\" style=\"margin-top: 25px\">\r\n    \r\n    <div class=\"row d-flex justify-content-center\">\r\n\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Nombre y Apellido\" [(ngModel)]=\"user.nombreApellido\" />\r\n        </div>\r\n      </div>\r\n      <!--      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control input__text\" placeholder=\"Usuario\" [(ngModel)]=\"newUser.usuario\"/>\r\n              </div>\r\n            </div>-->\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" class=\"form-control input__text\" placeholder=\"Email\" [(ngModel)]=\"user.email\"/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" class=\"form-control input__text\" placeholder=\"Password\" [(ngModel)]=\"user.password\" />\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input\r\n                  readonly\r\n                  placeholder=\"Desde cuando\"\r\n                  class=\"form-control input__text\"\r\n                  #dp=\"bsDatepicker\"\r\n                  [(ngModel)]=\"user.desdeCuando\"\r\n                  bsDatepicker\r\n                  [bsConfig]=\"{ containerClass: 'theme-blue' }\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"checkbox\">\r\n        <label class=\"checkbox__label\">\r\n          <input type=\"checkbox\" [(ngModel)]=\"asesorChecked\" (click)=\"asesorIndependienteClick()\">\r\n          <span class=\"cr\"><i class=\"cr-icon fa fa-check\"></i></span>\r\n          Soy asesor independiente\r\n        </label>\r\n      </div>\r\n\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"number\" class=\"form-control input__text\" placeholder=\"Celular\" [(ngModel)]=\"user.celular\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Sitio Web\" [(ngModel)]=\"user.sitioweb\" />\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <!--     <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n             <div class=\"form-group\" style=\"text-align: right\">\r\n               <input type=\"button\" class=\"form-control button__siguiente\" value=\"Subir CURP \" (click)=\"buscarCurp()\"/>\r\n               <i *ngIf=\"newUser.curp!=''\" class=\"cr-icon fa fa-check\" style=\"color: #094F72;\"></i>\r\n             </div>\r\n           </div>-->\r\n\r\n      <!--\r\n            <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control input__text\" placeholder=\"RFC\" [(ngModel)]=\"newUser.rfc\" />\r\n              </div>\r\n            </div>\r\n      -->\r\n\r\n            <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control input__text\" placeholder=\"Ciudad\" [(ngModel)]=\"user.ciudad\"/>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control input__text\" placeholder=\"Zonas para cubrir\"  [(ngModel)]=\"user.zonaParaCubrir\"/>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control input__text\" placeholder=\"Horario para cubrir citas\" [(ngModel)]=\"user.horarioParaCubrir\"/>\r\n              </div>\r\n            </div>\r\n\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input\r\n                  type=\"text\"\r\n                  class=\"form-control input__text\"\r\n                  placeholder=\"Empresa\" [(ngModel)]=\"user.empresa\"\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n<!--\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n\r\n        <div class=\"checkbox\">\r\n          <label class=\"checkbox__label\">\r\n            <input type=\"checkbox\" value=\"\" (click)=\"terminosClick()\">\r\n            <span class=\"cr\"><i class=\"cr-icon fa fa-check\"></i></span>\r\n            He leído términos y condiciones\r\n          </label>\r\n        </div>\r\n\r\n        &lt;!&ndash;        <div class=\"checkbox\">\r\n                  <label class=\"checkbox__label\">\r\n                    <input type=\"checkbox\" value=\"\" (click)=\"poliitcasClick()\">\r\n                    <span class=\"cr\"><i class=\"cr-icon fa fa-check\"></i></span>\r\n                    Acepto política de privacidad\r\n                  </label>\r\n                </div>\r\n\r\n                <div class=\"checkbox\">\r\n                  <label class=\"checkbox__label\">\r\n                    <input type=\"checkbox\" value=\"\" (click)=\"notificacionesClick()\">\r\n                    <span class=\"cr\"><i class=\"cr-icon fa fa-check\"></i></span>\r\n                    Deseo recibir notificaciones\r\n                  </label>\r\n                </div>&ndash;&gt;\r\n      </div>-->\r\n\r\n     <!-- <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input\r\n                  [(ngModel)]=\"user.datosTarjeta1\"\r\n            type=\"text\"\r\n            class=\"form-control input__text\"\r\n            placeholder=\"Datos de tarjeta\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input\r\n                  [(ngModel)]=\"user.datosTarjeta2\"\r\n            type=\"text\"\r\n            class=\"form-control input__text\"\r\n            placeholder=\"Datos de tarjeta\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            [(ngModel)]=\"user.datosTarjeta3\"\r\n            class=\"form-control input__text\"\r\n            placeholder=\"Datos de tarjeta\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input\r\n                  [(ngModel)]=\"user.datosTarjeta4\"\r\n            type=\"text\"\r\n            class=\"form-control input__text\"\r\n            placeholder=\"Datos de tarjeta\"\r\n          />\r\n        </div>\r\n      </div>\r\n-->\r\n<!--\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n\r\n        <div class=\"checkbox\">\r\n          <label class=\"checkbox__label\">\r\n            <input type=\"checkbox\" value=\"\" (click)=\"accesoUbicacionClick()\">\r\n            <span class=\"cr\"><i class=\"cr-icon fa fa-check\"></i></span>\r\n            Permitir que Broktool acceda a tu ubicación mientras la app está en uso\r\n          </label>\r\n        </div>\r\n\r\n      </div>\r\n-->\r\n\r\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"button\"\r\n            class=\"form-control button__siguiente\"\r\n            value=\"Guardar\"\r\n            routerLink=\"/perfil-main\"\r\n            (click)=\"actualizarRegistro()\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<app-footer-blue></app-footer-blue>\r\n"

/***/ }),

/***/ "./src/app/registro-final/registro-final-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/registro-final/registro-final-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RegistroFinalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroFinalPageRoutingModule", function() { return RegistroFinalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registro_final_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro-final.page */ "./src/app/registro-final/registro-final.page.ts");




var routes = [
    {
        path: '',
        component: _registro_final_page__WEBPACK_IMPORTED_MODULE_3__["RegistroFinalPage"]
    }
];
var RegistroFinalPageRoutingModule = /** @class */ (function () {
    function RegistroFinalPageRoutingModule() {
    }
    RegistroFinalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegistroFinalPageRoutingModule);
    return RegistroFinalPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/registro-final/registro-final.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/registro-final/registro-final.module.ts ***!
  \*********************************************************/
/*! exports provided: RegistroFinalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroFinalPageModule", function() { return RegistroFinalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_final_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-final-routing.module */ "./src/app/registro-final/registro-final-routing.module.ts");
/* harmony import */ var _registro_final_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-final.page */ "./src/app/registro-final/registro-final.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");








// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

var RegistroFinalPageModule = /** @class */ (function () {
    function RegistroFinalPageModule() {
    }
    RegistroFinalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                // BrowserAnimationsModule,
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                _registro_final_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroFinalPageRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_registro_final_page__WEBPACK_IMPORTED_MODULE_6__["RegistroFinalPage"]]
        })
    ], RegistroFinalPageModule);
    return RegistroFinalPageModule;
}());



/***/ }),

/***/ "./src/app/registro-final/registro-final.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/registro-final/registro-final.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  color: #094f72;\n  font-weight: 700;\n}\n\n::-moz-placeholder {\n  color: #094f72;\n  font-weight: 700;\n}\n\n::-ms-input-placeholder {\n  color: #094f72;\n  font-weight: 700;\n}\n\n::placeholder {\n  color: #094f72;\n  font-weight: 700;\n}\n\n.input__text {\n  text-align: center;\n  border-radius: 50px;\n  border-color: #82c6d1;\n}\n\n.checkbox__label {\n  font-size: 1em;\n  color: #094f72;\n  text-align: center !important;\n}\n\n.button__siguiente {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #094f72;\n  color: white;\n  font-weight: 700;\n}\n\n.button__uploadImg {\n  background-color: #82c6d1;\n  color: white;\n  height: 100%;\n  border-radius: 0px;\n}\n\n.checkbox label:after,\n.radio label:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.checkbox .cr,\n.radio .cr {\n  position: relative;\n  display: inline-block;\n  border: 2px solid #82c6d1;\n  border-radius: 0.25em;\n  width: 1.3em;\n  height: 1.3em;\n  float: left;\n  margin-right: 0.5em;\n}\n\n.radio .cr {\n  border-radius: 50%;\n}\n\n.checkbox .cr .cr-icon,\n.radio .cr .cr-icon {\n  position: absolute;\n  font-size: 0.8em;\n  line-height: 0;\n  top: 50%;\n  left: 20%;\n}\n\n.radio .cr .cr-icon {\n  margin-left: 0.04em;\n}\n\n.checkbox label input[type=checkbox],\n.radio label input[type=radio] {\n  display: none;\n}\n\n.checkbox label input[type=checkbox] + .cr > .cr-icon,\n.radio label input[type=radio] + .cr > .cr-icon {\n  -webkit-transform: scale(3) rotateZ(-20deg);\n          transform: scale(3) rotateZ(-20deg);\n  opacity: 0;\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n}\n\n.checkbox label input[type=checkbox]:checked + .cr > .cr-icon,\n.radio label input[type=radio]:checked + .cr > .cr-icon {\n  -webkit-transform: scale(1) rotateZ(0deg);\n          transform: scale(1) rotateZ(0deg);\n  opacity: 1;\n}\n\n.checkbox label input[type=checkbox]:disabled + .cr,\n.radio label input[type=radio]:disabled + .cr {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9neW9zb2x1dGlvbnMvRG9jdW1lbnRzL0FwcHMvYnJva2Vycy1uZXR3b3JrL3NyYy9hcHAvcmVnaXN0cm8tZmluYWwvcmVnaXN0cm8tZmluYWwucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Ryby1maW5hbC9yZWdpc3Ryby1maW5hbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURIQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREhBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FESEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTs7RUFFSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTs7RUFFSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBOztFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7O0VBRUksYUFBQTtBQ0FKOztBREdBOztFQUVJLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQ0FKOztBREdBOztFQUVJLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSxVQUFBO0FDQUo7O0FER0E7O0VBRUksWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cm8tZmluYWwvcmVnaXN0cm8tZmluYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzA5NGY3MjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuaW5wdXRfX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODJjNmQxO1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrYm94X19sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMDk0ZjcyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5idXR0b25fX3NpZ3VpZW50ZSB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5idXR0b25fX3VwbG9hZEltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJjNmQxOyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICBcclxuLy8gIEluaWNpbyBDaGVjayBib3ggXHJcbi5jaGVja2JveCBsYWJlbDphZnRlciwgXHJcbi5yYWRpbyBsYWJlbDphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jaGVja2JveCAuY3IsXHJcbi5yYWRpbyAuY3Ige1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzgyYzZkMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xyXG4gICAgd2lkdGg6IDEuM2VtO1xyXG4gICAgaGVpZ2h0OiAxLjNlbTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xyXG59XHJcblxyXG4ucmFkaW8gLmNyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNoZWNrYm94IC5jciAuY3ItaWNvbixcclxuLnJhZGlvIC5jciAuY3ItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMjAlO1xyXG59XHJcblxyXG4ucmFkaW8gLmNyIC5jci1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjA0ZW07XHJcbn1cclxuXHJcbi5jaGVja2JveCBsYWJlbCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbi5yYWRpbyBsYWJlbCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNoZWNrYm94IGxhYmVsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIC5jciA+IC5jci1pY29uLFxyXG4ucmFkaW8gbGFiZWwgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgLmNyID4gLmNyLWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgzKSByb3RhdGVaKC0yMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluO1xyXG59XHJcblxyXG4uY2hlY2tib3ggbGFiZWwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuY3IgPiAuY3ItaWNvbixcclxuLnJhZGlvIGxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLmNyID4gLmNyLWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNoZWNrYm94IGxhYmVsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCArIC5jcixcclxuLnJhZGlvIGxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZCArIC5jciB7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufVxyXG5cclxuLy8gIEZpbiBDaGVjayBib3hcclxuICAiLCI6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwOTRmNzI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pbnB1dF9fdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyLWNvbG9yOiAjODJjNmQxO1xufVxuXG4uY2hlY2tib3hfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjMDk0ZjcyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbl9fc2lndWllbnRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b25fX3VwbG9hZEltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MmM2ZDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5jaGVja2JveCBsYWJlbDphZnRlcixcbi5yYWRpbyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNoZWNrYm94IC5jcixcbi5yYWRpbyAuY3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAycHggc29saWQgIzgyYzZkMTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICB3aWR0aDogMS4zZW07XG4gIGhlaWdodDogMS4zZW07XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4ucmFkaW8gLmNyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2hlY2tib3ggLmNyIC5jci1pY29uLFxuLnJhZGlvIC5jciAuY3ItaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAyMCU7XG59XG5cbi5yYWRpbyAuY3IgLmNyLWljb24ge1xuICBtYXJnaW4tbGVmdDogMC4wNGVtO1xufVxuXG4uY2hlY2tib3ggbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF0sXG4ucmFkaW8gbGFiZWwgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2hlY2tib3ggbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuY3IgPiAuY3ItaWNvbixcbi5yYWRpbyBsYWJlbCBpbnB1dFt0eXBlPXJhZGlvXSArIC5jciA+IC5jci1pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgzKSByb3RhdGVaKC0yMGRlZyk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG59XG5cbi5jaGVja2JveCBsYWJlbCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNyID4gLmNyLWljb24sXG4ucmFkaW8gbGFiZWwgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIC5jciA+IC5jci1pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2hlY2tib3ggbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQgKyAuY3IsXG4ucmFkaW8gbGFiZWwgaW5wdXRbdHlwZT1yYWRpb106ZGlzYWJsZWQgKyAuY3Ige1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/registro-final/registro-final.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/registro-final/registro-final.page.ts ***!
  \*******************************************************/
/*! exports provided: RegistroFinalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroFinalPage", function() { return RegistroFinalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");







var RegistroFinalPage = /** @class */ (function () {
    function RegistroFinalPage(localeService, menuCtrl, http, rs) {
        this.localeService = localeService;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.rs = rs;
        this.user = {
            nombreApellido: '',
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
        this.newUser = {
            nombreApellido: '',
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
        this.asesorChecked = false;
        this.actualizarRegistro = function () {
            var _this = this;
            console.log("ROOTURL", this.rs.ROOTURL);
            console.log("USER", this.user);
            this.http.setRequestTimeout(5.0);
            this.http.post(this.rs.ROOTURL + "Usuarios/editarUsuario.php", {
                "id_usuario": this.user.id_usuario,
                "sitioweb": this.user.sitioweb,
                "nombreApellido": this.user.nombreApellido,
                "usuario": this.user.usuario,
                "celular": this.user.celular,
                "email": this.user.email,
                "password": this.user.password,
                "ciudad": this.user.ciudad,
                "zonaParaCubrir": this.user.zonaParaCubrir,
                "horarioParaCubrir": this.user.horarioParaCubrir,
                "empresa": this.user.empresa,
                "desdeCuando": this.user.desdeCuando,
                "datosTarjeta1": this.user.datosTarjeta1,
                "datosTarjeta2": this.user.datosTarjeta2,
                "datosTarjeta3": this.user.datosTarjeta3,
                "datosTarjeta4": this.user.datosTarjeta4,
                "asesorIndependiente": this.user.asesorIndependiente,
                "pushToken": ""
            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                .then(function (data) {
                window.localStorage.setItem("user_info", JSON.stringify(_this.user));
                console.log("JSON", data);
            })
                .catch(function (error) {
                console.log(error);
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
        };
        this.setDatepickerLanguage();
    }
    RegistroFinalPage.prototype.onScrollEvent = function () {
        this.datepicker.hide();
    };
    RegistroFinalPage.prototype.ngOnInit = function () {
    };
    RegistroFinalPage.prototype.getUserInfo = function () {
        var _this = this;
        console.log("window.localStorage.getItem(\"id_usuario\")", window.localStorage.getItem("id_usuario"));
        this.http.post(this.rs.ROOTURL + "Usuarios/getUsuario.php", {
            "id_usuario": window.localStorage.getItem("id_usuario"),
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(function (data) {
            _this.user = JSON.parse(data.data)[0];
            console.log("this.user", _this.user);
            _this.user.desdeCuando = new Date(_this.user.desdeCuando);
            if (_this.user.asesorIndependiente == 0) {
                _this.asesorChecked = false;
            }
            else {
                _this.asesorChecked = true;
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
    };
    RegistroFinalPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
        this.getUserInfo();
        //this.newUser =  JSON.parse(window.localStorage.getItem("newUser"))
        //console.log("this.newUser Registro Final",this.newUser)
    };
    RegistroFinalPage.prototype.setDatepickerLanguage = function () {
        Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["defineLocale"])('es', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["esLocale"]);
        this.localeService.use('es');
    };
    RegistroFinalPage.prototype.asesorIndependienteClick = function () {
        if (this.user.asesorIndependiente == 0) {
            this.user.asesorIndependiente = 1;
        }
        else {
            if (this.user.asesorIndependiente == 1) {
                this.user.asesorIndependiente = 0;
            }
        }
        console.log(this.user.asesorIndependiente);
    };
    RegistroFinalPage.prototype.accesoUbicacionClick = function () {
        if (this.newUser.accesoUbicacion == 0) {
            this.newUser.accesoUbicacion = 1;
        }
        else {
            if (this.newUser.accesoUbicacion == 1) {
                this.newUser.accesoUbicacion = 0;
            }
        }
        console.log(this.newUser.accesoUbicacion);
    };
    RegistroFinalPage.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsLocaleService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
        { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_3__["RootSettingsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerDirective"])
    ], RegistroFinalPage.prototype, "datepicker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], RegistroFinalPage.prototype, "onScrollEvent", null);
    RegistroFinalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro-final',
            template: __webpack_require__(/*! raw-loader!./registro-final.page.html */ "./node_modules/raw-loader/index.js!./src/app/registro-final/registro-final.page.html"),
            styles: [__webpack_require__(/*! ./registro-final.page.scss */ "./src/app/registro-final/registro-final.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsLocaleService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_3__["RootSettingsService"]])
    ], RegistroFinalPage);
    return RegistroFinalPage;
}());



/***/ })

}]);
//# sourceMappingURL=registro-final-registro-final-module-es5.js.map