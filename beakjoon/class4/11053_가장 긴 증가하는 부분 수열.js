let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

N = +N;
orders = orders.toString().trim().split(' ').map((val)=>+val);

let dp = Array(N).fill(0);
dp[0] = 1;

for(let i=1; i<N; i++){
    dp[i] = 1;

    for(let j=0; j<i; j++){
        if(orders[j] < orders[i]){
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

// console.table(dp);
console.log(Math.max(...dp));