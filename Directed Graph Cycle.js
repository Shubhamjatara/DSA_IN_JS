/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {boolean}
 */
class Solution {
  isCyclic(V, edges) {
    const adj = Array.from({ length: V }, () => new Array());
    const visited = new Array(V).fill(false);
    const path = new Array(V).fill(false);
    for (let e of edges) {
      adj[e[0]].push(e[1]);
    }
    for (let i = 0; i < V; i++) {
      if (this.dfs(i, visited, path, adj)) return true;
    }
    return false;
  }

  dfs(src, visited, path, adj) {
    visited[src] = true;
    path[src] = true;
    for (let n of adj[src]) {
      if (!visited[n]) {
        if (this.dfs(n, visited, path, adj)) return true;
      } else {
        if (path[n]) return true;
      }
    }
    path[src] = false;
    return false;
  }
}

const solution = new Solution();
console.log(
  solution.isCyclic(4, [
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 0],
    [2, 3],
  ])
);

console.log(
  solution.isCyclic(4, [
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 3],
  ])
);

console.log(
  solution.isCyclic(3, [
    [2, 1],
    [1, 2],
    [2, 0],
  ])
);
