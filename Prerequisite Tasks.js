
class Solution {
  isPossible(prerequisites, n, p) {
    // code here
    const adj = Array.from({ length: n }, () => []);
    const path = new Array(n).fill(false);
    for (let e of prerequisites) {
      adj[e[0]].push(e[1]);
    }
    const visited = Array(n).fill(false);
    const stack = [];
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        this.dfs(i, visited, adj, stack, path);
      }
    }

    return stack.length == n ? "Yes" : "No";
  }

  dfs(node, visited, adj, stack, path) {
    visited[node] = true;
    path[node] = true;
    for (let n of adj[node]) {
      if (!visited[n]) {
        if (!this.dfs(n, visited, adj, stack, path)) return false;
      }
      if (path[n]) return false;
    }
    stack.push(node);
    path[node] = false;
    return true;
  }
}

const solution = new Solution();
console.log(
  solution.isPossible(
    [
      [1, 0],
      [2, 1],
      [3, 2],
    ],
    4,
    3
  )
);

console.log(
  solution.isPossible(
    [
      [1, 0],
      [0, 1],
    ],
    2,
    2
  )
);
