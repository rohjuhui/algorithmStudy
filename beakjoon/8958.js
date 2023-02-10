let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = Number(input[0]);

for(let i=1; i<=cnt; i++){
	let prev = input[i][0] == 'O' ? 1 : 0;
	let score = input[i][0] == 'O' ? 1 : 0;
	for(let j=1; j<input[i].length; j++){
		if(input[i][j] == 'O'){
			score += prev + 1;
			prev++;
		}else{
			prev = 0;
		}
	}
	console.log(score);
}