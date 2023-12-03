const navOpen = document.getElementById("navOpen");
const navMenu = document.getElementById("navMenu");
const navCon = document.getElementById("navCon");
const shop = document.getElementById("shop");
const shopMenu = document.getElementById("shopMenu");
const plus = document.querySelectorAll(".fa-plus");
const man = document.getElementById("man");
const women = document.getElementById("women");
const kids = document.getElementById("kids");
const spor = document.getElementById("spor");
const newSeason = document.getElementById("newSeason");
const specialSale = document.getElementById("specialSale");
const man_container = document.getElementById("man_container");
const women_container = document.getElementById("women_container");
const kids_container = document.getElementById("kids_container");
const spor_container = document.getElementById("spor_container");
const newSeason_container = document.getElementById("newSeason_container");
const specialSale_container = document.getElementById("specialSale_container");
const back = document.getElementsByClassName("back");
const back2 = document.getElementsByClassName("back2");
const btnNav = document.getElementById("btnNav");
const customUl = document.getElementsByClassName("customUl");
const highlightsMenu_man = document.getElementById("highlightsMenu_man");
const highlights_man = document.getElementById("highlights_man");
const shoesMenu_man = document.getElementById("shoesMenu_man");
const shoes_man = document.getElementById("shoes_man");
const clothingMenu_man = document.getElementById("clothingMenu_man");
const clothing_man = document.getElementById("clothing_man");
const sporMenu_man = document.getElementById("sporMenu_man");
const spor_man = document.getElementById("spor_man");
const accesoriesMenu_man = document.getElementById("accesoriesMenu_man");
const accesories_man = document.getElementById("accesories_man");
const highlightsMenu_women = document.getElementById("highlightsMenu_women");
const highlights_women = document.getElementById("highlights_women");
const shoesMenu_women = document.getElementById("shoesMenu_women");
const shoes_women = document.getElementById("shoes_women");
const clothingMenu_women = document.getElementById("clothingMenu_women");
const clothing_women = document.getElementById("clothing_women");
const sporMenu_women = document.getElementById("sporMenu_women");
const spor_women = document.getElementById("spor_women");
const accesoriesMenu_women = document.getElementById("accesoriesMenu_women");
const accesories_women = document.getElementById("accesories_women");
const highlightsMenu_kids = document.getElementById("highlightsMenu_kids");
const highlights_kids = document.getElementById("highlights_kids");
const shoesMenu_kids = document.getElementById("shoesMenu_kids");
const shoes_kids = document.getElementById("shoes_kids");
const clothingMenu_kids = document.getElementById("clothingMenu_kids");
const clothing_kids = document.getElementById("clothing_kids");
const sporMenu_kids = document.getElementById("sporMenu_kids");
const spor_kids = document.getElementById("spor_kids");
const accesoriesMenu_kids = document.getElementById("accesoriesMenu_kids");
const accesories_kids = document.getElementById("accesories_kids");
const highlightsMenu_spor = document.getElementById("highlightsMenu_spor");
const highlights_spor = document.getElementById("highlights_spor");
const shoesMenu_spor = document.getElementById("shoesMenu_spor");
const shoes_spor = document.getElementById("shoes_spor");
const clothingMenu_spor = document.getElementById("clothingMenu_spor");
const clothing_spor = document.getElementById("clothing_spor");
const sporMenu_spor = document.getElementById("sporMenu_spor");
const spor_spor = document.getElementById("spor_spor");
const accesoriesMenu_spor = document.getElementById("accesoriesMenu_spor");
const accesories_spor = document.getElementById("accesories_spor");
const highlightsMenu_newSeason = document.getElementById(
  "highlightsMenu_newSeason"
);
const highlights_newSeason = document.getElementById("highlights_newSeason");
const shoesMenu_newSeason = document.getElementById("shoesMenu_newSeason");
const shoes_newSeason = document.getElementById("shoes_newSeason");
const clothingMenu_newSeason = document.getElementById(
  "clothingMenu_newSeason"
);
const clothing_newSeason = document.getElementById("clothing_newSeason");
const sporMenu_newSeason = document.getElementById("sporMenu_newSeason");
const spor_newSeason = document.getElementById("spor_newSeason");
const accesoriesMenu_newSeason = document.getElementById(
  "accesoriesMenu_newSeason"
);
const accesories_newSeason = document.getElementById("accesories_newSeason");
const highlightsMenu_specialSale = document.getElementById(
  "highlightsMenu_specialSale"
);
const highlights_specialSale = document.getElementById(
  "highlights_specialSale"
);
const shoesMenu_specialSale = document.getElementById("shoesMenu_specialSale");
const shoes_specialSale = document.getElementById("shoes_specialSale");
const clothingMenu_specialSale = document.getElementById(
  "clothingMenu_specialSale"
);
const clothing_specialSale = document.getElementById("clothing_specialSale");
const sporMenu_specialSale = document.getElementById("sporMenu_specialSale");
const spor_specialSale = document.getElementById("spor_specialSale");
const accesoriesMenu_specialSale = document.getElementById(
  "accesoriesMenu_specialSale"
);
const accesories_specialSale = document.getElementById(
  "accesories_specialSale"
);
const inputPassword = document.getElementById("inputPassword");
const passwordBtn = document.getElementById("passwordBtn");
const addCollection = document.getElementById("addCollection");
const collection = document.getElementById("collection");
const closeCollection = document.getElementById("closeCollection");
const addAddress = document.getElementById("addAddress");
const address = document.getElementById("address");
const closeAddress = document.getElementById("closeAddress");
const headerBtn = document.getElementsByClassName("headerBtn");
const customFilter = document.getElementsByClassName("customFilter");
const customFilterToggle =
  document.getElementsByClassName("customFilterToggle");
