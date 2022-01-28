<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";

$nombre = $_POST['nombre'];
$id_cliente = $_POST['id_cliente'];
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


$sql = "UPDATE cliente SET nombre = '$nombre', 
                            telefono = '$telefono',
                            email='$email', 
                            website='$website', 
                            referencia='$referencia', 
                            propiedad_busca='$propiedad_busca', 
                            renta_o_venta='$renta_o_venta', 
                            zona_busca='$zona_busca', 
                            recamaras='$recamaras', 
                            banos='$banos', 
                            estacionamientos='$estacionamientos', 
                            m2='$m2', 
                            fecha_concretar='$fecha_concretar', 
                            recursos_consisten='$recursos_consisten', 
                            requisitos_especiales='$requisitos_especiales',
                            presupuesto='$presupuesto',
                             tipo_propiedad='$tipo_propiedad' WHERE id_cliente = $id_cliente";


$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}