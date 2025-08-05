function jobSequencing(deadline, profit) {
  const pairs = [];
  let pro = 0;
  let job = 0;
  let maxD = Math.max(...deadline);
  //pair
  for (let i = 0; i < deadline.length; i++) {
    pairs.push({ p: profit[i], d: deadline[i] });
    maxD = Math.max(maxD, deadline[i]);
  }
  const slot = new Array(maxD + 1).fill(0);
  //sort
  pairs.sort((a, b) => b.p - a.p);
  for (let i = 0; i < pairs.length; i++) {
    let d = pairs[i].d;
    while (1 <= d) {
      if (slot[d] === 0) {
        slot[d] = pairs[i].p;
        pro = pro + pairs[i].p;
        job++;
        break;
      }
      d--;
    }
  }

  return [job, pro];
}

console.log(jobSequencing([4, 1, 1, 1], [20, 10, 40, 30]));
console.log(jobSequencing([2, 1, 2, 1, 1], [100, 19, 27, 25, 15]));
console.log(jobSequencing([3, 1, 2, 2], [50, 10, 20, 30]));
console.log(jobSequencing([2, 1, 2, 1, 1], [100, 19, 27, 25, 15]));
