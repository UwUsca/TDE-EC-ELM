<?php

include_once("../config/conexao.php");

// recebe dados do formulário
$nome = filter_input(INPUT_POST, 'campoNome', FILTER_SANITIZE_STRING);
$nascimento = filter_input(INPUT_POST, 'campoNasc');
$email = filter_input(INPUT_POST, 'campoEmail', FILTER_SANITIZE_EMAIL);
$senha = filter_input(INPUT_POST, 'senha_hash');

$result_usuario = "INSERT INTO usuarios (campoNome, campoNasc, email, senha) VALUE ('$nome', '$nascimento', '$email', md5('$senha'))";

$resultado_usuario = mysqli_query($conn, $result_usuario);

$retorno["status"] = "n";
$retorno["funcao"] = "cadastroUsuario";
$retorno["mensagem"] = "erro ao cadastrar usuario";

if ($resultado_usuario == true) {
    $retorno["status"] = "s";
    $retorno["mensagem"] = "usuario cadastrado";
}

echo json_encode($retorno);
