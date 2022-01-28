import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, NavController} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";
import {RootSettingsService} from "../services/rs.service";

@Component({
  selector: 'app-propiedades-archivadas',
  templateUrl: './propiedades-archivadas.page.html',
  styleUrls: ['./propiedades-archivadas.page.scss'],
})
export class PropiedadesArchivadasPage implements OnInit {

  constructor(private alertCtrl: AlertController,private http: HTTP,private rs:RootSettingsService,public loadingController: LoadingController,public alertController: AlertController
      ,private navCtrl: NavController) { }

  ngOnInit() {
  }
  ionViewDidEnter()
  {
    this.getPropiedades()
  }
  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Cargando tu información...',
    });
    await this.loader.present();
  }
  TIME_IN_MS:any = 5000;
  loader:any;
  propiedades:any=[]
  filteredpropiedades:any=[];
  filteredpropiedadesRenta:any=[];
  filteredpropiedadesVenta:any=[];
  getPropiedades()
  {
    this.presentLoading();
    console.log("ROOTURL",this.rs.ROOTURL)
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Propiedades/getPropiedades.php",
        {
          "id_usuario":window.localStorage.getItem("id_usuario"),
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
          console.log(data.data)
          this.loader.dismiss();
          this.propiedades = JSON.parse(data.data)

          //this.filteredpropiedades = this.propiedades.filter(t=>t.archivado ==1)
/*
          this.filteredpropiedadesRenta = this.propiedades.filter(t=>(t.archivado ==1&&t.tipo=='Renta'));
          this.filteredpropiedadesVenta= this.propiedades.filter(t=>(t.archivado ==1&&t.tipo=='Venta'));*/
          this.filteredpropiedades = this.propiedades.filter(t=>(t.archivado ==1));

          this.filteredpropiedadesRenta=[];
          this.filteredpropiedadesVenta=[];
          this.filteredpropiedades.forEach((value) => {
            if(value.tipo == "Renta")
            {
              this.filteredpropiedadesRenta.push(value)
            }
            if(value.tipo == "Venta")
            {
              this.filteredpropiedadesVenta.push(value)
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

  async desarchivarPropiedad(id_propiedad)
  {
    const alerta = await this.alertCtrl.create({
      header:"¿Deseas desarchivar la propiedad?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si, desarchivar',
          handler: data => {
            console.log("ROOTURL",this.rs.ROOTURL)
            this.http.setRequestTimeout(5.0);
            this.http.post(this.rs.ROOTURL+"Propiedades/desarchivarPropiedad.php",
                {
                  "id_propiedad":id_propiedad
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  console.log(data.data)
                  alert("Propiedad desarchivada correctamente");
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
  async eliminarPropiedad(id_propiedad)
  {
    const alerta = await this.alertCtrl.create({
      header:"¿Deseas eliminar la propiedad?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si, eliminar',
          handler: data => {
            console.log("ROOTURL",this.rs.ROOTURL)
            this.http.setRequestTimeout(5.0);
            this.http.post(this.rs.ROOTURL+"Propiedades/eliminarPropiedad.php",
                {
                  "id_propiedad":id_propiedad
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  console.log(data.data)
                  alert("Propiedad eliminada correctamente");
                  this.getPropiedades()
                  //this.navCtrl.navigateRoot('/propiedades');
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
