export function slider() {
    const portfolioSlider = new Swiper('.portfolio_slider', {
        slidesPerView: 3,
        spaceBetween: getRem() * 2.63,
        freeMode: true,
    });
    const help_sliderlider = new Swiper('.help_slider', {
        slidesPerView: 3,
        spaceBetween: getRem() * 1.5,
        freeMode: true,
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