import { Component, OnInit } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
import {RootSettingsService} from '../services/rs.service';
import {NavController,AlertController} from "@ionic/angular";
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  constructor(private http: HTTP,private rs:RootSettingsService,private navCtrl: NavController,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  segmentModel = (new Date()).getFullYear()+"";

  segmentChanged(event){
    console.log(this.segmentModel);
    console.log(event);
  }

  metas:any={
    "y_2017":{
      meta:0,
      meta_venta:0,
      renta_o:0,
      venta_o:0
    },
    "y_2018":{
      meta:0,
      meta_venta:0,
      renta_o:0,
      venta_o:0
    },
    "y_2019":{
      meta:0,
      meta_venta:0,
      renta_o:0,
      venta_o:0
    },
    "y_2020":{
        meta:0,
        meta_venta:0,
        renta_o:0,
        venta_o:0
    },
      "y_2021":{
          meta:0,
        meta_venta:0,
        renta_o:0,
          venta_o:0
      },
      "y_2022":{
          meta:0,
        meta_venta:0,
        renta_o:0,
          venta_o:0
      },
      "y_2023":{
          meta:0,
        meta_venta:0,
        renta_o:0,
          venta_o:0
      },
    "y_2024":{
      meta:0,
      meta_venta:0,
      renta_o:0,
      venta_o:0
    },
    "y_2025":{
      meta:0,
      meta_venta:0,
      renta_o:0,
      venta_o:0
    },
    "y_2026":{
      meta:0,
      meta_venta:0,
      renta_o:0,
      venta_o:0
    },
    "y_2027":{
      meta:0,
      meta_venta:0,
      renta_o:0,
      venta_o:0
    },
    "y_2028":{
      meta:0,
      meta_venta:0,
      renta_o:0,
      venta_o:0
    },
    "y_2029":{
      meta:0,
      meta_venta:0,
      renta_o:0,
      venta_o:0
    },
    "y_2030":{
      meta:0,
      meta_venta:0,
      renta_o:0,
      venta_o:0
    }
  }

  metas_arr:any=[]
  portafolio_arr:any={
    "2030Renta":0,
    "2030Venta":0,
    "2029Renta":0,
    "2029Venta":0,
    "2028Renta":0,
    "2028Venta":0,
    "2027Renta":0,
    "2027Venta":0,
    "2026Renta":0,
    "2026Venta":0,
    "2025Renta":0,
    "2025Venta":0,
    "2024Renta":0,
    "2024Venta":0,

    "2023Renta":0,
    "2023Venta":0,
    "2022Renta":0,
    "2022Venta":0,
    "2021Renta":0,
    "2021Venta":0,
    "2020Renta":0,
    "2020Venta":0,

    "2019Renta":0,
    "2019Venta":0,
    "2018Renta":0,
    "2018Venta":0,
    "2017Renta":0,
    "2017Venta":0,
  }
  ionViewDidEnter()
  {
    this.getMetas();
    this.getPortafolio()

  }

  getMetas()
  {
    console.log("ROOTURL",this.rs.ROOTURL)
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Metas/getMetasUsuario.php",
        {
          "id_usuario":window.localStorage.getItem("id_usuario"),
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
          let json = JSON.parse(data.data);
          this.metas_arr = json;
          for(let i = 0; i < json.length; i++) {
            if(json[i].year==2017)
            {
              this.metas.y_2017.meta = json[i].meta;
              this.metas.y_2017.meta_venta = json[i].meta_venta;
              this.metas.y_2017.renta_o= json[i].renta_ocacional;
              this.metas.y_2017.venta_o= json[i].venta_ocacional;
            }
            if(json[i].year==2018)
            {
              this.metas.y_2018.meta = json[i].meta;
              this.metas.y_2018.meta_venta = json[i].meta_venta;
              this.metas.y_2018.renta_o= json[i].renta_ocacional;
              this.metas.y_2018.venta_o= json[i].venta_ocacional;
            }
            if(json[i].year==2019)
            {
              this.metas.y_2019.meta = json[i].meta;
              this.metas.y_2019.meta_venta = json[i].meta_venta;
              this.metas.y_2019.renta_o= json[i].renta_ocacional;
              this.metas.y_2019.venta_o= json[i].venta_ocacional;
            }
            if(json[i].year==2020)
            {
              this.metas.y_2020.meta = json[i].meta;
              this.metas.y_2020.meta_venta = json[i].meta_venta;
                this.metas.y_2020.renta_o= json[i].renta_ocacional;
                this.metas.y_2020.venta_o= json[i].venta_ocacional;
            }
            if(json[i].year==2021)
            {
              this.metas.y_2021.meta = json[i].meta;
              this.metas.y_2021.meta_venta = json[i].meta_venta;
                this.metas.y_2021.renta_o= json[i].renta_ocacional;
                this.metas.y_2021.venta_o= json[i].venta_ocacional;
            }
            if(json[i].year==2022)
            {
              this.metas.y_2022.meta = json[i].meta;
              this.metas.y_2022.meta_venta = json[i].meta_venta;
                this.metas.y_2022.renta_o= json[i].renta_ocacional;
                this.metas.y_2022.venta_o= json[i].venta_ocacional;
            }
            if(json[i].year==2023)
            {
              this.metas.y_2023.meta= json[i].meta;
              this.metas.y_2023.meta_venta = json[i].meta_venta;
                this.metas.y_2023.renta_o= json[i].renta_ocacional;
                this.metas.y_2023.venta_o= json[i].venta_ocacional;
            }

            if(json[i].year==2024)
            {
              this.metas.y_2024.meta = json[i].meta;
              this.metas.y_2024.meta_venta = json[i].meta_venta;
              this.metas.y_2024.renta_o= json[i].renta_ocacional;
              this.metas.y_2024.venta_o= json[i].venta_ocacional;
            }
            if(json[i].year==2025)
            {
              this.metas.y_2025.meta = json[i].meta;
              this.metas.y_2025.meta_venta = json[i].meta_venta;
              this.metas.y_2025.renta_o= json[i].renta_ocacional;
              this.metas.y_2025.venta_o= json[i].venta_ocacional;
            }
            if(json[i].year==2026)
            {
              this.metas.y_2026.meta = json[i].meta;
              this.metas.y_2026.meta_venta = json[i].meta_venta;
              this.metas.y_2026.renta_o= json[i].renta_ocacional;
              this.metas.y_2026.venta_o= json[i].venta_ocacional;
            }
            if(json[i].year==2027)
            {
              this.metas.y_2027.meta= json[i].meta;
              this.metas.y_2027.meta_venta = json[i].meta_venta;
              this.metas.y_2027.renta_o= json[i].renta_ocacional;
              this.metas.y_2027.venta_o= json[i].venta_ocacional;
            }

            if(json[i].year==2028)
            {
              this.metas.y_2028.meta = json[i].meta;
              this.metas.y_2028.meta_venta = json[i].meta_venta;
              this.metas.y_2028.renta_o= json[i].renta_ocacional;
              this.metas.y_2028.venta_o= json[i].venta_ocacional;
            }
            if(json[i].year==2029)
            {
              this.metas.y_2029.meta = json[i].meta;
              this.metas.y_2029.meta_venta = json[i].meta_venta;
              this.metas.y_2029.renta_o= json[i].renta_ocacional;
              this.metas.y_2029.venta_o= json[i].venta_ocacional;
            }
            if(json[i].year==2030)
            {
              this.metas.y_2030.meta = json[i].meta;
              this.metas.y_2030.meta_venta = json[i].meta_venta;
              this.metas.y_2030.renta_o= json[i].renta_ocacional;
              this.metas.y_2030.venta_o= json[i].venta_ocacional;
            }
          }
          console.log(json)
          console.log(this.metas)
          //this.loader.dismiss();
          //this.ref.detectChanges();
        })
        .catch(error => {
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
        });
  }
  getPortafolio()
  {
    console.log("ROOTURL",this.rs.ROOTURL)
    this.http.setRequestTimeout(5.0);
    this.http.post(this.rs.ROOTURL+"Portafolio/getPortafolio.php",
        {
          "id_usuario":window.localStorage.getItem("id_usuario"),
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
          let json = JSON.parse(data.data);
          this.portafolio_arr = json;
          console.log(this.portafolio_arr)
        })
        .catch(error => {
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
        });
  }

  async editarMeta(t_meta,metaActual,year, renta_o_venta)
  {
    const alert = await this.alertCtrl.create({
      header:"Editar Meta de "+renta_o_venta+ " de "+year,
      inputs: [
        {
          name: 'meta',
          placeholder: 'Monto de la meta',
          value:metaActual
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            var id_meta = -1
            for(let i = 0; i < this.metas_arr.length; i++) {
              if(this.metas_arr[i].year==year)
              {
                id_meta = this.metas_arr[i].id_meta;
              }
            }

            console.log("ROOTURL",this.rs.ROOTURL)
            this.http.setRequestTimeout(5.0);
            this.http.post(this.rs.ROOTURL+"Metas/editarMeta.php",
                {
                  "t_meta":t_meta,
                  "id_meta":id_meta,
                  "meta":data.meta,
                  "year":year,
                  "id_usuario":window.localStorage.getItem("id_usuario"),
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  console.log("data",data)
                  this.getMetas()
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

    await alert.present();
/*
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'meta',
          placeholder: 'Monto de la meta',
          value:metaActual
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            console.log(data.meta)
          }
        }
      ]
    });
    alert.present();*/
  }
  async agregarMeta(year)
  {
    const alert = await this.alertCtrl.create({
      header:"Agregar Meta del Año",
      inputs: [
        {
          name: 'meta',
          placeholder: 'Monto de la meta',
          value:0
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Agregar',
          handler: data => {
            console.log("ROOTURL",this.rs.ROOTURL)
            this.http.setRequestTimeout(5.0);
            this.http.post(this.rs.ROOTURL+"Metas/agregarMeta.php",
                {
                  "meta":data.meta,
                  "year":year,
                  "id_usuario":window.localStorage.getItem("id_usuario")
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  console.log(data.data)
                  this.getMetas()
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

    await alert.present();
    /*
        let alert = this.alertCtrl.create({
          inputs: [
            {
              name: 'meta',
              placeholder: 'Monto de la meta',
              value:metaActual
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Login',
              handler: data => {
                console.log(data.meta)
              }
            }
          ]
        });
        alert.present();*/
  }

  async agregarRenta(year)
  {
    const alert = await this.alertCtrl.create({
      header:"Agregar Renta Adicional. Para disminuir ingresa la cantidad con signo - al inicio.",
      inputs: [
        {
          name: 'monto',
          placeholder: 'Monto',
          value:0
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Agregar',
          handler: data => {
            console.log("ROOTURL",this.rs.ROOTURL)
              console.log("data.monto",data.monto)
              console.log("id_usuario",window.localStorage.getItem("id_usuario"))
            this.http.setRequestTimeout(5.0);
            this.http.post(this.rs.ROOTURL+"Metas/agregarRentaAdicional.php",
                {
                  "monto":data.monto/1,
                  "year":year,
                  "id_usuario":window.localStorage.getItem("id_usuario")
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  console.log(data.data)
                  this.getMetas()
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

    await alert.present();
  }
  async agregarVenta(year)
  {
    const alert = await this.alertCtrl.create({
      header:"Agregar Venta Adicional. Para disminuir ingresa la cantidad con signo - al inicio.",
      inputs: [
        {
          name: 'monto',
          placeholder: 'Monto',
          value:0
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Agregar',
          handler: data => {
            console.log("ROOTURL",this.rs.ROOTURL)
            this.http.setRequestTimeout(5.0);
            this.http.post(this.rs.ROOTURL+"Metas/agregarVentaAdicional.php",
                {
                  "monto":data.monto,
                    "year":year,
                    "id_usuario":window.localStorage.getItem("id_usuario")
                },
                {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
                .then(data => {
                  console.log(data.data)
                  this.getMetas()
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

    await alert.present();
  }
}
