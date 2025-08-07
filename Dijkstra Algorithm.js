class Solution {
  // Returns shortest distances from src to all other vertices
  dijkstra(V, edges, src) {
    const distance = new Array(V).fill(Infinity);
    const adj = Array.from({ length: V }, () => []);
    for (let e of edges) {
      adj[e[0]].push([e[1], e[2]]);
      adj[e[1]].push([e[0], e[2]]);
    }
    const set = new Set();
    //node,weight
    set.add(JSON.stringify([src, 0]));
    distance[src] = 0;

    while (set.size > 0) {
      const it = JSON.parse(set.values().next().value);
      const node = it[0];
      const dis = it[1];
      set.delete(JSON.stringify([node, dis]));

      for (let n of adj[node]) {
        const adjNode = n[0];
        const edw = n[1];

        if (dis + edw < distance[adjNode]) {
          if (distance[adjNode] != Infinity) {
            set.delete(JSON.stringify([adjNode, distance[adjNode]]));
          }
          distance[adjNode] = dis + edw;
          set.add(JSON.stringify([adjNode, distance[adjNode]]));
        }
      }
    }
    return distance;
  }
}
const sol = new Solution();
console.log(
  sol.dijkstra(
    3,
    [
      [0, 1, 1],
      [1, 2, 3],
      [0, 2, 6],
    ],
    2
  )
);

console.log(
  sol.dijkstra(
    5,
    [
      [0, 1, 4],
      [0, 2, 8],
      [1, 4, 6],
      [2, 3, 2],
      [3, 4, 10],
    ],
    0
  )
);
