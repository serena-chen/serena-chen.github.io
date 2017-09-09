$(document).ready(function() {


/*

        var audioBlue = document.createElement('audio');
        audioBlue.setAttribute('src', 'assets/images/blue1.mp3');
        $.get();
        audioBlue.addEventListener("load", function() {
          audioBlue.play();
        }, true);

        var audioBlack = document.createElement('audio');
        audioBlack.setAttribute('src', 'assets/images/black1.mp3');
        $.get();
        audioBlack.addEventListener("load", function() {
          audioBlack.play();
        }, true);

        var audioBlack2 = document.createElement('audio');
        audioBlack2.setAttribute('src', 'assets/images/black2.mp3');
        $.get();
        audioBlack2.addEventListener("load", function() {
          audioBlack2.play();
        }, true);

        var audioRed2 = document.createElement('audio');
        audioRed2.setAttribute('src', 'assets/images/red2.mp3');
        $.get();
        audioRed2.addEventListener("load", function() {
          audioRed2.play();
        }, true);

        var audioGrey2 = document.createElement('audio');
        audioGrey2.setAttribute('src', 'assets/images/grey2.mp3');
        $.get();
        audioGrey2.addEventListener("load", function() {
          audioGrey2.play();
        }, true);



        $(".blue1").click(

          function() {
            audioBlue.play();
          },

        );

        $(".black1").click(

          function() {
            audioBlack.play();
          },

        );

        $(".black3 , .black3 , .red1").click(

          function() {
            audioBlack2.play();
          },

        );

        $(".red2").click(

          function() {
            audioRed2.play();
          },

        );

        $(".grey2").click(

          function() {
            audioGrey2.play();
          },

        );

*/




        /* SHOW CURSOR IMAGE ON HOVER */


          var $img2 = $('.hover__image2');
          $img2.hide();
          $('.next').mousemove(function(e) {
              $img2.stop(1, 1).fadeIn();
              $('.hover__image2').offset({
                  top: 90 + e.pageY - $img2.outerHeight(),
                  left: 50 + e.pageX - ($img2.outerWidth()/2)
              });
          }).mouseleave(function() {
              $img2.fadeOut();
          });
















  });
