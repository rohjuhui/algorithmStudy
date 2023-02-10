let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let result = '';
if(Number(input[0]) == 1 || Number(input[0]) == 8){
	let i = 1;
	let first = Number(input[0]);
	while(i < 8){
		if(first == 1){
			if(Number(input[i-1]) + 1 == Number(input[i])){
				result = 'ascending';
				i++;
			}else{
				result = 'mixed';
				break;
			}
		}else{
			if(Number(input[i-1]) - 1 == Number(input[i])){
				result = 'descending';
				i++;
			}else{
				result = 'mixed';
				break;
			}
		}
	}
}else{
	result = 'mixed ';
}

console.log(result);