import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, NavController} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";
import {RootSettingsService} from "../services/rs.service";

@Component({
  selector: 'app-clientes-archivados',
  templateUrl: './clientes-archivados.page.html',
  styleUrls: ['./clientes-archivados.page.scss'],
})
export class ClientesArchivadosPage implements OnInit {

  constructor(private alertCtrl: AlertController,private http: HTTP,private rs:RootSettingsService,public loadingController: LoadingController,public alertController: AlertController
      ,private navCtrl: NavController) { }

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
  filteredclientes:any=[];
  filteredclientesRenta:any=[];
  filteredclientesVenta:any=[];
  getClientes()
  {
    this.presentLoading();
    console.log("ROOTURL",this.rs.ROOTURL)
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Clientes/getClientes.php",
        {
          "id_usuario":window.localStorage.getItem("id_usuario"),
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
          console.log(data.data)
          this.loader.dismiss();
          this.clientes = JSON.parse(data.data)

          this.filteredclientes = this.clientes.filter(t=>(t.archivado ==1));

          this.filteredclientesRenta=[];
          this.filteredclientesVenta=[];
          this.filteredclientes.forEach((value) => {
            if(value.renta_o_venta == "Renta")
            {
              this.filteredclientesRenta.push(value)
            }
            if(value.renta_o_venta == "Venta")
            {
              this.filteredclientesVenta.push(value)
            }
          });

          //this.filteredclientesVenta= this.clientes.filter(t=>(t.archivado ==1&&t.renta_o_venta=='Venta'));
        })
        .catch(error => {
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
          this.loader.dismiss();
        });


  }

  async desarchivarCliente(id_cliente)
  {
    const alerta = await this.alertCtrl.create({
      header:"¿Deseas desarchivar el cliente?",
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
            this.http.post(this.rs.ROOTURL+"Clientes/desarchivarCliente.php",
                {
                  "id_cliente":id_cliente
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  console.log(data.data)
                  alert("Cliente desarchivado correctamente");
                  this.navCtrl.navigateRoot('/clientes');
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

  async eliminarCliente(id_cliente)
  {
    const alerta = await this.alertCtrl.create({
      header:"¿Deseas eliminar el cliente?",
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
            this.http.post(this.rs.ROOTURL+"Clientes/eliminarCliente.php",
                {
                  "id_cliente":id_cliente
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  console.log(data.data)
                  alert("Cliente eliminado correctamente");
                  this.getClientes()
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
