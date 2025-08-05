var findTargetSumWays = function (nums, target) {
  return solve(nums, target, 0, 0);
};

function solve(nums, target, sum, i) {
    console.log(sum)
  if (sum === target) return 1;
  if (i === nums.length) return 0;

  const left = solve(nums, target, -nums[i] + sum, i + 1);
  const right = solve(nums, target, nums[i] - sum, i + 1);
  return left + right;
}

console.log(findTargetSumWays([0], 0));
