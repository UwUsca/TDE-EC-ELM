$(document).ready(function(){

    $("#bCriaSenha").click(function(){
        verificarVazios();
        if(verificarVazios!=false){
            trocaSenhaServidor();
        }else{
            alert("erro");
        }
            
        
    })

});

function verificarVazios() {
    var senha = $('#inputSenha').val();
    var confSenha = $('#inputSenhaConf').val();
    var tokenRed = $('#inputTokenSenha').val();

    if (senha == '') {
        $("#labelSenha").css({"color": "#FA5858"})
    } else {
        $('#labelSenha').css({"color": ""})
    }
    if (confSenha == '') {
        $("#labelSenhaConf").css({"color": "#FA5858"})
    } else {
        $('#labelSenhaConf').css({"color": ""})
    }
    if (tokenRed == '') {
        $("#labelTokenSenha").css({"color": "#FA5858"})
    } else {
        $('#labelTokenSenha').css({"color": ""})
    }

}

function conSenha() {
    var senha = $('#inputSenha').val();
    var confSenha = $('#inputSenhaConf').val();

    if(senha != "" & confSenha != "" && senha == confSenha){
        $('#labelSenha').css({"color": ""})
        $("#labelSenhaConf").css({"color": ""})
        return true
    }else if (senha != confSenha){
        $('#inputSenha').css({"color": "#FA5858"})
        $('#inputSenhaConf').css({"color": "#FA5858"})
        $('#labelSenha').css({"color": "#FA5858"})
        $("#labelSenhaConf").css({"color": "#FA5858"})
        return false
    }
}

function verificarTudo() {
    var senha = $('#inputSenha').val();
    var confSenha = $('#inputSenhaConf').val();
    var tokenRed = $('#inputTokenSenha').val();

    if (senha == "" || confSenha == "" || tokenRed == ""){
        return false
    }else{
        if (conSenha() == true){
            return true
        }else{
            return false
        }
    }
}

function sha256(){
    var sha256 = sjcl.hash.sha256.hash($('#inputSenha').val());
    var sha256_hexa = sjcl.codec.hex.fromBits(sha256);

    return sha256_hexa;
}

function trocaSenhaServidor(){

    senhaHash = sha256();

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/senha/trocaSenha.php",
        data: {
            senha:senhaHash.toString(),
            token_red: $("#inputTokenSenha").val(),
        },

        success: function(retorno){
            if(retorno == 's'){
                alert("senha alterada");
            }else{
                alert("cheque as informações");
            }
        }



    });


}