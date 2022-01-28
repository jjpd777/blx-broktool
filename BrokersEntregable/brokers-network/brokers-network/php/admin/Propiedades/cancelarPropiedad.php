<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";

$id_propiedad = $_POST['id_propiedad'];


$sql = "UPDATE propiedad SET activa = 1 WHERE id_propiedad = $id_propiedad";


$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}