const fruites = ['apple', 'orange', 'banana'];

// pythonのようにはいかない
console.log('fruites[-1]', fruites[-1]);

// マイナスインデックスができる。
console.log(fruites.at(-1));
console.log(fruites.at(-2));
console.log(fruites.at(-3));

console.log(fruites.at(-4));
