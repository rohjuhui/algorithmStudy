let [NK, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NK, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +NK.split(' ')[0];
let K = +NK.split(' ')[1];

orders = orders.map((v)=>+v);

let quotient = 0;
let result = 0;

for(let i = N-1; i>= 0; i--){

	quotient = Math.floor(K/orders[i]);

	result += quotient;
	K %= orders[i];

	if(K === 0){
		break;
	}
}

console.log(result);
