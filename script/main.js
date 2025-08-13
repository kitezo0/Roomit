// 기본
var swiper = new Swiper(".basic", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 리뷰
var swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 320,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// 가로
$(function () { //on DOM ready 
    $("#scroller").simplyScroll({
        speed: 1,// 숫자가 올라갈수록 스피드가 빨라짐.
        frameRate: 30, // 숫자가 올라갈수록 스피드가 느려짐.
        direction: 'backwards', // 반대방향으로 
    });
});