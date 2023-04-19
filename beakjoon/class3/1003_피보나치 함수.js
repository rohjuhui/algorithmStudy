let [T, ...inputs] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [T, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

inputs = inputs.map((val)=>+val);

let results = [];

for(let num of inputs){
	let arr = [[1,0], [0,1]];
	if(num > 1){
		for(let j=2; j<num; j++){
			let zero_j = arr[j-1][0] + arr[j-2][0];
			let one_j = arr[j-1][1] + arr[j-2][1];

			arr.push([zero_j, one_j]);
		}
		let zero = arr[num-1][0] + arr[num-2][0];
		let one = arr[num-1][1] + arr[num-2][1];
		results.push(zero + ' ' + one);
		
	}else{
		results.push(arr[num].join(' '));

	}
}
console.log(results.join('\n'));
