//Changing navigation//
const changePhotoDown = function () {
    if (window.scrollY >= 10 && (window.matchMedia('(min-width: 992px)').matches)) {
        document.querySelector('nav').classList.add("custom-nav-down");
        document.querySelector('.smaller').innerHTML = '<img src="img/logo-dark.png">';

    }
    if (window.scrollY < 10 && (window.matchMedia('(min-width: 992px)').matches)) {
        document.querySelector('nav').classList.remove("custom-nav-down");
        document.querySelector('.smaller').innerHTML = '<img src="img/logo.png">';
    }
}

const changePhotoLeft = function () {
    if (window.matchMedia('(max-width: 992px)').matches) {
        document.querySelector('.smaller').innerHTML = '<img src="img/logo-dark.png">';
    } else {
        document.querySelector('.smaller').innerHTML = '<img src="img/logo.png">';
    }
}

window.addEventListener('load', changePhotoLeft);
window.addEventListener('resize', changePhotoLeft);
window.addEventListener('load', changePhotoDown);
window.addEventListener('resize', changePhotoDown);
window.addEventListener('scroll', changePhotoDown);




//Showing button//
const showButton = function () {
    if (window.scrollY >= 350) {
        document.querySelector('.back-top').style.display = 'block';
    }
    if (window.scrollY < 350) {
        document.querySelector('.back-top').style.display = 'none';
    }
}

window.addEventListener('scroll', showButton);

//Scrolling animation//
jQuery(function ($) {

    $.scrollTo(0);

    $('#nav-link1').click(function () {
        $.scrollTo($('#home-spy'), 800);
    });
    $('#nav-link2').click(function () {
        $.scrollTo($('#about-spy'), 800);
    });
    $('#nav-link3').click(function () {
        $.scrollTo($('#services-spy'), 800);
    });
    $('#nav-link4').click(function () {
        $.scrollTo($('#portfolio-spy'), 800);
    });
    $('#nav-link5').click(function () {
        $.scrollTo($('#work-spy'), 800);
    });
    $('#nav-link6').click(function () {
        $.scrollTo($('#price-spy'), 800);
    });
    $('#nav-link7').click(function () {
        $.scrollTo($('#opinions-spy'), 800);
    });
    $('#nav-link8').click(function () {
        $.scrollTo($('#contact-spy'), 800);
    });


    $('.back-top').click(function () {
        $.scrollTo($('body'), 1000);
    });

});