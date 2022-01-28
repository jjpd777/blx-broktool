(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["network-network-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/network/network.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/network/network.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n\r\n<ion-content>\r\n  <div class=\"row row--header\">\r\n\r\n    <div class=\"header--content\">\r\n      <img style=\"width: 20%;\"\r\n          class=\"imge\"\r\n          src=\"/assets/images/globeBN.png\"\r\n        />\r\n        <div class=\"header--content__textos\">\r\n          <p class=\"header__title\">Mi network</p>\r\n        <p class=\"header__subtitle\">Colaboradores: <span>130</span></p>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container\" style=\"padding-top: 4vh;\">\r\n    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"botonera\" style=\"\">\r\n        <div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 2vw;\">\r\n          <button type=\"button\" class=\"btn btn-network\">Buscar Amigos</button>\r\n        </div>\r\n        <div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 6vw;\">\r\n          <button type=\"button\" class=\"btn btn-network\">Ver mis amigos</button>\r\n        </div>\r\n        <div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 6vw;\">\r\n          <button type=\"button\" class=\"btn btn-network\">Solicitar colaboración</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <img src=\"/assets/images/floatmenu_2.png\" />\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/portfolio\">\r\n        <img src=\"/assets/images/portfolio.png\" />\r\n      </ion-fab-button>\r\n<!--      <ion-fab-button color=\"light\" routerLink=\"/network\">\r\n        <img src=\"/assets/images/globe.png\" />\r\n      </ion-fab-button>-->\r\n      <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\r\n        <img src=\"/assets/images/study.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/clientes\">\r\n        <img src=\"/assets/images/user.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<app-footer-blue></app-footer-blue>\r\n"

/***/ }),

/***/ "./src/app/network/network-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/network/network-routing.module.ts ***!
  \***************************************************/
/*! exports provided: NetworkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPageRoutingModule", function() { return NetworkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network.page */ "./src/app/network/network.page.ts");




var routes = [
    {
        path: '',
        component: _network_page__WEBPACK_IMPORTED_MODULE_3__["NetworkPage"]
    }
];
var NetworkPageRoutingModule = /** @class */ (function () {
    function NetworkPageRoutingModule() {
    }
    NetworkPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NetworkPageRoutingModule);
    return NetworkPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/network/network.module.ts":
/*!*******************************************!*\
  !*** ./src/app/network/network.module.ts ***!
  \*******************************************/
/*! exports provided: NetworkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPageModule", function() { return NetworkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _network_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./network-routing.module */ "./src/app/network/network-routing.module.ts");
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network.page */ "./src/app/network/network.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var NetworkPageModule = /** @class */ (function () {
    function NetworkPageModule() {
    }
    NetworkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _network_routing_module__WEBPACK_IMPORTED_MODULE_5__["NetworkPageRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_network_page__WEBPACK_IMPORTED_MODULE_6__["NetworkPage"]]
        })
    ], NetworkPageModule);
    return NetworkPageModule;
}());



/***/ }),

/***/ "./src/app/network/network.page.scss":
/*!*******************************************!*\
  !*** ./src/app/network/network.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__title {\n  color: white;\n  font-size: 27px;\n  font-weight: 600;\n  margin: 0px;\n  text-transform: uppercase;\n}\n\n.header__subtitle {\n  color: #094f72;\n  font-size: 15px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.btn-network {\n  width: 100%;\n  height: auto;\n  border-radius: 20px;\n  font-size: 20px;\n  background-color: #84ceda;\n  border-color: #84ceda;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 300;\n}\n\n.botonera {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  align-content: space-around;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.row--header {\n  background-color: #84ceda;\n  height: 15vh;\n}\n\n.header--content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.header--content__textos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV0d29yay9DOlxcQml0QnVja2V0XFxBcHBzXFxicm9rZXJzLW5ldHdvcmstaW9zXFxicm9rZXJzLW5ldHdvcmsvc3JjXFxhcHBcXG5ldHdvcmtcXG5ldHdvcmsucGFnZS5zY3NzIiwic3JjL2FwcC9uZXR3b3JrL25ldHdvcmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL25ldHdvcmsvbmV0d29yay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX190aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3N1YnRpdGxlIHtcclxuICBjb2xvcjogIzA5NGY3MjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tbmV0d29yayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NGNlZGE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODRjZWRhO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5ib3RvbmVyYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG4ucm93LS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NGNlZGE7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcblxyXG4uaGVhZGVyLS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci0tY29udGVudF9fdGV4dG9zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59IiwiLmhlYWRlcl9fdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oZWFkZXJfX3N1YnRpdGxlIHtcbiAgY29sb3I6ICMwOTRmNzI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLW5ldHdvcmsge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NGNlZGE7XG4gIGJvcmRlci1jb2xvcjogIzg0Y2VkYTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYm90b25lcmEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucm93LS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRjZWRhO1xuICBoZWlnaHQ6IDE1dmg7XG59XG5cbi5oZWFkZXItLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci0tY29udGVudF9fdGV4dG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/network/network.page.ts":
/*!*****************************************!*\
  !*** ./src/app/network/network.page.ts ***!
  \*****************************************/
/*! exports provided: NetworkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPage", function() { return NetworkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NetworkPage = /** @class */ (function () {
    function NetworkPage() {
    }
    NetworkPage.prototype.ngOnInit = function () {
    };
    NetworkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-network',
            template: __webpack_require__(/*! raw-loader!./network.page.html */ "./node_modules/raw-loader/index.js!./src/app/network/network.page.html"),
            styles: [__webpack_require__(/*! ./network.page.scss */ "./src/app/network/network.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NetworkPage);
    return NetworkPage;
}());



/***/ })

}]);
//# sourceMappingURL=network-network-module-es5.js.map