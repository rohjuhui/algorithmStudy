let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

for(let i=0; i<input.length; i++){
	let line = input[i].split(' ');
	console.log(Number(line[0]) + Number(line[1]));
}