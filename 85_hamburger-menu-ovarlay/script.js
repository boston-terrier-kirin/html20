const menuIcon = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');

menuIcon.addEventListener('click', () => {
  navigation.classList.toggle('change');
});
