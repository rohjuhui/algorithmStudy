let input = require('fs').readFileSync('../example.txt').toString().trim();
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let num = Number(input);

if(num >= 90 && num <=100){
	console.log('A');
}else if(num >= 80 && num <= 89){
	console.log('B');
}else if(num >= 70 && num <= 79){
	console.log('C');
}else if(num >= 60 && num <= 69){
	console.log('D');
}else{
	console.log('F');
}