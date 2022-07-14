//METHOD ONE

function minSubArrayLen1(arr, n) {
  let minimumWindowSize = Infinity;
  let currentWindowSum = 0;
  let windowStart = 0;
  let windowEnd = 0;
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentWindowSum += arr[windowEnd];
    while (currentWindowSum >= n) {
      minimumWindowSize = Math.min(
        minimumWindowSize,
        windowEnd - windowStart + 1
      );
      currentWindowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return minimumWindowSize === Infinity ? 0 : minimumWindowSize;
}
//METHOD TWO
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([1, 4.16, 22, 5, 7, 8, 10], 95));
