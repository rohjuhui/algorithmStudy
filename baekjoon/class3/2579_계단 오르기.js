let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

N = +N;
orders = orders.map(val=>+val);

let dp = [];
let result = 0;
if(N < 3){
    result = orders.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}else{
    dp[0] = orders[0];
    dp[1] = orders[0] + orders[1];
    dp[2] = Math.max(orders[0], orders[1]) + orders[2];

    for(let i=3; i<N; i++){
        dp[i] = Math.max(orders[i] + orders[i-1] + dp[i-3], orders[i] + dp[i-2]);
    }

    result = dp[N-1];
}
console.log(result);