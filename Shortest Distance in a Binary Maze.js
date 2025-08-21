/**
 * @param {number[][]} grid
 * @return {number}
 */
class Solution {
  shortestPath(grid, source, destination) {
    const dis = Array.from({ length: grid.length }, () =>
      new Array(grid[0].length).fill(Infinity)
    );
    const q = [];
    q.push({ r: source[0], c: source[1], t: 0 });
    dis[source[0]][source[1]] = 0;
    while (q.length > 0) {
      const front = q.shift();
      const r = front.r;
      const c = front.c;
      const t = front.t;
      const rdel = [-1, 0, 1, 0];
      const cdel = [0, 1, 0, -1];
      for (let i = 0; i < 4; i++) {
        const nrow = r + rdel[i];
        const ncol = c + cdel[i];
        if (
          ncol >= 0 &&
          nrow >= 0 &&
          ncol < grid[0].length &&
          nrow < grid.length &&
          dis[nrow][ncol] > t + 1 &&
          grid[nrow][ncol] == 1
        ) {
          dis[nrow][ncol] = t + 1;
          q.push({ r: nrow, c: ncol, t: t + 1 });
        }
      }
    }

    return dis[destination[0]][destination[1]] == Infinity
      ? -1
      : dis[destination[0]][destination[1]];
  }
}

const sol = new Solution();
console.log(
  sol.shortestPath(
    [
      [1, 1, 1, 1],
      [1, 1, 0, 1],
      [1, 1, 1, 1],
      [1, 1, 0, 0],
      [1, 0, 0, 1],
    ],
    [0, 1],
    [2, 2]
  )
);

console.log(
  sol.shortestPath(
    [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 0, 1],
    ],
    [0, 0],
    [3, 4]
  )
);

console.log(
  sol.shortestPath(
    [
      [1, 1],
      [1, 0],
    ],
    [0, 0],
    [0, 0]
  )
);
