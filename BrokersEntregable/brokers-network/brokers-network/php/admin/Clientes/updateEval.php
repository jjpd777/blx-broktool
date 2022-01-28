<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";

$eval_c = $_POST['eval_c'];
$eval_e = $_POST['eval_e'];
$eval_r = $_POST['eval_r'];
$eval_f = $_POST['eval_f'];
$eval_en = $_POST['eval_en'];
$id_cliente = $_POST['id_cliente'];


$sql = "UPDATE cliente SET eval_c = '$eval_c',
                eval_e = '$eval_e',
                eval_r = '$eval_r',
                eval_f = '$eval_f',
                eval_en = '$eval_en'
                WHERE id_cliente = $id_cliente";


$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}