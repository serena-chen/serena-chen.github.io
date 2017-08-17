$(document).ready(function() {

// ON (work) PAGE LOAD
$('.order').addClass('showimages');
$('.item1').addClass('selectedwork');

// Add jQuery here

$('.info').click(function() {
    $('.infopopup').toggleClass('showme');
    $('.info').toggleClass('changecolor');
    $('.name').toggleClass('changecolor');
    $('.work').toggleClass('changecolor');
    $('.container__images').toggleClass('hideme');
    $('.col1of2').toggleClass('hideme');
    $('.col2of2').toggleClass('hideme');


});


$(function() {
    $("#dragme").draggable( {
        containment: 'window',
        cursor: 'move',
        snap: 'window',
    });

    $("#dragme2").draggable( {
        containment: 'window',
        cursor: 'move',
        snap: 'window',
    });

    $("#dragme3").draggable( {
        containment: 'window',
        cursor: 'move',
        snap: 'window',
    });


});


$('#dragme').click(function() {
    $(this).addClass('movetotop');
    $('#dragme2').removeClass('movetotop');
    $('#dragme3').removeClass('movetotop');
});

$('#dragme2').click(function() {
    $(this).addClass('movetotop');
    $('#dragme').removeClass('movetotop');
    $('#dragme3').removeClass('movetotop');
});

$('#dragme3').click(function() {
    $(this).addClass('movetotop');
    $('#dragme').removeClass('movetotop');
    $('#dragme2').removeClass('movetotop');
});




/* portfolio work page */

$('.item1').click(function() {
    $('.order').addClass('showimages');
    $(this).addClass('selectedwork');

    $('.bailey').removeClass('showimages');
    $('.item2').removeClass('selectedwork');
});

$('.item2').click(function() {
    $('.bailey').addClass('showimages');
    $(this).addClass('selectedwork');

    $('.order').removeClass('showimages');
    $('.item1').removeClass('selectedwork');
});






  });
