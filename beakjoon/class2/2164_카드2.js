class Queue {
    constructor(){
        this.storage = {}; // 값을 저장할 객체
        this.front = 0; // 첫번째 원소 포인터
        this.rear = 0;  // 마지막 원소 포인터
    }

    /**
     * queue 크기
     * - rear가 가리키는 값일 없을 때 = 데이터가 없는 경우
     */
    size(){
        if(this.storage[this.rear] == undefined){
            return 0;
        }else{
            return this.rear - this.front + 1;
        }
    }

    /**
     * queue 데이터 추가
     * - 데이터 없는 경우
     *   : 0번째에 데이터 추가, 포인터 증가x
     * - 데이터 존재
     *   : rear 증가 후 rear 위치에 데이터 추가
     */
    enqueue(value){
        if(this.size() === 0){
            this.storage['0'] = value;
        }else{
            this.rear += 1;
            this.storage[this.rear] = value;
        }
    }

    /**
     * queue 데이터 추출
     * - front, rear가 같은 경우 
     *  : 데이터가 1개 남았을 경우, 제거 후 front, rear를 0으로 초기화
     */
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
let N = require('fs').readFileSync('example.txt').toString().trim();
// let N = require('fs').readFileSync('/dev/stdin').toString().trim();

N = parseInt(N);

let queue = new Queue();
// queue 생성
for(let i=1; i<=N; i++){
    queue.enqueue(i);
}

let flag = true;
while(true){
    if(queue.size() == 1){
        console.log(queue.dequeue());
        break;
    }else{
        if(flag){
            queue.dequeue();
            flag = false;
        }else{
            let tmp = queue.dequeue();
            queue.enqueue(tmp);
            flag = true;
        }
    }
}
