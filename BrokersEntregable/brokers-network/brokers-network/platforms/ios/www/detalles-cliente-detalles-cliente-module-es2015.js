(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalles-cliente-detalles-cliente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/detalles-cliente/detalles-cliente.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detalles-cliente/detalles-cliente.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n<!--      <ion-icon size=\"large\" name=\"arrow-back\" style=\"float: left;margin-top: 1vw;color:white\" routerLink=\"/clientes\"></ion-icon>-->\r\n\r\n      <ion-item>\r\n        <ion-icon slot=\"start\" size=\"large\" name=\"arrow-back\" routerLink=\"/clientes\"></ion-icon>\r\n        <ion-thumbnail slot=\"start\">\r\n          <img src=\"/assets/images/clientes.png\">\r\n        </ion-thumbnail>\r\n        <ion-label (click)=\"editarCliente(cliente)\">\r\n          <h2 style=\"text-transform: capitalize\">{{cliente.nombre}}</h2>\r\n<!--          <p>{{cliente.email}} - {{cliente.telefono}}</p>-->\r\n        <!--  <p>{{cliente.zona_busca}} - {{cliente.presupuesto}}</p>-->\r\n          <p>{{cliente.zona_busca}}</p>\r\n          <p>{{cliente.presupuesto | currency}}</p>\r\n\r\n        </ion-label>\r\n      </ion-item>\r\n   <!--   <ion-item style=\"background-color: transparent\">\r\n        <ion-icon slot=\"start\" size=\"large\" name=\"arrow-back\" routerLink=\"/clientes\"></ion-icon>\r\n        <ion-label (click)=\"editarCliente(cliente)\">\r\n          <h2 style=\"text-transform: capitalize\">{{cliente.nombre}}</h2>\r\n          <p>{{cliente.email}} - {{cliente.telefono}}</p>\r\n          <p>{{cliente.zona_busca}} - {{cliente.presupuesto}}</p>\r\n        </ion-label>\r\n      </ion-item>-->\r\n    </div>\r\n    <!-- <div class=\"row\">\r\n       <ion-item>\r\n         <ion-thumbnail slot=\"start\">\r\n           <img src=\"/assets/images/clientes.png\">\r\n         </ion-thumbnail>\r\n         <ion-label>\r\n           <h2 style=\"text-transform: capitalize\">{{cliente.nombre}}</h2>\r\n           <p>{{cliente.email}} - {{cliente.telefono}}</p>\r\n         </ion-label>\r\n       </ion-item>-->\r\n     <!-- <div class=\"container-card\">\r\n        <div class=\"container-card__img\">\r\n          <img src=\"/assets/images/renta1.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"container-card__texto\">\r\n          <p class=\"container-card__texto&#45;&#45;formato\">{{propiedad.nombre}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"margin-top: 2vw;\">\r\n        <button type=\"button\" class=\"btn btn-network\" routerLink=\"/editar-cliente\">Editar Cliente</button>\r\n      </div>\r\n    </div>-->\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n          <img src=\"/assets/images/captacion-new.png\">\r\n        <!--  <p class=\"container&#45;&#45;letter-section\">\r\n            C</p>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--text-section\">\r\n          <p>\r\n            CAPTACIÓN</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid style=\"margin-bottom: 2%;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <ion-item-sliding>\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_c.conseguir_cliente\" (click)=\"showLoader()\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Conseguir el cliente</h2>\r\n              <!--  <p>Agradece la confianza, agenda una cita,</p>\r\n                <p>y envia tu carta de presentación.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option routerLink=\"/whatsapp\"\r\n                               (click)=\"abrirWhatsapp('Conseguir el cliente',\r\n                          'Estimad@ __________ ¡gracias por la confianza!'+\r\n                          '\\nSi pudiera decirme qué requisitos está buscando:'+\r\n                          '\\n- Dimensiones'+\r\n                          '\\n- Fecha para concretar operación'+\r\n                          '\\n- Presupuesto máximo'+\r\n                          '\\n- Aval o garantía con la que cuenta'+\r\n                          '\\n- Especificaciones especiales'+\r\n                          '\\n- Días y  horarios disponibles para agendar citas')\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" >\r\n                </ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option  (click)=\"abrirFormulario('Conseguir el Cliente')\">\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\" routerLink=\"/formulario\"></ion-icon>\r\n              </ion-item-option>\r\n              <!--<ion-item-option (click)=\"agendarCita()\">\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\">\r\n\r\n                </ion-icon>\r\n              </ion-item-option>-->\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\r\n              </ion-item-option>-->\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option (click)=\"verInfo('CONSEGUIR  EL CLIENTE','Conoce las necesidades y especificaciones de tu cliente.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_c.documentacion_cliente\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Documentación cliente</h2>\r\n             <!--   <p>Solicita los datos y documentos necesarios</p>\r\n                <p>para rentar el inmueble, envia esta liga.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option routerLink=\"/whatsapp\"\r\n                               (click)=\"abrirWhatsapp('Documentación cliente',\r\n                          'Para rentar la propiedad que está buscando, le dejo la lista de los documentos que necesitará tener listos. Puede enviarlos a adjuntos a este número o a mi correo: '+correo_usuario+\r\n                          '\\n\\nREQUISITOS ARRENDATARIO MEXICANO'+\r\n                          '\\n• 3 últimos comprobantes de ingresos o estados de cuenta bancaria'+\r\n                          '\\n• Aval (Fiador con propiedad en DF,  aval solidario, mediación o póliza jurídica)'+\r\n                          '\\n• 2 referencias personales o laborales'+\r\n                          '\\n• Aviso de privacidad (firmado)'+\r\n                          '\\n• Un mes de depósito y mes de renta'+\r\n                          '\\n\\nREQUISITOS ARRENDATARIO EXTRANJERO'+\r\n                          '\\n• Carta de certificado laboral'+\r\n                          '\\n• Aval (Fiador con propiedad en DF, aval solidario, mediación o póliza jurídica)'+\r\n                          '\\n• Un mes de depósito y mes de renta')\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" >\r\n                </ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('DOCUMENTACIÓN DEL CLIENTE','Recopila la documentación del cliente y arma el expediente.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_c.documantacion_fiador\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Documentación Aval</h2>\r\n<!--                <p>Prepara contrato de intermediación</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Documentación Aval',450,' Contrata aquí servicios de Póliza jurídica, Fianza o Mediación.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" routerLink=\"/whatsapp\"\r\n                          (click)=\"abrirWhatsapp('Documentación Aval',\r\n                          'A continuación le dejo los documentos que necesitará tener listos para AVALAR la renta de la propiedad que busca. Puede enviarlos a adjuntos a este número o a mi correo: '+correo_usuario+\r\n                            '\\n\\nREQUISITOS OBLIGADO SOLIDARIO'+\r\n                            '\\n• Copia de RFC'+\r\n                            '\\n• 3 últimos comprobantes de ingresos o estados de cuenta bancaria'+\r\n                            '\\n• Comprobante de domicilio'+\r\n                            '\\n\\nREQUISITOS AVAL EMPRESA'+\r\n                            '\\n• Copia de RFC'+\r\n                            '\\n• 3 últimos comprobantes de ingresos o estados de cuenta bancaria'+\r\n                            '\\n• Comprobante de domicilio de la empresa'+\r\n                            '\\n\\nREQUISITOS REPRESENTANTE LEGAL'+\r\n                            '\\n• Copia de RFC'+\r\n                            '\\n• Copia del poder notarial'+\r\n                            '\\n\\nFIADOR CON BIEN RAÍZ'+\r\n                            '\\n•  Copia de Curp'+\r\n                            '\\n•  Carátula escritura pública de inmueble en DF'+\r\n                            '\\n•  Sello del Registro Público de la Propiedad'+\r\n                            '\\n•  Comprobante de domicilio actual'+\r\n                            '\\n•  $1,000 para investigación de propiedad')\">\r\n                </ion-icon>\r\n              </ion-item-option>\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\r\n              </ion-item-option>-->\r\n             <!-- <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\r\n              </ion-item-option>-->\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('DOCUMENTACIÓN DEL AVAL','Recopila la documentación del aval (obligado solidario, fiador con bien raíz, póliza jurídica o mediación) y completa el expediente.')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!--<div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n      <div class=\"form-group\">\r\n        <input\r\n                type=\"button\"\r\n                class=\"form-control button__siguiente\"\r\n                value=\"No se concretó la operación\"\r\n                (click)=\"cancelarPropiedad()\"\r\n        />\r\n      </div>\r\n    </div>-->\r\n  </ion-grid>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n          <img src=\"/assets/images/busqueda-new.png\">\r\n         <!-- <p class=\"container&#45;&#45;letter-section\">\r\n            E</p>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--text-section\">\r\n          <p>\r\n            BÚSQUEDA</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid style=\"margin-bottom: 2%;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_e.busqueda_propiedades\" (click)=\"showLoader()\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Búsqueda de propiedades\r\n                </h2>\r\n                <!--  <p>Agradece la confianza, agenda una cita,</p>\r\n                  <p>y envia tu carta de presentación.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\r\n              </ion-item-option>-->\r\n           <!--   <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" (click)=\"abrirWhatsapp(cliente)\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\r\n              </ion-item-option>-->\r\n\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Búsqueda de propiedades (5 resultados)',0,' Busquedas inteligentes. Entregamos en PDF opciones en 48hrs confirmando disponibilidad y comisión.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Búsqueda de propiedades (6-10 resultados)',0,' Te ayudamos a buscar propiedades para tu cliente. Entregamos en PDF opciones en 72 hrs confirmando disponibilidad y comisión.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"abrirLink('https://www.inmuebles24.com')\">\r\n                <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('BÚSQUEDA DE PROPIEDADES','Busca propiedades que compartan comisión y estén disponibles para presentar al cliente.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_e.disponibilidad_comision\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Disponibilidad y comisión</h2>\r\n                <!--   <p>Solicita los datos y documentos necesarios</p>\r\n                   <p>para rentar el inmueble, envia esta liga.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option routerLink=\"/whatsapp\"\r\n                               (click)=\"abrirWhatsapp('Disponibilidad y comisión',\r\n                          'Hola! Soy asesor@ y tengo un cliente interesado en esta propiedad suya. ¿Sigue disponible? ¿Comparten comisión? \\n'+\r\n                              'Registro de cliente: \\n'+\r\n                              'Tipo de aval: \\n'+\r\n                              'Aquí mis datos:\\n')\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" >\r\n\r\n                </ion-icon>\r\n              </ion-item-option>\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"mail\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option (click)=\"verInfo('DISPONIBILIDAD Y COMISIÓN:','Verifica disponibilidad de la propiedad y si comparten comisión. No olvides registrar a tu cliente.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_e.armar_recorrido\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Armar Recorrido</h2>\r\n                <!--                <p>Prepara contrato de intermediación</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Apoyo en citas y recorridos',0,'Organizamos tus Citas o Recorrido. En 48 hrs Organizamos tus citas o recorridos confirmando horarios y detalles (max 5 propiedades)')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"agendarCita()\">\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Armar Recorrido',\r\n                          'Estimad@ _____________. ¡Gracias por la confianza! A continuación le presentamos algunas propuestas para nuestro próximo recorrido. Favor de descartar las que considere convenientes y confirmar qué día y hora quisiera visitarlas, quedo a sus órdenes.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\">\r\n                </ion-icon>\r\n              </ion-item-option>\r\n<!--                  <ion-item-option>\r\n                    <ion-icon slot=\"icon-only\" name=\"list-box\"></ion-icon>\r\n                  </ion-item-option>-->\r\n              <ion-item-option (click)=\"verInfo('ARMAR RECORRIDO','Envía propuestas que compartan comisión, y agenda día y hora de cita/recorrido.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_e.citas_recorridos\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Citas y/o recorridos</h2>\r\n                <!--                <p>Prepara contrato de intermediación</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Citas y/o recorridos',0,'Cubrimos tus Citas o Recorrido. Te recomendamos personal capacitado, profesional y garantizando el respeto por tus clientes y comisión para que te apoye con tus citas o recorridos.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Citas y/o recorridos',\r\n                          'Sólo confirmar la cita hoy de _______ a las _____ hrs., en el inmueble ubicado en ________ ¡Gracias!')\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"\r\n                          >\r\n                </ion-icon>\r\n              </ion-item-option>\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option (click)=\"verInfo('CITA/RECORRIDO','Visita las propiedades con puntualidad.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_e.informe_visita\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Informe de visita</h2>\r\n                <!--                <p>Prepara contrato de intermediación</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option routerLink=\"/whatsapp\"  (click)=\"abrirWhatsapp('Informe de visita',\r\n                          '¡Muchas gracias por la visita! Le agradeceremos nos comente qué le pareció la(s) propiedad(es) visitada(s) para dar informe al propietario. \\n\\n' +\r\n                           '1.Propiedad que se visitó: \\n2.Fecha en que se realizó la visita: \\n3.¿Qué le gustó de la propiedad?: \\n4.Áreas de oportunidad del inmueble: \\n5.¿Cómo considera nuestro servicio hasta ahora?: \\n6.Registro de mis datos: \\n7.Sobre mi proceso de búsqueda: ')\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\">\r\n                </ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option routerLink=\"/formulario\" (click)=\"abrirFormulario('Informe de Visita')\">\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\" ></ion-icon>\r\n              </ion-item-option>\r\n              <!--<ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option (click)=\"verInfo('INFORME DE VISITA','Conoce las impresiones del cliente y agradece la visita. Envía informe a propietario.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n          <img src=\"/assets/images/interes-c-new.png\">\r\n         <!-- <p class=\"container&#45;&#45;letter-section\">\r\n            R</p>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--text-section\">\r\n          <p>\r\n            INTERÉS\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid style=\"margin-bottom: 2%;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_r.negociacion\" (click)=\"showLoader()\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Oferta</h2>\r\n                <!--  <p>Agradece la confianza, agenda una cita,</p>\r\n                  <p>y envia tu carta de presentación.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\" routerLink=\"/whatsapp\"\r\n                              (click)=\"abrirWhatsapp('Oferta',\r\n                          'A continuación le dejo un formato para que pueda presentar su oferta. Es posible modificar lo que considere conveniente. Favor de adjuntar su ID oficial y firmar.')\">\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" >\r\n                </ion-icon>\r\n              </ion-item-option>\r\n             <!-- <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option  (click)=\"verInfo('OFERTA','Logra oferta  por escrito, junto con su apartado (anticipo o cheque de resguardo).')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <!--Renta-->\r\n          <ion-item-sliding *ngIf=\"cliente.renta_o_venta == 'Renta'\">\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_r.documentacion_inmueble\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Documentación de propiedad</h2>\r\n                <!--                <p>Prepara contrato de intermediación</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Revisión de Documentación del Inmueble',350,'Revisamos la documentación del inmueble y te enviamos el informe de su estatus jurídico.')\" *ngIf=\"cliente.renta_o_venta == 'Renta'\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option routerLink=\"/whatsapp\"\r\n                               (click)=\"abrirWhatsapp('Documentación de propiedad',\r\n                          'Estimad@ _________: Le agradezco me envíe la siguiente documentación de la propiedad para su verificación: :'+\r\n                           '\\n\\nREQUISITOS ARRENDADOR'+\r\n                           '\\n• Identificación oficial vigente'+\r\n                           '\\n• Título de Propiedad'+\r\n                           '\\n• Copia de boleta predial reciente'+\r\n                           '\\n• Comprobante de domicilio reciente'+\r\n                           '\\n• Carta de no adeudo de mantenimiento')\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" >\r\n                </ion-icon>\r\n              </ion-item-option>\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option  (click)=\"verInfo('DOCUMENTACIÓN DE LA PROPIEDAD','Solicita datos de la propiedad para comprobar que este sana legalmente.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding *ngIf=\"cliente.renta_o_venta == 'Renta'\">\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_r.contrato\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Contrato</h2>\r\n                <!--                <p>Prepara contrato de intermediación</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Revisión de Contrato de Arrendamiento',350,'Te apoyamos revisando detalles del contrato y cotejamos con documentación entregada.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Contrato',\r\n                          'Estimad@ _______________, sólo confirmar la propuesta de día y horario para firma de contrato ¡Gracias de antemano!')\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\">\r\n                </ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"agendarCita()\">\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('CONTRATO DE ARRENDAMIENTO','Revisión de contrato y establecer fecha de firma.')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <!--Venta-->\r\n          <ion-item-sliding *ngIf=\"cliente.renta_o_venta == 'Venta'\">\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_r.contrato\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Contrato</h2>\r\n                <!--                <p>Prepara contrato de intermediación</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Contrato de Compraventa',0,'Te apoyamos llenando tu contrato contrato de compraventa en 48hrs y gestionamos firma electrónica.')\" *ngIf=\"cliente.renta_o_venta == 'Venta'\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Revisión de Contrato de Arrendamiento',350,'Te apoyamos revisando detalles de contratos y cotejamos con documentación entregada en 48 hrs')\" *ngIf=\"cliente.renta_o_venta == 'Renta'\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n\r\n              <ion-item-option routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Contrato',\r\n                          'Agradezco de antemano la propuesta de Contrato de Compraventa para enviar a revisión a mi cliente. Así como de la propuesta de fecha de firma. ')\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\">\r\n                </ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"agendarCita()\">\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('CONTRATO','Revisa contrato de compraventa propuesto por vendedor.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding *ngIf=\"cliente.renta_o_venta == 'Venta'\">\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_r.seguimiento\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Seguimiento</h2>\r\n                <!--                <p>Prepara contrato de intermediación</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option (click)=\"agendarCita()\">\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('SEGUIMIENTO CON BANCO O NOTARÍA','Solicita al broker hipotecario o a la Notaría la lista de documentos que deberá entregar el Vendedor a la brevedad.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding *ngIf=\"cliente.renta_o_venta == 'Venta'\">\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_r.avaluo\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Avalúo</h2>\r\n                <!--                <p>Prepara contrato de intermediación</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option (click)=\"agendarCita()\">\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('AVALÚO','Atención a valuador.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n          <!--<p class=\"container&#45;&#45;letter-section\">\r\n            F</p>-->\r\n          <img src=\"/assets/images/clientes.png\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--text-section\">\r\n          <p>\r\n            FIRMA</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid style=\"margin-bottom: 2%;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n<!--          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_f.confirmar_fecha\" (click)=\"showLoader()\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Confirmar fecha</h2>\r\n                &lt;!&ndash;  <p>Agradece la confianza, agenda una cita,</p>\r\n                  <p>y envia tu carta de presentación.</p>&ndash;&gt;\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" (click)=\"abrirWhatsapp(cliente)\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Conseguir la propiedad','Agradece la confianza, agenda una cita y envia tu carta de presentación.')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>-->\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_f.firma_contrato\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Firma de contrato</h2>\r\n                <!--   <p>Solicita los datos y documentos necesarios</p>\r\n                   <p>para rentar el inmueble, envia esta liga.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option routerLink=\"/whatsapp\"\r\n                               (click)=\"abrirWhatsapp('Firma de contrato',\r\n                          'Hola! Solo para confirmar la firma del Contrato el día _______ a las _____hrs, en la siguiente dirección _______. No olvide llevar: *Identificación oficial* para la firma del Contrato. ¡Gracias!')\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" >\r\n                </ion-icon>\r\n              </ion-item-option>\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option (click)=\"verInfo('Firma de contrato','Confirma la cita para la firma. No olvides llevar las impresiones necesarias ( Contrato, ID oficiales, comprobantes de pago, documentación del inmueble), fólder y llaves del inmueble.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!--<div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n      <div class=\"form-group\">\r\n        <input\r\n                type=\"button\"\r\n                class=\"form-control button__siguiente\"\r\n                value=\"No se concretó la operación\"\r\n                (click)=\"cancelarPropiedad()\"\r\n        />\r\n      </div>\r\n    </div>-->\r\n  </ion-grid>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n          <!--<p class=\"container&#45;&#45;letter-section\">\r\n            E</p>-->\r\n          <img src=\"/assets/images/entrega-c-new.png\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--text-section\">\r\n          <p>\r\n            ENTREGA</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid style=\"margin-bottom: 15%;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_en.entrega_inmueble\" (click)=\"showLoader()\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Entrega del inmueble</h2>\r\n                <!--  <p>Agradece la confianza, agenda una cita,</p>\r\n                  <p>y envia tu carta de presentación.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option routerLink=\"/whatsapp\"\r\n                               (click)=\"abrirWhatsapp('Entrega del inmueble',\r\n                          '¡Nuevamente agradezco la confianza, sigo a sus órdenes para lo que necesite!')\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" >\r\n                </ion-icon>\r\n              </ion-item-option>\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option  (click)=\"verInfo('Entrega del inmueble','Asiste a la entrega de la propiedad y recibe el pago de comisión.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item (click)=\"crearComision()\">\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"cliente.eval_en.pago_comision\"  (click)=\"showLoader()\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Pago de comisión</h2>\r\n                <!--   <p>Solicita los datos y documentos necesarios</p>\r\n                   <p>para rentar el inmueble, envia esta liga.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option (click)=\"verInfo('Pago de comisión','Ingresa la cantidad de la comisión recibida.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!--<div class=\"col-9 col-sm-9 col-md-9 col-lg-9 align-self-center\">\r\n      <div class=\"form-group\">\r\n        <input\r\n                type=\"button\"\r\n                class=\"form-control button__siguiente\"\r\n                value=\"No se concretó la operación\"\r\n                (click)=\"cancelarPropiedad()\"\r\n        />\r\n      </div>\r\n    </div>-->\r\n  </ion-grid>\r\n\r\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 align-self-center\">\r\n    <div class=\"form-group\">\r\n      <input\r\n              type=\"button\"\r\n              class=\"form-control\"\r\n              value=\"Archivar cliente\"\r\n              (click)=\"archivarCliente()\"\r\n      />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 align-self-center\">\r\n    <div class=\"form-group\">\r\n      <input\r\n              type=\"button\"\r\n              class=\"form-control button__siguiente\"\r\n              value=\"Cliente concretado\"\r\n              (click)=\"crearComision()\"\r\n      />\r\n    </div>\r\n  </div>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <img src=\"/assets/images/floatmenu_2.png\" />\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/portfolio\">\r\n        <img src=\"/assets/images/portfolio.png\" />\r\n      </ion-fab-button>\r\n<!--      <ion-fab-button color=\"light\" routerLink=\"/network\">\r\n        <img src=\"/assets/images/globe.png\" />\r\n      </ion-fab-button>-->\r\n      <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\r\n        <img src=\"/assets/images/study.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/clientes\">\r\n        <img src=\"/assets/images/user.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  <!--  <ion-fab-list side=\"start\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/entrega-casa\">\r\n        <img src=\"/assets/images/entrega.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/firma-casa\">\r\n        <img src=\"/assets/images/firma.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/interes-casa\">\r\n        <img src=\"/assets/images/interes.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/promocion-casa\">\r\n        <img src=\"/assets/images/promocion.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/detalles-casa\">\r\n        <img src=\"/assets/images/captacion.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>-->\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n<app-footer-blue></app-footer-blue>\r\n"

/***/ }),

