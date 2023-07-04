let [N, M] = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
// let [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

N = +N;
M = +M;

let answer = [];
let result = [];
function dfs(){
    if(answer.length == M){
        result.push(answer.join(' '));
        return;
    }

    for(let i=1; i<N+1; i++){
        answer.push(i);
        dfs(i);
        answer.pop();
    }
}

dfs(1);

console.log(result.join('\n'));