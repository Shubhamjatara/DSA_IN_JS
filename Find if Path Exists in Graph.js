/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const adj = Array.from({ length: n }, () => new Array());
  for (let e of edges) {
    const v1 = e[0];
    const v2 = e[1];
    adj[v1].push(v2);
    adj[v2].push(v1);
  }
  const visted = new Array(n).fill(false);
  return dfs(source, destination, visted, adj);
};

const dfs = (s, d, visted, adj) => {
  visted[s] = true;
  if (s == d) return true;
  for (let v of adj[s]) {
    if (!visted[v]) {
      const found = dfs(v, d, visted, adj);
      if (found) return true;
    }
  }

  return false;
};

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);
