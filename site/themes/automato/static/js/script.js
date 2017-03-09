var $root = $('html, body');
// $('a').click(function() {
//     $root.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top - $(window).height()
//     }, 500);
//     return false;
// });
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

window.onload = function() {
    //add scrollspy to activate menu on scroll
    $('body').scrollspy({
        target: ".navbar"
    });
    AOS.init();
    $('#heroCarousel').carousel({
        interval: 3000
    });
}


$('#mainNav .navbar-toggle').click(function() {
    //$('.dropDown.menu').toggleClass("hidden");
    //$('#mainNav').toggleClass("expanded");
    if ($('.dropDown.menu').css('display') == 'none') $('.dropDown.menu').fadeIn(400);
    else $('.dropDown.menu').fadeOut(400);
});


$('.dropDown.menu').click(function() {
    $(this).fadeOut(400);
});


$(document).ready(function() {

    $('#gridGallery').lightGallery();

});
