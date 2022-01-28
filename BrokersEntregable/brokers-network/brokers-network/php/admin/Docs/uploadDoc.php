<?php
header('Access-Control-Allow-Origin: *');
date_default_timezone_set('America/Mexico_City');

$archivo_type = $_GET['type'];
$folder = "";
if($archivo_type=="FOTOPERFIL")
{
    $folder="FotosPerfil";
}
else{
    if($archivo_type=="CURP")
    {
        $folder="Curp";
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

echo $pathName;

?>