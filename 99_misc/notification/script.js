const notification = document.getElementById('notification-container');

const btn = document.querySelector('button');
btn.addEventListener('click', showNotification);

function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 5000);
}
