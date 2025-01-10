var toggleButton = document.querySelector(".toggle");
var menu = document.querySelector("#main-menu");

toggleButton.addEventListener("click", function () {
  menu.classList.toggle("active");
});