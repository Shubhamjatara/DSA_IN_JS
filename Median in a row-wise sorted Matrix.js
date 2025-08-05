class Solution {
  // Function to find median of the matrix.
  median(mat) {
    const result = [];
    for (let row = 0; row < mat.length; row++) {
      for (let col = 0; col < mat[0].length; col++) {
        result.push(mat[row][col]);
      }
    }

    result.sort((a, b) => a - b);
    const mid = Math.floor((result.length - 1) / 2);
    return result[mid];
  }
}

console.log(
  new Solution().median([
    [1, 3, 5],
    [2, 6, 9],
    [3, 6, 9],
  ])
);

console.log(new Solution().median([[3], [5], [8]]));
