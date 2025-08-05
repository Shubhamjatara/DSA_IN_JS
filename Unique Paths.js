/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(-1));
  return solve(0, 0, m, n, dp);
};

function solve(row, col, m, n, dp) {
  if (row >= m || col >= n) return 0;
  if (row === m - 1 && col === n - 1) return 1;
  if (dp[row][col] !== -1) return dp[row][col];

  let count = solve(row + 1, col, m, n, dp);
  for (i = col + 1; i < n; i++) {
    count += solve(row, i, m, n, dp);
  }
  return (dp[row][col] = count);
}

console.log(uniquePaths(3, 7));
