import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

document.querySelectorAll("[data-swiper]")?.forEach((container) => {
  const type = container.dataset.swiper;

  const next = container.querySelector(".swiper-button-next");
  const prev = container.querySelector(".swiper-button-prev");

  switch (type) {
    case "case": {
      const nav = container.querySelector(".swiper-navigation");
      const pagination = container.querySelector(".swiper-pagination");

      new Swiper(container.querySelector(".swiper"), {
        modules: [Navigation, Pagination],
        slidesPerView: 1.1,
        centeredSlides: true,
        spaceBetween: 20,
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        pagination: {
          el: pagination,
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 1.1,
            spaceBetween: 32,
          },
        },

        on: {
          init() {
            toggleNav(this);
          },
          resize() {
            toggleNav(this);
          },
          update() {
            toggleNav(this);
          },
        },
      });

      function toggleNav(swiper) {
        let perView = swiper.params.slidesPerView;
        if (perView === "auto") {
          perView = Math.floor(swiper.width / swiper.slides[0].offsetWidth);
        }

        if (swiper.slides.length <= perView) {
          nav.classList.add("d-none");
        } else {
          nav.classList.remove("d-none");
        }
      }

      break;
    }

    case "blog-hero": {
      const nav = container.querySelector(".swiper-navigation");

      new Swiper(container.querySelector(".swiper"), {
        modules: [Navigation],
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: next,
          prevEl: prev,
        },

        breakpoints: {
          0: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          576: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        },

        on: {
          init() {
            toggleNav(this);
          },
          resize() {
            toggleNav(this);
          },
          update() {
            toggleNav(this);
          },
        },
      });

      function toggleNav(swiper) {
        if (!nav) return;

        let perView = swiper.params.slidesPerView;
        if (perView === "auto") {
          perView = Math.floor(swiper.width / swiper.slides[0].offsetWidth);
        }

        if (swiper.slides.length <= perView) {
          nav.classList.add("d-none");
        } else {
          nav.classList.remove("d-none");
        }
      }

      break;
    }

    default:
      console.warn(`Неизвестный swiper: ${type}`);
  }
});
