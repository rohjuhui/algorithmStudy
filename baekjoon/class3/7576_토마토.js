class Queue {
    constructor(){
        this.storage = {}; // 값을 저장할 객체
        this.front = 0; // 첫번째 원소 포인터
        this.rear = 0;  // 마지막 원소 포인터
    }

    size(){
        if(this.storage[this.rear] == undefined){
            return 0;
        }else{
            return this.rear - this.front + 1;
        }
    }

    enqueue(value){
        for(let val of value){
            if(this.size() != 0){
                this.rear += 1;
                this.storage[this.rear] = val;
            }else{
                this.storage['0'] = val;
            }
        }
    }

    dequeue(){
        let tmp = this.storage[this.front]; // 첫 원소값을 담을 변수
        delete this.storage[this.front];

        if(this.front === this.rear){
            this.front = 0;
            this.rear = 0;
        }else{
            this.front += 1;
        }

        return tmp;
    }
}

let [MN, ...orders] =  require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [MN, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let M = +MN.split(' ')[0];
let N = +MN.split(' ')[1];

orders = orders.map((items)=> items.split(' ').map(item => +item));

let queue = new Queue();
let visited =  Array.from(Array(N), () => new Array(M).fill(0));

for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        if(orders[i][j] === 1){
            queue.enqueue([[i, j]]);
        }
        if(orders[i][j] === 0){
            visited[i][j] = -1;
        }
    }
}

let ds = [[0, -1], [0, 1], [-1, 0], [1, 0]];

function bfs(){
    while(queue.size() > 0){
        let [x, y] = queue.dequeue();
        for(let i=0; i<ds.length; i++){
            let nx = x + ds[i][0];
            let ny = y + ds[i][1];
            if(nx < 0 || ny < 0 || nx >= N || ny >= M){
                continue;
            }
            if(visited[nx][ny] >= 0){
                continue;
            }
            visited[nx][ny] = visited[x][y] + 1;
            queue.enqueue([[nx, ny]]);
        }
    }
}

bfs();
// console.table(visited);
let result = 0;
outerLoop: for (let i=0; i < N; i++) {
    for (let j=0; j < M; j++) {
        if (visited[i][j] === -1){
            result = -1;
            break outerLoop;
        }
        result = Math.max(result, visited[i][j]);
    }
}
console.log(result);