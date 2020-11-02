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
      if (med.matches) {
        document.querySelector(".sidebar").style.width = "45vw";
      } else {
        document.querySelector(".sidebar").style.width = "25vw";
      }

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
