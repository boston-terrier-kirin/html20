const faqContainer = document.querySelector('.faq-container');

faqContainer.addEventListener('click', (e) => {
  const clicked = e.target;
  clicked.parentElement.parentElement.classList.toggle('active');
});
