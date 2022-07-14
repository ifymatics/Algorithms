const sortingArray = (arr) => {
  return arr.sort((x, y) => x.a - y.a);
};
console.log(sortingArray([{ a: 1 }, { a: 5 }, { a: 3 }, { a: -3 }]));
// arr.sort((a, b) => dist(X[a], Y[a]) - dist(X[b], Y[b]));
