
$(function () {

    AOS.init({
        disable: function () {
            var maxWidth = 800;
            return window.innerWidth < maxWidth;
        }
    });


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    });

    const SLIDE_LIST = document.querySelectorAll('.main_visual .list li')

    console.log(SLIDE_LIST);

    const main_slide = new Swiper(".main_slide", {
        loop: true,
        autoplay: {     //자동슬라이드 (false-비활성화)
            delay: 3500, // 시간 설정
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 3000,


        slideActiveClass: 'on',
        on: {
            slideChangeTransitionStart: function () {
                SLIDE_LIST.forEach(it => it.classList.remove('on'));
                SLIDE_LIST[this.realIndex].classList.add('on');
            }
        }

    });




    SLIDE_LIST.forEach((it, idx) => {
        it.addEventListener('click', e => {
            e.preventDefault();
            main_slide.slideTo(idx)
        })
    })

    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });


    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        };

        $(this)
            .next()
            .stop()
            .slideToggle();
        $(this)
            .parent()
            .siblings()
            .find('.sub')
            .stop()
            .slideUp();

    });


    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });

})