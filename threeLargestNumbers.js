function findThreeLargestNumbers(array) {
  array.sort((a, b) => b - a);
  let temp = array[0];
  let temp1 = array[1];
  let temp2 = array[2];
  let sortedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > temp && array[i] !== temp1 && array[i] !== temp2) {
      temp = array[i];
      //array[i] = temp;
    } else if (array[i] > temp1 && array[i] !== temp && array[i] !== temp2) {
      temp1 = array[i];
      //array[i] = temp1;
    } else if (array[i] > temp2 && array[i] !== temp1 && array[i] !== temp) {
      temp2 = array[i];
      //array[i] = temp2;
    }
  }
  sortedArray.push(temp, temp1, temp2);
  return sortedArray.sort((a, b) => a - b);
  // return [array[0],array[1],array[2]]
}

let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
// array = [55, 7, 8];
// array = [55, 43, 11, 3, -3, 10];
// array = [7, 8, 3, 11, 43, 55];
// array = [55, 7, 8, 3, 43, 11];
// array = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
// array = [7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7];
// array =  [-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]
console.log(findThreeLargestNumbers(array));
