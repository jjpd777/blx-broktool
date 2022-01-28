import { Component, OnInit } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
import {RootSettingsService} from '../services/rs.service';
import {BsLocaleService} from "ngx-bootstrap";
import {AlertController, LoadingController, MenuController, NavController, Platform} from "@ionic/angular";
import {LoadingService} from "../services/loading.service";

import { Calendar } from '@ionic-native/calendar/ngx';
import {InAppBrowser} from "@ionic-native/in-app-browser/ngx";
@Component({
  selector: 'app-detalles-casa',
  templateUrl: './detalles-casa.page.html',
  styleUrls: ['./detalles-casa.page.scss'],
})
export class DetallesCasaPage implements OnInit {

  constructor(private localeService: BsLocaleService,public menuCtrl: MenuController,private http: HTTP,private rs:RootSettingsService,private navCtrl: NavController,
              public loadingController: LoadingController,private alertCtrl: AlertController,public loading: LoadingService,private calendar: Calendar,private iab: InAppBrowser) { }

  propiedad:any={
    nombre:"",
    eval_c:{"conseguir_propiedad":false,"documentacion":false,"contrato":false,"visita_propiedad":false,"estudio_mercado":false},
    eval_p:{"promocion":false,"chat_redes":false,"leads":false,"citas":false,"informe":false},
    eval_i:{"oferta":false,"documentacion_cliente":false,"contrato":false,"seguimiento_banco_notaria":false,"avaluo":false},
    eval_f:{"firma":false},
    eval_e:{"entrega":false,"pago_comision":false}
  };

  linkExterno= "http://broktool.com";

  venta_renta:any;
  correo_usuario:any;

  verPropiedad(propiedad,event)
  {
    event.stopPropagation();
    window.localStorage.setItem("propiedad_a_ver",JSON.stringify(propiedad))
    this.navCtrl.navigateRoot('/editar-propiedad');
  }

  ngOnInit() {
  }

