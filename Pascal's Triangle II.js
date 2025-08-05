/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  return f(1, rowIndex, [1, 1]);
};

function f(ind, n, pre) {
  if (ind === n) return pre;

  const next = new Array(ind + 1).fill(0);
  next[0] = 1;
  next[ind + 1] = 1;
  let pnt = 1;

  for (let i = 0; i < ind; i++) {
    next[pnt] = pre[i] + pre[i + 1];
    pnt++;
  }

  return f(ind + 1, n, next);
}
console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(4));
