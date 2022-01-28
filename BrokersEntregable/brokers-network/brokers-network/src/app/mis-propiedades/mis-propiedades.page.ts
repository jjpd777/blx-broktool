import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController} from "@ionic/angular";
import {HTTP} from '@ionic-native/http/ngx';
import {RootSettingsService} from "../services/rs.service";
@Component({
  selector: 'app-mis-propiedades',
  templateUrl: './mis-propiedades.page.html',
  styleUrls: ['./mis-propiedades.page.scss'],
})
export class MisPropiedadesPage implements OnInit {

  constructor(private alertCtrl: AlertController,private http: HTTP,private rs:RootSettingsService,public loadingController: LoadingController) { }

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
  getPropiedades()
  {
    this.presentLoading();
    var headers = {'Accept' : 'application/x-www-form-urlencoded',
              'Content-Type' : 'application/x-www-form-urlencoded'};
    console.log("ROOTURL",this.rs.ROOTURL)
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Propiedades/getPropiedades.php",
        {

        },
        headers)
        .then(data => {
          console.log(data.data)
          this.loader.dismiss();
          this.propiedades = JSON.parse(data.data)
        })
        .catch(error => {
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
          this.loader.dismiss();
        });
  }

  verPropiedad(propiedad)
  {
    window.localStorage.setItem("propiedad_a_ver",JSON.stringify(propiedad))
  }

}
