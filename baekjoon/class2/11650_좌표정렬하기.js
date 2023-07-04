let [n, ...inputs] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [n, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

inputs.sort( (a, b) => a.split(' ')[1] - b.split(' ')[1])
.sort( (a, b) => a.split(' ')[0] - b.split(' ')[0]);
console.log(inputs.join('\n'));