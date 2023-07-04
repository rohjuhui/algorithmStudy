let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let queue = [];
let result = [];
for(let i=0; i<Number(N); i++){
	let order = orders[i].toString().trim().split(' ')[0];
	if(order === 'push'){
		let num = Number(orders[i].toString().trim().split(' ')[1]);
		queue.push(num);
	}else if(order === 'pop'){
		if(queue.length == 0){
			result.push(-1);
		}else{
			result.push(queue.shift());
		}
	}else if(order === 'size'){
		result.push(queue.length);
	}else if(order === 'empty'){
		if(queue.length == 0){
			result.push(1);
		}else{
			result.push(0);
		}
	}else if(order === 'front'){
		if(queue.length == 0){
			result.push(-1);
		}else{
			result.push(queue[0]);
		}
	}else if(order === 'back'){
		if(queue.length == 0){
			result.push(-1);
		}else{
			result.push(queue[queue.length-1]);
		}
	}
}

console.log(result.join('\n'));