const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
  document.querySelector('.left-side-menu').classList.toggle('close');
  document.querySelector('.content-wrapper').classList.toggle('close');
  document.querySelector('.custom-navbar').classList.toggle('close');
});
