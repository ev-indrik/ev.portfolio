const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [65, 65, 60, 60, 45, 40];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  // select nav section
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 15) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });

      navbarLinks[i].classList.add("change");
    }
  });

  // progress bar
  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

// window.addEventListener("resize", () => {
//   window.location.reload();
// });

// formspree - clear a form after submission
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

document
  .getElementById("scroll-to-top")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
