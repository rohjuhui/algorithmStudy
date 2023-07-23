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
let [A, B] = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
// let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
A = +A;
B = +B;

function bfs(num){
    let queue = new Queue();
    queue.enqueue([num, 1]);

    while(queue.size() > 0){
        let g = queue.dequeue();
        let cnt = queue.dequeue();

        if(g === B){
            return cnt;
        }else{
            if(g*2  <= B){
                queue.enqueue([g*2, cnt+1]);
            }
            if(Number(g + '1') <= B){
                queue.enqueue([Number(g + '1'), cnt + 1]);
            }
        }

    }
    return -1;
}

console.log(bfs(A));
