let [N, orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

N = +N;
orders = orders.split(' ').map(val=>+val);

let dp = Array(N).fill(0);
dp[0] = orders[0];
for(let i=1; i<N; i++){
    dp[i] = Math.max(dp[i-1] + orders[i], orders[i]);
}
console.log(Math.max(...dp));