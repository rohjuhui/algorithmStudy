let [NM, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NM, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +NM.split(' ')[0];
let M = +NM.split(' ')[1];

orders = orders.toString().trim().split(' ').map((val)=> +val);
orders = orders.sort((a,b) => a-b);

let answer = [];
let result = [];

function dfs(){
    if(answer.length == M){
        result.push(answer.join(' '));
        return;
    }

    for(let i=0; i<N; i++){
        answer.push(orders[i]);
        dfs(i);
        answer.pop();
    }
}

dfs();
console.log(result.join('\n'));
