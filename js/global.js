const navOpen = document.getElementById("navOpen");
const navMenu = document.getElementById("navMenu");
const navCon = document.getElementById("navCon");
const shop = document.getElementById("shop");
const shopMenu = document.getElementById("shopMenu");

if (navOpen) {
  navOpen.addEventListener("click", () => {
    if (navMenu.classList.contains("hidden")) {
      navMenu.classList.remove("hidden");
      navMenu.classList.add("flex");
      navCon.classList.add("bg-white");
      navOpen.classList.remove("fa-bars");
      navOpen.classList.add("fa-xmark");
      shopMenu.classList.remove("flex");
      shopMenu.classList.add("hidden");
      shop.classList.add("fa-bag-shopping");
      shop.classList.remove("fa-xmark");
    } else {
      navMenu.classList.add("hidden");
      navMenu.classList.remove("flex");
      navCon.classList.remove("bg-white");
      navOpen.classList.remove("fa-xmark");
      navOpen.classList.add("fa-bars");
    }
  });
}

if (shop) {
  shop.addEventListener("click", () => {
    if (shopMenu.classList.contains("hidden")) {
      shopMenu.classList.remove("hidden");
      shopMenu.classList.add("flex");
      shop.classList.remove("fa-bag-shopping");
      shop.classList.add("fa-xmark");
      navMenu.classList.add("hidden");
      navMenu.classList.remove("flex");
      navCon.classList.remove("bg-white");
      navOpen.classList.remove("fa-xmark");
      navOpen.classList.add("fa-bars");
    } else {
      shopMenu.classList.remove("flex");
      shopMenu.classList.add("hidden");
      shop.classList.add("fa-bag-shopping");
      shop.classList.remove("fa-xmark");
    }
  });
}

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 50,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    500: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },

    1280: {
      slidesPerView: 4,
    },
  },
});