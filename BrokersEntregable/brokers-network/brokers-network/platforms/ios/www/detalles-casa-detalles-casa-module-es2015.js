(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalles-casa-detalles-casa-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/detalles-casa/detalles-casa.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detalles-casa/detalles-casa.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"row\" class=\"container--subHeader\">\r\n      <p class=\"sub-Header\">\r\n        <ion-icon size=\"large\" name=\"arrow-back\" style=\"float: left;\" routerLink=\"/propiedades\"></ion-icon>{{propiedad.tipo}}\r\n      </p>\r\n    </div>\r\n    <div class=\"row\" >\r\n      <ion-item (click)=\"verPropiedad(propiedad,$event)\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <img *ngIf=\"propiedad.tipo=='Renta'\" src=\"/assets/images/study.png\">\r\n          <img *ngIf=\"propiedad.tipo=='Venta'\" src=\"/assets/images/study.png\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h2 style=\"text-transform: capitalize\">{{propiedad.nombre}}</h2>\r\n          <p>{{propiedad.direccion}} - {{propiedad.precio | currency}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n     <!-- <div class=\"container-card\">\r\n        <div class=\"container-card__img\">\r\n          <img src=\"/assets/images/renta1.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"container-card__texto\">\r\n          <p class=\"container-card__texto&#45;&#45;formato\">{{propiedad.nombre}}</p>\r\n        </div>\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n          <img src=\"/assets/images/captacion.png\">\r\n         <!-- <p class=\"container&#45;&#45;letter-section\">\r\n            C</p>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--text-section\">\r\n          <p><b>CAPTACIÓN</b></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid style=\"margin-bottom: 2%;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <!-- Sliding item with text options on both sides -->\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_c.conseguir_propiedad\" (click)=\"showLoader()\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Conseguir la propiedad</h2>\r\n              <!--  <p>Agradece la confianza, agenda una cita,</p>\r\n                <p>y envia tu carta de presentación.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Conseguir la propiedad','Estimad@ __________ ¡gracias por la confianza! \\n'+\r\n                                                                '¿Cuándo podemos hacer una cita para visitar la propiedad, sacar fotos y firmar el contrato de intermediación inmobiliaria?',propiedad)\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option *ngIf=\"propiedad.tipo=='Venta'\">\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\" routerLink=\"/formulario\" (click)=\"abrirFormulario('Conseguir la Propiedad')\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"agendarCita()\">\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option  (click)=\"verInfo('Conseguir la propiedad','Agradece la confianza, agenda una cita y preséntate.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_c.conseguir_datos\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Documentación</h2>\r\n             <!--   <p>Solicita los datos y documentos necesarios</p>\r\n                <p>para rentar el inmueble, envia esta liga.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <!--<ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Documentación Propiedad',\r\n                                                            'Para rentar su propiedad, le dejo la lista de los documentos que necesitará tener listos. Puede enviarlos a adjuntos a este número o a mi correo: correo del usuario.\\n\\n'+\r\n                                                                '• Identificación Oficial del Propietario(s)\\n'+\r\n                                                                '• Copia del Título de Propiedad o Escritura\\n'+\r\n                                                                '• Copia del última Boleta Predial\\n'+\r\n                                                                '• Carta de no adeudo de Mantenimiento (en su caso)\\n'+\r\n                                                                '• Comprobante de domicilio\\n'+\r\n                                                                '• Número de cuenta donde se hará el pago de la renta\\n'+\r\n                                                                '',propiedad)\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n              </ion-item-option>\r\n<!--              <ion-item-option *ngIf=\"propiedad.tipo=='Renta'\">\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\" routerLink=\"/formulario\" (click)=\"abrirFormulario('Documentación para Renta')\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option *ngIf=\"propiedad.tipo=='Venta'\">\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\" routerLink=\"/formulario\" (click)=\"abrirFormulario('Documentación para Venta')\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('Documentación','Solicita los documentos necesarios para rentar el inmueble, envía esta liga.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_c.elabora_contrato\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Contrato</h2>\r\n<!--                <p>Prepara contrato de intermediación</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option *ngIf=\"propiedad.tipo=='Venta'\"  routerLink=\"/checkout\" (click)=\"irCheckout('Contrato de intermediación Venta',0,'Llenamos tu contrato en 48 hrs y gestionamos firma electrónica.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option *ngIf=\"propiedad.tipo=='Renta'\"  routerLink=\"/checkout\" (click)=\"irCheckout('Contrato de intermediación Renta',0,'Llenamos tu contrato en 48 hrs y gestionamos firma electrónica.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('Contrato','Prepara contrato de intermediación para llevar a la cita con el Propietario.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_c.visita_contrato\"  (click)=\"showLoader()\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Visita de Propiedad</h2>\r\n               <!-- <p>Saca fotos, video, coloca una lona.</p>\r\n                <p>Firma contrato y solicita copia de los</p>\r\n                <p>documentos para armar expediente.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Fotografía profesional',0,'Fotógrafos profesionales te entregarán 20 fotografías. Incluye: sesión y edicion, fotos en ángulo abierto, fotos de portada para anuncio, detalles. Entrega 1 semana')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Tour virtual',0,'Tour virtual profesional 360, incluye 6 espacios, entregable con liga para agregar a los portales inmobiliarios. Entrega 1 semana')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Visita de Propiedad','¡Muchas gracias por recibirnos en su propiedad! Nos ponemos a trabajar para darle el mejor servicio posible. Empezaremos a trabajar en el estudio de mercado para conocer los valores actuales de la zona.',propiedad)\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('Visita de Propiedad','Consigue fotos profesionales o tour virtual, aprovecha la visita para firmar contrato y recabar documentación impresa si es necesario.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n       <!--   <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_c.arma_expediente\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Arma expediente</h2>\r\n&lt;!&ndash;                <p>Organiza ordenadamente los</p>\r\n                <p>documentos y tenlos a la mano</p>&ndash;&gt;\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Arma expediente','Organiza ordenadamente los documentos y tenlos a la mano.')\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n\r\n          </ion-item-sliding>-->\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_c.estudio_mercado\"  (click)=\"showLoader()\">></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Estudio de Mercado</h2>\r\n           <!--     <p>Realiza el estudio de mercado en base</p>\r\n                <p>a los valores actuales de mercado</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Estudio de mercado e interpretación escrita',0,'Realizamos estudio de mercado en 48hrs en base a valores actualizados de mercado con una interpretación escrita para tus clientes y propietarios.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('Estudio de Mercado','Realiza el estudio de mercado en base a los valores de actuales de mercado y manda la interpretación para definir precio de renta.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\"\r\n                          ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n<!--Promocion-->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n          <img src=\"/assets/images/promocion-c-new.png\">\r\n          <!--<p class=\"container&#45;&#45;letter-section\">\r\n            P</p>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n<!--\r\n        <div class=\"container&#45;&#45;text-section\" style=\"background-color: #b6d3e0\">\r\n-->\r\n        <div class=\"container&#45;&#45;text-section\">\r\n          <p><b>PROMOCIÓN</b></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid style=\"margin-bottom: 2%;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_p.promocion\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Promoción</h2>\r\n                <!--<p>Agrega tus publicaciones en los portales,</p>\r\n                <p>CRM que tengas contratados</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Subir propiedad a portales inmobiliarios',0,'Te apoyamos subiendo los detalles de tu inmueble, descripción, precio y fotografías. Precio por propiedad en un portal inmobiliario.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Fichas personalizadas',0,'Te apoyamos creando fichas personalizadas en PDF para enviar a tus clientes por correo o redes sociales.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('Promoción','Agrega tus publicaciones en los portales y/o CRM que tengas contratados.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <!--          <ion-item-sliding>\r\n\r\n                      <ion-item>\r\n                        <ion-checkbox  (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_p.ficha_promocional\"></ion-checkbox>\r\n                        <ion-label style=\"margin-left: 10px;\">\r\n                          <h2>Ficha promocional</h2>\r\n                          &lt;!&ndash;<p>Promo Whatsapp</p>&ndash;&gt;\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                          << arrastra\r\n                        </ion-note>\r\n                      </ion-item>\r\n\r\n                      <ion-item-options side=\"end\">\r\n                        <ion-item-option>\r\n                          <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                        </ion-item-option>\r\n                        <ion-item-option>\r\n                          <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Ficha promocional','Promo Whatsapp')\"></ion-icon>\r\n                        </ion-item-option>\r\n                      </ion-item-options>\r\n                    </ion-item-sliding>-->\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox  (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_p.chat_redes\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Chats y Redes</h2>\r\n                <!-- <p>Enviar 2-3 veces por semana tus</p>\r\n                 <p>promos por whatsapp</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Chats y Redes',\r\n                          'Exportar datos de la propiedad: ABRIR WHATSAPP DATOS GENERALES DE PROPIEDAD (Exportar referencias desde directorio) PARA ENVIAR Notificación 2 veces por semana. Ejemplo: Titulo 3R/2B/2E, precio y zona ______________.',propiedad)\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\">\r\n                </ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('Chats y Redes','Envía tus propiedades por Whatsapp a clientes interesados o a chats de asesores inmobiliarios ')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_p.leads\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Leads</h2>\r\n                <!-- <p>Mensaje de seguimiento</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Leads',\r\n                          'Hola! Recibimos una consulta sobre tuya sobre esta propiedad! Me pongo a tus órdenes por si deseas conocerla o necesitas info adicional. Aqui mi whatsapp para agilizar comunicación y link directo a la ficha.',propiedad)\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\">\r\n                </ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('Leads','Envia mensaje de seguimiento a clientes o asesores.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_p.citas\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Citas</h2>\r\n                <!--    <p>Enviar ficha o link, agendar con recordatorio</p>\r\n                    <p>Con cliente y propietario</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Citas',\r\n                          'Hola! Solo para confirmar nuestra cita de _______ a las _____hrs, en el inmueble ubicado en ________.  ¡Gracias!',propiedad)\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" >\r\n                </ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"agendarCita()\">\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"bulb\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option (click)=\"verInfo('Citas','Envia ficha o link, agenda con recordatorio. A cliente / asesor y propietario.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n\r\n          </ion-item-sliding>\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox  (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_p.informe\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Informe</h2>\r\n                <!-- <p>Informe y agradecimiento</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option (click)=\"abrirFormulario('Informe de Visita')\">\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\" routerLink=\"/formulario\" ></ion-icon>\r\n              </ion-item-option>\r\n             <!-- <ion-item-option>\r\n\r\n                <ion-icon slot=\"icon-only\" name=\"bulb\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option (click)=\"verInfo('Informe','Enviar informe y agradecimiento')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!--Interes-->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n          <img src=\"/assets/images/interes-p-new.png\">\r\n         <!-- <p class=\"container&#45;&#45;letter-section\">\r\n            I</p>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n<!--\r\n        <div class=\"container&#45;&#45;text-section\" style=\"background-color: #fcb686\">\r\n-->\r\n        <div class=\"container&#45;&#45;text-section\">\r\n          <p><b>INTERÉS</b></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid style=\"margin-bottom: 2%;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <ion-item-sliding>\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_i.oferta\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Oferta</h2>\r\n                <!--<p>Recibo de anticipo, Cheque de resguardo</p>\r\n                <p>o anticipo</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <!--<ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"bulb\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <!--<ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <!--<ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option  routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Oferta',\r\n                          'A continuación le dejo un formato para que pueda presentar su oferta.  Es posible modificar lo que considere conveniente. Favor de adjuntar su ID oficial y firmar.',propiedad)\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\">\r\n                </ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('Oferta','Logra oferta por escrito, junto con su apartado (anticipo o cheque de resguardo).')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n          <ion-item-sliding *ngIf=\"propiedad.tipo=='Renta'\">\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_i.documentacion_cliente\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Documentación del cliente</h2>\r\n                <!--<p>Solicitar datos del interesado y conocer</p>\r\n                <p>si cuenta con fiador/aval/póliza jurídica</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Documentación del cliente',\r\n                          'Estimad@ *propietario* a continuación los documentos que deberá tener listos para rentar su propiedad. \\n\\n' +\r\n                           '*Dirección de correo electrónico \\n*Celular \\n*Dirección completa del inmueble \\n*Propietario(s) del Inmueble \\n*Nombre completo de Propietario(s) \\n\\n' +\r\n                            'Favor de enviar en PDF, para tener completo su expediente, y en su caso, poner en regla la documentación si hay algún trámite que hacer. Favor de enviarlos a este correo',propiedad)\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" >\r\n                </ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('Documentación del cliente','Solicita documentos para investigación y conoce si cuenta con fiador/aval/póliza jurídica/mediación.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_i.contrato\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Contrato</h2>\r\n                <!--<p>Enviarlo a los involucrados para</p>\r\n                <p>su revisión.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Contrato de Arrendamiento',0,'Te apoyamos llenando tu contrato contrato de arrendamiento en 48hrs y gestionamos firma electrónica.')\" *ngIf=\"propiedad.tipo=='Renta'\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n<!--              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Contrato de Compraventa',0,'Te apoyamos llenando tu contrato contrato de compraventa en 48hrs y gestionamos firma electrónica.')\" *ngIf=\"propiedad.tipo=='Venta'\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option  routerLink=\"/checkout\" (click)=\"irCheckout('Inventario',0,'Te apoyamos realizando el inventario fotográfico en 72 hrs y elaboramos el Anexo al Contrato listo para firma.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n              </ion-item-option>\r\n\r\n                <ion-item-option (click)=\"agendarCita()\">\r\n                    <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n                </ion-item-option>\r\n<!--              <ion-item-option *ngIf=\"propiedad.tipo=='Renta'\" (click)=\"abrirFormulario('Contrato para Renta')\">\r\n                <ion-icon slot=\"icon-only\" name=\"list-box\" routerLink=\"/formulario\" ></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option (click)=\"verInfo('Contrato','Enviarlo a los involucrados para su revisión y establecer fecha de firma. Hacer inventario si la propiedad está amueblada.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n          <ion-item-sliding *ngIf=\"propiedad.tipo=='Venta'\">\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_i.seguimiento_banco_notaria\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Seguimiento con Banco o Notaría</h2>\r\n                <!--  <p>En caso de no contar con aval,</p>\r\n                  <p>sugerir contratación de Póliza Juridica.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\r\n              </ion-item-option>-->\r\n\r\n              <ion-item-option (click)=\"verInfo('Seguimiento con Banco o Notaría','Da seguimiento necesario con el Banco (en caso de Crédito Hipotecario), y con la Notaria: para el avalúo y la escrituración.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n          <ion-item-sliding *ngIf=\"propiedad.tipo=='Venta'\">\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_i.avaluo\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Avalúo</h2>\r\n                <!-- <p>Si es amueblado</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option (click)=\"agendarCita()\">\r\n                <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('Avalúo','Atención a valuador')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n\r\n          </ion-item-sliding>\r\n\r\n        </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!--Firma-->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n          <!--<p class=\"container&#45;&#45;letter-section\">\r\n            F</p>-->\r\n          <img src=\"/assets/images/firma-p-new.png\">\r\n      </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n<!--\r\n        <div class=\"container&#45;&#45;text-section\" style=\"background-color: #80d8ae\">\r\n-->\r\n        <div class=\"container--text-section\" >\r\n          <p><b>FIRMA</b></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid style=\"margin-bottom: 2%;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <!-- Sliding item with text options on both sides -->\r\n          <!--          <ion-item-sliding>\r\n\r\n                      <ion-item>\r\n                        <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_f.confirmar_fecha_firma\"></ion-checkbox>\r\n                        <ion-label style=\"margin-left: 10px;\">\r\n                          <h2>Confirmar fecha de firma</h2>\r\n                         &lt;!&ndash; <p>Reconfirma la cita para firma del</p>\r\n                          <p>contrato con asesor/cliente y propietario</p>&ndash;&gt;\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                          << arrastra\r\n                        </ion-note>\r\n                      </ion-item>\r\n\r\n                      <ion-item-options side=\"end\">\r\n                        <ion-item-option>\r\n                          <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\"></ion-icon>\r\n                        </ion-item-option>\r\n                        <ion-item-option>\r\n                          <ion-icon slot=\"icon-only\" name=\"information\" (click)=\"verInfo('Confirmar fecha de firma','Reconfirma la cita para firma del contrato con asesor/cliente y propietario.')\"></ion-icon>\r\n                        </ion-item-option>\r\n                      </ion-item-options>\r\n                    </ion-item-sliding>-->\r\n\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_f.firma\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Firma</h2>\r\n                <!-- <p>Recordar a los involucrados y </p>\r\n                 <p>enviar requisitos</p>\r\n                 <p>No olvides llevar las impresiones</p>\r\n                 <p>necesarias del contrato, fólder y</p>\r\n                 <p>llaves del inmueble.</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option (click)=\"abrirLink('http://www.brokertsnetwork.mx/Compraventacocr%C3%A9dito')\">\r\n                <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option routerLink=\"/whatsapp\" (click)=\"abrirWhatsapp('Firma',\r\n                          ' Hola! Solo para confirmar la firma del Contrato el día _______ a las _____hrs, en la siguiente dirección _______. No olvide llevar:   *Identificación oficial*  a la firma del Contrato. ¡Gracias!',propiedad)\">\r\n                <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\" >\r\n                </ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('Firma','No olvides llevar las impresiones necesarias (ID oficiales, comprobantes de pago, documentación del inmueble) y llaves del inmueble.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n        </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!--Engrega-->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--titulo-section\">\r\n<!--          <p class=\"container&#45;&#45;letter-section\">\r\n            E</p>-->\r\n          <img src=\"/assets/images/entrega-p-new.png\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"display: flex;\">\r\n        <div class=\"container--text-section\">\r\n          <p><b>ENTREGA</b></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid style=\"margin-bottom: 15%;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <!-- Sliding item with text options on both sides -->\r\n          <ion-item-sliding>\r\n\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_e.entrega\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Entrega</h2>\r\n                <!--    <p>Asistir a la entrega de la</p>\r\n                    <p>propiedad y dar seguimiento necesario</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option\r\n                      routerLink=\"/whatsapp\"\r\n                      (click)=\"abrirWhatsapp('Entrega',\r\n                            'Nuevamente agradecer la confianza, sigo a sus órdenes para lo que necesite!',propiedad)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"logo-whatsapp\">\r\n                </ion-icon>\r\n              </ion-item-option>\r\n              <ion-item-option (click)=\"verInfo('Entrega','Sugiere una limpieza del inmueble previo a entrega. Asiste a la  entrega de la propiedad y recibir pago de comisión.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n          <ion-item-sliding>\r\n\r\n            <ion-item (click)=\"crearComision()\">\r\n              <ion-checkbox (ionChange)=\"updateEval()\" [(ngModel)]=\"propiedad.eval_e.pago_comision\"></ion-checkbox>\r\n              <ion-label style=\"margin-left: 10px;\">\r\n                <h2>Pago de comisión</h2>\r\n                <!-- <p>Recibo de recepción de comisión</p>-->\r\n              </ion-label>\r\n              <ion-note slot=\"end\">\r\n                << arrastra\r\n              </ion-note>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n<!--              <ion-item-option>\r\n                <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\r\n              </ion-item-option>-->\r\n              <ion-item-option (click)=\"verInfo('Pago de comisión','Ingresa la cantidad de la comisión recibida.')\">\r\n                <ion-icon slot=\"icon-only\" name=\"information\" ></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n        </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 align-self-center\">\r\n      <div class=\"form-group\">\r\n        <input\r\n                type=\"button\"\r\n                class=\"form-control\"\r\n                value=\"No se concretó la operación\"\r\n                (click)=\"cancelarPropiedad()\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 align-self-center\">\r\n      <div class=\"form-group\">\r\n        <input\r\n                type=\"button\"\r\n                class=\"form-control\"\r\n                value=\"Archivar propiedad\"\r\n                (click)=\"archivarPropiedad()\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 align-self-center\">\r\n      <div class=\"form-group\">\r\n        <input\r\n                type=\"button\"\r\n                class=\"form-control button__siguiente\"\r\n                value=\"Propiedad concretada\"\r\n                (click)=\"crearComision()\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </ion-grid>\r\n  <!--  <div class=\"container\">\r\n      <div class=\"row\" style=\"margin-top: 5vw;\">\r\n          <div class=\"col-3\" routerLink=\"/promocion-casa\">\r\n            <div class=\"container&#45;&#45;titulo-section&#45;&#45;menu\" style=\"background-color: #b6d3e0\">\r\n              <p class=\"container&#45;&#45;letter-section&#45;&#45;menu\">\r\n                P</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-3\" routerLink=\"/interes-casa\">\r\n            <div class=\"container&#45;&#45;titulo-section&#45;&#45;menu\" style=\"background-color: #fcb686\">\r\n              <p class=\"container&#45;&#45;letter-section&#45;&#45;menu\">\r\n                I</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-3\" routerLink=\"/firma-casa\">\r\n            <div class=\"container&#45;&#45;titulo-section&#45;&#45;menu\" style=\"background-color: #80d8ae\">\r\n              <p class=\"container&#45;&#45;letter-section&#45;&#45;menu\">\r\n                F</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-3\" routerLink=\"/entrega-casa\">\r\n            <div class=\"container&#45;&#45;titulo-section&#45;&#45;menu\" style=\"background-color: #56c1be\">\r\n              <p class=\"container&#45;&#45;letter-section&#45;&#45;menu\">\r\n                E</p>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>-->\r\n\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <img src=\"/assets/images/floatmenu_2.png\" />\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/portfolio\">\r\n        <img src=\"/assets/images/portfolio.png\" />\r\n      </ion-fab-button>\r\n<!--      <ion-fab-button color=\"light\" routerLink=\"/network\">\r\n        <img src=\"/assets/images/globe.png\" />\r\n      </ion-fab-button>-->\r\n      <ion-fab-button color=\"light\" routerLink=\"/propiedades\">\r\n        <img src=\"/assets/images/study.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/clientes\">\r\n        <img src=\"/assets/images/user.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  <!--  <ion-fab-list side=\"start\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/entrega-casa\">\r\n        <img src=\"/assets/images/entrega.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/firma-casa\">\r\n        <img src=\"/assets/images/firma.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/interes-casa\">\r\n        <img src=\"/assets/images/interes.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/promocion-casa\">\r\n        <img src=\"/assets/images/promocion.png\" />\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" routerLink=\"/detalles-casa\">\r\n        <img src=\"/assets/images/captacion.png\" />\r\n      </ion-fab-button>\r\n    </ion-fab-list>-->\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n<app-footer-blue></app-footer-blue>\r\n"

