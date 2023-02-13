let input = require('fs').readFileSync('../example.txt').toString().split('\n');

let first_line = input[0].toString().split(' ');
let second_line = input[1].toString().split(' ');

let n = Number(first_line[0]);
let x = Number(first_line[1]);

let result = '';
for(let i of second_line){
	if(Number(i) < x){
		result += i + ' ';
	}
}

console.log(result);