import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";
import {RootSettingsService} from "../services/rs.service";

@Component({
  selector: 'app-mis-clientes',
  templateUrl: './mis-clientes.page.html',
  styleUrls: ['./mis-clientes.page.scss'],
})
export class MisClientesPage implements OnInit {

  constructor(private alertCtrl: AlertController,private http: HTTP,private rs:RootSettingsService,public loadingController: LoadingController,public alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    this.getClientes()
  }
  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Cargando tu información...',
    });
    await this.loader.present();
  }
  TIME_IN_MS:any = 5000;
  loader:any;
  clientes:any=[]
  getClientes()
  {
    this.presentLoading();
    console.log("ROOTURL",this.rs.ROOTURL)
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Clientes/getClientes.php",
        {

        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
          console.log(data.data)
          this.loader.dismiss();
          this.clientes = JSON.parse(data.data)
        })
        .catch(error => {
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
          this.loader.dismiss();
        });
  }

  editarCliente(cliente)
  {
    window.localStorage.setItem("cliente_a_ver",JSON.stringify(cliente))
  }

  abrirWhatsapp(p) {
    var link = "";

    link = "whatsapp://send?phone=+521"+p.telefono+"&text=Estimad@ "+p.nombre+", ¡Gracias por la confianza! Nos ponemos a trabajar para darte el mejor servicio posible. ¿Cuándo puedes recibirnos para conocer la propiedad y firmar el contrato de intermediación inmobiliaria?";

    window.open(encodeURI(link), '_system');
  }

  async eliminarCliente(cliente)
  {
    const alert = await this.alertController.create({
      header: 'Cuidado!',
      message: 'Vas a eliminar al cliente '+cliente.nombre+', ¿Continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si, Eliminar',
          handler: () => {
            this.presentLoading();
            console.log("ROOTURL",this.rs.ROOTURL)
            this.http.setRequestTimeout(5.0);
            this.http.post(this.rs.ROOTURL+"Clientes/eliminarCliente.php",
                {
                  "id_cliente":cliente.id_cliente,
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  console.log(data.data)
                  this.loader.dismiss();
                  this.clientes = JSON.parse(data.data)
                })
                .catch(error => {
                  console.log(error);
                  console.log(error.status);
                  console.log(error.error); // error message as string
                  console.log(error.headers);
                  this.loader.dismiss();
                });
          }
        }
      ]
    });

    await alert.present();
  }


}
