import { Component, OnInit } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
import {RootSettingsService} from '../services/rs.service';
import {BsLocaleService} from "ngx-bootstrap";
import {AlertController, LoadingController, MenuController, NavController} from "@ionic/angular";
import {LoadingService} from "../services/loading.service";
import {Calendar} from "@ionic-native/calendar/ngx";
import {InAppBrowser} from "@ionic-native/in-app-browser/ngx";
@Component({
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.page.html',
  styleUrls: ['./detalles-cliente.page.scss'],
})
export class DetallesClientePage implements OnInit {

  constructor(private localeService: BsLocaleService,public menuCtrl: MenuController,private http: HTTP,private rs:RootSettingsService,private navCtrl: NavController,
              public loadingController: LoadingController,private alertCtrl: AlertController,private calendar: Calendar,private iab: InAppBrowser) { }
    editarCliente(cliente)
    {
        window.localStorage.setItem("cliente_a_ver",JSON.stringify(cliente))
        this.navCtrl.navigateRoot('/editar-cliente');
    }
  cliente:any={
    nombre:"",
    eval_c:{"conseguir_cliente":false,"documentacion_cliente":false,"documantacion_fiador":false},
    eval_e:{"busqueda_propiedades":false,"disponibilidad_comision":false,"armar_recorrido":false,"citas_recorridos":false,"informe_visita":false},
    eval_r:{"negociacion":false,"oferta_apartado":false,"documentacion_inmueble":false,"contrato":false,"seguimiento":false,"avaluo":false},
    eval_f:{"confirmar_fecha":false,"firma_contrato":false},
    eval_en:{"entrega_inmueble":false,"pago_comision":false}
  };

  linkLandingPage = "http://broktool.com";

  venta_renta:any;
  correo_usuario:any;
  abrirFormulario(tipo)
  {
      window.localStorage.setItem("venta_renta", this.venta_renta)
      window.localStorage.setItem("formularioAVer",tipo)
      window.localStorage.setItem("tipoFormularioAVer","Cliente")
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
                  "id_propiedad":this.cliente.id_propiedad
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  this.verInfo("Listo!","La propiedad fue cancelada correctamente.")
                  console.log(data.data)
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
    this.cliente = JSON.parse(window.localStorage.getItem("cliente_a_ver"))

      this.venta_renta = this.cliente.renta_o_venta;

    console.log("cliente",this.cliente)
    try {
      this.cliente.eval_c = JSON.parse(this.cliente.eval_c);
    }
    catch (e) {
      console.log("JSONPARSERROREVALC",e)
      console.log(this.cliente.eval_c)
    }
      try {
          this.cliente.eval_e = JSON.parse(this.cliente.eval_e);
      }
      catch (e) {
          console.log("JSONPARSERRORE",e)
          console.log(this.cliente.eval_e)
      }
      try {
          this.cliente.eval_r = JSON.parse(this.cliente.eval_r);
      }
      catch (e) {
          console.log("JSONPARSERRORR",e)
          console.log(this.cliente.eval_r)
      }
      try {
          this.cliente.eval_f = JSON.parse(this.cliente.eval_f);
      }
      catch (e) {
          console.log("JSONPARSERRORF",e)
          console.log(this.cliente.eval_f)
      }
      try {
          this.cliente.eval_en = JSON.parse(this.cliente.eval_en);
      }
      catch (e) {
          console.log("JSONPARSERROREN",e)
          console.log(this.cliente.eval_en)
      }
  }
  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Actualizando...',
    });
    await this.loader.present();
  }
  TIME_IN_MS:any = 10000;
  loader:any;
  showLoader()
  {
    this.presentLoading();
  }
    abrirWhatsapp(p,msj) {
        //var link = "";

        window.localStorage.setItem("whatsappAVer",p);
        window.localStorage.setItem("mensajeAVer",msj)

        window.localStorage.setItem("whatscliente","si")
        window.localStorage.setItem("whatspropiedad","no")


        //link = "whatsapp://send?phone=+521"+p.celular+"&text=Estimado "+p.nombre+", ¡Gracias por la confianza! "+msj;

        //window.open(encodeURI(link), '_system');
    }
/*  abrirWhatsapp(p,mensaje) {
    var link = "";
    link = "whatsapp://send?phone=+521"+p.telefono+"&text=Estimado "+p.nombre+", "+mensaje;
    window.open(encodeURI(link), '_system');
  }*/
  updateEval()
  {
      //this.showLoader();
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Clientes/updateEval.php",
        {
          "eval_c":JSON.stringify(this.cliente.eval_c),
          "eval_e":JSON.stringify(this.cliente.eval_e),
          "eval_r":JSON.stringify(this.cliente.eval_r),
          "eval_f":JSON.stringify(this.cliente.eval_f),
          "eval_en":JSON.stringify(this.cliente.eval_en),
          "id_cliente":this.cliente.id_cliente,
          "propiedad_busca":this.cliente.propiedad_busca,
          "renta_o_venta":this.cliente.renta_o_venta,
          "zona_busca":this.cliente.zona_busca,
          "recamaras":this.cliente.recamaras,
          "banos":this.cliente.banos,
          "estacionamientos":this.cliente.estacionamientos,
          "m2":this.cliente.m2,
          "fecha_concretar":this.cliente.fecha_concretar,
          "presupuesto":this.cliente.presupuesto,
          "recursos_consisten":this.cliente.recursos_consisten,
          "requisitos_especiales":this.cliente.requisitos_especiales
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {

          console.log(data.data)
          window.localStorage.setItem("cliente_a_ver",JSON.stringify(this.cliente))
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

    async agendarCita()
    {
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
                    value: '',
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
                        this.http.post(this.rs.ROOTURL+"Comisiones/subirComisionCliente.php",
                            {
                                "monto":data.monto,
                                "id_usuario":window.localStorage.getItem("id_usuario"),
                                "id_cliente":this.cliente.id_cliente,
                                "renta_o_venta":this.cliente.renta_o_venta
                            },
                            {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                            .then(data => {
                                alert("La comisión recibida  se ha agregado correctamente en la sección de MI PORTAFOLIO. Se ha marcado el cliente como concretado y se ha archivado para futuras referencias.")
                                this.navCtrl.navigateRoot('/clientes');
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


    async archivarCliente()
    {
        const alerta = await this.alertCtrl.create({
            header:"¿Deseas archivar el cliente?",
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
                        this.http.post(this.rs.ROOTURL+"Clientes/archivarCliente.php",
                            {
                                "id_cliente":this.cliente.id_cliente
                            },
                            {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                            .then(data => {
                                console.log(data.data)
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

        await alerta.present();
    }

    irCheckout(txt,precio,descrip)
    {
        window.localStorage.setItem("descripcionAVer",descrip);
        window.localStorage.setItem("productoAVer",txt);
        window.localStorage.setItem("precioAVer",precio);
    }

}
