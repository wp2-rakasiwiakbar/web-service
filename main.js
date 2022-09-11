$(document).ready(function(){


    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('header').css({'background':'#EE6983','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }else{
            $('header').css({'background':'none','box-shadow':'none'});
        }
    });


    $('.according-header').click(function(){
        $('.according .according-body').slideUp();
        $(this).next('.according-body').slideDown();
        $('.according .according-header span').text('+');
        $(this).children('span').text('-');
    });

});