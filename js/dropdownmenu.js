$(document).ready(function () {
    //
    $('.dropdownmenu-btn').bind('click', function(e) {
        var Headerheight = $('header ul').height();
        $('.dropdownmenu').stop().slideToggle().css({top:Headerheight});
        return false;
    });
    //
    $('.menu-list').eq(1).bind('click', function(e) {
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });
    //
    $('.dropdownmenu-list a').bind('click', function(e) {
        var DropDownMenuLinkPosition = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: DropDownMenuLinkPosition}, 1000);
        return false;
    });
});