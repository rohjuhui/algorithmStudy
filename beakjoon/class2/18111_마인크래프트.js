let inputs = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M, B]= inputs.shift().split(' ').map(a=>+a);
inputs = inputs.join(' ').split(' ').map(a=>+a);

let min_time = Number.MAX_VALUE;
let max_height = 0;

// 높이(0~256)
let heights = Array(257).fill(0);
// 해당 높이 땅의 개수
inputs.forEach(v => heights[v]++);

// 높이를 1씩 줄이면서 시간 구하기
for (let target = 256; target >= 0; target--) {
	let block = B;
	let time = 0;

	for(let h=0; h<heights.length; h++){
		// 블록 추가/제거한 개수
		block += (h - target) * heights[h];
		if(target > h){
			// 블록 추가 시간(1초)
			time += (target - h) * heights[h];
		}else{
			// 블록 제거 시간(2초)
			time += (h - target) * 2 * heights[h];
		}
	}

	if (min_time < time){
		break;	
	} 
	if (block < 0){
		continue;
	}
	if (time < min_time) {
		// 최소 시간, 높이
		min_time = time;
		max_height = target;
	}
}

console.log(min_time, max_height);