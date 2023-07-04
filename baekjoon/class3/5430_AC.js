let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


let results = [];

for (let i = 0; i < orders.length; i += 3) {
	let func = orders[i].trim();
	let n = +orders[i + 1];
	let arr = orders[i + 2].trim().slice(1, -1).split(',');

	let isReverse = false;
	let isError = false;
	for (let j = 0; j < func.length; j++) {
		if (func[j] === 'R') {
			isReverse = !isReverse;
		}
		if (func[j] === 'D') {
			if (n === 0 || arr.length === 0) {
				isError = true;
				break;
			}

			if(isReverse){
				arr.pop();
			}else{
				arr.shift();
			}
		}
	}

	if (isError) {
		results.push('error');
	} else {
		if(isReverse){
			results.push('[' + arr.reverse().join(',') + ']');
		}else{
			results.push('[' + arr.join(',') + ']');
		}
	}
}


console.log(results.join('\n'));