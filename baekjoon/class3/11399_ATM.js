let [N, orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

orders = orders.split(' ').map((val)=>+val);

let reuslts = [];
let idx = 0;
while(idx < N){
	let time = orders[idx];
	let sum = orders[idx];

	let tmp = orders.slice(0, idx).concat(orders.slice(idx+1, N));
	tmp.sort((a, b)=> a-b);
	for(let num of tmp){
		time += num;
		sum += time;
	}
	reuslts.push(sum);
	idx++;
}

console.log(Math.min(...reuslts));