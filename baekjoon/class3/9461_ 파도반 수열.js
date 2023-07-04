let [T, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [T, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

T = +T;
orders = orders.map(val=>+val);

let dp = Array(101).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

let result = [];
for(let n of orders){
    for(let i=4; i<n+1; i++){
        dp[i] = dp[i-2] + dp[i-3];
    }
    result.push(dp[n]);
}
console.log(result.join('\n'));