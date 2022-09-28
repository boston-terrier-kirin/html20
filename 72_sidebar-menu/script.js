document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');
});

document.querySelector('.nav-list').addEventListener('click', (e) => {
  const parent = e.target.parentElement;

  if (parent.classList.contains('nav-link')) {
    parent.nextElementSibling.classList.toggle('change');
    parent.classList.toggle('change');
  }
});
