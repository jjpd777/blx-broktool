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
$pago = $_POST['pago'];
$producto= $_POST['producto'];
$descripcion= $_POST['descripcion'];
$precio= $_POST['precio'];
$fecha = date("Y-m-d h:i:s");

$sql = "INSERT INTO pagos (id_pago,
                                id_usuario, 
                                pago, 
                                precio,
                                producto,
                                descripcion,
                                fecha,
                                entregado)  
                      VALUES(null,
                            $id_usuario, 
                            '$pago', 
                            $precio, 
                            '$producto',
                            '$descripcion',
                            '$fecha',
                            'PENDIENTE')";

$connection = db_connect();
if ($result = mysqli_query($connection, $sql))
{
    echo "1";
}
else{
    echo $connection->error;
}

mysqli_close($connection);
