function fill(mat) {
  const visited = Array.from({ length: mat.length }, () =>
    new Array(mat[0].length).fill(false)
  );

  const ans = Array.from({ length: mat.length }, () =>
    new Array(mat[0].length).fill("X")
  );
  for (let i = 0; i < mat.length; i++) {
    if (mat[0][i] == "O" && !visited[0][i]) {
      dfs(0, i, mat, visited);
    }

    if (mat[i][mat[0].length - 1] == "O" && !visited[i][mat[0].length - 1]) {
      dfs(i, mat[0].length - 1, mat, visited);
    }

    if (mat[mat.length - 1][i] == "O" && !visited[mat.length - 1][i]) {
      dfs(mat.length - 1, i, mat, visited);
    }

    if (mat[0][i] == "O" && !visited[0][i]) {
      dfs(0, i, mat, visited);
    }
  }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (visited[i][j] == true) ans[i][j] = "O";
    }
  }
  return ans;
}

function dfs(row, col, mat, visited) {
  visited[row][col] = true;
  const rdel = [-1, 0, 1, 0];
  const cdel = [0, 1, 0, -1];
  for (let i = 0; i < 4; i++) {
    const nrow = row + rdel[i];
    const ncol = col + cdel[i];
    if (
      nrow >= 0 &&
      ncol >= 0 &&
      nrow < mat.length &&
      ncol < mat[0].length &&
      !visited[nrow][ncol] &&
      mat[nrow][ncol] == "O"
    ) {
      dfs(nrow, ncol, mat, visited);
    }
  }
}

console.log(
  fill([
    ["X", "O", "X", "X"],
    ["X", "O", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "X", "X"],
    ["X", "X", "O", "O"],
  ])
);

console.log(
  fill([
    ["X", "X", "X"],
    ["X", "O", "X"],
    ["X", "X", "X"],
  ])
);

