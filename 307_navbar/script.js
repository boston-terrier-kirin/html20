const links = document.querySelectorAll('.navbar-link');

links.forEach((link) => {
  link.addEventListener('click', () => {
    links.forEach((link) => (link.className = 'navbar-link'));

    link.classList.add('change');
  });
});
