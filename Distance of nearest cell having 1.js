class Solution {
  // Function to find distance of nearest 1 in the grid for each cell.
  nearest(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const visited = Array.from({ length: grid.length }, () =>
      new Array(grid[0].length).fill(false)
    );
    const q = [];

    const ans = Array.from({ length: n }, () => new Array(m).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 1) {
          ans[i][j] = 0;
          visited[i][j] = true;
          q.push({ r: i, c: j, d: 0 });
        }
      }
    }

    //bfs
    while (q.length) {
      const front = q.shift();
      const r = front.r;
      const c = front.c;
      const d = front.d;

      const rdel = [-1, 0, 1, 0];
      const cdel = [0, 1, 0, -1];
      for (let i = 0; i < rdel.length; i++) {
        const nrow = r + rdel[i];
        const ncol = c + cdel[i];
        if (
          ncol >= 0 &&
          nrow >= 0 &&
          ncol < grid[0].length &&
          nrow < grid.length &&
          !visited[nrow][ncol]
        ) {
          q.push({ r: nrow, c: ncol, d: d + 1 });
          ans[nrow][ncol] = d + 1;
          visited[nrow][ncol] = true;
        }
      }
    }

    return ans;
  }
}