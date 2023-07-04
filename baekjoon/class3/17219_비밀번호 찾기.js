let [NM, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NM, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +NM.split(' ')[0];

let site_pw = orders.slice(0, N);
let site_info = new Map();
for(let info of site_pw){
	let site = info.toString().trim().split(' ')[0];
	let password = info.toString().trim().split(' ')[1];

	site_info.set(site, password);
}

let find = orders.slice(N);

for(let site of find){
	let key = site.toString().trim();
	console.log(site_info.get(key));
}
