import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, NavController} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";
import {RootSettingsService} from "../services/rs.service";
@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.page.html',
  styleUrls: ['./propiedades.page.scss'],
})
export class PropiedadesPage implements OnInit {

  constructor(private alertCtrl: AlertController,private http: HTTP,private rs:RootSettingsService,public loadingController: LoadingController,private navCtrl: NavController) { }

  isActive:any = 0;
  ngOnInit() {
  
  }
  cambioTab(){
    console.log(this.isActive)
  }
  
  asignarPropiedadAEditar(propiedad,event)
  {
    event.stopPropagation();
    window.localStorage.setItem("state_propiedad",this.isActive)
    window.localStorage.setItem("propiedad_a_ver",JSON.stringify(propiedad))
    this.navCtrl.navigateRoot('/editar-propiedad');
  }
  verPropiedad(propiedad,event)
  {
    event.stopPropagation();
    window.localStorage.setItem("state_propiedad",this.isActive)
    window.localStorage.setItem("propiedad_a_ver",JSON.stringify(propiedad))
    this.navCtrl.navigateRoot('/detalles-casa');
  }
  ionViewDidEnter()
  {
    if(window.localStorage.getItem("state_propiedad"))
    {
      this.isActive = window.localStorage.getItem("state_propiedad");
    }
    else
    {
      this.isActive=false;
    }
    this.getPropiedades()
  }
  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Cargando tu información...',
    });
    await this.loader.present();
  }
  propiedades:any=[]
  loader:any;
  concretados:any=0;
  por_concretar:any=0;
  filteredpropiedades:any=[];
  filteredpropiedadesRenta:any=[];
  filteredpropiedadesVenta:any=[];
  getPropiedades()
  {
    this.presentLoading();

    var headers = {'Accept' : 'application/x-www-form-urlencoded',
              'Content-Type' : 'application/x-www-form-urlencoded'};
    // this.presentLoading();
    console.log("ROOTURL",this.rs.ROOTURL)
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Propiedades/getPropiedades.php",
        {
          "id_usuario":window.localStorage.getItem("id_usuario"),
        },
        headers)
        .then(data => {
          console.log("Propiedades",data.data)
          this.loader.dismiss();
          this.propiedades = JSON.parse(data.data)
          this.por_concretar=0
          this.concretados=0
          for(let propiedad of this.propiedades) {
            // Do something.
            if(propiedad.eval_e.includes('pago_comision":false'))
            {
              if(propiedad.archivado==0)
              {
                console.log(propiedad)
                this.por_concretar++;
              }
            }
            else {
              this.concretados++;
            }
          }

          //this.filteredpropiedades = this.propiedades.filter(t=>t.archivado ==0);
/*          this.filteredpropiedadesRenta = this.propiedades.filter(t=>(t.archivado ==0&&t.tipo=='Renta'));
          this.filteredpropiedadesVenta= this.propiedades.filter(t=>(t.archivado ==0&&t.tipo=='Venta'));*/
          this.filteredpropiedades = this.propiedades.filter(t=>(t.archivado ==0));

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
         // this.loader.dismiss();
        });
  }

  async archivarPropiedad(propiedad,event)
  {
    event.stopPropagation();
    const alerta = await this.alertCtrl.create({
      header:"¿Deseas archivar la propiedad?",
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
            var headers = {'Accept' : 'application/x-www-form-urlencoded',
            'Content-Type' : 'application/x-www-form-urlencoded'};
            this.http.setRequestTimeout(5.0);
            this.http.post(this.rs.ROOTURL+"Propiedades/archivarPropiedad.php",
                {
                  "id_propiedad":propiedad.id_propiedad
                },
                headers)
                .then(data => {
                  console.log(data.data)
                  alert("Propiedad archivada correctamente");
                  this.navCtrl.navigateRoot('/propiedades');
                  this.getPropiedades()

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
}
