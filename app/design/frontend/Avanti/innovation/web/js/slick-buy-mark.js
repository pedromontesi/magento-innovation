define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    $(document).ready(function () {
        $('.slick-buy-mark').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 3,
            arrows: true,
        });
    });
});


