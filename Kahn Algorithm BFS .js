function topoSortBFS(V, adj) {
  let indegree = new Array(V).fill(0);

  // Step 1: Calculate indegree
  for (let u = 0; u < V; u++) {
    for (let v of adj[u]) {
      indegree[v]++;
    }
  }

  // Step 2: Push all nodes with indegree 0 in queue
  let queue = [];
  for (let i = 0; i < V; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let topo = [];
  while (queue.length > 0) {
    let node = queue.shift();
    topo.push(node);

    // Decrease indegree of neighbors
    for (let neighbor of adj[node]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return topo;
}

// Example:
const V = 6;
let adj2 = Array.from({ length: V }, () => []);
adj2[5].push(0);
adj2[5].push(2);
adj2[4].push(0);
adj2[4].push(1);
adj2[2].push(3);
adj2[1].push(3);

console.log("Kahn's Topo Sort:", topoSortBFS(V, adj2));
