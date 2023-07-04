let [N, M] = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
// let [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

N = +N;
M = +M;

function factorial(num){
    let value = 1n;
    for(let i=1; i<num+1; i++){
        value *= BigInt(i);
    }
    return value;
}

let result = factorial(N) / (factorial(M) * factorial(N-M));
console.log(String(result));