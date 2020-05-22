$(document).ready(function() {



  /* SHOW CURSOR IMAGE ON HOVER - EXHIBITIONS*/

    var $exb1 = $('.hover__image--exb-1');
    $exb1.hide();
    $('.exb-1').mousemove(function(e) {
        $exb1.stop(1, 1).fadeIn();
        $('.hover__image--exb-1').offset({
            top: 220 + e.pageY - $exb1.outerHeight(),
            left: 180 + e.pageX - ($exb1.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb1.hide();
    });

    var $exb2 = $('.hover__image--exb-2');
    $exb2.hide();
    $('.exb-2').mousemove(function(e) {
        $exb2.stop(1, 1).fadeIn();
        $('.hover__image--exb-2').offset({
            top: 220 + e.pageY - $exb2.outerHeight(),
            left: 180 + e.pageX - ($exb2.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb2.hide();
    });

    var $exb3 = $('.hover__image--exb-3');
    $exb3.hide();
    $('.exb-3').mousemove(function(e) {
        $exb3.stop(1, 1).fadeIn();
        $('.hover__image--exb-3').offset({
            top: 220 + e.pageY - $exb3.outerHeight(),
            left: 180 + e.pageX - ($exb3.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb3.hide();
    });

    var $exb4 = $('.hover__image--exb-4');
    $exb4.hide();
    $('.exb-4').mousemove(function(e) {
        $exb4.stop(1, 1).fadeIn();
        $('.hover__image--exb-4').offset({
            top: 220 + e.pageY - $exb4.outerHeight(),
            left: 180 + e.pageX - ($exb4.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb4.hide();
    });

    var $exb5 = $('.hover__image--exb-5');
    $exb5.hide();
    $('.exb-5').mousemove(function(e) {
        $exb5.stop(1, 1).fadeIn();
        $('.hover__image--exb-5').offset({
            top: 220 + e.pageY - $exb5.outerHeight(),
            left: 180 + e.pageX - ($exb5.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb5.hide();
    });

    var $exb6 = $('.hover__image--exb-6');
    $exb6.hide();
    $('.exb-6').mousemove(function(e) {
        $exb6.stop(1, 1).fadeIn();
        $('.hover__image--exb-6').offset({
            top: 220 + e.pageY - $exb6.outerHeight(),
            left: 180 + e.pageX - ($exb6.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb6.hide();
    });


    var $exb7 = $('.hover__image--exb-7');
    $exb7.hide();
    $('.exb-7').mousemove(function(e) {
        $exb7.stop(1, 1).fadeIn();
        $('.hover__image--exb-7').offset({
            top: 270 + e.pageY - $exb7.outerHeight(),
            left: 150 + e.pageX - ($exb7.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb7.hide();
    });



  // ABOUT POPUP

  $('.nav-link--about').click(function() {
      $('.header-content__container').addClass('hideme');
      $('.popup__container--about').addClass('showme');
  });

  $('.nav-link--close').click(function() {
      $('.popup__container--about').removeClass('showme');
      $('.header-content__container').removeClass('hideme');
  });















  });
