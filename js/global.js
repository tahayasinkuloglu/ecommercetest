const navOpen = document.getElementById("navOpen");
const navMenu = document.getElementById("navMenu");
const navCon = document.getElementById("navCon");
const shop = document.getElementById("shop");
const shopMenu = document.getElementById("shopMenu");
const descHeader = document.getElementById("descHeader");
const desc = document.getElementById("desc");
const deliveryHeader = document.getElementById("deliveryHeader");
const delivery = document.getElementById("delivery");
const sizeHeader = document.getElementById("sizeHeader");
const size = document.getElementById("size");
const plus = document.querySelectorAll(".fa-plus");

if (descHeader) {
  descHeader.addEventListener("click", (e) => {
    e.preventDefault();
    desc.classList.toggle("h-full");
  });
}

if (deliveryHeader) {
  deliveryHeader.addEventListener("click", (e) => {
    e.preventDefault();
    delivery.classList.toggle("h-full");
  });
}

if (sizeHeader) {
  sizeHeader.addEventListener("click", (e) => {
    e.preventDefault();
    size.classList.toggle("h-full");
    size.classList.toggle("opacity-100");
  });
}

if (navOpen) {
  navOpen.addEventListener("click", () => {
    if (navMenu.classList.contains("-left-full")) {
      navMenu.classList.remove("-left-full");
      navOpen.classList.remove("fa-bars");
      shop.classList.remove("fa-xmark");
      navMenu.classList.add("left-0");
      navOpen.classList.add("fa-xmark");
      shopMenu.classList.add("-right-full");
      shopMenu.classList.remove("right-0");
      shop.classList.add("fa-bag-shopping");
    } else {
      navMenu.classList.remove("left-0");
      navOpen.classList.remove("fa-xmark");
      navMenu.classList.add("-left-full");
      navOpen.classList.add("fa-bars");
    }
  });
}

if (shop) {
  shop.addEventListener("click", () => {
    if (shopMenu.classList.contains("-right-full")) {
      shopMenu.classList.remove("-right-full");
      shopMenu.classList.add("right-0");
      shop.classList.remove("fa-bag-shopping");
      shop.classList.add("fa-xmark");
      navMenu.classList.add("-left-full");
      navMenu.classList.remove("left-0");
      navCon.classList.remove("bg-white");
      navOpen.classList.remove("fa-xmark");
      navOpen.classList.add("fa-bars");
    } else {
      shopMenu.classList.remove("right-0");
      shopMenu.classList.add("-right-full");
      shop.classList.add("fa-bag-shopping");
      shop.classList.remove("fa-xmark");
    }
  });
}
