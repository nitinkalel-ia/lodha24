$(document).ready(function () {

    var wv = $(window).width(),
        wh = $(window).height();
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = jQuery('header').outerHeight();


    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 350);

    jQuery(window).scroll(function (event) {
        didScroll = true;
    });

    function hasScrolled() {
        var st = jQuery(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > 50) {
            jQuery('header').addClass('solid');
        } else {
            jQuery('header').removeClass('solid');
        }

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            jQuery('header').addClass('nav-up');
        } else {

            // Scroll Up
            if (st + jQuery(window).height() < jQuery(document).height()) {
                jQuery('header').removeClass('nav-up');
            }
        }

        lastScrollTop = st;
    }

    $(document).on('click', 'header .mainHeader .linksDiv>ul>li.innerMenu a', function () {
        if ($(this).parent('li').hasClass('active')) {
            $('html').removeClass('menuOpen');
            $(this).parent('li').removeClass('active');
            $(this).next('.innerMenuDiv').slideUp();
        } else {
            $('html').addClass('menuOpen');
            $(this).parents('.linksUl').find('li').removeClass('active');
            $(this).parent('li').addClass('active');
            $(this).parents('.linksUl').find('.innerMenuDiv').slideUp();
            $(this).next('.innerMenuDiv').slideDown();
        }
    });
    $(document).on('click', 'header .mainHeader .linksDiv>ul>li .innerMenuDiv .innerLinksList .closedMenu', function () {
        $('html').removeClass('menuOpen');
        $('.linksDiv li').removeClass('active');
        $('.linksDiv .innerMenuDiv').slideUp();
    });
    jQuery(document).on('click', function (e) {
        var container = jQuery("header");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('header .mainHeader .linksDiv>ul>li .innerMenuDiv .innerLinksList .closedMenu').click();
        }
    });

    if (wv < 991) {
        $(document).on('click', 'header .mainHeader .linksDiv>ul>li .innerMenuDiv .innerLinksList .linksListWithSearch .innerLinksUl h6', function () {
            if ($(this).parent('.innerLinksUl').hasClass('active')) {
                $(this).parent('.innerLinksUl').removeClass('active');
                $(this).next('ul').slideUp();
            } else {
                $(this).parents('.innerLinksList').find('.innerLinksUl').removeClass('active');
                $(this).parent('.innerLinksUl').addClass('active');
                $(this).parents('.innerLinksList').find('.innerLinksUl ul').slideUp();
                $(this).next('ul').slideDown();
            }
        });
        $(document).on('click', 'header .mainHeader .logoDiv .mobMenu .burgerMenu', function () {
            if ($('html').hasClass('mobMenuOpen')) {
                $('html').removeClass('mobMenuOpen');
                $('header .mainHeader .linksDiv>ul>li .innerMenuDiv .innerLinksList .closedMenu').click();
            } else {
                $('html').addClass('mobMenuOpen');
            }
        });
    } else {


    }

    $(document).on('click', 'footer .mainFooterMenu .downArrow', function () {
        $(this).toggleClass('active');
        $('footer .hiddenLinks').slideToggle();
        $('html, body').animate({
            scrollTop: $("#hiddenLinks").offset().top
        }, 2000);
    });

    $('.expandContent').each(function () {
        var expandContent = $(this).text();
        var str = expandContent.indexOf('.', 500) + 1;
        $(this).text('').append(expandContent.substr(0, str) + "<span class='hiddenText'>" + expandContent.substr(str) + "</span><span class='expandBtn'></span>");
    });

    $(document).on('click', '.expandContent .expandBtn', function () {
        if ($(this).parents('.expandContent').hasClass('active')) {
            $(this).parents('.expandContent').removeClass('active');
            $(this).parents('.expandContent').find('.hiddenText').slideUp();
        } else {
            $(this).parents('.expandContent').addClass('active');
            $(this).parents('.expandContent').find('.hiddenText').slideDown();
        }
    });


    $(document).on('click', '.normalDropDown span', function () {
        if ($(this).parents('.normalDropDown').hasClass('active')) {
            $(this).parents('.normalDropDown').removeClass('active');
        }
        else {
            $('.dropDownDiv').removeClass('active');
            $(this).parents('.normalDropDown').addClass('active');
        }
    });

    $(document).on('click', '.normalDropDown li label', function () {
        $(this).parents('.normalDropDown').find('li').removeClass('active');
        $(this).parents('li').addClass('active');
        $(this).parents('.normalDropDown').removeClass('active');
        $(this).parents('.normalDropDown').find('span').text($(this).text());
    });

    $(document).on('click', '.checkDropDown span', function () {
        if ($(this).parents('.checkDropDown').hasClass('active')) {
            $(this).parents('.checkDropDown').removeClass('active');
        }
        else {
            $('.dropDownDiv').removeClass('active');
            $(this).parents('.checkDropDown').addClass('active');
        }
    });

    $(document).on('click', '.checkDropDown li label', function () {
        var $this = $(this);
        $this.parents('li').toggleClass('active');
        $this.parents('.checkDropDown').find('span').text($this.parents('.checkDropDown').find('span').attr('data-placeholder') + ' ' + $this.parents('.checkDropDown ').find('li.active').length);
    });

    // jQuery(document).on('click', function (e) {
    //     var container = jQuery(".dropDownDiv");

    //     setTimeout(() => {
    //         if (!container.is(e.target) && container.has(e.target).length === 0) {
    //             if (jQuery('.dropDownDiv').hasClass('active')) {
    //                 jQuery('.dropDownDiv').removeClass('active');
    //             }
    //         }
    //     }, 1000);
    // });

    $(document).on('click', '.filterListDiv .clearBtnDiv a', function (e) {
        $(this).parents('.filterListDiv').find('.dropDownDiv span').each(function () {
            $(this).text($(this).attr('data-placeholder'));
        });

    });

    $(document).on('keyup', '.dropDownDiv .dropList .searchListInput', function () {
        var $this = $(this);
        setTimeout(() => {
            var searchVal = ($this.val()).toLowerCase();;
            console.log(searchVal);
            $this.next('.scrollVerticalSlider').find('li').css('display', 'none');
            $this.next('.scrollVerticalSlider').find('li').each(function () {
                var $thisLi = $(this);
                if ($thisLi.find('label').attr('data-title').toLowerCase().indexOf(searchVal) != -1) {
                    $thisLi.css('display', 'block');
                }
            });

        }, 100);
    });


    let spotLightSliderSelector = '.spotlightSliderActive',
        interleaveOffset = 0.5;

    // Main Slider
    let spotLightSliderOptions = {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000
        },
        loopAdditionalSlides: 10,
        grabCursor: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.spotlightSliderActive .swiper-button-next',
            prevEl: '.spotlightSliderActive .swiper-button-prev',
        },
        on: {
            init: function () {
                this.autoplay.stop();
            },
            imagesReady: function () {
                this.autoplay.start();
            },
            // progress: function () {
            //     let swiper = this;
            //     for (let i = 0; i < swiper.slides.length; i++) {
            //         let slideProgress = swiper.slides[i].progress,
            //             innerOffset = swiper.width * interleaveOffset,
            //             innerTranslate = slideProgress * innerOffset;

            //         swiper.slides[i].querySelector(".bannerImgDiv").style.transform =
            //             "translateX(" + innerTranslate + "px)";
            //     }
            // },
            // touchStart: function () {
            //     let swiper = this;
            //     for (let i = 0; i < swiper.slides.length; i++) {
            //         swiper.slides[i].style.transition = "";
            //     }
            // },
            // setTransition: function (speed) {
            //     let swiper = this;
            //     for (let i = 0; i < swiper.slides.length; i++) {
            //         swiper.slides[i].style.transition = speed + "ms";
            //         swiper.slides[i].querySelector(".bannerImgDiv").style.transition =
            //             speed + "ms";
            //     }
            // }
        }
    };
    let spotLightSlider = new Swiper(spotLightSliderSelector, spotLightSliderOptions);

    let ourPrideSliderSelector = '.ourPrideSliderActive';

    // Main Slider
    let ourPrideSliderOptions = {
        loop: false,
        speed: 1000,
        autoplay: {
            delay: 3000
        },
        // loopAdditionalSlides: 10,
        slidesPerView: 'auto',
        grabCursor: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.ourPrideSliderActive .swiper-button-next',
            prevEl: '.ourPrideSliderActive .swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        on: {
            init: function () {
                this.autoplay.stop();
            },
            imagesReady: function () {
                this.autoplay.start();
            }
        }
    };
    let ourPrideSlider = new Swiper(ourPrideSliderSelector, ourPrideSliderOptions);

    let instaSliderSelector = '.instaSliderActive';

    // Main Slider
    let instaSliderOptions = {
        loop: false,
        speed: 1000,
        autoplay: {
            delay: 3000
        },
        // loopAdditionalSlides: 10,
        slidesPerView: 'auto',
        grabCursor: true,
        watchSlidesProgress: true,
        pagination: {
            el: ".instaSliderActive .swiper-pagination",
            dynamicBullets: true,
        },
        on: {
            init: function () {
                this.autoplay.stop();
            },
            imagesReady: function () {
                this.autoplay.start();
            }
        }
    };
    let instaSlider = new Swiper(instaSliderSelector, instaSliderOptions);

    if (wv < 768) {

        let filterSliderSelector = '.filterSliderActive';
        let filterSliderOptions = {
            loop: false,
            speed: 1000,
            autoplay: {
                delay: 3000
            },
            // loopAdditionalSlides: 10,
            updateOnWindowResize: true,
            slidesPerView: 'auto',
            grabCursor: true,
            watchSlidesProgress: true,
            pagination: {
                el: ".filterSliderActive .swiper-pagination",
                dynamicBullets: true,
            },
            on: {
                init: function () {
                    this.autoplay.stop();
                },
                imagesReady: function () {
                    this.autoplay.start();
                }
            }
        };
        let filterSlider = new Swiper(filterSliderSelector, filterSliderOptions);
    }
    var scrollVerticalSliderVar = new Swiper(".scrollVerticalSlider", {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
            el: ".scrollVerticalSlider .swiper-scrollbar",
        },
        mousewheel: true,
    });
});