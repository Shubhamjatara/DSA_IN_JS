/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let sum = 0;
  let min_len = Number.MAX_SAFE_INTEGER;
 // console.log(nums);

  while (right < nums.length) {
    sum = sum + nums[right];
    if (sum === target) min_len = Math.min(min_len, right - left + 1);
    while (sum > target && left < right) {
      sum = sum - nums[left];
      left = left + 1;
      if (sum === target) {
        //console.log(left,right)
        min_len = Math.min(min_len, right - left + 1);
      }
    }
    right++;
  }

  return min_len !== Number.MAX_SAFE_INTEGER?min_len:0;
};

const ans = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
console.log(ans);
