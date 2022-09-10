const showPopupBtn = document.getElementById('show-popup');
const okBtn = document.getElementById('ok');
const popup = document.getElementById('popup-container');
const message = document.getElementById('message');

showPopupBtn.addEventListener('click', () => {
  message.innerText = 'Are you sure?';
  popup.style.display = 'flex';
});

okBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
