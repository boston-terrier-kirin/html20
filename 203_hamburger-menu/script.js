const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const container = document.querySelector('.container');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('change');
  navbar.classList.toggle('change');
  container.classList.toggle('change');
});
