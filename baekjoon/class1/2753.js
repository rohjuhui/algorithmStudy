let input = require('fs').readFileSync('../example.txt').toString().trim();
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let num = Number(input);

if(num%4 == 0){
	if(num%100 != 0 || num%400 == 0){
		console.log(1);
	}else{
		console.log(0);
	}
}else{
	console.log(0);
}