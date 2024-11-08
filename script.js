$(document).ready(function () {
    $(".backimg img:first-child").css("z-index", "-1").siblings().hide();
    $(".nav-menu__html").hover(function () {
        $(".html_img").stop(true, true).fadeIn(300).siblings().delay(200).fadeOut(300);
    });
    $(".nav-menu__css").hover(function () {
        $(".css_img").stop(true, true).fadeIn(300).siblings().delay(200).fadeOut(300);
    });
    $(".nav-menu__javascript").hover(function () {
        $(".js_img").stop(true, true).fadeIn(300).siblings().delay(200).fadeOut(300);
    });
    $(".nav-menu__home").hover(function () {
        $(".home_img").stop(true, true).fadeIn(300).siblings().delay(200).fadeOut(300);
    });

    setInterval(function () {
        if ($(".nav-menu li:last-child").hasClass("active")) {
            $(".nav-menu li.active").removeClass("active").delay(400).siblings("li:first-child").addClass("active");
        } else {
            $(".nav-menu li.active").removeClass("active").delay(400).next().addClass("active");
        }
    }, 3000);
});
