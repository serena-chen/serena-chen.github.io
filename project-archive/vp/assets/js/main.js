$(document).ready(function() {


// Add jQuery here



$('.header-menu').mouseenter(function() {
    $('.header-info').addClass('showme');
    $('.header-home').addClass('showme');

    $('.header-title').addClass('hideme');


});

$('.header-menu').mouseleave(function() {
    $('.header-info').removeClass('showme');
    $('.header-home').removeClass('showme');

    $('.header-title').removeClass('hideme');
});


$('.self_harvest-image').hover(function() {
    $('.self_harvest-title').toggleClass('showme');

});

$('.invitro-image').hover(function() {
    $('.invitro-title').toggleClass('showme');

});

$('.else-image').hover(function() {
    $('.else-title').toggleClass('showme');

});

$('.elodea-image').hover(function() {
    $('.elodea-title').toggleClass('showme');

});

$('.feastbound-image').hover(function() {
    $('.feastbound-title').toggleClass('showme');

});

$('.scenescenza-image').hover(function() {
    $('.scenescenza-title').toggleClass('showme');

});

$('.biomicro-image').hover(function() {
    $('.biomicro-title').toggleClass('showme');

});


////// PROJECT PAGE ///////


$(function () {
    $('.slideshow').each(function () {
        // Instance of slideshow
        var $slideshow = $(this);
        // Set count of images in slideshow
        $slideshow.find('.images-counter').text($slideshow.find('.slideshow-item').length);
        // Hide all but first image
        $slideshow.find('.slideshow-item').not(':first').hide(0);
        // Store the current image as data on the slideshow
        $slideshow.data('data-image', 0);
    });

    $('.slideshow-item img').click(function (e) {
        // Find the parent slideshow
        var $slideshow = $(this).closest('.slideshow');
        // Get the images of that slideshow
        var $images = $slideshow.find('.slideshow-item');
        // Get current image from data - could also get from visibility of image
        var currentImage = $slideshow.data('data-image');
        // Get count of images
        var imagesCounter = $images.length;
        // Hide the current image
        $images.eq(currentImage).hide(0);
        // Increase the counter and wrap at the end
        currentImage = currentImage >= imagesCounter - 1 ? 0 : currentImage + 1;
        // Save the current image number
        $slideshow.data('data-image', currentImage);
        // Show the new image
        $images.eq(currentImage).show(0);
        // Set the text to match the count
        $slideshow.find('.current-image-counter').text(currentImage + 1);
        // Set the text to match the description in the image
        $slideshow.find('.slideshow_comment').text($images.eq(currentImage).attr("alt"));
    });
});



/////////FOOTER

$('.footer-project-title').click(function() {
    $('.footer-project-description').toggleClass('showme');

});

// $('.footer-project-title').click(function() {
//     $('.footer-project-description').toggleClass('hideme');
//
// });










  });
