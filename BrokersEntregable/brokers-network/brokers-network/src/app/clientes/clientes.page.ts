import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, NavController} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";
import {RootSettingsService} from "../services/rs.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  user_info:any;

  constructor(private alertCtrl: AlertController,private http: HTTP,private rs:RootSettingsService,public loadingController: LoadingController,public alertController: AlertController
      ,private navCtrl: NavController) { }
  irCliente(cliente)
  {
    window.localStorage.setItem("cliente_a_ver",JSON.stringify(cliente))
    this.navCtrl.navigateRoot('/detalles-cliente');
  }
  editarCliente(cliente,event)
  {
    event.stopPropagation();
    window.localStorage.setItem("cliente_a_ver",JSON.stringify(cliente))
    this.navCtrl.navigateRoot('/editar-cliente');
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
  ngOnInit() {
  }
  ionViewDidEnter()
  {
    this.user_info =  JSON.parse(window.localStorage.getItem("user_info"))
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
          "id_usuario":window.localStorage.getItem("id_usuario")
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
          console.log(data.data)
          this.loader.dismiss();
          this.clientes = JSON.parse(data.data)

          //this.filteredclientes = this.clientes.filter(t=>t.archivado ==0);
          /*this.filteredclientesRenta = this.clientes.filter(t=>(t.archivado ==1&&t.renta_o_venta=='Renta'));
          this.filteredclientesVenta= this.clientes.filter(t=>(t.archivado ==1&&t.renta_o_venta=='Venta'));*/
          this.filteredclientes = this.clientes.filter(t=>(t.archivado ==0));

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
        })
        .catch(error => {
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
          this.loader.dismiss();
        });


  }

  openWhatsapp(telefono_contacto,nombre_contacto,event)
  {
    event.stopPropagation();
    var link = "";
    if(telefono_contacto[0]!="+")
    {
      telefono_contacto = "+52"+telefono_contacto;
    }
    link = "whatsapp://send?phone="+telefono_contacto+"&text=Estimad@ "+nombre_contacto+", ¡Gracias por la confianza! ";

    window.open(encodeURI(link), '_system');
  }


  openTelefono(telefono_contacto,event)
  {
    event.stopPropagation();
    var link = "";

    link = "tel:"+telefono_contacto;

    window.open(encodeURI(link), '_system');
  }
  openMail(mail,event)
  {
    event.stopPropagation();
    var link = "";

    link = "mailto:"+mail;

    window.open(encodeURI(link), '_system');
  }

  async archivarCliente(cliente,event)
  {
    event.stopPropagation();
    const alerta = await this.alertCtrl.create({
      header:"¿Deseas archivar el cliente?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si, archivar',
          handler: data => {
            console.log("ROOTURL",this.rs.ROOTURL)
            this.http.setRequestTimeout(5.0);
            this.http.post(this.rs.ROOTURL+"Clientes/archivarCliente.php",
                {
                  "id_cliente":cliente.id_cliente
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  console.log(data.data)
                  alert("Cliente archivado correctamente");
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
