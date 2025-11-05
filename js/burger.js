document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger-btn");
  const menu = document.getElementById("nav-list");
  const closeBtn = document.getElementById("close-btn");

  const toggleMenu = () => {
    burger.classList.toggle("header__burger--active");
    menu.classList.toggle("nav__list--active");

    const isMenuActive = menu.classList.contains("nav__list--active");

    closeBtn.style.display = isMenuActive ? "block" : "none";

    document.body.style.overflow = isMenuActive ? "hidden" : "";
  };

  burger.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
});
