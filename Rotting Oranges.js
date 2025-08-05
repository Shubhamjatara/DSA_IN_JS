/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const visited = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(0)
  );
  const q = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        q.push({ r: i, c: j, t: 0 });
      }
    }
  }
  let tm = 0;
  while (q.length > 0) {
    const front = q.shift();
    const r = front.r;
    const c = front.c;
    const t = front.t;
    tm = Math.max(tm, t);
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
        visited[nrow][ncol] != 2 &&
        grid[nrow][ncol] == 1
      ) {
        q.push({ r: nrow, c: ncol, t: t + 1 });
        visited[nrow][ncol] = 2;
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1 && visited[i][j] !== 2) {
        return -1;
      }
    }
  }

  return tm;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);

console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
);

console.log(orangesRotting([[0, 2]]));

console.log(
  orangesRotting([
    [1, 1, 1],
    [0, 1, 1],
    [2, 0, 1],
  ])
);

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 1],
    [0, 1, 2],
  ])
);
