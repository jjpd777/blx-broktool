import {RootSettingsService} from "../services/rs.service";

declare var Mercadopago: any;
import { Component, OnInit } from '@angular/core';
import {HTTP} from "@ionic-native/http/ngx";
import {globals} from 'globals'

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import {AlertController, LoadingController, NavController} from "@ionic/angular";
import {LoadingService} from "../services/loading.service";
import {EmailComposer} from "@ionic-native/email-composer/ngx";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private http: HTTP,private payPal: PayPal,
            private emailComposer: EmailComposer,
              private rs:RootSettingsService,public loading: LoadingService,private alertCtrl: AlertController,
              private navCtrl: NavController) { }

  form_pago:any={
    numero_tarjeta:"",
    monto_a_pagar:0,
    payment_method_id:""
  }
  productoAVer:any;
  descripcionAVer:any;
  precioAVer:any;
  installments:any=[]
  paymentAmount: string = '50';
  currency: string = 'USD';
  currencyIcon: string = '$';


  ngOnInit() {
    this.descripcionAVer = window.localStorage.getItem("descripcionAVer");
    this.productoAVer = window.localStorage.getItem("productoAVer");
    this.precioAVer = window.localStorage.getItem("precioAVer");
    this.paymentAmount = this.precioAVer;
  }

  enviarSolicitud()
  {
      var email_to = ""
      var body = "";

      var user_info = JSON.parse(window.localStorage.getItem("user_info"))
      switch (this.productoAVer)
      {
          case "Documentación Aval":
              email_to="asesorialegal@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre Póliza Jurídica, Fianza o Mediación Inmobiliaria. " +
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Organizamos tus Citas o Recorrido":
              email_to="oficina@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre Organización de Citas o Recorridos. " +
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Citas y/o recorridos":
              email_to="oficina@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre Cubrimos tus citas o recorridos." +
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Revisión de Documentación del Inmueble":
              email_to="asesorialegal@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre Revisión de Documentación del Inmueble." +
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Revisión de Contrato de Arrendamiento":
              email_to="asesorialegal@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre Revisión de Contrato de Arrendamiento." +
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Búsqueda de propiedades (5 resultados)":
              email_to="oficina@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre Búsqueda inteligente de Propiedades (1-5 resultados)" +
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Búsqueda de propiedades (6-10 resultados)":
              email_to="oficina@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre Búsqueda Inteligente de Propiedades (6-10 resultados)" +
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Contrato de intermediación":
              email_to="asesorialegal@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre Contrato de intermediación" +
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Contrato de intermediación Renta":
                email_to="asesorialegal@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Contrato de intermediación" +
                    "\n<br><br>Nombre: "+user_info.nombreApellido+
                    "\n<br>Email: "+user_info.email+
                    "\n<br>Cel: "+user_info.celular;
              break;
          case "Contrato de intermediación Venta":
                email_to="asesorialegal@brokersnetwork.mx";
                body = "Me interesa recibir más información sobre Contrato de intermediación" +
                    "\n<br><br>Nombre: "+user_info.nombreApellido+
                    "\n<br>Email: "+user_info.email+
                    "\n<br>Cel: "+user_info.celular;
              break;
          case "Fotografía profesional":
              email_to="oficina@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre Fotografía profesional" +
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Tour virtual":
              email_to="oficina@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre Tour virtual" +
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Estudio de mercado":
              email_to="oficina@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre " + this.productoAVer+ " e Interpretación Escrita."+
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Publica en los mejores Portales inmobiliarios":
              email_to="oficina@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre " + this.productoAVer+
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Fichas personalizadas":
              email_to="oficina@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre " + this.productoAVer+
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Chats y Redes":
              email_to="oficina@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre " + this.productoAVer+
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Inventario":
              email_to="oficina@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre " + this.productoAVer+
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Contrato de Arrendamiento":
              email_to="asesorialegal@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre " + this.productoAVer+
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Contrato de Compraventa":
              email_to="asesorialegal@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre " + this.productoAVer+
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;
          case "Revisión de Contrato de Compraventa":
              email_to="asesorialegal@brokersnetwork.mx";
              body = "Me interesa recibir más información sobre  Revisión y llenado de Contrato de Compraventa"+
                  "\n<br><br>Nombre: "+user_info.nombreApellido+
                  "\n<br>Email: "+user_info.email+
                  "\n<br>Cel: "+user_info.celular;
              break;

              
      }

      this.http.setRequestTimeout(5.0);

      this.http.post(this.rs.ROOTURL+"Mailchimp/add_tag.php",
          {
              "email":window.localStorage.getItem("user"),
              "solicitud":this.productoAVer
          },
          {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
          .then(data => {
              console.log("data",data.data)
          })
          .catch(error => {
              //this.loader.dismiss();
              console.log(error);
              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);
          });

    this.http.post(this.rs.ROOTURL+"Pagos/agregarPago.php",
        {
          "pago":window.localStorage.getItem("user"),
          "id_usuario":window.localStorage.getItem("id_usuario"),
          "producto":this.productoAVer,
          "descripcion":this.descripcionAVer,
          "precio":this.precioAVer,
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
          console.log("registro hecho correctamente")
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
                subject: 'Formulario de '+this.productoAVer,
                body: body,
                isHtml: true
            }

// Send a text message using default options
            this.emailComposer.open(email);

            this.goBack();
        })
        .catch(error => {
          alert("Hubo un error al registrar tu pago, el cobro se ha realizado, por favor comunicate al administrador")
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
          this.loading.dismiss();
        });



  }
    goBack()
    {
        this.navCtrl.pop();
    }

  async payWithPaypal() {

    this.payPal.init({
      PayPalEnvironmentProduction: 'ARwmWRZSgx_DUx6E0faK-OWjzSf0mTYQCbyaKMiToEG8X7cVBnj0bWW19PEgrnXTadE94w8lohkRKY34',
      PayPalEnvironmentSandbox: 'AaGH8KUi701n_FCEMgx155PobIV-4fhQXry35GyirRCXBbSPzpgdAxaUw9LD8XYiruuDtzd1NLpiUWFL'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {


          this.http.setRequestTimeout(5.0);
          this.http.post(this.rs.ROOTURL+"Pagos/agregarPago.php",
              {
                "pago":JSON.stringify(res),
                "id_usuario":window.localStorage.getItem("id_usuario"),
                "producto":this.productoAVer,
                "descripcion":this.descripcionAVer,
                "precio":this.precioAVer,
              },
              {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
              .then(data => {


               alert("Todo listo! Tu pago se registro correctamente!")

              })
              .catch(error => {
                alert("Hubo un error al registrar tu pago, el cobro se ha realizado, por favor comunicate al administrador")
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
  }


  checkout()
  {
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

  irPoliticas()
  {

  }

  irTerminos()
  {

  }
}
