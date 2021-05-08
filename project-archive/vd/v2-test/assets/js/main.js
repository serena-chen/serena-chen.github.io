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
        setFullTop();
    });

    function calcContentHeight() {
        var contents = $('.full > .content').length - 1;
        contentHeight = $('.full').height() * contents;

        top = 0 - contentHeight;
        setFullTop();
    }

    function setFullTop() {
        var fullTop = top + $(window).scrollTop();

        //1. don't allow right col top to go positive
        if(fullTop > 0) fullTop = 0 - fullTop;
        $('.full').css('top', fullTop + 'px');

        //2. Ensure .row has sufficient top margin
        $('.row').css('margin-top', contentHeight + 'px');
    }

})(jQuery);




});
