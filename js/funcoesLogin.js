$(document).ready(function(){

    $("buttonLOGIN").click(function () {

        var sha256 = sjcl.hash.sha256.hash($('#senha').val());
        var sha256_hexa = sjcl.codec.hex.fromBits(sha256);

        $("#senha").val(sha256_hexa);

        if(fConfirmacaoLogin != false){
            fLocalComunicaServidorLogin();
        }
        

    });


})

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


function fLocalComunicaServidorLogin() {

    

    $.ajax({

        type: "POST",
        dataType: "json",
        url: "../php/login/login.php",
        data:{ 
            email: $("#email").val(),
            senha: $("#senha").val(),
    },

        success: function (retorno) {


            if (retorno.status == "s") {
                alert(retorno.mensagem);
                window.location.href = "../../index.html";
            } else {
                alert(retorno.mensagem);
            }

            
        }
    });
}