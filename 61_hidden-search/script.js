const search = document.querySelector('.search');
const input = document.querySelector('.search .input');
const btn = document.querySelector('.search .btn');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});