/***/ }),

/***/ "./src/app/detalles-casa/detalles-casa-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/detalles-casa/detalles-casa-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DetallesCasaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesCasaPageRoutingModule", function() { return DetallesCasaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detalles_casa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles-casa.page */ "./src/app/detalles-casa/detalles-casa.page.ts");




const routes = [
    {
        path: '',
        component: _detalles_casa_page__WEBPACK_IMPORTED_MODULE_3__["DetallesCasaPage"]
    }
];
let DetallesCasaPageRoutingModule = class DetallesCasaPageRoutingModule {
};
DetallesCasaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesCasaPageRoutingModule);



/***/ }),

/***/ "./src/app/detalles-casa/detalles-casa.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/detalles-casa/detalles-casa.module.ts ***!
  \*******************************************************/
/*! exports provided: DetallesCasaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesCasaPageModule", function() { return DetallesCasaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalles_casa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-casa-routing.module */ "./src/app/detalles-casa/detalles-casa-routing.module.ts");
/* harmony import */ var _detalles_casa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-casa.page */ "./src/app/detalles-casa/detalles-casa.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let DetallesCasaPageModule = class DetallesCasaPageModule {
};
DetallesCasaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalles_casa_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesCasaPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_detalles_casa_page__WEBPACK_IMPORTED_MODULE_6__["DetallesCasaPage"]]
    })
], DetallesCasaPageModule);



