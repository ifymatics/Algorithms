const countUniqueValues = (array) => {
  let count = 1;
  let left = 0;
  let right = 1;
  let seen = new Set();
  seen.add(array[0]);
  //array.sort((a, b) => a - b);
  while (left < right && right < array.length) {
    if (array[left] === array[right]) {
      right++;
    } else {
      if (!seen.has(array[right])) {
        seen.add(array[right]);
        count++;
      } else {
        //console.log("==>Here", array[right]);
      }
      right++;
    }
    //console.log(seen);
  }
  return seen.size;
};
console.log(countUniqueValues([1, 1, 2, 2, 1, 4]));
