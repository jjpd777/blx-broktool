(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-main-perfil-main-module"],{

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faStar.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faStar.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'star';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f005';
var svgPathData = 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z';

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

exports.faStar = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faStarHalf.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faStarHalf.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'star-half';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f089';
var svgPathData = 'M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z';

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

exports.faStarHalf = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/perfil-main/perfil-main.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/perfil-main/perfil-main.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\" style=\"text-align: center; padding: 0px;\">\r\n    <img (click)=\"buscarFoto('PORTADA')\"\r\n    class=\"imge\"\r\n         src=\"{{URLROOT}}Docs/{{user_info.fotoPortada}}\" (error)=\"errorImagePortada(img)\" #img\r\n    />\r\n  </div>\r\n  <div\r\n      class=\"col-12 col-sm-12 col-md-12 col-lg-12\"\r\n      style=\"text-align: center;\"\r\n    >\r\n      <img class=\"container__Foto\" (click)=\"buscarFoto('PERFIL')\"\r\n        style=\"border-radius: 50%;     width: 20vh;\r\n      height: 20vh; margin-top: -15vh;\"\r\n        src=\"{{URLROOT}}Docs/{{user_info.fotoPerfil}}\"  (error)=\"errorImageFoto(img2)\" #img2\r\n      />\r\n    </div>\r\n\r\n\r\n<div class=\"container\" style=\"color: #094f72;\">\r\n  <div class=\"row\">\r\n    <div\r\n      class=\"col-12 col-sm-12 col-md-12 col-lg-12\"\r\n      style=\"text-align: center;\"\r\n    >\r\n      <h1 class=\"titulo\">{{user_info.nombreApellido}}</h1>\r\n      <div>\r\n        <p class=\"subtitle\">{{user_info.empresa}}</p>\r\n        <p class=\"subtitle__asesor\" *ngIf=\"user_info.asesorIndependiente==1\">Asesor Independiente</p>\r\n        <p class=\"subtitle__asesor\">Desde {{user_info.desdeCuando | date:'yyyy'}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\" style=\"text-align: center; margin-top: 3vh;\">\r\n\r\n        <div>\r\n          <p class=\"datosStyle\">{{user_info.email}}</p>\r\n          <p class=\"datosStyle\" *ngIf=\"user_info.celular!=''\">{{user_info.celular}}</p>\r\n        </div>\r\n\r\n    </div>\r\n    <div\r\n      class=\"col-12 col-sm-12 col-md-12 col-lg-12\"\r\n      style=\"text-align: center; margin-top: 3vh; \"\r\n    >\r\n<!--      <div>\r\n        <p class=\"subtitle\">Experiencia y certificaciones</p>\r\n      </div>-->\r\n<!--      <div style=\"margin-top: 3vh; margin-bottom: 4vh;\">\r\n        <p class=\"subtitle\">Calificación</p>\r\n        <div>\r\n          <fa-icon class=\"icon__espaciado\" [icon]=\"iconStar\" size=\"lg\"></fa-icon>\r\n          <fa-icon class=\"icon__espaciado\" [icon]=\"iconStar\" size=\"lg\"></fa-icon>\r\n          <fa-icon class=\"icon__espaciado\" [icon]=\"iconStar\" size=\"lg\"></fa-icon>\r\n          <fa-icon class=\"icon__espaciado\" [icon]=\"iconHalfStar\" size=\"lg\"></fa-icon>\r\n        </div>\r\n      </div>-->\r\n    </div>\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 align-self-center\" style=\"padding-top: 15px\">\r\n      <div class=\"form-group\">\r\n        <input type=\"button\" class=\"form-control button__siguiente\" value=\"Editar Perfil\" (click)=\"irRegistroFinal()\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button>\r\n    <!-- <a routerLink=\"/\"> -->\r\n    <img src=\"/assets/images/floatmenu_2.png\">\r\n    <!-- </a> -->\r\n  </ion-fab-button>\r\n  <ion-fab-list side=\"top\">\r\n    <ion-fab-button color=\"light\" routerLink=\"/portfolio\" >\r\n      <img src=\"/assets/images/portfolio.png\">\r\n    </ion-fab-button>\r\n    <ion-fab-button color=\"light\" routerLink=\"/network\">\r\n        <img src=\"/assets/images/globe.png\">\r\n    </ion-fab-button>\r\n    <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\r\n      <img src=\"/assets/images/study.png\">\r\n    </ion-fab-button>\r\n    <ion-fab-button color=\"light\" routerLink=\"/clientes\">\r\n      <img src=\"/assets/images/user.png\">\r\n    </ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>\r\n</ion-content>\r\n<app-footer-blue></app-footer-blue>\r\n"

/***/ }),

