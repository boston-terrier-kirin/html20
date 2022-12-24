async function myFunc() {
  return 'Hello';
}

// これはPromiseが返ってくる
console.log(myFunc());

myFunc().then((res) => {
  console.log('myFunc: ', res);
});

//////////

async function myFunc2() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('myFunc2: Hello');
    }, 1000);
  });

  return await promise;
}

myFunc2().then((res) => {
  console.log(res);
});

//////////

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = res.json();

  return data;
}

// これもPromiseが返ってくる。
console.log('getUsers', getUsers());

getUsers().then((data) => console.log('getUsers().then()', data));

// これはできないので、最後は .then することになってしまうんだろうと思う。
// const users = await getUsers();
