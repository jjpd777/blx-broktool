(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-clientes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/clientes/clientes.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clientes/clientes.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n\r\n<ion-content>\r\n  <div class=\"row row--header\">\r\n\r\n    <div class=\"header--content\">\r\n      <img style=\"width: 10%;\"\r\n          class=\"imge\"\r\n          src=\"/assets/images/clientes.png\"\r\n        />\r\n        <div class=\"header--content__textos\">\r\n          <p class=\"header__title\">Mis clientes</p>\r\n       <!-- <p class=\"header__subtitle\"><span style=\"color: white;\">{{clientes.length}}</span> Cilente(s)</p>-->\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container\">\r\n    <div class=\"row\" style=\"padding: 1vw;margin-top: 3vw;\">\r\n      <div class=\"col-sm-8 col-md-8 col-8\" style=\"text-align: left; margin-top: 1vw\">\r\n        <p class=\"header__subtitle\"><span>{{this.filteredclientesRenta.length + this.filteredclientesVenta.length}}</span> Cliente(s)</p>\r\n      </div>\r\n      <div class=\"col-sm-4 col-md-4 col-4\" style=\"text-align: left\">\r\n        <ion-icon slot=\"icon-only\" name=\"add\" style=\"color: #ff7949;font-size: 28px\" routerLink=\"/add-cliente\"></ion-icon>\r\n      </div>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"botonera\" style=\"\">\r\n        <!--  <div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 2vw;margin-bottom: 2vw\">\r\n            <button type=\"button\" class=\"btn btn-network\" routerLink=\"/add-propiedad\">Agregar propiedades</button>\r\n          </div>-->\r\n\r\n        <tabset [justified]=\"true\" style=\"margin-top: 2vw;margin-bottom: 2vw;text-align: center;    width: 100%;\">\r\n          <!--   <tab heading=\"Renta\" customClass=\"customClass\">\r\n               <div class=\"container\">\r\n                 <div class=\"row\" style=\"min-width: 90vw\">\r\n                   <a *ngFor=\"let propiedad of filteredpropiedadesRenta\" (click)=\"verPropiedad(propiedad,$event)\" style=\"width: 96vw;margin-left: 2vw;\">\r\n                     <ion-item *ngIf=\"propiedad.tipo=='Renta'\">\r\n                       <ion-thumbnail slot=\"start\">\r\n                         <img src=\"/assets/images/study.png\">\r\n                       </ion-thumbnail>\r\n                       <ion-label>\r\n                         <h2 style=\"text-transform: capitalize\">{{propiedad.nombre}}</h2>\r\n                         <p>{{propiedad.direccion}}</p>\r\n                         <p>{{propiedad.precio | currency}}</p>\r\n                       </ion-label>\r\n                       <ion-button slot=\"end\" routerLink=\"/editar-propiedad\" style=\"width: 12vw;height: 10vw;\" (click)=\"asignarPropiedadAEditar(propiedad,$event)\" >\r\n                         <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\r\n                       </ion-button>\r\n                       <ion-button slot=\"end\" style=\"width: 12vw;height: 10vw;\" (click)=\"archivarPropiedad(propiedad,$event)\">\r\n                         <ion-icon slot=\"icon-only\" name=\"archive\"></ion-icon>\r\n                       </ion-button>\r\n                     </ion-item>\r\n                   </a>\r\n                   <ion-item *ngIf=\"filteredpropiedadesRenta.length==0\"  style=\"padding: 5vw\">\r\n                     <ion-avatar slot=\"start\">\r\n                       <img src=\"/assets/images/study.png\">\r\n                     </ion-avatar>\r\n                     &lt;!&ndash; <ion-thumbnail slot=\"start\">\r\n                        <img src=\"/assets/images/clientes.png\">\r\n                      </ion-thumbnail>&ndash;&gt;\r\n                     <div class=\"row\">\r\n                       <div class=\"col-12\">\r\n                         <ion-label>\r\n                           <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\r\n                         </ion-label>\r\n                       </div>\r\n                     </div>\r\n                   </ion-item>\r\n                 </div>\r\n               </div>\r\n             </tab>-->\r\n          <!--<tab heading=\"Renta\" customClass=\"customClass\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <ion-list>\r\n                  <ion-item-sliding *ngFor=\"let propiedad of filteredpropiedadesRenta\">\r\n                    <ion-item style=\"padding: 1vw\" (click)=\"verPropiedad(propiedad,$event)\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/study.png\">\r\n                      </ion-avatar>\r\n                      <div class=\"row\" style=\"width: 90%\">\r\n                          <div class=\"col-8\">\r\n                            <ion-label>\r\n                              <h2 style=\"text-transform: capitalize\">{{propiedad.nombre}}</h2>\r\n                              <p *ngIf=\"propiedad.direccion!=''\">{{propiedad.direccion}}</p>\r\n                              <p *ngIf=\"propiedad.direccion==''\">Sin dirección registrada</p>\r\n                              <p>{{propiedad.precio | currency}}</p>\r\n                            </ion-label>\r\n                          </div>\r\n                          <div class=\"col-4\" style=\"text-align: right\">\r\n                            <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"asignarPropiedadAEditar(propiedad,$event)\" >\r\n                              <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\r\n                            </ion-button>\r\n                            <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"archivarPropiedad(propiedad,$event)\">\r\n                              <ion-icon slot=\"icon-only\" name=\"archive\"></ion-icon>\r\n                            </ion-button>\r\n                          </div>\r\n                        </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                  <ion-item-sliding *ngIf=\"filteredpropiedadesRenta.length==0\" >\r\n                    <ion-item style=\"padding: 5vw\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/study.png\">\r\n                      </ion-avatar>\r\n                      &lt;!&ndash; <ion-thumbnail slot=\"start\">\r\n                         <img src=\"/assets/images/clientes.png\">\r\n                       </ion-thumbnail>&ndash;&gt;\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          <ion-label>\r\n                            <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\r\n                          </ion-label>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                </ion-list>\r\n              </div>\r\n            </div>\r\n          </tab>-->\r\n          <tab heading=\"Renta\" customClass=\"customClass\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <ion-list style=\"width: 100%;\">\r\n                  <ion-item-sliding *ngFor=\"let cliente of filteredclientesRenta\">\r\n                    <ion-item style=\"padding: 1vw\" (click)=\"irCliente(cliente)\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/clientes.png\">\r\n                      </ion-avatar>\r\n                      <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-7\" style=\"padding-right: 0px\">\r\n                          <ion-label>\r\n                            <h2 style=\"text-transform: capitalize\" *ngIf=\"cliente.nombre.length<=20\">{{cliente.nombre}}</h2>\r\n                            <h2 style=\"text-transform: capitalize\" *ngIf=\"cliente.nombre.length>20\">{{cliente.nombre.substring(0,20)}}...</h2>\r\n\r\n                            <h4 style=\"text-transform: capitalize\" *ngIf=\"cliente.zona_busca!=''&&cliente.zona_busca.length<=20\">{{cliente.zona_busca}}</h4>\r\n                            <h4 style=\"text-transform: capitalize\" *ngIf=\"cliente.zona_busca!=''&&cliente.zona_busca.length>20\">{{cliente.zona_busca.substring(0,20)}}...</h4>\r\n                            <p *ngIf=\"cliente.zona_busca==''\">Sin Zona</p>\r\n                            <p>{{cliente.presupuesto | currency}}</p>\r\n                          </ion-label>\r\n                        </div>\r\n                        <div class=\"col-5\" style=\"text-align: right; padding: 0px\">\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openTelefono(cliente.telefono,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\r\n                            <!-- <a href=\"tel:{{cliente.telefono}}\" style=\"text-decoration: none; color:white;\">\r\n                               <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\r\n                             </a>-->\r\n                          </ion-button>\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"archivarCliente(cliente,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"archive\"></ion-icon>\r\n                            <!-- <a href=\"mailto:{{cliente.email}}\" style=\"text-decoration: none; color:white;\">\r\n                               <ion-icon slot=\"icon-only\" name=\"mail\"></ion-icon>\r\n                             </a>-->\r\n                          </ion-button>\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openWhatsapp(cliente.telefono,cliente.nombre,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                            <!-- <a href=\"https://wa.me/+521{{cliente.telefono}}?text=Hola %20{{cliente.nombre}}, \" style=\"text-decoration: none; color:white;\">\r\n                               <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                             </a>-->\r\n                          </ion-button>\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"editarCliente(cliente,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                  <ion-item-sliding *ngIf=\"filteredclientesRenta.length==0\" >\r\n                    <ion-item style=\"padding: 5vw\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/clientes.png\">\r\n                      </ion-avatar>\r\n                      <!-- <ion-thumbnail slot=\"start\">\r\n                         <img src=\"/assets/images/clientes.png\">\r\n                       </ion-thumbnail>-->\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          <ion-label>\r\n                            <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\r\n                          </ion-label>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                </ion-list>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab heading=\"Venta\" customClass=\"customClass\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <ion-list style=\"width: 100%;\">\r\n                  <ion-item-sliding *ngFor=\"let cliente of filteredclientesVenta\">\r\n                    <ion-item style=\"padding: 1vw\" (click)=\"irCliente(cliente)\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/clientes.png\">\r\n                      </ion-avatar>\r\n                      <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-7\" style=\"padding-right: 0px\">\r\n                          <ion-label>\r\n                            <h2 style=\"text-transform: capitalize\" *ngIf=\"cliente.nombre.length<=20\">{{cliente.nombre}}</h2>\r\n                            <h2 style=\"text-transform: capitalize\" *ngIf=\"cliente.nombre.length>20\">{{cliente.nombre.substring(0,20)}}...</h2>\r\n\r\n                            <h4 style=\"text-transform: capitalize\" *ngIf=\"cliente.zona_busca!=''&&cliente.zona_busca.length<=20\">{{cliente.zona_busca}}</h4>\r\n                            <h4 style=\"text-transform: capitalize\" *ngIf=\"cliente.zona_busca!=''&&cliente.zona_busca.length>20\">{{cliente.zona_busca.substring(0,20)}}...</h4>\r\n                            <p *ngIf=\"cliente.zona_busca==''\">Sin Zona</p>\r\n                            <p>{{cliente.presupuesto | currency}}</p>\r\n                          </ion-label>\r\n                        </div>\r\n                        <div class=\"col-5\" style=\"text-align: right; padding: 0px\">\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openTelefono(cliente.telefono,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\r\n                            <!-- <a href=\"tel:{{cliente.telefono}}\" style=\"text-decoration: none; color:white;\">\r\n                               <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\r\n                             </a>-->\r\n                          </ion-button>\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"archivarCliente(cliente,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"archive\"></ion-icon>\r\n                            <!-- <a href=\"mailto:{{cliente.email}}\" style=\"text-decoration: none; color:white;\">\r\n                               <ion-icon slot=\"icon-only\" name=\"mail\"></ion-icon>\r\n                             </a>-->\r\n                          </ion-button>\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openWhatsapp(cliente.telefono,cliente.nombre,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                            <!-- <a href=\"https://wa.me/+521{{cliente.telefono}}?text=Hola %20{{cliente.nombre}}, \" style=\"text-decoration: none; color:white;\">\r\n                               <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                             </a>-->\r\n                          </ion-button>\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"editarCliente(cliente,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                  <ion-item-sliding *ngIf=\"filteredclientesVenta.length==0\" >\r\n                    <ion-item style=\"padding: 5vw\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/clientes.png\">\r\n                      </ion-avatar>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          <ion-label>\r\n                            <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\r\n                          </ion-label>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                </ion-list>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n        </tabset>\r\n        <!--   <div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 6vw;\">\r\n             <button type=\"button\" class=\"btn btn-network\" routerLink=\"/mis-propiedades\">Mis propiedades</button>\r\n           </div>-->\r\n        <!--   <div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 6vw;\">\r\n             <button type=\"button\" class=\"btn btn-network\">Solicitar colaboración</button>\r\n           </div>-->\r\n      </div>\r\n    </div>\r\n<!--\r\n    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"botonera\" style=\"\">\r\n        <tabset [justified]=\"true\" style=\"    width: 100%;margin-top: 2vw;margin-bottom: 2vw;text-align: center\">\r\n          <tab heading=\"Renta\" customClass=\"customClass\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <ion-list>\r\n                  <ion-item-sliding *ngFor=\"let cliente of filteredclientesRenta\" >\r\n                    <ion-item style=\"padding: 1vw\" (click)=\"irCliente(cliente)\" *ngIf=\"cliente.renta_o_venta=='Renta'\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/clientes.png\">\r\n                      </ion-avatar>\r\n                      &lt;!&ndash; <ion-thumbnail slot=\"start\">\r\n                         <img src=\"/assets/images/clientes.png\">\r\n                       </ion-thumbnail>&ndash;&gt;\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                          <ion-label>\r\n                            <h2 style=\"text-transform: capitalize;white-space: normal;\">{{cliente.nombre}}</h2>\r\n                            <p style=\"white-space: normal;text-align: justify\">{{cliente.email}}</p>\r\n                            <p style=\"white-space: normal;text-align: justify\">{{cliente.zona_busca}}</p>\r\n                            <p style=\"white-space: normal;text-align: justify\">{{cliente.presupuesto | currency}}</p>\r\n                          &lt;!&ndash;  <p style=\"white-space: normal;text-align: justify\">{{cliente.referencia}}</p>&ndash;&gt;\r\n                          </ion-label>\r\n                        </div>\r\n                        <div class=\"col-6\" style=\"text-align: center\">\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openTelefono(cliente.telefono,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\r\n                           &lt;!&ndash; <a href=\"tel:{{cliente.telefono}}\" style=\"text-decoration: none; color:white;\">\r\n                              <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\r\n                            </a>&ndash;&gt;\r\n                          </ion-button>\r\n\r\n&lt;!&ndash;\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openMail(cliente.email,$event)\">\r\n&ndash;&gt;\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"archivarCliente(cliente,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"archive\"></ion-icon>\r\n                              &lt;!&ndash; <a href=\"mailto:{{cliente.email}}\" style=\"text-decoration: none; color:white;\">\r\n                                 <ion-icon slot=\"icon-only\" name=\"mail\"></ion-icon>\r\n                               </a>&ndash;&gt;\r\n                          </ion-button>\r\n\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openWhatsapp(cliente.telefono,cliente.nombre,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                           &lt;!&ndash; <a href=\"https://wa.me/+521{{cliente.telefono}}?text=Hola %20{{cliente.nombre}}, \" style=\"text-decoration: none; color:white;\">\r\n                              <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                            </a>&ndash;&gt;\r\n                          </ion-button>\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"editarCliente(cliente,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                    </ion-item>\r\n                  &lt;!&ndash;  <ion-item-options side=\"start\" (click)=\"eliminarCliente(cliente)\">\r\n                      <ion-item-option color=\"danger\">\r\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                      </ion-item-option>\r\n                    </ion-item-options>&ndash;&gt;\r\n                    &lt;!&ndash;  <ion-item-options side=\"end\" (click)=\"editarCliente(cliente)\" routerLink=\"/editar-cliente\">\r\n                        <ion-item-option><ion-icon slot=\"icon-only\" name=\"create\"></ion-icon></ion-item-option>\r\n                      </ion-item-options>&ndash;&gt;\r\n                  </ion-item-sliding>\r\n                  <ion-item-sliding *ngIf=\"filteredclientesRenta.length==0\" >\r\n                    <ion-item style=\"padding: 5vw\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/clientes.png\">\r\n                      </ion-avatar>\r\n                      &lt;!&ndash; <ion-thumbnail slot=\"start\">\r\n                         <img src=\"/assets/images/clientes.png\">\r\n                       </ion-thumbnail>&ndash;&gt;\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          <ion-label>\r\n                            <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\r\n                          </ion-label>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                </ion-list>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n\r\n          <tab heading=\"Venta\" customClass=\"customClass\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <ion-list>\r\n                  <ion-item-sliding *ngFor=\"let cliente of filteredclientesVenta \" >\r\n                    <ion-item style=\"padding: 1vw\" (click)=\"irCliente(cliente)\" *ngIf=\"cliente.renta_o_venta=='Venta'\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/clientes.png\">\r\n                      </ion-avatar>\r\n                      &lt;!&ndash; <ion-thumbnail slot=\"start\">\r\n                         <img src=\"/assets/images/clientes.png\">\r\n                       </ion-thumbnail>&ndash;&gt;\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                          <ion-label>\r\n                            <h2 style=\"text-transform: capitalize;white-space: normal;\">{{cliente.nombre}}</h2>\r\n&lt;!&ndash;                            <p style=\"white-space: normal;text-align: justify\">{{cliente.email}}</p>&ndash;&gt;\r\n                            <p style=\"white-space: normal;text-align: justify\">{{cliente.zona_busca}}</p>\r\n                            <p style=\"white-space: normal;text-align: justify\">{{cliente.presupuesto | currency}}</p>\r\n                           &lt;!&ndash; <p style=\"white-space: normal;text-align: justify\">{{cliente.referencia}}</p>&ndash;&gt;\r\n                          </ion-label>\r\n                        </div>\r\n                        <div class=\"col-6\" style=\"text-align: center\">\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openTelefono(cliente.telefono,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\r\n                            &lt;!&ndash; <a href=\"tel:{{cliente.telefono}}\" style=\"text-decoration: none; color:white;\">\r\n                               <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\r\n                             </a>&ndash;&gt;\r\n                          </ion-button>\r\n\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"archivarCliente(cliente,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"archive\"></ion-icon>\r\n                            &lt;!&ndash; <a href=\"mailto:{{cliente.email}}\" style=\"text-decoration: none; color:white;\">\r\n                               <ion-icon slot=\"icon-only\" name=\"mail\"></ion-icon>\r\n                             </a>&ndash;&gt;\r\n                          </ion-button>\r\n\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"openWhatsapp(cliente.telefono,cliente.nombre,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                            &lt;!&ndash; <a href=\"https://wa.me/+521{{cliente.telefono}}?text=Hola %20{{cliente.nombre}}, \" style=\"text-decoration: none; color:white;\">\r\n                               <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                             </a>&ndash;&gt;\r\n                          </ion-button>\r\n                          <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"editarCliente(cliente,$event)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n                   &lt;!&ndash; <ion-item-options side=\"start\" (click)=\"eliminarCliente(cliente)\">\r\n                      <ion-item-option color=\"danger\">\r\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                      </ion-item-option>\r\n                    </ion-item-options>&ndash;&gt;\r\n                  </ion-item-sliding>\r\n                  <ion-item-sliding *ngIf=\"filteredclientesVenta.length==0\" >\r\n                    <ion-item style=\"padding: 5vw\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img src=\"/assets/images/clientes.png\">\r\n                      </ion-avatar>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          <ion-label>\r\n                            <h2 style=\"white-space: normal;\">Aún no se tienen registros para este concepto</h2>\r\n                          </ion-label>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-item-sliding>\r\n                </ion-list>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n        </tabset>\r\n      </div>\r\n    </div>-->\r\n<!--    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"botonera\" style=\"\">\r\n        &lt;!&ndash;<div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 2vw;\">\r\n          <button type=\"button\" class=\"btn btn-network\" routerLink=\"/add-cliente\">Agregar Clientes</button>\r\n        </div>&ndash;&gt;\r\n&lt;!&ndash;        <div class=\"row\">\r\n          <ion-list>\r\n            <ion-item-sliding *ngFor=\"let cliente of clientes\" >\r\n              <ion-item style=\"padding: 1vw\" (click)=\"irCliente(cliente)\">\r\n                <ion-avatar slot=\"start\">\r\n                  <img src=\"/assets/images/clientes.png\">\r\n                </ion-avatar>\r\n                &lt;!&ndash; <ion-thumbnail slot=\"start\">\r\n                   <img src=\"/assets/images/clientes.png\">\r\n                 </ion-thumbnail>&ndash;&gt;\r\n                <div class=\"row\">\r\n                  <div class=\"col-7\">\r\n                    <ion-label>\r\n                      <h2 style=\"text-transform: capitalize;white-space: normal;\">{{cliente.nombre}}</h2>\r\n                      <p style=\"white-space: normal;text-align: justify\">{{cliente.email}}</p>\r\n                      <p style=\"white-space: normal;text-align: justify\">{{cliente.referencia}} Un texto mucho más corto</p>\r\n                    </ion-label>\r\n                  </div>\r\n                  <div class=\"col-5\" style=\"text-align: center\">\r\n                    <ion-button style=\"width: 12vw;height: 10vw;\">\r\n                      <a href=\"tel:{{cliente.telefono}}\" style=\"text-decoration: none; color:white;\">\r\n                        <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\r\n                      </a>\r\n                    </ion-button>\r\n\r\n                    <ion-button style=\"width: 12vw;height: 10vw;\">\r\n                      <a href=\"mailto:{{cliente.email}}\" style=\"text-decoration: none; color:white;\">\r\n                        <ion-icon slot=\"icon-only\" name=\"mail\"></ion-icon>\r\n                      </a>\r\n                    </ion-button>\r\n\r\n                    <ion-button style=\"width: 12vw;height: 10vw;\">\r\n                      <a href=\"https://wa.me/+521{{cliente.telefono}}?text=Hola %20{{cliente.nombre}}, \" style=\"text-decoration: none; color:white;\">\r\n                        <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                      </a>\r\n                    </ion-button>\r\n                    <ion-button style=\"width: 12vw;height: 10vw;\" (click)=\"editarCliente(cliente,$event)\">\r\n                      <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\r\n                    </ion-button>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </ion-item>\r\n              <ion-item-options side=\"start\" (click)=\"eliminarCliente(cliente)\">\r\n                <ion-item-option color=\"danger\">\r\n                  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                </ion-item-option>\r\n              </ion-item-options>\r\n            &lt;!&ndash;  <ion-item-options side=\"end\" (click)=\"editarCliente(cliente)\" routerLink=\"/editar-cliente\">\r\n                <ion-item-option><ion-icon slot=\"icon-only\" name=\"create\"></ion-icon></ion-item-option>\r\n              </ion-item-options>&ndash;&gt;\r\n            </ion-item-sliding>\r\n          </ion-list>\r\n        </div>&ndash;&gt;\r\n       &lt;!&ndash; <div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 6vw;\">\r\n          <button type=\"button\" class=\"btn btn-network\" routerLink=\"/mis-clientes\">Mis clientes</button>\r\n        </div>&ndash;&gt;\r\n&lt;!&ndash;        <div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 6vw;\">\r\n          <button type=\"button\" class=\"btn btn-network\">Solicitar colaboración</button>\r\n        </div>&ndash;&gt;\r\n      </div>\r\n    </div>-->\r\n  </div>\r\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 align-self-center\">\r\n    <div class=\"form-group\">\r\n      <input\r\n              routerLink=\"/clientes-archivados\"\r\n              type=\"button\"\r\n              class=\"form-control\"\r\n              value=\"Ver clientes archivados\"\r\n      />\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <img src=\"/assets/images/floatmenu_2.png\" />\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/portfolio\">\r\n        <img src=\"/assets/images/portfolio.png\" />\r\n      </ion-fab-button>\r\n<!--      <ion-fab-button color=\"light\" routerLink=\"/network\">\r\n        <img src=\"/assets/images/globe.png\" />\r\n      </ion-fab-button>-->\r\n      <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\r\n        <img src=\"/assets/images/study.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/clientes\">\r\n        <img src=\"/assets/images/user.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<app-footer-blue></app-footer-blue>\r\n"

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

/***/ "./src/app/clientes/clientes-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/clientes/clientes-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ClientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageRoutingModule", function() { return ClientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientes.page */ "./src/app/clientes/clientes.page.ts");




const routes = [
    {
        path: '',
        component: _clientes_page__WEBPACK_IMPORTED_MODULE_3__["ClientesPage"]
    }
];
let ClientesPageRoutingModule = class ClientesPageRoutingModule {
};
ClientesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClientesPageRoutingModule);



/***/ }),

/***/ "./src/app/clientes/clientes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/clientes/clientes.module.ts ***!
  \*********************************************/
/*! exports provided: ClientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function() { return ClientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clientes-routing.module */ "./src/app/clientes/clientes-routing.module.ts");
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clientes.page */ "./src/app/clientes/clientes.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");









let ClientesPageModule = class ClientesPageModule {
};
ClientesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientesPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"]
        ],
        declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_6__["ClientesPage"]]
    })
], ClientesPageModule);



