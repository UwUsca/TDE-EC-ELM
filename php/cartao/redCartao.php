<?php

session_start();

include_once("../config/conexao.php");

$email = $_POST["email"];

$numero = $_POST["numero"];
$validade = $_POST["validade"];
$cvv = $_POST["cvv"];
$titular = $_POST["titular"];
$cpf_cnpj = $_POST["cpf_cnpj"];

$resultado = mysqli_query($conn, "SELECT * FROM usuario WHERE email = '$email'");

$resultadoRow = mysqli_num_rows($resultado);

if($resultadoRow == false){
    echo json_encode("n");

}else{
    mysqli_query($conn, "UPDATE usuario SET numero = '$numero', validade = '$validade', cvv = '$cvv', titular = '$titular', cpf_cnpj = '$cpf_cnpj' WHERE email = '$email'");
    echo json_encode("s");
}

mysqli_close($conn);

?>