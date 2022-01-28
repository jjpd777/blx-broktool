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
$id_usuario = $_POST['id_usuario'];

//Query to execute
$connection = db_connect();
$query = "SELECT * FROM propiedad WHERE id_usuario=$id_usuario";

if ($result = mysqli_query($connection, $query))
{
    $resultArray = array();

    $resultArray["renta_2030"] = 0;
    $resultArray["venta_2030"] = 0;
    $resultArray["renta_2029"] = 0;
    $resultArray["venta_2029"] = 0;
    $resultArray["renta_2028"] = 0;
    $resultArray["venta_2028"] = 0;
    $resultArray["renta_2027"] = 0;
    $resultArray["venta_2027"] = 0;
    $resultArray["renta_2026"] = 0;
    $resultArray["venta_2026"] = 0;
    $resultArray["renta_2025"] = 0;
    $resultArray["venta_2025"] = 0;
    $resultArray["renta_2024"] = 0;
    $resultArray["venta_2024"] = 0;
    $resultArray["renta_2023"] = 0;
    $resultArray["venta_2023"] = 0;
    $resultArray["renta_2022"] = 0;
    $resultArray["venta_2022"] = 0;
    $resultArray["renta_2021"] = 0;
    $resultArray["venta_2021"] = 0;

    $resultArray["renta_2020"] = 0;
    $resultArray["venta_2020"] = 0;
    $resultArray["renta_2019"] = 0;
    $resultArray["venta_2019"] = 0;
    $resultArray["renta_2018"] = 0;
    $resultArray["venta_2018"] = 0;
    $resultArray["renta_2017"] = 0;
    $resultArray["venta_2017"] = 0;

    $resultArray["total_2020"] = 0;
    $resultArray["total_2019"] = 0;
    $resultArray["total_2018"] = 0;
    $resultArray["total_2017"] = 0;

    while($row = $result->fetch_object())
    {
        $id_propiedad = $row->id_propiedad;
        $tipo_propiedad = $row->tipo;
        $year =  $row->fecha[0].$row->fecha[1].$row->fecha[2].$row->fecha[3];
        $query2 = "SELECT * FROM comision WHERE id_usuario=$id_usuario AND id_propiedad=$id_propiedad";

        if ($result2 = mysqli_query($connection, $query2)) {
            while ($row2 = $result2->fetch_object()) {

                if($tipo_propiedad=="Renta")
                {
                    $resultArray["renta_".$year] += $row2->monto/1;
                }
                if($tipo_propiedad=="Venta")
                {
                    $resultArray["venta_".$year] += $row2->monto/1;
                }

                $resultArray["total_".$year] += $row2->monto/1;
            }
        }
    }

    // Finally, encode the array to JSON and output the results
    echo json_encode($resultArray);
}

// Close connections
mysqli_close($connection);