let [n, ...person] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [n, ...person] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let ranks = [];
for(let i=0; i<n; i++){
	let rank = 1;
	for(let j=0; j<n; j++){
		if(i != j){
			let [i_weight, i_tall] = person[i].split(' ');
			let [j_weight, j_tall] = person[j].split(' ');

			if(Number(i_weight) < Number(j_weight) && Number(i_tall) < Number(j_tall)){
				rank += 1;
			}
		}
	}
	ranks.push(rank);
}

console.log(ranks.join(' '));
