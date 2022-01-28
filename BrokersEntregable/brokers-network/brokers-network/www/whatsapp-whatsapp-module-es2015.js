(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["whatsapp-whatsapp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/whatsapp/whatsapp.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/whatsapp/whatsapp.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\n\n<ion-content>\n  <div class=\"row\" style=\"background-color: #67adc9; padding: 2vw\">\n    <div class=\"col-2 col-sm-2 col-md-2 col-lg-2 align-self-center\">\n      <ion-icon style=\"color: white;float: left\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    </div>\n    <div class=\"col-8 col-sm-8 col-md-8 col-lg-8 align-self-center\" style=\"margin: 1vw;\">\n      <p class=\"header__subtitle\" style=\"margin-bottom: 0px;text-align: left;color: white; font-weight: bold\">{{whatsappAVer}}</p>\n    </div>\n  </div>\n  <div class=\"container\" style=\"padding-top: 2vw;\">\n    <!--Propiedades-->\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-11 col-sm-11 col-md-11 col-lg-11 align-self-center\">\n        <h4>Mensaje</h4>\n        <div class=\"form-group\">\n          <textarea rows=\"10\" class=\"form-control input__text\" [(ngModel)]=\"mensaje.texto\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <p class=\"ion-no-margin\">Contacto</p>\n          <input type=\"text\" class=\"form-control input__text\" placeholder=\"Nombre - Teléfono\" [(ngModel)]=\"mensaje.contacto\" />\n          <input\n                  style=\"margin-top: 2vw;border-radius: 15px;\"\n                  type=\"button\"\n                  class=\"form-control button__siguiente\"\n                  value=\"Buscar Contacto\"\n                  (click)=\"buscarContacto()\"\n          />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row d-flex justify-content-center\" style=\"margin-top: 2vw\">\n      <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\n        <div class=\"form-group\">\n          <input\n                  type=\"button\"\n                  class=\"form-control button__siguiente\"\n                  value=\"Enviar Mensaje\"\n                  (click)=\"enviarWhatsapp()\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/whatsapp/whatsapp-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/whatsapp/whatsapp-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: WhatsappPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappPageRoutingModule", function() { return WhatsappPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _whatsapp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whatsapp.page */ "./src/app/whatsapp/whatsapp.page.ts");




const routes = [
    {
        path: '',
        component: _whatsapp_page__WEBPACK_IMPORTED_MODULE_3__["WhatsappPage"]
    }
];
let WhatsappPageRoutingModule = class WhatsappPageRoutingModule {
};
WhatsappPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WhatsappPageRoutingModule);



/***/ }),

/***/ "./src/app/whatsapp/whatsapp.module.ts":
/*!*********************************************!*\
  !*** ./src/app/whatsapp/whatsapp.module.ts ***!
  \*********************************************/
/*! exports provided: WhatsappPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappPageModule", function() { return WhatsappPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _whatsapp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./whatsapp-routing.module */ "./src/app/whatsapp/whatsapp-routing.module.ts");
/* harmony import */ var _whatsapp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./whatsapp.page */ "./src/app/whatsapp/whatsapp.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");









let WhatsappPageModule = class WhatsappPageModule {
};
WhatsappPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"],
            _whatsapp_routing_module__WEBPACK_IMPORTED_MODULE_5__["WhatsappPageRoutingModule"]
        ],
        declarations: [_whatsapp_page__WEBPACK_IMPORTED_MODULE_6__["WhatsappPage"]]
    })
], WhatsappPageModule);



/***/ }),

/***/ "./src/app/whatsapp/whatsapp.page.scss":
/*!*********************************************!*\
  !*** ./src/app/whatsapp/whatsapp.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button__siguiente {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #094f72;\n  color: white;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hhdHNhcHAvQzpcXEJpdEJ1Y2tldFxcQXBwc1xcYnJva2Vycy1uZXR3b3JrLWlvc1xcYnJva2Vycy1uZXR3b3JrL3NyY1xcYXBwXFx3aGF0c2FwcFxcd2hhdHNhcHAucGFnZS5zY3NzIiwic3JjL2FwcC93aGF0c2FwcC93aGF0c2FwcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3doYXRzYXBwL3doYXRzYXBwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25fX3NpZ3VpZW50ZSB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbiIsIi5idXR0b25fX3NpZ3VpZW50ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NGY3MjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/whatsapp/whatsapp.page.ts":
/*!*******************************************!*\
  !*** ./src/app/whatsapp/whatsapp.page.ts ***!
  \*******************************************/