const customFilterMenu = document.getElementById("customFilterMenu");
const navbar = document.getElementById("navBar3");
const saveFilterBtn = document.getElementById("saveFilter");
let prevScrollPos = window.scrollY;
const moreColorBtn = document.getElementById("moreColorBtn");
const filterContainer = document.getElementById("filterContainer");
const customChevronDown = document.getElementsByClassName("customChevronDown");
const imgSliderContainer = document.getElementById("imgSliderContainer");
const imgSlider = document.getElementById("imgSlider");

const imgArray = [
  "../assets/nike-2.webp",
  "../assets/nike-3.webp",
  "../assets/nike-4.webp",
  "../assets/nike-5.webp",
  "../assets/nike-6.webp",
  "../assets/nike-5.webp",
  "../assets/nike-4.webp",
  "../assets/nike-3.webp",
  "../assets/nike-2.webp",
  "../assets/nike-3.webp",
];

for (const item of imgArray) {
  const img = document.createElement("img");
  img.src = item;
  img.classList.add("customImg");
  img.setAttribute("onmouseover", "imgFunction(this)");
  imgSlider?.appendChild(img);
}

moreColorBtn?.addEventListener("click", () => {
  const moreColor = document.getElementById("moreColor");
  if (moreColorBtn.innerText == "Daha fazla göster +") {
    moreColorBtn.innerText = "Daha az göster -";
    moreColor.classList.remove("h-0");
    moreColor.classList.remove("overflow-hidden");
  } else {
    moreColorBtn.innerText = "Daha fazla göster +";
    moreColor.classList.add("h-0");
    moreColor.classList.add("overflow-hidden");
  }
});

