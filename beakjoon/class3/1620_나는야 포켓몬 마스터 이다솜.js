let [NM, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NM, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +NM.split(' ')[0];

let poketmons = orders.slice(0, N);
let questions = orders.slice(N);

let poketmon_map = new Map(poketmons.map((v, i) => [v.trim(), i+1]));

for(let question of questions){
	if(Number.isNaN(+question)){
		console.log(poketmon_map.get(question.trim()));
	}else{
		console.log(poketmons[+question-1]);
	}
}
