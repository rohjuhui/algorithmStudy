let [T, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [T, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T;

for(let i = 0; i < T; i++){
    let N = +orders[i*3];
    let stickers = [];
    stickers.push(orders[i*3+1].split(' ').map(val=>+val));
    stickers.push(orders[i*3+2].split(' ').map(val=>+val));


    let dp = [Array(N).fill(0),Array(N).fill(0)];
    dp[0][0] = stickers[0][0]
    dp[0][1] = stickers[0][1] + stickers[1][0]
    dp[1][0] = stickers[1][0]
    dp[1][1] = stickers[1][1] + stickers[0][0]
    for(let n=2;n<N;n++){
        dp[0][n] = Math.max(dp[1][n-1] ,dp[1][n-2])+stickers[0][n];
        dp[1][n] = Math.max(dp[0][n-1],dp[0][n-2]) + stickers[1][n];
    }
    console.log(Math.max(dp[0][N-1], dp[1][N-1]));
}
