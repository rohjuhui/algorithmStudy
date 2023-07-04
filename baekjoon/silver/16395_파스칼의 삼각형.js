let [n, k] = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
// let [R, C, W] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

n = +n;
k = +k;

let dp = Array(n).fill(0);
dp[0] = [1];
dp[1] = [1, 1];

for(let i=2; i<n; i++){
    let tmp = [1];
    for(let j=1; j<i; j++){
        tmp.push(dp[i-1][j-1] + dp[i-1][j]);
    }
    tmp.push(1);
    dp[i] = tmp;
}
// console.table(dp);

console.log(dp[n-1][k-1]);

