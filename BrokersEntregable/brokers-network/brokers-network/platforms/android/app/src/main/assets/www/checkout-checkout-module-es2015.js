(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Solicitud de Servicio</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"tabs/tabs/tab3\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--\n\n\n<ion-content class=\"background ion-padding\">\n&lt;!&ndash;  <h4>Descripción de producto a solicitar</h4>&ndash;&gt;\n  <ion-card style=\"text-align: center\">\n    <div class=\"row\" style=\"padding: 3vw;\">\n      <div class=\"col-4\">\n        <img style=\"margin: 1vw\" src=\"../../assets/images/cooperacion.png\" alt=\"ion\">\n      </div>\n      <div class=\"col-8\">\n        <ion-card-header style=\"    padding: 5px;\">\n          <ion-card-title>CONTRATO DE ARRENDAMIENTO</ion-card-title>\n        </ion-card-header>\n&lt;!&ndash;        <ion-card-content style=\"    padding: 5px;\">\n          Revisa contrato de compraventa propuesto por vendedor.\n        </ion-card-content>&ndash;&gt;\n      </div>\n    </div>\n    <div class=\"row\" style=\"padding: 3vw; text-align: center\">\n      <ion-card-content style=\"    padding: 5px;text-align: center\">\n        Indicaciones especiales para ser tenidas en cuenta al momento de realizar la compra, tiempos de respuesta o algun elemento importante al momento de realizar la compra.\n      </ion-card-content>\n    </div>\n\n    <ion-footer>\n      <ion-row>\n        <ion-col size=\"12\">\n          <form method=\"post\" id=\"pay\" name=\"pay\" >\n            <fieldset>\n&lt;!&ndash;              <p>\n                <label for=\"description\">Descripción</label>\n                <input type=\"text\" name=\"description\" id=\"description\" value=\"Ítem seleccionado\"/>\n              </p>&ndash;&gt;\n              <p>\n                <label>Monto a pagar</label>\n                <input id=\"transaction_amount\" name=\"transaction_amount\" [(ngModel)]=\"form_pago.monto_a_pagar\"/>\n              </p>\n              <p>\n                <label>Número de la tarjeta</label>\n                <input id=\"cardNumber\" type=\"text\" name=\"cardNumber\" data-checkout=\"cardNumber\"\n                       [(ngModel)]=\"form_pago.numero_tarjeta\"\n                       onselectstart=\"return false\"\n                       onpaste=\"return false\"\n                       onCopy=\"return false\"\n                       onCut=\"return false\"\n                       onDrag=\"return false\" onDrop=\"return false\" autocomplete=off />\n              </p>\n              <p>\n                <label>Nombre y apellido</label>\n                <input type=\"text\" name=\"cardholderName\" data-checkout=\"cardholderName\" />\n              </p>\n              <p>\n                <label>Mes de vencimiento</label>\n                <input type=\"text\" name=\"cardExpirationMonth\" data-checkout=\"cardExpirationMonth\"\n                       onselectstart=\"return false\" onpaste=\"return false\" onCopy=\"return false\" onCut=\"return false\" onDrag=\"return false\" onDrop=\"return false\" autocomplete=off />\n              </p>\n              <p>\n                <label>Año de vencimiento</label>\n                <input type=\"text\" name=\"cardExpirationYear\" data-checkout=\"cardExpirationYear\" onselectstart=\"return false\" onpaste=\"return false\" onCopy=\"return false\" onCut=\"return false\" onDrag=\"return false\" onDrop=\"return false\" autocomplete=off />\n              </p>\n              <p>\n                <label>Código de seguridad</label>\n                <input type=\"text\" name=\"securityCode\" data-checkout=\"securityCode\" onselectstart=\"return false\" onpaste=\"return false\" onCopy=\"return false\" onCut=\"return false\" onDrag=\"return false\" onDrop=\"return false\" autocomplete=off />\n              </p>\n&lt;!&ndash;              <p>\n                <label for=\"installments\">Cuotas</label>\n                <select id=\"installments\" class=\"form-control\" name=\"installments\">\n                  <option *ngFor=\"let installment of installments\" value=\"{{installment.value }}\">{{installment.text}}</option>\n                </select>\n              </p>&ndash;&gt;\n              <p>\n                <label for=\"docType\">Tipo de documento</label>\n                <select id=\"docType\" data-checkout=\"docType\"></select>\n              </p>\n              <p>\n                <label for=\"docNumber\">Número de documento</label>\n                <input type=\"text\" id=\"docNumber\" data-checkout=\"docNumber\"/>\n              </p>\n              <p>\n                <label for=\"email\">Email</label>\n                <input type=\"email\" id=\"email\" name=\"email\" value=\"test@test.com\"/>\n              </p>\n              <input type=\"hidden\" name=\"payment_method_id\" id=\"payment_method_id\"/>\n&lt;!&ndash;\n              <input type=\"submit\" value=\"Pagar\"/>\n&ndash;&gt;\n            </fieldset>\n          </form>\n\n\n          <ion-button expand=\"full\" color=\"secondary\" (click)=\"checkout()\" style=\"margin-top: 2vw\">Pagar $9.99</ion-button>\n\n\n        </ion-col>\n      </ion-row>\n    </ion-footer>\n  </ion-card>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button expand=\"full\" color=\"medium\" (click)=\"irPoliticas()\" style=\"margin-top: 2vw\">Política de Privacidad</ion-button>\n      <ion-button expand=\"full\" color=\"medium\" (click)=\"irTerminos()\" style=\"margin-top: 2vw\" >Términos de uso</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n-->\n<!--\n-->\n\n<ion-content>\n<!--    <ion-grid>\n        <ion-row>\n            <ion-col>\n                Use this Pay button in your app's payment page with the attached logic.\n            </ion-col>\n        </ion-row>\n    </ion-grid>-->\n    <ion-card style=\"text-align: center\">\n        <div class=\"row\" style=\"padding: 3vw;\">\n            <div class=\"col-4\">\n                <img style=\"margin: 1vw\" src=\"../../assets/images/cooperacion.png\" alt=\"ion\">\n            </div>\n            <div class=\"col-8\">\n                <ion-card-header style=\"    padding: 5px;\">\n                    <ion-card-title>{{productoAVer}}</ion-card-title>\n                </ion-card-header>\n            </div>\n        </div>\n        <div class=\"row\" style=\"padding: 3vw;\">\n            <div class=\"col-12\">\n                <ion-card-content style=\"padding: 5px;text-align: center\">\n                    {{descripcionAVer}}\n                    <!--  Indicaciones especiales para ser tenidas en cuenta al momento de realizar la compra, tiempos de respuesta o algun elemento importante al momento de realizar la compra.-->\n\n                </ion-card-content>\n            </div>\n           <!-- <div class=\"col-5\">\n                <ion-card-header style=\"    padding: 5px;\">\n                    <ion-card-title>{{precioAVer | currency}} MXN</ion-card-title>\n                </ion-card-header>\n            </div>-->\n        </div>\n        <div class=\"row\" style=\"padding: 3vw; text-align: center\">\n            <div class=\"col-12\">\n                <ion-button expand=\"full\" color=\"primary\" (click)=\"enviarSolicitud()\">Enviar Solicitud</ion-button>\n               <!-- <ion-button expand=\"full\" color=\"primary\" (click)=\"payWithPaypal()\">Completar pedido</ion-button>-->\n            </div>\n        </div>\n\n    </ion-card>\n<!--    <ion-list lines=\"none\">\n        <ion-list-header>\n            <ion-label>Resources</ion-label>\n        </ion-list-header>\n        <ion-item href=\"https://ionicframework.com/docs/native/paypal\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n            <ion-label>Paypal Plugin Documentation</ion-label>\n        </ion-item>\n        <ion-item href=\"https://github.com/paypal/PayPal-Cordova-Plugin\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\n            <ion-label>Paypal Plugin Repository</ion-label>\n        </ion-item>\n        <ion-item href=\"https://enappd.com/blog/paypal-integration-in-ionic-apps-and-pwa/142/\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>\n            <ion-label>Ionic 4 - Paypal Integration</ion-label>\n        </ion-item>\n        <ion-item href=\"https://store.enappd.com\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\n            <ion-label>More Enappd Starters</ion-label>\n        </ion-item>\n    </ion-list>-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/checkout/checkout-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/checkout/checkout-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function() { return CheckoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-routing.module */ "./src/app/checkout/checkout-routing.module.ts");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvQzpcXEJpdEJ1Y2tldFxcQXBwc1xcYnJva2Vycy1uZXR3b3JrLWlvc1xcYnJva2Vycy1uZXR3b3JrL3NyY1xcYXBwXFxjaGVja291dFxcY2hlY2tvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");








