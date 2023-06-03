let [N, M] = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
// let [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

N = +N;
M = +M;

let answer = [];

function dfs(start){
    if(answer.length == M){
        console.log(answer.join(' '));
        return;
    }

    for(let i=start; i<N+1; i++){
        answer.push(i);
        dfs(i+1);
        answer.pop();
    }
}

dfs(1);
