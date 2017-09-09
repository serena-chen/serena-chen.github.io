$(document).ready(function() {


// Add jQuery here


$('.content').click(function() {
    $(this).toggleClass('enlarge');
});












/* FILTERS */

// ON PAGE LOAD (ALL IMAGES SHOWN)
$('.item1').addClass('selected');



// ON CLICK (SELECT FILTER GROUPS)

$('.item1').click(function() {
    $(this).addClass('selected');

    $('.item2').removeClass('selected');
    $('.item3').removeClass('selected');
    $('.item1images').removeClass('deselectimages');
    $('.item3images').removeClass('deselectimages');

});


$('.item2').click(function() {
    $(this).addClass('selected');
    $('.item1images').addClass('deselectimages');

    $('.item1').removeClass('selected');
    $('.item3').removeClass('selected');
    $('.item3images').removeClass('deselectimages');

});

$('.item3').click(function() {
    $(this).addClass('selected');
    $('.item3images').addClass('deselectimages');

    $('.item1').removeClass('selected');
    $('.item2').removeClass('selected');

});



















  });
