  $(function(){

    var ancho = $(window).width();
    
    if(ancho < 1000){
        $("#menu").addClass("hide-on-med-and-down");
        $("#card").removeClass("horizontal").removeClass("cardHeight");
        $("#card-2").removeClass("horizontal").removeClass("cardHeight");
        $(".cardGrow").removeClass('s4').addClass('s6')
    
    }
    if(ancho < 750){
        $(".thanks").removeClass('offset-s9').addClass('offset-s8');
        $(".aboutText").removeClass('s6').addClass('s12');
        $(".aboutImg").removeClass('s6').addClass('s12');
        $(".aboutImg").removeClass('imgUser').removeClass('offset-s6');
        $(".parrafo").removeClass('s6').addClass('s12').removeClass('offset-s5');
        $(".off").removeClass('s5').addClass('s12').removeClass('offset-s7');
        
    
    }
    if(ancho < 500){
        $(".cardGrow").removeClass('s4').addClass('s12')
    
    }

    $(".sidenav").ready(function(){
        $(".sidenav").sidenav();
    });

    


});