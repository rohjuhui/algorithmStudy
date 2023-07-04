let [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

N = +N;
M = +M;

let answer = [];
let visited = Array(M).fill(0);

function dfs(start){
    if(answer.length == M){
        console.log(answer.join(' '));
        return;
    }

    for(let i=1; i<N+1; i++){
        if (visited[i] == 1){
          continue;  
        } 
        visited[i] = 1;
        answer.push(i);
        dfs(i);
        answer.pop();
        visited[i] = 0;
    }
}

dfs(1);
