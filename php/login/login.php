<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "banco_ec_proj");

$email = $_POST["email"];
$senha = $_POST["senha"];

$resultado = mysqli_query($conexao, "SELECT * FROM usuario WHERE email = '$email' and senha = '$senha'  and validacao = 's'");

$resultadoRow = mysqli_num_rows($resultado);

$retorno["status"] = "n";
$retorno["funcao"] = "login";
$retorno["mensagem"] = "usuario não cadastrado";

if(mysqli_num_rows($resultado) > 0){
    
    $registro = mysqli_fetch_assoc($resultado);

    $_SESSION["email"] = $registro["email"];
    $_SESSION["inicio"] = time();
    $_SESSION["tempolimite"] = 15;
    $_SESSION["id"] = session_id();
    $_SESSION["idUsuario"] = $registro["id"];

    $retorno["status"] = "s";
    $retorno["mensagem"] = "usuario cadastrado";

}

if($resultadoRow == false){
    echo json_encode("n");
}else{
    echo json_encode("s");
}

mysqli_close($conexao);

?>
