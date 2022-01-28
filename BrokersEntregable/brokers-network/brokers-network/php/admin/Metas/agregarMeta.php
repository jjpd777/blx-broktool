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
$year = $_POST['year'];
$meta= $_POST['meta'];



$sql = "INSERT INTO meta (id_meta,
                                id_usuario, 
                                meta, 
                                year)  
                      VALUES(null,
                            $id_usuario,
                            '$meta', 
                            '$year')";

$connection = db_connect();
if ($result = mysqli_query($connection, $sql))
{
    echo "1";
}
else{
    echo $connection->error;
}

// Close connections
mysqli_close($connection);
/*
$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}*/