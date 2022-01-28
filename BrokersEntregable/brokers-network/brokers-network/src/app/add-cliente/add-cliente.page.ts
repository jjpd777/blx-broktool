import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";
import {RootSettingsService} from "../services/rs.service";
import {Contacts} from "@ionic-native/contacts/ngx";

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  constructor(private alertCtrl: AlertController,private http: HTTP,private rs:RootSettingsService,private contacts: Contacts) { }

  newCliente:any={
    nombre:"",
    telefono:"",
    email:"",
    referencia:"",
    website:"",
    propiedad_busca:"",
    renta_o_venta:"Renta",
    zona_busca:"",
    recamaras:"",
    banos:"",
    estacionamientos:"",
    m2:"",
    fecha_concretar:"",
    presupuesto:"",
    recursos_consisten:"",
    requisitos_especiales:"",
    tipo_propiedad:"Casa",
  }

  formatCurrency_TaxableValue(event)
  {
    var uy = new Intl.NumberFormat('es-MX',{style: 'currency', currency:'MXN'}).format(event.target.value);
    this.newCliente.presupuesto = event.target.value;
    this.newCliente.presupuesto_mostrar = uy;
  }

  ngOnInit() {
    var uy = new Intl.NumberFormat('es-MX',{style: 'currency', currency:'MXN'}).format(0);
    this.newCliente.presupuesto_mostrar = uy;
  }
  nombre_contacto:any;
  telefono_contacto:any;
  buscarContacto()
  {
    this.telefono_contacto="";
    this.contacts.pickContact().then(contacto=>{
      console.log("Contacto",contacto)

      this.nombre_contacto = contacto.name.givenName + " " + contacto.name.familyName;

      this.newCliente.nombre= this.nombre_contacto

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

      if(this.telefono_contacto == "")
      {
        alert("Este contacto no tiene un teléfono movil asignado.")
      }
      else {
        this.newCliente.telefono= this.telefono_contacto
      }
    });
  }

  agregarCliente()
  {
    console.log("ROOTURL",this.rs.ROOTURL)
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Clientes/agregarCliente.php",
        {
            "id_usuario":window.localStorage.getItem("id_usuario"),
          "nombre":this.newCliente.nombre,
          "telefono":this.newCliente.telefono,
          "email":this.newCliente.email,
          "referencia":this.newCliente.referencia,
          "website":this.newCliente.website,
            "propiedad_busca":this.newCliente.propiedad_busca,
            "renta_o_venta":this.newCliente.renta_o_venta,
            "zona_busca":this.newCliente.zona_busca,
            "recamaras":this.newCliente.recamaras,
            "banos":this.newCliente.banos,
            "estacionamientos":this.newCliente.estacionamientos,
            "m2":this.newCliente.m2,
            "fecha_concretar":this.newCliente.fecha_concretar,
            "presupuesto":this.newCliente.presupuesto,
            "recursos_consisten":this.newCliente.recursos_consisten,
            "requisitos_especiales":this.newCliente.requisitos_especiales,
          "tipo_propiedad":this.newCliente.tipo_propiedad
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
          console.log(data.data)
        })
        .catch(error => {
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
        });
  }

}
