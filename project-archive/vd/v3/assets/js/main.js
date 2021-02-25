$(document).ready(function() {

var bg = document.getElementById('bg__container');
var last_pane = bg.getElementsByClassName('bg-images__container');
last_pane = last_pane[last_pane.length-1];
var dummy_x = null;

window.onscroll = function () {
  // Horizontal Scroll.
  var y = document.body.getBoundingClientRect().top;
  bg.scrollLeft = -y;


}
// Adjust the body height if the window resizes.
window.onresize = resize;
// Initial resize.
resize();

// Reset window-based vars
function resize() {
  var w = bg.scrollWidth-window.innerWidth+window.innerHeight;
  document.body.style.height = w + 'px';

  dummy_x = last_pane.getBoundingClientRect().left+window.scrollY;
}





});
