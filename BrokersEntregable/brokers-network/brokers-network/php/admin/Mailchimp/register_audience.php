<?php

require_once('../Libraries/vendor/autoload.php');

$mailchimp = new \MailchimpMarketing\ApiClient();

$mailchimp->setConfig([
'apiKey' => 'e3fb51a34e3cc0454f44d4f49fa6c494-us12',
'server' => 'us12'
]);

$list_id = "e615156405";

$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
/*
$response = $mailchimp->ping->get();
print_r($response);*/

try {
    $response = $mailchimp->lists->addListMember($list_id, [
        "email_address" => $email,
        "status" => "subscribed",
        "merge_fields" => [
            "NOMBRE" => $name,
            "APELLIDO" => $lastname,
            "CEL"=> $phone,
        ]
    ]);
    echo json_encode($response);
} catch (MailchimpMarketing\ApiException $e) {
    echo json_encode($e);
}