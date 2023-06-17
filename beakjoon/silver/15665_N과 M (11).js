let [NM, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NM, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +NM.split(' ')[0];
let M = +NM.split(' ')[1];

orders = orders.toString().trim().split(' ').map((val)=> +val);
orders = orders.sort((a,b) => a-b);

let answer = [];
let set = new Set();

function dfs(){
    if(answer.length == M){
        set.add(answer.join(' '));
        return;
    }

    for(let i=0; i<N; i++){
        answer.push(orders[i]);
        dfs(i+1);
        answer.pop();
    }
}

dfs();
let result = Array.from(set);
console.log(result.join('\n'));
