import { Component } from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  public appPages = [
    {
      title: 'Inicio',
      url: '/inicio',
      icon: 'home'
    },
    {
      title: 'Registro',
      url: '/registro',
      icon: 'checkmark-circle'
    },
    {
      title: 'Perfil',
      url: '/perfil-main',
      icon: 'contact'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });


  }


  cerrarSesion()
  {
    this.menuCtrl.enable(false);
    window.localStorage.setItem("user","")
    window.localStorage.setItem("user_info","")
    window.localStorage.setItem("id_usuario","")
  }
}
