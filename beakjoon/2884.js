let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let hour = Number(input[0]);
let min = Number(input[1]);

let early_hour = hour;
let early_min = min - 45;

if(early_min < 0){
	early_hour = hour -1;
	early_min = 60 + (early_min);
}

if(early_hour < 0){
	early_hour = 24 + early_hour;
}

console.log(early_hour);
console.log(early_min);
