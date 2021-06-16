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

    $('.cardFilme').hover(function(){
        $('.capaFilme').toggleClass(".descricao")})

})
