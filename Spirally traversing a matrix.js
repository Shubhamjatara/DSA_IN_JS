class Solution {
  // Function to return a list of integers denoting spiral traversal of matrix.
  spirallyTraverse(mat) {
    let start_row = 0;
    let end_row = mat.length - 1;
    let start_col = 0;
    let end_col = mat[0].length - 1;
    const result = [];
    while (true) {
      for (let col = start_col; col <= end_col; col++) {
        result.push(mat[start_row][col]);
      }

      start_row++;
      if (start_row > end_row) break;
      for (let row = start_row; row <= end_row; row++) {
        result.push(mat[row][end_col]);
      }

      end_col--;
      if (start_col > end_col) break;
      for (let col = end_col; col >= start_col; col--) {
        result.push(mat[end_row][col]);
      }

      end_row--;
      if (start_row > end_row) break;
      for (let row = end_row; row >= start_row; row--) {
        result.push(mat[row][start_col]);
      }
      start_col++;
      if (start_col > end_col) break;
    }

    console.log(result);
    return result;
  }
}

new Solution().spirallyTraverse([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);

new Solution().spirallyTraverse([
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
]);

new Solution().spirallyTraverse([
  [32, 44, 27, 23],
  [54, 28, 50, 62],
]);
