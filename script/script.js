//Event Handler
$(document).ready(function() {

    $('.mainSlider').slick({ //mainSlider
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1800,
        dots : true, 
        dotsClass : "main-dots", 
        appendArrows: false,
        draggable : false
        });

    $('.storeSlider').slick({ //storeSlider
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots : true, 
        dotsClass : "store-dots", 
        appendArrows: false,
        draggable : false
    })

});


$(".m8").click(function(){
    $('html, body').animate({
        scrollTop: 0 
     }, 800);
})

$(".mobile-menu").click(function(){
    $(".mobile-nav").fadeIn(300);
    $('html, body').addClass('scrollX');
    
})

$(".btn-close").click(function(){
    $(".mobile-nav").fadeOut(300);
    $('html, body').removeClass('scrollX');
})