$(document).ready(function() {


// Add jQuery here



$('.image').click(function() {
  $('.image').removeClass('enlarge');
   $(this).toggleClass('enlarge');
 });



// FLASHING

 function modify() {
     $('.textflashstart').toggleClass("textflashend");



   }

   $(function() {
       $(document.textflashstart).ready(function() {
           setTimeout(modify, 3000);
       });


   });
















  });
