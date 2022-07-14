function rotateImage(a) {
  const matrix = [];
  //return a[0].map((val, index) => a.map((row) => row[index]).reverse());
  for (let i = 0; i < a[0].length; i++) {
    matrix.push(a.map((row) => row[i]).reverse());
  }
  return matrix;
}
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotateImage(matrix));
//
