let [n, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [n, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = +n;
orders = orders.map((val)=>+val);
orders = orders.sort((a,b)=>b-a);

let exempt =0;
exempt = Math.round(n*0.15);

let arr = orders.slice(exempt, n-exempt);
let sum = arr.reduce((sum, cur) => {return sum+cur;}, 0);

// 0일 경우 Math.round(sum/arr.length): NaN 
let avg = sum==0 ? 0 : sum/arr.length;
console.log(Math.round(avg));
