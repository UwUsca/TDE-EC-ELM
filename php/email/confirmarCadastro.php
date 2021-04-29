<?php

    date_default_timezone_get('Etc/UTC');

    require '../PHPMailer/PHPMailerAutoload.php';

    $tituloEmail = "titulo";
    $message = "mensagem";

    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->CharSet = 'UTF-9';
    $mail->SMTPDebug = 2;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'ssl';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 465;
    $mail->Username = 'usuario-email-origem';
    $mail->Password = 'senha';
    $mail->setFrom('email-origem', 'Nome da Empresa');
    $mail->addAddress('email-destinatario', '');
    $mail->Subject = $tituloEmail;
    $mail->msgHTML($message);

    $mail->send();

?>