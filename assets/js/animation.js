jQuery(document).ready(function ($) {
    var wv = $(window).width();



    if (wv < 991) {


        $('.ourValuesSec .valuesWrapper .valuesTextDiv .textDivAnimate div').attr('data-aos', 'fade');
        $('.ourValuesSec .valuesWrapper .valuesTextDiv .textDivAnimate div').attr('data-aos-anchor-placement', "top-center");

        setInterval(() => {
            $('.ourValuesSec .valuesWrapper .valuesTextDiv .textDivAnimate div').each(function () {
                if ($(this).hasClass('aos-animate')) {
                    $('.ourValuesSec .valuesWrapper .valuesTextDiv .textDivAnimate div').removeClass('current');
                    $(this).addClass('current');
                    $('.ourValuesSec .valuesWrapper .linesDiv span').removeClass('active');
                    $('.ourValuesSec .valuesWrapper .linesDiv span:nth-child(' + ($(this).index() + 1) + ')').addClass('active');
                } else {
                }

            });
            if (!($('.ourValuesSec .valuesWrapper .valuesTextDiv').hasClass('aos-animate'))) {
                $('.ourValuesSec .valuesWrapper .linesDiv span').removeClass('active');
                $('.ourValuesSec .valuesWrapper .linesDiv span:first-child').addClass('active');
                $('.ourValuesSec .valuesWrapper .valuesTextDiv .textDivAnimate div:first-child').addClass('current');
            }

        }, (0.25 * 1000));
    } else {
        setInterval(() => {
            if ($('.ourValuesSec .valuesWrapper .valuesTextDiv').hasClass('aos-animate')) {
                setTimeout(() => {
                    $('.ourValuesSec .valuesWrapper .valuesTextDiv').addClass('dataAnimate');
                }, 500);
            } else {
                $('.ourValuesSec .valuesWrapper .valuesTextDiv').removeClass('dataAnimate');
            }
        }, 1000);
        setInterval(() => {
            if ($('.ourValuesSec .valuesWrapper .valuesTextDiv').hasClass('dataAnimate')) {
                if ($('.ourValuesSec .valuesWrapper .linesDiv span:last-child').hasClass('active')) {
                    $('.ourValuesSec .valuesWrapper .linesDiv span').removeClass('active');
                    $('.ourValuesSec .valuesWrapper .linesDiv span:first-child').addClass('active');
                    $('.ourValuesSec .valuesWrapper .valuesTextDiv .textDivAnimate div.active').removeClass('current ');
                    $('.ourValuesSec .valuesWrapper .valuesTextDiv .textDivAnimate div:first-child').addClass(' current');
                } else {
                    $('.ourValuesSec .valuesWrapper .linesDiv span.active').removeClass('active').next('span').addClass('active');
                    $('.ourValuesSec .valuesWrapper .valuesTextDiv .textDivAnimate div.current').removeClass('current').next('div').addClass('active current');
                }
            } else {
                $('.ourValuesSec .valuesWrapper .linesDiv span').removeClass('active');
                $('.ourValuesSec .valuesWrapper .linesDiv span:first-child').addClass('active');
                $('.ourValuesSec .valuesWrapper .valuesTextDiv .textDivAnimate div.active').removeClass('current active');
                $('.ourValuesSec .valuesWrapper .valuesTextDiv .textDivAnimate div:first-child').addClass('active current');
            }
        }, (1 * 1000));
    }

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
        initClassName: "aos-init", // class applied after initialization
        animatedClassName: "aos-animate", // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 0, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 30, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        // easing: "cubic-bezier(0.165, 0.84, 0.44, 1)", // default easing for AOS animations
        easing: "cubic-bezier(.215, .61, .355, 1)",
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
});

$(window).on('resize', function () {
    AOS.refresh();
});