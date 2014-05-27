var scrolled = false;

window.onscroll = function() {
    scrolled = true;
}

setInterval(function(){
    if (scrolled) {
        scrolled = false;
        var header = document.querySelectorAll("#main-header")[0];
        if (window.scrollY > 100) {
            if (!header.classList.contains("small")) {
              header.classList.add("small")
            }
        } else {
            header.classList.remove("small")
        }
    }
}, 300);