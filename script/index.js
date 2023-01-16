$(document).ready(function() {
$(".top-nav").fadeIn( "slow", function() {
    $(this).animate({left: '0px'});
});
$("div.card_prices").hover(function(){
    $(this).fadeTo( "slow" , 0.5, function() {});
}, function(){
    $(this).fadeTo( "slow" , 1, function() {});
});

});
