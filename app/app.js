
$(document).ready(function () {
    const navoffset = $('#nav').offset().top;
    $(window).scroll(function () {
        const scrolled = $(this).scrollTop();
        if (scrolled > navoffset) {
            //header fixed
            $('#wrapper_nav').addClass('nav-fixed');
        }
        else if (scrolled < navoffset) {
            //header unfixed
            $('#wrapper_nav').removeClass('nav-fixed');
        }
        console.log(navoffset);
        console.log(scrolled);
    });
});