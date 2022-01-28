import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";
import {RootSettingsService} from "../services/rs.service";
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';


@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.page.html',
  styleUrls: ['./whatsapp.page.scss'],
})
export class WhatsappPage implements OnInit {

  constructor(private navCtrl: NavController,private http: HTTP,public loadingController: LoadingController,private rs:RootSettingsService,private contacts: Contacts) { }

  ngOnInit() {
  }

  whatsappAVer:any;
  mensajeAVer:any;
  propiedadWhatsapp:any;

  nombre_contacto:any;
  telefono_contacto:any;

  cliente:any;
  propiedad:any;
  ionViewDidEnter()
  {
    this.whatsappAVer = window.localStorage.getItem("whatsappAVer")
    this.mensajeAVer = window.localStorage.getItem("mensajeAVer")
    this.propiedadWhatsapp = JSON.parse(window.localStorage.getItem("propiedad_a_ver"))

    var whatscliente = window.localStorage.getItem("whatscliente")
    var whatspropiedad = window.localStorage.getItem("whatspropiedad")

    if(whatscliente=="si")
    {
      this.cliente = JSON.parse(window.localStorage.getItem("cliente_a_ver"))
      this.nombre_contacto = this.cliente.nombre;
      this.telefono_contacto = this.cliente.telefono;

      this.mensaje.contacto = ""+this.nombre_contacto+" - "+this.telefono_contacto;

    }
    if(whatspropiedad=="si")
    {
      this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"))

      this.nombre_contacto = this.propiedad.nombre;
      this.telefono_contacto = this.propiedad.celular;

      this.mensaje.contacto = ""+this.nombre_contacto+" - "+this.telefono_contacto;

    }

    console.log("whatscliente",whatscliente)
    console.log("whatspropiedad",whatspropiedad)




    if(this.whatsappAVer =="Citas")
    {
      console.log("this.propiedadWhatsapp",this.propiedadWhatsapp)
      this.mensaje.texto ="Datos de la Propiedad: Nombre:"+this.propiedadWhatsapp.nombre+" - Tipo:"+this.propiedadWhatsapp.tipo+" - Precio:$"+this.propiedadWhatsapp.precio+" - Notas:"+this.propiedadWhatsapp.notas;
    }
    else {
      this.mensaje.texto =this.mensajeAVer;
    }



    console.log("this.whatsappAVer",this.whatsappAVer)
  }

  mensaje:any={
    texto:"",
    contacto:""
  }

  buscarContacto()
  {
    this.telefono_contacto="";
    this.contacts.pickContact().then(contacto=>{
      console.log("Contacto",contacto)

      this.nombre_contacto = contacto.name.givenName + " " + contacto.name.familyName;


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
            else {
              this.telefono_contacto = tel.value
            }
          }
        }
      }
      if(this.telefono_contacto == "" && contacto.phoneNumbers.length>0)
      {
        this.telefono_contacto = contacto.phoneNumbers[0].value;
      }

      console.log("this.telefono_contacto",this.telefono_contacto)

      if(this.telefono_contacto == "")
      {
        alert("Este contacto no tiene un teléfono movil asignado.")
      }
      else {
        this.mensaje.contacto = ""+this.nombre_contacto+" - "+this.telefono_contacto;
      }

    });
  }

  goBack()
  {
    this.navCtrl.pop();
  }

  enviarWhatsapp()
  {
    var link = "";

    if(this.telefono_contacto[0]!="+")
    {
      this.telefono_contacto = "+52"+this.telefono_contacto;
    }
    link = "whatsapp://send?phone="+this.telefono_contacto+"&text=Estimad@ "+this.nombre_contacto+", ¡Gracias por la confianza! "+this.mensaje.texto;

    window.open(encodeURI(link), '_system');
  }

}
