<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");
date_default_timezone_set('America/Mexico_City');
include "../../connection.php";


$nombrePropietario = $_POST['nombrePropietario'];
$id_usuario = $_POST['id_usuario'];
$celular= $_POST['celular'];
$email = $_POST['email'];
$precio = $_POST['precio'];
$referencia = $_POST['referencia'];
$direccionPropietario= $_POST['direccionPropietario'];
$tipoOperacion = $_POST['tipoOperacion'];
$notas = $_POST['notas'];
$link= $_POST['link'];
$tipo_propiedad= $_POST['tipo_propiedad'];

$date = date("Y-m-d");

$sql = "INSERT INTO propiedad (id_propiedad,
                                id_usuario, 
                                nombre, 
                                celular,
                                email,
                                precio,
                                referencia,
                                direccion,
                                tipo,
                                notas,
                                link,
                                fecha,
                                tipo_propiedad,
                                eval_c,
                                eval_p,
                                eval_i,
                                eval_f,
                                eval_e,
                                formulario_informe_visita,
                                formulario_contrato_renta,
                                formulario_conseguir_propiedad,
                                formulario_documentacion_renta,
                                formulario_documentacion_venta)  
                      VALUES(null,
                            $id_usuario, 
                            '$nombrePropietario', 
                            '$celular',
                            '$email',
                            '$precio',
                            '$referencia',
                            '$direccionPropietario',
                            '$tipoOperacion',
                            '$notas',
                            '$link',
                            '$date',
                            '$tipo_propiedad',
                            '{\"conseguir_propiedad\":false,\"documentacion\":false,\"contrato\":false,\"visita_propiedad\":false,\"estudio_mercado\":false}',
                            '{\"promocion\":false,\"chat_redes\":false,\"leads\":false,\"citas\":false,\"informe\":false}',
                            '{\"oferta\":false,\"documentacion_cliente\":false,\"contrato\":false,\"seguimiento_banco_notaria\":false,\"avaluo\":false}',
                            '{\"firma\":false}',
                            '{\"entrega\":false,\"pago_comision\":false}',
                            '{\"propiedad_visitada\":{\"calle\":\"Popocatépetl\",\"colonia\":\"San antonio\",\"ciudad\":\"Toluca\",\"estado\":\"Mexico\",\"asesor\":\"AsesorDemo\"},\"fechaVistia\":\"2020-07-01T15:51:04.516Z\",\"gustos\":{\"ubicacion\":false,\"conservacion\":false,\"distribucion\":true,\"acabados\":true,\"espacios\":false,\"estilo\":false,\"precio\":false,\"otro\":false,\"espacio\":true},\"oportunidad\":{\"no_convencio\":\"No\",\"falta_area\":\"\",\"calificacion\":\"\",\"visitar_nuevo\":\"\",\"comentario\":\"\"},\"servicio\":{\"atencion\":\"\",\"puntualidad\":\"\",\"informacion\":\"\",\"profesionalismo\":\"\"},\"mis_datos\":{\"nombre\":\"\",\"telefono\":\"\",\"email\":\"\",\"referencia\":\"\"},\"proceso\":{\"otros_corredores\":\"Sí\",\"lleva_relacion\":\"No\",\"ha_decidido_comprar\":\"No\",\"experiencia\":\"10\"},\"fechaVisita\":\"2020-07-08T16:04:57.000Z\"}',
                            '{\"familia\":{\"adultos\":\"\",\"hombres_no_adultos\":\"\",\"mujeres_no_adultas\":\"\",\"servicio\":\"\",\"mascotas\":\"\"},\"que_busca\":{\"departamento\":\"\",\"casa\":\"\",\"casa_condominio\":\"\",\"oficina\":\"\",\"bodega\":\"\"},\"fechaOperacion\":\"2020-07-02T22:00:16.812Z\",\"aval\":\"\",\"zona\":\"\",\"presupuesto\":{\"amueblada\":false,\"mantenimiento\":false,\"servicios\":false,\"aparte_mantenimiento\":false,\"aparte_servicios\":false,\"tope\":\"\"},\"espacios\":{\"recamaras\":\"\",\"banos\":\"\",\"estacionamientos\":\"\"},\"preferencias\":{\"orientacion\":\"\",\"luz_interior\":\"\",\"calle_cerrada\":\"\",\"decoracion\":\"\"},\"busqueda\":{\"amenities\":\"\",\"edificios_altos\":\"\",\"otros_corredores\":\"\",\"visitado_propiedades\":\"\",\"experiencia_positiva\":\"\"},\"horarios\":\"\",\"mis_datos\":{\"nombre\":\"\",\"telefono\":\"\",\"email\":\"\",\"referencia\":\"\"}}',
                            '{\"que_vende\":\"\",\"preferencias_comprador\":\"\",\"prioridad\":{\"recamaras\":\"\",\"estudio\":\"\",\"banos_completos\":\"\",\"medios_banos\":\"\",\"estacionamientos\":\"\",\"pisos\":\"\",\"numero_casas\":\"\"},\"fechaVistia\":\"2020-07-02T22:04:09.113Z\",\"valor_propiedad\":{\"precio_definido\":false,\"avaluo\":false,\"asesoria\":false,\"precio_estimado\":false,\"precio\":\"\"},\"detalles\":{\"ubicacion\":\"\",\"orientacion\":\"\",\"luz_interior\":\"\",\"conservacion\":\"\",\"acabados\":\"\",\"vigilancia\":\"\"},\"detalles_aprox\":{\"m2_construccion\":\"\",\"m2_terreno\":\"\",\"m2_jardin\":\"\",\"m2_terraza\":\"\",\"uso_suelo\":\"\",\"edad\":\"\",\"costo_mantenimiento\":\"\",\"costo_vigilancia\":\"\",\"numero_casas\":\"\"},\"proceso\":{\"otros_corredores\":\"\",\"lleva_relacion\":\"\",\"ha_decidido_comprar\":\"\",\"experiencia\":\"\"},\"eleccion_agente\":{\"compartir_comision\":\"\",\"firmar_contrato\":\"\",\"agendar_citas\":\"\",\"dejaria_llave\":\"\"},\"mis_datos\":{\"nombre\":\"\",\"telefono\":\"\",\"email\":\"\",\"direccion\":\"\",\"referencia\":\"\"}}',
                            '{\"datos_propietario\":{\"correo\":\"\",\"celular\":\"\",\"direccion\":\"\",\"nombre\":\"\",\"tipo\":{\"persona_fisica\":false,\"persona_moral\":false,\"copropiedad\":false}}}',
                            '{\"datos_propietario\":{\"correo\":\"\"},\"mex_o_ext\":{\"tipo\":\"\",\"identificacion\":false,\"rfc\":false,\"curp\":false,\"acta_matrimonio\":false,\"fm3\":false,\"carta_naturalizacion\":false},\"moral\":{\"acta_constitutiva\":false,\"rfc\":false,\"poder_representante\":false,\"indentificacion\":false,\"domicilio\":false},\"tipo_persona\":\"\",\"tipo_propiedad\":{\"tipo\":\"\",\"inmueble\":{\"escritura\":false,\"predial\":false,\"agua\":false},\"edificio\":{\"licencia\":false,\"aviso_terminacion\":false,\"alineamiento_num_oficial\":false},\"departamento_casa\":{\"regimen_propiedad\":false,\"reglamento\":false,\"mantenimiento\":false,\"uso_suelo\":false}},\"hipoteca\":{\"tiene\":\"\",\"escritura\":false,\"recibo_pagado\":false,\"recibo_mantenimineto\":false,\"estado_cuenta\":false,\"carta_liberacion\":false},\"herencia\":{\"tiene\":\"\",\"carta_aceptacion\":false,\"carta_notario\":false,\"escritura_adjudicacion\":false,\"carta_notario_proceso\":false,\"propietario_fallecio\":false},\"disposicion\":\"\"}')";

/*   '{\"conseguir_propiedad\":false,\"conseguir_datos\":false,\"elabora_contrato\":false,\"visita_contrato\":false,\"arma_expediente\":false,\"estudio_mercado\":false}',
                            '{\"subir_promocion\":false,\"ficha_promocional\":false,\"promocion_chat_redes\":false,\"contestar_leads\":false,\"programar_confirmar_cita\":false,\"enviar_informe_visitas\":false}',
                            '{\"documentacion_cliente\":false,\"carta_oferta_apartado\":false,\"poliza_juridica\":false,\"contrato_arrendamiento\":false,\"realizar_inventario\":false}',
                            '{\"confirmar_fecha_firma\":false,\"firma_contrato\":false}',
                            '{\"entrega\":false,\"pago_comision\":false}')";*/

$connection = db_connect();
if ($result = mysqli_query($connection, $sql))
{
    echo "1";
}
else{
    echo $connection->error;
}

// Close connections
mysqli_close($connection);
/*
$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}*/