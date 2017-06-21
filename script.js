$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 500) {
        $("nav").addClass("change");
    } else {
        $("nav").removeClass("change");
    }
});