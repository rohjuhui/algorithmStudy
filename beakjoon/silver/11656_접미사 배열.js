let S = require('fs').readFileSync('../example.txt').toString().trim();
// let S = require('fs').readFileSync('/dev/stdin').toString().trim();


let arr = [];
for(let i=0; i<S.length; i++){
    let str = S.substring(i);
    arr.push(str)
}
arr = arr.sort();
console.log(arr.join('\n'));
