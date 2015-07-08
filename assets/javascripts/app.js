$(function() {
    var $background = $('#main-header');
    var $window = $(window);
    var updateBackgroundPosition = function() {
        scrollPosition = $window.scrollTop();
        $background.css({'background-position': "0px -" + scrollPosition + "px"});
    };
    $window.scroll(updateBackgroundPosition);
});
