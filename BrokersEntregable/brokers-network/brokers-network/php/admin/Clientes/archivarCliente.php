<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";

$id_cliente = $_POST['id_cliente'];

$sql = "UPDATE cliente SET archivado = 1 WHERE id_cliente = $id_cliente";


$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}