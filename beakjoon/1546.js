let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = Number(input[0]);
let scores = input[1].split(' ').map(Number);
let max = Math.max(...scores);

let sum = 0;
for(let i of scores){
	sum += i / max *100;
}

let result = sum/cnt;
if(result % 1 === 0){
	result = result.toFixed(1);
}
console.log(result);
