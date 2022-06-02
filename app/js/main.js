document.addEventListener("DOMContentLoaded", function () {
  function navigation() {
    const anchors = document.querySelectorAll(
      ".nav__link, .hero__link, .accordion-list__inner-link, .logo, .inner-link"
    );

    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href");
        console.log(blockID);

        document.querySelector(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function heroSlider() {
    var swiper1 = new Swiper(".hero__swiper", {
      slidesPerView: 1,

      slidesPerGroup: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  heroSlider();
});
