<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 04:58 PM
 */

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include "../../connection.php";

$usuario = $_POST['usuario'];
$pass = $_POST['pass'];

//Query to execute
$connection = db_connect();
$query = "SELECT * FROM usuario WHERE email='$usuario' AND password='$pass'";

if ($result = mysqli_query($connection, $query))
{
    $resultArray = array();
    $tempArray = array();

    while($row = $result->fetch_object())
    {
        $tempArray = $row;
        array_push($resultArray, $tempArray);
    }
    echo json_encode($resultArray);
}
else{
    echo $connection->error;
}

// Close connections
mysqli_close($connection);