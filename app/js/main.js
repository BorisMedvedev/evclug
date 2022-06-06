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


function tabsContent() {
  let tabsBtn = document.querySelectorAll(".btn-list__tab");
  let tabsItem = document.querySelectorAll(".tabs__content");

  tabsBtn.forEach(function (el) {
    el.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) {
        btn.classList.remove("btn-list__tab--active");
        e.currentTarget.classList.add("btn-list__tab--active");

        tabsItem.forEach(function (el) {
          el.classList.remove("tabs__content--active");
          document
            .querySelector(`[data-target='${path}']`)
            .classList.add("tabs__content--active");
        });
      });
    });
  });
}
tabsContent();



function newAccordion() {
  new Accordion(".accordion-list", {
    duration: 600,
    // openOnInit: [0],
    elementClass: "accordion",
    triggerClass: "accordion-list__btn",
    panelClass: "accordion-list__content",
    activeClass: "accordion--active",
  });
}
newAccordion();

//new Accordion('.accordion-container');

