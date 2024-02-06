// sumZero([-3,-2,-1,0,1,2,3]) // [3,-3]

function sumZero(arr) {
  const checked = new Set();

  for (const value of arr) {
    const targetValue = value * -1;
    if (checked.has(targetValue)) {
      return [value, targetValue];
    }

    checked.add(value);
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-4, -3, -2, 0, 1, 2, 5]));
console.log('*****');

function sumZero2(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    const leftValue = arr[leftIdx];
    const rightValue = arr[rightIdx];
    const sumValue = leftValue + rightValue;

    console.log([leftValue, rightValue]);

    if (sumValue === 0) {
      return [leftValue, rightValue];
    }

    if (sumValue > 0) {
      rightIdx--;
    } else {
      leftIdx++;
    }
  }
}

// console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));
sumZero2([-4, -3, -2, 0, 1, 2, 5]);
