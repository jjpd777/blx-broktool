(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio-portfolio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio/portfolio.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio/portfolio.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-main-header></app-main-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\r\n  <div class=\"row row--header\">\r\n    <div class=\"header--content\">\r\n      <img style=\"width: 10%;\"\r\n           class=\"imge\"\r\n           src=\"/assets/images/portfolioBN.png\"\r\n      />\r\n      <div class=\"header--content__textos\">\r\n        <p class=\"header__title\">Mi portafolio</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <ion-toolbar mode=\"md\" style=\"width: 100vw; margin-left: -4vw\" color=\"light\">\r\n    <ion-segment\r\n            value=\"all\"\r\n            color=\"primary\"\r\n            scrollable=\"true\"\r\n            mode=\"ios\"\r\n            [(ngModel)]=\"segmentModel\"\r\n            (ionChange)=\"segmentChanged($event)\">\r\n      <ion-segment-button value=\"2017\">\r\n        <ion-label>2017</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2018\">\r\n        <ion-label>2018</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2019\">\r\n        <ion-label>2019</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2020\">\r\n        <ion-label>2020</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2021\">\r\n        <ion-label>2021</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2022\">\r\n        <ion-label>2022</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2023\">\r\n        <ion-label>2023</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2024\">\r\n        <ion-label>2024</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2025\">\r\n        <ion-label>2025</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2026\">\r\n        <ion-label>2026</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2027\">\r\n        <ion-label>2027</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2028\">\r\n        <ion-label>2028</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2029\">\r\n        <ion-label>2029</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2030\">\r\n        <ion-label>2030</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n  <ion-card *ngIf=\"segmentModel === '2017'\">\r\n    <div class=\"container\">\r\n      <p class=\"text--meta\" style=\"margin-top: 4vw\">2017</p>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2017)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2017/1+metas.y_2017.renta_o/1)/(metas.y_2017.meta))*100\" *ngIf=\"metas.y_2017.meta>0\">\r\n            {{\r\n            (((portafolio_arr.renta_2017/1+metas.y_2017.renta_o/1)/(metas.y_2017.meta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2017.meta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Rentas: {{portafolio_arr.renta_2017/1 + metas.y_2017.renta_o/1  | currency}} / {{metas.y_2017.meta  | currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2017.meta,2017,'Renta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2017)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2017/1+metas.y_2017.venta_o)/(metas.y_2017.meta_venta))*100\" *ngIf=\"metas.y_2017.meta_venta>0\">\r\n            {{\r\n            (((portafolio_arr.venta_2017/1+metas.y_2017.venta_o)/(metas.y_2017.meta_venta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2017.meta_venta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Ventas: {{portafolio_arr.venta_2017/1+metas.y_2017.venta_o/1 | currency}} / {{metas.y_2017.meta_venta| currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2017.meta_venta,2017,'Venta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row metas--margenes\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n              <p class=\"text--meta\">Meta:\r\n                <span class=\"text--meta__precio\">{{metas.y_2017.meta/1 + metas.y_2017.meta_venta/1 | currency}}</span>\r\n              </p>\r\n            </div>\r\n            <!--<div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n              <img *ngIf=\"metas.y_2020.meta ==0\" style=\"width: 7vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarMeta(2020)\" />\r\n              <img *ngIf=\"metas.y_2020.meta !=0\" style=\"width: 7vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta(metas.y_2020.meta,2020)\" />\r\n            </div>-->\r\n          </div>\r\n\r\n          <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2017/1 +metas.y_2017.venta_o/1+metas.y_2017.renta_o/1 |currency}}</span></p>\r\n          <p class=\"text--comun\">Por concretar:\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2017.meta + metas.y_2017.meta_venta - portafolio_arr.total_2017-metas.y_2017.venta_o-metas.y_2017.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2017.meta + metas.y_2017.meta_venta- portafolio_arr.total_2017-metas.y_2017.venta_o-metas.y_2017.renta_o/1 )>0\">\r\n                {{metas.y_2017.meta/1 + metas.y_2017.meta_venta/1 - portafolio_arr.total_2017/1-metas.y_2017.venta_o/1-metas.y_2017.renta_o/1 | currency}}\r\n              </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2018'\">\r\n    <div class=\"container\">\r\n      <p class=\"text--meta\" style=\"margin-top: 4vw\">2018</p>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2018)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2018/1+metas.y_2018.renta_o/1)/(metas.y_2018.meta))*100\" *ngIf=\"metas.y_2018.meta>0\">\r\n            {{\r\n            (((portafolio_arr.renta_2018/1+metas.y_2018.renta_o/1)/(metas.y_2018.meta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2018.meta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Rentas: {{portafolio_arr.renta_2018/1 + metas.y_2018.renta_o/1  | currency}} / {{metas.y_2018.meta  | currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2018.meta,2018,'Renta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2018)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2018/1+metas.y_2018.venta_o)/(metas.y_2018.meta_venta))*100\" *ngIf=\"metas.y_2018.meta_venta>0\">\r\n            {{\r\n            (((portafolio_arr.venta_2018/1+metas.y_2018.venta_o)/(metas.y_2018.meta_venta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2018.meta_venta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Ventas: {{portafolio_arr.venta_2018/1+metas.y_2018.venta_o/1 | currency}} / {{metas.y_2018.meta_venta| currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2018.meta_venta,2018,'Venta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row metas--margenes\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n              <p class=\"text--meta\">Meta:\r\n                <span class=\"text--meta__precio\">{{metas.y_2018.meta/1 + metas.y_2018.meta_venta/1 | currency}}</span>\r\n              </p>\r\n            </div>\r\n            <!--<div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n              <img *ngIf=\"metas.y_2020.meta ==0\" style=\"width: 7vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarMeta(2020)\" />\r\n              <img *ngIf=\"metas.y_2020.meta !=0\" style=\"width: 7vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta(metas.y_2020.meta,2020)\" />\r\n            </div>-->\r\n          </div>\r\n\r\n          <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2018/1 +metas.y_2018.venta_o/1+metas.y_2018.renta_o/1 |currency}}</span></p>\r\n          <p class=\"text--comun\">Por concretar:\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2018.meta + metas.y_2018.meta_venta - portafolio_arr.total_2018-metas.y_2018.venta_o-metas.y_2018.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2018.meta + metas.y_2018.meta_venta- portafolio_arr.total_2018-metas.y_2018.venta_o-metas.y_2018.renta_o/1 )>0\">\r\n                {{metas.y_2018.meta/1 + metas.y_2018.meta_venta/1 - portafolio_arr.total_2018/1-metas.y_2018.venta_o/1-metas.y_2018.renta_o/1 | currency}}\r\n              </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2019'\">\r\n    <div class=\"container\">\r\n      <p class=\"text--meta\" style=\"margin-top: 4vw\">2019</p>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2019)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2019/1+metas.y_2019.renta_o/1)/(metas.y_2019.meta))*100\" *ngIf=\"metas.y_2019.meta>0\">\r\n            {{\r\n            (((portafolio_arr.renta_2019/1+metas.y_2019.renta_o/1)/(metas.y_2019.meta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2019.meta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Rentas: {{portafolio_arr.renta_2019/1 + metas.y_2019.renta_o/1  | currency}} / {{metas.y_2019.meta  | currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2019.meta,2019,'Renta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2020)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2019/1+metas.y_2019.venta_o)/(metas.y_2019.meta_venta))*100\" *ngIf=\"metas.y_2019.meta_venta>0\">\r\n            {{\r\n            (((portafolio_arr.venta_2019/1+metas.y_2019.venta_o)/(metas.y_2019.meta_venta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2019.meta_venta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Ventas: {{portafolio_arr.venta_2019/1+metas.y_2019.venta_o/1 | currency}} / {{metas.y_2019.meta_venta| currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2019.meta_venta,2019,'Venta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row metas--margenes\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n              <p class=\"text--meta\">Meta:\r\n                <span class=\"text--meta__precio\">{{metas.y_2019.meta/1 + metas.y_2019.meta_venta/1 | currency}}</span>\r\n              </p>\r\n            </div>\r\n            <!--<div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n              <img *ngIf=\"metas.y_2020.meta ==0\" style=\"width: 7vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarMeta(2020)\" />\r\n              <img *ngIf=\"metas.y_2020.meta !=0\" style=\"width: 7vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta(metas.y_2020.meta,2020)\" />\r\n            </div>-->\r\n          </div>\r\n\r\n          <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2019/1 +metas.y_2019.venta_o/1+metas.y_2019.renta_o/1 |currency}}</span></p>\r\n          <p class=\"text--comun\">Por concretar:\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2019.meta + metas.y_2019.meta_venta - portafolio_arr.total_2019-metas.y_2019.venta_o-metas.y_2019.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2019.meta + metas.y_2019.meta_venta- portafolio_arr.total_2019-metas.y_2019.venta_o-metas.y_2019.renta_o/1 )>0\">\r\n                {{metas.y_2019.meta/1 + metas.y_2019.meta_venta/1 - portafolio_arr.total_2019/1-metas.y_2019.venta_o/1-metas.y_2019.renta_o/1 | currency}}\r\n              </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2020'\">\r\n    <div class=\"container\">\r\n      <p class=\"text--meta\" style=\"margin-top: 4vw\">2020</p>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2020)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2020/1+metas.y_2020.renta_o/1)/(metas.y_2020.meta))*100\" *ngIf=\"metas.y_2020.meta>0\">\r\n            {{\r\n            (((portafolio_arr.renta_2020/1+metas.y_2020.renta_o/1)/(metas.y_2020.meta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2020.meta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Rentas: {{portafolio_arr.renta_2020/1 + metas.y_2020.renta_o/1  | currency}} / {{metas.y_2020.meta  | currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2020.meta,2020,'Renta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2020)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2020/1+metas.y_2020.venta_o)/(metas.y_2020.meta_venta))*100\" *ngIf=\"metas.y_2020.meta_venta>0\">\r\n            {{\r\n            (((portafolio_arr.venta_2020/1+metas.y_2020.venta_o)/(metas.y_2020.meta_venta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2020.meta_venta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Ventas: {{portafolio_arr.venta_2020/1+metas.y_2020.venta_o/1 | currency}} / {{metas.y_2020.meta_venta| currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2020.meta_venta,2020,'Venta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row metas--margenes\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n              <p class=\"text--meta\">Meta:\r\n                <span class=\"text--meta__precio\">{{metas.y_2020.meta/1 + metas.y_2020.meta_venta/1 | currency}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2020/1 +metas.y_2020.venta_o/1+metas.y_2020.renta_o/1 |currency}}</span></p>\r\n          <p class=\"text--comun\">Por concretar:\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2020.meta + metas.y_2020.meta_venta - portafolio_arr.total_2020-metas.y_2020.venta_o-metas.y_2020.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2020.meta + metas.y_2020.meta_venta- portafolio_arr.total_2020-metas.y_2020.venta_o-metas.y_2020.renta_o/1 )>0\">\r\n                {{metas.y_2020.meta/1 + metas.y_2020.meta_venta/1 - portafolio_arr.total_2020/1-metas.y_2020.venta_o/1-metas.y_2020.renta_o/1 | currency}}\r\n              </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2021'\">\r\n    <div class=\"container\">\r\n      <p class=\"text--meta\" style=\"margin-top: 4vw\">2021</p>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2021)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2021/1+metas.y_2021.renta_o/1)/(metas.y_2021.meta))*100\" *ngIf=\"metas.y_2021.meta>0\">\r\n            {{\r\n            (((portafolio_arr.renta_2021/1+metas.y_2021.renta_o/1)/(metas.y_2021.meta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2021.meta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Rentas: {{portafolio_arr.renta_2021/1 + metas.y_2021.renta_o/1  | currency}} / {{metas.y_2021.meta  | currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2021.meta,2021,'Renta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2021)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2021/1+metas.y_2021.venta_o)/(metas.y_2021.meta_venta))*100\" *ngIf=\"metas.y_2021.meta_venta>0\">\r\n            {{\r\n            (((portafolio_arr.venta_2021/1+metas.y_2021.venta_o)/(metas.y_2021.meta_venta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2021.meta_venta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Ventas: {{portafolio_arr.venta_2021/1+metas.y_2021.venta_o/1 | currency}} / {{metas.y_2021.meta_venta| currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2021.meta_venta,2021,'Venta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row metas--margenes\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n              <p class=\"text--meta\">Meta:\r\n                <span class=\"text--meta__precio\">{{metas.y_2021.meta/1 + metas.y_2021.meta_venta/1 | currency}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2021/1 +metas.y_2021.venta_o/1+metas.y_2021.renta_o/1 |currency}}</span></p>\r\n          <p class=\"text--comun\">Por concretar:\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2021.meta + metas.y_2021.meta_venta - portafolio_arr.total_2021-metas.y_2021.venta_o-metas.y_2021.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2021.meta + metas.y_2021.meta_venta- portafolio_arr.total_2021-metas.y_2021.venta_o-metas.y_2021.renta_o/1 )>0\">\r\n                {{metas.y_2021.meta/1 + metas.y_2021.meta_venta/1 - portafolio_arr.total_2021/1-metas.y_2021.venta_o/1-metas.y_2021.renta_o/1 | currency}}\r\n              </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2022'\">\r\n    <div class=\"container\">\r\n      <p class=\"text--meta\" style=\"margin-top: 4vw\">2022</p>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2022)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2022/1+metas.y_2022.renta_o/1)/(metas.y_2022.meta))*100\" *ngIf=\"metas.y_2022.meta>0\">\r\n            {{\r\n            (((portafolio_arr.renta_2022/1+metas.y_2022.renta_o/1)/(metas.y_2022.meta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2022.meta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Rentas: {{portafolio_arr.renta_2022/1 + metas.y_2022.renta_o/1  | currency}} / {{metas.y_2022.meta  | currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2022.meta,2022,'Renta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2022)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2022/1+metas.y_2022.venta_o)/(metas.y_2022.meta_venta))*100\" *ngIf=\"metas.y_2022.meta_venta>0\">\r\n            {{\r\n            (((portafolio_arr.venta_2022/1+metas.y_2022.venta_o)/(metas.y_2022.meta_venta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2022.meta_venta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Ventas: {{portafolio_arr.venta_2022/1+metas.y_2022.venta_o/1 | currency}} / {{metas.y_2022.meta_venta| currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2022.meta_venta,2022,'Venta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row metas--margenes\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n              <p class=\"text--meta\">Meta:\r\n                <span class=\"text--meta__precio\">{{metas.y_2022.meta/1 + metas.y_2022.meta_venta/1 | currency}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2022/1 +metas.y_2022.venta_o/1+metas.y_2022.renta_o/1 |currency}}</span></p>\r\n          <p class=\"text--comun\">Por concretar:\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2022.meta + metas.y_2022.meta_venta - portafolio_arr.total_2022-metas.y_2022.venta_o-metas.y_2022.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2022.meta + metas.y_2022.meta_venta- portafolio_arr.total_2022-metas.y_2022.venta_o-metas.y_2022.renta_o/1 )>0\">\r\n                {{metas.y_2022.meta/1 + metas.y_2022.meta_venta/1 - portafolio_arr.total_2022/1-metas.y_2022.venta_o/1-metas.y_2022.renta_o/1 | currency}}\r\n              </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2023'\">\r\n    <div class=\"container\">\r\n      <p class=\"text--meta\" style=\"margin-top: 4vw\">2023</p>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2023)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2023/1+metas.y_2023.renta_o/1)/(metas.y_2023.meta))*100\" *ngIf=\"metas.y_2023.meta>0\">\r\n            {{\r\n            (((portafolio_arr.renta_2023/1+metas.y_2023.renta_o/1)/(metas.y_2023.meta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2023.meta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Rentas: {{portafolio_arr.renta_2023/1 + metas.y_2023.renta_o/1  | currency}} / {{metas.y_2023.meta  | currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2023.meta,2023,'Renta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2023)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2023/1+metas.y_2023.venta_o)/(metas.y_2023.meta_venta))*100\" *ngIf=\"metas.y_2023.meta_venta>0\">\r\n            {{\r\n            (((portafolio_arr.venta_2023/1+metas.y_2023.venta_o)/(metas.y_2023.meta_venta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2023.meta_venta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Ventas: {{portafolio_arr.venta_2023/1+metas.y_2023.venta_o/1 | currency}} / {{metas.y_2023.meta_venta| currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2023.meta_venta,2023,'Venta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row metas--margenes\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n              <p class=\"text--meta\">Meta:\r\n                <span class=\"text--meta__precio\">{{metas.y_2023.meta/1 + metas.y_2023.meta_venta/1 | currency}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2023/1 +metas.y_2023.venta_o/1+metas.y_2023.renta_o/1 |currency}}</span></p>\r\n          <p class=\"text--comun\">Por concretar:\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2023.meta + metas.y_2023.meta_venta - portafolio_arr.total_2023-metas.y_2023.venta_o-metas.y_2023.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2023.meta + metas.y_2023.meta_venta- portafolio_arr.total_2023-metas.y_2023.venta_o-metas.y_2023.renta_o/1 )>0\">\r\n                {{metas.y_2023.meta/1 + metas.y_2023.meta_venta/1 - portafolio_arr.total_2023/1-metas.y_2023.venta_o/1-metas.y_2023.renta_o/1 | currency}}\r\n              </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2024'\">\r\n    <div class=\"container\">\r\n      <p class=\"text--meta\" style=\"margin-top: 4vw\">2024</p>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2024)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2024/1+metas.y_2024.renta_o/1)/(metas.y_2024.meta))*100\" *ngIf=\"metas.y_2024.meta>0\">\r\n            {{\r\n            (((portafolio_arr.renta_2024/1+metas.y_2024.renta_o/1)/(metas.y_2024.meta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2024.meta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Rentas: {{portafolio_arr.renta_2024/1 + metas.y_2024.renta_o/1  | currency}} / {{metas.y_2024.meta  | currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2024.meta,2024,'Renta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2024)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2024/1+metas.y_2024.venta_o)/(metas.y_2024.meta_venta))*100\" *ngIf=\"metas.y_2024.meta_venta>0\">\r\n            {{\r\n            (((portafolio_arr.venta_2024/1+metas.y_2024.venta_o)/(metas.y_2024.meta_venta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2024.meta_venta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Ventas: {{portafolio_arr.venta_2024/1+metas.y_2024.venta_o/1 | currency}} / {{metas.y_2024.meta_venta| currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2024.meta_venta,2024,'Venta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row metas--margenes\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n              <p class=\"text--meta\">Meta:\r\n                <span class=\"text--meta__precio\">{{metas.y_2024.meta/1 + metas.y_2024.meta_venta/1 | currency}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2024/1 +metas.y_2024.venta_o/1+metas.y_2024.renta_o/1 |currency}}</span></p>\r\n          <p class=\"text--comun\">Por concretar:\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2024.meta + metas.y_2024.meta_venta - portafolio_arr.total_2024-metas.y_2024.venta_o-metas.y_2024.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2024.meta + metas.y_2024.meta_venta- portafolio_arr.total_2024-metas.y_2024.venta_o-metas.y_2024.renta_o/1 )>0\">\r\n                {{metas.y_2024.meta/1 + metas.y_2024.meta_venta/1 - portafolio_arr.total_2024/1-metas.y_2024.venta_o/1-metas.y_2024.renta_o/1 | currency}}\r\n              </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2025'\">\r\n    <div class=\"container\">\r\n      <p class=\"text--meta\" style=\"margin-top: 4vw\">2025</p>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2025)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2025/1+metas.y_2025.renta_o/1)/(metas.y_2025.meta))*100\" *ngIf=\"metas.y_2025.meta>0\">\r\n            {{\r\n            (((portafolio_arr.renta_2025/1+metas.y_2025.renta_o/1)/(metas.y_2025.meta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2025.meta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Rentas: {{portafolio_arr.renta_2025/1 + metas.y_2025.renta_o/1  | currency}} / {{metas.y_2025.meta  | currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2025.meta,2025,'Renta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2025)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2025/1+metas.y_2025.venta_o)/(metas.y_2025.meta_venta))*100\" *ngIf=\"metas.y_2025.meta_venta>0\">\r\n            {{\r\n            (((portafolio_arr.venta_2025/1+metas.y_2025.venta_o)/(metas.y_2025.meta_venta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2025.meta_venta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Ventas: {{portafolio_arr.venta_2025/1+metas.y_2025.venta_o/1 | currency}} / {{metas.y_2025.meta_venta| currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2025.meta_venta,2025,'Venta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row metas--margenes\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n              <p class=\"text--meta\">Meta:\r\n                <span class=\"text--meta__precio\">{{metas.y_2025.meta/1 + metas.y_2025.meta_venta/1 | currency}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2025/1 +metas.y_2025.venta_o/1+metas.y_2025.renta_o/1 |currency}}</span></p>\r\n          <p class=\"text--comun\">Por concretar:\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2025.meta + metas.y_2025.meta_venta - portafolio_arr.total_2025-metas.y_2025.venta_o-metas.y_2025.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2025.meta + metas.y_2025.meta_venta- portafolio_arr.total_2025-metas.y_2025.venta_o-metas.y_2025.renta_o/1 )>0\">\r\n                {{metas.y_2025.meta/1 + metas.y_2025.meta_venta/1 - portafolio_arr.total_2025/1-metas.y_2025.venta_o/1-metas.y_2025.renta_o/1 | currency}}\r\n              </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2026'\">\r\n    <div class=\"container\">\r\n      <p class=\"text--meta\" style=\"margin-top: 4vw\">2026</p>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2026)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2026/1+metas.y_2026.renta_o/1)/(metas.y_2026.meta))*100\" *ngIf=\"metas.y_2026.meta>0\">\r\n            {{\r\n            (((portafolio_arr.renta_2026/1+metas.y_2026.renta_o/1)/(metas.y_2026.meta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2026.meta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Rentas: {{portafolio_arr.renta_2026/1 + metas.y_2026.renta_o/1  | currency}} / {{metas.y_2026.meta  | currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2026.meta,2026,'Renta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2026)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2026/1+metas.y_2026.venta_o)/(metas.y_2026.meta_venta))*100\" *ngIf=\"metas.y_2026.meta_venta>0\">\r\n            {{\r\n            (((portafolio_arr.venta_2026/1+metas.y_2026.venta_o)/(metas.y_2026.meta_venta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2026.meta_venta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Ventas: {{portafolio_arr.venta_2026/1+metas.y_2026.venta_o/1 | currency}} / {{metas.y_2026.meta_venta| currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2026.meta_venta,2026,'Venta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row metas--margenes\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n              <p class=\"text--meta\">Meta:\r\n                <span class=\"text--meta__precio\">{{metas.y_2026.meta/1 + metas.y_2026.meta_venta/1 | currency}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2026/1 +metas.y_2026.venta_o/1+metas.y_2026.renta_o/1 |currency}}</span></p>\r\n          <p class=\"text--comun\">Por concretar:\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2026.meta + metas.y_2026.meta_venta - portafolio_arr.total_2026-metas.y_2026.venta_o-metas.y_2026.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2026.meta + metas.y_2026.meta_venta- portafolio_arr.total_2026-metas.y_2026.venta_o-metas.y_2026.renta_o/1 )>0\">\r\n                {{metas.y_2026.meta/1 + metas.y_2026.meta_venta/1 - portafolio_arr.total_2026/1-metas.y_2026.venta_o/1-metas.y_2026.renta_o/1 | currency}}\r\n              </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2027'\">\r\n  <div class=\"container\">\r\n    <p class=\"text--meta\" style=\"margin-top: 4vw\">2027</p>\r\n    <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n      <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n        <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2027)\" />\r\n      </div>\r\n      <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n        <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2027/1+metas.y_2027.renta_o/1)/(metas.y_2027.meta))*100\" *ngIf=\"metas.y_2027.meta>0\">\r\n          {{\r\n          (((portafolio_arr.renta_2027/1+metas.y_2027.renta_o/1)/(metas.y_2027.meta))*100).toFixed(1)\r\n          }}%\r\n        </progressbar>\r\n        <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2027.meta==0\">\r\n          0%\r\n        </progressbar>\r\n        <small><em>Rentas: {{portafolio_arr.renta_2027/1 + metas.y_2027.renta_o/1  | currency}} / {{metas.y_2027.meta  | currency}}</em></small>\r\n      </div>\r\n      <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n        <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2027.meta,2027,'Renta')\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n      <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n        <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2027)\" />\r\n      </div>\r\n      <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n        <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2027/1+metas.y_2027.venta_o)/(metas.y_2027.meta_venta))*100\" *ngIf=\"metas.y_2027.meta_venta>0\">\r\n          {{\r\n          (((portafolio_arr.venta_2027/1+metas.y_2027.venta_o)/(metas.y_2027.meta_venta))*100).toFixed(1)\r\n          }}%\r\n        </progressbar>\r\n        <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2027.meta_venta==0\">\r\n          0%\r\n        </progressbar>\r\n        <small><em>Ventas: {{portafolio_arr.venta_2027/1+metas.y_2027.venta_o/1 | currency}} / {{metas.y_2027.meta_venta| currency}}</em></small>\r\n      </div>\r\n      <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n        <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2027.meta_venta,2027,'Venta')\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row metas--margenes\">\r\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <p class=\"text--meta\">Meta:\r\n              <span class=\"text--meta__precio\">{{metas.y_2027.meta/1 + metas.y_2027.meta_venta/1 | currency}}</span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2027/1 +metas.y_2027.venta_o/1+metas.y_2027.renta_o/1 |currency}}</span></p>\r\n        <p class=\"text--comun\">Por concretar:\r\n          <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2027.meta + metas.y_2027.meta_venta - portafolio_arr.total_2027-metas.y_2027.venta_o-metas.y_2027.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n          <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2027.meta + metas.y_2027.meta_venta- portafolio_arr.total_2027-metas.y_2027.venta_o-metas.y_2027.renta_o/1 )>0\">\r\n                {{metas.y_2027.meta/1 + metas.y_2027.meta_venta/1 - portafolio_arr.total_2027/1-metas.y_2027.venta_o/1-metas.y_2027.renta_o/1 | currency}}\r\n              </span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2028'\">\r\n  <div class=\"container\">\r\n    <p class=\"text--meta\" style=\"margin-top: 4vw\">2028</p>\r\n    <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n      <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n        <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2028)\" />\r\n      </div>\r\n      <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n        <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2028/1+metas.y_2028.renta_o/1)/(metas.y_2028.meta))*100\" *ngIf=\"metas.y_2028.meta>0\">\r\n          {{\r\n          (((portafolio_arr.renta_2028/1+metas.y_2028.renta_o/1)/(metas.y_2028.meta))*100).toFixed(1)\r\n          }}%\r\n        </progressbar>\r\n        <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2028.meta==0\">\r\n          0%\r\n        </progressbar>\r\n        <small><em>Rentas: {{portafolio_arr.renta_2028/1 + metas.y_2028.renta_o/1  | currency}} / {{metas.y_2028.meta  | currency}}</em></small>\r\n      </div>\r\n      <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n        <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2028.meta,2028,'Renta')\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n      <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n        <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2028)\" />\r\n      </div>\r\n      <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n        <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2028/1+metas.y_2028.venta_o)/(metas.y_2028.meta_venta))*100\" *ngIf=\"metas.y_2028.meta_venta>0\">\r\n          {{\r\n          (((portafolio_arr.venta_2028/1+metas.y_2028.venta_o)/(metas.y_2028.meta_venta))*100).toFixed(1)\r\n          }}%\r\n        </progressbar>\r\n        <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2028.meta_venta==0\">\r\n          0%\r\n        </progressbar>\r\n        <small><em>Ventas: {{portafolio_arr.venta_2028/1+metas.y_2028.venta_o/1 | currency}} / {{metas.y_2028.meta_venta| currency}}</em></small>\r\n      </div>\r\n      <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n        <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2028.meta_venta,2028,'Venta')\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row metas--margenes\">\r\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <p class=\"text--meta\">Meta:\r\n              <span class=\"text--meta__precio\">{{metas.y_2028.meta/1 + metas.y_2028.meta_venta/1 | currency}}</span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2028/1 +metas.y_2028.venta_o/1+metas.y_2028.renta_o/1 |currency}}</span></p>\r\n        <p class=\"text--comun\">Por concretar:\r\n          <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2028.meta + metas.y_2028.meta_venta - portafolio_arr.total_2028-metas.y_2028.venta_o-metas.y_2028.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n          <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2028.meta + metas.y_2028.meta_venta- portafolio_arr.total_2028-metas.y_2028.venta_o-metas.y_2028.renta_o/1 )>0\">\r\n                {{metas.y_2028.meta/1 + metas.y_2028.meta_venta/1 - portafolio_arr.total_2028/1-metas.y_2028.venta_o/1-metas.y_2028.renta_o/1 | currency}}\r\n              </span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2029'\">\r\n    <div class=\"container\">\r\n      <p class=\"text--meta\" style=\"margin-top: 4vw\">2029</p>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2029)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2029/1+metas.y_2029.renta_o/1)/(metas.y_2029.meta))*100\" *ngIf=\"metas.y_2029.meta>0\">\r\n            {{\r\n            (((portafolio_arr.renta_2029/1+metas.y_2029.renta_o/1)/(metas.y_2029.meta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2029.meta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Rentas: {{portafolio_arr.renta_2029/1 + metas.y_2029.renta_o/1  | currency}} / {{metas.y_2029.meta  | currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2029.meta,2029,'Renta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2029)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2029/1+metas.y_2029.venta_o)/(metas.y_2029.meta_venta))*100\" *ngIf=\"metas.y_2029.meta_venta>0\">\r\n            {{\r\n            (((portafolio_arr.venta_2029/1+metas.y_2029.venta_o)/(metas.y_2029.meta_venta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2029.meta_venta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Ventas: {{portafolio_arr.venta_2029/1+metas.y_2029.venta_o/1 | currency}} / {{metas.y_2029.meta_venta| currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2029.meta_venta,2029,'Venta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row metas--margenes\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n              <p class=\"text--meta\">Meta:\r\n                <span class=\"text--meta__precio\">{{metas.y_2029.meta/1 + metas.y_2029.meta_venta/1 | currency}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2029/1 +metas.y_2029.venta_o/1+metas.y_2029.renta_o/1 |currency}}</span></p>\r\n          <p class=\"text--comun\">Por concretar:\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2029.meta + metas.y_2029.meta_venta - portafolio_arr.total_2029-metas.y_2029.venta_o-metas.y_2029.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2029.meta + metas.y_2029.meta_venta- portafolio_arr.total_2029-metas.y_2029.venta_o-metas.y_2029.renta_o/1 )>0\">\r\n                {{metas.y_2029.meta/1 + metas.y_2029.meta_venta/1 - portafolio_arr.total_2029/1-metas.y_2029.venta_o/1-metas.y_2029.renta_o/1 | currency}}\r\n              </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"segmentModel === '2030'\">\r\n    <div class=\"container\">\r\n      <p class=\"text--meta\" style=\"margin-top: 4vw\">2030</p>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarRenta(2030)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\">\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.renta_2030/1+metas.y_2030.renta_o/1)/(metas.y_2030.meta))*100\" *ngIf=\"metas.y_2030.meta>0\">\r\n            {{\r\n            (((portafolio_arr.renta_2030/1+metas.y_2030.renta_o/1)/(metas.y_2030.meta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2030.meta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Rentas: {{portafolio_arr.renta_2030/1 + metas.y_2030.renta_o/1  | currency}} / {{metas.y_2030.meta  | currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1.5vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta',metas.y_2030.meta,2030,'Renta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2vh; text-align: center;\">\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/add_minus.png\" (click)=\"agregarVenta(2030)\" />\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-md-8 col-lg-8\" >\r\n          <progressbar class=\"bar--style\" [value]=\"((portafolio_arr.venta_2030/1+metas.y_2030.venta_o)/(metas.y_2030.meta_venta))*100\" *ngIf=\"metas.y_2030.meta_venta>0\">\r\n            {{\r\n            (((portafolio_arr.venta_2030/1+metas.y_2030.venta_o)/(metas.y_2030.meta_venta))*100).toFixed(1)\r\n            }}%\r\n          </progressbar>\r\n          <progressbar class=\"bar--style\" [value]=\"0\" *ngIf=\"metas.y_2030.meta_venta==0\">\r\n            0%\r\n          </progressbar>\r\n          <small><em>Ventas: {{portafolio_arr.venta_2030/1+metas.y_2030.venta_o/1 | currency}} / {{metas.y_2030.meta_venta| currency}}</em></small>\r\n        </div>\r\n        <div class=\"col-2 col-sm-2 col-md-2 col-lg-2\" style=\"text-align: center\">\r\n          <img style=\"width: 6vw;margin-left: 1vw;margin-top: 1vw\" src=\"/assets/images/edit.png\" (click)=\"editarMeta('meta_venta',metas.y_2030.meta_venta,2030,'Venta')\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row metas--margenes\">\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n              <p class=\"text--meta\">Meta:\r\n                <span class=\"text--meta__precio\">{{metas.y_2030.meta/1 + metas.y_2030.meta_venta/1 | currency}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"text--comun\">Concretado: <span class=\"text--comun__precio\">{{portafolio_arr.total_2030/1 +metas.y_2030.venta_o/1+metas.y_2030.renta_o/1 |currency}}</span></p>\r\n          <p class=\"text--comun\">Por concretar:\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2030.meta + metas.y_2030.meta_venta - portafolio_arr.total_2030-metas.y_2030.venta_o-metas.y_2030.renta_o/1 )<=0\">\r\n                $0.00\r\n              </span>\r\n            <span class=\"text--comun__precio\" *ngIf=\"(metas.y_2030.meta + metas.y_2030.meta_venta- portafolio_arr.total_2030-metas.y_2030.venta_o-metas.y_2030.renta_o/1 )>0\">\r\n                {{metas.y_2030.meta/1 + metas.y_2030.meta_venta/1 - portafolio_arr.total_2030/1-metas.y_2030.venta_o/1-metas.y_2030.renta_o/1 | currency}}\r\n              </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <img src=\"/assets/images/floatmenu_2.png\" />\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/portfolio\">\r\n        <img src=\"/assets/images/portfolio.png\" />\r\n      </ion-fab-button>\r\n      <!--      <ion-fab-button color=\"light\" routerLink=\"/network\">\r\n              <img src=\"/assets/images/globe.png\" />\r\n            </ion-fab-button>-->\r\n      <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\r\n        <img src=\"/assets/images/study.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/clientes\">\r\n        <img src=\"/assets/images/user.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<app-footer-blue></app-footer-blue>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/button-fab/button-fab.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/button-fab/button-fab.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button>\r\n    <!-- <a routerLink=\"/\"> -->\r\n    <img src=\"/assets/images/floatmenu_2.png\">\r\n    <!-- </a> -->\r\n  </ion-fab-button>\r\n  <ion-fab-list side=\"top\">\r\n    <ion-fab-button color=\"light\" routerLink=\"/\" ng-reflect-router-link=\"/\">\r\n      <img src=\"/assets/images/portfolio.png\">\r\n    </ion-fab-button>\r\n    <ion-fab-button color=\"light\">\r\n      <a routerLink=\"/\">\r\n        <img src=\"/assets/images/globe.png\">\r\n      </a>\r\n    </ion-fab-button>\r\n    <ion-fab-button color=\"light\">\r\n      <img src=\"/assets/images/study.png\">\r\n    </ion-fab-button>\r\n    <ion-fab-button color=\"light\">\r\n      <img src=\"/assets/images/user.png\">\r\n    </ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer-blue/footer-blue.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer-blue/footer-blue.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-footer no-border (click)=\"openLink()\">\r\n  <ion-toolbar color=\"primary\">\r\n  <p style=\"text-align: center; margin-top: 1rem; color: white; background-color: #094f72; \">www.brokersnetwork.mx</p>\r\n</ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-footer no-border (click)=\"openLink()\"  >\r\n  <p style=\"text-align: center; margin-top: 1rem; color: #094f72\">www.brokersnetwork.mx</p>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/main-header/main-header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/main-header/main-header.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header no-border >\r\n\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    \r\n      <ion-img slot=\"end\" [src]=\"urlLogo\" style=\"\r\n      width: 30%;\r\n      margin-top: 10px!important;\r\n      margin-bottom: 10px;\r\n      margin-right: 3vh;\"></ion-img>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/menu-registro/menu-registro.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/menu-registro/menu-registro.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-header no-border >\r\n\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-text text-center>\r\n      <ion-img [src]=\"urlLogo\" style=\"\r\n      width: 30%;\r\n      margin-top: 10px!important;\r\n      left: 0;\r\n      right: 0;\r\n      margin: 0 auto;\r\n      top: 50%;\r\n      margin-bottom: 10px;\"></ion-img>\r\n    </ion-text>\r\n  </ion-toolbar>\r\n</ion-header>\r\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/portfolio/portfolio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PortfolioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPageRoutingModule", function() { return PortfolioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _portfolio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.page */ "./src/app/portfolio/portfolio.page.ts");




const routes = [
    {
        path: '',
        component: _portfolio_page__WEBPACK_IMPORTED_MODULE_3__["PortfolioPage"]
    }
];
let PortfolioPageRoutingModule = class PortfolioPageRoutingModule {
};
PortfolioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PortfolioPageRoutingModule);



