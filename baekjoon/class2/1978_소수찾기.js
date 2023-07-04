let [N, ...nums] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

nums = nums.toString().trim().split(' ').map(val => parseInt(val));

let prime = 0;
for(let num of nums){
	let cnt = 0;
	for(let i=1; i<=num; i++){
		if(num%i == 0){
			cnt++;
		}
	}

	if(cnt == 2){
		prime++;
	}
}

console.log(prime);