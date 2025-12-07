define([
    'jquery',
    'matchMedia'
], function ($, mediaCheck) {
    'use strict';

    $(function () {

        function toggleAccordion(button, content) {
            $(content).toggleClass('is-open');
            $(button).toggleClass('is-rotated');
        }

        function enableMobileAccordion() {
            $('#accordion-1').off('click').on('click', function () {
                toggleAccordion('#accordion-1', '.footer-content-1');
            });

            $('#accordion-2').off('click').on('click', function () {
                toggleAccordion('#accordion-2', '.footer-content-2');
            });

            $('#accordion-3').off('click').on('click', function () {
                toggleAccordion('#accordion-3', '.footer-content-3');
            });
        }

        enableMobileAccordion();

        mediaCheck({
            media: '(min-width: 769px)',

            entry: function () {
                $('.footer-content-1, .footer-content-2, .footer-content-3')
                    .addClass('is-open');

                // ícones somem no desktop → garante reset
                $('#accordion-1, #accordion-2, #accordion-3').removeClass('is-rotated');
            },

            exit: function () {
                $('.footer-content-1, .footer-content-2, .footer-content-3')
                    .removeClass('is-open');

                $('#accordion-1, #accordion-2, #accordion-3').removeClass('is-rotated');

                enableMobileAccordion();
            }
        });

    });

});
