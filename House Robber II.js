var rob = function (nums) {
    const dp = new Array(nums.length).fill(-1);
    return Math.max(solve(0, nums, dp, 0), solve(1, nums, dp, 1));
};

function solve(i, nums, dp, intial) {
    if ((i === nums.length - 1) && (intial === 0)){
        console.log("RUN")
         return 0;
    }
    if (i > nums.length - 1) return 0;
    if (dp[i] !== -1) return dp[i];
    const left = solve(i + 2, nums, dp, intial);
    const right = solve(i + 3, nums, dp, intial);
    return (dp[i] = Math.max(left, right) + nums[i]);
}


console.log(rob([2,3,2]));
console.log(rob([1,2,3,1]));
console.log(rob([1,2,3]));
console.log(rob([1]));