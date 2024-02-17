console.log(
  '=== isNaN(n) returns true if n is NaN or n is a value that cannot be coerced into a number'
);
console.log('0 / 0', isNaN(0 / 0));
console.log('true', isNaN(true));
console.log('[]', isNaN([]));
console.log('abc', isNaN('abc'));

console.log(
  '=== Number.isNaN(n) returns true only if n is NaN -- everything else returns false'
);
console.log('0 / 0', Number.isNaN(0 / 0));
console.log('true', Number.isNaN(true));
console.log('[]', Number.isNaN([]));
console.log('abc', Number.isNaN('abc'));
