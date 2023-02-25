let [n, ...numbers] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [n, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

numbers = numbers.map(val=>parseInt(val));
numbers.sort((a, b)=>a-b);

console.log(numbers.join('\n'));
