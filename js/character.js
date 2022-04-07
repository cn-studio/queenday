$(document).ready(function () {
    //function-setting
    function CharactersItemSize() {
        var CharactersItemWidth = $('.event-info-character div').width();
        $('.event-info-character div').height(CharactersItemWidth*1.25);
        $('.event-info-character div p').css('line-height',CharactersItemWidth*1.25 + 'px');
        console.log(CharactersItemWidth);
    }
    //
    CharactersItemSize();
    $(window).resize(function () {
        CharactersItemSize(); 
    });
    //
    $('.event-info-character-content').bind('click', function(e) {
        $('.event-info-character-content').children('img').addClass('image-hide').removeClass('image-show');
        $(this).children('img').addClass('image-show').removeClass('image-hide');
    });
});