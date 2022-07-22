//RECURSSIVE METHOD
const isPalindrome1 = (str) => {
  if (str === "" || str.length === 1) return true;
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, -1));
  }
  return false;
};
//ITERATIVE METHOD
const isPalindrome = (str) => {
  //create 2 ppointers, called start and end,with start pointing the index 0  and end  pointing the index str.length-1.
  let start = 0,
    end = str.length - 1;
  //loop through the string and check -
  while (start <= end) {
    //1: if the character at pointer start equals character at pointer end, then increment pointer start and drecrement pointer end
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
console.log(isPalindrome("fayaf"));
console.log(isPalindrome("faya"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome(""));
