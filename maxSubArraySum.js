//maxSubArraySum function takes array and integer n  as a parameters and returns the maximum sum of n items of the array
const maxSubArraySum = (arr, n) => {
  if (arr.length < n) return null;
  let maxSum = 0;
  tempSum = 0;
  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
};
//console.log(maxSubArraySum([10, 3, 4, 9, 5, 7, 8], 3));
const maxSubArraySum2 = (arr, n) => {
  if (arr.length < n) return null;
  let maxSum = -Infinity,
    tempSum = 0;
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    if (i >= n - 1) {
      maxSum = Math.max(tempSum, maxSum);
      tempSum -= arr[i - (n - 1)];
    }
  }
  return maxSum;
};
console.log(maxSubArraySum2([10, 3, 4, 9, 5, 7, 8], 3));
