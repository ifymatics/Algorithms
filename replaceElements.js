/**
 *
 * Question: Given an array arr,replace every element in the array with the greatest elements among the elements
 * to the right, and replace the last element with -1
 */
//SOLUTIONS
// 1. BRUTE-FORCE APPROACH, Time complexity O(n2)
const replaceElements1 = (arr) => {
  const replaced = [];
  for (let i = 0; i < arr.length; i++) {
    let max;
    if (i === 0) max = Math.max(arr[i], ...arr.slice(i + 1));
    else if (i === arr.length - 1) max = -1;
    else max = Math.max(arr[i + 1], ...arr.slice(i + 1));

    replaced.push(max);
  }
  return replaced;
};
// 1. BEST APPROACH, Time complexity O(n)
const replaceElements = (arr) => {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let newMax = Math.max(max, arr[i]);
    arr[i] = max;
    max = newMax;
  }
  return arr;
};
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
