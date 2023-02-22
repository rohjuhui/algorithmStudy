let [N, k] = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
// let [N, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let arr =  Array(Number(N)).fill().map((v,i)=>i+1);

let i=1; 
let result = [];
while(arr.length > 0){
	if(i == Number(k)){
		result.push(arr.shift());
		i = 1;
	}else{
		let tmp = arr.shift();
		arr.push(tmp);
		i++;
	}
}

console.log('<' + result.join(', ') + '>');
