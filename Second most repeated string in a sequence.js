function secFrequent(arr, n) {
    const map = new Map();
    let max = 0;
    let most_frequnet_str = ''
    arr.forEach(ele => {
        if (!map.has(ele)) map.set(ele, 1)
        else map.set(ele, map.get(ele) + 1)

        if (max < map.get(ele)) {
            max = map.get(ele);
            most_frequnet_str = ele;
        }
    });
    map.delete(most_frequnet_str);
    let sec_max = 0;
    let sec_max_char = '';
    for (let [key, value] of map) {
        if (sec_max < value) {
            sec_max = value;
            sec_max_char = key
        }

    }
    return sec_max_char;

}

console.log(secFrequent(["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"], 6))