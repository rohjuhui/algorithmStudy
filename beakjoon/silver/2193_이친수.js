let N = require('fs').readFileSync('../example.txt').toString().trim();
// let N = require('fs').readFileSync('/dev/stdin').toString().trim();
N = +N;

let dp = Array(N+1).fill(0);
dp[1] = 1;
dp[2] = 1;


for(let i=3; i<N+1; i++){
	dp[i] = BigInt(dp[i-1]) + BigInt(dp[i-2]);
}

console.log(String(dp[N]));
