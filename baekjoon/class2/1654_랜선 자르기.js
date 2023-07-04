let inputs = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [K, N] = inputs.shift().split(' ').map(val => +val);

inputs = inputs.map(val=> +val).sort();

let min = 1;
let max = Math.max(...inputs);

while(min <= max){
	let mid = parseInt((min + max)/2);
	
	let tmp = inputs.map((line)=> parseInt(line/mid)).reduce((a, b) => a+b, 0);
	if(tmp >= N){
		min = mid + 1;
	}else{
		max = mid - 1;
	}
}

console.log(max);