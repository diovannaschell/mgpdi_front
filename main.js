$(document).ready(function(){
    $('.sidenav').sidenav();

    $(".dropdown-trigger").dropdown({ hover: true });

});

$("#biblioteca").on('click', function () {
    if($("#content_biblioteca").is(':visible')){
        $("#content_biblioteca").slideUp();
    }else{
        $("#content_biblioteca").slideDown(200);
    }
});

$("#profissionais").on('click', function () {
    if($("#content_profissionais").is(':visible')){
        $("#content_profissionais").slideUp();
    }else{
        $("#content_profissionais").slideDown(200);
    }
});

$(".linguagem").on('click', function(){
    if($("#menuLinguas").is(':visible')){
        $("#menuLinguas").hide();
    }else{
        $("#menuLinguas").css('display', 'flex');
    }
});

$("#brasil").on('click', function () {
   $("#flag").html('<img src="imagens/brasil.png" height="25">');
    $("#menuLinguas").hide();
});


$("#espanha").on('click', function () {
    $("#flag").html('<img src="imagens/espanha.png" height="25">');
    $("#menuLinguas").hide();
});

$("#close").on('click', function () {
    $('.sidenav').sidenav();
});