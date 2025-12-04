define([
    'jquery',
    'matchMedia'
], function ($, mediaCheck) {
    'use strict';

    $(function () {

        // Mobile-first (768px)
        function enableMobileAccordion() {
            $('#accordion-1').off('click').on('click', function () {
                $('.footer-content-1').toggleClass('is-open');
            });

            $('#accordion-2').off('click').on('click', function () {
                $('.footer-content-2').toggleClass('is-open');
            });

            $('#accordion-3').off('click').on('click', function () {
                $('.footer-content-3').toggleClass('is-open');
            });
        }

        enableMobileAccordion(); // padrão mobile

        // Desktop (>= 769px)
        mediaCheck({
            media: '(min-width: 769px)',

            entry: function () {
                $('.footer-content-1, .footer-content-2, .footer-content-3')
                    .addClass('is-open');
            },

            exit: function () {
                $('.footer-content-1, .footer-content-2, .footer-content-3')
                    .removeClass('is-open');

                enableMobileAccordion();
            }
        });

    });

});
