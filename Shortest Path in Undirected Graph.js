class Solution {
  shortestPath(adj, src) {
    const distance = new Array(adj.length).fill(Infinity);
    const q = [];
    q.push({ src: src, dis: 0 });
    distance[src] = 0;
    while (q.length) {
      const front = q.shift();
      const node = front.src;
      const dis = front.dis;
      for (let n of adj[node]) {
        if (distance[n] > dis + 1) {
          distance[n] = dis + 1;
          q.push({ src: n, dis: dis + 1 });
        }
      }
    }
    return distance.map((val) => (val == Infinity ? -1 : val));
  }
}

const solution = new Solution();
console.log(
  solution.shortestPath(
    [
      [1, 3],
      [0, 2],
      [1, 6],
      [0, 4],
      [3, 5],
      [4, 6],
      [2, 5, 7, 8],
      [6, 8],
      [7, 6],
    ],
    0
  )
);

console.log(solution.shortestPath([[3], [3], [], [0, 1]], 3));