/*! exports provided: WhatsappPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappPage", function() { return WhatsappPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");






let WhatsappPage = class WhatsappPage {
    constructor(navCtrl, http, loadingController, rs, contacts) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingController = loadingController;
        this.rs = rs;
        this.contacts = contacts;
        this.mensaje = {
            texto: "",
            contacto: ""
        };
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.whatsappAVer = window.localStorage.getItem("whatsappAVer");
        this.mensajeAVer = window.localStorage.getItem("mensajeAVer");
        this.propiedadWhatsapp = JSON.parse(window.localStorage.getItem("propiedad_a_ver"));
        var whatscliente = window.localStorage.getItem("whatscliente");
        var whatspropiedad = window.localStorage.getItem("whatspropiedad");
        if (whatscliente == "si") {
            this.cliente = JSON.parse(window.localStorage.getItem("cliente_a_ver"));
            this.nombre_contacto = this.cliente.nombre;
            this.telefono_contacto = this.cliente.telefono;
            this.mensaje.contacto = "" + this.nombre_contacto + " - " + this.telefono_contacto;
        }
        if (whatspropiedad == "si") {
            this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"));
            this.nombre_contacto = this.propiedad.nombre;
            this.telefono_contacto = this.propiedad.celular;
            this.mensaje.contacto = "" + this.nombre_contacto + " - " + this.telefono_contacto;
        }
        console.log("whatscliente", whatscliente);
        console.log("whatspropiedad", whatspropiedad);
        if (this.whatsappAVer == "Citas") {
            console.log("this.propiedadWhatsapp", this.propiedadWhatsapp);
            this.mensaje.texto = "Datos de la Propiedad: Nombre:" + this.propiedadWhatsapp.nombre + " - Tipo:" + this.propiedadWhatsapp.tipo + " - Precio:$" + this.propiedadWhatsapp.precio + " - Notas:" + this.propiedadWhatsapp.notas;
        }
        else {
            this.mensaje.texto = this.mensajeAVer;
        }
        console.log("this.whatsappAVer", this.whatsappAVer);
    }
    buscarContacto() {
        this.telefono_contacto = "";
        this.contacts.pickContact().then(contacto => {
            console.log("Contacto", contacto);
            this.nombre_contacto = contacto.name.givenName + " " + contacto.name.familyName;
            for (let tel of contacto.phoneNumbers) {
                if (tel.type == "mobile") {
                    this.telefono_contacto = tel.value;
                }
                else {
                    if (tel.type == "home") {
                        this.telefono_contacto = tel.value;
                    }
                    else {
                        if (tel.type == "work") {
                            this.telefono_contacto = tel.value;
                        }
                    }
                }
            }
            if (this.telefono_contacto == "" && contacto.phoneNumbers.length > 0) {
                this.telefono_contacto = contacto.phoneNumbers[0].value;
            }
            console.log("this.telefono_contacto", this.telefono_contacto);
            if (this.telefono_contacto == "") {
                alert("Este contacto no tiene un teléfono movil asignado.");
            }
            else {
                this.mensaje.contacto = "" + this.nombre_contacto + " - " + this.telefono_contacto;
            }
        });
    }
    goBack() {
        this.navCtrl.pop();
    }
    enviarWhatsapp() {
        var link = "";
        if (this.telefono_contacto[0] != "+") {
            this.telefono_contacto = "+52" + this.telefono_contacto;
        }
        link = "whatsapp://send?phone=" + this.telefono_contacto + "&text=Estimad@ " + this.nombre_contacto + ", ¡Gracias por la confianza! " + this.mensaje.texto;
        window.open(encodeURI(link), '_system');
    }
};
WhatsappPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"] }
];
WhatsappPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-whatsapp',
        template: __webpack_require__(/*! raw-loader!./whatsapp.page.html */ "./node_modules/raw-loader/index.js!./src/app/whatsapp/whatsapp.page.html"),
        styles: [__webpack_require__(/*! ./whatsapp.page.scss */ "./src/app/whatsapp/whatsapp.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"]])
], WhatsappPage);



/***/ })

}]);
//# sourceMappingURL=whatsapp-whatsapp-module-es2015.js.map