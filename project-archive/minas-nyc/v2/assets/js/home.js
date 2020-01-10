$(document).ready(function() {


  var myIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}
      x[myIndex-1].style.display = "block";
      setTimeout(carousel, 100); // Change image every 2 seconds
  }



// Jquery here

  $('.food-nav-link').click(function() {
      $('.food-menu-hidden-text').toggleClass('showme');

  });

  $('.catering-nav-link').click(function() {
      $('.catering-menu-hidden-text').toggleClass('showme');

  });


  $('.contact-link').click(function() {
      $('.contact-menu-hidden-text').toggleClass('showme');

  });
















  });
