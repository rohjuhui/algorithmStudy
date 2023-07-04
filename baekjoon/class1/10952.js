let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

for(let i=0; i<input.length-1; i++){
	let line = input[i].split(' ');
	console.log(Number(line[0]) + Number(line[1]));
}