$(document).ready(function() {


/* SHOW CURSOR IMAGE ON HOVER */


  var $img1 = $('.hover__image1');
  $img1.hide();
  $('.poster1').mousemove(function(e) {
      $img1.stop(1, 1).fadeIn();
      $('.hover__image1').offset({
          top: 300 + e.pageY - $img1.outerHeight(),
          left: 130 + e.pageX - ($img1.outerWidth()/2)
      });
  }).mouseleave(function() {
      $img1.fadeOut();
  });


  var $img2 = $('.hover__image2');
  $img2.hide();
  $('.poster2').mousemove(function(e) {
      $img2.stop(1, 1).fadeIn();
      $('.hover__image2').offset({
          top: 200 + e.pageY - $img2.outerHeight(),
          left: 150 + e.pageX - ($img2.outerWidth()/2)
      });
  }).mouseleave(function() {
      $img2.fadeOut();
  });

  var $img3 = $('.hover__image3');
  $img3.hide();
  $('.poster3').mousemove(function(e) {
      $img3.stop(1, 1).fadeIn();
      $('.hover__image3').offset({
          top: 200 + e.pageY - $img3.outerHeight(),
          left: 150 + e.pageX - ($img3.outerWidth()/2)
      });
  }).mouseleave(function() {
      $img3.fadeOut();
  });


  var $img4 = $('.hover__image4');
  $img4.hide();
  $('.poster4').mousemove(function(e) {
      $img4.stop(1, 1).fadeIn();
      $('.hover__image4').offset({
          top: 200 + e.pageY - $img4.outerHeight(),
          left: 150 + e.pageX - ($img4.outerWidth()/2)
      });
  }).mouseleave(function() {
      $img4.fadeOut();
  });


  var $img5 = $('.hover__image5');
  $img5.hide();
  $('.poster5').mousemove(function(e) {
      $img5.stop(1, 1).fadeIn();
      $('.hover__image5').offset({
          top: 200 + e.pageY - $img5.outerHeight(),
          left: 150 + e.pageX - ($img5.outerWidth()/2)
      });
  }).mouseleave(function() {
      $img5.fadeOut();
  });


  var $img52 = $('.hover__image52');
  $img52.hide();
  $('.poster5_2').mousemove(function(e) {
      $img52.stop(1, 1).fadeIn();
      $('.hover__image52').offset({
          top: 200 + e.pageY - $img52.outerHeight(),
          left: 150 + e.pageX - ($img52.outerWidth()/2)
      });
  }).mouseleave(function() {
      $img52.fadeOut();
  });






/* PLAy SOUND ON HOVER */

var audioPoster1 = document.createElement('audio');
audioPoster1.setAttribute('src', 'assets/images/poster1.mp3');
$.get();
audioPoster1.addEventListener("load", function() {
  audioPoster1.play();
}, true);


var audioPoster2 = document.createElement('audio');
audioPoster2.setAttribute('src', 'assets/images/poster2.mp3');
$.get();
audioPoster2.addEventListener("load", function() {
  audioPoster2.play();
}, true);

var audioPoster3 = document.createElement('audio');
audioPoster3.setAttribute('src', 'assets/images/poster3.mp3');
$.get();
audioPoster3.addEventListener("load", function() {
  audioPoster3.play();
}, true);

var audioPoster4 = document.createElement('audio');
audioPoster4.setAttribute('src', 'assets/images/poster4.mp3');
$.get();
audioPoster4.addEventListener("load", function() {
  audioPoster4.play();
}, true);


var audioPoster5 = document.createElement('audio');
audioPoster5.setAttribute('src', 'assets/images/poster5.mp3');
$.get();
audioPoster5.addEventListener("load", function() {
  audioPoster5.play();
}, true);

var audioPoster52 = document.createElement('audio');
audioPoster52.setAttribute('src', 'assets/images/poster5_v2.mp3');
$.get();
audioPoster52.addEventListener("load", function() {
  audioPoster52.play();
}, true);




$(".poster1").hover(
  function() {
    audioPoster1.play();
  },
  function() {
    audioPoster1.pause();
  }
);


$(".poster2").hover(
  function() {
    audioPoster2.play();
  },
  function() {
    audioPoster2.pause();
  }
);

$(".poster3").hover(
  function() {
    audioPoster3.play();
  },
  function() {
    audioPoster3.pause();
  }
);

$(".poster4").hover(
  function() {
    audioPoster4.play();
  },
  function() {
    audioPoster4.pause();
  }
);


$(".poster5").hover(
  function() {
    audioPoster5.play();
  },
  function() {
    audioPoster5.pause();
  }
);

$(".poster5_2").hover(
  function() {
    audioPoster52.play();
  },
  function() {
    audioPoster52.pause();
  }
);

















  });
