$(document).ready(function () {

    var wv = $(window).width(),
        wh = $(window).height();


    setTimeout(() => {
        $('.setGridAuto .setGridDiv').each(function () {
            var thisLength = $(this).find('.gridCol').length;
            if (thisLength == 4 || thisLength == 7 || thisLength == 10) {
                $(this).addClass('lastBig');
            } else if (thisLength == 5 || thisLength == 8 || thisLength == 11) {
                $(this).addClass('lastTwoBig');
            } else {

            }
        });
    }, 10);
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
        if (wv < 767) {
            if ($('.servicesSec .aos-init').hasClass('aos-animate')) {

                $('.servicesSec ul li:first-child').addClass('active');
                setTimeout(() => {
                    $('.servicesSec .aos-init').addClass('removeAnimation');
                }, 1000);

            } else {
                $('.servicesSec ul li:first-child').removeClass('active');
                $('.servicesSec .aos-init').removeClass('removeAnimation');
            }
            if ($('.servicesSec .aos-init').hasClass('removeAnimation')) {
                $('.servicesSec ul li:first-child').removeClass('active');
            }
        }
    }, 350);

    jQuery(window).scroll(function (event) {
        didScroll = true;
    });

    function hasScrolled() {
        var st = jQuery(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > 50) {
            jQuery('html').addClass('solid');
        } else {
            jQuery('html').removeClass('solid');
        }

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            jQuery('html').addClass('nav-up');
        } else {

            // Scroll Up
            if (st + jQuery(window).height() < jQuery(document).height()) {
                jQuery('html').removeClass('nav-up');
            }
        }

        lastScrollTop = st;
    }

    $(document).on('click', 'header .mainHeader .linksDiv>ul>li.innerMenu>a', function () {
        if ($(this).parent('li').hasClass('active')) {
            $('html').removeClass('menuOpen overflowHidden');
            $(this).parent('li').removeClass('active');
            $(this).next('.innerMenuDiv').slideUp();

        } else {
            $('html').addClass('menuOpen overflowHidden');
            $(this).parents('.linksDiv').find('li').removeClass('active');
            $(this).parent('li').addClass('active');
            $(this).parents('.linksDiv').find('.innerMenuDiv').slideUp();
            $(this).next('.innerMenuDiv').slideDown();
        }
    });
    $(document).on('click', 'header .mainHeader .linksDiv>ul>li .innerMenuDiv .innerLinksList .closedMenu', function () {
        $('html').removeClass('menuOpen mobSearchOpen overflowHidden');
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
                $('html').removeClass('mobMenuOpen overflowHidden mobSearchOpen');
                $('header .mainHeader .linksDiv>ul>li .innerMenuDiv .innerLinksList .closedMenu').click();
            } else {
                $('html').addClass('mobMenuOpen overflowHidden mobSearchOpen');
            }
        });
        $(document).on('click', 'header .mainHeader .logoDiv .mobMenu .mobSearch', function () {
            if ($('html').hasClass('mobSearchOpen')) {
                $('html').removeClass('mobSearchOpen overflowHidden mobMenuOpen');
                $('header .mainHeader .linksDiv>ul>li .innerMenuDiv .innerLinksList .closedMenu').click();
            } else {
                $('html').addClass('mobSearchOpen overflowHidden');
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
        if ($(this).parents('.formControls').length) {
            $(this).parents('.formControls').addClass('active');
        }
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

    $('.otpInput').on('keyup', function () {
        if ($(this).val().length == 4) {
            $('.verifyBtn').focus();
        }
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

    $(document).on('click', '.filterListDiv .clearBtnDiv .clearBtn', function (e) {
        $(this).parents('.filterListDiv').find('.dropDownDiv span').each(function () {
            $(this).text($(this).attr('data-placeholder'));

        });
        $(this).addClass('disabled');
    });
    $('.filterListDiv .dropDownDiv .dropList ul li').on('click', function () {

        $(this).parents('.filterListDiv').find('.disabled').removeClass('disabled');

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
    var tabSwiperSliderrVar;
    setTimeout(() => {
        tabSwiperSliderrVar = new Swiper(".tabSwiperSlider", {
            direction: "horizontal",
            slidesPerView: "1",
            effect: "fade",
            loop: false,
            autoHeight: true,
            allowTouchMove: false,
            watchOverflow: true,
        });
    }, 10);

    $(document).on('click', '.tabWrapper .tabHeading li a', function (e) {
        var $this = $(this);
        $this.parents('.tabHeading').find('a').removeClass('active');
        $this.addClass('active');
        tabSwiperSliderrVar.slideTo($this.attr('data-slide'), 1);

    });

    var planSliderVar = new Swiper(".planSliderActive", {
        direction: "horizontal",
        slidesPerView: "auto",
        navigation: {
            nextEl: '.planSliderActive .swiper-button-next',
            prevEl: '.planSliderActive .swiper-button-prev',
        },
        pagination: {
            el: ".planSliderActive .swiper-pagination",
            dynamicBullets: true,
        },

    });


    var lightBoxSliderVar = new Swiper(".lightBoxSliderActive", {
        direction: "horizontal",
        slidesPerView: "auto",
        navigation: {
            nextEl: '.imageLightBoxWrapper .swiper-button-next',
            prevEl: '.imageLightBoxWrapper .swiper-button-prev',
        },
        pagination: {
            el: ".imageLightBoxWrapper .swiper-pagination",
            type: "fraction",
        }, on: {
            slideChange: function () {
                if ($('.lightBoxSliderActive iframe').length > 0) {
                    $('.lightBoxSliderActive .swiper-slide iframe').attr('src', '');
                    setTimeout(() => {
                        $('.lightBoxSliderActive .swiper-slide-active iframe').attr('src', $('.lightBoxSliderActive .swiper-slide-active iframe').attr('data-src'));
                    }, 100);
                }
            },
        }
    });
    $(document).on('click', '.enquireForm', function () {
        $('html').addClass('enquirePopupOpen overflowHidden');
    });
    $(document).on('click', '.enquirePopupWrapper  .popupContent .closed ', function () {
        $('html').removeClass('enquirePopupOpen overflowHidden');
        $(this).parents('.enquirePopupWrapper').removeClass('active');

    });
    $(document).on('click', '.enquirePopupWrapper .btnClick', function () {
        $(this).parents('.enquirePopupWrapper').addClass('active');
    });

    $(document).on('click', '.enquirePopupWrapper .prevArrowBtn', function () {
        $(this).parents('.enquirePopupWrapper').removeClass('active');
    });

    $(document).on('click', '.imgPopupClick', function () {
        var $this = $(this);
        $('html').addClass('imgLightBoxOpen overflowHidden');

        // $('.imagePopupWrapper .mainImg').attr('src', $(this).attr('data-img'));

        if ($this.attr('data-popup-img')) {
            if ($this.parents('.onlyPopup').length > 0) {
                $this.parents('.onlyPopup').find('.imgPopupClick[data-popup-img]').each(function () {
                    $('.imageLightBoxWrapper .lightBoxSliderActive .swiper-wrapper').append('<div class="swiper-slide"><div ><img src="' + $(this).attr('data-popup-img') + '" alt="Banner" class="img-fluid"><p>' + $(this).attr('data-title') + '</p> </div> </div > ')

                });
            } else {
                $('.imgPopupClick[data-popup-img]').each(function () {

                    $('.imageLightBoxWrapper .lightBoxSliderActive .swiper-wrapper').append('<div class="swiper-slide"><div ><img src="' + $(this).attr('data-popup-img') + '" alt="Banner" class="img-fluid"><p>' + $(this).attr('data-title') + '</p> </div> </div > ')

                });
            }

        } else if ($this.attr('data-popup-iframe').length > 0) {
            if ($this.parents('.onlyPopup').length > 0) {
                $this.parents('.onlyPopup').find('.imgPopupClick[data-popup-iframe]').each(function () {

                    $('.imageLightBoxWrapper .lightBoxSliderActive .swiper-wrapper').append('<div class="swiper-slide"><div ><iframe data-src="' + $(this).attr('data-popup-iframe') + '" alt="Banner" class="img-fluid" frameborder="0" allowfullscreen=""></iframe><p>' + $(this).attr('data-title') + '</p> </div> </div > ')
                    console.log('false')

                });
            }
            else {
                $('.imgPopupClick[data-popup-iframe]').each(function () {

                    $('.imageLightBoxWrapper .lightBoxSliderActive .swiper-wrapper').append('<div class="swiper-slide"><div ><iframe data-src="' + $(this).attr('data-popup-iframe') + '" alt="Banner" class="img-fluid" frameborder="0" allowfullscreen=""></iframe><p>' + $(this).attr('data-title') + '</p> </div> </div > ')
                    console.log('false')

                });
            }
            setTimeout(() => {
                $('.lightBoxSliderActive .swiper-slide-active iframe').attr('src', $('.lightBoxSliderActive .swiper-slide-active iframe').attr('data-src'));
            }, 100);
        } else {

        }


        $('.imageLightBoxWrapper .popupContent h5').text($('.projectTitle').text());
        lightBoxSliderVar.slideTo($(this).attr('data-click'), 0);
    });
    $(document).on('click', '.imageLightBoxWrapper  .closed ', function () {
        $('html').removeClass('imgLightBoxOpen overflowHidden');
        $('.imageLightBoxWrapper .lightBoxSliderActive .swiper-wrapper .swiper-slide').remove();
    });
    // var bodScrollVerticalSliderVar;
    $(document).on('click', '.bodDiv .bodCard', function () {
        $('.bodWrapper .popupContent .bodImg').attr('src', $(this).find('img').attr('src'));
        $('.bodWrapper .popupContent .bodContent h5').text($(this).find('p').text());
        $('.bodWrapper .popupContent .bodContent h6').text($(this).find('span').text());
        $('.bodWrapper .popupContent .bodContent .descDiv p').text($(this).attr('data-desc'));
        $('html').addClass('bodPopupOpen overflowHidden');
        // setTimeout(() => {
        //     bodScrollVerticalSliderVar = new Swiper(".bodScrollVerticalSlider", {
        //         direction: "vertical",
        //         slidesPerView: "auto",
        //         freeMode: true,
        //         scrollbar: {
        //             el: ".bodScrollVerticalSlider .swiper-scrollbar",
        //             draggable: true,
        //         },
        //         mousewheel: true,
        //     });
        // }, 10);

    });

    $(document).on('click', '.bodWrapper .popupContent .closed ', function () {
        $('html').removeClass('bodPopupOpen overflowHidden');
        $('.bodWrapper .popupContent .bodImg').attr('src', '');
        $('.bodWrapper .popupContent .bodContent h5').text('');
        $('.bodWrapper .popupContent .bodContent h6').text('');
        $('.bodWrapper .popupContent .bodContent .descDiv p').text('');
        // bodScrollVerticalSliderVar.destroy(true, true);
    });

    jQuery(document).on('.popupWrapper', 'click', function (e) {
        var container = jQuery(".popupWrapper .popupContent");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.popupWrapper .closed').click();
        }
    });


    $(document).on('click', '.accordionMain .accordionHeading', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next('.accordionContent').slideUp();
        } else {
            $(this).parents('.accordionMain').find('.accordionHeading').removeClass('active').next('.accordionContent').slideUp();
            $(this).addClass('active');
            $(this).next('.accordionContent').slideDown();
        }
    });

    // $(".accordionMain .accordionHeading").slice(0, 2).show();
    // $(document).on('click', '.accordionMain .faqLoadMore .loadMore', function (e) {
    //     e.preventDefault();
    //     $(".accordionMain .accordionHeading:hidden").slice(0, 1000).slideDown();
    //     if ($(".accordionMain .accordionHeading:hidden").length == 0) {
    //         $(this).text($(this).attr('data-less'));
    //         $(this).removeClass('loadMore').addClass('loadLess');
    //     }
    // });
    // $(document).on('click', '.accordionMain .faqLoadMore .loadLess', function (e) {
    //     e.preventDefault();
    //     $(".accordionMain .accordionHeading").slice(2, 1000).slideUp();
    //     $(this).parents('.accordionMain').find('.accordionHeading').removeClass('active').next('.accordionContent').slideUp();
    //     $(this).text($(this).attr('data-more'));
    //     $(this).removeClass('loadLess').addClass('loadMore');
    // });



    $(".priceListWrapper ul li").slice(0, 4).show();
    $(document).on('click', '.priceListWrapper  .loadMore', function (e) {
        e.preventDefault();
        $(".priceListWrapper ul li:hidden").slice(0, 1000).slideDown();
        if ($(".priceListWrapper ul li:hidden").length == 0) {
            $(this).text($(this).attr('data-less'));
            $(this).removeClass('loadMore').addClass('loadLess');
        }
    });
    $(document).on('click', '.priceListWrapper  .loadLess', function (e) {
        e.preventDefault();
        $(".priceListWrapper ul li").slice(4, 1000).slideUp();
        $(this).text($(this).attr('data-more'));
        $(this).removeClass('loadLess').addClass('loadMore');
    });

    $('.loadDataDiv').each(function () {
        if (wv > 767) {
            $(this).find(".loadData").slice(0, $(this).attr('data-slice')).show();
            if ($(this).find(".loadData").length == $(this).attr('data-slice')) {
                $(this).find('.loadMore').fadeOut();
            }
        } else {
            $(this).find(".loadData").slice(0, $(this).attr('data-mob-slice')).show();
            if ($(this).find(".loadData").length == $(this).attr('data-mob-slice')) {
                $(this).find('.loadMore').fadeOut();
            }
        }

    });
    $(document).on('click', '.loadDataDiv  .loadMore', function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.parents('.loadDataDiv').find(".loadData:hidden").slice(0, 1000).slideDown();
        if ($this.parents('.loadDataDiv').find(".loadData:hidden").length == 0) {
            $this.text($this.attr('data-less'));
            $this.removeClass('loadMore').addClass('loadLess');
        }

        setTimeout(() => {
            AOS.refresh();
            if ($this.parents('.tabSwiperSlider').length > 0) {
                $this.parents('.tabSwiperSlider').find('.swiper-wrapper').css('height', $this.parents('.swiper-slide-active').outerHeight());
            }

        }, 10);
    });
    $(document).on('click', '.loadDataDiv  .loadLess', function (e) {
        e.preventDefault();
        var $this = $(this);

        if (wv > 767) {
            $this.parents('.loadDataDiv').find(".loadData").slice($this.parents('.loadDataDiv').attr('data-slice'), 1000).slideUp();
        } else {
            $this.parents('.loadDataDiv').find(".loadData").slice($this.parents('.loadDataDiv').attr('data-mob-slice'), 1000).slideUp();
        }
        if ($(this).parents('.accordionMain')) {
            $(this).parents('.accordionMain').find('.accordionHeading').removeClass('active').next('.accordionContent').slideUp();
        }
        $this.text($this.attr('data-more'));
        $this.removeClass('loadLess').addClass('loadMore');
        setTimeout(() => {
            AOS.refresh();
            if ($this.parents('.tabSwiperSlider').length > 0) {
                $this.parents('.tabSwiperSlider').find('.swiper-wrapper').css('height', $this.parents('.swiper-slide-active').outerHeight());
            }


        }, 500);
    });

    $('.formControls').each(function () {

        var $input = $(this).find('input');

        var $span = $(this).find('.dropDownDiv span');

        // Check if $input exists and has a value

        var inputLength = $input.length > 0 ? $input.val().length : 0;

        // Check if $span exists and has text content

        var spanLength = $span.length > 0 ? $span.text().length : 0;

        // Check if either $input or $span has content

        if (inputLength > 0 || spanLength > 0) {

            $(this).addClass('active');

        } else {

            $(this).removeClass('active');

        }

    });

    $('.formControls input').on('keypress', function () {
        if (($(this).val().length > 0)) {
            $(this).parents('.formControls').addClass('active');
        } else {
            $(this).parents('.formControls').removeClass('active');
        }
    });

    $('.globalSearchDiv .searchDiv input').on('keyup', function () {
        var $this = $(this);
        setTimeout(() => {
            if (($this.val().length >= 1)) {
                $this.parents('.globalSearchDiv').find('.serachAutofillDiv').slideDown();
            } else {
                $this.parents('.globalSearchDiv').find('.serachAutofillDiv').slideUp();
                $(this).parents('.innerSearchDiv').find('.recentlyDiv').show();
                $(this).parents('.innerSearchDiv').next('.finalResultDiv').hide();
            }
        }, 10);
    });
    $('.globalSearchDiv .searchDiv .searchButtonDiv .searchBtn').on('click', function () {
        if ($('.globalSearchDiv .searchDiv input').val().length >= 1) {
            $(this).parents('.innerSearchDiv').find('.recentlyDiv').hide();
            $(this).parents('.innerSearchDiv').next('.finalResultDiv').show();
            $(this).parents('.globalSearchDiv').find('.serachAutofillDiv').slideUp();
        }
    });

    $('header .mainHeader .logoDiv .mobMenu .mobSearch').on('click', function () {
        $('.searchLi>a').click();
    });

    var secondNavSliderVar = new Swiper(".secondNavSliderActive", {
        direction: "horizontal",
        slidesPerView: "auto",
        navigation: {
            nextEl: '.secodaryNav .swiper-button-next',
            prevEl: '.secodaryNav .swiper-button-prev',
        },
    });

    var blogSliderVar = new Swiper(".blogSliderActive", {
        direction: "horizontal",
        slidesPerView: "auto",
        navigation: {
            nextEl: '.blogSliderActive .swiper-button-next',
            prevEl: '.blogSliderActive .swiper-button-prev',
        },
        pagination: {
            el: ".blogSliderActive .swiper-pagination",
            dynamicBullets: true,
        },
    });


    let spotLightSliderSelector = '.spotlightSliderActive',
        interleaveOffset = 0.5;

    // Main Slider
    let spotLightSliderOptions = {
        loop: false,
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
            el: ".ourPrideSliderActive .swiper-pagination",
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
        observer: true,
        observeParents: true,
        resizeObserver: true,
        scrollbar: {
            el: ".scrollVerticalSlider .swiper-scrollbar",
            draggable: true,
        },
        mousewheel: true,
    });

});