if (btnNav) {
  btnNav.addEventListener("click", () => {
    for (let i = 0; i < customUl.length; i++) {
      if (customUl[i].classList.contains("max-lg:-left-full")) {
        customUl[i].classList.remove("max-lg:-left-full");
        customUl[i].classList.add("left-0");
      } else {
        customUl[i].classList.remove("left-0");
        customUl[i].classList.add("max-lg:-left-full");
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
  if (man) {
    man.addEventListener("click", () => {
      man_container.classList.add("left-0");
    });

    highlightsMenu_man.addEventListener("click", () => {
      highlights_man.classList.add("left-0");
    });

    shoesMenu_man.addEventListener("click", () => {
      shoes_man.classList.add("left-0");
    });

    clothingMenu_man.addEventListener("click", () => {
      clothing_man.classList.add("left-0");
    });

    sporMenu_man.addEventListener("click", () => {
      spor_man.classList.add("left-0");
    });

    accesoriesMenu_man.addEventListener("click", () => {
      accesories_man.classList.add("left-0");
    });
  }

  if (women) {
    women.addEventListener("click", () => {
      women_container.classList.add("left-0");
    });

    highlightsMenu_women.addEventListener("click", () => {
      highlights_women.classList.add("left-0");
    });

    shoesMenu_women.addEventListener("click", () => {
      shoes_women.classList.add("left-0");
    });

    clothingMenu_women.addEventListener("click", () => {
      clothing_women.classList.add("left-0");
    });

    sporMenu_women.addEventListener("click", () => {
      spor_women.classList.add("left-0");
    });

    accesoriesMenu_women.addEventListener("click", () => {
      accesories_women.classList.add("left-0");
    });
  }

  if (kids) {
    kids.addEventListener("click", () => {
      kids_container.classList.add("left-0");
    });

    highlightsMenu_kids.addEventListener("click", () => {
      highlights_kids.classList.add("left-0");
    });

    shoesMenu_kids.addEventListener("click", () => {
      shoes_kids.classList.add("left-0");
    });

    clothingMenu_kids.addEventListener("click", () => {
      clothing_kids.classList.add("left-0");
    });

    sporMenu_kids.addEventListener("click", () => {
      spor_kids.classList.add("left-0");
    });

    accesoriesMenu_kids.addEventListener("click", () => {
      accesories_kids.classList.add("left-0");
    });
  }

  if (spor) {
    spor.addEventListener("click", () => {
      spor_container.classList.add("left-0");
    });

    highlightsMenu_spor.addEventListener("click", () => {
      highlights_spor.classList.add("left-0");
    });

    shoesMenu_spor.addEventListener("click", () => {
      shoes_spor.classList.add("left-0");
    });

    clothingMenu_spor.addEventListener("click", () => {
      clothing_spor.classList.add("left-0");
    });

    sporMenu_spor.addEventListener("click", () => {
      spor_spor.classList.add("left-0");
    });

    accesoriesMenu_spor.addEventListener("click", () => {
      accesories_spor.classList.add("left-0");
    });
  }

  if (newSeason) {
    newSeason.addEventListener("click", () => {
      newSeason_container.classList.add("left-0");
    });

    highlightsMenu_newSeason.addEventListener("click", () => {
      highlights_newSeason.classList.add("left-0");
    });

    shoesMenu_newSeason.addEventListener("click", () => {
      shoes_newSeason.classList.add("left-0");
    });

    clothingMenu_newSeason.addEventListener("click", () => {
      clothing_newSeason.classList.add("left-0");
    });

    sporMenu_newSeason.addEventListener("click", () => {
      spor_newSeason.classList.add("left-0");
    });

    accesoriesMenu_newSeason.addEventListener("click", () => {
      accesories_newSeason.classList.add("left-0");
    });
  }

  if (specialSale) {
    specialSale.addEventListener("click", () => {
      specialSale_container.classList.add("left-0");
    });

    highlightsMenu_specialSale.addEventListener("click", () => {
      highlights_specialSale.classList.add("left-0");
    });

    shoesMenu_specialSale.addEventListener("click", () => {
      shoes_specialSale.classList.add("left-0");
    });

    clothingMenu_specialSale.addEventListener("click", () => {
      clothing_specialSale.classList.add("left-0");
    });

    sporMenu_specialSale.addEventListener("click", () => {
      spor_specialSale.classList.add("left-0");
    });

    accesoriesMenu_specialSale.addEventListener("click", () => {
      accesories_specialSale.classList.add("left-0");
    });
  }

  // bir önceki kategoriye dönüş
  for (let i = 0; i < back.length; i++) {
    back[i].addEventListener("click", () => {
      if (man) {
        highlights_man.classList.remove("left-0");
        shoes_man.classList.remove("left-0");
        clothing_man.classList.remove("left-0");
        spor_man.classList.remove("left-0");
        accesories_man.classList.remove("left-0");
      }

      if (women) {
        highlights_women.classList.remove("left-0");
        shoes_women.classList.remove("left-0");
        clothing_women.classList.remove("left-0");
        spor_women.classList.remove("left-0");
        accesories_women.classList.remove("left-0");
      }

      if (kids) {
        highlights_kids.classList.remove("left-0");
        shoes_kids.classList.remove("left-0");
        clothing_kids.classList.remove("left-0");
        spor_kids.classList.remove("left-0");
        accesories_kids.classList.remove("left-0");
      }

      if (spor) {
        highlights_spor.classList.remove("left-0");
        shoes_spor.classList.remove("left-0");
        clothing_spor.classList.remove("left-0");
        spor_spor.classList.remove("left-0");
        accesories_spor.classList.remove("left-0");
      }

      if (newSeason) {
        highlights_newSeason.classList.remove("left-0");
        shoes_newSeason.classList.remove("left-0");
        clothing_newSeason.classList.remove("left-0");
        spor_newSeason.classList.remove("left-0");
        accesories_newSeason.classList.remove("left-0");
      }

      if (specialSale) {
        highlights_specialSale.classList.remove("left-0");
        shoes_specialSale.classList.remove("left-0");
        clothing_specialSale.classList.remove("left-0");
        spor_specialSale.classList.remove("left-0");
        accesories_specialSale.classList.remove("left-0");
      }
    });
  }

  // ana kategoriye dönüş
  for (let i = 0; i < back2.length; i++) {
    back2[i].addEventListener("click", () => {
      if (man) {
        man_container.classList.remove("left-0");
      }

      if (women) {
        women_container.classList.remove("left-0");
      }

      if (kids) {
        kids_container.classList.remove("left-0");
      }

      if (spor) {
        spor_container.classList.remove("left-0");
      }

      if (newSeason) {
        newSeason_container.classList.remove("left-0");
      }

      if (specialSale) {
        specialSale_container.classList.remove("left-0");
      }
    });
  }
}

navOpen?.addEventListener("click", () => {
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

shop?.addEventListener("click", () => {
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

if (customFilterMenu) {
  for (let i = 0; i < customFilterToggle.length; i++) {
    customFilterToggle[i].addEventListener("click", (e) => {
      e.preventDefault();
      if (customFilterMenu.classList.contains("hidden")) {
        customFilterMenu.classList.remove("hidden");
        customFilterMenu.classList.add("fixed");
      } else {
        customFilterMenu.classList.remove("fixed");
        customFilterMenu.classList.add("hidden");
      }
    });
  }
}

saveFilterBtn?.addEventListener("click", (e) => {
  e.preventDefault();
});

if (headerBtn) {
  for (let i = 0; i < headerBtn.length; i++) {
    headerBtn[i].addEventListener("click", () => {
      const releatedCustomFilter = customFilter[i];
      releatedCustomFilter.classList.toggle("h-0");
      releatedCustomFilter.classList.toggle("overflow-hidden");

      const down = customChevronDown[i];
      if (down.classList.contains("fa-chevron-down")) {
        down.classList.remove("fa-chevron-down");
        down.classList.add("fa-chevron-up");
      } else {
        down.classList.remove("fa-chevron-up");
        down.classList.add("fa-chevron-down");
      }
    });
  }
}

if (addCollection) {
  addCollection.addEventListener("click", () => {
    if (collection.classList.contains("hidden")) {
      collection.classList.remove("hidden");
    }
  });

  closeCollection.addEventListener("click", () => {
    if (!collection.classList.contains("hidden")) {
      collection.classList.add("hidden");
    }
  });

  window.addEventListener("click", (e) => {
    if (e.target === collection) {
      collection.classList.add("hidden");
    }
  });
}

if (addAddress) {
  addAddress.addEventListener("click", () => {
    if (address.classList.contains("hidden")) {
      address.classList.remove("hidden");
    }
  });

  closeAddress.addEventListener("click", () => {
    if (!address.classList.contains("hidden")) {
      address.classList.add("hidden");
    }
  });

  window.addEventListener("click", (e) => {
    if (e.target === address) {
      address.classList.add("hidden");
    }
  });
}

if (passwordBtn) {
  passwordBtn.addEventListener("click", () => {
    if (inputPassword.type === "password") {
      passwordBtn.classList.add("fa-eye");
      passwordBtn.classList.remove("fa-eye-slash");
      inputPassword.type = "text";
    } else {
      inputPassword.type = "password";
      passwordBtn.classList.add("fa-eye-slash");
      passwordBtn.classList.remove("fa-eye");
    }
  });
}

function showFilter() {
  const showFilter = document.getElementById("showFilter");
  if (filterContainer.classList.contains("lg:hidden")) {
    filterContainer.classList.remove("lg:hidden");
    filterContainer.classList.add("lg:sticky");
    showFilter.innerText = "Filtreleri Gizle";
  } else {
    filterContainer.classList.remove("lg:sticky");
    filterContainer.classList.add("lg:hidden");
    showFilter.innerText = "Filtreleri Göster";
  }
}

function imgFunction(img) {
  const mainImg = document.getElementById("imgBox");
  mainImg.src = img.src;
}

function toggleNavbar() {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navBar3").style.top = "82px";
    document.getElementById("navBar3").style.opacity = "1";
  } else {
    document.getElementById("navBar3").style.top = "-100px";
    document.getElementById("navBar3").style.opacity = "0";
  }

  prevScrollPos = currentScrollPos;
}

window.onscroll = toggleNavbar;
