<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "banco_ec_proj");

$usuarioId = $_SESSION["idUsuario"];

echo json_encode($usuarioId);

mysqli_close($conexao);

?>