const slider = new Splide("#slider", {
  perPage: 3,
  gap: "2rem",
  perMove: "1",
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
});
slider.mount();

const anchors = document.querySelectorAll("a[href*='#']");
anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = anchor.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

window.onscroll = function () {
  scrollIndication();
};

function scrollIndication() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop; // Текущая позиция прокрутки
  var height = document.documentElement.scrollHeight;
  document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  document.getElementById("myBar").style.width = scrolled + "%";
}
