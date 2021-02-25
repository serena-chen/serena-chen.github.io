$(document).ready(function() {

  (function ($) {
    var top = 0;
    var contentHeight = 0;

    $(document).ready(function () {
        calcContentHeight();
    });

    $(window).resize(function () {
        calcContentHeight();
    });

    $(window).scroll(function () {
        setRightTop();
    });

    function calcContentHeight() {
        var contents = $('.right > .content').length - 1;
        contentHeight = $('.right').height() * contents;

        top = 0 - contentHeight;
        setRightTop();
    }

    function setRightTop() {
        var rightTop = top + $(window).scrollTop();

        //1. don't allow right col top to go positive
        if(rightTop > 0) rightTop = 0 - rightTop;
        $('.right').css('top', rightTop + 'px');

        //2. Ensure .row has sufficient top margin
        $('.row').css('margin-top', contentHeight + 'px');
    }

})(jQuery);




});
