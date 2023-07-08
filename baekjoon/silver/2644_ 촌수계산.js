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
let [n, xy, m, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [n, xy, m, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


n = +n;
m = +m;
let x = +xy.split(' ')[0];
let y = +xy.split(' ')[1];

let graph = [...Array(n+1)].map(()=>[]);

for(let num of orders){
    [val1, val2] = num.toString().trim().split(' ').map((val)=>+val);
    graph[val1].push(val2);
    graph[val2].push(val1);

}

let visited = Array(n+1).fill(0);
let result = 0;

function bfs(num){
    let queue = new Queue();
    let cnt = 1;
    let next = [];
    visited[num] = 1;
    queue.enqueue(graph[num]);

    while(queue.size() > 0){
        let g = queue.dequeue();
        if(g == y){
            result = cnt;
            break;
        }
        if(visited[g] == 0){
            visited[g] = 1;
            next = next.concat(graph[g]);
        }

        if(queue.size() == 0 && next.length > 0){
            queue.enqueue(next);
            cnt++;
            next = [];
        }
       
    }
}

if(x != y){
    bfs(x);
}
console.log(result == 0 ? -1 : result);