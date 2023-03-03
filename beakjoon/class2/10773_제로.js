let [N, ...numbers] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let stack = [];
for(let i=0; i<Number(N); i++){
	let num = Number(numbers[i]);
	if(num == 0){
        stack.pop();
    }else{
        stack.push(num);
    }
}

if(stack.length === 0){
    console.log(0);
}else{
    console.log(stack.reduce( (a,b)=>{ return a+b}));
}
