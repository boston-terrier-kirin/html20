const dropdownBg = document.querySelector('.dropdown-bg');

Array.from(document.querySelectorAll('.nav-item')).forEach((item) => {
  item.addEventListener('mouseover', () => {
    dropdownBg.style.opacity = '1';
    dropdownBg.style.visibility = 'visible';
    dropdownBg.style.width = getComputedStyle(item.lastElementChild).width;
    dropdownBg.style.height = getComputedStyle(item.lastElementChild).height;

    dropdownBg.style.top = `${item.lastElementChild.offsetTop}px`;
    dropdownBg.style.left = `${item.lastElementChild.offsetLeft}px`;
  });

  item.addEventListener('mouseout', () => {
    dropdownBg.style.opacity = '0';
    dropdownBg.style.visibility = 'hidden';
  });
});
