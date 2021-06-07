$(document).ready(function(){

comunicaServidorTelaFilmes();


});

function comunicaServidorTelaFilmes(){

    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "../php/validacao/validarSessao.php",
        
        success: function(retorno){
            if(retorno=="n"){
                window.location.href = "../paginas/login.html";
            }
        }



    });

}

var idPessoa = null;

function recebeUsuarioId(){
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "../php/login/usuarioId.php",

        success: function(retorno){
            idPessoa = retorno;
        }


    });
}