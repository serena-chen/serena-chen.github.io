$(document).ready(function() {


  // SLIDE UP FILTER/FOOTER CONTAINER

  $('.slideup__button').click(function(event){
    $('.footer__container').toggleClass('slideup');

  });

  $('.background__title , .dragimages').click(function(event){
    $('.footer__container').removeClass('slideup');

  });



  // DRAG

  $(function() {
      $("#bean , #mirror , #pumpkin , #clipping , #tv , #plate, #take , #poster, #jersey , #bar , #sign , #paddle , #stump , #paint ,#block , #pit , #photo , #noshoes , #shelf , #rock , #sriracha , #news , #juke , #flag , #sink , #plate2 , #chip , #timer , #carrot , #glove , #clock , #album , #sack , #signature").draggable( {
          containment: 'window',
          cursor: 'move',
          snap: 'window',
      });

  });

  $(function() {
      $("#service1 , #service2 , #service3 , #service4 , #service5 , #service6 , #service7 , #service8 , #service9 , #service10 , #service11 , #service12 , #service13 , #service14").draggable( {
          containment: 'window',
          cursor: 'move',
          snap: 'window',
      });

  });


  // FILTER IMAGES

    // BY YEAR

$('.filter__link--2018').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.2018').removeClass('hideimage');
  $('.dragimages.2018').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--2017').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.2017').removeClass('hideimage');
  $('.dragimages.2017').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--2016').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.2016').removeClass('hideimage');
  $('.dragimages.2016').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--2015').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.2015').removeClass('hideimage');
  $('.dragimages.2015').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});


$('.filter__link--2014').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.2014').removeClass('hideimage');
  $('.dragimages.2014').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--2013').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.2013').removeClass('hideimage');
  $('.dragimages.2013').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});


$('.filter__link--2012').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.2012').removeClass('hideimage');
  $('.dragimages.2012').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--2011').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.2011').removeClass('hideimage');
  $('.dragimages.2011').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--2010').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.2010').removeClass('hideimage');
  $('.dragimages.2010').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--2009').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.2009').removeClass('hideimage');
  $('.dragimages.2009').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});


    // BY ALPHABET-ARTIST

$('.filter__link--ac').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.ac').removeClass('hideimage');
  $('.dragimages.ac').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});


$('.filter__link--df').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.df').removeClass('hideimage');
  $('.dragimages.df').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--gi').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.gi').removeClass('hideimage');
  $('.dragimages.gi').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--jl').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.jl').removeClass('hideimage');
  $('.dragimages.jl').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--mo').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.mo').removeClass('hideimage');
  $('.dragimages.mo').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});


$('.filter__link--pr').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.pr').removeClass('hideimage');
  $('.dragimages.pr').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--su').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.su').removeClass('hideimage');
  $('.dragimages.su').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--vx').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.vx').removeClass('hideimage');
  $('.dragimages.vx').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});

$('.filter__link--yz').click(function(event){
  $('.dragimages').removeClass('showimage');
  $('.dragimages').addClass('hideimage');

  $('.dragimages.yz').removeClass('hideimage');
  $('.dragimages.yz').addClass('showimage');

  $('.filter__link').addClass('selected');

  $(this).removeClass('selected');

});




// BY THEME

$('.filter__link--education').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.education').removeClass('hideimage');
$('.dragimages.education').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});

$('.filter__link--human').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.human').removeClass('hideimage');
$('.dragimages.human').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});

$('.filter__link--music').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.music').removeClass('hideimage');
$('.dragimages.music').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});


$('.filter__link--food').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.food').removeClass('hideimage');
$('.dragimages.food').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});


$('.filter__link--music').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.music').removeClass('hideimage');
$('.dragimages.music').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});


$('.filter__link--intimacy').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.intimacy').removeClass('hideimage');
$('.dragimages.intimacy').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});

$('.filter__link--perform').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.perform').removeClass('hideimage');
$('.dragimages.perform').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});

$('.filter__link--installation').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.installation').removeClass('hideimage');
$('.dragimages.installation').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});


$('.filter__link--culture').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.culture').removeClass('hideimage');
$('.dragimages.culture').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});


$('.filter__link--sexuality').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.sexuality').removeClass('hideimage');
$('.dragimages.sexuality').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});


$('.filter__link--sculpture').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.sculpture').removeClass('hideimage');
$('.dragimages.sculpture').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});

$('.filter__link--gender').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.gender').removeClass('hideimage');
$('.dragimages.gender').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});

$('.filter__link--race').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.race').removeClass('hideimage');
$('.dragimages.race').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});


$('.filter__link--community').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.community').removeClass('hideimage');
$('.dragimages.community').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});

$('.filter__link--dance').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.dance').removeClass('hideimage');
$('.dragimages.dance').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});


$('.filter__link--celebration').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.celebration').removeClass('hideimage');
$('.dragimages.celebration').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});

$('.filter__link--contemporary').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.contemporary').removeClass('hideimage');
$('.dragimages.contemporary').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});

$('.filter__link--investigation').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.investigation').removeClass('hideimage');
$('.dragimages.investigation').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});

$('.filter__link--collaboration').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.collaboration').removeClass('hideimage');
$('.dragimages.collaboration').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});

$('.filter__link--environment').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.environment').removeClass('hideimage');
$('.dragimages.environment').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});

$('.filter__link--politics').click(function(event){
$('.dragimages').removeClass('showimage');
$('.dragimages').addClass('hideimage');

$('.dragimages.politics').removeClass('hideimage');
$('.dragimages.politics').addClass('showimage');

$('.filter__link').addClass('selected');

$(this).removeClass('selected');

});
























  });
