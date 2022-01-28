<?php
/**
 * Created by PhpStorm.
 * User: DevGYO02
 * Date: 16/01/2018
 * Time: 01:02 PM
 */


header("Access-Control-Allow-Origin: *");

include "connection.php";


$sql = "ALTER TABLE `ingreso` ADD `facturado` INT NOT NULL DEFAULT '0' AFTER `id_plantel`;";

$r = db_query($sql);

if ($r == true) {

    echo "1";

} else {
    echo "0";
}