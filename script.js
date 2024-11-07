$(document).ready(function () {
    $(".backimg img:first-child").css("z-index", "-1").siblings().hide();
    $(".nav-menu__html").hover(function () {
        $(".html_img").stop(true, true).fadeIn(500).siblings().delay(100).fadeOut(500);
    });
    $(".nav-menu__css").hover(function () {
        $(".css_img").stop(true, true).fadeIn(500).siblings().delay(100).fadeOut(500);
    });
    $(".nav-menu__javascript").hover(function () {
        $(".js_img").stop(true, true).fadeIn(500).siblings().delay(100).fadeOut(500);
    });
    $(".nav-menu__home").hover(function () {
        $(".home_img").stop(true, true).fadeIn(500).siblings().delay(100).fadeOut(500);
    });
});
