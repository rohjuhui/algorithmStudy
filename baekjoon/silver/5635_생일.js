let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sort_age = orders
.sort((a, b)=>a.split(' ')[1] - b.split(' ')[1])
.sort((a, b)=>a.split(' ')[2] - b.split(' ')[2])
.sort((a, b)=>a.split(' ')[3] - b.split(' ')[3]);

console.log(sort_age[sort_age.length-1].split(' ')[0]);
console.log(sort_age[0].split(' ')[0]);

