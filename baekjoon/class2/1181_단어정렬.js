let [n, ...words] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [n, ...words] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

Array.from(new Set(words))
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length)
    .forEach(i => console.log(i));