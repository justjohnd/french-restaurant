//Mobile hamburger
const hamburger = document.querySelector('.hamburger');
const lines = document.querySelectorAll('.line');
const hamburgerClose = document.querySelector('.hamburger-close');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener("click", () => {
  hamburgerClose.classList.toggle('toggle');
  lines.forEach(line => {
    line.classList.toggle('toggle');
  });
  mobileMenu.classList.toggle('toggle');
});

