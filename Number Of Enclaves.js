// User function Template for javascript
/**
 * @param {number[][]} grid
 * @returns {number}
 */

class Solution {
  // Function to count the number of enclaves.
  numberOfEnclaves(grid) {
    const visited = Array.from({ length: grid.length }, () =>
      new Array(grid[0].length).fill(false)
    );
    let cnt = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (i == 0 && !visited[i][j] && grid[i][j] == 1)
          this.dfs(i, j, grid, visited);
        if (j == 0 && !visited[i][j] && grid[i][j] == 1)
          this.dfs(i, j, grid, visited);
        if (j == grid[0].length - 1 && !visited[i][j] && grid[i][j] == 1)
          this.dfs(i, j, grid, visited);
        if (i == grid.length - 1 && !visited[i][j] && grid[i][j] == 1)
          this.dfs(i, j, grid, visited);
      }
    }
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == 1 && !visited[i][j]) cnt++;
      }
    }

    return cnt;
  }

  dfs(row, col, grid, visited) {
    visited[row][col] = true;

    const rdel = [-1, 0, 1, 0];
    const cdel = [0, 1, 0, -1];
    for (let i = 0; i < 4; i++) {
      const nrow = row + rdel[i];
      const ncol = col + cdel[i];
      if (
        nrow >= 0 &&
        ncol >= 0 &&
        nrow < grid.length &&
        ncol < grid[0].length &&
        !visited[nrow][ncol] &&
        grid[nrow][ncol] == 1
      ) {
        this.dfs(nrow, ncol, grid, visited);
      }
    }
  }
}

console.log(
  new Solution().numberOfEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
);

console.log(
  new Solution().numberOfEnclaves([
    [0, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 1, 0],
  ])
);

console.log(
  new Solution().numberOfEnclaves([
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
);
