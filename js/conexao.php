<?php
//coneção com o servidor
$conect = mysql_connect("localhost", "root", "senha");

// Caso a conexão seja reprovada, exibe na tela uma mensagem de erro
if (!$conect) die ("<h1>Falha na conexão com o Banco de Dados!</h1>");

//Caso a conexão seja aprovada