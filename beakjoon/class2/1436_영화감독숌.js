let N = require('fs').readFileSync('../example.txt').toString().trim();
// let N = require('fs').readFileSync('/dev/stdin').toString().trim();

let i=665;

while(N>0) {
	i++;
	if(String(i).indexOf('666') != -1){
		N -= 1;
	}
}

console.log(i);