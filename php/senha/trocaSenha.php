<?php

include_once("../config/conexao.php");

$senha = $_POST['senha'];
$token_red = $_POST['token_red'];

$resultado_red = mysqli_query($conn, "SELECT * FROM usuario WHERE token_red = '$token_red'");

$resultado_red_row = mysqli_num_rows($resultado_red);

if($resultado_red_row == false){
    echo json_encode('n');
}else{
    mysqli_query($conn, "UPDATE usuario SET senha = '$senha' WHERE token_red = '$token_red'");
    echo json_encode('s');
}

mysqli_close($conn);


?>