/***/ }),

/***/ "./src/app/portfolio/portfolio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.module.ts ***!
  \***********************************************/
/*! exports provided: PortfolioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPageModule", function() { return PortfolioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio-routing.module */ "./src/app/portfolio/portfolio-routing.module.ts");
/* harmony import */ var _portfolio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio.page */ "./src/app/portfolio/portfolio.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js");










let PortfolioPageModule = class PortfolioPageModule {
};
PortfolioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_5__["PortfolioPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_9__["ProgressbarModule"].forRoot()
        ],
        declarations: [_portfolio_page__WEBPACK_IMPORTED_MODULE_6__["PortfolioPage"]]
    })
], PortfolioPageModule);



/***/ }),

/***/ "./src/app/portfolio/portfolio.page.scss":
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row--header {\n  background-color: #67adc9;\n  height: 10vh;\n  margin-top: -5vw;\n}\n\n.button__siguiente {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #094f72;\n  color: white;\n  font-weight: 700;\n}\n\n.header--content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.header--content__textos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-left: 15px;\n}\n\n.header__title {\n  color: white;\n  font-size: 27px;\n  font-weight: 600;\n  margin: 0px;\n  text-transform: uppercase;\n}\n\n.header__subtitle {\n  color: #094f72;\n  font-size: 15px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.bar--style {\n  height: 40px;\n  border-radius: 50px;\n  border-color: #67adc9;\n  font-size: 15px;\n}\n\n.text--meta {\n  color: #094f72;\n  font-size: 30px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.text--meta__precio {\n  color: #094f72;\n  font-size: 20px;\n  text-align: center;\n  font-weight: 100;\n}\n\n.text--comun {\n  color: #094f72;\n  font-size: 17px;\n  text-align: center;\n  font-weight: 100;\n}\n\n.text--comun__precio {\n  color: #67adc9;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.metas--margenes {\n  margin-top: 2vh;\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL0M6XFxCaXRCdWNrZXRcXEFwcHNcXGJyb2tlcnMtbmV0d29yay1pb3NcXGJyb2tlcnMtbmV0d29yay9zcmNcXGFwcFxccG9ydGZvbGlvXFxwb3J0Zm9saW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2N2FkYzk7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIG1hcmdpbi10b3A6IC01dnc7XHJcbn1cclxuXHJcbi5idXR0b25fX3NpZ3VpZW50ZSB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uaGVhZGVyLS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci0tY29udGVudF9fdGV4dG9zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmhlYWRlcl9fc3VidGl0bGUge1xyXG4gIGNvbG9yOiAjMDk0ZjcyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJhci0tc3R5bGUge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzY3YWRjOTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnRleHQtLW1ldGEge1xyXG4gICAgY29sb3I6ICMwOTRmNzI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udGV4dC0tbWV0YV9fcHJlY2lvIHtcclxuICAgIGNvbG9yOiAjMDk0ZjcyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLnRleHQtLWNvbXVuIHtcclxuICAgIGNvbG9yOiAjMDk0ZjcyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLnRleHQtLWNvbXVuX19wcmVjaW8ge1xyXG4gICAgY29sb3I6ICM2N2FkYzk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubWV0YXMtLW1hcmdlbmVzIHtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4iLCIucm93LS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjdhZGM5O1xuICBoZWlnaHQ6IDEwdmg7XG4gIG1hcmdpbi10b3A6IC01dnc7XG59XG5cbi5idXR0b25fX3NpZ3VpZW50ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NGY3MjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaGVhZGVyLS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItLWNvbnRlbnRfX3RleHRvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uaGVhZGVyX190aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhlYWRlcl9fc3VidGl0bGUge1xuICBjb2xvcjogIzA5NGY3MjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYXItLXN0eWxlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXItY29sb3I6ICM2N2FkYzk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRleHQtLW1ldGEge1xuICBjb2xvcjogIzA5NGY3MjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50ZXh0LS1tZXRhX19wcmVjaW8ge1xuICBjb2xvcjogIzA5NGY3MjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi50ZXh0LS1jb211biB7XG4gIGNvbG9yOiAjMDk0ZjcyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLnRleHQtLWNvbXVuX19wcmVjaW8ge1xuICBjb2xvcjogIzY3YWRjOTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWV0YXMtLW1hcmdlbmVzIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.page.ts":
/*!*********************************************!*\
  !*** ./src/app/portfolio/portfolio.page.ts ***!
  \*********************************************/
/*! exports provided: PortfolioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPage", function() { return PortfolioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let PortfolioPage = class PortfolioPage {
    constructor(http, rs, navCtrl, alertCtrl) {
        this.http = http;
        this.rs = rs;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.segmentModel = (new Date()).getFullYear() + "";
        this.metas = {
            "y_2017": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2018": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2019": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2020": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2021": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2022": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2023": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2024": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2025": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2026": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2027": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2028": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2029": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            },
            "y_2030": {
                meta: 0,
                meta_venta: 0,
                renta_o: 0,
                venta_o: 0
            }
        };
        this.metas_arr = [];
        this.portafolio_arr = {
            "2030Renta": 0,
            "2030Venta": 0,
            "2029Renta": 0,
            "2029Venta": 0,
            "2028Renta": 0,
            "2028Venta": 0,
            "2027Renta": 0,
            "2027Venta": 0,
            "2026Renta": 0,
            "2026Venta": 0,
            "2025Renta": 0,
            "2025Venta": 0,
            "2024Renta": 0,
            "2024Venta": 0,
            "2023Renta": 0,
            "2023Venta": 0,
            "2022Renta": 0,
            "2022Venta": 0,
            "2021Renta": 0,
            "2021Venta": 0,
            "2020Renta": 0,
            "2020Venta": 0,
            "2019Renta": 0,
            "2019Venta": 0,
            "2018Renta": 0,
            "2018Venta": 0,
            "2017Renta": 0,
            "2017Venta": 0,
        };
    }
    ngOnInit() {
    }
    segmentChanged(event) {
        console.log(this.segmentModel);
        console.log(event);
    }
    ionViewDidEnter() {
        this.getMetas();
        this.getPortafolio();
    }
    getMetas() {
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Metas/getMetasUsuario.php", {
            "id_usuario": window.localStorage.getItem("id_usuario"),
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            let json = JSON.parse(data.data);
            this.metas_arr = json;
            for (let i = 0; i < json.length; i++) {
                if (json[i].year == 2017) {
                    this.metas.y_2017.meta = json[i].meta;
                    this.metas.y_2017.meta_venta = json[i].meta_venta;
                    this.metas.y_2017.renta_o = json[i].renta_ocacional;
                    this.metas.y_2017.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2018) {
                    this.metas.y_2018.meta = json[i].meta;
                    this.metas.y_2018.meta_venta = json[i].meta_venta;
                    this.metas.y_2018.renta_o = json[i].renta_ocacional;
                    this.metas.y_2018.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2019) {
                    this.metas.y_2019.meta = json[i].meta;
                    this.metas.y_2019.meta_venta = json[i].meta_venta;
                    this.metas.y_2019.renta_o = json[i].renta_ocacional;
                    this.metas.y_2019.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2020) {
                    this.metas.y_2020.meta = json[i].meta;
                    this.metas.y_2020.meta_venta = json[i].meta_venta;
                    this.metas.y_2020.renta_o = json[i].renta_ocacional;
                    this.metas.y_2020.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2021) {
                    this.metas.y_2021.meta = json[i].meta;
                    this.metas.y_2021.meta_venta = json[i].meta_venta;
                    this.metas.y_2021.renta_o = json[i].renta_ocacional;
                    this.metas.y_2021.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2022) {
                    this.metas.y_2022.meta = json[i].meta;
                    this.metas.y_2022.meta_venta = json[i].meta_venta;
                    this.metas.y_2022.renta_o = json[i].renta_ocacional;
                    this.metas.y_2022.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2023) {
                    this.metas.y_2023.meta = json[i].meta;
                    this.metas.y_2023.meta_venta = json[i].meta_venta;
                    this.metas.y_2023.renta_o = json[i].renta_ocacional;
                    this.metas.y_2023.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2024) {
                    this.metas.y_2024.meta = json[i].meta;
                    this.metas.y_2024.meta_venta = json[i].meta_venta;
                    this.metas.y_2024.renta_o = json[i].renta_ocacional;
                    this.metas.y_2024.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2025) {
                    this.metas.y_2025.meta = json[i].meta;
                    this.metas.y_2025.meta_venta = json[i].meta_venta;
                    this.metas.y_2025.renta_o = json[i].renta_ocacional;
                    this.metas.y_2025.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2026) {
                    this.metas.y_2026.meta = json[i].meta;
                    this.metas.y_2026.meta_venta = json[i].meta_venta;
                    this.metas.y_2026.renta_o = json[i].renta_ocacional;
                    this.metas.y_2026.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2027) {
                    this.metas.y_2027.meta = json[i].meta;
                    this.metas.y_2027.meta_venta = json[i].meta_venta;
                    this.metas.y_2027.renta_o = json[i].renta_ocacional;
                    this.metas.y_2027.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2028) {
                    this.metas.y_2028.meta = json[i].meta;
                    this.metas.y_2028.meta_venta = json[i].meta_venta;
                    this.metas.y_2028.renta_o = json[i].renta_ocacional;
                    this.metas.y_2028.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2029) {
                    this.metas.y_2029.meta = json[i].meta;
                    this.metas.y_2029.meta_venta = json[i].meta_venta;
                    this.metas.y_2029.renta_o = json[i].renta_ocacional;
                    this.metas.y_2029.venta_o = json[i].venta_ocacional;
                }
                if (json[i].year == 2030) {
                    this.metas.y_2030.meta = json[i].meta;
                    this.metas.y_2030.meta_venta = json[i].meta_venta;
                    this.metas.y_2030.renta_o = json[i].renta_ocacional;
                    this.metas.y_2030.venta_o = json[i].venta_ocacional;
                }
            }
            console.log(json);
            console.log(this.metas);
            //this.loader.dismiss();
            //this.ref.detectChanges();
        })
            .catch(error => {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
    getPortafolio() {
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Portafolio/getPortafolio.php", {
            "id_usuario": window.localStorage.getItem("id_usuario"),
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            let json = JSON.parse(data.data);
            this.portafolio_arr = json;
            console.log(this.portafolio_arr);
        })
            .catch(error => {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
    editarMeta(t_meta, metaActual, year, renta_o_venta) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Editar Meta de " + renta_o_venta + " de " + year,
                inputs: [
                    {
                        name: 'meta',
                        placeholder: 'Monto de la meta',
                        value: metaActual
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Guardar',
                        handler: data => {
                            var id_meta = -1;
                            for (let i = 0; i < this.metas_arr.length; i++) {
                                if (this.metas_arr[i].year == year) {
                                    id_meta = this.metas_arr[i].id_meta;
                                }
                            }
                            console.log("ROOTURL", this.rs.ROOTURL);
                            this.http.setRequestTimeout(5.0);
                            this.http.post(this.rs.ROOTURL + "Metas/editarMeta.php", {
                                "t_meta": t_meta,
                                "id_meta": id_meta,
                                "meta": data.meta,
                                "year": year,
                                "id_usuario": window.localStorage.getItem("id_usuario"),
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                console.log("data", data);
                                this.getMetas();
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
            yield alert.present();
            /*
                let alert = this.alertCtrl.create({
                  inputs: [
                    {
                      name: 'meta',
                      placeholder: 'Monto de la meta',
                      value:metaActual
                    },
                  ],
                  buttons: [
                    {
                      text: 'Cancel',
                      role: 'cancel',
                      handler: data => {
                        console.log('Cancel clicked');
                      }
                    },
                    {
                      text: 'Login',
                      handler: data => {
                        console.log(data.meta)
                      }
                    }
                  ]
                });
                alert.present();*/
        });
    }
    agregarMeta(year) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Agregar Meta del Año",
                inputs: [
                    {
                        name: 'meta',
                        placeholder: 'Monto de la meta',
                        value: 0
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Agregar',
                        handler: data => {
                            console.log("ROOTURL", this.rs.ROOTURL);
                            this.http.setRequestTimeout(5.0);
                            this.http.post(this.rs.ROOTURL + "Metas/agregarMeta.php", {
                                "meta": data.meta,
                                "year": year,
                                "id_usuario": window.localStorage.getItem("id_usuario")
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                console.log(data.data);
                                this.getMetas();
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
            yield alert.present();
            /*
                let alert = this.alertCtrl.create({
                  inputs: [
                    {
                      name: 'meta',
                      placeholder: 'Monto de la meta',
                      value:metaActual
                    },
                  ],
                  buttons: [
                    {
                      text: 'Cancel',
                      role: 'cancel',
                      handler: data => {
                        console.log('Cancel clicked');
                      }
                    },
                    {
                      text: 'Login',
                      handler: data => {
                        console.log(data.meta)
                      }
                    }
                  ]
                });
                alert.present();*/
        });
    }
    agregarRenta(year) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Agregar Renta Adicional. Para disminuir ingresa la cantidad con signo - al inicio.",
                inputs: [
                    {
                        name: 'monto',
                        placeholder: 'Monto',
                        value: 0
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Agregar',
                        handler: data => {
                            console.log("ROOTURL", this.rs.ROOTURL);
                            console.log("data.monto", data.monto);
                            console.log("id_usuario", window.localStorage.getItem("id_usuario"));
                            this.http.setRequestTimeout(5.0);
                            this.http.post(this.rs.ROOTURL + "Metas/agregarRentaAdicional.php", {
                                "monto": data.monto / 1,
                                "year": year,
                                "id_usuario": window.localStorage.getItem("id_usuario")
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                console.log(data.data);
                                this.getMetas();
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
            yield alert.present();
        });
    }
    agregarVenta(year) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Agregar Venta Adicional. Para disminuir ingresa la cantidad con signo - al inicio.",
                inputs: [
                    {
                        name: 'monto',
                        placeholder: 'Monto',
                        value: 0
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Agregar',
                        handler: data => {
                            console.log("ROOTURL", this.rs.ROOTURL);
                            this.http.setRequestTimeout(5.0);
                            this.http.post(this.rs.ROOTURL + "Metas/agregarVentaAdicional.php", {
                                "monto": data.monto,
                                "year": year,
                                "id_usuario": window.localStorage.getItem("id_usuario")
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                console.log(data.data);
                                this.getMetas();
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
            yield alert.present();
        });
    }
};
PortfolioPage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_3__["RootSettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
PortfolioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio',
        template: __webpack_require__(/*! raw-loader!./portfolio.page.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio/portfolio.page.html"),
        styles: [__webpack_require__(/*! ./portfolio.page.scss */ "./src/app/portfolio/portfolio.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_3__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], PortfolioPage);



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



/***/ }),

/***/ "./src/app/shared/button-fab/button-fab.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/button-fab/button-fab.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9idXR0b24tZmFiL2J1dHRvbi1mYWIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/button-fab/button-fab.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/button-fab/button-fab.component.ts ***!
  \***********************************************************/
/*! exports provided: ButtonFabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonFabComponent", function() { return ButtonFabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonFabComponent = class ButtonFabComponent {
    constructor() { }
    ngOnInit() { }
};
ButtonFabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button-fab',
        template: __webpack_require__(/*! raw-loader!./button-fab.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/button-fab/button-fab.component.html"),
        styles: [__webpack_require__(/*! ./button-fab.component.scss */ "./src/app/shared/button-fab/button-fab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ButtonFabComponent);



/***/ }),

/***/ "./src/app/shared/footer-blue/footer-blue.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/footer-blue/footer-blue.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXItYmx1ZS9mb290ZXItYmx1ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/footer-blue/footer-blue.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/footer-blue/footer-blue.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterBlueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBlueComponent", function() { return FooterBlueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");



let FooterBlueComponent = class FooterBlueComponent {
    constructor(iab) {
        this.iab = iab;
    }
    ngOnInit() { }
    openLink() {
        this.iab.create("https://www.brokersnetwork.mx/", "_system");
    }
};
FooterBlueComponent.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] }
];
FooterBlueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer-blue',
        template: __webpack_require__(/*! raw-loader!./footer-blue.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer-blue/footer-blue.component.html"),
        styles: [__webpack_require__(/*! ./footer-blue.component.scss */ "./src/app/shared/footer-blue/footer-blue.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])
], FooterBlueComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let FooterComponent = class FooterComponent {
    constructor(iab, keyboard, platform) {
        this.iab = iab;
        this.keyboard = keyboard;
        this.platform = platform;
    }
    /*  isKeyboardHide=true;
    
      ionViewWillEnter() {
    
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
    ngOnInit() { }
    openLink() {
        this.iab.create("https://www.brokersnetwork.mx/", "_system");
    }
};
FooterComponent.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/main-header/main-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/main-header/main-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/main-header/main-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/main-header/main-header.component.ts ***!
  \*************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainHeaderComponent = class MainHeaderComponent {
    constructor() {
        this.urlLogo = '/assets/images/logoHB.png';
    }
    ngOnInit() { }
};
MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-header',
        template: __webpack_require__(/*! raw-loader!./main-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/main-header/main-header.component.html"),
        styles: [__webpack_require__(/*! ./main-header.component.scss */ "./src/app/shared/main-header/main-header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainHeaderComponent);



/***/ }),