/***/ "./src/app/detalles-cliente/detalles-cliente-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/detalles-cliente/detalles-cliente-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DetallesClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesClientePageRoutingModule", function() { return DetallesClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detalles_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles-cliente.page */ "./src/app/detalles-cliente/detalles-cliente.page.ts");




const routes = [
    {
        path: '',
        component: _detalles_cliente_page__WEBPACK_IMPORTED_MODULE_3__["DetallesClientePage"]
    }
];
let DetallesClientePageRoutingModule = class DetallesClientePageRoutingModule {
};
DetallesClientePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesClientePageRoutingModule);



/***/ }),

/***/ "./src/app/detalles-cliente/detalles-cliente.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/detalles-cliente/detalles-cliente.module.ts ***!
  \*************************************************************/
/*! exports provided: DetallesClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesClientePageModule", function() { return DetallesClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalles_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-cliente-routing.module */ "./src/app/detalles-cliente/detalles-cliente-routing.module.ts");
/* harmony import */ var _detalles_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-cliente.page */ "./src/app/detalles-cliente/detalles-cliente.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let DetallesClientePageModule = class DetallesClientePageModule {
};
DetallesClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalles_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesClientePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_detalles_cliente_page__WEBPACK_IMPORTED_MODULE_6__["DetallesClientePage"]]
    })
], DetallesClientePageModule);



