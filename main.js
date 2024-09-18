let menuList = document.getElementById("menuList");
let hambMenu = document.getElementById("hamb-logo");
let body = document.getElementById("body");

// Начальное состояние меню
menuList.style.maxHeight = "0px";

function toggleMenu() {
  // Получаем ширину экрана
  const screenWidth = window.innerWidth;

  if (screenWidth > 1054) {
    // Если ширина экрана больше 1054px, устанавливаем стили для закрытого меню
    menuList.style.maxHeight = "0px";
    menuList.style.backgroundColor = "none";
    menuList.style.paddingTop = "0px";
    menuList.style.paddingBottom = "0px";
    body.style.overflow = "auto"; // Разрешаем прокрутку
    hambMenu.src = "/img/Hamburger Menu.svg"; // Меняем изображение обратно на бургер
    return; // Выходим из функции
  }

  // Открываем меню если ширина экрана меньше или равна 1054px
  if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
    menuList.style.maxHeight = "100%";
    menuList.style.backgroundColor = "black";
    menuList.style.paddingTop = "100px";
    menuList.style.paddingBottom = "100px";
    body.style.overflow = "hidden";
    hambMenu.src = "/img/back.svg"; // Меняем изображение на крестик
  } else {
    // Закрываем меню
    menuList.style.maxHeight = "0px";
    menuList.style.backgroundColor = "none";
    menuList.style.paddingTop = "0px";
    menuList.style.paddingBottom = "0px";
    body.style.overflow = "auto";
    hambMenu.src = "/img/Hamburger Menu.svg"; // Меняем изображение обратно на бургер
  }
}

// Добавляем обработчик события изменения размера окна
window.addEventListener("resize", toggleMenu);
