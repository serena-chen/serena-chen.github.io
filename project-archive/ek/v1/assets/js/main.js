$(document).ready(function() {


// Add jQuery here


$(function() {
  $(".rslides").responsiveSlides();
});



$('.client-link').click(function() {
    $('.hidden-text-client').toggleClass('showme');
    $('body').toggleClass('changebg');

});

$('.project-link').click(function() {
    $('.hidden-text-project').toggleClass('showme');
    $('body').toggleClass('changebg');

});

















  });
