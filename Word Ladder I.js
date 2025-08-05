class Solution {
  wordLadderLength(startWord, targetWord, wordList, N) {
    const nodes = [...new Set([startWord, ...wordList])];
    const adj = Array.from({ length: nodes.length }, () => []);
    const visited = new Array(nodes.length.length).fill(false);
    //creating graph
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < nodes.length; j++) {
        if (i == j) continue;
        if (this.isConneted(nodes[i], nodes[j])) {
          adj[i].push(j);
        }
      }
    }
    //BFS
    const q = [{ v: 0, level: 1 }];
    let ans = Infinity;
    while (q.length) {
      const node = q.shift();
      const v = node.v;
      const level = node.level;
      if (nodes[v] === targetWord) {
        ans = Math.min(ans, level);
      }

      for (let n of adj[v]) {
        if (!visited[n]) {
          visited[n] = true;
          q.push({ v: n, level: level + 1 });
        }
      }
    }
    if (ans !== Infinity) return ans;
    return 0;
  }

  isConneted(word1, word2) {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) diff++;
    }
    if (diff == 1) return true;
    return false;
  }
}

const sol = new Solution();
console.log(
  sol.wordLadderLength("der", "dfs", ["des", "der", "dfr", "dgt", "dfs"], 5)
);

console.log(
  sol.wordLadderLength(
    "toon",
    "plea",
    ["poon", "plee", "same", "poie", "plea", "plie", "poin"],
    7
  )
);
