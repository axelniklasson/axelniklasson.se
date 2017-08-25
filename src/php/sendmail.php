<?php

header("Access-Control-Allow-Origin: *");

// Fetch token for mailman
$token = file_get_contents('./token.txt', true);

// Extract data from request
$sender = "From: " . $_POST["name"] . " <" . $_POST["email"] . ">";
$message = $_POST["message"];

// Build and send request
$url = 'https://mailman.axelniklasson.se/send';
$data = array(
    'from' => $sender,
    'to' => 'hello@axelniklasson.se',
    'subject' => '[axelniklasson.se] Nytt meddelande',
    'text' => $message);

$options = array(
    'http' => array(
        'header' => array(
            'Content-type: application/json',
            'Token: ' . $token
        ),
        'method'  => 'POST',
        'content' => json_encode($data)
    )
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) {
    header("HTTP/1.1 500 INTERNAL SERVER ERROR");
    echo json_encode(array('status' => 'failure'));
} else {
    header("HTTP/1.1 200 OK");
    echo json_encode(array('status' => 'success'));
}

?>
