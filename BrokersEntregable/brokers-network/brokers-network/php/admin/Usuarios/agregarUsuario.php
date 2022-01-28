<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";


$nombreApellido = $_POST['nombreApellido'];
$usuario = $_POST['usuario'];
$celular= $_POST['celular'];
$email = $_POST['email'];
$password = $_POST['password'];
$curp= $_POST['curp'];
$rfc = $_POST['rfc'];
$ciudad = $_POST['ciudad'];
$zonaParaCubrir= $_POST['zonaParaCubrir'];
$horarioParaCubrir = $_POST['horarioParaCubrir'];
$terminosCondiciones = $_POST['terminosCondiciones'];
$politicasPrivacidad= $_POST['politicasPrivacidad'];

$notificaciones = $_POST['notificaciones'];
$fotoPerfil =$_POST['fotoPerfil'];
$empresa= $_POST['empresa'];
$desdeCuando = $_POST['desdeCuando'];
$datosTarjeta1 = $_POST['datosTarjeta1'];
$datosTarjeta2= $_POST['datosTarjeta2'];
$datosTarjeta3 = $_POST['datosTarjeta3'];
$datosTarjeta4 = $_POST['datosTarjeta4'];
$asesorIndependiente= $_POST['asesorIndependiente'];
$accesoUbicacion = $_POST['accesoUbicacion'];
$fotoPortada = "";//$_POST['fotoPortada'];
$pushToken= $_POST['pushToken'];



$sql = "INSERT INTO usuario (id_usuario,
                                nombreApellido, 
                                usuario, 
                                celular,
                                email,
                                password,
                                curp,
                                rfc,
                                ciudad,
                                zonaParaCubrir,
                                horarioParaCubrir,
                                terminosCondiciones,
                                politicasPrivacidad,
                                notificaciones,
                                fotoPerfil,
                                empresa,
                                desdeCuando,
                                datosTarjeta1,
                                datosTarjeta2,
                                datosTarjeta3,
                                datosTarjeta4,
                                asesorIndependiente,
                                accesoUbicacion,
                                fotoPortada,
                                sitioweb,
                                pushToken)  
                      VALUES(null,
                            '$nombreApellido', 
                            '$usuario', 
                            '$celular',
                            '$email',
                            '$password',
                            '$curp',
                            '$rfc',
                            '$ciudad',
                            '$zonaParaCubrir',
                            '$horarioParaCubrir',
                            '$terminosCondiciones',
                            '$politicasPrivacidad',
                            '$notificaciones',
                            '$fotoPerfil',
                            '$empresa',
                            '$desdeCuando',
                            '$datosTarjeta1',
                            '$datosTarjeta2',
                            '$datosTarjeta3',
                            '$datosTarjeta4',
                            '$asesorIndependiente',
                            '$accesoUbicacion',
                            '$fotoPortada',
                            '',
                            '$pushToken')";

$connection = db_connect();
if ($result = mysqli_query($connection, $sql))
{
    echo "1";
}
else{
    echo $connection->error;
}

mysqli_close($connection);