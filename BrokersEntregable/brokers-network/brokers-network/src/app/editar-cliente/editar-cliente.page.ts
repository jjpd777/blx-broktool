import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, NavController} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";
import {RootSettingsService} from "../services/rs.service";
import {Contacts} from "@ionic-native/contacts/ngx";

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.page.html',
  styleUrls: ['./editar-cliente.page.scss'],
})
export class EditarClientePage implements OnInit {

  constructor(private alertCtrl: AlertController,private http: HTTP,private rs:RootSettingsService,private contacts: Contacts,private navCtrl: NavController,public loadingController: LoadingController) { }
    formatCurrency_TaxableValue(event)
    {
        var uy = new Intl.NumberFormat('es-MX',{style: 'currency', currency:'MXN'}).format(event.target.value);
        this.cliente.presupuesto = event.target.value;
        this.cliente.presupuesto_mostrar = uy;
    }
    goBack()
    {
        this.navCtrl.back();
    }
    cliente:any={
        nombre:"",
        telefono:"",
        email:"",
        referencia:"",
        website:""

    }
  ngOnInit() {
  }
    nombre_contacto:any;
    telefono_contacto:any;
    buscarContacto()
    {
        this.telefono_contacto="";
        this.contacts.pickContact().then(contacto=>{
            console.log("Contacto",contacto)

            this.nombre_contacto = contacto.name.givenName + " " + contacto.name.familyName;

            this.cliente.nombre= this.nombre_contacto

            for(let tel of contacto.phoneNumbers) {
                if(tel.type == "mobile")
                {
                    this.telefono_contacto = tel.value
                }
                else {
                    if(tel.type == "home")
                    {
                        this.telefono_contacto = tel.value
                    }
                    else {
                        if(tel.type == "work")
                        {
                            this.telefono_contacto = tel.value
                        }
                    }
                }
            }

            if(this.telefono_contacto == "")
            {
                alert("Este contacto no tiene un teléfono movil asignado.")
            }
            else {
                this.cliente.telefono= this.telefono_contacto
            }
        });
    }

  ionViewDidEnter()
  {
    this.cliente = JSON.parse(window.localStorage.getItem("cliente_a_ver"))
    console.log("cliente",this.cliente)
      this.cliente.fecha_concretar = new Date(this.cliente.fecha_concretar)

      var uy = new Intl.NumberFormat('es-MX',{style: 'currency', currency:'MXN'}).format(this.cliente.presupuesto);
      this.cliente.presupuesto_mostrar = uy;
  }

    async presentLoading() {
        this.loader = await this.loadingController.create({
            message: 'Cargando tu información...',
        });
        await this.loader.present();
    }
    TIME_IN_MS:any = 5000;
    loader:any;
  editarCliente()
  {
      this.presentLoading();
      console.log("ROOTURL",this.rs.ROOTURL)
      console.log("Cliente",this.cliente)
      this.http.setRequestTimeout(5.0);
      this.http.post(this.rs.ROOTURL+"Clientes/editarCliente.php",
          {

              "id_cliente":this.cliente.id_cliente,
              "nombre":this.cliente.nombre,
              "telefono":this.cliente.telefono,
              "email":this.cliente.email,
              "referencia":this.cliente.referencia,
              "website":this.cliente.website,
              "propiedad_busca":this.cliente.propiedad_busca,
              "renta_o_venta":this.cliente.renta_o_venta,
              "zona_busca":this.cliente.zona_busca,
              "recamaras":this.cliente.recamaras,
              "banos":this.cliente.banos,
              "estacionamientos":this.cliente.estacionamientos,
              "m2":this.cliente.m2,
              "fecha_concretar":this.cliente.fecha_concretar,
              "presupuesto":this.cliente.presupuesto,
              "recursos_consisten":this.cliente.recursos_consisten,
              "requisitos_especiales":this.cliente.requisitos_especiales,
              "tipo_propiedad":this.cliente.tipo_propiedad,
          },
          {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
          .then(data => {
              this.loader.dismiss();
              window.localStorage.setItem("cliente_a_ver",JSON.stringify(this.cliente));
              this.goBack()
              console.log(data.data)
          })
          .catch(error => {
              this.loader.dismiss();
              console.log(error);
              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);
          });
  }

}
