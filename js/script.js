var typed = new Typed('.type', {
    strings: ["Poznaj mnie!", "Sprawdź moje projekty!"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});


//Changing navigation//
const changePhotoDown = function () {
    if (window.scrollY >= 10 && (window.matchMedia('(min-width: 992px)').matches)) {
        document.querySelector('nav').classList.add("custom-nav-down");

    }
    if (window.scrollY < 10 && (window.matchMedia('(min-width: 992px)').matches)) {
        document.querySelector('nav').classList.remove("custom-nav-down");
    }
}

const changePhotoLeft = function () {
    if (window.matchMedia('(max-width: 992px)').matches) {
        document.querySelector('nav').classList.add("custom-nav-down");
    } else {
        document.querySelector('nav').classList.remove("custom-nav-down");
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
        $.scrollTo($('#projects-spy'), 800);
    });
    $('#nav-link2').click(function () {
        $.scrollTo($('#about-spy'), 800);
    });
    $('#nav-link3').click(function () {
        $.scrollTo($('#skills-spy'), 800);
    });
    $('#nav-link4').click(function () {
        $.scrollTo($('#contact-spy'), 800);
    });
    $('#logo-spy').click(function () {
        $.scrollTo($('body'), 1000);
    });

    $('.back-top').click(function () {
        $.scrollTo($('body'), 1000);
    });

});