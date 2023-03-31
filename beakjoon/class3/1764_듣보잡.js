let [NM, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NM, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +NM.split(' ')[0];
orders = orders.map((v) => v.trim());
let n_arr = new Set(orders.slice(0, N));
let m_arr = orders.slice(N);

let result = [];
for(let name of m_arr){
	if(n_arr.has(name)){
		result.push(name);
	}
}

result = result.sort();

console.log(result.length);
console.log(result.join('\n'));
