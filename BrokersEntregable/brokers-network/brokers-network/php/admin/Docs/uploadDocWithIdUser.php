<?php
header('Access-Control-Allow-Origin: *');
date_default_timezone_set('America/Mexico_City');

$archivo_type = $_GET['type'];
$id_usuario = $_GET['id_usuario'];
$folder = "";

include "../../connection.php";

if($archivo_type=="FOTOPERFIL")
{
    $folder="FotosPerfil";
}
else{
    if($archivo_type=="FOTOPORTADA")
    {
        $folder="FotosPortada";
    }
}



$filename = $_FILES['file']['name'];

$filename=htmlentities($filename, ENT_QUOTES);
$ext = pathinfo($filename, PATHINFO_EXTENSION);
if(!mkdir($folder."/", 0777 , true)){
    $error = error_get_last();
}
$random = strtotime("now") * 1000;

$pathName = $folder."/".$random.".".$ext;
move_uploaded_file( $_FILES['file']['tmp_name'] , $pathName);
$error = error_get_last();

if($archivo_type=="FOTOPERFIL")
{
    $sql = "UPDATE usuario SET fotoPerfil = '$pathName' WHERE id_usuario = $id_usuario";
}
else{
    if($archivo_type=="FOTOPORTADA")
    {
        $sql = "UPDATE usuario SET fotoPortada = '$pathName' WHERE id_usuario = $id_usuario";
    }
}

$r = db_query($sql);

echo $pathName;

?>