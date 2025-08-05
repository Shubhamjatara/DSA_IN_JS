class Solution {
  dfs(node, visited, adj, stack) {
    visited[node] = true;
    for (let n of adj[node]) {
      if (!visited[n.v]) this.dfs(n.v, visited, adj, stack);
    }
    stack.push(node);
  }

  shortestPath(V, E, edges) {
    // Correct size: based on vertices
    const adj = Array.from({ length: V }, () => []);

    for (let e of edges) {
      const u = e[0];
      const v = e[1];
      const w = e[2];
      adj[u].push({ v: v, w: w });
    }

    const visited = new Array(V).fill(false);
    const stack = [];

    for (let i = 0; i < V ; i++) {
      if (!visited[i]) this.dfs(i, visited, adj, stack);
    }

    //stack.reverse();

    const ans = new Array(V).fill(Infinity);
    ans[0] = 0;
 console.log(stack)
    while (stack.length) {
      const node = stack.pop();
      for (let n of adj[node]) {
        const v = n.v;
        const w = n.w;
        ans[v] = Math.min(ans[v], w + ans[node]);
      }
    }
   
    return ans.map((val) => (val == Infinity ? -1 : val));
  }
}

const solution = new Solution();
/* console.log(
  solution.shortestPath(4, 2, [
    [0, 1, 2],
    [0, 2, 1],
  ])
); */
console.log(
  solution.shortestPath(6, 7, [
    [0, 1, 2],
    [0, 4, 1],
    [4, 5, 4],
    [4, 2, 2],
    [1, 2, 3],
    [2, 3, 6],
    [5, 3, 1],
  ])
);
