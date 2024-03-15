const burger = document.querySelector(".menu-trigger");
const header = document.querySelector("header");
const allMenu = document.querySelector(".allMenu");
const navAll = document.querySelector(".nav__all");
const priceElements = document.querySelectorAll(".items__price");
const itemsImg = document.querySelectorAll(".items__img");

burger.addEventListener("click", function () {
  this.classList.toggle("active");
});

navAll.addEventListener("click", function () {
  allMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  if (header && allMenu) {
    const headerHeight = header.offsetHeight;
    allMenu.style.top = headerHeight + "px";
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

//각 가격 할인값
priceElements.forEach((priceElement) => {
  const normalPriceElement = priceElement.querySelector(".items__price--normal");
  const discountElement = priceElement.querySelector(".items__price--discount");
  const totalPriceElement = priceElement.querySelector(".items__price--total");

  const normalPrice = parseFloat(normalPriceElement.textContent.replace(",", ""));
  const discountPercent = parseFloat(discountElement.textContent);

  const discountedPrice = normalPrice * (1 - discountPercent / 100);

  totalPriceElement.textContent = discountedPrice.toLocaleString();
});

//아이템 이미지
itemsImg.forEach((item, index) => {
  const imageUrl = `url('../img/item__img-${index + 1}.png')`;
  item.style.backgroundImage = imageUrl;
});
