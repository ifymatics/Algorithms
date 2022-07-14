// function StringChallenge(str) {
//   const mapStr = {};
//   // code goes here
//   for (let i = 0; i < str.length; i++) {
//     mapStr[i] = str[i];
//   }
//   const mapArray = Object.entries(mapStr);
//   let count = 0;
//   for (let i = 0; i < mapArray.length; i++) {
//     if (mapArray[i][1] === mapArray[i + 1][1]) {
//       //console.log(mapArray[i], mapArray[i + 1]);
//       return true;
//     } else {
//       console.log(mapArray[i], mapArray[i + 1]);
//       count += 1;
//     }
//     if (count === mapArray.length) break;
//   }

//   return false;
// }
// console.log(StringChallenge("5788888888882339999"));
const diffOfTwo = (arr) => {
  let min = arr[0];
  let max;
  for (const [i, ar] of arr.entries()) {
    max = [i, ar];
    if (ar < min) {
      min = [i, ar];
    }
    if (ar > max) {
      max = [i, ar];
    }
  }
  console.log(max[1] - min[1]);
};
//diffOfTwo([10, 12, 4, 5, 9]);

const formatDigits = (num) => {
  // let str = "";
  // for (let i = String(num).length - 2; i >= 0; i -= 1) {
  //   if ((i + 1) % 3 === 0 && i !== String(num).length - 1 && i !== 0) {
  //     str += `${String(num)[i]},`;
  //   } else {
  //     str += `${String(num)[i]}`;
  //   }
  // }
  // return str.split("").reverse().join("");
  return new Intl.NumberFormat().format(num);
};
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// console.log(numberWithCommas(12345));
// console.log(numberWithCommas(123450));
console.log(formatDigits(12345));
console.log(formatDigits(123450)); //054,
