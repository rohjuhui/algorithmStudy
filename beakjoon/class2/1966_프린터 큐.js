let [cnt, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

for(let i=0; i<cnt; i++){
    let tmp = inputs.shift();
    // let size = parseInt(tmp.toString().trim().split(' ')[0]);

    let idx = parseInt(tmp.toString().trim().split(' ')[1]);
    let importance = inputs.shift().toString().trim().split(' ').map(val => parseInt(val));
   
    let cnt = 1; // 순서
    while(true){
        let item = importance.shift();
        if(idx === 0){
            if(Math.max(...importance) <= item ){
                result.push(cnt);
                break;
            }else{  
                // Math.max(...importance) > item
                importance.push(item);
                idx = importance.length -1;
            }
        }else{
            if(Math.max(...importance) <= item){
                cnt++;
                idx--;
            }else{
                // Math.max(...importance) > item
                importance.push(item);
                idx--;
            }
        }
    }
}

console.log(result.join('\n'));
