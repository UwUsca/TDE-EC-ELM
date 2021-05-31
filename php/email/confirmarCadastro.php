<?php

    date_default_timezone_get();

    $email = $_POST["email"];
    $token = $_POST["token"];

    require '../PHPMailer/PHPMailerAutoload.php';

    $tituloEmail = "Confirme seu cadastro na NetZon";
    $message = "O seu token é: $token";

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