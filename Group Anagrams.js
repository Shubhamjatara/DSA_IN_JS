var groupAnagrams = function (strs) {

    const map = new Map();
    for (let i = strs.length - 1; i >= 0; i--) {
        const arr = strs[i].split("");
        arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
        const join = arr.join("");
        if (!map.has(join)) {
            const arr = [];
            arr.push(strs[i])
            map.set(join, arr)
            continue;
        }

        if (map.has(join)) {
            const getArr = map.get(join);
            getArr.push(strs[i])
            map.set(join, getArr);
        }
    }
    const result = []
    for (let [key, value] of map)
        result.push(value)

    return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams([""]));