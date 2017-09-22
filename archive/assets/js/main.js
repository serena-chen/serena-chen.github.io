$(document).ready(function() {


// Add jQuery here


$('.spacer').click(function() {
    $(this).toggleClass('enlarge');
});












/* FILTERS */

// ON PAGE LOAD (ALL IMAGES SHOWN)
$('.nav_all').addClass('highlight');



// ON CLICK (SELECT FILTER GROUPS)

$('.nav_clothes').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.clothes').removeClass('deselect');
  $('.item.clothes').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});


$('.nav_sellmirror').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.sellmirror').removeClass('deselect');
  $('.item.sellmirror').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});

$('.nav_car').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.car').removeClass('deselect');
  $('.item.car').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});

$('.nav_public').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.public').removeClass('deselect');
  $('.item.public').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});

$('.nav_round').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.round').removeClass('deselect');
  $('.item.round').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});

$('.nav_flash').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.flash').removeClass('deselect');
  $('.item.flash').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});

$('.nav_elevator').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.elevator').removeClass('deselect');
  $('.item.elevator').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});

$('.nav_illusion').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.illusion').removeClass('deselect');
  $('.item.illusion').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});

$('.nav_phone').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.phone').removeClass('deselect');
  $('.item.phone').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});

$('.nav_slr').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.slr').removeClass('deselect');
  $('.item.slr').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});

$('.nav_digcam').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.digcam').removeClass('deselect');
  $('.item.digcam').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});

$('.nav_ipad').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.ipad').removeClass('deselect');
  $('.item.ipad').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});

$('.nav_noface').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.noface').removeClass('deselect');
  $('.item.noface').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});


$('.nav_face').click(function(event){
  $('.item').removeClass('select');
  $('.item').addClass('deselect');

  $('.item.face').removeClass('deselect');
  $('.item.face').addClass('select');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});






$('.nav_all').click(function(event){
  $('.item').removeClass('deselect');

  $('.navitem').removeClass('highlight');

  $(this).addClass('highlight');

});



// $('.item1').click(function() {
//     $(this).addClass('selected');
//
//     $('.item2').removeClass('selected');
//     $('.item3').removeClass('selected');
//     $('.item1images').removeClass('deselectimages');
//     $('.item3images').removeClass('deselectimages');
//
// });
//
//
// $('.item2').click(function() {
//     $(this).addClass('selected');
//     $('.item1images').addClass('deselectimages');
//
//     $('.item1').removeClass('selected');
//     $('.item3').removeClass('selected');
//     $('.item3images').removeClass('deselectimages');
//
// });
//
// $('.item3').click(function() {
//     $(this).addClass('selected');
//     $('.item3images').addClass('deselectimages');
//
//     $('.item1').removeClass('selected');
//     $('.item2').removeClass('selected');
//
// });



















  });
