let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let x = Number(input[0]);
let y = Number(input[1]);
let w = Number(input[2]);
let h = Number(input[3]);

let a = w - x;
let b = h - y;

console.log(Math.min(a, b, x, y));
