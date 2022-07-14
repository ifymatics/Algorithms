var reverse = function (x) {
  const reversed = Math.abs(x).toString().split("").reverse().join("");
  if (reversed > 0x7fffffff) {
    return 0;
  }

  return x > 0 ? reversed : -reversed;
};
console.log(reverse(-123));
console.log(reverse(290));
