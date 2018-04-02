$(function() {

    'use strict';

    /*******************************************************/
    //DROPDOWN
    /*******************************************************/
    $('.dropdown').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active').siblings('.dropdown').removeClass('active');
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

});
