$(document).ready(function() {


// Add jQuery here


$(function() {
  $(".rslides").responsiveSlides();
});



$('.client-link').click(function() {
    $('.hidden-text-client').toggleClass('showme');
    $('body').toggleClass('changebg');

});

$('.project-link').click(function() {
    $('.hidden-text-project').toggleClass('showme');
    $('body').toggleClass('changebg');

});



  });




////// PROJECT SLIDESHOW ///////

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
var x = 2;
function Slideshow(){
    document.getElementById("img").src="./assets/images/ek_2.jpg";
    x++;
    if (x > 50)
        x = 1;
}

document.getElementById ("button-click").addEventListener("click", Slideshow, false);
