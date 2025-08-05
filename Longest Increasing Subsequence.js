/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let max = 0;
  const dp = new Array(nums.length + 1).fill(-1);
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, solve(i, nums, Number.MIN_SAFE_INTEGER, dp));
  }
  return max;
};

function solve(index, nums, last, dp) {
  if (index > nums.length - 1) return 0;
  if (last > nums[index]) return 0;
  if (dp[index] !== -1) return dp[index];
  let max = 0;
  for (let i = index; i < nums.length; i++) {
    if (nums[index] < nums[i]) {
      max = Math.max(max, solve(i, nums, nums[i], dp));
    }
  }

  return (dp[index] = max + 1);
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
console.log(lengthOfLIS([-2, -1]));
