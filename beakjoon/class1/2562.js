let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let large = 0;
let idx = 0;
for(let i=0; i<input.length; i++){
	if(large < Number(input[i])){
		large = Number(input[i]);
		idx = i+1;
	}
}
console.log(large);
console.log(idx);