const swiper = new Swiper(".swiper", {
  speed: 2000,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
  },
});