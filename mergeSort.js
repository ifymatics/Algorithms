const merge = (arr1, arr2) => {
  let result = [];
  let idx1 = 0;
  let idx2 = 0;
  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2]) {
      result.push(arr1[idx1]);
      idx1++;
    } else if (arr2[idx2] < arr1[idx1]) {
      result.push(arr2[idx2]);
      idx2++;
    }
  }

  while (idx1 < arr1.length) {
    result.push(arr1[idx1]);
    idx1++;
  }

  while (idx2 < arr2.length) {
    result.push(arr2[idx2]);
    idx2++;
  }
  return result;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  //splitting arr into halves
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  //console.log(mergeSort(arr.slice(0, mid)));
  console.log(left, right);
  //merging the two sorted arrays
  return merge(right, left);
};

console.log(mergeSort([1, -1, 2, 30, 4, 0]));
