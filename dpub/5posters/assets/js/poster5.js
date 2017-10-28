$(document).ready(function() {


  /* SHOW CURSOR IMAGE ON HOVER */


  var $img4 = $('.hover__image4');
  $img4.hide();
  $('.previous').mousemove(function(e) {
      $img4.stop(1, 1).fadeIn();
      $('.hover__image4').offset({
          top: 90 + e.pageY - $img4.outerHeight(),
          left: 70 + e.pageX - ($img4.outerWidth()/2)
      });
  }).mouseleave(function() {
      $img4.fadeOut();
  });

    var $img52 = $('.hover__image52');
    $img52.hide();
    $('.next , .previous2').mousemove(function(e) {
        $img52.stop(1, 1).fadeIn();
        $('.hover__image52').offset({
            top: 90 + e.pageY - $img52.outerHeight(),
            left: 70 + e.pageX - ($img52.outerWidth()/2)
        });
    }).mouseleave(function() {
        $img52.fadeOut();
    });


/* BOX TOGGLE ON HOVER */

  $('.box').mouseenter(function() {
     $(this).toggleClass('disappear');
   });

   $('.boxv2').mouseenter(function() {
      $(this).toggleClass('disappear');
    });




/* SOUND VARIABLES */

        var audioPower = document.createElement('audio');
        audioPower.setAttribute('src', 'assets/images/powerdown.mp3');
        $.get();
        audioPower.addEventListener("load", function() {
          audioPower.play();
        }, true);

        var audioPowerup = document.createElement('audio');
        audioPowerup.setAttribute('src', 'assets/images/powerup.mp3');
        $.get();
        audioPowerup.addEventListener("load", function() {
          audioPowerup.play();
        }, true);

        var audioName = document.createElement('audio');
        audioName.setAttribute('src', 'assets/images/menandmesh.mp3');
        $.get();
        audioName.addEventListener("load", function() {
          audioName.play();
        }, true);

        var audioClick = document.createElement('audio');
        audioClick.setAttribute('src', 'assets/images/click2.mp3');
        $.get();
        audioClick.addEventListener("load", function() {
          audioClick.play();
        }, true);

        function play() {
            var audio = document.getElementById('audio1');
            if (audio.paused) {
                audio.currentTime = 0
            }else{
                audio.currentTime = 0
            }
        }


/* SOUND ON HOVER */

        $(".text1").hover(
          function() {
            audioName.play();
          },
          function() {
            audioName.pause();
          }
        );



        $(".box").mouseenter(
          function() {
            audioPower.play();

          },

        );


        $(".box").mouseleave(
          function() {
            audioPower.pause();

            if (audioPower.paused) {
                audioPower.currentTime = 0
            }else{
                audioPower.currentTime = 0
            }
          },

        );


        /* CHANGE SOUND ON RE_HOVER */


        $(".disappear").mouseenter(
          function() {
            audioPowerup.play();

          },

        );

        $(".disappear").mouseleave(
          function() {
            audioPowerup.pause();

            if (audioup.paused) {
                audioup.currentTime = 0
            }else{
                audioup.currentTime = 0
            }
          },

        );






        /* VERSION 2 SOUND */

        $(".boxv2").mouseenter(
          function() {
            audioClick.play();

          },

        );


        $(".boxv2").mouseleave(
          function() {
            audioClick.pause();

            if (audioClick.paused) {
                audioClick.currentTime = 0
            }else{
                audioClick.currentTime = 0
            }
          },

        );













  });
