let [n, ...person] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [n, ...person] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

person.sort( (a, b) => a.split(' ')[0] - b.split(' ')[0]);
console.log(person.join('\n'));
