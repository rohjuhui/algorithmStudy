let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [];

for(let i of input){
	let num = Number(i);
	let remainder = num % 42;
	if(arr.indexOf(remainder) == -1){
		arr.push(remainder);
	}
}

console.log(arr.length);