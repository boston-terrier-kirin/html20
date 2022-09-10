document.getElementById('button1').addEventListener('click', () => {
  fetch('test.txt')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('output').innerHTML = data;
    })
    .catch((err) => {
      console.log(err);
    });
});

document.getElementById('button2').addEventListener('click', () => {
  fetch('post.json')
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('output').innerHTML = data
        .map((post) => `<li>${post.title}</li>`)
        .join('');
    })
    .catch((err) => {
      console.log(err);
    });
});

document.getElementById('button3').addEventListener('click', () => {
  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('output').innerHTML = data
        .map((user) => `<li>${user.login}</li>`)
        .join('');
    })
    .catch((err) => {
      console.log(err);
    });
});
