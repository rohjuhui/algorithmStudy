let [NM, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NM, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +NM.split(' ')[0];

let inf = Infinity;
let graph = [...Array(N)].map(()=>Array(N).fill(inf));
for(let num of orders){
    [val1, val2] = num.toString().trim().split(' ').map((val)=>+val);
    graph[val1-1][val1-1] = 0;
    graph[val2-1][val2-1] = 0;
    graph[val1-1][val2-1] = 1;
    graph[val2-1][val1-1] = 1;
}

for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        for(let k=0; k<N; k++){
            if(graph[j][k] > graph[j][i] + graph[i][k]){
                graph[j][k] = graph[j][i] + graph[i][k];
            }
        }
    }
}

let cnt=inf;
let result=0;

for(let i=0; i<N; i++){
    let sum = graph[i].reduce((a,b) => (a+b));
    if(cnt > sum){
        cnt = sum;
        result = i+1;
    }
}
console.log(result);
