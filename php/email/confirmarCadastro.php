<?php

    date_default_timezone_get();

    $email = $_POST["email"];
    $token = $_POST["token"];

    require '../PHPMailer/PHPMailerAutoload.php';

    $tituloEmail = "Confirme seu cadastro na NetZon";
    $message = "<!DOCTYPE html>
    <html lang='pt'>
    <head></head>
    <body>
        <div id='email' value ='$email' hidden>
        </div>
        <div>
            <a> Seu token é: $token </a>
        </div>
        <a> Continue seu cadastro clicando <a href='http://localhost/git/TDE-EC-ELM/paginas/confCadastro.html'>aqui</a>.</a>
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