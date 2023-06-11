let [NM, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NM, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +NM.split(' ')[0];
let M = +NM.split(' ')[1];

orders = orders.toString().trim().split(' ').map((val)=> +val);
orders = orders.sort((a,b) => a-b);

let answer = [];
let visited = Array(M).fill(0);
let result = [];

function dfs(start){
    if(answer.length == M){
        result.push(answer.join(' '));
        return;
    }

    for(let i=start; i<N; i++){
        if (visited[i] == 1){
          continue;  
        } 
        visited[i] = 1;
        answer.push(orders[i]);
        dfs(i+1);
        answer.pop();
        visited[i] = 0;
    }
}

dfs(0);
console.log(result.join('\n'));
