let [n, ...numbers] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [n, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

numbers = numbers.map(val => parseInt(val));

let result = [];
let stack = [];	
let last = 0;

while(true){
	if(numbers.length == 0){
		break;
	}

	let num = numbers.shift();

	if(stack.length == 0 || stack[stack.length-1] < num){
		for(let i=last; i<num; i++){
			stack.push(i+1);
			result.push('+');
			last = i+1;

		}
	}

	if(stack[stack.length-1] === num){
		stack.pop();
		result.push('-');
	}else{
		result = ['NO'];
			break;
	}

}

// numbers = numbers.map(val => parseInt(val));
// n = Number(n);
// let result = [];
// let arr = [];
// let stack = [];	

// for(let i=0; i<n; i++){
// 	arr.push(i+1);
// }

// for(let i=0; i<n; i++){
// 	let cnt = 1;
// 	let num = numbers[i];
	
// 	while(cnt <= n && stack[stack.length-1] !== num){
// 		stack.push(arr.shift());
// 		result.push('+');
// 		cnt++;
// 	}

// 	if(stack[stack.length-1] === num){
// 		stack.pop();
// 		result.push('-');
// 	}else{
// 		result = ['NO'];
// 		break;
// 	}
// }

console.log(result.join('\n'));