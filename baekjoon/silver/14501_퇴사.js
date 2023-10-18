let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

orders = orders.map((items)=> items.split(' ').map(item => +item));

let dp = Array(N).fill(0);

for (let i=0; i<N; i++) { 
  let [day, money] = orders[i];
  if (i + day > N){
    continue; 
  }
  dp[i] += money;
  for (let j=i+day; j<N; j++) {
    dp[j] = Math.max(dp[j], dp[i]);
  }
}

console.log(Math.max(...dp));