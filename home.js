window.addEventListener("load", function () {
  $(document).ready(function () {
    $(".sc-about__member-list").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
    $(".sc-gallery-slider").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: $(".sc-gallery__btn.--prev"),
      nextArrow: $(".sc-gallery__btn.--next"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      
    });
  });
});
