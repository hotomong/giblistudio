$(function () {
    // 모바일 메뉴 열기
    $('.open_btn').click(function () {
        $('#menu').addClass('active');
        $('.hamburger').addClass('active');
    });

    // 모바일 메뉴 닫기
    $('.close_btn').click(function () {
        $('#menu').removeClass('active');
        $('.hamburger').removeClass('active');
        $('.mobile_gnb li a').blur();
    });

    // 섹션 이동 + 메뉴 닫기
    $('a[href*="#"]:not([href="#"])').click(function () {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html, body").animate(
                { scrollTop: target.offset().top },
                500
            );
            // 모바일 메뉴 닫기
            $('#menu').removeClass('active');
            $('.hamburger').removeClass('active');
            return false;
        }
    });
});

// 햄버거 메뉴 토글 기능
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('.mobile_gnb a');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });
});


// TOP 버튼 부드럽게
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 스크롤에 따른 버튼 표시/숨김
window.addEventListener('scroll', function () {
    const topBtn = document.querySelector('.top_btn');
    if (window.pageYOffset > 300) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});


// 이미지 스와이퍼
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});