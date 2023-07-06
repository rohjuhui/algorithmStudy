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


let [N, M] = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
// let [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

N = +N;
M = +M;

let visited = Array(100001).fill(0);
let cnt = 0;

function bfs(n){
    let queue = new Queue();
    let next = [];
    visited[n] = 1;
    queue.enqueue([n-1, n+1, n*2]);
    cnt = 1;

    while(true){
        let g = queue.dequeue();
        if(g == M){
            break;
        }
        if(visited[g] == 0){
            visited[g] = 1;
            next.push(g-1);
            next.push(g+1);
            next.push(g*2);
        }

        if(queue.size() == 0){
            queue.enqueue(next);
            cnt++;
            next = [];
        }
    }
}

if(N != M){
    bfs(N);
}
console.log(cnt);