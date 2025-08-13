$(function () {
    $(".click").click(function () {
        $(".popup").show(); //fadeIn()
    });

    $(".popup a").click(function () {
        $(".popup").hide(); //fadeOut()
    });
});