const mostPopularNumber = (arr) => {
  const mappedArr = {};

  arr.map((ar) => {
    ar in mappedArr ? (mappedArr[ar] += 1) : (mappedArr[ar] = 1);
  });

  const sortedNumbers = Object.entries(mappedArr).sort(
    ([x, y], [x1, y1]) => y1 - y
  );
  //console.log(sortedNumbers);
  if (sortedNumbers[0][1] === sortedNumbers[1][1]) {
    if (sortedNumbers[0][0] > sortedNumbers[1][0]) {
      return sortedNumbers[1][0];
    }
    return sortedNumbers[0][0];
  }
  return sortedNumbers[0][0];
};
console.log(mostPopularNumber([1, 2, 3, 20, 5, 0, 11, 20]));