let CheckoutPage = class CheckoutPage {
    constructor(http, payPal, emailComposer, rs, loading, alertCtrl, navCtrl) {
        this.http = http;
        this.payPal = payPal;
        this.emailComposer = emailComposer;
        this.rs = rs;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.form_pago = {
            numero_tarjeta: "",
            monto_a_pagar: 0,
            payment_method_id: ""
        };
        this.installments = [];
        this.paymentAmount = '50';
        this.currency = 'USD';
        this.currencyIcon = '$';
    }
    ngOnInit() {
        this.descripcionAVer = window.localStorage.getItem("descripcionAVer");
        this.productoAVer = window.localStorage.getItem("productoAVer");
        this.precioAVer = window.localStorage.getItem("precioAVer");
        this.paymentAmount = this.precioAVer;
    }
    enviarSolicitud() {
        var email_to = "";
        var body = "";
        var user_info = JSON.parse(window.localStorage.getItem("user_info"));
        switch (this.productoAVer) {
            case "Documentación Aval":
                email_to = "asesorialegal@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Póliza Jurídica, Fianza o Mediación Inmobiliaria. " +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Organizamos tus Citas o Recorrido":
                email_to = "oficina@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Organización de Citas o Recorridos. " +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Citas y/o recorridos":
                email_to = "oficina@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Cubrimos tus citas o recorridos." +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Revisión de Documentación del Inmueble":
                email_to = "asesorialegal@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Revisión de Documentación del Inmueble." +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Revisión de Contrato de Arrendamiento":
                email_to = "asesorialegal@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Revisión de Contrato de Arrendamiento." +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Búsqueda de propiedades (5 resultados)":
                email_to = "oficina@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Búsqueda inteligente de Propiedades (1-5 resultados)" +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Búsqueda de propiedades (6-10 resultados)":
                email_to = "oficina@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Búsqueda Inteligente de Propiedades (6-10 resultados)" +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Contrato de intermediación":
                email_to = "asesorialegal@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Contrato de intermediación" +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Contrato de intermediación Renta":
                email_to = "asesorialegal@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Contrato de intermediación" +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Contrato de intermediación Venta":
                email_to = "asesorialegal@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Contrato de intermediación" +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Fotografía profesional":
                email_to = "oficina@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Fotografía profesional" +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Tour virtual":
                email_to = "oficina@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Tour virtual" +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Estudio de mercado":
                email_to = "oficina@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre " + this.productoAVer + " e Interpretación Escrita." +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Publica en los mejores Portales inmobiliarios":
                email_to = "oficina@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre " + this.productoAVer +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Fichas personalizadas":
                email_to = "oficina@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre " + this.productoAVer +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Chats y Redes":
                email_to = "oficina@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre " + this.productoAVer +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Inventario":
                email_to = "oficina@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre " + this.productoAVer +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Contrato de Arrendamiento":
                email_to = "asesorialegal@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre " + this.productoAVer +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Contrato de Compraventa":
                email_to = "asesorialegal@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre " + this.productoAVer +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
            case "Revisión de Contrato de Compraventa":
                email_to = "asesorialegal@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre  Revisión y llenado de Contrato de Compraventa" +
                    "\n<br><br>Nombre: " + user_info.nombreApellido +
                    "\n<br>Email: " + user_info.email +
                    "\n<br>Cel: " + user_info.celular;
                break;
        }
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Mailchimp/add_tag.php", {
            "email": window.localStorage.getItem("user"),
            "solicitud": this.productoAVer
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            console.log("data", data.data);
        })
            .catch(error => {
            //this.loader.dismiss();
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
        this.http.post(this.rs.ROOTURL + "Pagos/agregarPago.php", {
            "pago": window.localStorage.getItem("user"),
            "id_usuario": window.localStorage.getItem("id_usuario"),
            "producto": this.productoAVer,
            "descripcion": this.descripcionAVer,
            "precio": this.precioAVer,
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            console.log("registro hecho correctamente");
            //this.showLoader();
            /*
                            body = "Datos:<br>"/!* +
                                "- Nombre completo: " + this.formulario_conseguir_cliente.datos.nombre + "<br>" +
                                "- Teléfono de contacto: " + this.formulario_conseguir_cliente.datos.telefono + "<br>" +
                                "- Email de contacto: " + this.formulario_conseguir_cliente.datos.email + "<br><br>" +
                                "Espacios: " + "<br>" +
                                "- Recámaras: " + this.formulario_conseguir_cliente.espacios.recamaras + "<br>" +
                                "- Baños: " + this.formulario_conseguir_cliente.espacios.banos + "<br>" +
                                "- Estacionamientos: " + this.formulario_conseguir_cliente.espacios.estacionamientos + "<br><br>" +
                                "Dimensiones: " + "<br>" +
                                "- Departamento: " + this.formulario_conseguir_cliente.dimensiones.departamento + "<br>" +
                                "- Casa: " + this.formulario_conseguir_cliente.dimensiones.casa + "<br>" +
                                "- Casa en Condominio: " + this.formulario_conseguir_cliente.dimensiones.casa_condominio + "<br>" +
                                "- Terreno: " + this.formulario_conseguir_cliente.dimensiones.terreno + "<br>" +
                                "- Oficina: " + this.formulario_conseguir_cliente.dimensiones.oficina + "<br>" +
                                "- Bodega: " + this.formulario_conseguir_cliente.dimensiones.bodega + "<br><br>" +
                                "Fecha Operación: " + "<br>" +
                                "- Fecha: " + this.formulario_conseguir_cliente.fechaOperacion + "<br><br>" +
                                "Presupuesto: " + "<br>" +
                                "- Presupuesto Máximo: " + this.formulario_conseguir_cliente.presupuesto + "<br><br>" +
                                "Aval: " + "<br>" +
                                "- ¿Quién avalará mi renta?: " + this.formulario_conseguir_cliente.aval + "<br><br>" +
                                "Detalles " + "<br>" +
                                "- Zonas de mi interés: " + this.formulario_conseguir_cliente.zonas + "<br>" +
                                "- Alguna especificación especial que se debe considerar en la búsqueda: " + this.formulario_conseguir_cliente.especificacion_especial + "<br><br>" +
                                "Sobre mi proceso de venta " + "<br>" +
                                "- ¿Me han atendido otros corredores?: " + this.formulario_conseguir_cliente.proceso.otros_corredores + "<br>" +
                                "- ¿Llevas una relación de lo que ya has visto?: " + this.formulario_conseguir_cliente.proceso.lleva_relacion + "<br>" +
                                "- ¿Has intentado vender anteriormente sin buenos resultados?: " + this.formulario_conseguir_cliente.proceso.iniciado_busqueda*!/
                            ;*/
            let email = {
                to: email_to,
                //to:"tomas.p@gyo-solutions.com",
                /*      cc: 'erika@mustermann.de',
                      bcc: ['john@doe.com', 'jane@doe.com'],*/
                /* attachments: [
                   'file://img/logo.png',
                   'res://icon.png',
                   'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                   'file://README.pdf'
                 ],*/
                subject: 'Formulario de ' + this.productoAVer,
                body: body,
                isHtml: true
            };
            // Send a text message using default options
            this.emailComposer.open(email);
            this.goBack();
        })
            .catch(error => {
            alert("Hubo un error al registrar tu pago, el cobro se ha realizado, por favor comunicate al administrador");
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            this.loading.dismiss();
        });
    }
    goBack() {
        this.navCtrl.pop();
    }
    payWithPaypal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.payPal.init({
                PayPalEnvironmentProduction: 'ARwmWRZSgx_DUx6E0faK-OWjzSf0mTYQCbyaKMiToEG8X7cVBnj0bWW19PEgrnXTadE94w8lohkRKY34',
                PayPalEnvironmentSandbox: 'AaGH8KUi701n_FCEMgx155PobIV-4fhQXry35GyirRCXBbSPzpgdAxaUw9LD8XYiruuDtzd1NLpiUWFL'
            }).then(() => {
                // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__["PayPalConfiguration"]({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                })).then(() => {
                    let payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__["PayPalPayment"](this.paymentAmount, this.currency, 'Description', 'sale');
                    this.payPal.renderSinglePaymentUI(payment).then((res) => {
                        this.http.setRequestTimeout(5.0);
                        this.http.post(this.rs.ROOTURL + "Pagos/agregarPago.php", {
                            "pago": JSON.stringify(res),
                            "id_usuario": window.localStorage.getItem("id_usuario"),
                            "producto": this.productoAVer,
                            "descripcion": this.descripcionAVer,
                            "precio": this.precioAVer,
                        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                            .then(data => {
                            alert("Todo listo! Tu pago se registro correctamente!");
                        })
                            .catch(error => {
                            alert("Hubo un error al registrar tu pago, el cobro se ha realizado, por favor comunicate al administrador");
                            console.log(error);
                            console.log(error.status);
                            console.log(error.error); // error message as string
                            console.log(error.headers);
                            this.loading.dismiss();
                        });
                        console.log(res);
                        // Successfully paid
                    }, () => {
                        // Error or render dialog closed without being successful
                    });
                }, () => {
                    // Error in configuration
                });
            }, () => {
                // Error in initialization, maybe PayPal isn't supported or something else
            });
        });
    }
    checkout() {
        /*    var $form = document.querySelector('#pay');
            Mercadopago.createToken($form, sdkResponseHandler);
            return false;
        
            function sdkResponseHandler(status, response) {
              if (status != 200 && status != 201) {
                alert("verify filled data");
              }else{
                this.http.post(this.rs.ROOTURL+"Pagos/procesar_pago.php",
                    {
                      "token":response.id,
                    },
                    {"Accept":'application/json','Content-Type':'application/json'})
                    .then(data => {
                      console.log(data)
                      console.log("Hola volvi de procesar")
                    })
                    .catch(error => {
                      console.log(error);
                      console.log(error.status);
                      console.log(error.error); // error message as string
                      console.log(error.headers);
                      this.loader.dismiss();
                    });
              }
            };*/
    }
    irPoliticas() {
    }
    irTerminos() {
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__["PayPal"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_1__["RootSettingsService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.page.html"),
        styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__["PayPal"],
        _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"],
        _services_rs_service__WEBPACK_IMPORTED_MODULE_1__["RootSettingsService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], CheckoutPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let RootSettingsService = class RootSettingsService {
    constructor(platform) {
        this.platform = platform;
        this.ROOTURL = "http://broktoolserver.com/ControlPanel/php/admin/";
    }
    obtnerViajesPorIDServicio() {
    }
};
RootSettingsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
RootSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], RootSettingsService);



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module-es2015.js.map