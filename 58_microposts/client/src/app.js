import { http } from './http';
import { ui } from './ui';

document.addEventListener('DOMContentLoaded', async () => {
  await getPosts();
});

document.querySelector('.post-submit').addEventListener('click', async () => {
  const id = document.querySelector('#id').value;
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  if (title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
    return;
  }

  const data = {
    title,
    body,
  };

  if (!id) {
    await http.post('http://localhost:8081/posts', data);
    ui.showAlert('Post Added', 'alert alert-success');
  } else {
    await http.put(`http://localhost:8081/posts/${id}`, data);
    ui.showAlert('Post Updated', 'alert alert-success');
    ui.changeFormState('add');
  }

  ui.clearFields();
  await getPosts();
});

document.querySelector('#posts').addEventListener('click', async (event) => {
  event.preventDefault();

  // POINT：イベントバブリング, event bubbling, dataset
  const elem = event.target;
  if (elem.parentElement.classList.contains('delete')) {
    const id = elem.parentElement.dataset.id;
    await http.delete(`http://localhost:8081/posts/${id}`);

    ui.showAlert('Post Removed', 'alert alert-success');
    await getPosts();
  }
});

document.querySelector('#posts').addEventListener('click', async (event) => {
  event.preventDefault();

  // POINT：イベントバブリング, event bubbling, dataset
  const elem = event.target;
  if (elem.parentElement.classList.contains('edit')) {
    const id = elem.parentElement.dataset.id;
    const post = await http.get(`http://localhost:8081/posts/${id}`);
    ui.fillForm(post);
  }
});

document
  .querySelector('.card-form')
  .addEventListener('click', async (event) => {
    event.preventDefault();

    // POINT：イベントバブリング, event bubbling, dataset
    const elem = event.target;

    if (elem.classList.contains('post-cancel')) {
      ui.changeFormState('add');
      return;
    }
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
