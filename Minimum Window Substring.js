/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const smap = new Map();
  const tmap = new Map();

  //storing the characters of the string t
  for (let i = 0; i < t.length; i++) {
    if (!tmap.has(t[i])) {
      tmap.set(t[i], 1);
    } else {
      tmap.set(t[i], tmap.get(t[i]) + 1);
    }
  }

  let left = 0;
  let right = 0;
  let ans = "";
  let min_len = Number.MAX_SAFE_INTEGER;
  while (right < s.length) {
    //store the characters of the string s
    if (!smap.has(s[right])) {
      smap.set(s[right], 1);
    } else if (smap.has(s[right])) {
      smap.set(s[right], smap.get(s[right]) + 1);
    }

    if (validstr(smap, tmap)) {
      if (right - left + 1 < min_len) {
        min_len = right - left + 1;
        ans = s.substring(left, right + 1);
      }

      while (left < right) {
        //deleting the characters from the map and updating the left pointer
        let char = s[left];
        const value = smap.get(char);
        if (tmap.has(char) && tmap.get(char) > value - 1) {
          break;
        }
        smap.set(char, value - 1);
        left++;
        if (validstr(smap, tmap) && right - left + 1 < min_len) {
          min_len = right - left + 1;
          ans = s.substring(left, right + 1);
       //   console.log(left, right);
        }
      }
    }
    right++;
  }

  return ans; //
};

function validstr(smap, tmap) {
  // Check if all keys in tmap exist in smap
  for (let key of tmap.keys()) {
    if (!smap.has(key)) return false;
  }

  // Check if tmap values are <= smap values
  for (let [key, value] of tmap) {
    if (tmap.get(key) > smap.get(key)) return false;
  }

  return true;
}

const ans = minWindow("ADOBECODEBANC", "ABC");
const ans1 = minWindow("a", "a");
const ans3 = minWindow("a", "aa");
const ans4 = minWindow("bdab", "ab");
console.log(ans, ans1, ans3, ans4);
