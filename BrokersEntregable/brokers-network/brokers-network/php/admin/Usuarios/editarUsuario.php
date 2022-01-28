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

$nombreApellido = $_POST['nombreApellido'];
$usuario = $_POST['usuario'];
$celular= $_POST['celular'];
$email = $_POST['email'];
$password = $_POST['password'];
$ciudad = $_POST['ciudad'];
$zonaParaCubrir= $_POST['zonaParaCubrir'];
$horarioParaCubrir = $_POST['horarioParaCubrir'];
$empresa= $_POST['empresa'];
$desdeCuando = $_POST['desdeCuando'];
$datosTarjeta1 = $_POST['datosTarjeta1'];
$datosTarjeta2= $_POST['datosTarjeta2'];
$datosTarjeta3 = $_POST['datosTarjeta3'];
$datosTarjeta4 = $_POST['datosTarjeta4'];
$asesorIndependiente= $_POST['asesorIndependiente'];
$pushToken= $_POST['pushToken'];
$sitioweb= $_POST['sitioweb'];

$sql = "UPDATE usuario SET sitioweb = '$sitioweb',
                           nombreApellido = '$nombreApellido',
                           usuario = '$usuario',
                           celular = '$celular',
                           email = '$email',
                           ciudad = '$ciudad',
                           zonaParaCubrir = '$zonaParaCubrir',
                           horarioParaCubrir = '$horarioParaCubrir',
                           empresa = '$empresa',
                           desdeCuando = '$desdeCuando',
                           datosTarjeta1 = '$datosTarjeta1',
                           datosTarjeta2 = '$datosTarjeta2',
                           datosTarjeta3 = '$datosTarjeta3',
                           datosTarjeta4 = '$datosTarjeta4',
                           asesorIndependiente = '$asesorIndependiente',
                           password = '$password',
                           pushToken = '$pushToken' WHERE id_usuario = $id_usuario";


$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}