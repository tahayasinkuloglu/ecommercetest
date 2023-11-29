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
const man = document.getElementById("man");
const man_con = document.getElementById("man_con");
const back = document.getElementsByClassName("back");
const back2 = document.getElementsByClassName("back2");
const btnNav = document.getElementById("btnNav");
const customUl = document.getElementsByClassName("customUl");
const highlightsMenu = document.getElementById("highlightsMenu");
const shoesMenu = document.getElementById("shoesMenu");
const highlights = document.getElementById("highlights");
const shoes = document.getElementById("shoes");
const body = document.body;

if (btnNav) {
  btnNav.addEventListener("click", () => {
    for (let i = 0; i < customUl.length; i++) {
      if (customUl[i].classList.contains("max-lg:-left-full")) {
        customUl[i].classList.remove("max-lg:-left-full");
        customUl[i].classList.add("left-0");
        body.style.overflow = "auto";
      } else {
        customUl[i].classList.remove("left-0");
        customUl[i].classList.add("max-lg:-left-full");
        body.style.overflow = "hidden";
      }
    }

    if (btnNav.classList.contains("fa-bars")) {
      btnNav.classList.remove("fa-bars");
      btnNav.classList.add("fa-xmark");
    } else {
      btnNav.classList.remove("fa-xmark");
      btnNav.classList.add("fa-bars");
    }
  });

  // genel navbar aç kapa
  man.addEventListener("click", () => {
    man_con.classList.add("left-0");
  });

  // bir önceki kategoriye dönüş
  for (let i = 0; i < back.length; i++) {
    back[i].addEventListener("click", () => {
      highlights.classList.remove("left-0");
      shoes.classList.remove("left-0");
    });
  }

  // ana kategoriye dönüş
  for (let i = 0; i < back2.length; i++) {
    back2[i].addEventListener("click", () => {
      man_con.classList.remove("left-0");
    });
  }

  highlightsMenu.addEventListener("click", () => {
    highlights.classList.add("left-0");
  });

  shoesMenu.addEventListener("click", () => {
    shoes.classList.add("left-0");
  });
}

let scrollPos = window.scrollY;

window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (scrollPos > currentScrollPos) {
    document.getElementById("navBar3").style.top = "82px";
    document.getElementById("navBar3").style.opacity = "1";
  } else {
    document.getElementById("navBar3").style.top = "-100px";
    document.getElementById("navBar3").style.opacity = "0";
  }

  scrollPos = currentScrollPos;
};

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
