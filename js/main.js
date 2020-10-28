$(function(){

    var ancho = $(window).width();
    
    if(ancho < 1000){
        $("#menu").addClass("hide-on-med-and-down");
        $("#card").removeClass("horizontal");
        $("#card-2").removeClass("horizontal");
        $("#book").removeClass("s4").addClass("s12");
        $("#book-2").removeClass("s4").addClass("s12");
        $("#book-3").removeClass("s4").addClass("s12");
    
    }

    $(".sidenav").ready(function(){
        $(".sidenav").sidenav();
    });

    


});