class Solution {
    findSubString(s) {
        const map = new Map();
        let left = 0;
        let right = 0;
        let n = s.length;
        let min_length = Number.MAX_SAFE_INTEGER;
        let str = ""
        for (let i = 0; i < s.length; i++) map.set(s[i], 0);
        while (right < n) {

            map.set(s[right], map.get(s[right]) + 1);
            while (map.get(s[left]) > 1) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
            if (this.checkCharactersExist(map)) {
                if (min_length > Math.min(min_length, (right - left) + 1)) str = s.substring(left, right + 1);

                min_length = Math.min(min_length, (right - left) + 1);
            }

            right++;
        }
        if (this.checkCharactersExist(map)) {
            if (min_length > Math.min(min_length, (right - 1 - left) + 1)) str = s.substring(left, right);
            min_length = Math.min(min_length, (right - 1 - left) + 1);
        }
        console.log(str)
        return str;

    }

    checkCharactersExist(map) {

        for (let [key, value] of map) { if (value < 1) return false; }
        return true;
    }
}

new Solution().findSubString("bcabc");
new Solution().findSubString("AABBBCBBAC");
new Solution().findSubString("aaab");
new Solution().findSubString("GEEKSGEEKSFOR");
new Solution().findSubString("ABAAbcaBB");
new Solution().findSubString("acdb"); 