/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const dp = Array.from({ length: s.length }, () =>
    new Array(s.length).fill(false)
  );
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    count++;
  }

  for (let j = 0; j < s.length; j++) {
    if (s[j] === s[j + 1]) {
      dp[j][j + 1] = true;
      count++;
    }
  }

  for (let k = 3; k <= s.length; k++) {
    for (let i = 0; i <= s.length - k; i++) {
      let start = i;
      let end = i + k - 1;

      if (ispalindrome(start, end, s, dp)) {
        dp[start][end] = true;
        count++;
      }
    }
  }
  return count;
};

function ispalindrome(start, end, str, dp) {
  while (start < end) {
    /*   if(start< 0 && end > str.length)
    {
        if(dp[start+1])
    } */
    if (dp[start][end]) return true;

    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
}

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
console.log(countSubstrings("fdsklf"));
console.log(countSubstrings("xkjkqlajprjwefilxgpdpebieswu"));
console.log(
  countSubstrings("qwertyytrewqqwertyytrewqqwertyytrewqqwertyytrewq")
);
console.log(countSubstrings("leetcode"));
