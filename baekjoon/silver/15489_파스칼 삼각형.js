let [R, C, W] = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
// let [R, C, W] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

R = +R;
C = +C;
W = +W;

let result = 0;

let r = R-1;
let c = C-1;
let dp = Array(R).fill(0);
dp[0] = [1];
dp[1] = [1, 1];

for(let i=2; i<r+W; i++){
    let tmp = [1];
    for(let j=1; j<i; j++){
        tmp.push(dp[i-1][j-1] + dp[i-1][j]);
    }
    tmp.push(1);
    dp[i] = tmp;
}

for(let i=r; i<r+W; i++){
    c++;
    for(let j=C-1; j<c; j++){
        result += dp[i][j];
    }
}

console.log(result);