let input = require('fs').readFileSync('../example.txt').toString().trim();
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let tmp = {};
for(let i=0; i<input.length; i++){
	let alphabet = input[i].toUpperCase();
	if(tmp.hasOwnProperty(alphabet)){
		tmp[alphabet] = tmp[alphabet] + 1;
	}else{
		tmp[alphabet] = 1;
	}
}
let max = Math.max(...Object.values(tmp));
let arr = Object.keys(tmp).filter( key => tmp[key] === max);

if(arr.length > 1){
	console.log('?');
}else{
	console.log(arr[0]);
}

