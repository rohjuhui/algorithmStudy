let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

N = +N;
let graph = [...Array(N+1)].map(()=>[]);
let visited = Array(N+1).fill(0);
let result = 0;
orders.shift();

for(let num of orders){
    [val1, val2] = num.toString().trim().split(' ').map((val)=>+val);
    graph[val1].push(val2);
    graph[val2].push(val1);

}

dfs(1);
console.log(result-1);

function dfs(n){
    if(visited[n] == 1){
        return;
    }
    visited[n] = 1;
    result++;
    for(let g of graph[n]){
        if(visited[g] == 0){
            dfs(g);
        }
    }
}
