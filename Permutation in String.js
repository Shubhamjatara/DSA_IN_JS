/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  const s1map = new Array(26).fill(0);
  const s2map = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    console.log(s1.charCodeAt(0) - 97);
    s1map[s1.charCodeAt(i) - 97]++;
  }
  let left = 0;
  let right = 0;

  while (right < s2.length) {
    s2map[s2.charCodeAt(right) - 97]++;

    if (right - left + 1 > s1.length) {
      //remove left
      s2map[s2.charCodeAt(left) - 97]--;
      left++;
    }
    if (validate(s1map, s2map)) {
      //check
      return true;
    }
    right++;
  }

  return false;
};

function validate(s1map, s2map) {
  for (let i = 0; i < 26; i++) {
    if (s1map[i] != s2map[i]) return false;
  }
  return true;
}

const ans = checkInclusion("ab", "eidbaooo");
console.log(ans);
