var isIsomorphic = function (s, t) {

    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i]) && !map.has(t[i])) {
            map.set(s[i], t[i]);
            map.set(t[i], s[i]);
            continue;
        }
        if (map.has(s[i]) && map.get(s[i]) !== t[i]) {
            return false;
        }
    }

    return true;
};

console.log(isIsomorphic("egg", "add"))
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("paper", "title"))
console.log(isIsomorphic("bbbaaaba", "aaabbbba"))
console.log(isIsomorphic("a", "a"))
console.log(isIsomorphic("badc", "baba"))