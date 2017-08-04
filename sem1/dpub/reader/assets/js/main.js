$(document).ready(function() {



  $('.imagelinks2').mouseenter(function() {
     $('.caption').addClass('showme');
   });

   $('.imagelinks2').mouseleave(function() {
   $('.caption').removeClass('showme');
 });

 $('.thumbnail').click(function() {
    $(this).toggleClass('enlarge');
  });


  $('document').ready(function () {
      $('#play').click(function () {
          var audio = {};
          audio["walk"] = new Audio();
          audio["walk"].src = "./assets/audio/intro1.mp3"
          audio["walk"].addEventListener('load', function () {
              audio["walk"].play();
          });
      });
  });































  });