/***/ "./src/app/perfil-main/perfil-main-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/perfil-main/perfil-main-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PerfilMainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilMainPageRoutingModule", function() { return PerfilMainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _perfil_main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-main.page */ "./src/app/perfil-main/perfil-main.page.ts");




var routes = [
    {
        path: '',
        component: _perfil_main_page__WEBPACK_IMPORTED_MODULE_3__["PerfilMainPage"]
    }
];
var PerfilMainPageRoutingModule = /** @class */ (function () {
    function PerfilMainPageRoutingModule() {
    }
    PerfilMainPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PerfilMainPageRoutingModule);
    return PerfilMainPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/perfil-main/perfil-main.module.ts":
/*!***************************************************!*\
  !*** ./src/app/perfil-main/perfil-main.module.ts ***!
  \***************************************************/
/*! exports provided: PerfilMainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilMainPageModule", function() { return PerfilMainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-main-routing.module */ "./src/app/perfil-main/perfil-main-routing.module.ts");
/* harmony import */ var _perfil_main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil-main.page */ "./src/app/perfil-main/perfil-main.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var PerfilMainPageModule = /** @class */ (function () {
    function PerfilMainPageModule() {
    }
    PerfilMainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _perfil_main_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilMainPageRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ],
            declarations: [_perfil_main_page__WEBPACK_IMPORTED_MODULE_6__["PerfilMainPage"]]
        })
    ], PerfilMainPageModule);
    return PerfilMainPageModule;
}());



/***/ }),

/***/ "./src/app/perfil-main/perfil-main.page.scss":
/*!***************************************************!*\
  !*** ./src/app/perfil-main/perfil-main.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container__Foto {\n  box-shadow: 8px 6px 13px 0px #888888;\n  border-radius: 50%;\n  height: 15vh;\n  width: 15vh;\n  margin: auto;\n  background-color: #82c6d1;\n  color: white;\n  border-style: solid;\n  border-color: white;\n  border-width: 5px;\n}\n\n.button__siguiente {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #094f72;\n  color: white;\n  font-weight: 700;\n}\n\n.imge {\n  width: 100%;\n  height: 30vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.titulo {\n  text-transform: uppercase;\n}\n\n.subtitle {\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: larger;\n  margin-bottom: 10px;\n}\n\n.subtitle__asesor {\n  text-transform: capitalize;\n  font-size: larger;\n  margin: 0px;\n}\n\n.datosStyle {\n  margin: 0px;\n  font-size: larger;\n}\n\n.icon__espaciado {\n  margin-left: 5px;\n  margin-right: 5px;\n  color: #f3cc30;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9neW9zb2x1dGlvbnMvRG9jdW1lbnRzL0FwcHMvYnJva2Vycy1uZXR3b3JrL3NyYy9hcHAvcGVyZmlsLW1haW4vcGVyZmlsLW1haW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wZXJmaWwtbWFpbi9wZXJmaWwtbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGVyZmlsLW1haW4vcGVyZmlsLW1haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9fRm90byB7XHJcbiAgYm94LXNoYWRvdzogOHB4IDZweCAxM3B4IDBweCAjODg4ODg4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgd2lkdGg6IDE1dmg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MmM2ZDE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbl9fc2lndWllbnRlIHtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTRmNzI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmltZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzB2aDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnN1YnRpdGxlX19hc2Vzb3Ige1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uZGF0b3NTdHlsZSB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi5pY29uX19lc3BhY2lhZG8ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgY29sb3I6ICNmM2NjMzA7XHJcbn1cclxuXHJcblxyXG4iLCIuY29udGFpbmVyX19Gb3RvIHtcbiAgYm94LXNoYWRvdzogOHB4IDZweCAxM3B4IDBweCAjODg4ODg4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTV2aDtcbiAgd2lkdGg6IDE1dmg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyYzZkMTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDVweDtcbn1cblxuLmJ1dHRvbl9fc2lndWllbnRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pbWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzB2aDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc3VidGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnN1YnRpdGxlX19hc2Vzb3Ige1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZGF0b3NTdHlsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLmljb25fX2VzcGFjaWFkbyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogI2YzY2MzMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/perfil-main/perfil-main.page.ts":
/*!*************************************************!*\
  !*** ./src/app/perfil-main/perfil-main.page.ts ***!
  \*************************************************/
