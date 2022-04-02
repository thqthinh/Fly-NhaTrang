window.addEventListener("load", function () {
  const toggle = document.querySelector(".header__toggle");
  const menu = document.querySelector(".nav");
  const closeMenu = document.querySelector(".nav .close");
  const navOverlay = document.querySelector(".nav-overlay");
  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add("active");
    navOverlay.classList.add('active')
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (
      e.target.matches(".header__toggle, .header__toggle *") ||
      e.target.matches(".nav, .nav *")
    )
      return;
    menu && menu.classList.remove("active");
    navOverlay.classList.remove('active')

  }
  closeMenu.addEventListener("click", handleCloseMenu);
  function handleCloseMenu() {
    menu && menu.classList.remove("active");
    navOverlay.classList.remove('active')
    
  }
  $(document).ready(function () {
    $(".sc-reason.mobile .sc-reason__list").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    });
    $(".sc-tips__gallery.mobile").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: $(".slider-prev"),
      nextArrow: $(".slider-next"),
    });
  });
});
