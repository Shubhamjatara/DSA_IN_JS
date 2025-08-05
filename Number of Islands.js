var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        count++;
        backTrack(grid, i, j);
      }
    }
  }

  return count;
};

function backTrack(grid, i, j) {
  if (i >= grid.length || i < 0 || j >= grid[0].length || j < 0) return;

  if (grid[i][j] == "0") return;
  grid[i][j] = "0";
  const cord = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  for (let k = 0; k < cord.length; k++) {
    backTrack(grid, cord[k][0] + i, cord[k][1] + j);
  }
}

const ouput = numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]);

console.log(ouput)