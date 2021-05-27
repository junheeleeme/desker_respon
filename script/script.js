//Variables




//Functions



//Event Handler

$(document).ready(function() {

    $('.mainSlider').slick({ //mainSlider
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
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

