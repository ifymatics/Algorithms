const checkSquare = (arr1, arr2) => {
  //create a object to be used as hash tables to store array frequencies
  const arrayObj = {};
  //loop through one array and use the square of the item as key in  hashmaps(object)
  for (const arr of arr1) {
    arrayObj[arr * arr] = true;
  }
  // loop throgh the second array and check if each item appear in the hash map created
  for (const ar of arr2) {
    //if it doesnt appear, return false
    if (!arrayObj[ar]) {
      return false;
    }
  }
  //else return true
  return true;
};
console.log(checkSquare([1, 2, 3, 4], [2, 4, 6, 8]));
console.log(checkSquare([1, 1, 2, 4], [1, 1, 4, 16]));
