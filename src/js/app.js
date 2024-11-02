import * as bootstrap from "./modules/bootstrap.bundle.min.js";
import reviews from "./modules/reviews.js";

const splideList = document.querySelector(".splide__list");
const reviewsQuantatyIndex = document.querySelector(".reviews__quantity-index");
const reviewsQuantatyTotal = document.querySelector(".reviews__quantity-total");

const slider = new Splide("#slider", {
  perPage: 4,
  gap: "1rem",
  flickMaxPages: 1,
  perPage: 3,
  arrows: false,
  breakpoints: {
    1199: {
      perPage: 2,
    },
    767: {
      perPage: 1,
    },
  },
});

const setReviews = () => {
  reviews.forEach((el) => {
    let slide = document.createElement("li");
    slide.className = "splide__slide";

    let date = document.createElement("p");
    date.className = "splide__slide-date";
    date.innerText = el.date;
    slide.append(date);

    let name = document.createElement("p");
    name.className = "splide__slide-title";
    name.innerText = `${el.name} (${el.playersQuantity})`;
    slide.append(name);

    let raiting = document.createElement("div");
    raiting.className = "splide__slide-raiting";
    for (let i = 0; i < el.raiting; i++) {
      let raitingStar = document.createElement("img");
      raitingStar.src = "./img/star.svg";
      raiting.append(raitingStar);
    }
    slide.append(raiting);

    let event = document.createElement("p");
    event.className = "splide__slide-event";
    event.innerText = el.event;
    slide.append(event);

    let feedback = document.createElement("p");
    feedback.className = "splide__slide-feedback";
    feedback.innerText = el.feedback;
    slide.append(feedback);

    splideList.append(slide);
  });
};

setReviews();
slider.mount();

const setReviewsQuantity = () => {
  reviewsQuantatyTotal.innerText = slider.length;
  reviewsQuantatyIndex.innerText = `${slider.index + 1} / `;
};

setReviewsQuantity();

slider.on("moved", setReviewsQuantity);
