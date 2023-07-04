let input = require('fs').readFileSync('../example.txt').toString().trim();
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();


let n = Number(input);
let i = 0;
if(n != 1){
	i = 1;
	let start = 2;
	let end = 7;
	
	while(i < n){
		if(n >= start && n <= end){
			break;
		}else{
			start += 6 * i;
			end += 6 * (i+1)
			i++;
		}
	
	}
}
console.log(i + 1);
