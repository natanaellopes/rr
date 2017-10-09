<?php

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

$html = "Contato enviado pelo site" . "\n";
$html .= "Nome: $name" . "\n";
$html .= "Email: $email" . "\n";
$html .= "Mensagem: $message" . "\n";
$html .= "Enviado em " . date('Y-m-d H:i:s');

mail('natanael5889@gmail.com', 'Contato enviado pelo site', $html);
