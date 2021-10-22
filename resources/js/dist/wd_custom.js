/// Set Cookies -->
function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function eraseCookie(key) {
    var keyValue = getCookie(key);
    setCookie(key, keyValue, '-1');
}

$(function() {

});






// Document Ready Beginn
//require(['jQuery'], function ($) {
//$(document).ready(function(){
$(window).on("load", function() {
   

});
//});

// Document Ready End

//load extern Blog from WP


//load extern Blog from WP end




$(function() {

    $(".mainmenu li a").each(function() {
        if ($(this).attr("href") == window.location.pathname) {
            $(this).parent().parent().parent().addClass("selected");
        }
    });

});



// scroll to anchor fix

$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 240
            // 100 is the sticky nav height
    }, 500);
});