let [NM, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NM, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +NM.split(' ')[0];
let M = +NM.split(' ')[1];

let i_x = 0;
let i_y = 0;
let campus = [];
for(let i=0; i<N; i++){
    if(orders[i].indexOf('I') != -1){
        i_x = i;
        i_y = orders[i].indexOf('I');
    }
    campus.push(orders[i].split(''));
}

let dx = [-1,1,0,0]
let dy = [0,0,-1,1];
let visited = [...Array(N)].map(()=>Array(M).fill(0));
let result = 0;

function dfs(x, y){
    if((0<=x && x<N) && (0<=y && y<M) && visited[x][y] != 1){
        visited[x][y] = 1;
        if(campus[x][y] == 'P'){
            result++;
        }
        for(let i=0; i<dx.length; i++){
            let n_x = x + dx[i];
            let n_y = y + dy[i];
            if((0<=n_x && n_x<N) && (0<=n_y && n_y<M) && visited[n_x][n_y] != 1){
                if(campus[n_x][n_y] != 'X'){
                    dfs(n_x, n_y);
                }
            }
        }
    }
}

dfs(i_x, i_y);

console.log(result > 0 ? result : 'TT');