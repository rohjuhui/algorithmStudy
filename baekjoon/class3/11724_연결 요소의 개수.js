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

let graph = [...Array(N+1)].map(()=>[]);
for(let num of orders){
    [val1, val2] = num.toString().trim().split(' ').map((val)=>+val);
    graph[val1].push(val2);
    graph[val2].push(val1);

}

let visited = Array(N+1).fill(0);
let result = 0;

function bfs(n){
    let queue = new Queue();
    visited[n] = 1;
    queue.enqueue(graph[n]);

    while(queue.size() > 0){
        let g = queue.dequeue();
        if(visited[g] == 0){
            visited[g] = 1;
            queue.enqueue(graph[g]);
        }
    }
}

for(let i=1; i<N+1; i++){
    if(visited[i] == 1){
        continue;
    }
    result++;
    bfs(i);
}

console.log(result);