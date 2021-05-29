<?php

    date_default_timezone_get();

    $email = $_POST["email"];

    require '../PHPMailer/PHPMailerAutoload.php';

    $tituloEmail = "confirme seu cadastro";
    $message = "seu token é: ";

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