let [T, ...numbers] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [T, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

T = +T;
numbers = numbers.map(val=>+val);

let result = [];
for(let n of numbers){
    let dp = [1, 2, 4];
    if(n>=4){
        for(let i = 3; i<n; i++){
            dp.push(dp[i-3] + dp[i-2] + dp[i-1]);
        }
    }
    result.push(dp[n-1]);
}

console.log(result.join('\n'));

