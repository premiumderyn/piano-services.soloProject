document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger-btn");
  const menu = document.getElementById("nav-list");
  const closeBtn = document.getElementById("close-btn");

  const toggleMenu = () => {
    burger.classList.toggle("header__burger--active");
    menu.classList.toggle("nav__list--active");

    document.body.style.overflow = menu.classList.contains("nav__list--active")
      ? "hidden"
      : "";
  };

  burger.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
});
