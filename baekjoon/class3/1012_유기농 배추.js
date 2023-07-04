let [T, ...inputs] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [T, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let ds = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
];

let N, M, K, graph;
let n = 0;
let result = [];
for (let i = 0; i < T; i++) {
    
     [M, N, K] = inputs[n].toString().trim().split(' ').map((val)=>+val);

    graph = Array.from(Array(M), () => new Array(N).fill(0));

    let tmp = n;
    for (n = n + 1; n <= K + tmp; n++) {
        let [x, y] = inputs[n].toString().trim().split(' ').map((val)=>+val);
        graph[x][y] = 1;
    }
    let cnt = 0;
    for (let j = 0; j < M; j++) {
        for (let z = 0; z < N; z++) {
            if (graph[j][z] == 1) {
                bfs(j, z);
                cnt++;
            }
        }
    }
    result.push(cnt);

}
console.log(result.join('\n'));

function bfs(start, end) {
    let queue = [[start, end]];
    while (queue.length) {
        let [x, y] = queue.shift();
        if (graph[x][y] == 0) {
            continue;
        } else {
            graph[x][y] = 0;
        }

        for (let i = 0; i < ds.length; i++) {
            let xPos = x + ds[i][0];
            let yPos = y + ds[i][1];

            if (xPos < 0 || yPos < 0 || xPos >= M || yPos >= N) continue;
            if (graph[xPos][yPos]) queue.push([xPos, yPos]);

        }
    }
}