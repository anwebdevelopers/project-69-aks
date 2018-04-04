$(function() {

    'use strict';

    /*******************************************************/
    //DROPDOWN
    /*******************************************************/
    $('.dropdown').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('.dropdown').not($(this)).removeClass('active');
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown').removeClass('active');
        }
        e.stopPropagation();
    });


    /*******************************************************/
    //IOS CSS HOVER FIX
    /*******************************************************/
    $('.main__grid-item').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active').siblings('.main__grid-item').removeClass('active');
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.main__grid-item').length) {
            $('.main__grid-item').removeClass('active');
        }
        e.stopPropagation();
    });


    /*******************************************************/
    //SLIDER
    /*******************************************************/
    $('.slider').addClass('owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 600
    });

    /*******************************************************/
    //CAROUSEL
    /*******************************************************/
    $('.carousel').addClass('owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        nav: true,
        navText: '',
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 600,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 2
            },
            769: {
                items: 3
            },
            993: {
                items: 4
            }
        }
    });

    /*******************************************************/
    //HEADER BANNER
    /*******************************************************/

    $('.header__banner').each(function() {
        $(this).find('.header__banner-img-item').not(':first').hide();
        $(this).find('.header__banner-text-item').not(':first').hide();
        $(this).find('.header__banner-text').after('<div class="header__banner-dots"></div>');
        var length = $(this).find('.header__banner-text-item').length;
        for ( var i = 0; i < length; i++ ) {
            $(this).find('.header__banner-dots').append('<div class="header__banner-dot"></div>');
        }
        $(this).find('.header__banner-dots').on('click', '.header__banner-dot:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active').closest('.header__banner').find('.header__banner-img-item').eq($(this).index()).fadeIn(300).siblings().fadeOut(300).end().end().end().find('.header__banner-text-item').eq($(this).index()).slideDown(300).siblings().slideUp(300);
        });
    });

    //*****************************************************//
    //GOOGLE MAP
    //*****************************************************//
    if(typeof google === 'object' && typeof google.maps === 'object' && $('#map').length) {
        var markerPosition = new google.maps.LatLng(57.610287, 39.881991);

        function initialize() {
            var loc, map;

            loc = new google.maps.LatLng(57.610287, 39.881991);

            map = new google.maps.Map(document.getElementById('map'), {
                 zoom: 15,
                 center: loc,
                 mapTypeId: google.maps.MapTypeId.ROADMAP,
                 scrollwheel: false
            });

            var marker = new google.maps.Marker({
                map: map,
                position: markerPosition,
                visible: true,
                icon: 'img/icon-map.png'
            });
        }
        initialize();
        google.maps.event.addDomListener(window, 'load', initialize);
    }

    //************************************************************
    //SECTION SCROLL
    //************************************************************
    // var scrollifyOpt = {
    //     section: '.section',
    //     sectionName: 'name',
    //
    //     before: function(i, sections) {
    //
    //         var sectionHref = sections[i].attr('data-name').replace(/\s+/g, '-'),
    //             sectionColor = sections[i].attr('data-color');
    //
    //         $('.section').removeClass('active');
    //         sections[i].addClass('active');
    //
    //         $('.pagination a').removeClass('active');
    //         $('.pagination').find('a[href=\"#' + sectionHref + '\"]').addClass('active');
    //         $('body').attr('data-color', sectionColor);
    //         console.log( );
    //         if (sections[i].index('.section') === sections.length - 1) {
    //             $('.footer__button-scroll-top').fadeIn();
    //             $('.footer__button-scroll-down').fadeOut();
    //         } else {
    //             $('.footer__button-scroll-down').fadeIn();
    //             $('.footer__button-scroll-top').fadeOut();
    //         }
    //     },
    //     afterRender: function(i, sections) {
    //         var pagination = '<div class=\"pagination\">',
    //             activeClass = '';
    //         $('.section').each(function(i) {
    //             activeClass = '';
    //             var sectionName = $(this).attr('data-name'),
    //                 href = sectionName.replace(/\s+/g, '-');
    //             if (i === 0) {
    //                 activeClass = 'active';
    //             }
    //             pagination += '<a class=\"' + activeClass + '\" href=\"#' + href + '\"></a>';
    //         });
    //         pagination += "</div>";
    //         $('body').prepend(pagination);
    //
    //
    //         $('.pagination a, .menu a').on('click', function() {
    //             $.scrollify.move($(this).attr('href'));
    //         });
    //         $('.footer__button-scroll-down').on('click', $.scrollify.next);
    //     }
    // };
    //
    // function initialScroll(opt) {
    //     if ($(window).width() <= 1200 || $(window).height() <= 620) {
    //        $.scrollify.setOptions({setHeights:false});
    //        $.scrollify.disable();
    //        $('body').removeAttr('data-color')
    //        $('.section').removeAttr('style').removeClass('active');
    //     } else {
    //        $.scrollify(opt);
    //        $.scrollify.enable();
    //        $.scrollify.setOptions({setHeights:true});
    //     }
    // }
    // initialScroll(scrollifyOpt);

});
