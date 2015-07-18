$(function() {
    var $background = $('#main-header');
    var $window = $(window);
    var updateBackgroundPosition = function() {
        scrollPosition = $window.scrollTop();
        if (scrollPosition < 1) {
            scrollPosition = 0;
        }
        $background.css({'background-position': "0px -" + (scrollPosition + 100) + "px"});
    };
    $window.scroll(updateBackgroundPosition);
});