/*! exports provided: PerfilMainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilMainPage", function() { return PerfilMainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faStar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faStar */ "./node_modules/@fortawesome/free-solid-svg-icons/faStar.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faStar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faStar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faStarHalf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faStarHalf */ "./node_modules/@fortawesome/free-solid-svg-icons/faStarHalf.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faStarHalf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faStarHalf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");







//import {ImagePicker} from "@ionic-native/image-picker/ngx";



var PerfilMainPage = /** @class */ (function () {
    function PerfilMainPage(rs, menuCtrl, navCtrl, camera, file, transfer, loadingController, http) {
        this.rs = rs;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.file = file;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.http = http;
        this.iconStar = _fortawesome_free_solid_svg_icons_faStar__WEBPACK_IMPORTED_MODULE_2__["faStar"];
        this.iconHalfStar = _fortawesome_free_solid_svg_icons_faStarHalf__WEBPACK_IMPORTED_MODULE_3__["faStarHalf"];
        this.user_info = {
            fotoPerfil: "",
            nombre: ""
        };
        this.fileUrl = null;
        this.id_usuario_ref = window.localStorage.getItem("id_usuario");
    }
    PerfilMainPage.prototype.errorImagePortada = function (img) {
        img.src = "assets/images/portada_holder.jpg";
    };
    PerfilMainPage.prototype.errorImageFoto = function (img) {
        img.src = "assets/images/perfil_holder.jpg";
    };
    PerfilMainPage.prototype.presentLoading = function () {
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
    PerfilMainPage.prototype.ngOnInit = function () {
        this.URLROOT = this.rs.ROOTURL;
    };
    PerfilMainPage.prototype.irRegistroFinal = function () {
        this.navCtrl.navigateRoot('/registro-final');
    };
    PerfilMainPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true);
        this.user_info = JSON.parse(window.localStorage.getItem("user_info"));
        console.log(this.user_info);
        console.log("ROOTURL", this.rs.ROOTURL);
    };
    PerfilMainPage.prototype.buscarFoto = function (type) {
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
            fileTransfer.upload(_this.fileUrl, _this.rs.ROOTURL + "Docs/uploadDocWithIdUser.php?type=FOTO" + type + "&id_usuario=" + _this.id_usuario_ref, uploadOpts)
                .then(function (data) {
                console.log(data);
                var respData = data.response;
                console.log(respData);
                if (type == "PERFIL") {
                    _this.user_info.fotoPerfil = respData;
                }
                else {
                    _this.user_info.fotoPortada = respData;
                }
                _this.loader.dismiss();
                window.localStorage.setItem("user_info", JSON.stringify(_this.user_info));
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            // Handle error
        });
        /*
          var options = {
              quality: 80,
              outputType: 0
            };
            try {
              this.imagePicker.getPictures(options).then((results) => {
                for (var i = 0; i < results.length; i++) {
                  console.log('Image URI: ' + results[i]);
                  this.fileUrl = results[i]
        
                  const fileTransfer: FileTransferObject = this.transfer.create();
                  const uploadOpts: FileUploadOptions = {
                    fileKey: 'file',
                    fileName: this.fileUrl.substr(this.fileUrl.lastIndexOf('/') + 1)
                  };
                  this.presentLoading();
                  fileTransfer.upload(this.fileUrl, this.rs.ROOTURL+"Docs/uploadDocWithIdUser.php?type=FOTO"+type+"&id_usuario="+this.id_usuario_ref, uploadOpts)
                      .then((data) => {
                        console.log(data);
                        var respData = data.response
                        console.log(respData);
                        if (type=="PERFIL")
                        {
                          this.user_info.fotoPerfil = respData;
                        }
                        else
                        {
                          this.user_info.fotoPortada = respData;
                        }
                        this.loader.dismiss();
                        window.localStorage.setItem("user_info",JSON.stringify(this.user_info))
                      }, (err) => {
                        console.log(err);
                      });
        
                }
              }, (err) => { });
            }
            catch (e) {
              console.log("fotoerror",e)
            }
        
        */
    };
    PerfilMainPage.ctorParameters = function () { return [
        { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"] }
    ]; };
    PerfilMainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil-main',
            template: __webpack_require__(/*! raw-loader!./perfil-main.page.html */ "./node_modules/raw-loader/index.js!./src/app/perfil-main/perfil-main.page.html"),
            styles: [__webpack_require__(/*! ./perfil-main.page.scss */ "./src/app/perfil-main/perfil-main.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"]])
    ], PerfilMainPage);
    return PerfilMainPage;
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
//# sourceMappingURL=perfil-main-perfil-main-module-es5.js.map