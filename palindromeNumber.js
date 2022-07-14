var isPalindrome = function (x) {
  let reversed = Math.abs(x).toString().split("").reverse().join("");
  if (reversed == x) {
    return true;
  }
  return false;
};
