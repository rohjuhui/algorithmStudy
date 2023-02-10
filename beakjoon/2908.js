let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let a = input[0];
let b = input[1];

let first = Number(a[2] + a[1] + a[0]);
let second = Number(b[2] + b[1] + b[0]);

console.log(Math.max(first, second));