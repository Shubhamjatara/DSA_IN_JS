/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const dp = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(-1)
  );

  return solve(0, 0, grid, dp);
};

function solve(x, y, grid, dp) {
  if (x < 0 || x > grid.length - 1) return Number.MAX_SAFE_INTEGER;
  if (y < 0 || y > grid[0].length - 1) return Number.MAX_SAFE_INTEGER;
  if (x == grid.length - 1 && y == grid[0].length - 1) return grid[x][y];
  if (dp[x][y] !== -1) return dp[x][y];

  const left = solve(x + 1, y + 0, grid, dp);
  const right = solve(x + 0, y + 1, grid, dp);
  const min = Math.min(left, right);
  return (dp[x][y] = min + grid[x][y]);
}

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
