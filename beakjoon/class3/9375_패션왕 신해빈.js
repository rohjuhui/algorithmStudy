let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

while (N--) {
	let wear = {};
	let num = +orders.shift();
	while (num--) {
		let kind = orders.shift().toString().trim().split(' ')[1];
		wear[kind] = (wear[kind] ?? 0) + 1;
	}
	
	console.log([...Object.values(wear)].reduce((acc, v) => acc*(v+1), 1) - 1);
  }
