const pivotIndex = (arr = []) => {
  let leftSum = 0;
  let total = arr.reduce((prev, curr) => prev + curr, 0);

  for (let i = 0; i < arr.length; i++) {
    let rightSum = total - arr[i] - leftSum;
    if (rightSum === leftSum) return i;
    leftSum += arr[i];
  }
  return -1;
};
console.log(pivotIndex([1, 2, 3, 3]));
