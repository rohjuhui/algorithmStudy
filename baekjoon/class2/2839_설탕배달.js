let N= +require('fs').readFileSync('../example.txt').toString().trim();
// let N= +require('fs').readFileSync('/dev/stdin').toString().trim();

let cnt = 0;
while(true){
	if(N % 5 === 0){
		cnt += N /5;
		break;
	}	

	if(N < 0){
		cnt = -1;
		break;
	}

	N -= 3;
	cnt++;
}

console.log(cnt);
