let [MN, ...colors] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let M = Number(MN.split(' ')[0]);
let N = Number(MN.split(' ')[1]);

colors = colors.map(val => val.trim('\r').split(''));

let painting = [];
let line = ['WBWBWBWB', 'BWBWBWBW'];
for(let i=0; i<=M-8; i++){
	for(let j=0; j<=N-8; j++){

		// 2가지 경우(W시작, B시작)
		for(let z=0; z<2; z++){
			let cnt = 0;
			// 8*8 정사각형
			for(let x=0; x<8; x++){
				for(let y=0; y<8; y++){
					let current = colors[i+x][j+y];
					if(current != line[(x+z)%2][y]){
						cnt++;
					}
				}
			}
			painting.push(cnt);
		}
	}
}

console.log(Math.min(...painting));
