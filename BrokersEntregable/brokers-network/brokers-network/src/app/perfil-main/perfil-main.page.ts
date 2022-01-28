import { Component, OnInit } from '@angular/core';

import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons/faStarHalf';
import {RootSettingsService} from "../services/rs.service";
import {BsLocaleService} from "ngx-bootstrap";
import {LoadingController, MenuController, NavController} from "@ionic/angular";
import {FileTransfer, FileTransferObject, FileUploadOptions} from "@ionic-native/file-transfer/ngx";
//import {ImagePicker} from "@ionic-native/image-picker/ngx";
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import {HTTP} from "@ionic-native/http/ngx";
@Component({
  selector: 'app-perfil-main',
  templateUrl: './perfil-main.page.html',
  styleUrls: ['./perfil-main.page.scss'],
})
export class PerfilMainPage implements OnInit {

  iconStar = faStar;
  iconHalfStar = faStarHalf;

  errorImagePortada(img)
  {
    img.src = "assets/images/portada_holder.jpg";
  }
  errorImageFoto(img)
  {
    img.src = "assets/images/perfil_holder.jpg";
  }

  constructor(private rs:RootSettingsService,public menuCtrl: MenuController,private navCtrl: NavController,
              private camera: Camera,private file: File,private transfer: FileTransfer,
              public loadingController: LoadingController,private http: HTTP) { }
  loader:any;
  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Cargando tu información...',
    });
    await this.loader.present();
  }
  user_info:any={
    fotoPerfil:"",
    nombre:""
  };
  URLROOT:any;
  ngOnInit() {
    this.URLROOT = this.rs.ROOTURL;
  }

  irRegistroFinal()
  {
    this.navCtrl.navigateRoot('/registro-final');
  }

  ionViewDidEnter()
  {
    this.menuCtrl.enable(true);
    this.user_info =  JSON.parse(window.localStorage.getItem("user_info"))
    console.log(this.user_info)
    console.log("ROOTURL",this.rs.ROOTURL)
  }
  fileUrl: any = null;
  id_usuario_ref:any=window.localStorage.getItem("id_usuario");
  buscarFoto(type)
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
      fileTransfer.upload(this.fileUrl, this.rs.ROOTURL+"Docs/uploadDocWithIdUser.php?type=FOTO"+type+"&id_usuario="+this.id_usuario_ref, uploadOpts)
          .then((data) => {
            console.log(data);
            var respData = data.response
            console.log(respData);
            if (type=="PERFIL")
            {
              this.user_info.fotoPerfil = respData;
            }
            else
            {
              this.user_info.fotoPortada = respData;
            }
            this.loader.dismiss();
            window.localStorage.setItem("user_info",JSON.stringify(this.user_info))
          }, (err) => {
            console.log(err);
          });
    }, (err) => {
      // Handle error
    });
/*
  var options = {
      quality: 80,
      outputType: 0
    };
    try {
      this.imagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.fileUrl = results[i]

          const fileTransfer: FileTransferObject = this.transfer.create();
          const uploadOpts: FileUploadOptions = {
            fileKey: 'file',
            fileName: this.fileUrl.substr(this.fileUrl.lastIndexOf('/') + 1)
          };
          this.presentLoading();
          fileTransfer.upload(this.fileUrl, this.rs.ROOTURL+"Docs/uploadDocWithIdUser.php?type=FOTO"+type+"&id_usuario="+this.id_usuario_ref, uploadOpts)
              .then((data) => {
                console.log(data);
                var respData = data.response
                console.log(respData);
                if (type=="PERFIL")
                {
                  this.user_info.fotoPerfil = respData;
                }
                else
                {
                  this.user_info.fotoPortada = respData;
                }
                this.loader.dismiss();
                window.localStorage.setItem("user_info",JSON.stringify(this.user_info))
              }, (err) => {
                console.log(err);
              });

        }
      }, (err) => { });
    }
    catch (e) {
      console.log("fotoerror",e)
    }

*/
  }

}
