import { Component, OnInit } from '@angular/core';
import {LoadingController, MenuController, NavController} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";
import {RootSettingsService} from "../services/rs.service";
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(private navCtrl: NavController,private http: HTTP,public loadingController: LoadingController,
              private rs:RootSettingsService,private emailComposer: EmailComposer) { }

  formularioAVer:any;
  tipoFormularioAVer:any;
  cliente:any;
  propiedad:any;

  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Actualizando...',
    });
    await this.loader.present();
  }
  TIME_IN_MS:any = 10000;
  loader:any;
  showLoader()
  {
    this.presentLoading();
  }
  ngOnInit() {
  }
  user_info:any;
  //Formularios Propiedad
  formulario_conseguir_propiedad:any={
    que_vende:"",
    preferencias_comprador:"",
    prioridad:{
      recamaras:"",
      estudio:"",
      banos_completos:"",
      medios_banos:"",
      estacionamientos:"",
      pisos:"",
      numero_casas:""
    },
    fechaLimite:new Date(),
    valor_propiedad:{
      precio_definido:false,
      avaluo:false,
      asesoria:false,
      precio_estimado:false,
      precio:"",
    },
    detalles:{
      ubicacion:"",
      orientacion:"",
      luz_interior:"",
      conservacion:"",
      acabados:"",
      vigilancia:"",
    },
    detalles_aprox:{
      m2_construccion:"",
      m2_terreno:"",
      m2_jardin:"",
      m2_terraza:"",
      uso_suelo:"",
      edad:"",
      costo_mantenimiento:"",
      costo_vigilancia:"",
      numero_casas:""
    },
    proceso:{
      otros_corredores:"",
      lleva_relacion:"",
      ha_decidido_comprar:"",
      experiencia:""
    },
    eleccion_agente:{
      compartir_comision:"",
      firmar_contrato:"",
      agendar_citas:"",
      dejaria_llave:""
    },
    mis_datos:{
      nombre:"",
      telefono:"",
      email:"",
      direccion:"",
      referencia:""
    },
  }
  formulario_documentacion_venta:any={
    datos_propietario: {
      correo: "",
    },
    mex_o_ext:{
      tipo:"",
      identificacion:false,
      rfc:false,
      curp:false,
      acta_matrimonio:false,
      fm3:false,
      carta_naturalizacion:false
    },
    moral:{
      acta_constitutiva:false,
      rfc:false,
      poder_representante:false,
      indentificacion:false,
      domicilio:false,
    },
    tipo_persona:"",
    tipo_propiedad:{
      tipo:"",
      inmueble:{
        escritura:false,
        predial:false,
        agua:false
      },
      edificio:{
        licencia:false,
        aviso_terminacion:false,
        alineamiento_num_oficial:false
      },
      departamento_casa:{
        regimen_propiedad:false,
        reglamento:false,
        mantenimiento:false,
        uso_suelo:false,
      }
    },
    hipoteca:{
      tiene:"",
      escritura:false,
      recibo_pagado:false,
      recibo_mantenimineto:false,
      estado_cuenta:false,
      carta_liberacion:false,
    },
    herencia:{
      tiene:"",
      carta_aceptacion:false,
      carta_notario:false,
      escritura_adjudicacion:false,
      carta_notario_proceso:false,
      propietario_fallecio:false,
    },
    disposicion:""
  }

  formulario_documentacion_renta:any={
    datos_propietario:{
      correo:"",
      celular:"",
      direccion:"",
      nombre:"",
      tipo:{
        persona_fisica:false,
        persona_moral:false,
        copropiedad:false
      }
    }
  }
  formulario_contrato_renta:any={
    familia:{
      adultos:"",
      hombres_no_adultos:"",
      mujeres_no_adultas:"",
      servicio:"",
      mascotas:""
    },
    que_busca:{
      departamento:"",
      casa:"",
      casa_condominio:"",
      oficina:"",
      bodega:""
    },
    fechaOperacion:new Date(),
    aval:"",
    zona:"",
    presupuesto:{
      amueblada:false,
      mantenimiento:false,
      servicios:false,
      aparte_mantenimiento:false,
      aparte_servicios:false,
      tope:""
    },
    espacios:{
      recamaras:"",
      banos:"",
      estacionamientos:""
    },
    preferencias:{
      orientacion:"",
      luz_interior: "",
      calle_cerrada:"",
      decoracion:"",
    },
    busqueda:{
      amenities:"",
      edificios_altos:"",
      otros_corredores:"",
      visitado_propiedades:"",
      experiencia_positiva:""
    },
    horarios:"",
    mis_datos:{
      nombre:"",
      telefono:"",
      email:"",
      referencia:""
    },
  }
  //Formularios Cliente
  formulario_conseguir_cliente:any={
    proceso:{
      otros_corredores:"",
      lleva_relacion:"",
      iniciado_busqueda:"",
    },
    presupuesto:"",
    especificacion_especial:"",
    aval:"",
    zonas:"",
    fechaOperacion:new Date(),
    datos:{
      nombre:"",
      celular:"",
      email:"",
    },
    espacios:{
      recamaras:"",
      banos:"",
      estacionamientos:""
    },
    dimensiones:{
      departamento:"",
      casa:"",
      casa_condominio:"",
      terreno:"",
      oficina:"",
      bodega:""
    },
  }
  //Formulario Ambos
  formulario_informe_visita:any={
    propiedad_visitada:{
      calle:"",
      colonia:"",
      ciudad:"",
      estado:"",
      asesor:""
    },
    fechaVistia:new Date(),
    gustos:{
      ubicacion:false,
      conservacion:false,
      distribucion:false,
      acabados:false,
      espacios:false,
      estilo:false,
      precio:false,
      otro:false
    },
    oportunidad:{
      no_convencio:"",
      falta_area:"",
      calificacion:"",
      visitar_nuevo:"",
      comentario:""
    },
    servicio:{
      atencion:"",
      puntualidad:"",
      informacion:"",
      profesionalismo:""
    },
    mis_datos:{
      nombre:"",
      telefono:"",
      email:"",
      referencia:""
    },
    proceso:{
      otros_corredores:"",
      lleva_relacion:"",
      ha_decidido_comprar:"",
      experiencia:""
    }
  }

  venta_renta:any;

  ionViewDidEnter()
  {
    this.venta_renta = window.localStorage.getItem("venta_renta")
    this.formularioAVer = window.localStorage.getItem("formularioAVer")
    this.tipoFormularioAVer = window.localStorage.getItem("tipoFormularioAVer")

    if(this.tipoFormularioAVer == "Cliente")
    {
      if(window.localStorage.getItem("cliente_a_ver"))
        this.cliente = JSON.parse(window.localStorage.getItem("cliente_a_ver"))

      try {
        if(this.cliente.formulario_conseguir_cliente!='')
          this.formulario_conseguir_cliente = JSON.parse(this.cliente.formulario_conseguir_cliente);
      }
      catch (e) {
        console.log("JSONPARSERRORFORM",e)
        console.log(this.formulario_conseguir_cliente)
      }
      try {
        if(this.cliente.formulario_informe_visita!='')
          this.formulario_informe_visita = JSON.parse(this.cliente.formulario_informe_visita);
      }
      catch (e) {
        console.log("JSONPARSERRORFORM",e)
        console.log(this.formulario_informe_visita)
      }
    }
    if(this.tipoFormularioAVer == "Propiedad")
    {
      if(window.localStorage.getItem("propiedad_a_ver"))
        this.propiedad = JSON.parse(window.localStorage.getItem("propiedad_a_ver"))

      this.formulario_informe_visita.propiedad_visitada.calle = this.propiedad.direccion

      this.user_info =  JSON.parse(window.localStorage.getItem("user_info"))
      console.log(this.user_info)


      this.formulario_informe_visita.propiedad_visitada.asesor = this.user_info.nombreApellido
/*      try {
        if(this.propiedad.formulario_conseguir_propiedad!='')
          this.formulario_conseguir_propiedad = JSON.parse(this.propiedad.formulario_conseguir_propiedad);
      }
      catch (e) {
        console.log("JSONPARSERRORFORM",e)
        console.log(this.formulario_conseguir_propiedad)
      }
      try {
        if(this.propiedad.formulario_documentacion_renta!='')
          this.formulario_documentacion_renta = JSON.parse(this.propiedad.formulario_documentacion_renta);
      }
      catch (e) {
        console.log("JSONPARSERRORFORM",e)
        console.log(this.formulario_documentacion_renta)
      }
      try {
        if(this.propiedad.formulario_documentacion_venta!='')
          this.formulario_documentacion_venta = JSON.parse(this.propiedad.formulario_documentacion_venta);
      }
      catch (e) {
        console.log("JSONPARSERRORFORM",e)
        console.log(this.formulario_documentacion_renta)
      }
      try {
      /!*  if(this.propiedad.formulario_informe_visita!='')
        {
          this.formulario_informe_visita = JSON.parse(this.propiedad.formulario_informe_visita);
        }*!/


      }
      catch (e) {
        console.log("JSONPARSERRORFORM",e)
        console.log(this.formulario_informe_visita)
      }
      try {
        if(this.propiedad.formulario_contrato_renta!='')
          this.formulario_contrato_renta = JSON.parse(this.propiedad.formulario_contrato_renta);
      }
      catch (e) {
        console.log("JSONPARSERRORFORM",e)
        console.log(this.formulario_contrato_renta)
      }*/
    }

    console.log("this.formularioAVer",this.formularioAVer)
  }

  guardarFormulario()
  {
    this.showLoader();
    var tipo = "formulario_";
    var formulario;
    var formulario_php;
    var id;

    if(this.tipoFormularioAVer == "Cliente")
    {
      id=this.cliente.id_cliente;
      formulario_php = "Clientes";
    }
    if(this.tipoFormularioAVer == "Propiedad")
    {
      id=this.propiedad.id_propiedad;
      formulario_php = "Propiedades";
    }

    if(this.formularioAVer=="Conseguir el Cliente")
    {
      formulario = JSON.stringify(this.formulario_conseguir_cliente);
      tipo = tipo+"conseguir_cliente";
    }

    if(this.formularioAVer=="Informe de Visita")
    {
      formulario = JSON.stringify(this.formulario_informe_visita);
      tipo = tipo+"informe_visita";
    }

    if(this.formularioAVer=="Conseguir la Propiedad")
    {
      formulario = JSON.stringify(this.formulario_conseguir_propiedad);
      tipo = tipo+"conseguir_propiedad";
    }
    if(this.formularioAVer=="Documentación para Renta")
    {
      formulario = JSON.stringify(this.formulario_documentacion_renta);
      tipo = tipo+"documentacion_renta";
    }
    if(this.formularioAVer=="Documentación para Venta")
    {
      formulario = JSON.stringify(this.formulario_documentacion_venta);
      tipo = tipo+"documentacion_venta";
    }
    if(this.formularioAVer=="Contrato para Renta")
    {
      formulario = JSON.stringify(this.formulario_contrato_renta);
      tipo = tipo+"contrato_renta";
    }
    this.http.setRequestTimeout(5.0);
/*    console.log("formulario",formulario)
    console.log("tipo",tipo)
    console.log("id",id)*/
    this.http.post(this.rs.ROOTURL+formulario_php+"/updateFormulario.php",
        {
          "formulario":formulario,
          "tipo":tipo,
          "id":id
        },
        {'Accept' : 'application/x-www-form-urlencoded','Content-Type' : 'application/x-www-form-urlencoded'})
        .then(data => {
          this.loader.dismiss();
          console.log(data.data)
          if(this.formularioAVer=="Informe de Visita")
          {
            if(this.tipoFormularioAVer == "Cliente")
            {
              this.cliente.formulario_informe_visita = this.formulario_informe_visita;
            }
            if(this.tipoFormularioAVer == "Propiedad")
            {
              this.propiedad.formulario_informe_visita = this.formulario_informe_visita;
            }
          }
          if(this.formularioAVer=="Conseguir el Cliente")
          {
            this.cliente.formulario_conseguir_cliente = this.formulario_conseguir_cliente;
          }
          if(this.formularioAVer=="Conseguir la Propiedad")
          {
            this.propiedad.formulario_conseguir_propiedad = this.formulario_conseguir_propiedad;
          }
          if(this.formularioAVer=="Documentación para Renta")
          {
            this.propiedad.formulario_documentacion_venta = this.formulario_documentacion_venta;
          }
          if(this.formularioAVer=="Documentación para Renta")
          {
            this.propiedad.formulario_documentacion_venta = this.formulario_documentacion_venta;
          }
          if(this.formularioAVer=="Contrato para Renta")
          {
            this.propiedad.formulario_contrato_renta = this.formulario_contrato_renta;
          }

          if(this.tipoFormularioAVer == "Cliente")
          {
            window.localStorage.setItem("cliente_a_ver",JSON.stringify(this.cliente))
          }
          if(this.tipoFormularioAVer == "Propiedad")
          {
            window.localStorage.setItem("propiedad_a_ver",JSON.stringify(this.propiedad))
          }


          this.goBack();
        })
        .catch(error => {
          console.log(error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
          this.loader.dismiss();
        });
  }

  goBack()
  {
    this.navCtrl.pop();
  }


  enviarFormulario()
  {
    //this.showLoader();
    var body;
    var datos_cliente = "";
    if(this.formularioAVer=="Conseguir el Cliente") {

      datos_cliente = "Datos Cliente";
      body = "Datos:<br>" +
          "- Nombre completo: " + this.formulario_conseguir_cliente.datos.nombre + "<br>" +
          "- Teléfono de contacto: " + this.formulario_conseguir_cliente.datos.telefono + "<br>" +
          "- Email de contacto: " + this.formulario_conseguir_cliente.datos.email + "<br><br>" +
          "Espacios: " + "<br>" +
          "- Recámaras: " + this.formulario_conseguir_cliente.espacios.recamaras + "<br>" +
          "- Baños: " + this.formulario_conseguir_cliente.espacios.banos + "<br>" +
          "- Estacionamientos: " + this.formulario_conseguir_cliente.espacios.estacionamientos + "<br><br>" +
          "Dimensiones: " + "<br>" +
          "- Departamento: " + this.formulario_conseguir_cliente.dimensiones.departamento + "<br>" +
          "- Casa: " + this.formulario_conseguir_cliente.dimensiones.casa + "<br>" +
          "- Casa en Condominio: " + this.formulario_conseguir_cliente.dimensiones.casa_condominio + "<br>" +
          "- Terreno: " + this.formulario_conseguir_cliente.dimensiones.terreno + "<br>" +
          "- Oficina: " + this.formulario_conseguir_cliente.dimensiones.oficina + "<br>" +
          "- Bodega: " + this.formulario_conseguir_cliente.dimensiones.bodega + "<br><br>" +
          "Fecha Operación: " + "<br>" +
          "- Fecha: " + this.formulario_conseguir_cliente.fechaOperacion + "<br><br>" +
          "Presupuesto: " + "<br>" +
          "- Presupuesto Máximo: " + this.formulario_conseguir_cliente.presupuesto + "<br><br>" +
          "Aval: " + "<br>" +
          "- ¿Quién avalará mi renta?: " + this.formulario_conseguir_cliente.aval + "<br><br>" +
          "Detalles " + "<br>" +
          "- Zonas de mi interés: " + this.formulario_conseguir_cliente.zonas + "<br>" +
          "- Alguna especificación especial que se debe considerar en la búsqueda: " + this.formulario_conseguir_cliente.especificacion_especial + "<br><br>" +
          "Sobre mi proceso de venta " + "<br>" +
          "- ¿Me han atendido otros corredores?: " + this.formulario_conseguir_cliente.proceso.otros_corredores + "<br>" +
          "- ¿Llevas una relación de lo que ya has visto?: " + this.formulario_conseguir_cliente.proceso.lleva_relacion + "<br>" +
          "- ¿Has intentado vender anteriormente sin buenos resultados?: " + this.formulario_conseguir_cliente.proceso.iniciado_busqueda;
    }
    if(this.formularioAVer=="Informe de Visita")
    {
      var ubicacion = "No";
      if(this.formulario_informe_visita.gustos.ubicacion)
      {
        ubicacion = "Sí";
      }
      var conservacion = "No";
      if(this.formulario_informe_visita.gustos.conservacion)
      {
        conservacion = "Sí";
      }
      var espacio = "No";
      if(this.formulario_informe_visita.gustos.espacio)
      {
        espacio = "Sí";
      }
      var precio = "No";
      if(this.formulario_informe_visita.gustos.precio)
      {
        precio = "Sí";
      }

      var distribucion = "No";
      if(this.formulario_informe_visita.gustos.distribucion)
      {
        distribucion = "Sí";
      }
      var acabados = "No";
      if(this.formulario_informe_visita.gustos.acabados)
      {
        acabados = "Sí";
      }
      var estilo = "No";
      if(this.formulario_informe_visita.gustos.estilo)
      {
        estilo = "Sí";
      }
      var otro = "No";
      if(this.formulario_informe_visita.gustos.otro)
      {
        otro = "Sí";
      }

      body = "- Propiedad Visitada:<br>"+
          "- Dirección: "+this.formulario_informe_visita.propiedad_visitada.calle+"<br>"+
      /*    "- Ciudad: "+this.formulario_informe_visita.propiedad_visitada.ciudad+"<br>"+
          "- Colonia: "+this.formulario_informe_visita.propiedad_visitada.colonia+"<br>"+
          "- Estado: "+this.formulario_informe_visita.propiedad_visitada.estado+"<br>"+*/
          "- Asesor que atendió: "+this.formulario_informe_visita.propiedad_visitada.asesor+"<br><br>"+
          "Fecha de la visita: "+"<br>"+
          "- Fecha: "+this.formulario_informe_visita.fechaVisita+"<br><br>"+
          "¿Qué le gustó de la propiedad?: "+"<br>"+
          "- Ubicación: "+ubicacion+"<br>"+
          "- Conservación: "+conservacion+"<br>"+
          "- Espacio: "+espacio+"<br>"+
          "- Precio: "+precio+"<br>"+
          "- Distribución: "+distribucion+"<br>"+
          "- Acabados: "+acabados+"<br>"+
          "- Estilo: "+estilo+"<br>"+
          "- Otro: "+otro+"<br><br>"+
          "Áreas de oportunidad del inmueble: "+"<br>"+
          "- ¿Hubo algo que no le convenciera?: "+this.formulario_informe_visita.oportunidad.no_convencio+"<br>"+
          "- ¿Falta algún área que necesite?: "+this.formulario_informe_visita.oportunidad.falta_area+"<br>"+
          "- Su calificación del 1 al 10: "+this.formulario_informe_visita.oportunidad.calificacion+"<br>"+
          "- ¿Le gustaría visitar de nuevo el inmueble?: "+this.formulario_informe_visita.oportunidad.visitar_nuevo+"<br>"+
          "- Algún comentario sobre la visita...: "+this.formulario_informe_visita.oportunidad.comentario+"<br><br>"+
          "¿Cómo considera nuestro servicio hasta ahora?: "+"<br>"+
          "- Atención: "+this.formulario_informe_visita.servicio.atencion+"<br>"+
          "- Información: "+this.formulario_informe_visita.servicio.informacion+"<br>"+
          "- Puntualidad: "+this.formulario_informe_visita.servicio.puntualidad+"<br>"+
          "- Profesionalismo: "+this.formulario_informe_visita.servicio.profesionalismo+"<br><br>"+
          "Registro de mis datos: "+"<br>"+
          "- Nombre completo: "+this.formulario_informe_visita.mis_datos.nombre+"<br>"+
          "- Teléfono de contacto: "+this.formulario_informe_visita.mis_datos.telefono+"<br>"+
          "- Email de contacto: "+this.formulario_informe_visita.mis_datos.email+"<br>"+
          "- ¿Quién te refirió con nosotros?: "+this.formulario_informe_visita.mis_datos.referencia+"<br>"+"<br>"+
          "Sobre mi proceso de búsqueda... "+"<br>"+
          "- ¿Me han atendido otros corredores?: "+this.formulario_informe_visita.proceso.otros_corredores+"<br>"+
          "- ¿Llevas una relación de lo que ya has visto?: "+this.formulario_informe_visita.proceso.lleva_relacion+"<br>"+
          "- ¿Has decidido comprar anteriormente sin buenos resultados?: "+this.formulario_informe_visita.proceso.ha_decidido_comprar+"<br>"+
          "- Cómo calificas tu experiencia de búsqueda hasta ahora: "+this.formulario_informe_visita.proceso.experiencia;
    }
    if(this.formularioAVer=="Conseguir la Propiedad")
    {
      var precio_definido = "No";

      if(this.formulario_conseguir_propiedad.valor_propiedad.precio_definido)
      {
        precio_definido = "Sí";
      }
      var avaluo = "No";
      if(this.formulario_conseguir_propiedad.valor_propiedad.avaluo)
      {
        avaluo = "Sí";
      }
      var asesoria = "No";
      if(this.formulario_conseguir_propiedad.valor_propiedad.asesoria)
      {
        asesoria = "Sí";
      }
      var precio_estimado = "No";
      if(this.formulario_conseguir_propiedad.valor_propiedad.precio_estimado)
      {
        precio_estimado = "Sí";
      }

      body = "- Qué vende: "+this.formulario_conseguir_propiedad.que_vende+"<br>"+
          "- Fecha Límite: "+this.formulario_conseguir_propiedad.fechaLimite+"<br>"+
          "- ¿Qué preferencias tengo sobre el comprador?: "+this.formulario_conseguir_propiedad.preferencias_comprador+"<br>"+"<br>"+
          "Sobre el valor de mi propiedad: "+"<br>"+
          "- Tengo ya precio definido por mi: "+precio_definido+"<br>"+
          "- Cuento con un avalúo: "+avaluo+"<br>"+
          "- Me gustaría me asesoraran sobre mi propiedad según el precio del mercado: "+asesoria+"<br>"+
          "- Precio estimado : "+precio_estimado+"<br>"+
          "- Precio: "+this.formulario_conseguir_propiedad.valor_propiedad.precio+"<br>"+"<br>"+
          "¿Qué espacios tiene mi propiedad?: "+"<br>"+
          "- Recámaras: "+this.formulario_conseguir_propiedad.prioridad.recamaras+"<br>"+
          "- Estudio / Family: "+this.formulario_conseguir_propiedad.prioridad.estudio+"<br>"+
          "- Baños completos: "+this.formulario_conseguir_propiedad.prioridad.banos_completos+"<br>"+
          "- Medios baños: "+this.formulario_conseguir_propiedad.prioridad.medios_banos+"<br>"+
          "- Número de pisos: "+this.formulario_conseguir_propiedad.prioridad.pisos+"<br>"+
          "- Número de casas: "+this.formulario_conseguir_propiedad.prioridad.numero_casas+"<br>"+"<br>"+
          "Más detalles sobre mi propiedad: "+"<br>"+
          "- Ubicación: "+this.formulario_conseguir_propiedad.detalles.ubicacion+"<br>"+
          "- Orientación: "+this.formulario_conseguir_propiedad.detalles.orientacion+"<br>"+
          "- Luz Interior: "+this.formulario_conseguir_propiedad.detalles.luz_interior+"<br>"+
          "- Conservación en General: "+this.formulario_conseguir_propiedad.detalles.conservacion+"<br>"+
          "- Conservación Acabados: "+this.formulario_conseguir_propiedad.detalles.acabados+"<br>"+
          "- Vigilancia: "+this.formulario_conseguir_propiedad.detalles.vigilancia+"<br>"+"<br>"+
          "Detalles aproximados de mi propiedad: "+"<br>"+
          "- M2 de construcción: "+this.formulario_conseguir_propiedad.detalles_aprox.m2_construccion+"<br>"+
          "- M2 de terreno: "+this.formulario_conseguir_propiedad.detalles_aprox.m2_terreno+"<br>"+
          "- M2 de jardín: "+this.formulario_conseguir_propiedad.detalles_aprox.m2_jardin+"<br>"+
          "- M2 de terraza "+this.formulario_conseguir_propiedad.detalles_aprox.m2_terraza+"<br>"+
          "- Uso de suelo: "+this.formulario_conseguir_propiedad.detalles_aprox.uso_suelo+"<br>"+
          "- Edad de mi propiedad: "+this.formulario_conseguir_propiedad.detalles_aprox.edad+"<br>"+
          "- Costo de mantenimiento: "+this.formulario_conseguir_propiedad.detalles_aprox.costo_mantenimiento+"<br>"+
          "- Costo de vigilancia: "+this.formulario_conseguir_propiedad.detalles_aprox.costo_vigilancia+"<br>"+
          "- Número de departamentos o casas en el Condominio: "+this.formulario_conseguir_propiedad.detalles_aprox.numero_casas+"<br>"+"<br>"+
          "Sobre mi proceso de venta: "+"<br>"+
          "- ¿Me han atendido otros corredores?: "+this.formulario_conseguir_propiedad.proceso.otros_corredores+"<br>"+
          "- ¿Llevas una relación de todos los interesados?: "+this.formulario_conseguir_propiedad.proceso.lleva_relacion+"<br>"+
          "- ¿Has intentado vender anteriormente sin buenos resultados?: "+this.formulario_conseguir_propiedad.proceso.ha_decidido_comprar+"<br>"+
          "- Cómo calificas tu experiencia de búsqueda hasta ahora: "+this.formulario_conseguir_propiedad.proceso.experiencia+"<br>"+"<br>"+
          "Si nos eligieras como tu agente inmobiliario: "+"<br>"+
          "- ¿Aceptarías compartir una comisión del 5% del total de la compra?: "+this.formulario_conseguir_propiedad.eleccion_agente.compartir_comision+"<br>"+
          "- ¿Aceptarías firmar un contrato de fidelidad (no exclusividad) para brindarte asesoría integral, trato eficiente y protegerte de malas prácticas?: "+this.formulario_conseguir_propiedad.eleccion_agente.firmar_contrato+"<br>"+
          "- ¿Te gustaría agendar citas previo acuerdo?: "+this.formulario_conseguir_propiedad.eleccion_agente.agendar_citas+"<br>"+
          "- ¿Dejarías llave por si no hay quien reciba?: "+this.formulario_conseguir_propiedad.eleccion_agente.dejaria_llave+"<br>"+"<br>"+
          "Registro de datos: "+"<br>"+
          "- Nombre completo: "+this.formulario_conseguir_propiedad.mis_datos.nombre+"<br>"+
          "- Teléfono de contacto: "+this.formulario_conseguir_propiedad.mis_datos.telefono+"<br>"+
          "- Email de contacto: "+this.formulario_conseguir_propiedad.mis_datos.email+"<br>"+
          "- Dirección Completa "+this.formulario_conseguir_propiedad.mis_datos.direccion+"<br>"+
          "-¿Quién te refirió con nosotros?: "+this.formulario_conseguir_propiedad.mis_datos.referencia;
    }
    if(this.formularioAVer=="Documentación para Renta")
    {
      body = "";
    }
    if(this.formularioAVer=="Documentación para Venta")
    {
      var identificacion = "No";
      if(this.formulario_documentacion_venta.mex_o_ext.identificacion)
      {
          identificacion = "Sí";
      }
      var acta_matrimonio = "No";
      if(this.formulario_documentacion_venta.mex_o_ext.acta_matrimonio)
      {
          acta_matrimonio = "Sí";
      }
      var rfc = "No";
      if(this.formulario_documentacion_venta.mex_o_ext.rfc)
      {
          rfc = "Sí";
      }
      var curp = "No";
      if(this.formulario_documentacion_venta.mex_o_ext.curp)
      {
          curp = "Sí";
      }
      var fm3 = "No";
      if(this.formulario_documentacion_venta.mex_o_ext.fm3)
        {
            fm3 = "Sí";
        }
      var carta_naturalizacion = "No";
      if(this.formulario_documentacion_venta.mex_o_ext.carta_naturalizacion)
        {
            carta_naturalizacion = "Sí";
        }

        var acta_constitutiva = "No";
        if(this.formulario_documentacion_venta.moral.acta_constitutiva)
        {
            acta_constitutiva = "Sí";
        }
        var rfc_m = "No";
        if(this.formulario_documentacion_venta.moral.rfc)
        {
            rfc_m = "Sí";
        }
        var poder_representante = "No";
        if(this.formulario_documentacion_venta.moral.poder_representante)
        {
            poder_representante = "Sí";
        }
        var indentificacion_m = "No";
        if(this.formulario_documentacion_venta.moral.indentificacion_m)
        {
            indentificacion_m = "Sí";
        }
        var domicilio = "No";
        if(this.formulario_documentacion_venta.moral.domicilio)
        {
            domicilio = "Sí";
        }

        //Inmueble
        var escritura = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.inmueble.escritura)
        {
            escritura = "Sí";
        }
        var predial = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.inmueble.predial)
        {
            predial = "Sí";
        }
        var agua = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.inmueble.agua)
        {
            agua = "Sí";
        }
        //Edificio
        var licencia = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.edificio.licencia)
        {
            licencia = "Sí";
        }
        var aviso_terminacion = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.edificio.aviso_terminacion)
        {
            aviso_terminacion = "Sí";
        }
        var alineamiento_num_oficial = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.edificio.alineamiento_num_oficial)
        {
            alineamiento_num_oficial = "Sí";
        }
        //DEPARTAMENTO, CASA, LOCAL Y OFICINA EN CONDOMINIO
        var regimen_propiedad = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.departamento_casa.regimen_propiedad)
        {
            regimen_propiedad = "Sí";
        }
        var reglamento = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.departamento_casa.reglamento)
        {
            reglamento = "Sí";
        }
        var mantenimiento = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.departamento_casa.mantenimiento)
        {
            mantenimiento = "Sí";
        }
        var uso_suelo = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.departamento_casa.uso_suelo)
        {
            uso_suelo = "Sí";
        }

        //Hipoteca
        var escritura = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.hipoteca.escritura)
        {
            escritura = "Sí";
        }
        var recibo_pagado = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.hipoteca.recibo_pagado)
        {
            recibo_pagado = "Sí";
        }
        var recibo_mantenimineto = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.hipoteca.recibo_mantenimineto)
        {
            recibo_mantenimineto = "Sí";
        }
        var estado_cuenta = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.hipoteca.estado_cuenta)
        {
            estado_cuenta = "Sí";
        }
        var carta_liberacion = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.hipoteca.carta_liberacion)
        {
            carta_liberacion = "Sí";
        }
        //Herencia
        var carta_aceptacion = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.hipoteca.carta_aceptacion)
        {
            carta_aceptacion = "Sí";
        }
        var carta_notario = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.hipoteca.carta_notario)
        {
            carta_notario = "Sí";
        }
        var escritura_adjudicacion = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.hipoteca.escritura_adjudicacion)
        {
            escritura_adjudicacion = "Sí";
        }
        var carta_notario_proceso = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.hipoteca.carta_notario_proceso)
        {
            carta_notario_proceso = "Sí";
        }
        var propietario_fallecio = "No";
        if(this.formulario_documentacion_venta.tipo_propiedad.hipoteca.propietario_fallecio)
        {
            propietario_fallecio = "Sí";
        }

      body = "Documentos para solicitar al Propietario: "+"<br><br>"+
          "- Dirección de correo electrónico: "+this.formulario_documentacion_venta.datos_propietario.correo+"<br>"+
          "- Tipo de Persona: "+this.formulario_documentacion_venta.tipo_persona+"<br>"+
          "- Nacional o Extranjero: "+this.formulario_documentacion_venta.mex_o_ext.tipo+"<br><br>"+
          "Persona Física: "+"<br>"+
          "- Identificación oficial vigente: "+identificacion+"<br>"+
          "- Acta de Matrimonio: "+acta_matrimonio+"<br>"+
          "- RFC: "+rfc+"<br>"+
          "- CURP: "+curp+"<br>"+
          "- Copia de su FM3: "+fm3+"<br>"+
          "- En su caso, Carta de Naturalización: "+carta_naturalizacion+"<br><br>"+
          "Persona Moral: "+"<br>"+
          "- Acta constitutiva de la empresa (con inscripción al Registro Público de la Propiedad): "+acta_constitutiva+"<br>"+
          "- RFC: "+rfc_m+"<br>"+
          "- Poder Notarial del Representante Legal: "+poder_representante+"<br>"+
          "- Identificación Oficial del Apoderado: "+indentificacion_m+"<br>"+
          "- Comprobante de domicilio de la Empresa: "+domicilio+"<br><br>"+
          "Propiedad: "+"<br>"+
          "- Tipo de Propiedad: "+this.formulario_documentacion_venta.tipo_propiedad.tipo+"<br><br>"+
          "Inmueble: "+"<br>"+
          "- Escritura de Propiedad con datos de inscripción en Registro Público de la Propiedad: "+escritura+"<br>"+
          "- Última boleta de predial: "+predial+"<br>"+
          "- Última boleta de agua: "+agua+"<br><br>"+
          "Edificio: "+"<br>"+
          "- Licencia de construcción (si tiene): "+licencia+"<br>"+
          "- Aviso de terminación de obra (si tiene): "+aviso_terminacion+"<br>"+
          "- Alineamiento y número oficial (si tiene): "+alineamiento_num_oficial+"<br><br>"+
          "DEPARTAMENTO, CASA, LOCAL Y OFICINA EN CONDOMINIO: "+"<br>"+
          "- Régimen de propiedad en condominio (si tiene): "+regimen_propiedad+"<br>"+
          "- Reglamento (si tiene): "+reglamento+"<br>"+
          "- Último recibo de mantenimiento: "+mantenimiento+"<br>"+
          "- Uso de suelo (sólo uso comercial): "+uso_suelo+"<br><br>"+
          "Hipoteca: "+"<br>"+
          "- ¿Tiene Hipoteca?: "+this.formulario_documentacion_venta.hipoteca.tiene+"<br>"+
          "- Escritura de Hipoteca: "+escritura+"<br>"+
          "- Último recibo de la hipoteca pagado: "+recibo_pagado+"<br>"+
          "- Último recibo de mantenimiento: "+recibo_mantenimineto+"<br>"+
          "- Estado de Cuenta: "+estado_cuenta+"<br>"+
          "- Escritura, Carta o Instrumento de liberación: "+carta_liberacion+"<br><br>"+
          "Herencia: "+"<br>"+
          "- ¿Es Herencia?: "+this.formulario_documentacion_venta.herencia.tiene+"<br>"+
          "- Escritura de aceptación de herencia: "+carta_aceptacion+"<br>"+
          "- Carta del Notario (si la aceptación de herencia está en proceso): "+carta_notario+"<br>"+
          "- Escritura de adjudicación de herencia (Si ya se adjudicó)*: "+escritura_adjudicacion+"<br>"+
          "- Carta del Notario (Si está en proceso la adjudicación): "+carta_notario_proceso+"<br>"+
          "- Si el propietario falleció antes del 2000, traer acta de matrimonio de los herederos y si los herederos están casados por propiedad conyugal, que firme el Cónyuge también de aceptación): "+propietario_fallecio+"<br><br>"+
          "Comisión: "+"<br>"+
          "- ¿Estarías de acuerdo de pagar una comisión por intermediación inmobiliaria del 5% del precio de venta?: "+this.formulario_documentacion_venta.disposicion+"<br>";
    }
    if(this.formularioAVer=="Contrato para Renta")
    {

      body = "Integrantes:<br>" +
          "- Adultos: " + this.formulario_contrato_renta.familia.adultos + "<br>" +
          "- Niños / Jóvenes (hombres): " + this.formulario_contrato_renta.familia.hombres_no_adultos + "<br>" +
          "- Niñas / Jóvenes (mujeres): " + this.formulario_contrato_renta.familia.mujeres_no_adultas + "<br>" +
          "- Gente de servicio: " + this.formulario_contrato_renta.familia.servicio + "<br>" +
          "- Mascotas: " + this.formulario_contrato_renta.familia.mascotas + "<br><br>" +
          "¿Qué estoy buscando?: " + "<br>" +
          "- Departamento: " + this.formulario_contrato_renta.que_busca.departamento + "<br>" +
          "- Casa: " + this.formulario_contrato_renta.que_busca.casa + "<br>" +
          "- Casa en Condominio: " + this.formulario_contrato_renta.que_busca.casa_condominio + "<br>" +
          "- Terreno: " + this.formulario_contrato_renta.que_busca.terreno + "<br>" +
          "- Oficina: " + this.formulario_contrato_renta.que_busca.oficina + "<br>" +
          "- Bodega: " + this.formulario_contrato_renta.que_busca.bodega + "<br><br>" +
          "Fecha límite: " + "<br>" +
          "- Fecha: " + this.formulario_contrato_renta.fechaOperacion + "<br><br>" +
          "Aval: " + "<br>" +
          "- ¿Quién avalará mi renta?: " + this.formulario_contrato_renta.aval + "<br><br>" +
          "Detalles " + "<br>" +
          "- Zonas de mi interés: " + this.formulario_contrato_renta.zona + "<br><br>" +
          "Presupuesto: " + "<br>" +
          "- Deseo propiedad amueblada o semi amueblada: " + this.formulario_contrato_renta.presupuesto.amueblada + "<br>" +
          "- Ya incluyo mantenimiento: " + this.formulario_contrato_renta.presupuesto.mantenimiento + "<br>" +
          "- Ya incluyo servicios: " + this.formulario_contrato_renta.presupuesto.servicios + "<br>" +
          "- Mi presupuesto permite pagar aparte mantenimiento: " + this.formulario_contrato_renta.presupuesto.aparte_mantenimiento + "<br>" +
          "- Mi presupuesto permite pagar servicios aparte: " + this.formulario_contrato_renta.presupuesto.aparte_servicios + "<br>" +
          "- Presupuesto Máximo: " + this.formulario_contrato_renta.presupuesto.tope + "<br><br>" +
          "Espacios: " + "<br>" +
          "- Recámaras: " + this.formulario_contrato_renta.espacios.recamaras + "<br>" +
          "- Baños: " + this.formulario_contrato_renta.espacios.banos + "<br>" +
          "- Estacionamientos: " + this.formulario_contrato_renta.espacios.estacionamientos + "<br><br>" +
          "Preferencias: " + "<br>" +
          "- Orientación: " + this.formulario_contrato_renta.preferencias.orientacion + "<br>" +
          "- Luz Interior: " + this.formulario_contrato_renta.preferencias.luz_interior + "<br>" +
          "- Calle cerrada y vigilancia: " + this.formulario_contrato_renta.preferencias.calle_cerrada + "<br>" +
          "- Tipo decoración: " + this.formulario_contrato_renta.preferencias.decoracion + "<br><br>" +
          "Sobre mi proceso de búsqueda " + "<br>" +
          "- ¿Me gustaría tener amenities como algo indispensable?: " + this.formulario_contrato_renta.busqueda.amenities + "<br>" +
          "- ¿Me gustan edificios altos?: " + this.formulario_contrato_renta.busqueda.edificios_altos + "<br>" +
          "- ¿Me han atendido otros corredores?: " + this.formulario_contrato_renta.busqueda.otros_corredores+ "<br>" +
          "- ¿Ya has visto algunas propiedades sin que algo te convenza?: " + this.formulario_contrato_renta.busqueda.visitado_propiedades + "<br>"+
          "- ¿Tu experiencia hasta ahora ha sido positiva?: " + this.formulario_contrato_renta.busqueda.experiencia_positiva + "<br><br>"+
          "Registro de datos " + "<br>" +
          "- Nombre completo: " + this.formulario_contrato_renta.mis_datos.nombre + "<br>" +
          "- Teléfono de contacto: " + this.formulario_contrato_renta.mis_datos.telefono + "<br>" +
          "- Email de contacto: " + this.formulario_contrato_renta.mis_datos.email+ "<br>" +
          "- ¿Quién te refirió con nosotros?: " + this.formulario_contrato_renta.mis_datos.referencia;
    }

    let email = {
      to: window.localStorage.getItem("user"),
      //to:"tomas.p@gyo-solutions.com",
/*      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],*/
     /* attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],*/
      subject: this.formularioAVer+ ' - ' + datos_cliente,
      body: body,
      isHtml: true
    }

// Send a text message using default options
    this.emailComposer.open(email);

    this.goBack();

  }

}
