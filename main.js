let menuList = document.getElementById("menuList");
let hambMenu = document.getElementById("hamb-logo");
let body = document.getElementById("body");

// Начальное состояние меню
menuList.style.maxHeight = "0px";

// Переменная для отслеживания состояния меню
let isMenuOpen = false;

function toggleMenu() {
  if (!isMenuOpen) {
    // Открываем меню
    menuList.style.maxHeight = "100%";
    menuList.style.backgroundColor = "black";
    menuList.style.paddingTop = "100px";
    menuList.style.paddingBottom = "100px";
    body.style.overflow = "hidden"; // Отключаем прокрутку страницы
    hambMenu.src = "/img/back.svg"; // Меняем изображение на крестик
    isMenuOpen = true; // Меняем состояние на открытое меню
  } else {
    // Закрываем меню
    menuList.style.maxHeight = "0px";
    menuList.style.backgroundColor = "none";
    menuList.style.paddingTop = "0px";
    menuList.style.paddingBottom = "0px";
    body.style.overflow = "auto"; // Включаем прокрутку страницы
    hambMenu.src = "/img/Hamburger Menu.svg"; // Меняем изображение обратно на бургер
    isMenuOpen = false; // Меняем состояние на закрытое меню
  }
}
