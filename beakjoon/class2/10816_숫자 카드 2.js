let inputs = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +inputs.shift();
let cards = inputs.shift().toString().trim().split(' ').map( a => +a);
let M = +inputs.shift();
let numbers = inputs.shift().toString().trim().split(' ').map(a=>+a);

let card_map = new Map();
for(let card of cards){
	if(card_map.has(card)){
		card_map.set(card, card_map.get(card)+1);
	}else{
		card_map.set(card, 1);
	}
}

let result = [];
for(let num of numbers){
	if(card_map.has(num)){
		result.push(card_map.get(num));
	}else{
		result.push(0);
	}
}

console.log(result.join(' '));