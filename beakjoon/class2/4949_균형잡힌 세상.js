let inputs = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 마지막은 제외
inputs.pop();
let open = ['(', '['];
let close = [')', ']'];

let result = [];
for(let text of inputs){
	let stack = [];
	let flag = false;

	for(let i=0; i<text.length; i++){
		if(open.includes(text[i])){
			stack.push(text[i]);
		}else if(close.includes(text[i])){
			if(stack.pop() !== open[close.indexOf(text[i])]){
				flag = true;
				result.push('no');
				break;
			}	

		}
	}
	
	if(!flag){
		if(stack.length === 0){
			result.push('yes');
		}else{
			result.push('no');
		}
	}
}

console.log(result.join('\n'));