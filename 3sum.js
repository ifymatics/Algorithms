/**
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 * 
 * @param {*} nums 
 * @returns 
 */
const threeSum = function (nums) {
  const triplets = [];
  if (nums.length < 3) return triplets;

  if (nums.every((item) => item === 0)) return [[0, 0, 0]];
  //const nums = nums; //[...new Set(nums)];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return triplets;
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let theSums = nums[i] + nums[left] + nums[right];
      if (theSums === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        right--;
        left++;
      } else if (theSums > 0) {
        right--;
      } else if (theSums < 0) {
        left++;
      }
    }
  }
  return triplets;
};
//[-1, 0, 1, 2, -1, -4];
console.log(threeSum([-2, 0, 0, 2, 2]));
