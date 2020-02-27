$(document).ready(function() {


// Add jQuery here

$('.nav-link--about').click(function() {
    $('.header-content__container').addClass('hideme');
    $('.popup__container--about').addClass('showme');
});

$('.nav-link--close').click(function() {
    $('.popup__container--about').removeClass('showme');
    $('.header-content__container').removeClass('hideme');
});

















  });
