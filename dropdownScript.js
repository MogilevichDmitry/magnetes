const languageDropdown = document.getElementById("dropdown");
const languageCheckbox = document.getElementById("checkbox-toggle");
const burgerCheckbox = document.getElementById("menu__toggle");
const burgerContent = document.getElementById("burgerContent");
document.addEventListener("click", function () {
  languageCheckbox.checked = false;
  burgerCheckbox.checked = false;
  languageDropdown.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  burgerContent.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
