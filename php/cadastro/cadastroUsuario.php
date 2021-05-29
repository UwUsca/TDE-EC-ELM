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

// recebe dados do formulário
//$nome = filter_input(INPUT_POST, 'nome_completo', FILTER_SANITIZE_STRING);
//$nascimento = filter_input(INPUT_POST, 'data_nascimento');
//$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
//$senha = filter_input(INPUT_POST, 'senha');
//$numero_cartao = filter_input(INPUT_POST, 'numero_cartao', FILTER_SANITIZE_STRING);
//$validade_cartao = filter_input(INPUT_POST, 'validade_cartao', FILTER_SANITIZE_NUMBER_INT);
//$cvv = filter_input(INPUT_POST, 'cvv');
//$titular = filter_input(INPUT_POST, 'titular', FILTER_SANITIZE_NUMBER_INT);
//$cpf_cnpj = filter_input(INPUT_POST, 'cpf_cnpj', FILTER_SANITIZE_NUMBER_INT);

$result_usuario = "INSERT INTO usuario (nome, data, email, senha, numero, validade, cvv, titular, cpf_cnpj) VALUES ('$nome', '$data', '$email', md5('$senha'), '$numero', '$validade', '$cvv', '$titular', '$cpf_cnpj')";

$resultado_usuario = mysqli_query($conn, $result_usuario);

$retorno["status"] = "n";
$retorno["funcao"] = "cadastroUsuario";
$retorno["mensagem"] = "erro ao cadastrar usuario";

if ($resultado_usuario == true) {
    $retorno["status"] = "s";
    $retorno["mensagem"] = "usuario cadastrado";
}

echo json_encode($retorno);
