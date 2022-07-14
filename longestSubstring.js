function lengthOfLongestSubstring(string) {
  let max = 0,
    current_string = "";

  for (i = 0; i < string.length; i++) {
    let char = string[i];
    let pos = current_string.indexOf(char);
    if (pos !== -1) {
      // cut "dv" to "v" when you see another "d"
      current_string = current_string.substring(pos + 1);
    }
    current_string += char;
    max = Math.max(max, current_string.length);
  }
  return max;
}
function lengthOfLongestSubstring1(str) {
  var max = 0,
    current_string = `${str[0]}`,
    maxSubString = "",
    left = 0,
    right = 1;

  while (left < right && right < str.length) {
    if (str[left] !== str[right]) {
      current_string += str[right];
      right++;
    } else if (right === str.length) {
      console.log("HERE");
      left++;
      right = left + 1;
    } else {
      max = Math.max(max, current_string.length);
      maxSubString =
        maxSubString.length > current_string.length
          ? maxSubString
          : current_string;
      left = right;
      right++;
    }
  }
  return max;
}
//console.log(lengthOfLongestSubstring("dvdf")); // 3
console.log(lengthOfLongestSubstring("pwwkew"));
//console.log(lengthOfLongestSubstring("abcabcbb"));
//console.log(lengthOfLongestSubstring("bbbbb"));
