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

let [NM, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NM, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +NM.split(' ')[0];
let M = +NM.split(' ')[1];

let visited = [...Array(N)].map(()=>Array(M).fill(-1));

let X, Y;
let graph = orders.map((items, i_x)=> items.split(' ').map((item, i_y) => {
    let num = +item;
    if(num === 2){
        X = i_x;
        Y = i_y;
    }
    if(num === 0){
        visited[i_x][i_y] = 0;
    }
    return num;}));

let ds = [[0,-1], [0, 1], [-1, 0], [1, 0]];

function bfs(s_x, s_y){
    let queue = new Queue();
    queue.enqueue([[s_x, s_y]]);
    visited[s_x][s_y] = 0;
    let next = [];

    while(queue.size() > 0){
        let [x, y] = queue.dequeue();
       
        for (let i = 0; i < ds.length; i++) {
            let xPos = x + ds[i][0];
            let yPos = y + ds[i][1];
            
            if (xPos < 0 || yPos < 0 || xPos >= N || yPos >= M) continue;

            if (graph[xPos][yPos] === 1 && visited[xPos][yPos] == -1) {
                next.push([xPos, yPos]);
                visited[xPos][yPos] = visited[x][y] +1;
            }
            if(graph[xPos][yPos] === 0){
                visited[xPos][yPos] = 0;
            }
        }
        if(next.length > 0){
            queue.enqueue(next);
            next = [];
        }
    }
}


bfs(X, Y);
for(let tmp of visited){
    console.log(tmp.join(' '));
}