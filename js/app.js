document
  .querySelector(".sidebar__label")
  .addEventListener("click", function () {
    if (document.querySelector(".sidebar__input").checked) {
      document.querySelector(".sidebar").style.width = 0;

      document.querySelector(".sidebar__label").style.top = "5rem";
      document.querySelector(".sidebar__label").style.left = "-8rem";
      document.getElementById("main").style.filter = "none";
    } else {
      document.querySelector(".sidebar").style.width = "25vw";
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

fadeIn("intro");

fadeIn("intro__about-container");

fadeIn("skill-title");

fadeIn("skills");

fadeIn("section-in");

fadeIn("contact");

function fadeIn(className) {
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $(`.${className}`).each(function (i) {
      var bottom_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate(
          {
            opacity: "1",
          },
          900
        );
      }
    });
  });
}
