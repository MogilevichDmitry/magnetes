function disableBurgerScroll() {
  const burger = document.getElementById("menu__toggle");
  if (burger.checked) {
    document.body.classList.toggle("lock-scroll");
  } else {
    document.body.classList.remove("lock-scroll");
  }
}
function scrollToContact() {
  const element = document.getElementById("contacts");
  const topPos = element.getBoundingClientRect().top;
  window.scroll({
    top: topPos,
    behavior: "smooth",
  });
}
