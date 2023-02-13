let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let d = String(a * b * c);

for(let i=0; i<=9; i++){
	let cnt = 0;
	for(let j=0; j<d.length; j++){
		if(i == Number(d[j])){
			cnt++;
		}
	}
	console.log(cnt);
}