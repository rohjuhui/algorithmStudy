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

let [N, ...orders] =  require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

N = +N;

orders = orders.map((items)=> items.split(''));

let visited = [...Array(N)].map(()=>Array(N).fill(0));

let ds = [[0,-1], [0, 1], [-1, 0], [1, 0]];

let result = [];

function bfs(s_x, s_y) {
    let cnt = 1;
    let queue = new Queue();
    queue.enqueue([[s_x, s_y]]);
    visited[s_x][s_y] = 1;

    while(queue.size() > 0){
        let [x, y] = queue.dequeue();
        for (let i = 0; i < ds.length; i++) {
            let xPos = x + ds[i][0];
            let yPos = y + ds[i][1];
            
            if (xPos >= 0 && yPos >= 0 && xPos < N && yPos < N
                && visited[xPos][yPos] == 0
                && orders[xPos][yPos] == '1') {
                queue.enqueue([[xPos, yPos]]);
                visited[xPos][yPos] = 1;
                cnt++;
            }
        }
    }
    result.push(cnt);
}

for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        if(orders[i][j] == '1' && visited[i][j] == 0){
            bfs(i,j);
        }
    }
}
console.log(result.length);
result.sort((a,b) => a-b);
console.log(result.join('\n'));