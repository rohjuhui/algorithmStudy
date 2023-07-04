let inputs = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = inputs[1].split(' ').map(val=>Number(val));
N.sort((a,b)=>a-b);
let M = inputs[3].split(' ').map(val=>Number(val));

let result = [];
for(let i of M){
	let low = 0;
	let high = N.length-1;
	let tmp = 0;
	while(low <= high){
		let mid = Math.floor((low+high)/2);
		if(N[mid] == i){
			tmp = 1;
			break;
		}else if(N[mid] > i){
			high = mid - 1;
		}else{
			low = mid + 1;
		}
	}
	result.push(tmp);
}

console.log(result.join('\n'));


/* set, has 사용도 가능 */
// let array = new Set(N);
// let result = M.map(v => array.has(v) ? 1 : 0);
