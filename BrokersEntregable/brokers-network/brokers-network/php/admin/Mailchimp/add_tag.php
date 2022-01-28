<?php
require_once('../Libraries/vendor/autoload.php');

$mailchimp = new MailchimpMarketing\ApiClient();

$mailchimp->setConfig([
    'apiKey' => 'e3fb51a34e3cc0454f44d4f49fa6c494-us12',
    'server' => 'us12'
]);

$email = $_POST['email'];
$solicitud = $_POST['solicitud'];
$list_id = "e615156405";
$subscriber_hash = md5(strtolower($email));

try {
    $mailchimp->lists->updateListMemberTags($list_id, $subscriber_hash, [
        "tags" => [
            [
            "name" => $solicitud,
            "status" => "active"
            ]
        ]
    ]);
    echo "The return type for this endpoint is null";
} catch (MailchimpMarketing\ApiException $e) {
    echo $e->getMessage();
}