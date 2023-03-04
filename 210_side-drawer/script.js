const btn = document.querySelector('.hamburger');

btn.addEventListener('click', () => {
  btn.querySelector('.bar1').classList.toggle('animateBar1');
  btn.querySelector('.bar2').classList.toggle('animateBar2');
  btn.querySelector('.bar3').classList.toggle('animateBar3');

  const mobileNav = document.querySelector('.mobileNav');
  mobileNav.classList.toggle('openDrawer');
});
