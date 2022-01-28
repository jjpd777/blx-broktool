<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";

/*$eval = $_POST['eval'];
$json = $_POST['json'];*/
$eval_c = $_POST['eval_c'];
$eval_p = $_POST['eval_p'];
$eval_i = $_POST['eval_i'];
$eval_f = $_POST['eval_f'];
$eval_e = $_POST['eval_e'];
$id_propiedad = $_POST['id_propiedad'];


$sql = "UPDATE propiedad SET eval_c = '$eval_c',
                            eval_p = '$eval_p',
                            eval_i = '$eval_i',
                            eval_f = '$eval_f',
                            eval_e = '$eval_e' WHERE id_propiedad = $id_propiedad";


$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}