/***/ }),

/***/ "./src/app/detalles-casa/detalles-casa.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/detalles-casa/detalles-casa.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-card {\n  display: -webkit-box;\n  display: flex;\n  margin-left: 10%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-right: 10%;\n  padding-top: 20px;\n}\n\n.button__siguiente {\n  text-align: center;\n  border-radius: 50px;\n  background-color: #094f72;\n  color: white;\n  font-weight: 700;\n}\n\n.container-card__img {\n  height: 40%;\n  width: 40%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container-card__texto {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-left: 10px;\n}\n\n.container-card__texto--formato {\n  text-transform: uppercase;\n  color: #094f72;\n  font-weight: 700;\n}\n\n.sub-Header {\n  text-transform: uppercase;\n  text-align: center;\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 22px;\n  height: 20%;\n  color: white;\n  font-weight: 600;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.container--subHeader {\n  background-color: #ff7949;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.container--titulo-section {\n  background: #67adc9;\n  border-radius: 50%;\n  width: 60px;\n  border: 3px solid white;\n  height: 60px;\n  box-shadow: 4px 5px 10px #616161;\n  float: left;\n  position: absolute;\n  z-index: 1;\n}\n\n.container--letter-section {\n  margin-bottom: 0px;\n  font-size: 46px;\n  display: -webkit-box;\n  display: flex;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container--titulo-section--menu {\n  background: #67adc9;\n  border-radius: 50%;\n  width: 50px;\n  border: 2px solid white;\n  height: 50px;\n  box-shadow: 4px 5px 10px #616161;\n  z-index: 1;\n  text-align: center;\n}\n\n.container--letter-section--menu {\n  margin-bottom: 0px;\n  font-size: 32px;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container--text-section {\n  /*  background: #67adc9;\n    width: 90%;\n    float: right;\n    margin-left: 45px;\n    padding-left: 36px;\n    margin-top: 15px;\n    border-radius: 25px;*/\n  background: #67adc9;\n  width: 90%;\n  float: right;\n  margin-left: 30px;\n  padding-left: 0px;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.container--text-section p {\n  margin-bottom: 0px;\n  margin-bottom: 0px;\n  font-size: 20px;\n  display: -webkit-box;\n  display: flex;\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9neW9zb2x1dGlvbnMvRG9jdW1lbnRzL0FwcHMvYnJva2Vycy1uZXR3b3JrL3NyYy9hcHAvZGV0YWxsZXMtY2FzYS9kZXRhbGxlcy1jYXNhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWxsZXMtY2FzYS9kZXRhbGxlcy1jYXNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDQTs7Ozs7O3lCQUFBO0VBT0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGV0YWxsZXMtY2FzYS9kZXRhbGxlcy1jYXNhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b25fX3NpZ3VpZW50ZSB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWNhcmRfX2ltZyB7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWNhcmRfX3RleHRvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWNhcmRfX3RleHRvLS1mb3JtYXRvIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjMDk0ZjcyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zdWItSGVhZGVyIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLS1zdWJIZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5NDk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLS10aXR1bG8tc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogIzY3YWRjOTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDRweCA1cHggMTBweCAjNjE2MTYxO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyLS1sZXR0ZXItc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci0tdGl0dWxvLXNlY3Rpb24tLW1lbnUge1xyXG4gIGJhY2tncm91bmQ6ICM2N2FkYzk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3gtc2hhZG93OiA0cHggNXB4IDEwcHggIzYxNjE2MTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci0tbGV0dGVyLXNlY3Rpb24tLW1lbnUge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLS10ZXh0LXNlY3Rpb24ge1xyXG4vKiAgYmFja2dyb3VuZDogIzY3YWRjOTtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogNDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4OyovXHJcbiAgYmFja2dyb3VuZDogIzY3YWRjOTtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci0tdGV4dC1zZWN0aW9uIHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbiIsIi5jb250YWluZXItY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmJ1dHRvbl9fc2lndWllbnRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0ZjcyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jb250YWluZXItY2FyZF9faW1nIHtcbiAgaGVpZ2h0OiA0MCU7XG4gIHdpZHRoOiA0MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItY2FyZF9fdGV4dG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb250YWluZXItY2FyZF9fdGV4dG8tLWZvcm1hdG8ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzA5NGY3MjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1Yi1IZWFkZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDIwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY29udGFpbmVyLS1zdWJIZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3OTQ5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG59XG5cbi5jb250YWluZXItLXRpdHVsby1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzY3YWRjOTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGhlaWdodDogNjBweDtcbiAgYm94LXNoYWRvdzogNHB4IDVweCAxMHB4ICM2MTYxNjE7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXItLWxldHRlci1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDQ2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItLXRpdHVsby1zZWN0aW9uLS1tZW51IHtcbiAgYmFja2dyb3VuZDogIzY3YWRjOTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogNHB4IDVweCAxMHB4ICM2MTYxNjE7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci0tbGV0dGVyLXNlY3Rpb24tLW1lbnUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci0tdGV4dC1zZWN0aW9uIHtcbiAgLyogIGJhY2tncm91bmQ6ICM2N2FkYzk7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDsqL1xuICBiYWNrZ3JvdW5kOiAjNjdhZGM5O1xuICB3aWR0aDogOTAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29udGFpbmVyLS10ZXh0LXNlY3Rpb24gcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/detalles-casa/detalles-casa.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/detalles-casa/detalles-casa.page.ts ***!
  \*****************************************************/
