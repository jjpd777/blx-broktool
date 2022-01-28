import { Component, OnInit } from '@angular/core';
import {BsLocaleService} from "ngx-bootstrap";
import {AlertController, LoadingController, MenuController, NavController} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";
import {RootSettingsService} from "../services/rs.service";

@Component({
  selector: 'app-promocion-casa',
  templateUrl: './promocion-casa.page.html',
  styleUrls: ['./promocion-casa.page.scss'],
})
export class PromocionCasaPage implements OnInit {

  constructor(private localeService: BsLocaleService,public menuCtrl: MenuController,private http: HTTP,private rs:RootSettingsService,private navCtrl: NavController,
              public loadingController: LoadingController,private alertCtrl: AlertController) { }

  propiedad:any={
    nombre:"",
    eval_p:{"subir_promocion":false,"ficha_promocional":false,"promocion_chat_redes":false,"contestar_leads":false,"programar_confirmar_cita":false,"enviar_informe_visitas":false}
  };
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

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"))
    console.log("propiedad",this.propiedad)

    try {
      this.propiedad.eval_p = JSON.parse(this.propiedad.eval_p);
    }
    catch (e) {
      console.log("JSONPARSERROR",e)
      console.log(this.propiedad.eval_p)
    }
  }
  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Actualizando...',
    });
    await this.loader.present();
  }
  TIME_IN_MS:any = 5000;
  loader:any;
  updateEval()
  {
    console.log("this.propiedad.eval_p",this.propiedad.eval_p)

    console.log("ROOTURL",this.rs.ROOTURL)
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Propiedades/updateEval.php",
        {
          "eval":"eval_p",
          "json":JSON.stringify(this.propiedad.eval_p),
          "id_propiedad":this.propiedad.id_propiedad
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
          this.loader.dismiss();
          console.log(data.data)
          window.localStorage.setItem("propiedad_a_ver",JSON.stringify(this.propiedad))

        })
        .catch(error => {
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
        });
  }

}