/***/ }),

/***/ "./src/app/clientes/clientes.page.scss":
/*!*********************************************!*\
  !*** ./src/app/clientes/clientes.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__title {\n  color: white;\n  font-size: 27px;\n  font-weight: 600;\n  margin: 0px;\n  text-transform: uppercase;\n}\n\n.header__subtitle {\n  color: #094f72;\n  font-size: 15px;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 700;\n}\n\n.btn-network {\n  width: 100%;\n  height: auto;\n  border-radius: 20px;\n  font-size: 20px;\n  background-color: #56c1be;\n  border-color: #56c1be;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 300;\n}\n\n.botonera {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  align-content: space-around;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.row--header {\n  background-color: #56c1be;\n  padding: 2vw;\n}\n\n.header--content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.header--content__textos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9neW9zb2x1dGlvbnMvRG9jdW1lbnRzL0FwcHMvYnJva2Vycy1uZXR3b3JrL3NyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9jbGllbnRlcy9jbGllbnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDREo7O0FESUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNESjs7QURLRTtFQUNFLHlCQUFBO0VBRUEsWUFBQTtBQ0hKOztBRE1FO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNISjs7QURNRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRlcy9jbGllbnRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5oZWFkZXJfX3RpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXJfX3N1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjMDk0ZjcyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tbmV0d29yayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZjMWJlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTZjMWJlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3RvbmVyYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAucm93LS1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YzFiZTtcclxuICAgIC8vaGVpZ2h0OiAxNXZoO1xyXG4gICAgcGFkZGluZzogMnZ3O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLS1jb250ZW50X190ZXh0b3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4iLCIuaGVhZGVyX190aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhlYWRlcl9fc3VidGl0bGUge1xuICBjb2xvcjogIzA5NGY3MjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idG4tbmV0d29yayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YzFiZTtcbiAgYm9yZGVyLWNvbG9yOiAjNTZjMWJlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5ib3RvbmVyYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yb3ctLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmMxYmU7XG4gIHBhZGRpbmc6IDJ2dztcbn1cblxuLmhlYWRlci0tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLS1jb250ZW50X190ZXh0b3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/clientes/clientes.page.ts":
/*!*******************************************!*\
  !*** ./src/app/clientes/clientes.page.ts ***!
  \*******************************************/
