$(document).ready(function() {


// Add jQuery here




$('.header-menu').mouseenter(function() {
    $('.header-info').addClass('showme');
    $('.header-home').addClass('showme');

    $('.header-title').addClass('hideme');


});

$('.header-menu').mouseleave(function() {
    $('.header-info').removeClass('showme');
    $('.header-home').removeClass('showme');

    $('.header-title').removeClass('hideme');
});


$('.self_harvest-image').hover(function() {
    $('.self_harvest-title').toggleClass('showme');

});

$('.invitro-image').hover(function() {
    $('.invitro-title').toggleClass('showme');

});

$('.else-image').hover(function() {
    $('.else-title').toggleClass('showme');

});

$('.elodea-image').hover(function() {
    $('.elodea-title').toggleClass('showme');

});

$('.feastbound-image').hover(function() {
    $('.feastbound-title').toggleClass('showme');

});

$('.scenescenza-image').hover(function() {
    $('.scenescenza-title').toggleClass('showme');

});

$('.biomicro-image').hover(function() {
    $('.biomicro-title').toggleClass('showme');

});









  });
