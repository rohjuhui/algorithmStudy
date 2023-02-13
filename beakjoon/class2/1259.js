let inputs = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let num of inputs){
	if(Number(num) != 0){
		let reversed  = num.trim().split('').reverse().join('');

		if(reversed == num.trim() && num[0] != '0'){
			console.log('yes');
		}else{
			console.log('no');
		}
	}
}