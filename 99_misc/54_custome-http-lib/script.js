const http = new EasyHttp();

const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'john@test.com',
};

http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then((users) => console.log('POST', users))
  .catch((error) => console.log(error));

http
  .put('https://jsonplaceholder.typicode.com/users/1', data)
  .then((users) => console.log('PUT', users))
  .catch((error) => console.log(error));

http
  .delete('https://jsonplaceholder.typicode.com/users/1')
  .then((users) => console.log('DELETE', users))
  .catch((error) => console.log(error));

http
  .get('https://jsonplaceholder.typicode.com/users')
  .then((users) => console.log('GET', users))
  .catch((error) => console.log(error));
