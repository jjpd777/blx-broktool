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
$id_cliente = $_POST['id_cliente'];
$monto= $_POST['monto'];

$query = "SELECT * FROM comision where id_usuario=$id_usuario AND id_cliente=$id_cliente";

function archivar($connection,$id_cliente)
{
    $sql_archivado = "UPDATE cliente SET archivado = 1 WHERE id_cliente = $id_cliente";
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
        archivar($connection,$id_cliente);
        //mysqli_close($connection);
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
                            -1, 
                            $id_cliente,
                            'cliente',
                            $monto)";

        if ($result_c = mysqli_query($connection, $sql))
        {
            echo "1";
        }
        else{
            echo $connection->error;
        }
        //mysqli_close($connection);
        archivar($connection,$id_cliente);

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