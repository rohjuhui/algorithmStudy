let [NM, ...heights] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [NM, ...heights] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +NM.toString().trim().split(' ')[0];
let M = +NM.toString().trim().split(' ')[1];

heights = heights.toString().trim().split(' ').map((val)=>+val);

let min = 0;
let max = Math.max(...heights);

let mid = 0;
let H = 0;
while(min <= max){
	let sum = 0;
	mid = Math.floor((min+max)/2);

	for(let num of heights){
		if( (num-mid) > 0){
			sum += num-mid;
		}
	}

	if(sum >= M){
		if(mid > H){
			H = mid;
		}
		min = mid+1;
	}else{
		max = mid-1;
	}
}

console.log(H);
