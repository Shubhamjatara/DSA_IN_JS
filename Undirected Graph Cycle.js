/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
 */
class Solution {
  isCycle(V, edges) {
    // Code here
    const visited = new Array(V).fill(false);
    const adj = Array.from({ length: V }, () => new Array());
    for (let e of edges) {
      adj[e[0]].push(e[1]);
      adj[e[1]].push(e[0]);
    }

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        if (this.checkCycle(i, visited, adj)) return true;
      }
    }
    return false;
  }

  checkCycle(src, visited, adj) {
    const q = [];
    q.push([src, -1]);
    visited[src] = true;
    while (q.length) {
      let [node, parent] = q.pop();

      for (let neigbour of adj[node]) {
        if (!visited[neigbour]) {
          visited[neigbour] = true;
          q.push([neigbour, node]);
        } else if (neigbour != parent) {
          return true;
        }
      }
    }

    return false;
  }
}

console.log(
  new Solution().isCycle(4, [
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 3],
  ])
);

console.log(
  new Solution().isCycle(4, [
    [0, 1],
    [1, 2],
    [2, 3],
  ])
);
