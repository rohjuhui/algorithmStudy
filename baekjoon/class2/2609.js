let inputs = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
// let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let max = Math.max(Number(inputs[0]), Number(inputs[1]));
let min = Math.min(Number(inputs[0]), Number(inputs[1]));

// 최대공약수
let calc_gcd = (num1, num2) => {
	let gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    return gcd(num1, num2);
};

// 최소공배수
let calc_lcm = (num1, num2) => {
    let lcm = (a, b) => a * b / calc_gcd(a, b);
    return lcm(num1, num2);
};

console.log(calc_gcd(max, min));
console.log(calc_lcm(max, min));

