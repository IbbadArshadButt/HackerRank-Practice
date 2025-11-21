/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
let n = arr.length;
let cpos = 0;
let cneg = 0;
let cz = 0;
for(let i=0; i<n; i++){
    if(arr[i] > 0){
        cpos=cpos+1;
    }
    else if(arr[i] < 0){
        cneg=cneg+1;
    }
    else if(arr[i] === 0){
        cz=cz+1;
    }
}
let r1 = cpos/n;
console.log(r1.toFixed(6));
let r2 = cneg/n;
console.log(r2.toFixed(6));
let r3 = cz/n;
console.log(r3.toFixed(6));
}