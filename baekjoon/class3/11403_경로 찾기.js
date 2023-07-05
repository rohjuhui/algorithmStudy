let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

N = +N;
orders = orders.map((val)=>val.split(' '));

let inf = Infinity;
let graph = [...Array(N)].map(()=>Array(N).fill(inf));

for(let i=0; i<N; i++){
    let order = orders[i];
    for(let j=0; j<N; j++){
        let num = +order[j];
        if(num === 1){
            graph[i][j] = 1;
        }

    }
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

let result = [];
for(let arr of graph){
    arr = arr.map((val)=> {
        if(val > 0 && val != inf){
            return 1;
        }else{
            return 0;
        }
    })
    result.push(arr.join(' '));
}

console.log(result.join('\n'));
