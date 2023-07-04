let input = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let result = [];
for(let i of input){
	if(i !== ' ' && i.length > 0){
		result.push(i);
	}
}

console.log(result.length);