<?php
/**
 * Created by PhpStorm.
 * User: Gabriel Luque
 * Date: 03/10/2017
 * Time: 12:27 PM
 */

/**
 * Archivo PHP con propositos de prueba
 */

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include "connection.php";


//Query to execute
$sql = "DELETE FROM alumnos WHERE id=6";

$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}