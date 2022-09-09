// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
console.log('original', numbers);

// 先頭に追加
numbers.unshift(120);
console.log('unshift', numbers);

// 先頭を削除
numbers.shift();
console.log('shift', numbers);

// 最後を削除
numbers.pop();
console.log('pop', numbers);

// [1]～[3]を削除
numbers.splice(1, 3);
console.log('splice', numbers);

// [1]を削除
numbers.splice(1, 1);
console.log('splice', numbers);
