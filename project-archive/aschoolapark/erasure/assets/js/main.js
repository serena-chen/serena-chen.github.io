$(document).ready(function() {


// Add jQuery here


// $('.button').hover(function() {
//     $(this).toggleClass('button-hover');
//
// });

$('.main-body-text').mouseenter(function() {
    $(this).addClass('transform-text');

});

$('.main-body-text').mouseleave(function() {
    $(this).removeClass('transform-text');

});



// TEXT LINK ---ADD POPUP IMAGES

$('.text-link').click(function() {
    $('.link-image').addClass('show-image');

});

$('.link-image').click(function() {
    $(this).removeClass('show-image');

});













  });
