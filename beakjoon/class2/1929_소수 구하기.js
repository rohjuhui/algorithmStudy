let [M, N] = require('fs').readFileSync('example.txt').toString().trim().split(' ');
// let [M, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

M = Number(M);
N = Number(N);

function isPrime(num){
    if(num == 1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

for(let i=M; i<=N; i++){    
    if(isPrime(i)){
        console.log(i);
    }
}
