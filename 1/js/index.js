var burger = document.querySelector(".menu-trigger");
var header = document.querySelector("header");
var allMenu = document.querySelector(".allMenu");
var navAll = document.querySelector(".nav__all");

burger.addEventListener("click", function () {
  this.classList.toggle("active");
});

navAll.addEventListener("click", function () {
  allMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  if (header && allMenu) {
    var headerHeight = header.offsetHeight; // header의 높이 구하기
    allMenu.style.top = headerHeight + "px"; // allMenu의 top 값을 header 높이로 설정
  }
});

const swiperMain = new Swiper(".slide__main .swiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperBanner = new Swiper(".slide__banner .swiper", {
  loop: true,
  // centeredSlides: true,
  slidesPerView: "5",
  spaceBetween: 16,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
});
