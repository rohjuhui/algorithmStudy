let [N, ...numbers] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...numbers]  = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

numbers = numbers.map(a=>+a);

// 산술평균
let sum = numbers.reduce((a, b) => a+b);
console.log(Math.round(sum/N) == -0 ? 0  : Math.round(sum/N));

// 중앙값
let numbers_sort = numbers.sort((a, b)=> a - b);
let idx = Math.ceil(N/2);
console.log(numbers_sort[idx-1]);

// 최빈값
let mode_map = new Map();
for(let num of numbers){
	mode_map.set(num, (mode_map.get(num) || 0) + 1);
}
mode_map = [...mode_map].sort((a, b) => a[0] - b[0]).sort((a, b)=>b[1] - a[1]);

if(mode_map.length === 1 || mode_map[0][1] > mode_map[1][1]){
	console.log(mode_map[0][0]);
}else{
	console.log(mode_map[1][0]);
}

// 범위
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log(Math.abs(max - min));
