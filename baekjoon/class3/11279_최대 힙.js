class MaxHeap{
	constructor() {
        this.heap = []
    }

	size(){
		return this.heap.length;
	}

    heapPush(data) {
        this.heap.push(data)
        this.bubbleUp()
    }

    bubbleUp(index = this.heap.length - 1) {
        if (index < 1) return
        let currentNode = this.heap[index]
        let parentIndex = Math.floor((index - 1) / 2)
        let parentNode = this.heap[parentIndex]

        if (parentNode >= currentNode) return

        this.heap[parentIndex] = currentNode
        this.heap[index] = parentNode
        index = parentIndex
        this.bubbleUp(index)
    }

    heapPop() {
        const max = this.heap[0]
        if (this.heap.length === 1) {
            this.heap.pop()
            return max
        }
        this.heap[0] = this.heap.pop()
        this.trickleDown()
        return max
    }

    trickleDown(index = 0) {
        let leftChildIndex = index * 2 + 1
        let rightChildIndex = index * 2 + 2
        let length = this.heap.length
        let maximum = index

        if (!this.heap[leftChildIndex] && !this.heap[rightChildIndex]) return

        if (!this.heap[rightChildIndex]) {
            if (this.heap[leftChildIndex] > this.heap[maximum]) {
                maximum = leftChildIndex
            }
        }

        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
            if (rightChildIndex <= length && this.heap[rightChildIndex] > this.heap[maximum]) {
                maximum = rightChildIndex
            }
        } else {
            if (leftChildIndex <= length && this.heap[leftChildIndex] > this.heap[maximum]) {
                maximum = leftChildIndex
            }
        }

        if (maximum !== index) {
            let t = this.heap[maximum]
            this.heap[maximum] = this.heap[index]
            this.heap[index] = t
            this.trickleDown(maximum)
        }
    }
}

let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];
let heap = new MaxHeap();
for(let order of orders){
	order = +order;

	if(order === 0){
		if(heap.size() > 0){
			result.push(heap.heapPop());
		}else{
			result.push(0);
		}
	}else{
		heap.heapPush(order);
	}
}
console.log(result.join('\n'));
