

class Solution {
  /**
   * @param {number} n
   * @param {number[][]} prerequisites
   * @returns {number[]}
   */
  findOrder(n, prerequisites) {
    // code here
    const adj = Array.from({ length: n }, () => []);
    const path = new Array(n).fill(false);
    for (let e of prerequisites) {
      adj[e[1]].push(e[0]);
    }
    const visited = Array(n).fill(false);
    const stack = [];
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        this.dfs(i, visited, adj, stack, path);
      }
    }

    return stack.reverse();
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
console.log(solution.findOrder(2, [[1, 0]]));
console.log(
  solution.findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
