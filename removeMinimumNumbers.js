const removeMinimumNumbers = (n, arr = []) => {
  if (n <= 0) {
    return arr;
  }
  if (n > arr.length) {
    return [];
  }
  let arrMinMap = {};
  const arrCopy = [...arr];
  arrCopy.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    arrMinMap[arrCopy[i]] = true;
  }

  return arr.filter((ar) => !arrMinMap[ar]);
};
console.log(removeMinimumNumbers(20, [1, 20, -1, 4, 10, 2]));
