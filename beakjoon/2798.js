let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);

let numbers = input[1].split(' ').map(val => parseInt(val));

let result = 0;
let abs = m;
outerLoop: for (let i = 0; i < n; i++) {
	for (let j = 1; j < n; j++) {
		for (let z = 2; z < n; z++) {
			if (numbers[i] != numbers[j] &&
				numbers[i] != numbers[z] &&
				numbers[j] != numbers[z]) {
				let k = numbers[i] + numbers[j] + numbers[z];
				if (k == m) {
					result = k;
					break outerLoop;
				}else if(m > k && abs > Math.abs(m - k)){
					abs = Math.abs(m - k);
					result = k;
				}
			}
		}
	}
}
console.log(result);
