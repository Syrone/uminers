import Swiper from "swiper";
import { Navigation, Pagination, EffectCreative, Thumbs } from "swiper/modules";

document.querySelectorAll("[data-swiper]")?.forEach((container) => {
  const type = container.dataset.swiper;

  const next = container.querySelector(".swiper-button-next");
  const prev = container.querySelector(".swiper-button-prev");

  switch (type) {
    case "product": {
      const thumbsSwiper = new Swiper(
        container.querySelector(".product-hero-thumb .swiper"),
        {
          modules: [Navigation, Pagination],
          direction: "vertical",
          slidesPerView: 3,
          spaceBetween: 8,
          grabCursor: true,
          watchSlidesProgress: true,

          navigation: {
            nextEl: next,
            prevEl: prev,
          },
        },
      );

      new Swiper(container.querySelector(".product-hero-swiper .swiper"), {
        modules: [Navigation, Pagination, Thumbs],
        slidesPerView: 1.125,
        spaceBetween: 16,
        grabCursor: true,

        thumbs: {
          swiper: thumbsSwiper,
        },

        breakpoints: {
          0: {
            slidesPerView: 1.125,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
        },
      });

      break;
    }

    case "gallery": {
      const nav = container.querySelector(".swiper-navigation");
      const pagination = container.querySelector(".swiper-pagination");

      new Swiper(container.querySelector(".swiper"), {
        modules: [Navigation, Pagination, EffectCreative],
        effect: "creative",
        slidesPerView: 1.5,
        spaceBetween: 32,
        creativeEffect: {
          limitProgress: 2,

          prev: {
            translate: ["-120%", 0, -200],
            scale: 0.8,
            opacity: 0.4,
          },

          next: {
            translate: ["120%", 0, -200],
            scale: 0.8,
            opacity: 0.4,
          },
        },
        loop: true,
        grabCursor: true,
        centeredSlides: true,

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
            slidesPerView: 1.375,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 2.75,
            spaceBetween: 32,
          },
          992: {
            slidesPerView: 2.9,
            spaceBetween: 52,
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

    case "case": {
      const nav = container.querySelector(".swiper-navigation");
      const pagination = container.querySelector(".swiper-pagination");

      new Swiper(container.querySelector(".swiper"), {
        modules: [Navigation, Pagination],
        initialSlide: 1,
        slidesPerView: 1.1,
        spaceBetween: 20,
        grabCursor: true,
        centeredSlides: true,
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
          480: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          768: {
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
        grabCursor: true,
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
