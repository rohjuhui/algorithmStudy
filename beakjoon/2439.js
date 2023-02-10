let input = require('fs').readFileSync('example.txt').toString().trim();
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let cnt = Number(input);
let result = '';

for(let i=1; i<=cnt; i++){
	result += ' '.repeat(cnt-i);
	result += '*'.repeat(i);
	if(i < cnt){
		result+='\n';
	}
}
console.log(result);