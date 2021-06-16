$(document).ready(function(){

    $("#bValidaEmail").click(function(){
        verificarVazios();
        if(verificarVazios!=false){
            comunicaServidorConf();
        }else{
            alert("erro");
        }
            
        
    })

});

function verificarVazios(){
    var token = $("#tokenConf").val();
    if(token==""){

        $("#labelTokenConf").css({"color":"#FA5858"})
        return false;

    }else{
        $("#labelTokenConf").css({"color":""})
    }
}

function comunicaServidorConf(){
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "../php/cadastro/validaCadastro.php",
        data: {
            token:$("#tokenConf").val(),

        },

        success: function(retorno){
            if(retorno=="s"){
                alert("Cadastro confirmado!")
                window.location.href = '../paginas/login.html'
            }else{
                alert("Reveja as informações")
            }
            
        }



    });
}