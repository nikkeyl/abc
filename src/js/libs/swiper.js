import Swiper, { Pagination } from 'swiper';

import "@scss/components/swiper";

export function initSliders() {
    if (document.querySelector('.consulting__slider')) {
        new Swiper('.consulting__slider', {
            modules: [Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 30,
            height: 455,
            speed: 800,
            simulateTouch: true,
            preloadImages: true,
            touchRatio: 2,
            lazy: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                550: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                }
            }
        });
    }
    if (document.querySelector('.acceleration__slider')) {
        new Swiper('.acceleration__slider', {
            modules: [Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 30,
            autoHeight: true,
            speed: 800,
            simulateTouch: true,
            preloadImages: true,
            lazy: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                550: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                805: {
                    slidesPerView: 3
                },
                1090: {
                    slidesPerView: 4,
                    slidesPerGroup: 4
                }
            }
        });
    }
}