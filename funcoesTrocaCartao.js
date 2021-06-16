$(document).ready(function(){

    $("#confirma").click(function(){
        verificarVaziosCartao();
        if(verificarTudoCartao() == true){
            fLocalComunicaServidorCartao();
        }else{
            alert("Reveja os dados digitados");
        }
    })




});

function verificarVaziosCartao(){

    var email = $('#inputEmailC').val();

    var numero = $('#inputNumC').val();
    var validade = $('#inputValC').val();
    var cvv = $('#inputCvvC').val();
    var titular = $("#inputTitularC").val();
    var cpf = $('#inputCpfC').val();

    if(email == ""){
        $('#labelEmailC').css({"color":"#FA5858"})
    }else{
        $('#labelEmailC').css({"color":""})
    }

    if(numero == ""){
        $('#labelNumC').css({"color":"#FA5858"})
    }else{
        $('#labelNumC').css({"color":""})
    }

    if(validade == ""){
        $('#labelValC').css({"color":"#FA5858"})
    }else{
        $('#labelValC').css({"color":""})
    }    

    if(cvv == ""){
        $('#labelCvvC').css({"color":"#FA5858"})
    }else{
        $('#labelCvvC').css({"color":""})
    }

    if(titular == ""){
        $('#labelTitularC').css({"color":"#FA5858"})
    }else{
        $('#labelTitularC').css({"color":""})
    }

    if(cpf == ""){
        $('#labelCpfC').css({"color":"#FA5858"})
    }else{
        $('#labelCpfC').css({"color":""})
    }
}

function verificarTudoCartao(){


    var email = $('#inputEmailC').val();

    var numero = $('#inputNumC').val();
    var validade = $('#inputValC').val();
    var cvv = $('#inputCvvC').val();
    var titular = $("#inputTitularC").val();
    var cpf = $('#inputCpfC').val();


    if (email == "" || numero == "" || validade == "" || cvv == "" || titular == "" || cpf == ""){
        return false
    }

    return true;
    

}

function fLocalComunicaServidorCartao(){

    $.ajax({

        type: "POST",
        datatype: "JSON",
        url: "../php/cartao/redCartao.php",
        data:{
            email: $('#inputEmailC').val(),
            numero: $("#inputNumC").val(),
            validade: $("#inputValC").val(),
            cvv: $("#inputCvvC").val(),
            titular: $("#inputTitularC").val(),
            cpf_cnpj: $("#inputCpfC").val(),
        },

        success: function(retorno){
            alert("Dados redefinidos!");
        }

    })

}