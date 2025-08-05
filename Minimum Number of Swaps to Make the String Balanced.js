var minSwaps = function (s) {
    let match = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') match++;
        else if (match > 0) {

            match--;
            console.log(match)
        }
    }

    return Math.ceil(match / 2)
}

console.log(minSwaps("]]][[["))