<?php

session_start();

include_once ("../config/conexao.php");

// recebe dados do formulário
$senha = filter_input(INPUT_POST, 'senha');
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

// echo "Nome: $nome <br>";
// echo "E-mail: $email <br>";

$result_usuario = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha' ";

$resultado_usuario = mysqli_query($conn, $result_usuario);

$retorno["status"] = "n";
$retorno["funcao"] = "login";
$retorno["mensagem"] = "usuario não cadastrado";

if(mysqli_num_rows($resultado_usuario) > 0){
    
    $registro = mysqli_fetch_assoc($resultado_usuario);

    $_SESSION["email"] = $registro["email"];
    $_SESSION["inicio"] = time();
    $_SESSION["tempolimite"] = 15;
    $_SESSION["id"] = session_id();

    $retorno["status"] = "s";
    $retorno["mensagem"] = "usuario cadastrado";

}

print_r($_SESSION);

echo json_encode($retorno);
