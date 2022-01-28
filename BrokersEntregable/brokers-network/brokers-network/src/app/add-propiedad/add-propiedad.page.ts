import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";
import {HTTP} from '@ionic-native/http/ngx';
import {RootSettingsService} from "../services/rs.service";
import {Contacts} from "@ionic-native/contacts/ngx";
@Component({
  selector: 'app-add-propiedad',
  templateUrl: './add-propiedad.page.html',
  styleUrls: ['./add-propiedad.page.scss'],
})
export class AddPropiedadPage implements OnInit {

  constructor(private alertCtrl: AlertController,private http: HTTP,private rs:RootSettingsService,private contacts: Contacts) { }

  ngOnInit() {
  }
    telefono_contacto:any;
    nombre_contacto:any;
    formatCurrency_TaxableValue(event)
    {
        var uy = new Intl.NumberFormat('es-MX',{style: 'currency', currency:'MXN'}).format(event.target.value);
        this.newPropiedad.precio = event.target.value;
        this.newPropiedad.precio_mostrar = uy;
    }

    buscarContacto()
    {
        this.telefono_contacto="";
        this.contacts.pickContact().then(contacto=>{
            console.log("Contacto",contacto)

            this.nombre_contacto = contacto.name.givenName + " " + contacto.name.familyName;

            this.newPropiedad.nombrePropietario= this.nombre_contacto

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
                this.newPropiedad.celular= this.telefono_contacto
            }
        });
    }

  newPropiedad:any={
    nombrePropietario:"",
    celular:"",
    email:"",
    referencia:"",
    direccionPropietario:"",
    tipoOperacion:"Renta",
      tipo_propiedad:"Casa",
    notas:"",

  }

  agregarPropiedad()
  {
    console.log("ROOTURL",this.rs.ROOTURL)
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Propiedades/agregarPropiedad.php",
        {
          "nombrePropietario":this.newPropiedad.nombrePropietario,
          "id_usuario":window.localStorage.getItem("id_usuario"),
          "celular":this.newPropiedad.celular,
          "email":this.newPropiedad.email,
            "precio":this.newPropiedad.precio,
          "referencia":this.newPropiedad.referencia,
          "direccionPropietario":this.newPropiedad.direccionPropietario,
          "tipoOperacion":this.newPropiedad.tipoOperacion,
            "link":this.newPropiedad.link,
          "notas":this.newPropiedad.notas,
            "tipo_propiedad":this.newPropiedad.tipo_propiedad
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
