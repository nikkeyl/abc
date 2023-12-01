import '@scss/style';

import { initSliders } from '@js/libs/swiper'; window.addEventListener('load', initSliders); /* https://swiperjs.com/ */

import { menuInit } from '@js/components/menu'; menuInit();

import { headerScroll } from '@js/modules/scroll/headerScroll'; headerScroll();

import { pageNavigation } from '@js/modules/scroll/scroll'; pageNavigation();

import { lazyMedia } from '@js/libs/lazyLoad'; lazyMedia /* https://github.com/verlok/vanilla-lazyload */

import '@js/modules/scroll/watcher';

import { formFieldsInit } from '@js/components/forms/formInit';
formFieldsInit();

import { formSubmit } from '@js/components/forms/formSubmit'; formSubmit();

import { webp } from '@js/modules/webp'; webp();

import { spollers } from '@js/components/spollers'; spollers();