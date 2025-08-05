class Solution {
  findOrder(words) {
    //find letter and map to number
    const wholeStr = words.join("").split("");
    const set = new Set(wholeStr);
    const map = {};
    const map2 = {};
    let index = 0;
    set.forEach((val) => {
      map[val] = index;
      map2[index] = val.toString();
      index++;
    });
    const V = set.size;
    const adj = Array.from({ length: V }, () => []);
    for (let i = 0; i < words.length - 1; i++) {
      let word1 = words[i];
      let word2 = words[i + 1];
      let minLen = Math.min(word1.length, word2.length);
      if (word1.length > word2.length && word1.startsWith(word2)) {
        return ""; // invalid order
      }
      for (let j = 0; j < minLen; j++) {
        if (word1[j] !== word2[j]) {
          adj[map[word1[j]]].push(map[word2[j]]);
          break;
        }
      }
    }

    const stack = [];
    const visited = Array(V).fill(false);
    const path = new Array(V).fill(false);
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        if (!this.dfs(i, visited, adj, stack, path)) return "";
      }
    }
    return stack
      .reverse()
      .map((val) => map2[val])
      .join("");
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
console.log(solution.findOrder(["baa", "abcd", "abca", "cab", "cad"]));
console.log(solution.findOrder(["caa", "aaa", "aab"]));
console.log(solution.findOrder(["ab", "cd", "ef", "ad"]));
console.log(solution.findOrder(["abc", "ab"]));
