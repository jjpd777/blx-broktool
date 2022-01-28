<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";

$id_usuario = $_POST['id_usuario'];
$year  = $_POST['year'];
$monto = $_POST['monto'];

$sql = "UPDATE meta SET renta_ocacional = renta_ocacional + $monto WHERE id_usuario = $id_usuario AND year=$year";

$r = db_query($sql);

//echo $sql;

if($r == true){
    echo "1";
}
else{
    echo "0";
}