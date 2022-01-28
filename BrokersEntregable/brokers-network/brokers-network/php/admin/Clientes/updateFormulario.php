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
$id_cliente = $_POST['id'];


$sql = "UPDATE cliente SET $tipo = '$formulario'
                WHERE id_cliente = $id_cliente";


$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}