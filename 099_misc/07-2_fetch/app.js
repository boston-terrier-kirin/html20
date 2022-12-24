///// Example 1
{
  const url = 'https://jsonplaceholder.typicode.com/todos';
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

///// Example 2
{
  const post = {
    title: 'TEST',
    body: 'This is my post',
    userID: 1,
  };

  const header = {
    'Content-Type': 'application/json: charset=utf-8',
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    header,
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

///// Example 3
{
  const url = 'https://randomuser.me/api';
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const user = data.results[0];
      console.log(user);

      const li = document.createElement('li');
      const img = document.createElement('img');
      const p = document.createElement('p');

      img.src = user.picture.large;
      p.innerHTML = `${user.name.first} ${user.name.last}`;

      document.getElementById('user').appendChild(li);
      li.appendChild(img);
      li.appendChild(p);
    });
}
