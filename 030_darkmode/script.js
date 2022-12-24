const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  container.classList.toggle('dark');

  if (container.classList.contains('dark')) {
    toggle.firstElementChild.className = 'far fa-moon';
  } else {
    toggle.firstElementChild.className = 'far fa-sun';
  }
});
