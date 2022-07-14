// import java.util.*;
// class LongestSubstringKDistinct {
//   public static int findLength(String str, int k) {
//     int windowStart = 0, maxLength = 0;
//     Map<Character, Integer> charFrequencyMap = new HashMap<>();
//       for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
//       char rightChar = str.charAt(windowEnd);
//           charFrequencyMap.put(rightChar, charFrequencyMap.getOrDefault(rightChar, 0) + 1);

//           while (charFrequencyMap.size() > k) {
//         char leftChar = str.charAt(windowStart);
//               charFrequencyMap.put(leftChar, charFrequencyMap.get(leftChar) - 1);
//               if (charFrequencyMap.get(leftChar) == 0) {
//                   charFrequencyMap.remove(leftChar);
//               }
//               windowStart++;
//           }
//           maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//       }

function LongestSubstringKDistinct(str, k) {
  let windowStart = 0,
    maxLength = 0;
  const charFrequency = {};
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;
    while (Object.keys(charFrequency).length > k) {
      let leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(LongestSubstringKDistinct("aaahhibc", 1));
console.log(LongestSubstringKDistinct("rithmschool", 1));
/// some test cases
// console.assert(
//   longestSubstringWithKDistinctCharacters("aaahhibc".split(""), 2) === 5,
//   "aaahhibc"
// );
// console.assert(
//   longestSubstringWithKDistinctCharacters("aaabc".split(""), 3) === 5,
//   "aaabc"
// );
// // only one letter in string
// console.assert(
//   longestSubstringWithKDistinctCharacters("aaa".split(""), 2) === -Infinity,
//   "aaa"
// );
// console.log(longestSubstringWithKDistinctCharacters("aaahhibc".split(""), 2));
