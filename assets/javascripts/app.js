$(function() {
    var $background = $('#main-header');
    var $window = $(window);
    var updateBackgroundPosition = function() {
        scrollPosition = $window.scrollTop();
        console.log(scrollPosition);
        $background.css({'background-position': "0px -" + scrollPosition + "px"});
    };
    $window.scroll(updateBackgroundPosition);
});
