let [l, str] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [l, str] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let r = 31;
let m = 1234567891;

let hash = 0;
for(let i=0; i<l; i++){
	// 영어 소문자 아스키코드 a-z > 97-122
	hash += ((str.charCodeAt(i) - 96) * Math.pow(r, i)) % m;
}
console.log(hash);