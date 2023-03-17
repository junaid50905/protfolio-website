$(document).ready(function() {
    $('.person-card-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        arrows: false
    });
    //typed
    var typed = new Typed('.typed', {
        strings: ["Front-End Developer", "Programmer"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
    });

});