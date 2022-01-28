import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, NavController} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";
import {RootSettingsService} from "../services/rs.service";
import {Contacts} from "@ionic-native/contacts/ngx";

@Component({
  selector: 'app-editar-propiedad',
  templateUrl: './editar-propiedad.page.html',
  styleUrls: ['./editar-propiedad.page.scss'],
})
export class EditarPropiedadPage implements OnInit {

  constructor(private alertCtrl: AlertController,private http: HTTP,private rs:RootSettingsService,private contacts: Contacts,private navCtrl: NavController,public loadingController: LoadingController) { }
    telefono_contacto:any;
    nombre_contacto:any;
    buscarContacto()
    {
        this.telefono_contacto="";
        this.contacts.pickContact().then(contacto=>{
            console.log("Contacto",contacto)

            this.nombre_contacto = contacto.name.givenName + " " + contacto.name.familyName;

            this.propiedad.nombre= this.nombre_contacto

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
                this.propiedad.celular= this.telefono_contacto
            }


        });
    }
    propiedad:any={
        nombre:"",
        telefono:"",
        email:"",
        notas:"",

    }
  ngOnInit() {
  }

    formatCurrency_TaxableValue(event)
    {
        var uy = new Intl.NumberFormat('es-MX',{style: 'currency', currency:'MXN'}).format(event.target.value);
        this.propiedad.precio = event.target.value;
        this.propiedad.precio_mostrar = uy;
    }

  ionViewDidEnter()
  {
    this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"))
      var uy = new Intl.NumberFormat('es-MX',{style: 'currency', currency:'MXN'}).format(this.propiedad.precio);
      this.propiedad.precio_mostrar = uy;
    console.log("propiedad",this.propiedad)

  }
    async presentLoading() {
        this.loader = await this.loadingController.create({
            message: 'Cargando tu información...',
        });
        await this.loader.present();
    }
    TIME_IN_MS:any = 5000;
    loader:any;
  editarPropiedad()
  {
      this.presentLoading();
      console.log("ROOTURL",this.rs.ROOTURL)
      this.http.setRequestTimeout(5.0);
      this.http.post(this.rs.ROOTURL+"Propiedades/editarPropiedad.php",
          {

              "id_propiedad":this.propiedad.id_propiedad,
              "nombre":this.propiedad.nombre,
              "celuar":this.propiedad.celular,
              "email":this.propiedad.email,
              "tipo":this.propiedad.tipo,
              "precio":this.propiedad.precio,
              "direccion":this.propiedad.direccion,
              "referencia":this.propiedad.referencia,
              "link":this.propiedad.link,
              "notas":this.propiedad.notas,
              "tipo_propiedad":this.propiedad.tipo_propiedad
          },
          {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
          .then(data => {
              this.loader.dismiss();
              console.log(data.data)
              window.localStorage.setItem("propiedad_a_ver",JSON.stringify(this.propiedad))
              this.goBack()
          })
          .catch(error => {
              this.loader.dismiss();
              console.log(error);
              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);
          });
  }

    goBack()
    {
        this.navCtrl.back();
    }

}
