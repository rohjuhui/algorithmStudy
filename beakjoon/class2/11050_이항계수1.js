let inputs = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
// let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let n = Number(inputs[0]);
let k = Number(inputs[1]);

let n_factorial = 1;
let k_factorial = 1;
let n_k_factorial = 1;

for(let i=1; i<=n; i++){
	n_factorial *= i;
}
for(let j=1; j<=k; j++){
	k_factorial *= j;
}
for(let z=1; z<=(n-k); z++){
	n_k_factorial *= z;
}

console.log(n_factorial/(k_factorial*n_k_factorial));