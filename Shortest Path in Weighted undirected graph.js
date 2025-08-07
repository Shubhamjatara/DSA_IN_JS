class Solution {
  /**
    * @param number n
    * @param number m
    * @param number[][] edges

    * @returns number
    */
  shortestPath(n, m, edges) {
    return this.dijkstra(n, edges, 1);
  }

  dijkstra(V, edges, src) {
    const distance = new Array(V + 1).fill(Infinity);
    const adj = Array.from({ length: V + 1 }, () => []);
    distance[0] = 0;
    for (let e of edges) {
      adj[e[0]].push([e[1], e[2]]);
      adj[e[1]].push([e[0], e[2]]);
    }
    const set = new Set();
    //node,weight
    set.add(JSON.stringify([src, 0, [src]]));
    distance[src] = 0;
    let p = [];
    while (set.size > 0) {
      const it = JSON.parse(set.values().next().value);
      const node = it[0];
      const dis = it[1];
      const path = it[2];

      set.delete(JSON.stringify([node, dis, path]));

      for (let n of adj[node]) {
        const adjNode = n[0];
        const edw = n[1];

        if (dis + edw < distance[adjNode]) {
          if (distance[adjNode] != Infinity) {
            set.delete(JSON.stringify([adjNode, distance[adjNode], path]));
          }
          distance[adjNode] = dis + edw;
          const tempPath = JSON.parse(JSON.stringify(path));
          tempPath.push(adjNode);
          if (adjNode === V) {
            p = JSON.parse(JSON.stringify(tempPath));
          }
          set.add(
            JSON.stringify([adjNode, distance[adjNode], tempPath])
          );
        }
      }
    }
    if (distance[V] == Infinity) return [-1];
    return [distance[V], ...p];
  }
}

const sol = new Solution();
console.log(
  sol.shortestPath(5, 6, [
    [1, 2, 2],
    [2, 5, 5],
    [2, 3, 4],
    [1, 4, 1],
    [4, 3, 3],
    [3, 5, 1],
  ])
);

console.log(sol.shortestPath(2, 1, [[1, 2, 2]]));

console.log(sol.shortestPath(2, 0, []));
console.log(
  sol.shortestPath(
    6,
    0,
    [
      [2, 6, 1],
      [1, 2, 4],
      [2, 3, 5],
    ],
    [2, 5, 2],
    [1, 3, 5]
  )
);
