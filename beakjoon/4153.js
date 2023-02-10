let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=0; i<input.length-1; i++){
	let numbers = input[i].split(' ').map(el => parseInt(el));
	numbers.sort((a, b) => {
		return a-b;
	});

	if( numbers[0] != 0 && numbers[1] != 0 && numbers[2] !=0 &&
		(numbers[0] * numbers[0] + numbers[1] * numbers[1] == numbers[2] * numbers[2])){
		console.log('right');
	}else{
		console.log('wrong');
	}
}