/*! exports provided: DetallesCasaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesCasaPage", function() { return DetallesCasaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_rs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rs.service */ "./src/app/services/rs.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");









let DetallesCasaPage = class DetallesCasaPage {
    constructor(localeService, menuCtrl, http, rs, navCtrl, loadingController, alertCtrl, loading, calendar, iab) {
        this.localeService = localeService;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.rs = rs;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.calendar = calendar;
        this.iab = iab;
        this.propiedad = {
            nombre: "",
            eval_c: { "conseguir_propiedad": false, "documentacion": false, "contrato": false, "visita_propiedad": false, "estudio_mercado": false },
            eval_p: { "promocion": false, "chat_redes": false, "leads": false, "citas": false, "informe": false },
            eval_i: { "oferta": false, "documentacion_cliente": false, "contrato": false, "seguimiento_banco_notaria": false, "avaluo": false },
            eval_f: { "firma": false },
            eval_e: { "entrega": false, "pago_comision": false }
        };
        /*  async presentLoading() {
            this.loader = await this.loadingController.create({
              message: 'Actualizando...',
            });
            await this.loader.present();
          }*/
        this.TIME_IN_MS = 10000;
    }
    verPropiedad(propiedad, event) {
        event.stopPropagation();
        window.localStorage.setItem("propiedad_a_ver", JSON.stringify(propiedad));
        this.navCtrl.navigateRoot('/editar-propiedad');
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
                                "id_propiedad": this.propiedad.id_propiedad
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                this.verInfo("Listo!", "La propiedad fue cancelada correctamente.");
                                console.log(data.data);
                                this.navCtrl.navigateRoot('/mis-propiedades');
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
        this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"));
        console.log("propiedad", this.propiedad);
        try {
            this.propiedad.eval_c = JSON.parse(this.propiedad.eval_c);
            this.propiedad.eval_p = JSON.parse(this.propiedad.eval_p);
            this.propiedad.eval_i = JSON.parse(this.propiedad.eval_i);
            this.propiedad.eval_f = JSON.parse(this.propiedad.eval_f);
            this.propiedad.eval_e = JSON.parse(this.propiedad.eval_e);
        }
        catch (e) {
            console.log("JSONPARSERROR", e);
            console.log(this.propiedad.eval_c);
        }
        /*   let hideLoaderTimeout = setTimeout( () => {
               //this.loadingController.getTop().then(v => v ? this.loadingController.dismiss() : null);
             console.log(this.TIME_IN_MS)
           }, this.TIME_IN_MS);*/
    }
    showLoader() {
        this.loading.present();
    }
    abrirWhatsapp(p, msj, propiedad) {
        //var link = "";
        /*    if(propiedad)
            {
              window.localStorage.setItem("propiedadAWhatsapp",propiedad);
            }*/
        window.localStorage.setItem("whatsappAVer", p);
        window.localStorage.setItem("mensajeAVer", msj);
        window.localStorage.setItem("whatscliente", "no");
        window.localStorage.setItem("whatspropiedad", "si");
        //link = "whatsapp://send?phone=+521"+p.celular+"&text=Estimad@ "+p.nombre+", ¡Gracias por la confianza! "+msj;
        //window.open(encodeURI(link), '_system');
    }
    updateEval() {
        /*  this.loadingController.getTop().then(v =>{
            if(!v)
            {
              console.log(v);
            }
          });*/
        /*  this.loadingController.getTop().then(v =>  v ? this.loadingController.dismiss() : null)
          if(!this.loadingController.getTop())*/
        //if(this.loader.instance)
        /*
            console.log("this.propiedad.eval_c",this.propiedad.eval_c)
    
            console.log("ROOTURL",this.rs.ROOTURL)*/
        this.http.setRequestTimeout(5.0);
        this.http.post(this.rs.ROOTURL + "Propiedades/updateEval.php", {
            "eval_c": JSON.stringify(this.propiedad.eval_c),
            "eval_p": JSON.stringify(this.propiedad.eval_p),
            "eval_i": JSON.stringify(this.propiedad.eval_i),
            "eval_f": JSON.stringify(this.propiedad.eval_f),
            "eval_e": JSON.stringify(this.propiedad.eval_e),
            "id_propiedad": this.propiedad.id_propiedad
        }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
            .then(data => {
            this.loading.dismiss();
            console.log(data.data);
            window.localStorage.setItem("propiedad_a_ver", JSON.stringify(this.propiedad));
        })
            .catch(error => {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            this.loading.dismiss();
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
                            this.http.post(this.rs.ROOTURL + "Comisiones/subirComision.php", {
                                "monto": data.monto,
                                "id_usuario": window.localStorage.getItem("id_usuario"),
                                "id_propiedad": this.propiedad.id_propiedad
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                alert("La comisión recibida  se ha agregado correctamente en la sección de MI PORTAFOLIO");
                                this.navCtrl.navigateRoot('/propiedades');
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
    abrirFormulario(tipo) {
        window.localStorage.setItem("propiedad_a_ver", JSON.stringify(this.propiedad));
        window.localStorage.setItem("formularioAVer", tipo);
        window.localStorage.setItem("tipoFormularioAVer", "Propiedad");
    }
    irCheckout(txt, precio, descrip) {
        window.localStorage.setItem("descripcionAVer", descrip);
        window.localStorage.setItem("productoAVer", txt);
        window.localStorage.setItem("precioAVer", precio);
    }
    agendarCita() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            function getTwoDigit(v) {
                let txt = "";
                if (v < 10) {
                    txt = "0" + v;
                }
                else {
                    txt = v;
                }
                return txt;
            }
            let d_ = new Date();
            let y = d_.getFullYear();
            let m = getTwoDigit(d_.getMonth() + 1);
            let d = getTwoDigit(d_.getDate());
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
                        value: y + '-' + m + '-' + d,
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
    abrirLink(link) {
        this.iab.create(link, "_system");
    }
    archivarPropiedad() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alerta = yield this.alertCtrl.create({
                header: "¿Deseas archivar la propiedad?",
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
                            this.http.post(this.rs.ROOTURL + "Propiedades/archivarPropiedad.php", {
                                "id_propiedad": this.propiedad.id_propiedad
                            }, { 'Accept': 'application/x-www-form-urlencoded', 'Content-Type': 'application/x-www-form-urlencoded' })
                                .then(data => {
                                console.log(data.data);
                                alert("Propiedad archivada correctamente");
                                this.navCtrl.navigateRoot('/propiedades');
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
DetallesCasaPage.ctorParameters = () => [
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
    { type: _services_rs_service__WEBPACK_IMPORTED_MODULE_3__["RootSettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_7__["Calendar"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] }
];
DetallesCasaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalles-casa',
        template: __webpack_require__(/*! raw-loader!./detalles-casa.page.html */ "./node_modules/raw-loader/index.js!./src/app/detalles-casa/detalles-casa.page.html"),
        styles: [__webpack_require__(/*! ./detalles-casa.page.scss */ "./src/app/detalles-casa/detalles-casa.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _services_rs_service__WEBPACK_IMPORTED_MODULE_3__["RootSettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_7__["Calendar"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]])
], DetallesCasaPage);



/***/ })

}]);
//# sourceMappingURL=detalles-casa-detalles-casa-module-es2015.js.map