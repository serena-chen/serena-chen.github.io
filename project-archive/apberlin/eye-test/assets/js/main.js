$(document).ready(function() {


  var balls = document.getElementsByClassName("eyeball");
  document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    //event.clientX => get the horizontal coordinate of the mouse
    //event.clientY => get the Vertical coordinate of the mouse
    //window.innerWidth => get the browser width
    //window.innerHeight => get the browser height

    for(var i=0;i<2;i++){
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = "translate(-"+x+",-"+y+")";
    }
  }


// Add jQuery here

$('.eye__container , .title').click(function() {
      $('.eye').toggleClass('squint');


});


$('input.email').hover(function() {
        $('.eye').removeClass('squint');
        $('.eyelid').toggleClass('show');
});


$('.button').hover(function() {
        $('.eye').removeClass('squint');
        $('.eyeball').toggleClass('pinhole');
});


$('.mail').hover(function() {
        $('.eye').removeClass('squint');
        $('.left-eyelid').toggleClass('show2');
});

$('.ig').hover(function() {
        $('.eye').removeClass('squint');
        $('.right-eyelid').toggleClass('show2');
});
















  });
