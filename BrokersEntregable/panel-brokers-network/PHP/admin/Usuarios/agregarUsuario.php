<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";


$usuario = $_POST['usuario'];
$pass = $_POST['pass'];
$token = md5(uniqid($usuario, true));

$sql = "INSERT INTO usuario (usuario, pass, permisos, token, id_plantel)  
                      VALUES('$usuario', '$pass', '[]', '$token', 1)";

$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}