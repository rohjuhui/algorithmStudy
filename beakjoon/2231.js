let input = require('fs').readFileSync('example.txt').toString().trim();
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let m = Number(input);
let n = 0; 

for(let i=1; i<m; i++){
	let str = i.toString();
	let cnt = str.length;

	let sum = i;
	for(let j=0; j<cnt; j++){
		sum += Number(str[j]);
	}
	if(sum == m){
		n = i;
		break;
	}
}
console.log(n);