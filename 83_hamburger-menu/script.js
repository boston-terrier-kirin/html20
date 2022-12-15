const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('change');
  navbar.classList.toggle('change');
  overlay.classList.toggle('change');
});
