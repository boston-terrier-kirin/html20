import { http } from './http';
import { ui } from './ui';

document.addEventListener('DOMContentLoaded', async () => {
  await getPosts();
});

document.querySelector('.post-submit').addEventListener('click', async () => {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body,
  };

  await http.post('http://localhost:8081/posts', data);
  ui.showAlert('Post addes', 'alert alert-success');
  ui.clearFields();

  await getPosts();
});

async function getPosts() {
  pause(1000);

  const data = await http.get('http://localhost:8081/posts');
  ui.showPosts(data);
}

function pause(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}
