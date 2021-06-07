$(document).ready(function(){

    $("#bEnviaEmailSenha").click(function(){
        verificarVazios();
        if(verificarVazios!=false){
            comunicaServidorRedSenha();
        }else{
            alert("erro");
        }
            
        
    })

});

function verificarVazios(){
    var email = $("#inputEmailRed").val();
    if(email==""){

        $("#labelEmailRed").css({"color":"#FA5858"})
        return false;

    }else{
        $("#labelEmailRed").css({"color":""})
    }
}

var tokenRed = gerarTokenRedSenha();

function gerarTokenRedSenha(){

    var tokenRed = Math.random().toString(16).substr(2);

    return tokenRed;
}

function comunicaServidorRedSenha(){



    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "../php/senha/recuperarSenha.php",
        data: {
            email:$("#inputEmailRed").val(),
            token_red: tokenRed.toString(),

        },

        success: function(retorno){
            if(retorno=="s"){
                fLocalEnviaRed();
                alert("Email enviado!")
                window.location.href = '../paginas/login.html'
            }else{
                alert("Reveja as informações")
            }
            
        }



    });
}

function fLocalEnviaRed(){
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "../php/senha/enviarEmailRed.php",
        data: {
            email:$("#inputEmailRed").val(),
            token_red: tokenRed.toString(),
        },

        success: function(retorno){

        }



    });



}