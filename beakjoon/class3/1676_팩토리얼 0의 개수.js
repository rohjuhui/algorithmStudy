let N = +require('fs').readFileSync('../example.txt').toString().trim();
// let N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let result = 0;
while(N >= 5){
	result += parseInt(N/5);
	N /= 5;
}

console.log(result);
