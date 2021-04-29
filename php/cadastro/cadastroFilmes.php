<?php

include_once("../config/conexao.php");

// recebe dados do formulário
$titulo = filter_input(INPUT_POST, 'titulo', FILTER_SANITIZE_STRING);
$genero = filter_input(INPUT_POST,'genero', FILTER_SANITIZE_STRING);
$ano = filter_input(INPUT_POST, 'ano', FILTER_SANITIZE_NUMBER_INT);
$duracao = filter_input(INPUT_POST, 'duracao');
$relevancia = filter_input(INPUT_POST, 'relevancia', FILTER_SANITIZE_STRING);
$sinopse = filter_input(INPUT_POST, 'sinopse', FILTER_SANITIZE_STRING);
$trailler = filter_input(INPUT_POST, 'trailler', FILTER_SANITIZE_URL);

// echo "Nome: $nome <br>";
// echo "E-mail: $email <br>";

$result_filmes = "INSERT INTO filmes (titulo, genero, ano, duracao, relevancia, sinopse, trailler) VALUE ('$titulo', '$genero', '$ano', '$duracao', '$relevancia', '$sinopse', '$trailler')";

$resultado_filmes = mysqli_query($conn, $result_filmes);

$retorno["status"] = "n";
$retorno["funcao"] = "cadastroFilmes";
$retorno["mensagem"] = "erro ao cadastrar filme";

if ($resultado_filmes == true) {
    $retorno["status"] = "s";
    $retorno["mensagem"] = "filme cadastrado";
}

echo json_encode($retorno);
