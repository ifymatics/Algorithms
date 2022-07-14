const longestPalindrome = function (s) {
  let substr = "",
    palindromeStr = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let index = substr.indexOf(char);
    if (index !== -1) {
      substr = substr.slice(index + 1);
    }
    substr += char;
    //if (isPalindrome(substr))
    palindromeStr =
      substr.length > palindromeStr.length ? substr : palindromeStr;
  }

  return palindromeStr;
};
const isPalindrome = (str) => {
  if (str.split("").reverse().join("") === str) {
    return true;
  }
  return false;
};
let s = "aebadi";
s = "cbbd";

const longestPalindromeSubstring = (str) => {
  let left = 0,
    right = 1,
    current_string = str[0],
    maxSubString = "";
  while (right < str.length && left < right) {
    current_string += str[right];
    //console.log(current_string);
    if (current_string.length > 1 && isPalindrome(current_string)) {
      maxSubString =
        maxSubString.length > current_string.length
          ? maxSubString
          : current_string;

      right++;
    } else if (right === str.length - 1) {
      left++;
      right = left + 1;
    } else right++;
  }
  return maxSubString;
};
console.log(longestPalindrome("cbabb"));
//current_substring="cbc"
// create a variable called substr to hold string and another variable called palindromeStr to hold string
//2. loop through the string
//3. check if the substr length is greater than 0 and  is a palindrome
// if palindrome, store the content in palindromeStr
//check if the length of palindromeStr is maximum and is not equal to the length of the original string
