class Solution {
  countPaths(n, roads) {
    const adj = Array.from({ length: n }, () => []);
    for (let e of roads) {
      adj[e[0]].push({ e: e[1], w: e[2] });
      adj[e[1]].push({ e: e[0], w: e[2] });
    }
    const dist = new Array(n).fill(Infinity);
    const q = [];
    q.push({ src: 0, time: 0 });
    const mod = Math.pow(10, 9) + 7;
    dist[0] = 0;
    let ways = new Array(n).fill(0);
    while (q.length) {
      const node = q.shift();
      const nodeSrc = node.src;
      const nodeTime = node.time;

      for (let nb of adj[nodeSrc]) {
        const adjN = nb.e;
        const adjT = nb.w;

        if (dist[adjN] > adjT + nodeTime) {
          dist[adjN] = adjT + (nodeTime % mod);
          ways[adjN] = 1;
          q.push({ src: adjN, time: dist[adjN] });
        } else {
          if (dist[adjN] == adjT + nodeTime) {
            ways[adjN]++;
            q.push({ src: adjN, time: adjT + (nodeTime % mod) });
          }
        }
      }
    }

    return ways[n-1];
  }
}

const sol = new Solution();
console.log(
  sol.countPaths(7, [
    [0, 6, 7],
    [0, 1, 2],
    [1, 2, 3],
    [1, 3, 3],
    [6, 3, 3],
    [3, 5, 1],
    [6, 5, 1],
    [2, 5, 1],
    [0, 4, 5],
    [4, 6, 2],
  ])
);

console.log(
  sol.countPaths(6, [
    [0, 5, 8],
    [0, 2, 2],
    [0, 1, 1],
    [1, 3, 3],
    [1, 2, 3],
    [2, 5, 6],
    [3, 4, 2],
    [4, 5, 2],
  ])
);

console.log(
  sol.countPaths(4, [
    [0, 1, 1],
    [0, 2, 1],
    [0, 3, 2],
    [1, 3, 1],
    [2, 3, 1],
  ])
);

