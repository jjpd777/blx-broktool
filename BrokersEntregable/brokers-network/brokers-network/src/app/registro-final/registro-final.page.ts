import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

import { BsLocaleService, defineLocale, esLocale } from 'ngx-bootstrap';
import {RootSettingsService} from '../services/rs.service';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import {MenuController} from "@ionic/angular";

import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-registro-final',
  templateUrl: './registro-final.page.html',
  styleUrls: ['./registro-final.page.scss'],
})
export class RegistroFinalPage implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective;

  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker.hide();
  }
    user:any= {
        nombreApellido:'',
        usuario:'',
        celular:'',
        email:'',
        password:'',
        curp:'',
        rfc:'',
        ciudad:'',
        zonaParaCubrir:'',
        horarioParaCubrir:'',
        terminosCondiciones:0,
        politicasPrivacidad:0,
        notificaciones:0,
        fotoPerfil:'',
        empresa:'',
        desdeCuando:'',
        datosTarjeta1:'',
        datosTarjeta2:'',
        datosTarjeta3:'',
        datosTarjeta4:'',
        asesorIndependiente:0,
        accesoUbicacion:0,
        fotoPortada:'',
        pushToken:''
    };
  newUser:any = {
    nombreApellido:'',
    usuario:'',
    celular:'',
    email:'',
    password:'',
    curp:'',
    rfc:'',
    ciudad:'',
    zonaParaCubrir:'',
    horarioParaCubrir:'',
    terminosCondiciones:0,
    politicasPrivacidad:0,
    notificaciones:0,
    fotoPerfil:'',
    empresa:'',
    desdeCuando:'',
    datosTarjeta1:'',
    datosTarjeta2:'',
    datosTarjeta3:'',
    datosTarjeta4:'',
    asesorIndependiente:0,
    accesoUbicacion:0,
    fotoPortada:'',
    pushToken:''
  };

  constructor(private localeService: BsLocaleService,public menuCtrl: MenuController,private http: HTTP,private rs:RootSettingsService) {
    this.setDatepickerLanguage();
   }

  ngOnInit() {



  }
    asesorChecked:any=false;
    getUserInfo()
    {
        console.log("window.localStorage.getItem(\"id_usuario\")",window.localStorage.getItem("id_usuario"))
        this.http.post(this.rs.ROOTURL+"Usuarios/getUsuario.php",
            {
                "id_usuario":window.localStorage.getItem("id_usuario"),
            },
            {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
            .then(data => {
                this.user=JSON.parse(data.data)[0];
                console.log("this.user",this.user)

                this.user.desdeCuando = new Date(this.user.desdeCuando)

                if(this.user.asesorIndependiente == 0)
                {
                    this.asesorChecked = false;
                }
                else {
                    this.asesorChecked = true;
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

  ionViewDidEnter()
  {
      this.menuCtrl.enable(false);

      this.getUserInfo()

    //this.newUser =  JSON.parse(window.localStorage.getItem("newUser"))
    //console.log("this.newUser Registro Final",this.newUser)
  }

  setDatepickerLanguage() {
    defineLocale('es', esLocale);
    this.localeService.use('es');
  }

  actualizarRegistro = function () {
    console.log("ROOTURL",this.rs.ROOTURL)
      console.log("USER",this.user)
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Usuarios/editarUsuario.php",
        {
            "id_usuario":this.user.id_usuario,
            "sitioweb":this.user.sitioweb,
          "nombreApellido":this.user.nombreApellido,
          "usuario":this.user.usuario,
          "celular":this.user.celular,
          "email":this.user.email,
          "password":this.user.password,
          "ciudad":this.user.ciudad,
          "zonaParaCubrir":this.user.zonaParaCubrir,
          "horarioParaCubrir":this.user.horarioParaCubrir,
          "empresa":this.user.empresa,
          "desdeCuando":this.user.desdeCuando,
          "datosTarjeta1":this.user.datosTarjeta1,
          "datosTarjeta2":this.user.datosTarjeta2,
          "datosTarjeta3":this.user.datosTarjeta3,
          "datosTarjeta4":this.user.datosTarjeta4,
          "asesorIndependiente":this.user.asesorIndependiente,
          "pushToken":""
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
            window.localStorage.setItem("user_info",JSON.stringify(this.user))
            console.log("JSON",data)
        })
        .catch(error => {
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
        });
  }

  asesorIndependienteClick()
  {
    if(this.user.asesorIndependiente==0)
    {
      this.user.asesorIndependiente = 1
    }
    else {
      if(this.user.asesorIndependiente==1)
      {
        this.user.asesorIndependiente = 0
      }
    }
    console.log(this.user.asesorIndependiente)
  }
  accesoUbicacionClick()
  {
    if(this.newUser.accesoUbicacion==0)
    {
      this.newUser.accesoUbicacion = 1
    }
    else {
      if(this.newUser.accesoUbicacion==1)
      {
        this.newUser.accesoUbicacion = 0
      }
    }
    console.log(this.newUser.accesoUbicacion)
  }

}
