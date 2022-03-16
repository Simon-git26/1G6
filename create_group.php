<?php

const HTTP_OK = 200;
const HTTP_BAD_REQUEST = 400;
const HTTP_METHOD_NOT_ALLOWED = 405;

if (isset($_SERVER['HTTP_X_REQUEST_WITH']) && strtoupper($_SERVER['HTTP_X_REQUEST_WITH']) == 'XMLHTTPREQUEST') {
    $response_code = HTTP_BAD_REQUEST;
    $message = "Il manque le param ACTION";

    /*if ($_POST['action'] == "showData" && isset($_POST['number'])) {
        $response_code = HTTP_OK;
        $number = $_POST['number'];
        $message = "Bon score";
    }*/

    response($response_code, $message);
} else {

    $response_code = HTTP_METHOD_NOT_ALLOWED;
    $message = "Method not Allowed !";
    response($response_code, $message);
}


function response($response_code, $message)
{
    header('Content-Type: application/json');
    http_response_code($response_code);

    $response = [
        "response_code" => $response_code,
        "message" => $message,
    ];

    echo json_encode($response);
}
