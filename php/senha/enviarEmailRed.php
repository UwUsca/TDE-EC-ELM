<?php

    date_default_timezone_get();

    $email = $_POST["email"];
    $token_red = $_POST["token_red"];

    require '../PHPMailer/PHPMailerAutoload.php';

    $tituloEmail = "Redefina sua senha na NetZon";
    $message = "<!DOCTYPE html>
    <html lang='pt'>
    <head></head>
    <body>
        <div id='email' value ='$email' hidden>
        </div>
        <div>
            <a> Seu token é: $token_red </a>
        </div>
        <a> Redefina sua senha clicando <a href='http://localhost/git/TDE-EC-ELM/paginas/trocaSenha.html'>aqui</a>.</a>
    </body>
    </html>";

    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = 2;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'ssl';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 465;
    $mail->Username = 'netzon1000';
    $mail->Password = 'bolinho@1234';
    $mail->setFrom('netzon1000@gmail.com', 'Netzon');
    $mail->addAddress($email, '');
    $mail->Subject = $tituloEmail;
    $mail->msgHTML($message);

    $mail->send();

?>