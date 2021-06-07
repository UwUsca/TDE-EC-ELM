<?php

include_once("../config/conexao.php");

$email = $_POST["email"];
$token_red = $_POST["token_red"];

$resultado_red = mysqli_query($conn, "SELECT * FROM usuario WHERE email = '$email'");

$resultado_red_row = mysqli_num_rows($resultado_red);

if($resultado_red_row == false){
    echo json_encode('n');
}else{
    mysqli_query($conn, "UPDATE usuario SET token_red = '$token_red' WHERE email = '$email'");
    echo json_encode('s');
}

mysqli_close($conn);

?>