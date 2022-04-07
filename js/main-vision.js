$(document).ready(function () {
    //function-setting
    function VisonHeight() {
        var Headerheight = $('header ul').height();
        var ScreenHeight = document.body.clientHeight;
        $('.main-vision').height(ScreenHeight - Headerheight).css({'margin-top':Headerheight});
        $('.main-vision img').css({'top':Headerheight*-1})
    }
    //function-setting
    function CircleCreate(CircleNumber) {
            $('.main-vision').append('<div class="main-vision-circle '+ CircleNumber +'"></div>');
    }
    //
    VisonHeight();
    CircleCreate('main-vision-circle-01');
    CircleCreate('main-vision-circle-02');
    CircleCreate('main-vision-circle-03');
    CircleCreate('main-vision-circle-04');
    CircleCreate('main-vision-circle-05');
    CircleCreate('main-vision-circle-06');
    CircleCreate('main-vision-circle-07');
    CircleCreate('main-vision-circle-08');
    CircleCreate('main-vision-circle-09');
    CircleCreate('main-vision-circle-10');
    CircleCreate('main-vision-circle-11');
    $(window).resize(function () {
        VisonHeight(); 
    });
});