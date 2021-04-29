<?php

include_once("../config/conexao.php");

// recebe dados do formulário
$titulo = filter_input(INPUT_POST, 'titulo', FILTER_SANITIZE_STRING);
$genero = filter_input(INPUT_POST,'genero', FILTER_SANITIZE_STRING);
$ano = filter_input(INPUT_POST, 'ano', FILTER_SANITIZE_NUMBER_INT);
$episodio = filter_input(INPUT_POST, 'episodio', FILTER_SANITIZE_NUMBER_INT);
$temporada = filter_input(INPUT_POST, 'temporada', FILTER_SANITIZE_NUMBER_INT);
$duracao = filter_input(INPUT_POST, 'duracao');
$relevancia = filter_input(INPUT_POST, 'relevancia', FILTER_SANITIZE_STRING);
$sinopse = filter_input(INPUT_POST, 'sinopse', FILTER_SANITIZE_STRING);
$trailler = filter_input(INPUT_POST, 'trailler', FILTER_SANITIZE_URL);

// echo "Nome: $nome <br>";
// echo "E-mail: $email <br>";

$result_series = "INSERT INTO series (titulo, genero, ano, episodio, temporada, duracao, relevancia, sinopse, trailler) VALUE ('$titulo', '$genero', '$ano', '$episodio', '$temporada', '$duracao', '$relevancia', '$sinopse', '$trailler')";

$resultado_series = mysqli_query($conn, $result_series);

$retorno["status"] = "n";
$retorno["funcao"] = "cadastroSeries";
$retorno["mensagem"] = "erro ao cadastrar série";

if ($resultado_series == true) {
    $retorno["status"] = "s";
    $retorno["mensagem"] = "séries cadastrado";
}

echo json_encode($retorno);
