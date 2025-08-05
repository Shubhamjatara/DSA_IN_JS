/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
const dp = Array.from({ length: coins.length }, () => Array(amount + 1).fill(-1));

  const ans = solve(0, coins, amount, dp);

  if (ans !== Number.MAX_SAFE_INTEGER) return ans;

  return -1;
};

function solve(index, coins, amount, dp) {
  if (amount < 0) return Number.MAX_SAFE_INTEGER;
  if (amount === 0) return 0;

  if (dp[index][amount] !== -1) return dp[index][amount];
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = index; i < coins.length; i++) {
    min = Math.min(solve(i, coins, amount - coins[i], dp), min);
  }
  if (min === Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;

  return (dp[index][amount] = min + 1);
  //return min + 1;
}
console.log(coinChange([1, 2, 5], 100));
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
