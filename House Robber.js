var rob = function (nums) {
  let sum = 0;
  const dp = new Array(nums.length).fill(-1);
  return Math.max(solve(0, nums, sum, dp), solve(1, nums, sum, dp));
};

function solve(i, nums, sum, dp) {

  if (i >= nums.length) return 0;
  if (dp[i] !== -1) return dp[i];
  const left = solve(i + 2, nums, sum + nums[i], dp);
  const right = solve(i + 3, nums, sum + nums[i], dp);
  return (dp[i] = Math.max(left, right) + nums[i]);
}

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));
