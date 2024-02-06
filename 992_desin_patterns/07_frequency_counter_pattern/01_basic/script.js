// same([1,2,3], [4,1,9]) true
// same([1,2,3], [1,9]) false

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const freqCounter1 = {};
  for (const value of arr1) {
    let cnt = freqCounter1[value] || 0;
    cnt += 1;

    freqCounter1[value] = cnt;
  }

  const freqCounter2 = {};
  for (const value of arr2) {
    let cnt = freqCounter2[value] || 0;
    cnt += 1;

    freqCounter2[value] = cnt;
  }

  for (const key in freqCounter1) {
    if (!freqCounter2[key ** 2]) {
      return false;
    }

    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }

  console.log(freqCounter1);
  console.log(freqCounter2);

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
