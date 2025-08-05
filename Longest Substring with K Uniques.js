/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
function longestKSubstr(s, k) {
  // code here
  const map = new Array(26).fill(0);
  let u = 0;
  let max = -1,
    right = 0,
    left = 0;
  while (right < s.length) {
    map[s.charCodeAt(right) - 97]++;
    if (map[s.charCodeAt(right) - 97] === 1) u++;
    if (u === k) {
      max = Math.max(max, right - left + 1);
    }
    while (u > k) {
      map[s.charCodeAt(left) - 97]--;
      if (map[s.charCodeAt(left) - 97] == 0) u--;
      left++;
    }
    right++;
  }

  return max;
}

console.log(longestKSubstr("aabacbebebe", 3));
console.log(longestKSubstr("aaaa", 2));
console.log(longestKSubstr("aabaaab", 2));
