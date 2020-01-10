$(document).ready(function() {


  //// ON PAGE LOAD

  var elems = $(".a-dot");
if (elems.length) {
  var keep = Math.floor(Math.random() * elems.length);
  for (var i = 0; i < elems.length; ++i) {
    if (i !== keep) {
      $(elems[i]).hide();
    }
  }
}

var elems = $(".p-dot");
if (elems.length) {
var keep = Math.floor(Math.random() * elems.length);
for (var i = 0; i < elems.length; ++i) {
  if (i !== keep) {
    $(elems[i]).hide();
  }
}
}



  jQuery(function($) {
      $('.dot').mouseover(function() {
          //var dWidth = $(document).width() - 100, // 100 = image width
              //dHeight = $(document).height() - 100, // 100 = image height
           var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() - 1) + 1),
              nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
          $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
      });

      $('.dot').click(function() {
          //var dWidth = $(document).width() - 100, // 100 = image width
              //dHeight = $(document).height() - 100, // 100 = image height
           var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() - 1) + 1),
              nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
          $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
      });


  });

















});
