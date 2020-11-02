const min = window.matchMedia("(max-width: 37.5em)");
const med = window.matchMedia("(max-width: 43.75em)");
const max = window.matchMedia("(max-width: 28.1em)");

function checkMin() {
  if (min.matches) {
    document.querySelector(".header__resume").innerHTML = "Resume" + "&rarr;";
  } else {
    document.querySelector(".header__resume").innerHTML =
      "View My Resume" + "&rarr;";
  }
}

checkMin();
window.addEventListener("resize", () => checkMin());

document
  .querySelector(".sidebar__label")
  .addEventListener("click", function () {
    if (document.querySelector(".sidebar__input").checked) {
      document.querySelector(".sidebar").style.width = 0;

      document.querySelector(".sidebar__label").style.top = "5rem";
      document.querySelector(".sidebar__label").style.left = "-8rem";
      document.getElementById("main").style.filter = "none";
    } else {
      med.matches
        ? (document.querySelector(".sidebar").style.width = "45vw")
        : (document.querySelector(".sidebar").style.width = "25vw");

      document.querySelector(".sidebar__label").style.top = "50%";
      document.querySelector(".sidebar__label").style.left = "-2.5rem";
      document.getElementById("main").style.filter = "blur(5px)";
    }
  });

document.querySelectorAll(".menu").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".sidebar").style.width = 0;

    document.querySelector(".sidebar__label").style.top = "5rem";
    document.querySelector(".sidebar__label").style.left = "-8rem";
    document.getElementById("main").style.filter = "none";
    document.querySelector(".sidebar__input").checked = false;
  });
});

(function () {
  scrollTo();
})();

function scrollTo() {
  const links = document.querySelectorAll(".scroll");
  links.forEach((each) => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  var targetID = respond
    ? respond.getAttribute("href")
    : this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
  const checkIfDone = setInterval(function () {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";

      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}
