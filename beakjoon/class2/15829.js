let [l, str] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [l, str] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let r = 1;
let m = 1234567891;

let hash = 0;
for (let i = 0; i < l; i++) {
hash += (str.charCodeAt(i) - 96) * r;

r =(r* 31)% m ;
}
console.log(hash %m);
