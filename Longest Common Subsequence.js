function lcs(s1, s2) {
    const set1 = new Set();
    const set2 = new Set();
    solve(s1, 0, '', set1);
    solve(s2, 0, '', set2);
    let max_len = 0;
    let common = '';
    set1.forEach((value) => {

        if (set2.has(value) && value.length > max_len) {
            max_len = value.length;
            common = value;
        }
    })
    //testing
    const clone = [...set1];
    clone.sort((a, b) => a.length - b.length)
    //console.log(clone)
    clone.forEach((value) => { if (value.length === 2 ) { console.log(value) } })
    // return max_len;
}

function solve(s, index, temp_str, set) {
    if (index > s.length) return;

    for (let i = index; i < s.length; i++) {

        if (set.has(temp_str + s[i])) {
            continue;
        }

        set.add(temp_str + s[i]);
        solve(s, i + 1, temp_str + s[i], set);
        set.add(s.substring(i, s.length))
       
    }
}

//console.log(lcs("ABCDGH", "AEDFHR"))
//console.log(lcs("ABC", "AC"))
console.log(lcs("XNPBGEJB", "LSZBFABOEK"))
//console.log(lcs("XYZW", "XYWZ")) 