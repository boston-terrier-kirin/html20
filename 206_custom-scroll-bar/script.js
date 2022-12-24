document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.custom-scroll');
  const contentHeight = getComputedStyle(content)
    .getPropertyValue('height')
    .replace('px', '');

  console.log('outerHeight', window.outerHeight);
  console.log('contentHeight', contentHeight);

  if (contentHeight > window.outerHeight) {
    content.classList.add('scroll-y');
  }
});
