const btn = document.querySelector('.navbar-btn');

btn.addEventListener('click', () => {
  document.querySelector('.navbar-wrapper').classList.toggle('change');
});
