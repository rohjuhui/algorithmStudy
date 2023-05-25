let [N, K] = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
// let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

N = +N;
K = +K;

let dp = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

for(let i=0; i<N+1; i++){
    for(let j=0; j<i+1; j++){
        if(i==j || j==0){
            dp[i][j] = 1;
        }else{
            let tmp = dp[i-1][j-1] + dp[i-1][j];
            dp[i][j] = tmp%10007;
        }
    }
}
console.log(dp[N][K]);