// let anagrams = (stringA, stringB) => {
//     if(sanitizeAndSort(stringA) === sanitizeAndSort(stringB)) {
//         return true
//     }
//     return false;
// }

// let sanitizeAndSort = (str) => {
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

// }
// console.log(anagrams('rail safety', 'fairy tales'));
// console.log(anagrams('rail! safety!', 'fairy tales'));
// console.log(anagrams('Hi there', 'Bye there'));

let anagrams = (dictionary, query) => {
  let mappedQuery = {};
  let anangramArray = [];
  query.map((que, idx) => (mappedQuery[sanitizeAndSort(que)] = idx));

  dictionary.forEach((el) => {
    let dict = sanitizeAndSort(el);

    if (dict in mappedQuery) {
      anangramArray.push(mappedQuery[dict]);
    }
  });
  return anangramArray;
};

let sanitizeAndSort = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};
// console.log(
//   anagrams(
//     ["car", "herocane", "bush", "car", "village"],
//     ["canereoh", "rac", "cinema"]
//   )
// );
function countUnique(array = [], m) {
  let max = -Infinity;
  for (let i = 0; i < array.length - m + 1; i++) {
    let temp = 0;
    for (let j = 0; j <= m; j++) {
      temp += array[j];
    }
    if (max < temp) {
      max = temp;
    }
  }
  return max;
}
console.log(countUnique([1, 1, 2, 3, 4], 2));
