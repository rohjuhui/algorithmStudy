let input = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
console.log(Number(input[0])*Number(input[1]));