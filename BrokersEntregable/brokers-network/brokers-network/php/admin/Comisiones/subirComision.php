<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";

$connection = db_connect();
$id_usuario = $_POST['id_usuario'];
$id_propiedad = $_POST['id_propiedad'];
$monto= $_POST['monto'];

$query = "SELECT * FROM comision where id_usuario=$id_usuario AND id_propiedad=$id_propiedad";

function archivar($connection,$id_propiedad)
{
    $sql_archivado = "UPDATE propiedad SET archivado = 1 WHERE id_propiedad = $id_propiedad";
    if ($result_archivado = mysqli_query($connection, $sql_archivado))
    {
        echo "1";
    }
    else{
        echo $connection->error;
    }
    mysqli_close($connection);
}

if ($result = mysqli_query($connection, $query))
{
    $id_comision=-1;
    while($row = $result->fetch_object())
    {
        $id_comision = $row->id_comision;
        $sql = "UPDATE comision SET monto = $monto WHERE id_comision = $id_comision";
        if ($result_c = mysqli_query($connection, $sql))
        {
            echo "1";
        }
        else{
            echo $connection->error;
        }
        //mysqli_close($connection);
        archivar($connection,$id_propiedad);

    }
    if($id_comision == -1)
    {
        $sql = "INSERT INTO comision (id_comision,
                                id_usuario, 
                                id_propiedad, 
                                id_cliente,
                                tipo,
                                monto)  
                      VALUES(null,
                            $id_usuario,
                            $id_propiedad, 
                            -1,
                            'propiedad',
                            $monto)";

        if ($result_c = mysqli_query($connection, $sql))
        {
            echo "1";
        }
        else{
            echo $connection->error;
        }
        archivar($connection,$id_propiedad);
       // mysqli_close($connection);
    }
}




/*
$r = db_query($sql);

if($r == true){
    echo "1";
}
else{
    echo "0";
}*/