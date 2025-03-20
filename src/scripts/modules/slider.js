export function slider() {
    const portfolioSlider = new Swiper('.portfolio_slider', {
        slidesPerView: 1,
        spaceBetween: getRem() * 2,
        freeMode: true,
        brealpoint: {
            768: {
                slidesPerView: 3,
                spaceBetween: getRem() * 2.63,
                freeMode: true,
            }
        }
    });
    const helpSlider = new Swiper('.help_slider', {
        slidesPerView: 1,
        spaceBetween: getRem() * 1.5,
        freeMode: true,
        brealpoint: {
            768: {
                slidesPerView: 3,
                spaceBetween: getRem() * 2.63,
                freeMode: true,
            }
        }
    });
    const reviewsSlider = new Swiper('.reviews_slider', {
        slidesPerView: 1,
        spaceBetween: getRem() * 8,
        brealpoint: {
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: getRem() * 8,
                pagination: {
                    el: ".reviews-pagination",
                    clickable: true,
                },
            }
        }
    });

    function getRem() {
        var element = document.querySelector("html");
        var fontSize = window.getComputedStyle(element).fontSize;
        var numericFontSize = parseInt(fontSize, 10);
        return fontSize.slice(0, -2)
    }
}

// Для корректной работы необходимо подключить и активировать эту функцию в app.js

// Пример подключения: import { slider } from "./путь/к/файлу/slider.js";

// Активация: slider();