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