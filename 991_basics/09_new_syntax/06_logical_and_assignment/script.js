console.log('Logical OR Assignment &&=');

// ログインしていれば...のようか場合に使えそうだが、letにする必要があるのでイマイチ。
let loggedInUser = {
  username: 'Taco',
};

// 左側がtruesyの場合のみ、値をセットする。
loggedInUser &&= { ...loggedInUser, breed: 'French Bulldog' };

console.log(loggedInUser);
