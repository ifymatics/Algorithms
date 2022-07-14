function findLongestSubstring1(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
//MINE
function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return 0;
  let windowStart = 0,
    windowEnd = 0;
  let maxLength = 0;
  let seenStr = {};

  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str[windowEnd];
    if (seenStr[str[windowEnd]]) {
      windowStart = Math.max(windowStart, seenStr[char]);
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    seenStr[str[windowEnd]] = windowEnd + 1;
  }
  return maxLength;
}

console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
