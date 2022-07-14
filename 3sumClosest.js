var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let minDiff = 999999;
  let curOut = 999999;

  for (let i = 0; i < nums.length - 2; i += 1) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let curSum = nums[i] + nums[l] + nums[r];
      if (Math.abs(curSum - target) < minDiff) {
        minDiff = Math.abs(curSum - target);
        curOut = curSum;
      }

      if (curSum < target) l += 1;
      else if (curSum > target) r -= 1;
      else return target;
    }
  }

  return curOut;
};
