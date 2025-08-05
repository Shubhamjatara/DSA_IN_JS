/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const sMap = new Array(26).fill(0);
  const pMap = new Array(26).fill(0);
  const ans = [];

  for (let i = 0; i < p.length; i++) {
    pMap[p.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < p.length; i++) {
    sMap[s.charCodeAt(i) - 97]++;
  }
  /*   if (validatestr(sMap, pMap)) {
    ans.push(0);
  } */

  let left = 0;
  let right = p.length;
  while (right <= s.length) {
    //console.log(left, right, s.substring(left, right + 1));

    //console.log("left-->", left, sMap, "right-->", right, pMap);
    if (validatestr(sMap, pMap)) {
      ans.push(left);
    }
    sMap[s.charCodeAt(left) - 97]--;
    sMap[s.charCodeAt(right) - 97]++;

    left++;
    right++;
  }
  //console.log(sMap)
  return ans;
};

function validatestr(smap, tmap) {
  for (let i = 0; i < 26; i++) {
    if (smap[i] !== tmap[i]) return false;
  }
  return true;
}

console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
 console.log(findAnagrams("abab", "ab")); // [0, 1, 2]
