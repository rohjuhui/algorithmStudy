let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let cnt = Number(input[0]);
let num = input[1];

let result = 0;
for(let i=0; i<cnt; i++){
	result += Number(num[i]);
}
console.log(result);

