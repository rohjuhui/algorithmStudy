let orders = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let orders  = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

orders = orders.map((items)=> items.split(' ').map(item => +item));

let ds = [ [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1] ];
function bfs(start, end, graph, W, H) {
    let queue = [[start, end]];
    graph[start][end] = 0;
    while(queue.length){
        let [x, y] = queue.shift();

        for (let i = 0; i < ds.length; i++) {
            let xPos = x + ds[i][0];
            let yPos = y + ds[i][1];

            if (xPos < 0 || yPos < 0 || xPos >= H || yPos >= W) continue;
            if (graph[xPos][yPos]) {
                graph[xPos][yPos] = 0;
                queue.push([xPos, yPos])
            };

        }
    }
}

let result = [];

while(orders.length > 0){
    let [w, h] = orders.shift();
    let graph = orders.splice(0, h);
    if(w === 0 || h === 0){
        break;
    }else{
        let cnt = 0;
        for (let j = 0; j < h; j++) {
            for (let z = 0; z < w; z++) {
                if (graph[j][z] == 1) {
                    bfs(j, z, graph, w, h);
                    cnt++;
                }
            }
        }
        result.push(cnt);
    }
}

console.log(result.join('\n'));