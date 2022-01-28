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
$query = "SELECT * FROM usuario WHERE usuario='$usuario' AND pass='$pass'";

if ($result = mysqli_query($connection, $query))
{
    // If so, then create a results array and a temporary one
    // to hold the data
    $resultArray = array();
    $tempArray = array();

    // Loop through each row in the result set
    while($row = $result->fetch_object())
    {
        // Add each row into our results array
        $tempArray = $row;
        array_push($resultArray, $tempArray);
    }

    // Finally, encode the array to JSON and output the results
    echo json_encode($resultArray);
}

// Close connections
mysqli_close($connection);