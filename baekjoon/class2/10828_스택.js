let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let stack = [];
let result = [];
for(let i=0; i<Number(N); i++){
	let order = orders[i].toString().trim().split(' ')[0];
	if(order === 'push'){
		let num = Number(orders[i].toString().trim().split(' ')[1]);
		stack.push(num);
	}else if(order === 'pop'){
		if(stack.length === 0){
			result.push(-1);
		}else{
			result.push(stack.pop());
		}
	}else if(order === 'size'){
		result.push(stack.length);
	}else if(order === 'empty'){
		if(stack.length == 0){
			result.push(1);
		}else{
			result.push(0);
		}
	}else if(order === 'top'){
		if(stack.length == 0){
			result.push(-1);
		}else{
			result.push(stack[stack.length-1]);
		}
	}
}

console.log(result.join('\n'));