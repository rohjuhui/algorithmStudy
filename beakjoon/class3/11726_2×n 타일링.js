let N = require('fs').readFileSync('../example.txt').toString().trim();
// let N = require('fs').readFileSync('/dev/stdin').toString().trim();
N = +N;

let dp = Array.from(N+1).fill(0);
dp[1] = 1;
dp[2] = 2;

for(let i=3; i<N+1; i++){
    dp[i] = (dp[i-2] + dp[i-1])%10007;
}
console.log(dp[N]);