$(document).ready(function() {


  /* SHOW CURSOR IMAGE ON HOVER */


    var $img3 = $('.hover__image3');
    $img3.hide();
    $('.previous').mousemove(function(e) {
        $img3.stop(1, 1).fadeIn();
        $('.hover__image3').offset({
            top: 90 + e.pageY - $img3.outerHeight(),
            left: 50 + e.pageX - ($img3.outerWidth()/2)
        });
    }).mouseleave(function() {
        $img3.fadeOut();
    });

    var $img5 = $('.hover__image5');
    $img5.hide();
    $('.next').mousemove(function(e) {
        $img5.stop(1, 1).fadeIn();
        $('.hover__image5').offset({
            top: 90 + e.pageY - $img5.outerHeight(),
            left: 70 + e.pageX - ($img5.outerWidth()/2)
        });
    }).mouseleave(function() {
        $img5.fadeOut();
    });



/* BIG CIRCLE -LEFT */


$("#magenta , #white").hide();
  $("#yellow , #yellow2").click(function() {
    $("#yellow , #yellow2").hide();
    $("#magenta , #magenta.yellow2").show();
  });


    $("#magenta , #magenta.yellow2").click(function() {
      $("#magenta , #magenta.yellow2").hide();
      $("#white , #white.yellow2").show();
  });

  $("#white , #white.yellow").click(function() {
    $("#white , #white.yellow").hide();
    $("#yellow , #yellow.yellow2").show();
  });

/* MEDCIRCLE -LEFT */

$("#blue , #orange").hide();
  $("#green").click(function() {
    $(this).hide();
    $("#blue").show();
  });


    $("#blue").click(function() {
      $(this).hide();
      $("#orange").show();
  });

  $("#orange").click(function() {
    $(this).hide();
    $("#green").show();
  });

/* PINKCIRCLES -RIGHT */

$("#aqua , #grey").hide();
  $("#pink , #pink2 , #pink3").click(function() {
    $("#pink , #pink2 , #pink3").hide();
    $("#aqua , #aqua.pink2 , #aqua.pink3").show();
  });

  $("#aqua , #aqua.pink2 , #aqua.pink3").click(function() {
    $("#aqua , #aqua.pink2 , #aqua.pink3").hide();
    $("#grey , #grey.pink2 , #grey.pink3").show();
  });

  $("#grey , #grey.pink2 , #grey.pink3").click(function() {
    $("#grey , #grey.pink2 , #grey.pink3").hide();
    $("#pink , #pink.pink2 , #pink.pink3").show();
  });


  /* REDCIRCLE -RIGHT */

  $("#steel , #salmon").hide();
    $("#red , #red2").click(function() {
      $("#red , #red2").hide();
      $("#steel , #steel.red2").show();
    });


      $("#steel , #steel.red2").click(function() {
        $("#steel , #steel.red2").hide();
        $("#salmon , #salmon.red2").show();
    });

    $("#salmon , #salmon.red2").click(function() {
      $("#salmon , #salmon.red2").hide();
      $("#red , #red.red2").show();
  });























  });
