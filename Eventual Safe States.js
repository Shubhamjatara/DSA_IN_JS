// User function Template for C++

class Solution {
  eventualSafeNodes(V, adj) {
    const visited = new Array(V).fill(false);
    const tnode = new Array(V).fill(false);
    const safeNode = [];
    for (let i = 0; i < V; i++) {
      if (adj[i].length === 0) tnode[i] = true;
    }

    for (let i = 0; i < V; i++) {
      if (!visited[i] && this.dfs(i, tnode, visited, adj))
        tnode[i] = true;
    }
    for (let i = 0; i < V; i++) {
      if (tnode[i]) safeNode.push(i);
    }
    return safeNode;
  }

  dfs(src, tnode, visited, adj) {
    if (tnode[src]) return true;

    visited[src] = true;
    let cnt = 0;
    for (let n of adj[src]) {
      if (!visited[n]) {
        if (this.dfs(n, tnode, visited, adj)) cnt++;
      } else if (tnode[n]) cnt++;
    }

    if (cnt === adj[src].length) {
      tnode[src] = true;
    }
    if (cnt !== adj[src].length) return false;
    return true;
  }
}

const solution = new Solution();
const adj1 = [
  [1, 2], //0
  [2, 3], //1
  [5], //2
  [0], //3
  [5], //4,
  [], //5
  [], //6
];

const adj2 = [
  [1], //0
  [2], //1
  [0, 3], //2,
  [], //3
];
console.log(solution.eventualSafeNodes(7, adj1));
console.log(solution.eventualSafeNodes(4, adj2));
console.log(solution.eventualSafeNodes(5, [[], [0, 2, 3, 4], [3], [4], []]));
