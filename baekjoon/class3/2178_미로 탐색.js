let [NM, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NM, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +NM.split(' ')[0];
let M = +NM.split(' ')[1];

let graph = orders.map((items)=> items.split('').map(item => +item));
let visited = [...Array(N)].map(()=>Array(M).fill(0));

let ds = [[0,-1], [0, 1], [-1, 0], [1, 0]];

function bfs(s_x, s_y){
    let queue = [[s_x, s_y]];
    visited[s_x][s_y] = 1;
    let next = [];

    while(queue.length > 0){
        let [x, y] = queue.shift();
       
        if(x == N-1 && y == M-1){
            break;
        }

        for (let i = 0; i < ds.length; i++) {
            let xPos = x + ds[i][0];
            let yPos = y + ds[i][1];

            if (xPos < 0 || yPos < 0 || xPos >= N || yPos >= M) continue;

            if (graph[xPos][yPos] === 1 && visited[xPos][yPos] == 0) {
                next.push([xPos, yPos]);
                visited[xPos][yPos] = visited[x][y] +1;
            }
        }
        if(next.length > 0){
            queue = queue.concat(next);
            next = [];
        }
    }
}


bfs(0, 0);
console.log(visited[N-1][M-1]);