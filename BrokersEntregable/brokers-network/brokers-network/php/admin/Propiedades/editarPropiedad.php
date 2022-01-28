<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";

$nombre = $_POST['nombre'];
$id_propiedad = $_POST['id_propiedad'];
$celuar= $_POST['celuar'];
$email = $_POST['email'];
$tipo = $_POST['tipo'];
$referencia= $_POST['referencia'];
$notas= $_POST['notas'];
$link= $_POST['link'];
$direccion= $_POST['direccion'];
$precio= $_POST['precio'];
$tipo_propiedad= $_POST['tipo_propiedad'];


$sql = "UPDATE propiedad SET nombre = '$nombre', 
                            celular = '$celuar',
                            email='$email', 
                            tipo='$tipo', 
                             precio='$precio', 
                            referencia='$referencia', 
                            notas='$notas', 
                            link='$link',
                            direccion='$direccion',
                            tipo_propiedad='$tipo_propiedad'
                           WHERE id_propiedad = $id_propiedad";


$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}