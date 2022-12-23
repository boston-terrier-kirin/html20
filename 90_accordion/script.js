const accordion = document.querySelector('.accordion');

// POINT：Event bubbling, イベントバブリング
accordion.addEventListener('click', (event) => {
  const elem = event.target;
  const parent = elem.parentElement;

  if (parent.classList.contains('item')) {
    event.target.parentElement.classList.toggle('open');
  }
});
