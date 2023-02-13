let input = require('fs').readFileSync('../example.txt').toString().trim();
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(input);
let result = '';
for(let i=97; i<=122; i++){
	let alphabet = String.fromCharCode(i);
	result += input.indexOf(alphabet) + ' ';
}

console.log(result);