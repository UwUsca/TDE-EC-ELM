$(document).ready(function(){

    $("#buttonLOG").click(function () {

        fConfirmacaoLogin();

        if(verificarInputsLogin() == true){
            sha256();
            fLocalComunicaServidorLogin();
        }else{
            alert("erro :(");
        }
        

    });


})

function sha256(){
    var sha256 = sjcl.hash.sha256.hash($('#senha').val());
    var sha256_hexa = sjcl.codec.hex.fromBits(sha256);

    return sha256_hexa;
}

function fConfirmacaoLogin(){
    var email = $("#email").val();
    var senha = $("#senha").val();

    if (email == '') {
        $("#labelEmail").css({"color": "#FA5858"})
        return false;
    } else {
        $('#labelEmail').css({"color": ""})
    }
    if (senha == '') {
        $("#labelSenha").css({"color": "#FA5858"})
        return false;
    } else {
        $('#labelSenha').css({"color": ""})
    }
    if(email=="" || senha ==""){
        return false;
    }
}

function verificarInputsLogin(){
    var email = $("#email").val();
    var senha = $("#senha").val();

    if(email=="" || senha ==""){
       return false;
   }
   return true;
}


function fLocalComunicaServidorLogin() {
    var senha = sha256();
    

    $.ajax({

        type: "POST",
        dataType: "json",
        url: "../php/login/login.php",
        data:{ 
            email: $("#email").val(),
            senha: senha.toString(),
        },

        success: function (retorno) {

            if(retorno == "s"){
                window.location.href = '../paginas/telaFilmes.html';
            } else if(retorno == "n") {
                alert("usuario nao cadastrado D:");
            }

        }
            
    });
}