$(document).ready(function() {

  // $('.touchMeNot').on('mouseenter',function(e){
  //     var maxX = $(window).width() - $(this).width();
  //     var maxY = $(window).height() - $(this).height();
  //     $(this).css({
  //         'left':getRandomInt(0, maxX),
  //         'top':getRandomInt(0, maxY)
  //     });
  // });
  // function getRandomInt(min, max) {
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  // }


// Add jQuery here


// $('.a-dot').mouseenter(function() {
//         $('.a-dot').addClass('push');
// });
//
// $('.a-dot').mouseleave(function() {
//         $('.a-dot').removeClass('push');
// });

$("#move").mouseenter(function () {

    $(this).animate({
        top: Math.random() * 500
    }, 100);
    $(this).animate({
        left: Math.random() * 500
    }, 100);
    $('.p-dot').animate({
        top: Math.random() * 500
    }, 100);
    $('.p-dot').animate({
        left: Math.random() * 500
    }, 100);

});















});
