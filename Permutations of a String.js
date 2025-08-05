class Solution {
    findPermutation(s) {
        const split = s.split("");
        const set = new Set();
        this.solve(split, 0, set);
        return [...set]
    }

    solve(s, index, set) {


        if (index === s.length) {
            set.add([...s].join(""))
            return;
        }
        for (let i = index; i < s.length; i++) {
            [s[i], s[index]] = [s[index], s[i]];
            this.solve(s, index + 1, set);
            [s[i], s[index]] = [s[index], s[i]];
        }
    }
}



const output = new Solution().findPermutation("ABC");
console.log(output)