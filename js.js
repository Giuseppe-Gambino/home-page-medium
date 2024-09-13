window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 400) {
    header.classList.add("headerColor");
  } else {
    header.classList.remove("headerColor");
  }
});
