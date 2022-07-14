const rotLeft = (arr, d) => {
  // formula for left-rotating an array is as follows:
  // The index of the new rotated array is Index= (i + (n-d))%n
  // where n= length of the array, i = index of each item of the original array
  // d = number of times the array should  be rotated
  let n = arr.length;
  let rotArray = [];
  for (let i = 0; i < n; i++) {
    let index = (i + (n - d)) % n;
    rotArray[index] = arr[i];
  }
  return rotArray;
};
console.log(rotLeft([1, 2, 3], 1));
// Index= (i + (n-d))%n
//array=[1,2,3],
//arrayRotate=[2,3,1]
//1+(5-1)%5=5%5
