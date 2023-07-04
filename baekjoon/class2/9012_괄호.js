let [n, ...inputs] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [n, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


let result = [];

for(let item of inputs){
	let stack = [];
	let flag = true;
	for(let i=0; i<item.length; i++){
		if(item[i] === '('){
			stack.push('(');
		}else if(item[i] === ')'){
			if(stack[stack.length-1] === '('){
				stack.pop();
			}else{
				flag = false;
				break;
			}
		}
	}

	if(flag && stack.length == 0){
		result.push('YES');
	}else{
		result.push('NO');
	}

}

console.log(result.join('\n'));