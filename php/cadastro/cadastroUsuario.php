<?php

include_once("../config/conexao.php");

$nome = $_POST["nome"];
$data = $_POST["data"];
$email = $_POST["email"];
$senha = $_POST["senha"];
$numero = $_POST["numero"];
$validade = $_POST["validade"];
$cvv = $_POST["cvv"];
$titular = $_POST["titular"];
$cpf_cnpj = $_POST["cpf_cnpj"];
$token = $_POST["token"];

$result_usuario = "INSERT INTO usuario (nome, data, email, senha, numero, validade, cvv, titular, cpf_cnpj, token, validacao) VALUES ('$nome', '$data', '$email', '$senha', '$numero', '$validade', '$cvv', '$titular', '$cpf_cnpj', '$token', 'n')";

$resultado_usuario = mysqli_query($conn, $result_usuario);

$retorno["status"] = "n";
$retorno["funcao"] = "cadastroUsuario";
$retorno["mensagem"] = "erro ao cadastrar usuario";

if ($resultado_usuario == true) {
    $retorno["status"] = "s";
    $retorno["mensagem"] = "usuario cadastrado";
}

echo json_encode($retorno);
