<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 11/12/2017
 * Time: 03:30 PM
 */


header("Access-Control-Allow-Origin: *");

include "../../connection.php";

$id_meta = $_POST['id_meta'];
$meta = $_POST['meta'];
$t_meta = $_POST['t_meta'];
$year = $_POST['year'];
$id_usuario = $_POST['id_usuario'];

if($id_meta != -1)
{
    $sql = "UPDATE meta SET $t_meta = '$meta' WHERE id_meta = $id_meta";

    $r = db_query($sql);
}
else{
    $sql = "INSERT INTO meta (id_meta,
                                id_usuario, 
                                $t_meta, 
                                year)  
                      VALUES(null,
                            $id_usuario,
                            '$meta', 
                            '$year')";
    $r = db_query($sql);
}



if($r == true){
    echo "1";
}
else{
    echo "0";
}