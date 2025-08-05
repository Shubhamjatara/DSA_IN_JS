class Solution {
  isBipartite(V, edges) {
    const colored = new Array(V).fill(-1);
    const visited = new Array(V).fill(false);
    //adjency
    const adj = Array.from({ length: V }, () => new Array());
    for (let e of edges) {
      adj[e[0]].push(e[1]);
      adj[e[1]].push(e[0]);
    }
    visited[0] = true;
    colored[0] = 0;
    return this.dfs(0, visited, colored, adj);
  }

  dfs(src, visited, colored, adj) {
    for (let n of adj[src]) {
      if (!visited[n]) {
        visited[n] = true;
        colored[n] = colored[src] == 0 ? 1 : 0;
        if (!this.dfs(n, visited, colored, adj)) {
          return false;
        }
      }
      if (visited[n] && colored[n] === colored[src]) {
        return false;
      }
    }
    return true;
  }
}

const solution = new Solution();
console.log(
  solution.isBipartite(3, [
    [0, 1],
    [1, 2],
  ])
);

console.log(
  solution.isBipartite(4, [
    [0, 3],
    [1, 2],
    [3, 2],
    [0, 2],
  ])
);

console.log(
  solution.isBipartite(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ])
);
