var generateParenthesis = function (n) {
    const arr = [];
    solve(n, arr, '', 0, 0);
    console.log(arr)
};

function solve(n, arr, str, openB, closeB) {

    if (openB > n || closeB > n || closeB > openB) {
        return;
    }


    if (str.length === n * 2) {
        arr.push(str);
        return
    }

    solve(n, arr, str + '(', openB + 1, closeB);
    solve(n, arr, str + ')', openB, closeB + 1);

}

generateParenthesis(3)