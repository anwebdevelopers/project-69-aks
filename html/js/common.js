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

});
