var cadastroInvalido = false;

$(document).ready(function(){

    $('#bRegistrar').click(function(){
        window.location.href="cadastro.html"
    })
    $('#bRegistrari').click(function(){
        window.location.href="paginas/cadastro.html"
    })
    $('#bEntrar').click(function(){
        window.location.href="login.html"
    })
    $('#bEntrari').click(function(){
        window.location.href="paginas/login.html"
    })


    $("bRegistrar").click(function () {

        var sha256 = sjcl.hash.sha256.hash($('#campoSenha2').val());
        var sha256_hexa = sjcl.codec.hex.fromBits(sha256);

        $("#campoSenha2").val(sha256_hexa);

        fLocalComunicaServidor('form-cadastro-usuario', 'cadastro_usuario');

        return false;
    });
    $("bRegistrar").click(function () {


        fLocalComunicaServidor('form-cadastro-filmes', 'cadastroFilmes');

        return false;
    });
    $("bRegistrar").click(function () {


        fLocalComunicaServidor('form-cadastro-series', 'cadastroSeries');

        return false;
    });


    fConfirmaçãoCadastro();

})

function fConfirmaçãoCadastro(){
    $('#buttonCADASTRAR').click(function(){

        // Dados
        campoBranco("#campoNome")
        campoBranco("#campoNasc")
        campoBranco("#campoEmail")
        campoBranco("#campoSenha1")
        campoBranco("#campoSenha2")
        // Cartão
        campoBranco("#campoNCartao")
        campoBranco("#campoVCartao")
        campoBranco("#campoCVV")
        campoBranco("#campoTCartao")
        campoBranco("#campoCPF")

        validaSenha()

        if(cadastroInvalido == false){
            alert("Cadastro realizado com sucesso, estaremos enviando um email de confirmação!")
        }

    })


}

var alertas = 0;
function campoBranco(idCampo){
    var valor = $(idCampo).val();

    if(valor == '') {
        $(idCampo).addClass("inputErro");
        cadastroInvalido = true;
        alertas++;
        if (alertas == 1){
            alert("Verifique se todos os campos foram preenchidos")
        }
    } else {
        $(idCampo).removeClass("inputErro")
    }
    if (alertas == 5){
        alertas = 0;
    }
}

function validaSenha(){
    var senha = $("#campoSenha1").val();
    var senha2 = $("#campoSenha2").val();

    if(senha != ''){
        if (senha != senha2){
            alert("As senhas não coincidem!")
            $("#campoSenha1").val("")
            $("#campoSenha1").addClass("inputErro")
            $("#campoSenha2").val("")
            $("#campoSenha2").addClass("inputErro")
            cadastroInvalido = true;
        }
    }

}

function fLocalComunicaServidor(formulario, arquivo) {

    var dados = $("#" + formulario).serialize();

    $.ajax({

        type: "POST",
        dataType: "json",
        url: "TDE-EC-ELM/php/" + arquivo + ".php",
        data: dados,
        success: function (retorno) {

            if (retorno.funcao == "cadastroUsuario") {

                if (retorno.status == "s") {
                    alert(retorno.mensagem);
                    window.location.href = "../../index.html";
                } else {
                    alert(retorno.mensagem);
                }

            }

            if (retorno.funcao == "cadastroFilmes") {

                if (retorno.status == "s") {
                    alert(retorno.mensagem);
                    window.location.href = "../../index.html";
                } else {
                    alert(retorno.mensagem);
                }

            }

            if (retorno.funcao == "cadastroSeries") {

                if (retorno.status == "s") {
                    alert(retorno.mensagem);
                    window.location.href = "../../index.html";
                } else {
                    alert(retorno.mensagem);
                }

            }

            if(retorno.funcao == "login"){            
                if(retorno.status == "s"){
                    alert(retorno.mensagem);
                    window.location.href = "../../paginas/login.html";
                } else {
                    alert(retorno.mensagem);
                }
            }
        }

    });

}
