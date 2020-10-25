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

$(window).scroll(function () {
  /* Check the location of each desired element */
  $(".intro").each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object) {
      $(this).animate(
        {
          opacity: "1",
        },
        1000
      );
    }
  });
});

$(window).scroll(function () {
  /* Check the location of each desired element */
  $(".intro__about-container").each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object) {
      $(this).animate(
        {
          opacity: "1",
        },
        1000
      );
    }
  });
});
