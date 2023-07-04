let [NMV, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NMV, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +NMV.split(' ')[0];
let M = +NMV.split(' ')[1];
let V = +NMV.split(' ')[2];

let graph = [...Array(N+1)].map(()=>[]);
for(let num of orders){
    [val1, val2] = num.toString().trim().split(' ').map((val)=>+val);
    graph[val1].push(val2);
    graph[val2].push(val1);
    graph[val1].sort((a,b)=>a-b);
    graph[val2].sort((a,b)=>a-b);
}

let visited_dfs = Array(N+1).fill(0);
let result_dfs = [V];
function dfs(n){
    if(visited_dfs[n] == 1){
        return;
    }
    visited_dfs[n] = 1;
    for(let g of graph[n]){
        if(visited_dfs[g] == 0){
            result_dfs.push(g);
            dfs(g);
        }
    }
}

let visited_bfs = Array(N+1).fill(0);
let result_bfs = [];
function bfs(n){
    visited_bfs[n] = 1;
    result_bfs.push(n);
    let queue = graph[n];

    while(queue.length > 0){
        let g = queue.shift();
        if(visited_bfs[g] == 0){
            visited_bfs[g] = 1;
            result_bfs.push(g);
            queue = [...queue, ...graph[g]];
        }

    }
}

dfs(V);
console.log(result_dfs.join(' '));

bfs(V);
console.log(result_bfs.join(' '));