$(document).ready(function(){

    $("#buttonCADASTRAR").click(function () {

        fConfirmacaoCadastro();

        if(verificarInputs() == true){
            sha256();
            fLocalComunicaServidorCadastro();
            fLocalEnviaEmailCadastro();
        }else{
            alert("erro");
        }


    });
    
})

function sha256(){
    var sha256 = sjcl.hash.sha256.hash($('#campoSenha2').val());
    var sha256_hexa = sjcl.codec.hex.fromBits(sha256);

    return sha256_hexa;
}

function fConfirmacaoCadastro(){

    var nome = $("#campoNome").val();
    var data = $("#campoNasc").val();
    var email = $("#campoEmail").val();
    var senha = $("#campoSenha1").val();
    var confirmaSenha = $("#campoSenha2").val();

    var numero = $("#campoNCartao").val();
    var validade = $("#campoVCartao").val();
    var cvv = $("#campoCVV").val();
    var titular = $("campoTCartao").val();
    var cpfCnpj = $("#campoCPF").val();

    
    if (nome == '') {//NOME
        $("#labelNome").css({"color": "#FA5858"})
        return false;
    } else {
        $('#labelNome').css({"color": ""})
    }
    if (data == '') {//DATA
        $("#labelData").css({"color": "#FA5858"})
        return false;
    } else {
        $('#labelData').css({"color": ""})
    }
    if (email == '') {//EMAIL
        $("#labelEmail").css({"color": "#FA5858"})
        return false;
    } else {
        $('#labelEmail').css({"color": ""})
    }
    if (senha == '') {//SENHA1
        $("#labelSenha1").css({"color": "#FA5858"})
        return false;
    } else {
        $('#labelSenha1').css({"color": ""})
    }   
    if (confirmaSenha == '') {//SENHA2
        $("#labelSenha2").css({"color": "#FA5858"})
        return false;
    } else {
        $('#labelSenha2').css({"color": ""})
    }
    if (numero == '') {//NUMERO
        $("#labelNumero").css({"color": "#FA5858"})
        return false;
    } else {
        $('#labelNumero').css({"color": ""})
    }

    if (validade == '') {//VALIDADE
        $("#labelValidade").css({"color": "#FA5858"})
        return false;
    } else {
        $('#labelValidade').css({"color": ""})
    }
    if (cvv == '') {//CVV
        $("#labelCVV").css({"color": "#FA5858"})
        return false;
    } else {
        $('#labelCVV').css({"color": ""})
    }
    
    if (titular == '') {//TITULAR
        $("#labelTitular").css({"color": "#FA5858"})
        return false;
    } else {
        $('#labelTitular').css({"color": ""})
    }
    if (cpfCnpj == '') {//CPF CNPJ
        $("#labelCPF").css({"color": "#FA5858"})
        return false;
    } else {
        $('#labelCPF').css({"color": ""})
    }


}

function verificarInputs(){

    var nome = $("#campoNome").val();
    var data = $("#campoNasc").val();
    var email = $("#campoEmail").val();
    var senha = $("#campoSenha1").val();
    var confirmaSenha = $("#campoSenha2").val();

    var numero = $("#campoNCartao").val();
    var validade = $("#campoVCartao").val();
    var cvv = $("#campoCVV").val();
    var titular = $("campoTCartao").val();
    var cpfCnpj = $("#campoCPF").val();

    if(nome=="" || data=="" || email=="" || senha =="" || confirmaSenha=="" || numero==""
     || validade=="" || cvv =="" || titular=="" || cpfCnpj ==""){
        return false;
    }else{
        if (confirmarSenha() == true) {
            return true
        } else {
            return false
        }
    }
}

function confirmarSenha() {
    var senha = $('#campoSenha1').val();
    var ConfSenha = $('#campoSenha2').val();

    if (senha != "" & ConfSenha != "" && senha == ConfSenha) {
        $('#labelSenha1').css({"color": ""})
        $("#labelSenha2").css({"color": ""})
        return true
    } else if (senha != confirmarSenha){
        $('#campoSenha1').css({"color": "#FA5858"})
        $('#campoSenha2').css({"color": "#FA5858"})
        $('#labelSenha1').css({"color": "#FA5858"})
        $("#labelSenha2").css({"color": "#FA5858"})
        return false
    }

}

function fLocalEnviaEmailCadastro(){
$.ajax({

    type: "POST",
    dataType: "json",
    url: "../php/email/confirmarCadastro.php",
    data:{
        email: $("#campoEmail").val(),
        token: token.toString(),
    },
});


}

var token = tokenEmail();

function tokenEmail(){
    var token = Math.random().toString(16).substr(2);

    return token;
}

function fLocalComunicaServidorCadastro() {

var senha = sha256();


$.ajax({

    type: "POST",
    dataType: "json",
    url: "../php/cadastro/cadastroUsuario.php",
    data:{ 
        nome: $("#campoNome").val(),
        data: $("#campoNasc").val(),
        email: $("#campoEmail").val(),
        senha: senha.toString(),
        numero: $("#campoNCartao").val(),
        validade: $("#campoVCartao").val(),
        cvv: $("#campoCVV").val(),
        titular: $("#campoTCartao").val(),
        cpf_cnpj: $("#campoCPF").val(),
        token: token.toString(),
},

    success: function (retorno) {

        if (retorno.funcao == "cadastroUsuario") {

            if (retorno.status == "s") {
                alert(retorno.mensagem);
                //window.location.href = "../index.html";
            } else {
                alert(retorno.mensagem);
            }

        }

    }

});

}