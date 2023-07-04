let input = require('fs').readFileSync('../example.txt').toString().trim();
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = '';
for(let i=Number(input); i>= 1; i--){
	result += i + '\n';
}
console.log(result);

/* 
- 시간초과
let num = Number(input);
for(let i=num; i>= 1; i--){
	console.log(i);
} 
*/