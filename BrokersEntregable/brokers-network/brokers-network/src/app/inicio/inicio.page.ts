import { Component, OnInit } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
import {RootSettingsService} from '../services/rs.service';
import {BsLocaleService} from "ngx-bootstrap";
import {AlertController,MenuController, NavController, LoadingController, Platform} from "@ionic/angular";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {Keyboard} from "@ionic-native/keyboard/ngx";

import {LoadingService} from '../services/loading.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private localeService: BsLocaleService,private alertCtrl: AlertController,public menuCtrl: MenuController,private http: HTTP,private rs:RootSettingsService,private navCtrl: NavController,
              public loadingController: LoadingController,private iab: InAppBrowser,public keyboard:Keyboard,public platform:Platform,public loading: LoadingService) { }
  user:any={
    usuario:"",
    password:""
  }
  loader:any;
/*  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Cargando tu información...',
    });
    await this.loader.present();
  }*/
  TIME_IN_MS:any = 2000;
  ngOnInit() {
    this.loading.present();
  }

  login()
  {
    if(this.user.usuario==""||this.user.password=="")
    {
      alert("Porfavor ingresa tus datos de acceso.")
    }
    else {
      console.log("ROOTURL",this.rs.ROOTURL)
      this.http.setRequestTimeout(5.0);
      var url = this.rs.ROOTURL+"Auth/doLogin.php";

      var data = {
        "usuario":this.user.usuario.toLowerCase(),
        "pass":this.user.password
      };
      var headers = {'Accept' : 'application/x-www-form-urlencoded',
              'Content-Type' : 'application/x-www-form-urlencoded'};

      this.http.post(url,data,headers)
          .then(data => {
            let json = JSON.parse(data.data);
            if(json.length==0)
            {
              alert("Usuario o Contraseña incorrecto, porfavor intentalo de nuevo")
            }
            else {
              console.log("JSON",data)
              window.localStorage.setItem("user",this.user.usuario)
              window.localStorage.setItem("user_info",JSON.stringify(json[0]))
              window.localStorage.setItem("id_usuario",json[0].id_usuario)
              this.navCtrl.navigateRoot('/perfil-main');
            }

            //this.loader.dismiss();
            //this.ref.detectChanges();
          })
          .catch(error => {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
          });
    }


  }

  ionViewWillEnter() {
    this.loading.present();
    this.menuCtrl.enable(false);
    if(window.localStorage.getItem("id_usuario") && window.localStorage.getItem("id_usuario") !="")
    {
      console.log(window.localStorage.getItem("id_usuario"))
      let hideLoaderTimeout = setTimeout( () => {
        this.loading.dismiss();
        this.navCtrl.navigateRoot('/perfil-main');
      }, this.TIME_IN_MS);
    }
    else {
      this.loading.dismiss();
    }
  }

  isKeyboardHide=true;

  /*ionViewWillEnter() {

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

  async recuperarPassword()
  {
    const alerta = await this.alertCtrl.create({
      header:"Por favor ingresa tu correo para enviarte las instrucciones de recuperación de contraseña",
      inputs: [
        {
          name: 'email',
          placeholder: 'Ingresa tu Email',
          value:""
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
          text: 'Recuperar',
          handler: data => {
            this.http.setRequestTimeout(5.0);
            var url = this.rs.ROOTURL+"Auth/recuperarPassword.php";

            var data_ = {
              "email":data.email,
            };
            var headers = {'Accept' : 'application/x-www-form-urlencoded',
              'Content-Type' : 'application/x-www-form-urlencoded'};

            this.http.post(url,data_,headers)
                .then(data_response => {
                 // alert(JSON.stringify(data_response));
                  alert("Email de recuperación enviado, porfavor sigue las instrucciones para reestablecer tu contraseña.");
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

  irPoliticas()
  {
    this.iab.create('http://www.broktool.com/aviso-de-privacidad.html',"_system");
  }
  irTerminos()
  {
    this.iab.create('http://www.broktool.com/teacuterminos-y-condiciones.html',"_system");
  }
}
