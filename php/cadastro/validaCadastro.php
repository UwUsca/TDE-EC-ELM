<?php

include_once("../config/conexao.php");

$token = $_POST["token"];

$resposta = mysqli_query($conn, "SELECT * FROM usuario WHERE token = '$token' ");

$respostaRow = mysqli_num_rows($resposta);

if($respostaRow == true){
    mysqli_query($conn, "UPDATE usuario SET validacao = 's' WHERE token = '$token' ");
    echo json_encode("s");
}else{
    echo json_encode("n");
}

mysqli_close($conn);
?>