<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";
$id_pago = $_POST['id_pago'];

$txt = $_POST['txt'];


$sql = "UPDATE pagos SET entregado = '$txt' WHERE id_pago = $id_pago";


$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}