define([
    'jquery',
    'slick',
    'matchMedia'
], function ($, slick, mediaCheck) {
    'use strict';

    mediaCheck({
        media: '(min-width: 769px)',

        entry: function () {
            if ($('.slick-by-brand').length &&
                !$('.slick-by-brand').hasClass('slick-initialized')) {

                $('.slick-by-brand').slick({
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    arrows: true
                });
            }
        },

        exit: function () {
            if ($('.slick-by-brand').hasClass('slick-initialized')) {
                $('.slick-by-brand').slick('unslick');
            }
        }
    });
});
