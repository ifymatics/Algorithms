// const reverseString = (string) => {
//   return string.split("").reverse().join("");
// };

const reverseString = (string) => {
  const array = string.split("");
  let str = "";
  for (let i = array.length - 1; i >= 0; i--) {
    str += array[i];
  }
  return str;
};

console.log(reverseString("ABC"));
