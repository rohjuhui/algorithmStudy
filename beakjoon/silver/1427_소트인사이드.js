let S= require('fs').readFileSync('/dev/stdin').toString().trim().split('');
S=S.map(val=>+val);
let sort_num=S.sort((a,b)=> b-a);
console.log(sort_num.join(''));
