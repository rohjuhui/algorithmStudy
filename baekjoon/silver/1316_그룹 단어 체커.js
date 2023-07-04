let [N, ...orders] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// let [N, ...orders] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

let result = 0;
for(let word of orders){
    let check = true;
    let group = [word[0]];
    for(let i=1; i<word.length; i++){
        if(group[group.length-1] == word[i]){
            continue;
        }else{
            if(group.indexOf(word[i]) == -1){
                group.push(word[i]);
            }else{
                check = false;
                break;
            }
        }

    }
    if(check) result++;
}
console.log(result);

