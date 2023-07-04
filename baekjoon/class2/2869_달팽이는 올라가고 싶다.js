let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let v = Number(input[2]);

let day = (v-b) / (a+b);
console.log(Math.ceil(day));