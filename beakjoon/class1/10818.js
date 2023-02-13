let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = Number(input[0]);
let num = input[1].split(' ');

let min = Number(num[0]);
let max = Number(num[0]);

for(let i=1; i<cnt; i++){
	min = Math.min(min, Number(num[i]));
	max = Math.max(max, Number(num[i]));
}

console.log(min + ' ' + max);