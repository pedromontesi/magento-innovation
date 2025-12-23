define([
    'jquery',
    'slick',
    'matchMedia'
], function ($, slick, mediaCheck) {
    'use strict';

    mediaCheck({
        media: '(min-width: 769px)',

        entry: function () {
            if ($('.slick-buy-mark').length &&
                !$('.slick-buy-mark').hasClass('slick-initialized')) {

                $('.slick-buy-mark').slick({
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
            if ($('.slick-buy-mark').hasClass('slick-initialized')) {
                $('.slick-buy-mark').slick('unslick');
            }
        }
    });
});
