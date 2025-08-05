/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  return solve(0, (j = s.length - 1), s);
};

function solve(i, j, str) {
  if (i > j) return 0;
  if (i == j) return 1;

  if (str[i] === str[j]) {
    return 2 + solve(i + 1, j - 1, str);
  } else {
   return Math.max(solve(i + 1, j, str), solve(i, j - 1, str));
  }
}

console.log(longestPalindromeSubseq("bbbab"));
console.log(longestPalindromeSubseq("cbbd"));
console.log(longestPalindromeSubseq("aaa"));
console.log(longestPalindromeSubseq("bsbbbbbbbbbbb"));
console.log(longestPalindromeSubseq("ab"));
console.log(longestPalindromeSubseq("bba"));
console.log(longestPalindromeSubseq("aabaa"));
