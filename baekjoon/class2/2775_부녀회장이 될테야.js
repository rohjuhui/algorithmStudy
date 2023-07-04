let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input = input.map(val=>parseInt(val));

let t = input.shift();

for(let i=0; i<t; i++){
	let k = input.shift();		// 층
	let n = input.shift();		// 호
	let apartment = [];
	 
	for (let j=0; j<=k; j++) {
		apartment.push([1]);
		for (let z=1; z<n; z++) {
			if (j == 0) {
				apartment[j].push(z + 1);
			} else {
				apartment[j].push(apartment[j][z - 1] + apartment[j - 1][z]);
			}
		}
	}

	console.log(apartment[k][n-1]);
}