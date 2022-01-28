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
$usuario = $_POST['usuario'];
$pass = $_POST['pass'];

$length = 50;
$token = bin2hex(random_bytes($length));
$sql = "UPDATE usuario SET usuario = '$usuario', pass = '$pass', token = '$token' WHERE id_usuario = $id_usuario";


$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}