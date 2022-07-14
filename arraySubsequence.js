const arraySubsequence = (array, sequence) => {
  let i = 0;
  for (let arr of array) {
    if (i === sequence.length) break;
    if (sequence[i] === arr) {
      i++;
    }
  }
  return i === sequence.length;
};

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10, 9];

console.log(arraySubsequence(array, sequence));
