let input = require('fs').readFileSync('../example.txt').toString();
// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
for(let i=1; i<10; i++){
	console.log(num + ' * ' + i + ' = ' + num*i);
}