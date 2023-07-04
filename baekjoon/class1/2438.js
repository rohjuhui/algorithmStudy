let input = require('fs').readFileSync('../example.txt').toString();
console.log('input: ', input);
let cnt = Number(input);

let txt = '';
for(let i = 1; i<=cnt; i++){
	txt += '*'.repeat(i);
	if(i < cnt){
		txt+='\n';
	}
}

console.log(txt);
