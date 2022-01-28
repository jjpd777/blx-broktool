import { Component, OnInit } from '@angular/core';

import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import {LoadingController, MenuController, NavController} from "@ionic/angular";
//import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {RootSettingsService} from '../services/rs.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {HTTP} from "@ionic-native/http/ngx";
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import {File} from "@ionic-native/file/ngx";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  newUser:any;
  toschecked:any=false;
  soyasesorchecked:any=false;


  constructor(public menuCtrl: MenuController,private transfer: FileTransfer,private rs:RootSettingsService,private http: HTTP,
              private navCtrl: NavController,public loadingController: LoadingController,
              private camera: Camera,private file: File) { }

  checkIcon = faCheck;

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.newUser = {
      nombre:'',
      apellido:'',
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
  }

  ionViewDidEnter()
  {
  }
    loader:any;
    async presentLoading() {
        this.loader = await this.loadingController.create({
            message: 'Cargando tu información...',
        });
        await this.loader.present();
    }
    TIME_IN_MS:any = 5000;
  irFinalizar = function () {
    window.localStorage.setItem("newUser",JSON.stringify(this.newUser))
    console.log("this.newUser",this.newUser)
  }
  finalizarRegistro = function () {
      if(this.newUser.terminosCondiciones == 1 && this.newUser.email!="" && this.newUser.password!="")
      {
          console.log("ROOTURL",this.rs.ROOTURL)
          this.http.setRequestTimeout(5.0);
          this.presentLoading();

          this.http.post(this.rs.ROOTURL+"Mailchimp/register_audience.php",
              {
                  "name":this.newUser.nombre,
                  "lastname":this.newUser.apellido,
                  "email":this.newUser.email,
                  "phone":this.newUser.celular,
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
          this.http.post(this.rs.ROOTURL+"Usuarios/agregarUsuario.php",
              {
                  "nombreApellido":this.newUser.nombre + " " + this.newUser.apellido,
                  "usuario":this.newUser.usuario,
                  "celular":this.newUser.celular,
                  "email":this.newUser.email,
                  "password":this.newUser.password,
                  "curp":this.newUser.curp,
                  "rfc":this.newUser.rfc,
                  "ciudad":this.newUser.ciudad,
                  "zonaParaCubrir":this.newUser.zonaParaCubrir,
                  "horarioParaCubrir":this.newUser.horarioParaCubrir,
                  "terminosCondiciones":this.newUser.terminosCondiciones,
                  "politicasPrivacidad":this.newUser.politicasPrivacidad,
                  "notificaciones":this.newUser.notificaciones,
                  "fotoPerfil":this.newUser.fotoPerfil,
                  "empresa":this.newUser.empresa,
                  "desdeCuando":this.newUser.desdeCuando,
                  "datosTarjeta1":this.newUser.datosTarjeta1,
                  "datosTarjeta2":this.newUser.datosTarjeta2,
                  "datosTarjeta3":this.newUser.datosTarjeta3,
                  "datosTarjeta4":this.newUser.datosTarjeta4,
                  "asesorIndependiente":this.newUser.asesorIndependiente,
                  "accesoUbicacion":this.newUser.accesoUbicacion,
                  "fotoPortada":this.newUser.fotoPortada,
                  "pushToken":this.newUser.pushToken
              },
              {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
              .then(data => {
                  // let json = JSON.parse(data.data);
                  alert("Registro completado correctamente, ahora puedes inciar sesión.")
                  console.log("JSON",data)
                  this.loader.dismiss();
                  this.navCtrl.navigateRoot('/inicio');
              })
              .catch(error => {
                  this.loader.dismiss();
                  console.log(error);
                  console.log(error.status);
                  alert(error.error)
                  console.log(error.error); // error message as string
                  console.log(error.headers);
              });
      }
      else {
          if(this.newUser.terminosCondiciones==0)
          alert("Debes aceptar los términos y condiciones");
          else {
              if(this.newUser.email=="")
                  alert("El email no puede estar vacío");
              else {
                  if(this.newUser.password=="")
                      alert("El password no puede estar vacío");
              }
          }
      }

  }
  asesorIndependienteClick()
  {
    if(this.newUser.asesorIndependiente==0)
    {
      this.newUser.asesorIndependiente = 1
    }
    else {
      if(this.newUser.asesorIndependiente==1)
      {
        this.newUser.asesorIndependiente = 0
      }
    }
    console.log(this.newUser.asesorIndependiente)
  }
  fileUrl: any = null;
/*  buscarCurp()
  {
    var options = {
      quality: 80,
      outputType: 0
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        this.fileUrl = results[i]

        const fileTransfer: FileTransferObject = this.transfer.create();
        const uploadOpts: FileUploadOptions = {
          fileKey: 'file',
          fileName: this.fileUrl.substr(this.fileUrl.lastIndexOf('/') + 1)
        };

        fileTransfer.upload(this.fileUrl, this.rs.ROOTURL+"Docs/uploadDoc.php?type=CURP", uploadOpts)
            .then((data) => {
              console.log(data);
             var respData = data.response
              console.log(respData);
              this.newUser.curp = respData;
            }, (err) => {
              console.log(err);
            });

      }
    }, (err) => { });
  }*/

    buscarFotoPerfil(type)
    {
        const options: CameraOptions = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.fileUrl = imageData;
            const fileTransfer: FileTransferObject = this.transfer.create();
            const uploadOpts: FileUploadOptions = {
                fileKey: 'file',
                fileName: this.fileUrl.substr(this.fileUrl.lastIndexOf('/') + 1)
            };
            this.presentLoading();
            fileTransfer.upload(this.fileUrl, this.rs.ROOTURL+"Docs/uploadDoc.php?type=FOTOPERFIL", uploadOpts)
                .then((data) => {
                    console.log(data);
                    var respData = data.response
                    console.log(respData);
                    this.newUser.fotoPerfil = respData;
                    this.loader.dismiss();
                }, (err) => {
                    console.log(err);
                });
        }, (err) => {
        });
    }
/*  buscarFotoPerfil_old()
  {
    var options = {
      quality: 80,
      outputType: 0
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        this.fileUrl = results[i]

        const fileTransfer: FileTransferObject = this.transfer.create();
        const uploadOpts: FileUploadOptions = {
          fileKey: 'file',
          fileName: this.fileUrl.substr(this.fileUrl.lastIndexOf('/') + 1)
        };

        fileTransfer.upload(this.fileUrl, this.rs.ROOTURL+"Docs/uploadDoc.php?type=FOTOPERFIL", uploadOpts)
            .then((data) => {
              console.log(data);
              var respData = data.response
              console.log(respData);
              this.newUser.fotoPerfil = respData;
            }, (err) => {
              console.log(err);
            });

      }
    }, (err) => { });
  }*/
  terminosClick()
  {
    if(this.newUser.terminosCondiciones==0)
    {
      this.newUser.terminosCondiciones = 1
    }
    else {
      if(this.newUser.terminosCondiciones==1)
      {
        this.newUser.terminosCondiciones = 0
      }
    }
    console.log(this.newUser.terminosCondiciones)
  }
  notificacionesClick()
  {
    if(this.newUser.notificaciones==0)
    {
      this.newUser.notificaciones = 1
    }
    else {
      if(this.newUser.notificaciones==1)
      {
        this.newUser.notificaciones = 0
      }
    }
    //console.log(this.newUser.notificaciones)
  }
  poliitcasClick()
  {
    if(this.newUser.politicasPrivacidad==0)
    {
      this.newUser.politicasPrivacidad = 1
    }
    else {
      if(this.newUser.politicasPrivacidad==1)
      {
        this.newUser.politicasPrivacidad = 0
      }
    }
    console.log(this.newUser.politicasPrivacidad)
  }
}
