console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// 9007199254740991 + 2 = 9007199254740992
let largeNum = Number.MAX_SAFE_INTEGER + 2;
console.log('largeNum', largeNum);

largeNum = largeNum + 5;
console.log('largeNum', largeNum);

// 後ろにnをつけると、BigIntになる
largeNum = BigInt(Number.MAX_SAFE_INTEGER);
largeNum = largeNum + 2n;
console.log('BigInt', largeNum);

largeNum = largeNum + 5n;
console.log('BigInt', largeNum);
