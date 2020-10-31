$(function(){

    var ancho = $(window).width();
    
    if(ancho < 1000){
        $("#menu").addClass("hide-on-med-and-down");
        $("#card").removeClass("horizontal").removeClass("cardHeight");
        $("#card-2").removeClass("horizontal").removeClass("cardHeight");
        $(".cardGrow").removeClass('s4').addClass('s6')
    
    }
    if(ancho < 500){
        $(".cardGrow").removeClass('s4').addClass('s12')
    
    }

    $(".sidenav").ready(function(){
        $(".sidenav").sidenav();
    });

    


});