/***/ }),

/***/ "./src/app/detalles-cliente/detalles-cliente.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/detalles-cliente/detalles-cliente.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-card {\n  display: -webkit-box;\n  display: flex;\n  margin-left: 10%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-right: 10%;\n  padding-top: 20px;\n}\n\n.container-card__img {\n  height: 40%;\n  width: 40%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.button__siguiente {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #094f72;\n  color: white;\n  font-weight: 700;\n}\n\n.container-card__texto {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-left: 10px;\n}\n\n.container-card__texto--formato {\n  text-transform: uppercase;\n  color: #094f72;\n  font-weight: 700;\n}\n\n.sub-Header {\n  text-align: center;\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 22px;\n  height: 20%;\n  color: white;\n  font-weight: 600;\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.container--subHeader {\n  background-color: #56c1be;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.btn-network {\n  width: 100%;\n  height: auto;\n  border-radius: 20px;\n  font-size: 20px;\n  background-color: #56c1be;\n  border-color: #56c1be;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 300;\n}\n\n.container--titulo-section {\n  background: #67adc9;\n  border-radius: 50%;\n  width: 60px;\n  border: 3px solid white;\n  height: 60px;\n  box-shadow: 4px 5px 10px #616161;\n  float: left;\n  position: absolute;\n  z-index: 1;\n}\n\n.container--letter-section {\n  margin-bottom: 0px;\n  font-size: 46px;\n  display: -webkit-box;\n  display: flex;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container--titulo-section--menu {\n  background: #67adc9;\n  border-radius: 50%;\n  width: 50px;\n  border: 2px solid white;\n  height: 50px;\n  box-shadow: 4px 5px 10px #616161;\n  z-index: 1;\n  text-align: center;\n}\n\n.container--letter-section--menu {\n  margin-bottom: 0px;\n  font-size: 32px;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container--text-section {\n  /*  background: #67adc9;\n    width: 90%;\n    float: right;\n    margin-left: 45px;\n    padding-left: 36px;\n    margin-top: 15px;\n    border-radius: 25px;*/\n  background: #67adc9;\n  width: 90%;\n  float: right;\n  margin-left: 30px;\n  padding-left: 0px;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.container--text-section p {\n  margin-bottom: 0px;\n  margin-bottom: 0px;\n  font-size: 20px;\n  display: -webkit-box;\n  display: flex;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9neW9zb2x1dGlvbnMvRG9jdW1lbnRzL0FwcHMvYnJva2Vycy1uZXR3b3JrL3NyYy9hcHAvZGV0YWxsZXMtY2xpZW50ZS9kZXRhbGxlcy1jbGllbnRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWxsZXMtY2xpZW50ZS9kZXRhbGxlcy1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNBOzs7Ozs7eUJBQUE7RUFPRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kZXRhbGxlcy1jbGllbnRlL2RldGFsbGVzLWNsaWVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jYXJkX19pbWcge1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbl9fc2lndWllbnRlIHtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTRmNzI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5jb250YWluZXItY2FyZF9fdGV4dG8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItY2FyZF9fdGV4dG8tLWZvcm1hdG8ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICMwOTRmNzI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnN1Yi1IZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLS1zdWJIZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmMxYmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG59XHJcblxyXG4uYnRuLW5ldHdvcmsge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZjMWJlO1xyXG4gIGJvcmRlci1jb2xvcjogIzU2YzFiZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLS10aXR1bG8tc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogIzY3YWRjOTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDRweCA1cHggMTBweCAjNjE2MTYxO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyLS1sZXR0ZXItc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci0tdGl0dWxvLXNlY3Rpb24tLW1lbnUge1xyXG4gIGJhY2tncm91bmQ6ICM2N2FkYzk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3gtc2hhZG93OiA0cHggNXB4IDEwcHggIzYxNjE2MTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci0tbGV0dGVyLXNlY3Rpb24tLW1lbnUge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLS10ZXh0LXNlY3Rpb24ge1xyXG4vKiAgYmFja2dyb3VuZDogIzY3YWRjOTtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogNDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4OyovXHJcbiAgYmFja2dyb3VuZDogIzY3YWRjOTtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci0tdGV4dC1zZWN0aW9uIHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbiIsIi5jb250YWluZXItY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmNvbnRhaW5lci1jYXJkX19pbWcge1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDQwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbl9fc2lndWllbnRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jb250YWluZXItY2FyZF9fdGV4dG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb250YWluZXItY2FyZF9fdGV4dG8tLWZvcm1hdG8ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzA5NGY3MjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1Yi1IZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDIwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uY29udGFpbmVyLS1zdWJIZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZjMWJlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG59XG5cbi5idG4tbmV0d29yayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YzFiZTtcbiAgYm9yZGVyLWNvbG9yOiAjNTZjMWJlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb250YWluZXItLXRpdHVsby1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzY3YWRjOTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGhlaWdodDogNjBweDtcbiAgYm94LXNoYWRvdzogNHB4IDVweCAxMHB4ICM2MTYxNjE7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXItLWxldHRlci1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDQ2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItLXRpdHVsby1zZWN0aW9uLS1tZW51IHtcbiAgYmFja2dyb3VuZDogIzY3YWRjOTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogNHB4IDVweCAxMHB4ICM2MTYxNjE7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci0tbGV0dGVyLXNlY3Rpb24tLW1lbnUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci0tdGV4dC1zZWN0aW9uIHtcbiAgLyogIGJhY2tncm91bmQ6ICM2N2FkYzk7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDsqL1xuICBiYWNrZ3JvdW5kOiAjNjdhZGM5O1xuICB3aWR0aDogOTAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29udGFpbmVyLS10ZXh0LXNlY3Rpb24gcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/detalles-cliente/detalles-cliente.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/detalles-cliente/detalles-cliente.page.ts ***!
  \***********************************************************/
