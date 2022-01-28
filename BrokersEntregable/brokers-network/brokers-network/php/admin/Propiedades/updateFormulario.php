<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";

$formulario = $_POST['formulario'];
$tipo = $_POST['tipo'];
$id_propiedad = $_POST['id'];


$sql = "UPDATE propiedad SET $tipo = '$formulario'
                WHERE id_propiedad = $id_propiedad";


$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}