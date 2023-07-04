let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = Number(input[0]);

for(let i=1; i<=cnt; i++){
	let datas = input[i].split(' ').map(el => parseInt(el));

	let n = 1;
	let h = 0; 
	let w = 0;

	outerLoop: for(let j=1; j<=datas[1]; j++){
		for(let z=1; z<=datas[0]; z++){
			if( n == datas[2]){
				h = z;
				w = j;
				break outerLoop;
			}else{
				n++;
			}
		}
	}

	let room = '';
	if(w < 10){
		room = h.toString() + '0' + w.toString();
	}else{
		room = h.toString() + w.toString();
	}

	console.log(room);
}