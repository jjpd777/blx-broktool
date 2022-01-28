<?php
header("Access-Control-Allow-Origin: *");
date_default_timezone_set('America/Mexico_City');
setlocale(LC_ALL,"es_ES");

//require_once '../Libraries/mercadopago_php/vendor/autoload.php';

// SDK de Mercado Pago
require __DIR__ .  '../Libraries/mercadopago_php/vendor/autoload.php';

// Agrega credenciales
MercadoPago\SDK::setAccessToken('APP_USR-454392183286770-081623-f8bff8a8a6a60055a63693056f889955-186769432');

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();

$payment->transaction_amount = 141;
$payment->token = "YOUR_CARD_TOKEN";
$payment->description = "Ergonomic Silk Shirt";
$payment->installments = 1;
$payment->payment_method_id = "visa";
$payment->payer = array(
    "email" => "larue.nienow@hotmail.com"
);

$payment->save();

echo $payment->status;

/*MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 152;
$payment->token = "ff8080814c11e237014c1ff593b57b4d";
$payment->description = "Synergistic Aluminum Bench";
$payment->installments = 1;
$payment->payment_method_id = "visa";
$payment->payer = array(
    "email" => "carmella@yahoo.com"
);

$payment->save();


echo $payment->status;



$titulo	    = $_POST['titulo'];
$mensaje	= $_POST['mensaje'];
$token	    = $_POST['token'];

$fields = array(
    'app_id' => "3d7c0913-9109-4419-8419-f70d5453931d",
    'include_player_ids' => array($token),
    'url'=>"https://qualamexcontratos.azurewebsites.net/#!/resumenLegal?id_version=26"
);

$fields = json_encode($fields);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',
    'Authorization: Basic NjU5YjNmZWItYjkxMC00NGI3LTlmNTEtNDI5NjMxMTU4ZTA3'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_POST, TRUE);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

$response = curl_exec($ch);
curl_close($ch);*/
/*$response = "Holaa desde php";
echo $response;*/

?>