/*! exports provided: ClientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPage", function() { return ClientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");





let ClientesPage = class ClientesPage {
    constructor(alertCtrl, http, rs, loadingController, alertController, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.rs = rs;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.TIME_IN_MS = 5000;
        this.clientes = [];
        this.filteredclientes = [];
        this.filteredclientesRenta = [];
        this.filteredclientesVenta = [];
    }
    irCliente(cliente) {
        window.localStorage.setItem("cliente_a_ver", JSON.stringify(cliente));
        this.navCtrl.navigateRoot('/detalles-cliente');
    }
    editarCliente(cliente, event) {
        event.stopPropagation();
        window.localStorage.setItem("cliente_a_ver", JSON.stringify(cliente));
        this.navCtrl.navigateRoot('/editar-cliente');
    }
    eliminarCliente(cliente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cuidado!',
                message: 'Vas a eliminar al cliente ' + cliente.nombre + ', ¿Continuar?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si, Eliminar',
                        handler: () => {
                            this.presentLoading();
                            console.log("ROOTURL", this.rs.ROOTURL);
                            this.http.setRequestTimeout(5.0);
                            this.http.post(this.rs.ROOTURL + "Clientes/eliminarCliente.php", {
                                "id_cliente": cliente.id_cliente,
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                console.log(data.data);
                                this.loader.dismiss();
                                this.clientes = JSON.parse(data.data);
                            })
                                .catch(error => {
                                console.log(error);
                                console.log(error.status);
                                console.log(error.error); // error message as string
                                console.log(error.headers);
                                this.loader.dismiss();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getClientes();
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Cargando tu información...',
            });
            yield this.loader.present();
        });
    }
    getClientes() {
        this.presentLoading();
        console.log("ROOTURL", this.rs.ROOTURL);
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Clientes/getClientes.php", {}, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            console.log(data.data);
            this.loader.dismiss();
            this.clientes = JSON.parse(data.data);
            //this.filteredclientes = this.clientes.filter(t=>t.archivado ==0);
            /*this.filteredclientesRenta = this.clientes.filter(t=>(t.archivado ==1&&t.renta_o_venta=='Renta'));
            this.filteredclientesVenta= this.clientes.filter(t=>(t.archivado ==1&&t.renta_o_venta=='Venta'));*/
            this.filteredclientes = this.clientes.filter(t => (t.archivado == 0));
            this.filteredclientesRenta = [];
            this.filteredclientesVenta = [];
            this.filteredclientes.forEach((value) => {
                if (value.renta_o_venta == "Renta") {
                    this.filteredclientesRenta.push(value);
                }
                if (value.renta_o_venta == "Venta") {
                    this.filteredclientesVenta.push(value);
                }
            });
        })
            .catch(error => {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            this.loader.dismiss();
        });
    }
    openWhatsapp(telefono_contacto, nombre_contacto, event) {
        event.stopPropagation();
        var link = "";
        link = "whatsapp://send?phone=" + telefono_contacto + "&text=Estimad@ " + nombre_contacto + ", ¡Gracias por la confianza! ";
        window.open(encodeURI(link), '_system');
    }
    openTelefono(telefono_contacto, event) {
        event.stopPropagation();
        var link = "";
        link = "tel:" + telefono_contacto;
        window.open(encodeURI(link), '_system');
    }
    openMail(mail, event) {
        event.stopPropagation();
        var link = "";
        link = "mailto:" + mail;
        window.open(encodeURI(link), '_system');
    }
    archivarCliente(cliente, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            event.stopPropagation();
            const alerta = yield this.alertCtrl.create({
                header: "¿Deseas archivar el cliente?",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Si, archivar',
                        handler: data => {
                            console.log("ROOTURL", this.rs.ROOTURL);
                            this.http.setRequestTimeout(5.0);
                            this.http.post(this.rs.ROOTURL + "Clientes/archivarCliente.php", {
                                "id_cliente": cliente.id_cliente
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                console.log(data.data);
                                alert("Cliente archivado correctamente");
                                this.getClientes();
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
            yield alerta.present();
        });
    }
};
ClientesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ClientesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clientes',
        template: __webpack_require__(/*! raw-loader!./clientes.page.html */ "./node_modules/raw-loader/index.js!./src/app/clientes/clientes.page.html"),
        styles: [__webpack_require__(/*! ./clientes.page.scss */ "./src/app/clientes/clientes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_4__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ClientesPage);



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
        this.ROOTURL = "http://broktool.com/ControlPanel/php/admin/";
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
//# sourceMappingURL=clientes-clientes-module-es2015.js.map