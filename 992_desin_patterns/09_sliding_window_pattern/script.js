function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log(i, tempSum, arr[i - num], arr[i]);
    maxSum = Math.max(tempSum, maxSum);
  }

  console.log(maxSum);
}

//              0  1  2  3  4  5  6  7  8
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
//             3   *  *  *                17 - 2 + 2 = 17
//             4      *  *  *             17 - 6 + 1 = 12
//             5         *  *  *          12 - 9 + 8 = 11
//             6            *  *  *       11 - 2 + 5 = 14
//             7               *  *  *    14 - 1 + 6 = 19
//             8                  *  *  * 19 - 8 + 3 = 14
