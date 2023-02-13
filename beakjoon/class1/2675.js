let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let t = Number(input[0]);
for(let i=1; i<=t; i++){
	let tmp = input[i].trim().split(' ');
	let r = Number(tmp[0]);
	let s = tmp[1];
	let p = '';
	for(let j=0; j<s.length; j++){
		p += s[j].repeat(r);
	}
	console.log(p);
}