/***/ "./src/app/shared/menu-registro/menu-registro.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/menu-registro/menu-registro.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tZW51LXJlZ2lzdHJvL21lbnUtcmVnaXN0cm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/menu-registro/menu-registro.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/menu-registro/menu-registro.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenuRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRegistroComponent", function() { return MenuRegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuRegistroComponent = class MenuRegistroComponent {
    constructor() {
        this.urlLogo = '/assets/images/logoB.png';
    }
    ngOnInit() { }
};
MenuRegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-registro',
        template: __webpack_require__(/*! raw-loader!./menu-registro.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/menu-registro/menu-registro.component.html"),
        styles: [__webpack_require__(/*! ./menu-registro.component.scss */ "./src/app/shared/menu-registro/menu-registro.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuRegistroComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_registro_menu_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-registro/menu-registro.component */ "./src/app/shared/menu-registro/menu-registro.component.ts");
/* harmony import */ var _footer_blue_footer_blue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer-blue/footer-blue.component */ "./src/app/shared/footer-blue/footer-blue.component.ts");
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-header/main-header.component */ "./src/app/shared/main-header/main-header.component.ts");
/* harmony import */ var _button_fab_button_fab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button-fab/button-fab.component */ "./src/app/shared/button-fab/button-fab.component.ts");










let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _menu_registro_menu_registro_component__WEBPACK_IMPORTED_MODULE_6__["MenuRegistroComponent"],
            _footer_blue_footer_blue_component__WEBPACK_IMPORTED_MODULE_7__["FooterBlueComponent"],
            _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_8__["MainHeaderComponent"],
            _button_fab_button_fab_component__WEBPACK_IMPORTED_MODULE_9__["ButtonFabComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]
        ],
        exports: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _menu_registro_menu_registro_component__WEBPACK_IMPORTED_MODULE_6__["MenuRegistroComponent"],
            _footer_blue_footer_blue_component__WEBPACK_IMPORTED_MODULE_7__["FooterBlueComponent"],
            _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_8__["MainHeaderComponent"],
            _button_fab_button_fab_component__WEBPACK_IMPORTED_MODULE_9__["ButtonFabComponent"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=portfolio-portfolio-module-es2015.js.map