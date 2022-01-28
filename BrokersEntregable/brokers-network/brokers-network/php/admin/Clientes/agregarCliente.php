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


$nombre = $_POST['nombre'];
$id_usuario = $_POST['id_usuario'];
$telefono= $_POST['telefono'];
$email = $_POST['email'];
$referencia = $_POST['referencia'];
$website= $_POST['website'];

$propiedad_busca = $_POST['propiedad_busca'];
$renta_o_venta = $_POST['renta_o_venta'];
$zona_busca= $_POST['zona_busca'];
$recamaras = $_POST['recamaras'];
$banos = $_POST['banos'];
$estacionamientos= $_POST['estacionamientos'];
$m2 = $_POST['m2'];
$fecha_concretar= $_POST['fecha_concretar'];
$presupuesto = $_POST['presupuesto'];
$recursos_consisten= $_POST['recursos_consisten'];
$requisitos_especiales= $_POST['requisitos_especiales'];
$tipo_propiedad= $_POST['tipo_propiedad'];

$date = date("Y-m-d");

$sql = "INSERT INTO cliente (id_cliente,
                                id_usuario, 
                                nombre, 
                                telefono,
                                email,
                                referencia,
                                website,
                                fecha_creacion,
                                propiedad_busca,
                                renta_o_venta,
                                zona_busca,
                                recamaras,
                                banos,
                                estacionamientos,
                                m2,
                                fecha_concretar,
                                presupuesto,
                                recursos_consisten,
                                requisitos_especiales,
                                eval_c,
                                eval_e,
                                eval_r,
                                eval_f,
                                eval_en,
                                formulario_conseguir_cliente,
                                formulario_informe_visita,
                                tipo_propiedad)  
                      VALUES(null,
                            $id_usuario, 
                            '$nombre', 
                            '$telefono',
                            '$email',
                            '$referencia',
                            '$website',
                            '$date',
                            '$propiedad_busca',
                                '$renta_o_venta',
                                '$zona_busca',
                                '$recamaras',
                                '$banos',
                                '$estacionamientos',
                                '$m2',
                                '$fecha_concretar',
                                '$presupuesto',
                                '$recursos_consisten',
                                '$requisitos_especiales',
                            '{\"conseguir_cliente\":false,\"documentacion_cliente\":false,\"documantacion_fiador\":false}',
                            '{\"busqueda_propiedades\":false,\"disponibilidad_comision\":false,\"citas_recorridos\":false,\"informe_visita\":false}',
                            '{\"negociacion\":false,\"oferta_apartado\":false,\"documentacion_inmueble\":false,\"contrato\":false}',
                            '{\"confirmar_fecha\":false,\"firma_contrato\":false}',
                            '{\"entrega_inmueble\":false,\"pago_comision\":false}',
                            '{\"proceso\":{\"otros_corredores\":\"\",\"lleva_relacion\":\"\",\"iniciado_busqueda\":\"\"},\"presupuesto\":\"\",\"especificacion_especial\":\"\",\"aval\":\"\",\"zonas\":\"\",\"fechaOperacion\":\"2020-07-02T21:24:04.734Z\",\"datos\":{\"nombre\":\"\",\"celular\":\"\",\"email\":\"\"},\"espacios\":{\"recamaras\":\"\",\"banos\":\"\",\"estacionamientos\":\"\"},\"dimensiones\":{\"departamento\":\"\",\"casa\":\"\",\"casa_condominio\":\"\",\"terreno\":\"\",\"oficina\":\"\",\"bodega\":\"\"}}',
                            '{\"propiedad_visitada\":{\"calle\":\"\",\"colonia\":\"\",\"ciudad\":\"\",\"estado\":\"\",\"asesor\":\"\"},\"fechaVistia\":\"2020-07-01T15:31:06.837Z\",\"gustos\":{\"ubicacion\":false,\"conservacion\":false,\"distribucion\":false,\"acabados\":false,\"espacios\":false,\"estilo\":false,\"precio\":false,\"otro\":false},\"oportunidad\":{\"no_convencio\":\"\",\"falta_area\":\"\",\"calificacion\":\"\",\"visitar_nuevo\":\"\",\"comentario\":\"\"},\"servicio\":{\"atencion\":\"\",\"puntualidad\":\"\",\"informacion\":\"\",\"profesionalismo\":\"\"},\"mis_datos\":{\"nombre\":\"\",\"telefono\":\"\",\"email\":\"\",\"referencia\":\"\"},\"proceso\":{\"otros_corredores\":\"\",\"lleva_relacion\":\"\",\"ha_decidido_comprar\":\"\",\"experiencia\":\"\"}}',
                            '$tipo_propiedad')";

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