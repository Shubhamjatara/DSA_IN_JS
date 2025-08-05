var numDecodings = function (s) {
  const rows = s.length;
  const cols = rows;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(-1));
  const map = new Map();
  for (let i = 65; i < 65 + 26; i++) {
    map.set((i + 1 - 65).toString(), String.fromCharCode(i));
  }
  const ans = solve(0, 0, s, dp, map);
  console.log(ans);
  return ans;
};

function solve(start, end, str, dp, map) {
  if (end >= str.length) {
    return 0;
  }
  if (dp[start][end] !== -1) return dp[start][end];
  const substr = str.substring(start, end + 1);

  if (!map.has(substr)) return 0;

  if (end === str.length - 1) {
    return 1;
  }



  const left = solve(end + 1, end + 1, str, dp, map);
  const right = solve(start, end + 1, str, dp, map);
  return (dp[start][end] = left + right);
}

numDecodings("11106");
numDecodings("12");
numDecodings("226");
//console.log(checker("12"));
