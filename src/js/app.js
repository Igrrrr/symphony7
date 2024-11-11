// const slider = new Splide("#slider", {
//   perPage: 4,
//   gap: "1rem",
//   flickMaxPages: 1,
//   perPage: 3,
//   arrows: false,
//   breakpoints: {
//     1199: {
//       perPage: 2,
//     },
//     767: {
//       perPage: 1,
//     },
//   },
// });

// const slider = new Splide("#slider", {
//   perPage: 2,
//   gap: "30px",
// });

// slider.mount();

import Splide from "@splidejs/splide";
new Splide(".splide").mount();

const anchors = document.querySelectorAll("a[href*='#']");
anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault;
    const targetId = anchor.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  });
});
