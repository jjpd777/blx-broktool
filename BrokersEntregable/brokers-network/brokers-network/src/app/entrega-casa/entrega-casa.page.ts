import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, MenuController, NavController} from "@ionic/angular";
import {HTTP} from '@ionic-native/http/ngx';
import {RootSettingsService} from "../services/rs.service";
import {BsLocaleService} from "ngx-bootstrap";
@Component({
  selector: 'app-entrega-casa',
  templateUrl: './entrega-casa.page.html',
  styleUrls: ['./entrega-casa.page.scss'],
})
export class EntregaCasaPage implements OnInit {

  constructor(private alertCtrl: AlertController,private localeService: BsLocaleService,public menuCtrl: MenuController,private http: HTTP,private rs:RootSettingsService,
              private navCtrl: NavController,public loadingController: LoadingController) { }

  propiedad:any={
    nombre:"",
    eval_e:{"entrega":false,"pago_comision":false}
  };

  ngOnInit() {
  }
  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Actualizando...',
    });
    await this.loader.present();
  }
  TIME_IN_MS:any = 5000;
  loader:any;
  ionViewDidEnter()
  {
    this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"))
    console.log("propiedad",this.propiedad)

    try {
      this.propiedad.eval_e = JSON.parse(this.propiedad.eval_e);
    }
    catch (e) {
      console.log("JSONPARSERROR",e)
      console.log(this.propiedad.eval_e)
    }
  }
  updateEval()
  {
    console.log("this.propiedad.eval_e",this.propiedad.eval_e)

    console.log("ROOTURL",this.rs.ROOTURL)
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Propiedades/updateEval.php",
        {
          "eval":"eval_e",
          "json":JSON.stringify(this.propiedad.eval_e),
          "id_propiedad":this.propiedad.id_propiedad
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
          console.log(data.data)
          this.loader.dismiss();
          window.localStorage.setItem("propiedad_a_ver",JSON.stringify(this.propiedad))
        })
        .catch(error => {
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
        });
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

  async crearComision()
  {
    const alert = await this.alertCtrl.create({
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

}
