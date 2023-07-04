class Heap {
	constructor() {
		this.heap = [];
	}

	size() {
		return this.heap.length;
	}

	heapPush(value) {
		this.heap.push(value);
		
		let curIdx = this.heap.length - 1;
		const curValue = this.heap[curIdx];

		while (curIdx > 0) {
			let parIdx = Math.floor((curIdx - 1) / 2);

			if ((this.heap[parIdx][0] < curValue[0]) ||
				((this.heap[parIdx][0] == curValue[0]) && (this.heap[parIdx][1] < curValue[1]))
			) {
				break;
			}
			this.heap[curIdx] = this.heap[parIdx];
			this.heap[parIdx] = curValue;
			curIdx = parIdx;
		}
	}

	heapPop() {
		const min = this.heap[0];
		const end = this.heap.pop();
		if (this.heap.length > 0) {
			this.heap[0] = end;
			this.heapSort();
		}

		return min[1];
	}

	heapSort(){
		let curIdx = 0;
		const curValue = this.heap[curIdx];

		while(true){
			let leftIdx = curIdx * 2 + 1;
			let rightIdx = curIdx * 2 + 2;

			let swapIdx = null;

			if (leftIdx < this.heap.length) {
				if (this.heap[leftIdx][0] < curValue[0] ||
					(this.heap[leftIdx][0] == curValue[0] && this.heap[leftIdx][1] < curValue[1])
				) {
					swapIdx = leftIdx;
				}
			}

			if (rightIdx < this.heap.length) {
				if (swapIdx == null) {
					if (this.heap[rightIdx][0] < curValue[0] ||
						(this.heap[rightIdx][0] == curValue[0] && this.heap[rightIdx][1] < curValue[1])
					) {
						swapIdx = rightIdx;
					}
				}else{
					if (this.heap[rightIdx][0] < this.heap[leftIdx][0] ||
						(this.heap[rightIdx][0] == this.heap[leftIdx][0] && this.heap[rightIdx][1] < this.heap[leftIdx][1])
					) {
						swapIdx = rightIdx;
					}
				}
			}

			if(swapIdx == null){
				break;
			}
			this.heap[curIdx] = this.heap[swapIdx];
			this.heap[swapIdx] = curValue;
			curIdx = swapIdx;
		}
	}

}

let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];
let heap = new Heap();
for (let order of orders) {
	order = +order;

	if (order === 0) {
		if (heap.size() > 0) {
			result.push(heap.heapPop());
		} else {
			result.push(0);
		}
	} else {
		heap.heapPush([Math.abs(order), order]);
	}
}

console.log(result.join('\n'));

