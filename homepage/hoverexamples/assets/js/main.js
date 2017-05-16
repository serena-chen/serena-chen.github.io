$(document).ready(function() {



  $('.number').mouseenter(function() {
     $('.footnote').addClass('showme');
   });

   $('.number').mouseleave(function() {
   $('.footnote').removeClass('showme');
 });

 $('.thumbnail').click(function() {
    $(this).toggleClass('enlarge');
  });
































  });
