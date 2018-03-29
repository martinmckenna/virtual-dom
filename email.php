<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$content = trim(file_get_contents("php://input"));
$content = json_decode($content);

file_put_contents('logs.txt', print_r($content, true)."\n\n", FILE_APPEND);
