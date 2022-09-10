///// Example 1
{
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    console.log(xhr.readyState, xhr.status);

    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  };

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.send();
}

///// Example 2
{
  getData('http://date.jsontest.com/', (err, data) => {
    if (err) {
      console.log('OOPS', err);
      return;
    }

    const txt = ` at ${data.time}`;
    document.querySelector('h1').append(txt);
  });

  function getData(url, fn) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';

    xhr.onload = function () {
      const status = xhr.status;

      if (status === 200) {
        console.log(xhr.response);
        fn(null, xhr.response);
      } else {
        fn(status);
      }
    };

    xhr.send();
  }
}

///// Example 3
{
  const url = 'https://randomuser.me/api';
  const method = 'GET';
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.responseType = 'json';

  xhr.onload = function () {
    const status = xhr.status;

    if (status === 200) {
      const user = xhr.response.results[0];
      console.log(user);

      const li = document.createElement('li');
      const img = document.createElement('img');
      const p = document.createElement('p');

      img.src = user.picture.large;
      p.innerHTML = `${user.name.first} ${user.name.last}`;

      document.getElementById('user').appendChild(li);
      li.appendChild(img);
      li.appendChild(p);
    }
  };

  xhr.onerror = function () {
    console.log('oops');
  };

  xhr.send();
}