/*! exports provided: DetallesClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesClientePage", function() { return DetallesClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");








let DetallesClientePage = class DetallesClientePage {
    constructor(localeService, menuCtrl, http, rs, navCtrl, loadingController, alertCtrl, calendar, iab) {
        this.localeService = localeService;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.rs = rs;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.calendar = calendar;
        this.iab = iab;
        this.cliente = {
            nombre: "",
            eval_c: { "conseguir_cliente": false, "documentacion_cliente": false, "documantacion_fiador": false },
            eval_e: { "busqueda_propiedades": false, "disponibilidad_comision": false, "armar_recorrido": false, "citas_recorridos": false, "informe_visita": false },
            eval_r: { "negociacion": false, "oferta_apartado": false, "documentacion_inmueble": false, "contrato": false, "seguimiento": false, "avaluo": false },
            eval_f: { "confirmar_fecha": false, "firma_contrato": false },
            eval_en: { "entrega_inmueble": false, "pago_comision": false }
        };
        this.TIME_IN_MS = 10000;
    }
    editarCliente(cliente) {
        window.localStorage.setItem("cliente_a_ver", JSON.stringify(cliente));
        this.navCtrl.navigateRoot('/editar-cliente');
    }
    abrirFormulario(tipo) {
        window.localStorage.setItem("formularioAVer", tipo);
        window.localStorage.setItem("tipoFormularioAVer", "Cliente");
    }
    ngOnInit() {
    }
    cancelarPropiedad() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Cancelar Operación",
                subHeader: "Se cancelará la operación y no seguirás viendo la información de esta propiedad en tus propiedades, ¿Continuar?",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: data => {
                            console.log('OK clicked');
                        }
                    },
                    {
                        text: 'Si, continuar',
                        handler: data => {
                            this.http.setRequestTimeout(5.0);
                            this.http.post(this.rs.ROOTURL + "Propiedades/cancelarPropiedad.php", {
                                "id_propiedad": this.cliente.id_propiedad
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                this.verInfo("Listo!", "La propiedad fue cancelada correctamente.");
                                console.log(data.data);
                                this.navCtrl.navigateRoot('/clientes');
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
    verInfo(titulo, msj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: titulo,
                subHeader: msj,
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel',
                        handler: data => {
                            console.log('OK clicked');
                        }
                    },
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
    ionViewDidEnter() {
        this.correo_usuario = window.localStorage.getItem("user");
        this.cliente = JSON.parse(window.localStorage.getItem("cliente_a_ver"));
        console.log("cliente", this.cliente);
        try {
            this.cliente.eval_c = JSON.parse(this.cliente.eval_c);
        }
        catch (e) {
            console.log("JSONPARSERROREVALC", e);
            console.log(this.cliente.eval_c);
        }
        try {
            this.cliente.eval_e = JSON.parse(this.cliente.eval_e);
        }
        catch (e) {
            console.log("JSONPARSERRORE", e);
            console.log(this.cliente.eval_e);
        }
        try {
            this.cliente.eval_r = JSON.parse(this.cliente.eval_r);
        }
        catch (e) {
            console.log("JSONPARSERRORR", e);
            console.log(this.cliente.eval_r);
        }
        try {
            this.cliente.eval_f = JSON.parse(this.cliente.eval_f);
        }
        catch (e) {
            console.log("JSONPARSERRORF", e);
            console.log(this.cliente.eval_f);
        }
        try {
            this.cliente.eval_en = JSON.parse(this.cliente.eval_en);
        }
        catch (e) {
            console.log("JSONPARSERROREN", e);
            console.log(this.cliente.eval_en);
        }
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Actualizando...',
            });
            yield this.loader.present();
        });
    }
    showLoader() {
        this.presentLoading();
    }
    abrirWhatsapp(p, msj) {
        //var link = "";
        window.localStorage.setItem("whatsappAVer", p);
        window.localStorage.setItem("mensajeAVer", msj);
        window.localStorage.setItem("whatscliente", "si");
        window.localStorage.setItem("whatspropiedad", "no");
        //link = "whatsapp://send?phone=+521"+p.celular+"&text=Estimado "+p.nombre+", ¡Gracias por la confianza! "+msj;
        //window.open(encodeURI(link), '_system');
    }
    /*  abrirWhatsapp(p,mensaje) {
        var link = "";
        link = "whatsapp://send?phone=+521"+p.telefono+"&text=Estimado "+p.nombre+", "+mensaje;
        window.open(encodeURI(link), '_system');
      }*/
    updateEval() {
        //this.showLoader();
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Clientes/updateEval.php", {
            "eval_c": JSON.stringify(this.cliente.eval_c),
            "eval_e": JSON.stringify(this.cliente.eval_e),
            "eval_r": JSON.stringify(this.cliente.eval_r),
            "eval_f": JSON.stringify(this.cliente.eval_f),
            "eval_en": JSON.stringify(this.cliente.eval_en),
            "id_cliente": this.cliente.id_cliente,
            "propiedad_busca": this.cliente.propiedad_busca,
            "renta_o_venta": this.cliente.renta_o_venta,
            "zona_busca": this.cliente.zona_busca,
            "recamaras": this.cliente.recamaras,
            "banos": this.cliente.banos,
            "estacionamientos": this.cliente.estacionamientos,
            "m2": this.cliente.m2,
            "fecha_concretar": this.cliente.fecha_concretar,
            "presupuesto": this.cliente.presupuesto,
            "recursos_consisten": this.cliente.recursos_consisten,
            "requisitos_especiales": this.cliente.requisitos_especiales
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            console.log(data.data);
            window.localStorage.setItem("cliente_a_ver", JSON.stringify(this.cliente));
            this.loader.dismiss();
        })
            .catch(error => {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            this.loader.dismiss();
        });
    }
    agendarCita() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alerta = yield this.alertCtrl.create({
                header: "Crea una cita en tu calendario:",
                inputs: [
                    {
                        label: 'Titulo',
                        name: 'titulo',
                        placeholder: 'Título de cita',
                        value: ''
                    },
                    {
                        label: 'Lugar',
                        name: 'lugar',
                        placeholder: 'Lugar de la cita',
                        value: ''
                    },
                    {
                        label: 'Notas',
                        name: 'notas',
                        placeholder: 'Notas',
                        value: ''
                    },
                    {
                        label: 'Día',
                        name: 'fecha',
                        placeholder: 'Fecha',
                        value: '',
                        type: "date"
                    },
                    {
                        label: 'Hora',
                        name: 'hora',
                        placeholder: 'Hora',
                        value: '12:00',
                        type: "time"
                    },
                    {
                        label: 'Duración',
                        name: 'duracion',
                        placeholder: 'Duración (Horas)',
                        value: 1,
                        type: "number"
                    }
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
                            console.log("dataCita", data);
                            var fecha_str = data.fecha.split("-");
                            var hora_str = data.hora.split(":");
                            console.log("fecha_str", fecha_str);
                            console.log("hora_str", hora_str);
                            var startDate = new Date(fecha_str[0], fecha_str[1] / 1 - 1, fecha_str[2], hora_str[0], hora_str[1], 0, 0);
                            var endDate = new Date(fecha_str[0], fecha_str[1] / 1 - 1, fecha_str[2], hora_str[0] / 1 + data.duracion, hora_str[1], 0, 0);
                            console.log("data.titulo", data.titulo);
                            console.log("data.lugar", data.lugar);
                            console.log("data.notas", data.notas);
                            console.log("startDate", startDate);
                            console.log("endDate", endDate);
                            try {
                                if (data.titulo != "" && startDate instanceof Date && !isNaN(startDate.getTime()) && endDate instanceof Date && !isNaN(endDate.getTime())) {
                                    this.calendar.createEventInteractively(data.titulo, data.lugar, data.notas, startDate, endDate).then((msg) => { console.log("msg", msg); }, (err) => { console.log("err", err); });
                                }
                                else {
                                    alert("Por favor ingresa un título y una fecha y hora correctas para tu cita.");
                                }
                            }
                            catch (e) {
                                console.log("e", e);
                            }
                        }
                    }
                ]
            });
            yield alerta.present();
        });
    }
    crearComision() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alerta = yield this.alertCtrl.create({
                header: "Cuanta comisión recibí",
                inputs: [
                    {
                        name: 'monto',
                        placeholder: 'Monto de la comision',
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
                            this.http.post(this.rs.ROOTURL + "Comisiones/subirComisionCliente.php", {
                                "monto": data.monto,
                                "id_usuario": window.localStorage.getItem("id_usuario"),
                                "id_cliente": this.cliente.id_cliente
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                alert("La comisión recibida  se ha agregado correctamente en la sección de MI PORTAFOLIO. Se ha marcado el cliente como concretado y se ha archivado para futuras referencias.");
                                this.navCtrl.navigateRoot('/clientes');
                                console.log(data.data);
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
    abrirLink(link) {
        this.iab.create(link, "_system");
    }
    archivarCliente() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                                "id_cliente": this.cliente.id_cliente
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                console.log(data.data);
                                alert("Cliente archivado correctamente");
                                this.navCtrl.navigateRoot('/clientes');
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
    irCheckout(txt, precio, descrip) {
        window.localStorage.setItem("descripcionAVer", descrip);
        window.localStorage.setItem("productoAVer", txt);
        window.localStorage.setItem("precioAVer", precio);
    }
};
DetallesClientePage.ctorParameters = () => [
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_3__["RootSettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_6__["Calendar"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] }
];
DetallesClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalles-cliente',
        template: __webpack_require__(/*! raw-loader!./detalles-cliente.page.html */ "./node_modules/raw-loader/index.js!./src/app/detalles-cliente/detalles-cliente.page.html"),
        styles: [__webpack_require__(/*! ./detalles-cliente.page.scss */ "./src/app/detalles-cliente/detalles-cliente.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_3__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_6__["Calendar"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]])
], DetallesClientePage);



/***/ })

}]);
//# sourceMappingURL=detalles-cliente-detalles-cliente-module-es2015.js.map