  async cancelarPropiedad()
  {
    const alert = await this.alertCtrl.create({
      header:"Cancelar Operación",
      subHeader:"Se cancelará la operación y no seguirás viendo la información de esta propiedad en tus propiedades, ¿Continuar?",
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
            this.http.post(this.rs.ROOTURL+"Propiedades/cancelarPropiedad.php",
                {
                  "id_propiedad":this.propiedad.id_propiedad
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  this.verInfo("Listo!","La propiedad fue cancelada correctamente.")
                  console.log(data.data)
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

    await alert.present();
  }

  async verInfo(titulo,msj)
  {
    const alert = await this.alertCtrl.create({
      header:titulo,
      subHeader:msj,
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

    await alert.present();
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
  }

  ionViewDidEnter()
  {
    this.correo_usuario = window.localStorage.getItem("user");

    this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"))
    console.log("propiedad",this.propiedad)

    this.venta_renta = this.propiedad.tipo;

    try {
      this.propiedad.eval_c = JSON.parse(this.propiedad.eval_c);
      this.propiedad.eval_p = JSON.parse(this.propiedad.eval_p);
      this.propiedad.eval_i = JSON.parse(this.propiedad.eval_i);
      this.propiedad.eval_f = JSON.parse(this.propiedad.eval_f);
      this.propiedad.eval_e = JSON.parse(this.propiedad.eval_e);
    }
    catch (e) {
      console.log("JSONPARSERROR",e)
      console.log(this.propiedad.eval_c)
    }

    /*   let hideLoaderTimeout = setTimeout( () => {
           //this.loadingController.getTop().then(v => v ? this.loadingController.dismiss() : null);
         console.log(this.TIME_IN_MS)
       }, this.TIME_IN_MS);*/
  }
/*  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Actualizando...',
    });
    await this.loader.present();
  }*/
  TIME_IN_MS:any = 10000;
  loader:any;
  showLoader()
  {
    this.loading.present();
  }
  abrirWhatsapp(p,msj,propiedad) {
    //var link = "";
/*    if(propiedad)
    {
      window.localStorage.setItem("propiedadAWhatsapp",propiedad);
    }*/

    window.localStorage.setItem("whatsappAVer",p);
    window.localStorage.setItem("mensajeAVer",msj)

    window.localStorage.setItem("whatscliente","no")
    window.localStorage.setItem("whatspropiedad","si")
    //link = "whatsapp://send?phone=+521"+p.celular+"&text=Estimad@ "+p.nombre+", ¡Gracias por la confianza! "+msj;

    //window.open(encodeURI(link), '_system');
  }
  updateEval()
  {
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
    this.http.post(this.rs.ROOTURL+"Propiedades/updateEval.php",
        {
          "eval_c":JSON.stringify(this.propiedad.eval_c),
          "eval_p":JSON.stringify(this.propiedad.eval_p),
          "eval_i":JSON.stringify(this.propiedad.eval_i),
          "eval_f":JSON.stringify(this.propiedad.eval_f),
          "eval_e":JSON.stringify(this.propiedad.eval_e),
          "id_propiedad":this.propiedad.id_propiedad
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
          this.loading.dismiss();
          console.log(data.data)
          window.localStorage.setItem("propiedad_a_ver",JSON.stringify(this.propiedad))

        })
        .catch(error => {
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
          this.loading.dismiss();
        });
  }

  async crearComision()
  {
    const alerta = await this.alertCtrl.create({
      header:"Cuanta comisión recibí",
      inputs: [
        {
          name: 'monto',
          placeholder: 'Monto de la comision',
          value:0
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
            console.log("ROOTURL",this.rs.ROOTURL)
            this.http.setRequestTimeout(5.0);
            this.http.post(this.rs.ROOTURL+"Comisiones/subirComision.php",
                {
                  "monto":data.monto,
                  "id_usuario":window.localStorage.getItem("id_usuario"),
                  "id_propiedad":this.propiedad.id_propiedad,
                  "renta_o_venta":this.propiedad.tipo

                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  alert("La comisión recibida  se ha agregado correctamente en la sección de MI PORTAFOLIO")
                  this.navCtrl.navigateRoot('/propiedades');
                  console.log(data.data)
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

    await alerta.present();
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
  }
  abrirFormulario(tipo)
  {
    window.localStorage.setItem("venta_renta", this.venta_renta)
    window.localStorage.setItem("propiedad_a_ver",JSON.stringify(this.propiedad))
    window.localStorage.setItem("formularioAVer",tipo);
    window.localStorage.setItem("tipoFormularioAVer","Propiedad")
  }

  irCheckout(txt,precio,descrip)
  {
    window.localStorage.setItem("descripcionAVer",descrip);

    window.localStorage.setItem("productoAVer",txt);
    window.localStorage.setItem("precioAVer",precio);
  }

  async agendarCita()
  {
    function getTwoDigit(v)
    {
      let txt = "";
      if(v<10)
      {
        txt="0"+v;
      }
      else
      {
        txt=v;
      }
      return txt;
    }

    let d_ = new Date();
    let y = d_.getFullYear();
    let m = getTwoDigit(d_.getMonth()+1);
    let d = getTwoDigit(d_.getDate());

    const alerta = await this.alertCtrl.create({
      header:"Crea una cita en tu calendario:",
      inputs: [
        {
          label:'Titulo',
          name: 'titulo',
          placeholder: 'Título de cita',
          value:''
        },
        {
          label:'Lugar',
          name: 'lugar',
          placeholder: 'Lugar de la cita',
          value:''
        },
        {
          label:'Notas',
          name: 'notas',
          placeholder: 'Notas',
          value:''
        },
        {
          label:'Día',
          name: 'fecha',
          placeholder: 'Fecha',
          value: y+'-'+m+'-'+d,
          type:"date"
        },
        {
          label:'Hora',
          name: 'hora',
          placeholder: 'Hora',
          value:'12:00',
          type:"time"
        },
        {
          label:'Duración',
          name: 'duracion',
          placeholder: 'Duración (Horas)',
          value:1,
          type:"number"
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

            console.log("dataCita",data)
            var fecha_str = data.fecha.split("-");
            var hora_str = data.hora.split(":");
            console.log("fecha_str",fecha_str)
            console.log("hora_str",hora_str)
            var startDate = new Date(fecha_str[0],fecha_str[1]/1-1,fecha_str[2],hora_str[0],hora_str[1],0,0);
            var endDate = new Date(fecha_str[0],fecha_str[1]/1-1,fecha_str[2],hora_str[0]/1+data.duracion,hora_str[1],0,0);

            console.log("data.titulo",data.titulo)
            console.log("data.lugar",data.lugar)
            console.log("data.notas",data.notas)
            console.log("startDate",startDate)
            console.log("endDate",endDate)

            try {
              if(data.titulo!="" && startDate instanceof Date && !isNaN(startDate.getTime()) && endDate instanceof Date && !isNaN(endDate.getTime()))
              {
                this.calendar.createEventInteractively(data.titulo,data.lugar,data.notas,startDate,endDate).then(
                    (msg) => { console.log("msg",msg); },
                    (err) => { console.log("err",err); }
                );
              }
              else {
                alert("Por favor ingresa un título y una fecha y hora correctas para tu cita.");
              }
            }
            catch (e) {
              console.log("e",e)
            }
          }
        }
      ]
    });
    await alerta.present();
  }

  abrirLink(link){
    this.iab.create(link,"_system");
  }

  async abrirLinkExterno(tittle,msg,boton,linkExterno)
  {
    const alert = await this.alertCtrl.create({
      header:tittle,
      subHeader:msg,
      buttons: [
        {
          text: boton,
          handler: data => {
            this.iab.create(linkExterno,"_system");
          }
        },
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: data => {
            console.log('cerrar clicked');
          }
        },
      ]
    });

    await alert.present();
  }
  async archivarPropiedad()
  {
    const alerta = await this.alertCtrl.create({
      header:"¿Deseas archivar la propiedad?",
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
            console.log("ROOTURL",this.rs.ROOTURL)
            this.http.setRequestTimeout(5.0);
            this.http.post(this.rs.ROOTURL+"Propiedades/archivarPropiedad.php",
                {
                  "id_propiedad":this.propiedad.id_propiedad
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  console.log(data.data)
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

    await alerta.present();
  }

}
