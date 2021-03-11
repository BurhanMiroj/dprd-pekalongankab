import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";
const swiperFraksi = new Swiper(".swiper-fraksi", {
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    // when window width is <= 999px
    768: {
      slidesPerView: 3,
    },
    // when window width is <= 499px
    499: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 2
    },
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 10
});

const swiperObjekWisata = new Swiper(".swiper-objek-wisata", {
slidesPerView: 1,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  effect: 'fade',
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});