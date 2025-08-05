function romanToDecimal(s) {

    const roman = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,'D':500, 'C': 100, 'M': 1000
    }

    let sum = roman[s[s.length - 1]];
    let last = sum;
    for (let i = s.length - 2; i >= 0; i--) {
       console.log(sum)
        if (last > roman[s[i]]) {
            sum = sum - roman[s[i]];
        }
        else {
            sum = sum + roman[s[i]];
        }

        last = roman[s[i]];
    }
    return sum;
}

console.log(romanToDecimal("MMMDCLXXX"))