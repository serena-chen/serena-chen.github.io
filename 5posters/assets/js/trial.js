$(document).ready(function() {


/* SHOW TEXT ON HOVER */


$('.subtitle').mouseenter(function() {
   $('.subtitle').addClass('showme');
 });

 $('.subtitle').mouseleave(function() {
    $('.subtitle').removeClass('showme');
  });


  $('.rollover').mouseenter(function() {
     $('.felixdates').addClass('showme');
     $('.rollover').addClass('changecolor');
   });

   $('.rollover').mouseleave(function() {
      $('.felixdates').removeClass('showme');
      $('.rollover').removeClass('changecolor');
    });











  });
