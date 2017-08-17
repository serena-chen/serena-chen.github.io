$(document).ready(function() {




  setInterval(function(){

      setTimeout(function () {
            $('.text2start').toggleClass('showme');
            $('.text1start').toggleClass('showme');
          }, 1000);

  }, 1700);


      setTimeout(function () {
            $('.text1start').toggleClass('slidein');
          }, 2000);




          /* SHOW CURSOR IMAGE ON HOVER */


            var $img2 = $('.hover__image2');
            $img2.hide();
            $('.previous').mousemove(function(e) {
                $img2.stop(1, 1).fadeIn();
                $('.hover__image2').offset({
                    top: 90 + e.pageY - $img2.outerHeight(),
                    left: 50 + e.pageX - ($img2.outerWidth()/2)
                });
            }).mouseleave(function() {
                $img2.fadeOut();
            });

            var $img4 = $('.hover__image4');
            $img4.hide();
            $('.next').mousemove(function(e) {
                $img4.stop(1, 1).fadeIn();
                $('.hover__image4').offset({
                    top: 90 + e.pageY - $img4.outerHeight(),
                    left: 70 + e.pageX - ($img4.outerWidth()/2)
                });
            }).mouseleave(function() {
                $img4.fadeOut();
            });











  });
