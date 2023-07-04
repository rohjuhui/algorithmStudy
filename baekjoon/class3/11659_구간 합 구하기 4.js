let [NM, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NM, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let numbers = orders[0].split(' ');
let sum = new Array(numbers.length+1).fill(0);

for(let i=0; i<numbers.length; i++){
	sum[i+1] = sum[i] + Number(numbers[i]);
}
let result = [];

orders.slice(1).forEach(order => {
	let i = +order.split(' ')[0];
	let j = +order.split(' ')[1];

	result.push(sum[j]-sum[i-1]);
})

console.log(result.join('\n'));