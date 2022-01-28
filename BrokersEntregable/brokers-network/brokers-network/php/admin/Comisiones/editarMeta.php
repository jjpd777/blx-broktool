<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";

$id_meta = $_POST['id_meta'];
$meta = $_POST['meta'];

$sql = "UPDATE meta SET meta = '$meta' WHERE id_meta = $id_meta";

$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}