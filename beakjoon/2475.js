let input = require('fs').readFileSync('example.txt').toString().split(' ');
// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let result = 0;

for(let data of input){
	let num = Number(data);
	// 제곱
	result += num ** 2;
}

// 나머지
console.log(result % 10);