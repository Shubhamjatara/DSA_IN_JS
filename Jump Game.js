var canJump = function (nums) {
  const dp = new Array(nums.length + 1).fill(false);
  return solve(0, nums, nums.length, dp);
};

const solve = (i, nums, n, dp) => {
  if (i >= n) return true;
  if (i === n - 1) {
    return true;
  }
  if (nums[i] === 0) return false;
  if (dp[i]) return dp[i];
  const steps = nums[i];

  for (let j = 1; j <= steps; j++) {
    dp[i] = solve(i + j, nums, n, dp);
    return dp[i];
  }
  return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
