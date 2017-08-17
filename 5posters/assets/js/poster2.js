$(document).ready(function() {





        /* SHOW CURSOR IMAGE ON HOVER */


          var $img1 = $('.hover__image1');
          $img1.hide();
          $('.previous').mousemove(function(e) {
              $img1.stop(1, 1).fadeIn();
              $('.hover__image1').offset({
                  top: 140 + e.pageY - $img1.outerHeight(),
                  left: 50 + e.pageX - ($img1.outerWidth()/2)
              });
          }).mouseleave(function() {
              $img1.fadeOut();
          });

          var $img3 = $('.hover__image3');
          $img3.hide();
          $('.next').mousemove(function(e) {
              $img3.stop(1, 1).fadeIn();
              $('.hover__image3').offset({
                  top: 90 + e.pageY - $img3.outerHeight(),
                  left: 50 + e.pageX - ($img3.outerWidth()/2)
              });
          }).mouseleave(function() {
              $img3.fadeOut();
          });
















  });
