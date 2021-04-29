<?php

session_start();

include_once("../config/conexao.php");

$entrar = filter_input(INPUT_POST, 'bRecuperar', FILTER_SANITIZE_STRING);

if ($entrar) {
    
    $emailRecuparar = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

    if((!empty($emailRecuparar)) AND (!empty($emailRecuparar))){
        
        // LIMIT pega o usuário no banco de dados
        $result_usuario = "SELECT * FROM usuarios WHERE email='$emailRecuparar' LIMIT 1";
        $resultado_usuario = mysqli_query($conn, $result_usuario);

        if($resultado_usuario){
            
            $row_usuario = mysqli_fetch_array($resultado_usuario);

            if($emailRecuparar == $row_usuario['email']){
     
                $_SESSION['email'] = $row_usuario['email'];
                if($row_usuario['email'] == 1){
                    header("Location: ");
                } else {
                    header("Location: ");
                }
                exit;
            }
        }
    }
}

?>