$(document).ready(function() {


/*
  $("text1start").setTimeout(modify, 1000) {
      addClass("text1end");

  });

  */

  function modify() {
      $('.text1start').toggleClass("text1end");
      $('.text2start').toggleClass("text2end");
      $('.rectanglestart').toggleClass("rectangleend");


    }

    $(function() {
        $(document.text1start).ready(function() {
            setTimeout(modify, 3000);
        });


    });




/*
    function page_scroll()
  {
   $("html, body").animate({ scrollTop: $(document).height() }, 342000);
  }
  function stop_scroll()
  {
   $("html, body").stop();
  }


  */








/* Background Images

  $('.bg1').mouseenter(function() {
     $('.bg1__images').addClass('showme');
   });

   $('.bg1').mouseleave(function() {
   $('.bg1__images').removeClass('showme');
 });

 $('.bg2').mouseenter(function() {
    $('.bg2__images').addClass('showme');
  });


 $('.chapterlink').click(function() {
    $('.chapterpopup').toggleClass('showme');
    $('.text1info').toggleClass('showme');
    $('.relatedpopup').removeClass('showme');
    $('.relatedpopuptext2').removeClass('showme');
  });

  $('.relatedicon').click(function() {
     $('.relatedpopup').toggleClass('showme');
     $('.relatedpopuptext2').toggleClass('showme');
     $('.chapterpopup').removeClass('showme');
   });

   */











  });
