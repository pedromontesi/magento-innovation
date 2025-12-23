define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    var $banner = $('.slick-banner');

    if ($banner.length && !$banner.hasClass('slick-initialized')) {
        $banner.slick({
            arrows: true
        });
    }
});
