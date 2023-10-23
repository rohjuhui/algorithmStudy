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
        if(this.size() != 0){
            this.rear += 1;
            this.storage[this.rear] = value;
        }else{
            this.storage['0'] = value;
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

    first(){
        if(this.size() == 0){
            return -1;
        }else{
            return this.storage[this.front];
        }
    }

    end(){
        if(this.size() == 0){
            return -1;
        }else{
            return this.storage[this.rear];
        }
    }
}

let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let queue = new Queue();
let res = [];
for(let i=0; i<Number(N); i++){
	let order = orders[i].toString().trim().split(' ')[0];
	if(order === 'push'){
        let num = +orders[i].toString().trim().split(' ')[1];
        queue.enqueue(num);
	}else if(order === 'pop'){
        if(queue.size() == 0){
            res.push(-1);
        }else{
            res.push(queue.dequeue());
        }
	}else if(order === 'size'){
        res.push(queue.size());
	}else if(order === 'empty'){
        if(queue.size() == 0){
            res.push(1);
        }else{
            res.push(0);
        }
	}else if(order === 'front'){
        res.push(queue.first());
	}else if(order === 'back'){
        res.push(queue.end());
	}
}

console.log(res.join('\n'));