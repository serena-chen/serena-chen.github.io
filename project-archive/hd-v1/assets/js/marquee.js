$(document).ready(function() {


  // polyfill
window.requestAnimationFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

var speed = 15000;
(function bioSlide() {
  var lineWidth = $('.slide-item:first-child').outerWidth();
  $(".slide__container").animate({
    marginLeft: -lineWidth
  }, speed, 'linear', function() {
    $(this).css({
      marginLeft: 0
    }).find("li:last").after($(this).find("li:first"));
  });
  requestAnimationFrame(bioSlide);
})();








});
