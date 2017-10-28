$(document).ready(function() {


// Add jQuery here


$('.nav_ad').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.ad').removeClass('hide');
  $('.item.ad').addClass('show');

  $('.nav_clear').addClass('show')
});

$('.nav_pipe').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.pipe').removeClass('hide');
  $('.item.pipe').addClass('show');

});


$('.nav_plan').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.plan').removeClass('hide');
  $('.item.plan').addClass('show');

});

$('.nav_brick').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.brick').removeClass('hide');
  $('.item.brick').addClass('show');

  $('.nav_clear').addClass('show')
});


$('.nav_window').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.window').removeClass('hide');
  $('.item.window').addClass('show');

  $('.nav_clear').addClass('show')
});




$('.nav_clear').click(function(event){
  $('.nav_clear').addClass('hide')
  $('.nav_clear').removeClass('show')

  $('.item').removeClass('hide');

});



$('.nav_thumbnail').click(function(event){
  $('.item').addClass('thumbnail')
});

$('.nav_large').click(function(event){
  $('.item').removeClass('thumbnail')
});














  });
